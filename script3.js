console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs3/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs3 = [
  {
    songName: "Three days Grace - Home",
    filePath: "songs3/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Journey - Don't stop believing",
    filePath: "songs3/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Randy Newman - You've got a friend in me",
    filePath: "songs3/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Steppenwolf - Born to be Wild",
    filePath: "songs3/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Journey - Highway to Hell ",
    filePath: "songs3/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "TXT - Loser = Lovers",
    filePath: "songs3/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Katie Sky - Monster",
    filePath: "songs3/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Corey Taylor - Black Eyes Blue",
    filePath: "songs3/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "ACDC - Shot in the dark",
    filePath: "songs3/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Bether - Surrounded",
    filePath: "songs3/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs3[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs3[i].songName;
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
      audioElement.src = `songs3/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs3[songIndex].songName;
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
  audioElement.src = `songs3/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs3[songIndex].songName;
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
  audioElement.src = `songs3/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs3[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
