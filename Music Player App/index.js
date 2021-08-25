const music=document.querySelector("audio");
        const img=document.querySelector("img");
        const play=document.getElementById('play');
        const artist=document.getElementById('artist');
        const title=document.getElementById('title');
        const prev=document.getElementById('prev');
        const next=document.getElementById('next');

        const song=[
            {
            name:"Baarish.mp3",
            title:"aa",
            artist:"zz",
        },
            {
            name:"Itni Si Baat.mp3",
            title:"bb",
            artist:"yy",
        },
            {
            name:"Kaabil.mp3",
            title:"Kaabil Hoon",
            artist:"Jubin Nautiyal",
        },
    ]

    let isPlaying=false;

    const playMusic = ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anim");
};
const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anim");
};
play.addEventListener("click", ()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }  
});

const loadsong = (song)=> {
title.text.Content = song.title;
artist.text.Content = song.artist;
music.src="music/"+song.name + ".mp3";
img.src="img/"+song.name + ".jpg";
};

songindex=0;
const nextSong=()=>{
    songindex=(songindex +1)%(song.length);
    loadsong(song[songindex]);
    playMusic();
}
const prevSong=()=>{
    songindex=(songindex-1)%(song.length);
    loadsong(song[songindex]);
    playMusic();
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);