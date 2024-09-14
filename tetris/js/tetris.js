let config;
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
let grid;
const tetrominoSequence = [];

let playfield;

const tetrominos = {
    'I': [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
    'J': [[1,0,0],[1,1,1],[0,0,0]],
    'L': [[0,0,1],[1,1,1],[0,0,0]],
    'O': [[1,1],[1,1]],
    'S': [[0,1,1],[1,1,0],[0,0,0]],
    'Z': [[1,1,0],[0,1,1],[0,0,0]],
    'T': [[0,1,0],[1,1,1],[0,0,0]]
};

const colors = {
    'I': 'cyan', 'O': 'yellow', 'T': 'purple',
    'S': 'green', 'Z': 'red', 'J': 'blue', 'L': 'orange'
};

let count = 0;
let tetromino = getNextTetromino();
let rAF = null;
let gameOver = false;
let score = 0;
let paused = false;

// DOM elements
const mainMenu = document.getElementById('main-menu');
const pauseMenu = document.getElementById('pause-menu');
const settingsMenu = document.getElementById('settings-menu');
const gameUI = document.getElementById('game-ui');
const startGameButton = document.getElementById('start-game');
const openSettingsButton = document.getElementById('open-settings');
const resumeGameButton = document.getElementById('resume-game');
const quitGameButton = document.getElementById('quit-game');
const saveSettingsButton = document.getElementById('save-settings');
const cancelSettingsButton = document.getElementById('cancel-settings');
const rowsInput = document.getElementById('rows');
const columnsInput = document.getElementById('columns');
const rowsValue = document.getElementById('rows-value');
const columnsValue = document.getElementById('columns-value');

// Event listeners
startGameButton.addEventListener('click', startGame);
openSettingsButton.addEventListener('click', openSettings);
resumeGameButton.addEventListener('click', resumeGame);
quitGameButton.addEventListener('click', quitGame);
saveSettingsButton.addEventListener('click', saveSettings);
cancelSettingsButton.addEventListener('click', cancelSettings);
rowsInput.addEventListener('input', updateRowsValue);
columnsInput.addEventListener('input', updateColumnsValue);

function loadConfig() {
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            config = data;
            initializeGame();
        });
}

function initializeGame() {
    grid = config.gridSize;
    canvas.width = config.columns * grid;
    canvas.height = config.rows * grid;
    
    playfield = [];
    for (let row = -2; row < config.rows; row++) {
        playfield[row] = [];
        for (let col = 0; col < config.columns; col++) {
            playfield[row][col] = 0;
        }
    }

    rowsInput.value = config.rows;
    columnsInput.value = config.columns;
    updateRowsValue();
    updateColumnsValue();
}

function startGame() {
    mainMenu.classList.add('hidden');
    gameUI.classList.remove('hidden');
    resetGame();
    rAF = requestAnimationFrame(loop);
}

function openSettings() {
    mainMenu.classList.add('hidden');
    settingsMenu.classList.remove('hidden');
}

function resumeGame() {
    pauseMenu.classList.add('hidden');
    paused = false;
    rAF = requestAnimationFrame(loop);
}

function quitGame() {
    pauseMenu.classList.add('hidden');
    gameUI.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    cancelAnimationFrame(rAF);
}

function saveSettings() {
    config.rows = parseInt(rowsInput.value);
    config.columns = parseInt(columnsInput.value);
    fetch('config.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
    }).then(() => {
        initializeGame();
        settingsMenu.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    });
}

function cancelSettings() {
    settingsMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
}

function updateRowsValue() {
    rowsValue.textContent = rowsInput.value;
}

function updateColumnsValue() {
    columnsValue.textContent = columnsInput.value;
}

function resetGame() {
    gameOver = false;
    score = 0;
    count = 0;
    document.getElementById('score-value').textContent = score;
    initializeGame();
    tetromino = getNextTetromino();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSequence() {
    const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    while (sequence.length) {
        const rand = getRandomInt(0, sequence.length - 1);
        const name = sequence.splice(rand, 1)[0];
        tetrominoSequence.push(name);
    }
}

function getNextTetromino() {
    if (tetrominoSequence.length === 0) {
        generateSequence();
    }
    const name = tetrominoSequence.pop();
    const matrix = tetrominos[name];
    const col = Math.floor(playfield[0].length / 2) - Math.ceil(matrix[0].length / 2);
    const row = name === 'I' ? -1 : -2;
    return {
        name: name,
        matrix: matrix,
        row: row,
        col: col
    };
}

function rotate(matrix) {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
    );
    return result;
}

