console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs10/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs10 = [
  {
    songName: "21 Savage - Alot",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "In da club - 50 cent",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Snoop Dog - Drop like it's hot",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Eminem - Without me",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Drake - God's Plan",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Migos - Mask off",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Kendrick Lamar - Money Tree",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "A$AP Rocky - Praise the Lord",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Travis Scott - Sicko Mode",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Dre & Snoop Dog - Still",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Weekend - Blinding Lights",
    filePath: "songs10/11.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Sia - chandelier",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Sia - Chandelier",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Olivia - Good 4 U",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Olivia - Happier",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Dua Lipa - levitating",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Shawn Mendes - Senorita",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Ed Sheera - Shape of You",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Post Malone- SunFlower",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Shawn Mendes - Treat you Better",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Three days Grace - Home",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Journey - Don't stop believing",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Randy Newman - You've got a friend in me",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Steppenwolf - Born to be Wild",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Journey - Highway to Hell ",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "TXT - Loser = Lovers",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Katie Sky - Monster",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Corey Taylor - Black Eyes Blue",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "ACDC - Shot in the dark",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Bether - Surrounded",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Beethoven - Fur Elise",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Chopin - Marche Funebre",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Chopin - Prelude in E Minor",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "J.S Bach - Prelue in C Major",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Mischa - Bach Cello",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Mozart - Rondo Alla Turca",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Mozart - String Serenade No.13",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Rossini William - overture Final",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tchaikovsky - Overture",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Toccata - Fugue in D major",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Ben&Ben Kathan isip",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Jireh Lim- Buko  ",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Eric Santos - I'll Nver Go",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Jed Madela - Forevermore",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Juan Karlos - Buwan",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Kamikazee - Narda",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "December Avernue - Sa Ngalan ng Pag-ibig",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "SB19 - MAPA",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Moira Dela Torre - Tagpuan ",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Moira Dela Torre- Torete",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Away from Home",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "BIDO",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Childhood Dreams",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Repeat",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Only You",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Samurai Champ",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Slow Melt",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Snowstorm in April",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Spritual State",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Violet",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Alan Jackson - Here in the real World",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Alan Jackson - Country Boy",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Perry Como- and I love you so",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Bob Seger - We've got tonight",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Jess Glynne - Take me Home",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Kenny Rogers- Lady ",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "John Denver - Leaving on a Jet Plane",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bellamy Brothers- Let your love Flow",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Neil Young - Heart of Gold",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Alan Jackson - Remember When",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "AJR - Bang!",
    filePath: "songs10/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Fredo Bang - Low Ridin",
    filePath: "songs10/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Jaymes Young - Infinity",
    filePath: "songs10/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Stevie Wonder - Superstition",
    filePath: "songs10/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Tame Impala - Lucidity",
    filePath: "songs10/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "The Jam - Goind Underground",
    filePath: "songs10/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Bruce Springsteen - The River",
    filePath: "songs10/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Frank ocean - Thinking About You",
    filePath: "songs10/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tom Tom Club - Genius of Love",
    filePath: "songs10/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Baldwin - You make me wanna Dance",
    filePath: "songs10/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Baldwin - You make me wanna Dance",
    filePath: "songs10/11.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs10[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs10[i].songName;
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
      audioElement.src = `songs10/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs10[songIndex].songName;
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
  audioElement.src = `songs10/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs10[songIndex].songName;
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
  audioElement.src = `songs10/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs10[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
