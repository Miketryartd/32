//*navigations *//
window.onscroll = function() {myFunction()};
    var navbar = document.getElementById('nav1');
    var sticky = navbar.offsetTop;

    function myFunction(){
        if(window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
            navbar.classList.toggle('expanded');
        } else {
            navbar.classList.remove('sticky');
            navbar.classList.remove('expanded');
        }
    }

//*navitagions-close*//

//* playMusic*//

 function openFunction(){
    

    

    var about0 = document.getElementById('about0');

    if (about0.style.display === 'block'){
        about0.style.dispaly = 'none';
    } else {
        about0.style.display = 'block';
    }
    
    
       
        
  




    
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
        
    }

    
    
 }
 

 function open1Function(){
    var overlay = document.getElementById('overlay');
    var bmw1 = document.getElementById('bmw');
  
    if (bmw1.style.display === 'block'){
        bmw1.style.display = 'block';
        overlay.style.dispaly = 'none';
    } else {
       


        bmw1.style.display = 'block';
        overlay.style.display = 'block';
    }

  
    var playButton11 = document.getElementById('PlayButton16');
    if (playButton11){
        playButton11.style.fontSize = '3rem';
        playButton11.style.position = 'fixed';
        playButton11.style.left = '1085px';
        playButton11.style.top = '670px';
        playButton11.style.zIndex = '11111111111111111111111111111';
        
    } else {
       

    }



   var hidden1 = document.getElementById('hidden1');
    if (hidden1.style.display === 'block'){
        hidden1.style.display = 'block';
    } else {
        hidden1.style.display = 'block';
    }
   




    
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }

}
function open2Function(){
    var hidden2 = document.getElementById('hidden2');
    var overlay1 = document.getElementById('overlay1');
    var eastside = document.getElementById('east');
    if (eastside.style.display === 'block'){
        overlay1.style.display = 'none';
        eastside.style.dispaly = 'block';
        hidden2.style.display = 'block';
    } else {
        overlay1.style.display = 'block';
        eastside.style.display = 'block';
        hidden2.style.display = 'block';
    }



    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}

function open3Function(){


    




 
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}



function open4Function(){
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}

function open5Function(){
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}






document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.getElementById("PlayButton");
    var music = document.getElementById("musics");
    
  
   
});




//* PlayMusic-close*//
//* lyrics*//


const draggableDiv = document.getElementById('hidden0');
let offsetX, offsetY, isDragging = false;

draggableDiv.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
    offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggableDiv.style.left = e.clientX - offsetX + 'px';
        draggableDiv.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});



// * cancel lyrics *//
function cancelFunction(){
    var lyric0 = document.getElementById('hidden0');
    if (lyric0.style.display === 'block'){
        lyric0.style.display = 'none';

    } else {
        lyric0.style.display = 'block';  
    }
   
}
//* cancel lyrics-cancel*//
//* lyrics-close*//
/*play-music 1*/
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.PlayButton');
    var music = document.getElementById('musics');
    var currentSrc = "";
    var buttonPlay = document.getElementById('PlayButton1');
    var buttonPlay1 = document.getElementById('PlayButton');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var newSrc = this.getAttribute('data-src');

            // Check if the new source is the same as the current source
            if (newSrc !== currentSrc) {
                // Stop the current music
                if (!music.paused) {
                   
                    music.pause();
                }
                // Set new source and controls
                music.src = newSrc;
                music.setAttribute('controls', 'controls');
                // Play the new music
                music.play();
                // Update current source
                currentSrc = newSrc;
            } else {
                // Toggle play/pause for the current music
                if (music.paused) {
                   
                    music.play();
                } else {
                    
                    music.pause();
                }
            }
        });
    });
   
   
});



 
/*play-music 1-close*/

//*play-music 2*/

//*div contents*//
function discoverFunction(){
   
   
    var discover = document.getElementById('discoverp');

    if (discover.style.display === 'block'){


        
        discover.style.display = 'none';
    } else {
        
        discover.style.display = 'block';
        
    }
}


//*div contents-close*//

//* lyric*/
function lyricFunction(){
    var hidden00 = document.getElementById('hidden0');

    if (hidden00.style.display === 'block'){
        hidden00.style.display = 'none';
    } else {
        hidden00.style.display = 'block';
    }
}