function isValidMove(matrix, cellRow, cellCol) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] && (
                cellCol + col < 0 ||
                cellCol + col >= playfield[0].length ||
                cellRow + row >= playfield.length ||
                playfield[cellRow + row][cellCol + col])
            ) {
                return false;
            }
        }
    }
    return true;
}

function placeTetromino() {
    for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {
                if (tetromino.row + row < 0) {
                    return showGameOver();
                }
                playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
            }
        }
    }

    for (let row = playfield.length - 1; row >= 0; ) {
        if (playfield[row].every(cell => !!cell)) {
            for (let r = row; r >= 0; r--) {
                for (let c = 0; c < playfield[r].length; c++) {
                    playfield[r][c] = playfield[r-1][c];
                }
            }
            score += 10;
            document.getElementById('score-value').textContent = score;
        }
        else {
            row--;
        }
    }
    tetromino = getNextTetromino();
}

function showGameOver() {
    cancelAnimationFrame(rAF);
    gameOver = true;
    context.fillStyle = 'black';
    context.globalAlpha = 0.75;
    context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
    context.globalAlpha = 1;
    context.fillStyle = 'white';
    context.font = '36px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
}

function drawGhost() {
    const ghost = {
        ...tetromino,
        row: tetromino.row
    };
    while (isValidMove(ghost.matrix, ghost.row + 1, ghost.col)) {
        ghost.row++;
    }
    context.fillStyle = 'rgba(255, 255, 255, 0.2)';
    for (let row = 0; row < ghost.matrix.length; row++) {
        for (let col = 0; col < ghost.matrix[row].length; col++) {
            if (ghost.matrix[row][col]) {
                context.fillRect((ghost.col + col) * grid, (ghost.row + row) * grid, grid - 1, grid - 1);
            }
        }
    }
}

function loop() {
    rAF = requestAnimationFrame(loop);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < config.rows; row++) {
        for (let col = 0; col < config.columns; col++) {
            if (playfield[row][col]) {
                const name = playfield[row][col];
                context.fillStyle = colors[name];
                context.fillRect(col * grid, row * grid, grid - 1, grid - 1);
            }
        }
    }

    if (tetromino) {
        drawGhost();
        if (++count > 35) {
            tetromino.row++;
            count = 0;
            if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
                tetromino.row--;
                placeTetromino();
            }
        }

        context.fillStyle = colors[tetromino.name];
        for (let row = 0; row < tetromino.matrix.length; row++) {
            for (let col = 0; col < tetromino.matrix[row].length; col++) {
                if (tetromino.matrix[row][col]) {
                    context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid - 1, grid - 1);
                }
            }
        }
    }
}

function hardDrop() {
    while (isValidMove(tetromino.matrix, tetromino.row + 1, tetromino.col)) {
        tetromino.row++;
    }
    placeTetromino();
}

document.addEventListener('keydown', function(e) {
    if (gameOver) return;
    if (e.which === 37 || e.which === 39) {
        const col = e.which === 37
            ? tetromino.col - 1
            : tetromino.col + 1;
        if (isValidMove(tetromino.matrix, tetromino.row, col)) {
            tetromino.col = col;
        }
    }
    if (e.which === 38) {
        const matrix = rotate(tetromino.matrix);
        if (isValidMove(matrix, tetromino.row, tetromino.col)) {
            tetromino.matrix = matrix;
        }
    }
    if(e.which === 40) {
        const row = tetromino.row + 1;
        if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
            tetromino.row = row - 1;
            placeTetromino();
            return;
        }
        tetromino.row = row;
    }
    if(e.which === 32) {
        hardDrop();
    }
    if(e.which === 80) { // 'P' key
        if (paused) {
            resumeGame();
        } else {
            pauseGame();
        }
    }
});

function pauseGame() {
    if (!gameOver) {
        paused = true;
        cancelAnimationFrame(rAF);
        pauseMenu.classList.remove('hidden');
    }
}

loadConfig();