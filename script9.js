console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs9/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs9 = [
  {
    songName: "AJR - Bang!",
    filePath: "songs9/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Fredo Bang - Low Ridin",
    filePath: "songs9/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Jaymes Young - Infinity",
    filePath: "songs9/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Stevie Wonder - Superstition",
    filePath: "songs9/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Tame Impala - Lucidity",
    filePath: "songs9/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "The Jam - Goind Underground",
    filePath: "songs9/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Bruce Springsteen - The River",
    filePath: "songs9/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Frank ocean - Thinking About You",
    filePath: "songs9/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tom Tom Club - Genius of Love",
    filePath: "songs9/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Baldwin - You make me wanna Dance",
    filePath: "songs9/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs9[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs9[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs9/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs9[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs9/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs9[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs9/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs9[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
