var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;


//Determine whether the user is on a mobile device
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

//If the user is on a mobile device, set the screen width and height to the size of the screen
if (isMobile) {
    screenWidth = screen.width;
    screenHeight = screen.height;
    }
else
    {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    }