function lyric1Function(){
    var bmw = document.getElementById('bmwlyric');

    if (bmw.style.display === 'block'){
        bmw.style.display = 'none';
    } else {
        bmw.style.display = 'block';
    }
}
function lyric2Function(){
    var east = document.getElementById('eastlyric');

    if (east.style.display === 'block'){
        east.style.display = 'none';
    } else {
        east.style.display = 'block';
    }
}

/*lyric-close*/

/* cancelFunctions*/
function cancel1Function(){
    var about0 = document.getElementById('about0');
    if (about0.style.display === 'none'){
        about0.style.display = 'block';
    } else {
        about0.style.display = 'none';
    }
}

function cancel2Function(){
    var bmwlyric = document.getElementById('bmwlyric');

    if (bmwlyric.style.display === 'none'){
        bmwlyric.style.dispaly = 'block';
    } else {
        bmwlyric.style.display = 'none';
    }
}

function cancel3Function(){
    var bmw = document.getElementById('bmw');
    var overlay = document.getElementById('overlay');
 
    if (bmw.style.display === 'none'){
        overlay.style.display = 'block';
        bmw.style.display = 'block';
       

    } else {
       
        overlay.style.display = 'none';
        bmw.style.display = 'none';
    }
     var opera = document.getElementById('PlayButton1');

     if (opera){
        opera.style.fontsize = '4rem';
        opera.style.position = 'relative';
        opera.style.top = '-275px';
        opera.style.left = '680px';
        opera.style.zIndex = '1001';
     } else {
        playButton11.style.fontSize = '3.5rem';
        playButton11.style.position = 'fixed';
        playButton11.style.left = '1085px';
        playButton11.style.top = '670px';
        playButton11.style.zIndex = '11111111111111111111111111111';

     }
}
function cancel4Function(){
    



    var hidden1 = document.getElementById('hidden1');
    if (hidden1.style.display === 'none'){
        hidden1.style.display = 'block';
    } else {
        hidden1.style.display = 'none';
    }


}
function cancel5Function(){
    var overlay1 = document.getElementById('overlay1');

    var hidden25 = document.getElementById('east');
    

    if (hidden25.style.display === 'none'){
        overlay1.style.dispaly = 'block';
        hidden25.style.dispaly = 'block';
    } else {
        overlay1.style.display = 'none';
        hidden25.style.display = 'none';
    }
}

function cancel6Function(){

    var hiddenbro = document.getElementById('hidden2');
    if (hiddenbro.style.display === 'block'){
        hiddenbro.style.display = 'none';
    } else {
        hiddenbro.style.dispaly = 'none';
    }
}

function cancel7Function(){
    var eastly = document.getElementById('eastlyric');
    if (eastly.style.display === 'block'){
        eastly.style.display = 'none';
    } else {
        eastly.style.display = 'block';
    }
}

function cancel8Function() {
    var song11 = document.getElementById('song1');

    if (song11.classList.contains('visible')){
        song11.classList.remove('visible');
    } else {
        song11.classList.add('visible');
    }
    
}
function cancel10Function(){
    var halsey = document.getElementById('halsey');
    if (halsey.style.display === 'block'){
        halsey.style.display = 'none';
    } else {
        halsey.style.display = 'block';
    }
}

/*cancelFunctioncs-close */

/* open discover song1*/
var songs0 = document.getElementById('songs0');
var song1 = document.getElementById('song1');

songs0.addEventListener('click', function(){
    if (song1.classList.contains('visible')){
        song1.classList.remove('visible');
    } else {
        song1.classList.add('visible');
    }
});
   

/* open discover song1-close*/

/* button1-songs*/
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('#button1');
    var music = document.getElementById('musics');
    var currentSrc = "";
  

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var newSrc = this.getAttribute('data-src');

            // Check if the new source is the same as the current source
            if (newSrc !== currentSrc) {
                // Stop the current music
                if (!music.paused) {
                   
                    music.pause();
                }
                // Set new source and controls
                music.src = newSrc;
                music.setAttribute('controls', 'controls');
                // Play the new music
                music.play();
                // Update current source
                currentSrc = newSrc;
            } else {
                // Toggle play/pause for the current music
                if (music.paused) {
                   
                    music.play();
                } else {
                    
                    music.pause();
                }
            }
        });
    });
   
   
});


