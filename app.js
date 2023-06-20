let menu = document.querySelector('.menu')
let nav = document.querySelector('nav')

menu.addEventListener('click',()=>{
    nav.classList.toggle('slide')
})


const song = document.querySelector('.song')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let play = document.querySelector('.play')
let pictures = document.querySelector('.picture')
let artist_song = document.querySelector('.artist-song')
let artist_name = document.querySelector('.artist-name')
const progress = document.querySelector('.progress')

let PlayLists_index = 0;

NextSong()



song.addEventListener('loadedmetadata',()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
})


progress.addEventListener('change',()=>{
    song.currentTime = progress.value 

})

function playPause(){
    setInterval(()=>{
        progress.value   = song.currentTime

    },500)

    play.classList.toggle('pause')

    if(play.classList.contains('pause')){
        play.src = "pause.png"
        song.play()
    }else{
        play.src = "play.png"
        song.pause()
    }
}

play.addEventListener('click',()=>{

    playPause()
})


function NextSong(){

    let play_Music_naw = PlayLists[PlayLists_index]

       pictures.src = play_Music_naw.artist_pic;
       artist_song.innerHTML = play_Music_naw.Music_tittle;
       song.src = play_Music_naw.music;
       artist_name.innerHTML = play_Music_naw.artist_name;

}

next.addEventListener('click',()=>{
    PlayLists_index++

    if (PlayLists_index < PlayLists.length){
        
        song.pause()
        NextSong()
        playPause()

        
    }else{
        alert('no more song')
    }

})

prev.addEventListener('click',()=>{

    // PlayLists_index--
    // song.pause()
    //     NextSong()
    //     playPause()

    //     if(PlayLists_index < PlayLists[-1]){
    //         alert('no mp')
    //     }

    if(PlayLists_index > PlayLists.length){
        song.pause()
        NextSong()
        playPause()
    }else{
        alert('Play Next Music')

    }
})