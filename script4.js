console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs4/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs4 = [
  {
    songName: "Adele - Easy on Me",
    filePath: "songs4/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Childish Gambino - Sober",
    filePath: "songs4/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Daniel Caeser & H.E.R - Best Part",
    filePath: "songs4/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Easily - Burno Major",
    filePath: "songs4/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "FKJ - Is Magic Gone",
    filePath: "songs4/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "H.E.R - Focus",
    filePath: "songs4/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Joji - Slow dancing in the dark",
    filePath: "songs4/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Lauv - Paris in the Rain",
    filePath: "songs4/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Pink Sweat$ - Honesty",
    filePath: "songs4/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Usher - Bad Habits",
    filePath: "songs4/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs4[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs4[i].songName;
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
      audioElement.src = `songs4/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs4[songIndex].songName;
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
  audioElement.src = `songs4/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs4[songIndex].songName;
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
  audioElement.src = `songs4/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs4[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
