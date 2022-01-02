window.onSpotifyWebPlaybackSDKReady = () => {
  // You can now initialize Spotify.Player and use the SDK
  const token = 'BQCgp5SJJXabt1sWdPPFXyIOfl-liKLLDEVv8hXX9cLHLDSByXtLYyv6cgBRGozLmiEEuG7oNtbeRG1dmKKnkCf5Z09h7B_k5uFv5Vq8BacTfUUqxC_j44pq9x1qH48iEqotB2jLcgVonA1eWWecoqIpVT-2AxUERiA-C_KhvDuUXSpXRcmh5WQjvDmdxsfuKVQ67GFmCTL-NrFTLEKKY0';
  const player = new Spotify.Player({
    name: 'Virtual Speaker',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });
// Ready
player.addListener('ready', ({ device_id }) => {
  console.log('Ready with Device ID', device_id);
});

// Not Ready
player.addListener('not_ready', ({ device_id }) => {
  console.log('Device ID has gone offline', device_id);
});

player.addListener('initialization_error', ({ message }) => { 
    console.error(message);
});

player.addListener('authentication_error', ({ message }) => {
    console.error(message);
});

player.addListener('account_error', ({ message }) => {
    console.error(message);
});        
player.connect();

document.getElementById('togglePlay').onclick = function() {
  console.log("hello")
  player.togglePlay();
};

}
