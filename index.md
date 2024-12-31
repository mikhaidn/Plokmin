<div id="orbit-container" style="position: fixed; width: 150px; height: 150px; pointer-events: none; z-index: 1000; transform: translate(-50%, -50%);">
<iframe src="orbits/index.html" width="150" height="150" frameborder="0" scrolling="no"></iframe>
</div>

<script>
document.addEventListener('mousemove', (e) => {
    const container = document.getElementById('orbit-container');
    container.style.left = e.pageX + 'px';
    container.style.top = e.pageY + 'px';
});
</script>

## Welcome to my page of miscellaneous projects!
By: Daniel "Plokmin" Mikhail *(he/him)* 

Resume: [PDF](DanMikhailResume.pdf) [HTML](DanMikhailResume.html) [Markdown](DanMikhailResume.md) 

### Software:
1. [Elgato Stream Deck Interface](https://github.com/mikhaidn/ElGatoDriver) - Developed custom Python HID interface for Stream Deck hardware with cross-platform (MacOS, Windows) audio controls.

2. [Orbits!](orbits/index.html) - Mini webGL solar system, two planets and some moons.

3. [Down Payment Calculator](down-payment-calculator.html) - A bare-bones static webpage to estimate monthly payments based off variable home and loan parameters.

4. [Goldbach Conjecture Research](https://github.com/mikhaidn/SemiprimeCalculations) - if there is a squared integer that is not a squared distance away from a semiprime number (integer with two factors), then Goldbach's Conjecture is false.
    0. [Raw data of semiprime research](https://raw.githubusercontent.com/mikhaidn/SemiprimeCalculations/main/Summary%20of%202%5E28%20results)
    1. [OEIS: Every integer (greater than two) seems to be a squared distance away from a semiprime](https://oeis.org/A241922)
    2. [OEIS: (seemingly fininte) List of numbers that are not the sum of a square and a semiprime](https://oeis.org/A100570)


### Writing:
1. [Pre-College STEM](stemstuff.html) - An aggregation of STEM resources that a high-schooler may find useful. 

2. [Intro to Macarons](Macaron101.html) - A high level guide to making your own Macarons.

3. [Intro to the Unix Shell](LinuxTerminalBeginner.html) - A high level checklist to teaching yourself the shell.

4. [Fruit Cake](FruitCake.html) - My grandma's fruit cake recipe!

5. [(Reddit) Summit 11 Finals Lore for Non-Melee players](https://www.reddit.com/r/SSBM/comments/omxglo/summit_11_finals_lore_for_nonmelee_players/) - Documented esports narratives of 'Smash Summit 11' for newcomers




https://mikhaidn.github.io/Plokmin/

