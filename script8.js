console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs8/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs8 = [
  {
    songName: "Alan Jackson - Here in the real World",
    filePath: "songs8/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Alan Jackson - Country Boy",
    filePath: "songs8/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Perry Como- and I love you so",
    filePath: "songs8/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Bob Seger - We've got tonight",
    filePath: "songs8/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Jess Glynne - Take me Home",
    filePath: "songs8/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Kenny Rogers- Lady ",
    filePath: "songs8/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "John Denver - Leaving on a Jet Plane",
    filePath: "songs8/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bellamy Brothers- Let your love Flow",
    filePath: "songs8/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Neil Young - Heart of Gold",
    filePath: "songs8/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Alan Jackson - Remember When",
    filePath: "songs8/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs8[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs8[i].songName;
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
      audioElement.src = `songs8/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs8[songIndex].songName;
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
  audioElement.src = `songs8/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs8[songIndex].songName;
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
  audioElement.src = `songs8/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs8[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
