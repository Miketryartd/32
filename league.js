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
    var signupHid = document.getElementById('signupcn');
   var overlay2 = document.getElementById('overlay2');

   if (signupHid.style.display === 'block'){
    overlay2.style.display = 'none';
    signupHid.style.display = 'none';
  
    
   } else {
    overlay2.style.display = 'block';
    signupHid.style.display = 'block';

   }
   
    

    
    
    
       
        
  




    var forEach = document.getElementById('PlayButton');
  
    
    
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
    var signupHid = document.getElementById('signupcn');
    var overlay2 = document.getElementById('overlay2');
 
    if (signupHid.style.display === 'block'){
     overlay2.style.display = 'none';
     signupHid.style.display = 'none';
   
     
    } else {
     overlay2.style.display = 'block';
     signupHid.style.display = 'block';
 
    }
    
     
       



    



   




    var forEach = document.getElementById('PlayButton1');
    
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }

}
function open2Function(){
   

    var signupHid = document.getElementById('signupcn');
    var overlay2 = document.getElementById('overlay2');
 
    if (signupHid.style.display === 'block'){
     overlay2.style.display = 'none';
     signupHid.style.display = 'none';
   
     
    } else {
     overlay2.style.display = 'block';
     signupHid.style.display = 'block';
 
    }
    
     

    var forEach = document.getElementById('PlayButton2');
   
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}

function open3Function(){

    var signupHid = document.getElementById('signupcn');
    var overlay2 = document.getElementById('overlay2');
 
    if (signupHid.style.display === 'block'){
     overlay2.style.display = 'none';
     signupHid.style.display = 'none';
   
     
    } else {
     overlay2.style.display = 'block';
     signupHid.style.display = 'block';
 
    }
    
     
    




    var forEach = document.getElementById('PlayButton3');
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}



function open4Function(){
    var forEach = document.getElementById('PlayButton4');
   
    var signupHid = document.getElementById('signupcn');
   var overlay2 = document.getElementById('overlay2');

   if (signupHid.style.display === 'block'){
    overlay2.style.display = 'none';
    signupHid.style.display = 'none';
  
    
   } else {
    overlay2.style.display = 'block';
    signupHid.style.display = 'block';

   }
   
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}

function open5Function(){
    var signupHid = document.getElementById('signupcn');
   var overlay2 = document.getElementById('overlay2');

   if (signupHid.style.display === 'block'){
    overlay2.style.display = 'none';
    signupHid.style.display = 'none';
  
    
   } else {
    overlay2.style.display = 'block';
    signupHid.style.display = 'block';

   }
   
    
    var forEach = document.getElementById('PlayButton5');
   
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
   var signupHid = document.getElementById('signupcn');
   var overlay2 = document.getElementById('overlay2');

   if (signupHid.style.display === 'block'){
    overlay2.style.display = 'none';
    signupHid.style.display = 'none';
  
    
   } else {
    overlay2.style.display = 'block';
    signupHid.style.display = 'block';

   }
   
}

//*div contents-close*//

//* lyric*/
function lyricFunction(){
    var signupHid = document.getElementById('signupcn');
   var overlay2 = document.getElementById('overlay2');

   if (signupHid.style.display === 'block'){
    overlay2.style.display = 'none';
    signupHid.style.display = 'none';
  
    
   } else {
    overlay2.style.display = 'block';
    signupHid.style.display = 'block';

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
    var music = document.getElementById('musics2');
    var currentSrc = "";
    var buttonsPlay = document.querySelector('.buttonPlay');

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
                buttonsPlay.textContent = '||';
            } else {
                // Toggle play/pause for the current music
                if (music.paused) {
                   buttonsPlay.textContent = ''
                    music.play();
                } else {
                    buttonsPlay.textContent = '||';
                    music.pause();
                }
            }
        });
    });
    music.addEventListener('play', function(){
        buttonsPlay.textContent = '||';
    });
    music.addEventListener('pause', function(){
        buttonsPlay.textContent = '▶';
    });
});
/*button1-songs-close*/

/*buttons1 - song-play-button*/
function button1Function(){
    var musics2 = document.getElementById('musics2');

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
        signupcon.classList.toggle('show');
    } else {
        overlay2.style.display = 'block'
        
        signupcon.style.display = 'block';
    }
    
}
/*signUpbUTTON-close*/
/*authentication */
function login(){
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(m => m.username === username  && m.password === password);
    if (user) {
        alert("Login succesful!");
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.dispaly = 'none';
        window.location.href = "index.html";
    } else {
        alert('Invalid username or password');
    }
}

function signup(){
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var existingUser = users.find(m => m.username === username);

    if (existingUser){
        alert("Username already exists");
    } else {
        users.push({username, password});
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign up succesful!');
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('Heading').textContent = 'Log in';
        document.getElementById('loginForm').style.display = 'block';
    }

}


/* authentication-close*/
/* new*/
function newsign(){
    var loginForm = document.getElementById('loginForm');

    if (loginForm.style.display === 'block'){
        loginForm.style.display = 'none';
    } else {
        document.getElementById('Heading').textContent = 'Log in';
        document.getElementById('signupForm').style.display = 'none';
        loginForm.style.display = 'block';
    }
}
function newsgin(){
    var signupForm = document.getElementById('signupForm');

    if (signupForm.style.display === 'block'){
        signupForm.style.display = 'none';
    } else {
        document.getElementById('Heading').textContent = 'Sign up';
        document.getElementById('loginForm').style.display = 'none';
        signupForm.style.display = 'block';


    }
}
/*new-close*/