/*button1-songs-close*/

/*buttons1 - song-play-button*/
function button1Function(){
    var musics2 = document.getElementById('musics');

    if (musics2.style.display === 'none'){
        musics2.style.display = 'block';
    } else {
        musics2.style.display = 'block';
    }
}

function button2Function(){
    var musics2 = document.getElementById('musics2');

    if (musics2.style.display === 'none'){
        musics2.style.display = 'block';
    } else {
        musics2.style.display = 'block';
    }
}
/*buttons1 -song-play button-close*/
/* signupButton*/
function signupButton1(){
    var overlay2 = document.getElementById('overlay2');
    var signupcon = document.getElementById('signupcn');
    if (signupcon.style.display === 'block'){
        overlay2.style.display = 'none';
       
       
        signupcon.style.display = 'none';
        
    } else {
        overlay2.style.display = 'block'
        
        signupcon.style.display = 'block';
    }
    
}
/*signUpbUTTON-close*/
/*authentication */

/* authentication-close*/

/* threedots*/
function threeFunction(){
    var settingdots = document.getElementById('settingdots');

    if (settingdots.style.display === 'block'){
        settingdots.style.display = 'none';
    } else {
        settingdots.style.display = 'block';
    }

}
/*threedots-close*/

/* playlistButton and cart stuffs*/
const createPlaylistBtn = document.getElementById("createPlaylistBtn");
const playlist = document.getElementById("playlist");
var hiddenBtn = document.getElementById('hiddenBtn');
let playlistVisible = false;

createPlaylistBtn.addEventListener("click", function() {

    if (playlistVisible){
        playlist.innerHTML = '';
        playlistVisible = false;
    } else {
        createPlaylist();   
        playlistVisible = true;
    }
   
});


function createPlaylist() {
    const songs = [
        
        { name: "Without Me", image: "images4/halsey.jpg" },
       
    ];

    playlist.innerHTML = "";

    songs.forEach(song => {
        const listItem = document.createElement("li");
        const songImage = document.createElement("img");
        songImage.src = song.image;
        songImage.alt = song.name;
       
        listItem.appendChild(songImage);

        const songName = document.createElement("span");
        songName.id = 'spanish';
        songName.textContent = song.name;
        listItem.appendChild(songName);
        
    
        playlist.appendChild(listItem);
    });

    if (createPlaylistBtn){

    }
}

 function About(){
    var halsey = document.getElementById('halsey');
    if (halsey.style.display === 'block'){
        halsey.style.display = 'none';
    } else {
        halsey.style.display = 'block';
    }
 }
/*playlistButton and cart stuffs-close*/

/*logout*/
function logout(){
    window.location.href = 'login.html';
}

function settings(){
    var settingsac = document.getElementById('settingac');

    if (settingsac.style.display === 'block'){
        settingsac.style.display = 'none';
    } else {
        settingsac.style.display = 'block';
    }
}

function maximize(){
    var overlay3 = document.getElementById('overlay3');
    var halseymax = document.getElementById('halseymax');

    if (halseymax.style.display === 'block'){
        overlay3.style.display = 'none';
        halseymax.style.display = 'none';
    } else {
        overlay3.style.display = 'block';
        halseymax.style.display = 'block';
    }
}

function cancel22Function(){
    var halseylyric = document.getElementById('halseylyric');
    if (halseylyric.style.display === 'block'){
        halseylyric.style.display = 'none';
    } else {
        halseylyric.style.display = 'block';
    }
}

function lyricnew(){
    var halseylyric = document.getElementById('halseylyric');

    if (halseylyric.style.display === 'block'){
        halseylyric.style.display = 'none';
    } else {
        halseylyric.style.display = 'block';
    }
}
function cancelplus(){
    var halseymax = document.getElementById('halseymax');
    var overlay3 = document.getElementById('overlay3');
    if (halseymax.style.display === 'none'){
        halseymax.style.display = 'block';
        overlay3.style.display = 'block';
    } else {
        halseymax.style.display = 'none';
        overlay3.style.display = 'none';
    }
}