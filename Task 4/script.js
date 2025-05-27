const songs = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    src: 'music/song1.mp3',
    cover: 'images/cover1.jpg'
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    src: 'music/song2.mp3',
    cover: 'images/cover2.jpg'
  }
];

let currentIndex = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play-btn');

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = '⏸️';
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = '⏸️';
}

// Load first song
loadSong(currentIndex);
