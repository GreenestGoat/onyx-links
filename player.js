var videoPlayerContainer = document.getElementById('video-player-container');
var video = document.getElementById('video');
var customControls = document.getElementById('custom-controls');
var controlBar = document.getElementById('control-bar')
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var timeBar = document.getElementById('time-bar');
var timeBarWrapper = document.getElementById('time-bar-wrapper')
var bufferedBar = document.getElementById('buffered-bar');
var playedBar = document.getElementById('played-bar');
var timeDisplay = document.getElementById('time-display');
var muteButton = document.getElementById('mute-button');
var volumeSlider = document.getElementById('volume-slider');
var fullscreenButton = document.getElementById('fullscreen-button');
var shrinkButton = document.getElementById('shrink-button');
var pipButton = document.getElementById('pip-button');
var isDragging = false;
var captionsButton = document.getElementById ('captions-button')
var forward30s = document.getElementById('forward-button')
var backward30s = document.getElementById('backward-button')
var skipIntroButton = document.getElementById('skip-intro-button');
var textOverlay = document.getElementById('text-overlay')
var lockButton = document.getElementById('lock-button')
var elapsedTime = document.getElementById('elapsed-time')
var remainingTime = document.getElementById('remaining-time')
var captionsEnabled = false; // Default value is true, assuming captions are initially enabled
var rightButtons = document.getElementById('right-buttons')
var volumeButtons = document.getElementById('volume-buttons')
var leftButtons = document.getElementById('left-buttons')
var shadow1 = document.getElementById('shadow1')
var shadow2 = document.getElementById('shadow2')
var shadowFull = document.getElementById('shadow-full')
var exitButton = document.getElementById('exit-button')
var qualityStat = document.getElementById('quality')
var containButton = document.getElementById('contain-button')
var coverButton = document.getElementById('cover-button')
var overlaySettings = document.getElementById('overlay')
var skipNext = document.getElementById('skip-next')
var skipPrevious = document.getElementById('skip-previous')
var clickElement = document.getElementById('click-element')
var settingsButton = document.getElementById('settings-button')
var exitContainer = document.getElementById('exit-container')
var castContainer = document.getElementById('cast-container')
var castButton = document.getElementById('cast-button')
var playMiddle = document.getElementById('play-middle')
var pauseMiddle = document.getElementById('pause-middle')
var titleLogo = document.getElementById("title-logo");
var overlayMain = document.getElementById("overlay-main");
var overlayQuality = document.getElementById("overlay-quality");
var overlaySpeed = document.getElementById("overlay-speed");
var overlayCaptions = document.getElementById("overlay-captions");
var qualitySettingsButton = document.getElementById("quality-settings-button");
var speedSettingsButton = document.getElementById("speed-settings-button");
var captionsSettingsButton = document.getElementById("captions-settings-button");
var overlayQualityHeader = document.getElementById("overlay-quality-header")
var overlaySpeedHeader = document.getElementById("overlay-speed-header")
var overlayCaptionsHeader = document.getElementById("overlay-captions-header")
var overlayMainHeader = document.getElementById("overlay-main-header")
var nextEpisodeHolder = document.getElementById('next-episode-holder');
var sessionLogoImage = document.getElementById('session-logo-image')
var sessionMovieTitle = document.getElementById('session-movie-title')
var sessionLogoContainer = document.getElementById('session-logo-container')
var skipMiddleLeft = document.getElementById('skip-middle-left');
var skipMiddleRight = document.getElementById('skip-middle-right');

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
event.preventDefault();
});


/*tippy('#shrink-button', {
  content: "Exit Fullscreen",
  arrow: false,
  placement: 'top-end',
});

tippy('#fullscreen-button', {
  content: "Fullscreen",
  arrow: false,
  placement: 'top-end',
});

tippy('#pip-button', {
  content: "picture-in-picture",
  arrow: false,
});

tippy('#settings-button', {
  content: "Settings",
  arrow: false,
});

tippy('#captions-button', {
  content: "Subtitles",
  arrow: false,
});

tippy('#play-button', {
  content: "Play",
  arrow: false,
  placement: 'top-start',
});

tippy('#pause-button', {
  content: "Pause",
  arrow: false,
  placement: 'top-start',
});

tippy('#mute-button', {
  content: "Mute",
  arrow: false,
});*/









video.addEventListener('timeupdate', function() {
  var currentTime = video.currentTime;
  var duration = video.duration;

  if (duration - currentTime <= 120) {
    nextEpisodeHolder.style.display = 'flex';
  } else {
    nextEpisodeHolder.style.display = 'none';
  }
});

qualitySettingsButton.addEventListener('click', function() {
  overlayMain.style.display = "none";
  overlayQuality.style.display = "block";
});

overlayQualityHeader.addEventListener('click', function() {
  overlayMain.style.display = "block";
  overlayQuality.style.display = "none";
})

speedSettingsButton.addEventListener('click', function() {
  overlayMain.style.display = "none";
  overlaySpeed.style.display = "block";
});

overlaySpeedHeader.addEventListener('click', function() {
  overlayMain.style.display = "block";
  overlaySpeed.style.display = "none";
})

captionsSettingsButton.addEventListener('click', function() {
  overlayMain.style.display = "none";
  overlayCaptions.style.display = "block";
});

overlayCaptionsHeader.addEventListener('click', function() {
  overlayMain.style.display = "block";
  overlayCaptions.style.display = "none";
})

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

/*tippy('#fullscreen-button', {
  content: 'Fullscreen',
  arrow: false,
});*/

// var introStartTime = 3; // Start time of the intro in seconds
// var introEndTime = 95; // End time of the intro in seconds
// var skipToTime = 95; // Time to skip to in seconds

// Save video progress when the video is played
/*video.addEventListener('play', function() { 
  localStorage.setItem('videoProgress-' + currentEpisodeIndex, video.currentTime);
  localStorage.setItem('videoIndex', currentEpisodeIndex);
  localStorage.setItem('videoProgress-' + currentEpisodeIndex, 0);
  localStorage.setItem('videoProgress', video.currentTime);
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

// Save video index and progress when the video is paused
video.addEventListener('pause', function() {
  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
  localStorage.setItem('videoProgress', video.currentTime);
  localStorage.setItem('videoProgress-' + currentEpisodeIndex, 0);
  localStorage.setItem('videoIndex', currentEpisodeIndex); 
  localStorage.setItem('videoProgress-' + currentEpisodeIndex, video.currentTime);
});

// Save video progress when the user leaves the page
window.addEventListener('beforeunload', function() {
  localStorage.setItem('videoProgress', video.currentTime);
  localStorage.setItem('videoProgress-' + currentEpisodeIndex, 0);
  localStorage.setItem('videoIndex', currentEpisodeIndex);
  localStorage.setItem('videoProgress-' + currentEpisodeIndex, video.currentTime);
});*/


document.addEventListener('DOMContentLoaded', function() {
  var SettingsButton = document.getElementById('settings-button');
  var overlay = document.getElementById('overlay');

  SettingsButton.addEventListener('click', function() {
    overlay.classList.toggle('hidden');
  });

  // Retrieve the caption state from localStorage
  captionsEnabled = localStorage.getItem('captionsEnabled') === 'true';

  // Update the caption display based on the caption state
  if (captionsEnabled) {
    video.textTracks[0].mode = 'showing';
  } else {
    video.textTracks[0].mode = 'hidden';
  }

 /* var savedIndex = parseInt(localStorage.getItem('videoIndex'));*/  
  /*var savedProgress = parseFloat(localStorage.getItem('videoProgress-' + savedIndex));*/
  
  if (!isNaN(savedIndex) && !isNaN(savedProgress)) {
    currentEpisodeIndex = savedIndex; 
    
    const currentEpisode = episodes[currentEpisodeIndex];
    video.src = currentEpisode.video;
    video.currentTime = savedProgress;
    
    showTitle.innerText = `Star Trek: The Next Generation S1 E${currentEpisode.id}`;
    episodeTitle.innerText = currentEpisode.title; 
            
     // Set captions
    const captionsTrack = video.querySelector('track[kind="captions"]');
    if (captionsTrack) {
      video.removeChild(captionsTrack);
    }       
    const newCaptionsTrack = document.createElement('track');
    newCaptionsTrack.kind = 'captions';
    newCaptionsTrack.label = 'English';  
    newCaptionsTrack.src = currentEpisode.captions;     
    video.appendChild(newCaptionsTrack);
  }
});

/*video.addEventListener('timeupdate', function() {
  localStorage.setItem('videoProgress', video.currentTime);
  localStorage.setItem('videoIndex', currentEpisodeIndex);
  if (video.currentTime >= introStartTime && video.currentTime <= introEndTime) {
    skipIntroButton.style.display = 'block';
  } else {
    skipIntroButton.style.display = 'none';
  }
});*/

// skipIntroButton.addEventListener('click', function() {
  // video.currentTime = skipToTime;
  // video.play();
  // playButton.style.display = 'none';
  // pauseButton.style.display = 'block';
// });

// 
forward30s.addEventListener('click', function() {
  video.currentTime += 10;
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
  video.play()
  updatePlayedBar();
});

backward30s.addEventListener('click', function() {
  video.currentTime -= 10;
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
  video.play()
  updatePlayedBar();
});

// Get the captions button
var captionsButton = document.getElementById('captions-button');

// Check the initial state of captions from localStorage
var captionsEnabled = localStorage.getItem('captionsEnabled') === 'true';

// Update the captions button color based on initial state
captionsButton.innerHTML = captionsEnabled ? '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-subtitles"><path d="M7 13h4"/><path d="M15 13h2"/><path d="M7 9h2"/><path d="M13 9h4"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-subtitles"><path d="M7 13h4"/><path d="M15 13h2"/><path d="M7 9h2"/><path d="M13 9h4"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>';

// Add a click event listener to the captions button
captionsButton.addEventListener('click', function() {
  if (captionsEnabled) {
    captionsEnabled = false;
    video.textTracks[0].mode = 'hidden';
    captionContainer.style.height = '0px';
    captionContainer.style.display = 'none';
    captionsButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-subtitles"><path d="M7 13h4"/><path d="M15 13h2"/><path d="M7 9h2"/><path d="M13 9h4"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>';
    captionsStyles.style.opacity = "0";
  } else {
    captionsEnabled = true;
    video.textTracks[0].mode = 'showing';
    captionContainer.style.height = 'auto';
    captionContainer.style.display = 'block';
    captionsButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-subtitles"><path d="M7 13h4"/><path d="M15 13h2"/><path d="M7 9h2"/><path d="M13 9h4"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>';
    captionsStyles.style.opacity = "1";
  }

  // Save the caption state to localStorage
  localStorage.setItem('captionsEnabled', captionsEnabled);
});


// lockButton.addEventListener('click', function() {
  // customControls.style.opacity = '0';
  // customControls.style.transition = 'bottom 0.5s ease-in-out, opacity 0.5s ease-in-out';
// })

// Hide the pause button by default
pauseButton.style.display = 'none';

var hideCursorTimer;
var isMouseMoving = false;
var isButtonClicked = false;

function hideCursor() {
    if (!video.paused && !isDragging && !isButtonClicked) {
      setTimeout(function() {
        resetHideCursorTimer();
        captionContainer.style.bottom = '55px';
        captionContainer.style.transform = 'scale(1.1)';
        captionContainer.style.transition = 'bottom 0.3s ease';
        nextEpisodeHolder.style.bottom = '55px';
        nextEpisodeHolder.style.transition = 'bottom 0.3s ease';
        sessionLogoContainer.style.opacity = '0';
        sessionLogoContainer.style.transition = 'top 0.25s ease, opacity 0.1s ease';
        castContainer.style.opacity = '0';
        castContainer.style.transition = 'top 0.25s ease, opacity 0.1s ease';
        exitContainer.style.opacity = '0';
        exitContainer.style.transition = 'top 0.25s ease, opacity 0.1s ease';
        controlBar.style.opacity = '0';
        controlBar.style.transition = 'bottom 0.25s ease, opacity 0.1s ease';
        shadowFull.style.opacity = '0';
        shadowFull.style.transition = 'bottom 0.35s ease, opacity 0.1s ease, height 0.1s ease';
        shadow2.style.height= '0px';
        shadow2.style.opacity = '0';
        shadow2.style.transition = 'bottom 0.35s ease, opacity 0.1s ease, height 0.1s ease';
        shadow1.style.height= '0px';
        shadow1.style.opacity = '0';
        shadow1.style.transition = 'bottom 0.35s ease, opacity 0.1s ease, height 0.1s ease';
        videoPlayerContainer.style.cursor = 'none';
        document.body.style.cursor = 'none';
        overlaySettings.style.opacity = "0";
      }, 3000);
    }
}

function resetHideCursorTimer() {
  clearTimeout(hideCursorTimer);
  hideCursorTimer = setTimeout(hideCursor, 4000);
}

videoPlayerContainer.addEventListener('mousemove', function () {
  if (!video.paused) {
    captionContainer.style.bottom = '95px';
    captionContainer.style.transform = 'scale(1)'
    nextEpisodeHolder.style.bottom = '102.5px';
    castContainer.style.opacity = '1';
    exitContainer.style.opacity = '1';
    sessionLogoContainer.style.opacity = '1';
    controlBar.style.opacity = '1';
    controlBar.style.bottom = '0px';
    shadow1.style.height = '125px';
    shadow1.style.opacity = '1';
    shadow1.style.bottom = '0px';
    shadow2.style.height = '125px';
    shadow2.style.opacity = '1';
    shadow2.style.top = '0px';
    shadowFull.style.opacity = '1';
    videoPlayerContainer.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
    overlaySettings.style.opacity = "1";
    isMouseMoving = true;
    resetHideCursorTimer();
    setTimeout(function() {
      isMouseMoving = false;
    }, 1000);
  }
});

videoPlayerContainer.addEventListener('mouseleave', function () {
    if (!video.paused && !isDragging && !isButtonClicked) {
      setTimeout(function() {
        resetHideCursorTimer();
        captionContainer.style.bottom = '55px';
        captionContainer.style.transform = 'scale(1.1)';
        captionContainer.style.transition = 'bottom 0.3s ease';
        nextEpisodeHolder.style.bottom = '55px';
        nextEpisodeHolder.style.transition = 'bottom 0.3s ease';
        sessionLogoContainer.style.opacity = '0';
        sessionLogoContainer.style.transition = 'top 0.25s ease, opacity 0.1s ease';
        castContainer.style.opacity = '0';
        castContainer.style.transition = 'top 0.25s ease, opacity 0.1s ease';
        exitContainer.style.opacity = '0';
        exitContainer.style.transition = 'top 0.25s ease, opacity 0.1s ease';
        controlBar.style.opacity = '0';
        controlBar.style.transition = 'bottom 0.25s ease, opacity 0.1s ease';
        shadowFull.style.opacity = '0';
        shadowFull.style.transition = 'bottom 0.35s ease, opacity 0.1s ease, height 0.1s ease';
        shadow2.style.height= '0px';
        shadow2.style.opacity = '0';
        shadow2.style.transition = 'bottom 0.35s ease, opacity 0.1s ease, height 0.1s ease';
        shadow1.style.height= '0px';
        shadow1.style.opacity = '0';
        shadow1.style.transition = 'bottom 0.35s ease, opacity 0.1s ease, height 0.1s ease';
        videoPlayerContainer.style.cursor = 'none';
        document.body.style.cursor = 'none';
        overlaySettings.style.opacity = "0";
      }, 3000);
    }
});



document.addEventListener('click', function () {
  isButtonClicked = true;
  setTimeout(function() {
    isButtonClicked = false;
  }, 1000);
});


var isDragging = false;
var touchIdentifier = null;
var isLoaded = false; 

// Add event listeners for mouse events
timeBarWrapper.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', handleDragging);
document.addEventListener('mouseup', stopDragging);

// Add event listeners for touch events
timeBarWrapper.addEventListener('touchstart', startDragging);
document.addEventListener('touchmove', handleDragging);
document.addEventListener('touchend', stopDragging);

function startDragging(event) {
  event.preventDefault();

  // Determine the touch identifier for touch events
  if (event.type === 'touchstart') {
    touchIdentifier = event.changedTouches[0].identifier;
  }

  isDragging = true;
}

function handleDragging(event) {
  event.preventDefault();

  // Check if the current event matches the touch identifier for touch events
  if (event.type === 'touchmove') {
    var touch = Array.from(event.changedTouches).find(function(t) {
      return t.identifier === touchIdentifier;
    });
    
    if (!touch) {
      return; 
    }
  }
  
  if (isDragging) {
    updatePlayedBar(getEventX(event));
  }
}

function stopDragging(event) {
  event.preventDefault();

  // Clear the touch identifier for touch events
  if (event.type === 'touchend') {
    touchIdentifier = null;
  }

  if (isDragging) {
    updateVideoTime(getEventX(event));
  }

  isDragging = false; 
}

function updatePlayedBar(mouseX) {
  var rect = timeBar.getBoundingClientRect();
  var progressBarWidth = rect.width;
  var clickX = mouseX - rect.left;
  var progressPercentage = clickX / progressBarWidth;
  playedBar.style.width = progressPercentage * 100 + '%';
}

function updateVideoTime(mouseX) {
  var rect = timeBar.getBoundingClientRect();
  var progressBarWidth = rect.width;
  var clickX = mouseX - rect.left;
  var progressPercentage = clickX / progressBarWidth;
  var currentTime = video.duration * progressPercentage;
  video.currentTime = currentTime;
}

function getEventX(event) {
  if (event.type.startsWith('touch')) {
    return event.touches[0].clientX;
  } else {
    return event.clientX;
  }
}

// Add event listener for video loadeddata event
video.addEventListener('loadeddata', function() {
  if (video.currentTime >= 30 && !isLoaded) {
    hideSpinner();
    enableSkip();
    video.play();
    isLoaded = true;
  }
});

// Add event listener for video timeupdate event
video.addEventListener('timeupdate', function() {
  if (video.currentTime >= 30 && !isLoaded) {
    hideSpinner();
    enableSkip();
    video.play();
    isLoaded = true;
  }
});


document.addEventListener('keydown', function(e) {
  switch (e.code) {
    case 'KeyP':
      if (video.currentTime >= introStartTime && video.currentTime <= introEndTime) {
        skipIntroButton.style.display = 'block';
        video.currentTime = skipToTime;
        video.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
      } else {
        skipIntroButton.style.display = 'none';
      }
      break;
    case 'KeyL':
      video.currentTime += 10;
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      video.play();
      break;
    case 'KeyJ':
      video.currentTime -= 10;
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      video.play();
      break;
    case 'ESC':
      shrinkButton.style.display = 'none';
      fullscreenButton.style.display = 'flex';
      break;
    case 'Digit1':  
      video.currentTime = video.duration * 0.1;
      break;
    case 'Digit2':  
      video.currentTime = video.duration * 0.2;
      break;
    case 'Digit3':  
      video.currentTime = video.duration * 0.3;
      break;
    case 'Digit4':  
      video.currentTime = video.duration * 0.4;
      break;
    case 'Digit5':  
      video.currentTime = video.duration * 0.5;
      break;
    case 'Digit6':  
      video.currentTime = video.duration * 0.6;
      break;
    case 'Digit7':  
      video.currentTime = video.duration * 0.7;
      break;
    case 'Digit8':  
      video.currentTime = video.duration * 0.8;
      break;
    case 'Digit9':  
      video.currentTime = video.duration * 0.9;
      break;
    case 'Digit0':
      video.currentTime = 0;
      break;
    case 'KeyK':
    case 'Enter':
    case 'Space':
      if (video.paused) {
        video.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
      } else {
        video.pause();
        captionContainer.style.bottom = '95px';
        captionContainer.style.transform = 'scale(1)'
        nextEpisodeHolder.style.bottom = '102.5px';
        castContainer.style.opacity = '1';
        exitContainer.style.opacity = '1';
        sessionLogoContainer.style.opacity = '1';
        controlBar.style.opacity = '1';
        controlBar.style.bottom = '0px';
        shadow1.style.height = '125px';
        shadow1.style.opacity = '1';
        shadow1.style.bottom = '0px';
        shadow2.style.height = '125px';
        shadow2.style.opacity = '1';
        shadow2.style.top = '0px';
        shadowFull.style.opacity = '1';
        videoPlayerContainer.style.cursor = 'auto';
        isMouseMoving = true;
        overlaySettings.style.opacity = "1";
        resetHideCursorTimer();
        setTimeout(function() {
          isMouseMoving = false;
        }, 1000);
      }
      break;
    case 'KeyC':
      if (captionsEnabled) {
        captionsEnabled = false;
        video.textTracks[0].mode = 'hidden';
        captionContainer.style.height = '0px';
        captionContainer.style.display = 'none';
        captionsButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-subtitles"><path d="M7 13h4"/><path d="M15 13h2"/><path d="M7 9h2"/><path d="M13 9h4"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>';
        captionsStyles.style.opacity = "0";
      } else {
        captionsEnabled = true;
        video.textTracks[0].mode = 'showing';
        captionContainer.style.height = 'auto';
        captionContainer.style.display = 'block';
        captionsButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-subtitles"><path d="M7 13h4"/><path d="M15 13h2"/><path d="M7 9h2"/><path d="M13 9h4"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>';
        captionsStyles.style.opacity = "1";
      }
    
      // Save the caption state to localStorage
      localStorage.setItem('captionsEnabled', captionsEnabled);
      break
    case 'KeyI':
      if (video !== document.pictureInPictureElement) {
        video.requestPictureInPicture();
        shrinkButton.style.display = 'none'
        fullscreenButton.style.display = 'block'
        pipButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-picture-in-picture-2"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>';
      } else {
        document.exitPictureInPicture();
        pipButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-picture-in-picture-2"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>';
      }
      break
    case 'ArrowLeft':
      video.currentTime -= 10;
      video.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      skipMiddleLeft.style.opacity = '1';
      setTimeout(function() {
        skipMiddleLeft.style.opacity = '0';
      }, 1500);
      updatePlayedBar();
      break;
    case 'ArrowRight':
      video.currentTime += 10;
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      skipMiddleRight.style.opacity = '1';
      setTimeout(function() {
        skipMiddleRight.style.opacity = '0';
      }, 1500);
      video.play();
      updatePlayedBar();
      break;
    // case 'Escape':
    case 'KeyF':
      captionContainer.style.bottom = '95px';
      captionContainer.style.transform = 'scale(1)'
      nextEpisodeHolder.style.bottom = '102.5px';
      castContainer.style.opacity = '1';
      exitContainer.style.opacity = '1';
      sessionLogoContainer.style.opacity = '1';
      controlBar.style.opacity = '1';
      controlBar.style.bottom = '0px';
      shadow1.style.height = '125px';
      shadow1.style.opacity = '1';
      shadow1.style.bottom = '0px';
      shadow2.style.height = '125px';
      shadow2.style.opacity = '1';
      shadow2.style.top = '0px';
      shadowFull.style.opacity = '1';
      videoPlayerContainer.style.cursor = 'auto';
      overlaySettings.style.opacity = "1";
      isMouseMoving = true;
      resetHideCursorTimer();
      setTimeout(function() {
        isMouseMoving = false;
      }, 1000);
      toggleFullscreen();
      if (!isFullscreen) {
        shrinkButton.style.display = 'none'
        fullscreenButton.style.display = 'block'
      }
      else {
        shrinkButton.style.display = 'block'
        fullscreenButton.style.display = 'none'
      }

      break;
    case 'ArrowUp':
      increaseVolume();
      break;
    case 'ArrowDown':
      decreaseVolume();
      break;
  }
});

var isFullscreen = false;

clickElement.addEventListener('dblclick', function() {
  toggleFullscreen();
});

function toggleFullscreen() {
  if (!isFullscreen) {
    if (videoPlayerContainer.requestFullscreen) {
      videoPlayerContainer.requestFullscreen();
    } else if (videoPlayerContainer.webkitRequestFullscreen) {
      videoPlayerContainer.webkitRequestFullscreen();
    } else if (videoPlayerContainer.msRequestFullscreen) {
      videoPlayerContainer.msRequestFullscreen();
    }
    captionContainer.style.bottom = '95px';
    captionContainer.style.transform = 'scale(1)'
    nextEpisodeHolder.style.bottom = '102.5px';
    castContainer.style.opacity = '1';
    exitContainer.style.opacity = '1';
    sessionLogoContainer.style.opacity = '1';
    controlBar.style.opacity = '1';
    controlBar.style.bottom = '0px';
    shadow1.style.height = '125px';
    shadow1.style.opacity = '1';
    shadow1.style.bottom = '0px';
    shadow2.style.height = '125px';
    shadow2.style.opacity = '1';
    shadow2.style.top = '0px';
    shadowFull.style.opacity = '1';
    videoPlayerContainer.style.cursor = 'auto';
    overlaySettings.style.opacity = "1";
    isMouseMoving = true;
    resetHideCursorTimer();
    setTimeout(function() {
      isMouseMoving = false;
    }, 1000);

    customControls.classList.add('fullscreen');
    isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    captionContainer.style.bottom = '95px';
    captionContainer.style.transform = 'scale(1)'
    nextEpisodeHolder.style.bottom = '102.5px';
    castContainer.style.opacity = '1';
    exitContainer.style.opacity = '1';
    sessionLogoContainer.style.opacity = '1';
    controlBar.style.opacity = '1';
    controlBar.style.bottom = '0px';
    shadow1.style.height = '125px';
    shadow1.style.opacity = '1';
    shadow1.style.bottom = '0px';
    shadow2.style.height = '125px';
    shadow2.style.opacity = '1';
    shadow2.style.top = '0px';
    shadowFull.style.opacity = '1';
    videoPlayerContainer.style.cursor = 'auto';
    isMouseMoving = true;
    overlaySettings.style.opacity = "1";
    resetHideCursorTimer();
    setTimeout(function() {
      isMouseMoving = false;
    }, 1000);

    customControls.classList.remove('fullscreen');
    isFullscreen = false;
  }
}

setInterval(function() {
  if (!document.fullscreenElement) { // Browser is not in fullscreen
    shrinkButton.style.display = 'none';
    fullscreenButton.style.display = 'flex';
  } else { // Browser is in fullscreen
    fullscreenButton.style.display = 'none';
    shrinkButton.style.display = 'flex';
  }
}, 0);

fullscreenButton.addEventListener('click', function() {
  toggleFullscreen();
  shrinkButton.style.display = 'block'
  fullscreenButton.style.display = 'none'
  captionContainer.style.bottom = '95px';
  captionContainer.style.transform = 'scale(1)'
  nextEpisodeHolder.style.bottom = '102.5px';
  castContainer.style.opacity = '1';
  exitContainer.style.opacity = '1';
  sessionLogoContainer.style.opacity = '1';
  controlBar.style.opacity = '1';
  controlBar.style.bottom = '0px';
  shadow1.style.height = '125px';
  shadow1.style.opacity = '1';
  shadow1.style.bottom = '0px';
  shadow2.style.height = '125px';
  shadow2.style.opacity = '1';
  shadow2.style.top = '0px';
  shadowFull.style.opacity = '1';
  overlaySettings.style.opacity = "1";
  videoPlayerContainer.style.cursor = 'auto';
  isMouseMoving = true;
  resetHideCursorTimer();
  setTimeout(function() {
    isMouseMoving = false;
  }, 1000);
});

shrinkButton.addEventListener('click', function() {
  toggleFullscreen();
  shrinkButton.style.display = 'none'
  fullscreenButton.style.display = 'block'
  captionContainer.style.bottom = '95px';
  captionContainer.style.transform = 'scale(1)'
  nextEpisodeHolder.style.bottom = '102.5px';
  castContainer.style.opacity = '1';
  exitContainer.style.opacity = '1';
  sessionLogoContainer.style.opacity = '1';
  controlBar.style.opacity = '1';
  controlBar.style.bottom = '0px';
  shadow1.style.height = '125px';
  shadow1.style.opacity = '1';
  shadow1.style.bottom = '0px';
  shadow2.style.height = '125px';
  shadow2.style.opacity = '1';
  shadow2.style.top = '0px';
  shadowFull.style.opacity = '1';
  overlaySettings.style.opacity = "1";
  videoPlayerContainer.style.cursor = 'auto';
  isMouseMoving = true;
  resetHideCursorTimer();
  setTimeout(function() {
    isMouseMoving = false;
  }, 1000);
})

document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement) {
    customControls.classList.remove('fullscreen');
    isFullscreen = false;
  }
});

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
  }
});

pauseButton.addEventListener('click', function() {
  if (!video.paused) {
    video.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
  }
});

setInterval(function() {
  if (video.paused) {
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
    captionContainer.style.bottom = '95px';
    captionContainer.style.transform = 'scale(1)'
    nextEpisodeHolder.style.bottom = '102.5px';
    castContainer.style.opacity = '1';
    exitContainer.style.opacity = '1';
    sessionLogoContainer.style.opacity = '1';
    controlBar.style.opacity = '1';
    controlBar.style.bottom = '0px';
    shadow1.style.height = '125px';
    shadow1.style.opacity = '1';
    shadow1.style.bottom = '0px';
    shadow2.style.height = '125px';
    shadow2.style.opacity = '1';
    shadow2.style.top = '0px';
    shadowFull.style.opacity = '1';
    videoPlayerContainer.style.cursor = 'auto';
    overlaySettings.style.opacity = "1";
    isMouseMoving = true;
    resetHideCursorTimer();
    setTimeout(function() {
      isMouseMoving = false;
    }, 1000);
  } else {
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
  }
}, 0);

// textOverlay.addEventListener('click', function() {
  // if (video.paused) {
    // video.play();
    // playButton.style.display = 'none';
    // pauseButton.style.display = 'block';
  // } else {
    // video.pause();
    // pauseButton.style.display = 'none';
    // playButton.style.display = 'block';
  // }
// })

video.addEventListener('timeupdate', function() {
  var bufferedEnd = video.buffered.end(video.buffered.length - 1);
  bufferedBar.style.width = (bufferedEnd / video.duration) * 100 + '%';
  playedBar.style.width = (video.currentTime / video.duration) * 100 + '%';
  timeDisplay.textContent = formatTime(Math.floor(video.currentTime)) + ' / ' + formatTime(Math.floor(video.duration));
});

timeBar.addEventListener('click', function(e) {
  var rect = timeBar.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var percentage = x / timeBar.offsetWidth;
  playedBar.style.width = percentage * 100 + '%';
  video.currentTime = percentage * video.duration;
});

var volumeSlider = document.getElementById('volume-slider');
var muteButton = document.getElementById('mute-button');

// Load saved volume value from browser storage
var savedVolume = localStorage.getItem('volume');
if (savedVolume) {
  setVolume(savedVolume);
}

volumeSlider.addEventListener('input', function() {
  var volume = parseFloat(volumeSlider.value);
  setVolume(volume);
});

function increaseVolume() {
  var newVolume = Math.min(video.volume + 0.001, 1);
  setVolume(newVolume);
}

function decreaseVolume() {
  var newVolume = Math.max(video.volume - 0.001, 0);
  setVolume(newVolume);
}

function setVolume(volume) {
  video.volume = volume;
  volumeSlider.value = volume;

  // Save volume value to browser storage
  localStorage.setItem('volume', volume);

  if (volume <= 0) {
    muteButton.innerHTML = '<svg width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>';
  } else if (volume <= 0.5) {
    muteButton.innerHTML = '<svg width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-1"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  } else {
    muteButton.innerHTML = '<svg width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
  }
}



const captionsStyles = document.createElement('div');
captionsStyles.id = 'captions-styles';
customControls.appendChild(captionsStyles);

const captionContainer = document.createElement('div');
captionContainer.id = 'captionContainer';
captionsStyles.appendChild(captionContainer);

video.addEventListener('timeupdate', () => {
  const activeCues = video.textTracks[0].activeCues;
  if (activeCues.length > 0) {
    captionContainer.style.display = 'block';
    captionContainer.style.height = 'auto';
    captionContainer.textContent = activeCues[0].text;
    captionContainer.style.backgroundColor = 'rgba(0, 0, 0, .68)';
  } else {
    captionContainer.style.display = 'none';
    captionContainer.style.height = '0px';
    captionContainer.style.backgroundColor = 'transparent';
    captionContainer.textContent = '';
  }
});

var elapsedTime = document.getElementById('elapsed-time');
var remainingTime = document.getElementById('remaining-time');

function updateTime() {
  if (isNaN(video.duration)) {
    elapsedTime.innerHTML = '0:00';
    remainingTime.innerHTML = '0:00';
    return;
  }

  var totalSeconds = Math.floor(video.duration);
  var elapsedSeconds = Math.floor(video.currentTime);

  var elapsedFormatted = formatTime(elapsedSeconds);
  var totalFormatted = formatTime(totalSeconds);

  elapsedTime.innerHTML = elapsedFormatted;
  remainingTime.innerHTML = totalFormatted;
}

setInterval(updateTime, 0);

function formatTime(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = Math.floor(seconds % 60);

  var formattedTime = '';
  if (hours > 0) {
    formattedTime += hours + ':';
  }
  formattedTime += (minutes < 10 ? '0' : '') + minutes + ':';
  formattedTime += (remainingSeconds < 10 ? '0' : '') + remainingSeconds;

  return formattedTime;
}

pipButton.addEventListener('click', function() {
  if (video !== document.pictureInPictureElement) {
    video.requestPictureInPicture();
    shrinkButton.style.display = 'none'
    fullscreenButton.style.display = 'block'
  } else {
    document.exitPictureInPicture();
  }
});

// Event listener for 'leavepictureinpicture' event
video.addEventListener('leavepictureinpicture', function() {
  updatePiPIcon(false);
});

// Event listener for 'enterpictureinpicture' event
video.addEventListener('enterpictureinpicture', function() {
  updatePiPIcon(true);
});

function updatePiPIcon(inPiPMode) {
  pipButton.innerHTML = getPiPIcon(inPiPMode);
}

function getPiPIcon(inPiPMode) {
  if (inPiPMode) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-picture-in-picture-2"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>';
  } else {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-picture-in-picture-2"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (!('pictureInPictureEnabled' in document)) {
    // Browser does not support PiP
    pipButton.style.display = 'none';
  }
});

clickElement.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
    playMiddle.style.opacity = '0';
    playMiddle.style.transform = 'scale(0.4)';
    playMiddle.style.transition = 'opacity 0.0s ease, transform 0.0s ease';
    pauseMiddle.style.transition = 'opacity 0.12s ease, transform 0.2s ease';
    pauseMiddle.style.opacity = '1';
    pauseMiddle.style.transform = 'scale(1)';
    
    setTimeout(function() {
      pauseMiddle.style.opacity = '0';
      pauseMiddle.style.transform = 'scale(0.4)';
    }, 1500);
  } else {
    video.pause();
    playMiddle.style.opacity = '1';
    playMiddle.style.transform = 'scale(1)';
    playMiddle.style.transition = 'opacity 0.12s ease, transform 0.2s ease';
    pauseMiddle.style.transition = 'opacity 0.0s ease, transform 0.0s ease';
    pauseMiddle.style.opacity = '0';
    pauseMiddle.style.transform = 'scale(0.4)';
    
    setTimeout(function() {
      playMiddle.style.opacity = '0';
      playMiddle.style.transform = 'scale(0.4)';
    }, 1500);
    captionContainer.style.bottom = '95px';
    captionContainer.style.transform = 'scale(1)'
    nextEpisodeHolder.style.bottom = '102.5px';
    castContainer.style.opacity = '1';
    exitContainer.style.opacity = '1';
    sessionLogoContainer.style.opacity = '1';
    controlBar.style.opacity = '1';
    controlBar.style.bottom = '0px';
    shadow1.style.height = '125px';
    shadow1.style.opacity = '1';
    shadow1.style.bottom = '0px';
    shadow2.style.height = '125px';
    shadow2.style.opacity = '1';
    shadow2.style.top = '0px';
    shadowFull.style.opacity = '1';
    videoPlayerContainer.style.cursor = 'auto';
    overlaySettings.style.opacity = "1";
    isMouseMoving = true;
    resetHideCursorTimer();
    setTimeout(function() {
      isMouseMoving = false;
    }, 1000);
  }
});


window.addEventListener('load', video.play());

const statsButton = document.getElementById('stats-button');
const statsContainer = document.getElementById('stats-container');
const statsState = document.getElementById('stats-state')

function toggleStats() {
  if (statsContainer.style.display === "none") {
    statsState.textContent = "On";
    statsContainer.style.display = "flex";
  } else {
    statsContainer.style.display = "none";
    statsState.textContent = "Off";
  }
}

statsButton.addEventListener('click', function() {
  toggleStats();
});

const loopButton = document.getElementById('loop-button');
const loopState = document.getElementById('loop-state');

function toggleLoop() {
  if (!video.loop) {
    video.loop = true;
    loopState.textContent = "On";
  } else {
    video.loop = false;
    loopState.textContent = "Off";
  }
}

loopButton.addEventListener('click', function() {
  toggleLoop();
});

const video = document.getElementById('video');
const spinner = document.querySelector(".spinner");
let currentEpisodeIndex = localStorage.getItem('videoIndex') || 0;
const liveState = document.getElementById('live-state');
const liveStateDot = document.getElementById('live-state-dot');
const timeBreaker = document.getElementById('time-breaker');

function initApp() {
  if (Hls.isSupported()) {
    initPlayer();
  } else {
    console.error('HLS is not supported!');
  }
}

async function initPlayer() {
  const hls = new Hls();
  hls.attachMedia(video);

  function updateStatsUI() {
    const stats = hls.stats;
    const formattedStats = formatStats(stats);
    statsContainer.innerHTML = formattedStats;
  }

  setInterval(updateStatsUI, 1000); // Update every 1 second

  window.hls = hls;

  hls.on(Hls.Events.ERROR, onErrorEvent);

  try {
    await hls.loadSource(manifestUri);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      const isLive = hls.levels[hls.currentLevel].details.live;

      if (isLive) {
        liveState.style.display = 'flex';
        liveStateDot.style.display = 'flex';
        remainingTime.style.display = 'none';
        elapsedTime.style.display = 'none';
        timeBreaker.style.display = 'none';
      } else {
        liveState.style.display = 'none';
        liveStateDot.style.display = 'none';
        remainingTime.style.display = 'flex';
        elapsedTime.style.display = 'flex';
        timeBreaker.style.display = 'flex';
      }
    });
  } catch (e) {
    onError(e);
  }

  window.addEventListener("load", showSpinner);
  video.addEventListener("waiting", showSpinner);
  video.addEventListener("playing", hideSpinner, video.play());

  video.addEventListener("loadeddata", function() {
    video.addEventListener("playing", function() {
      hideSpinner();
      enableSkip();
    });
    
    video.play();
  });

  // Rest of the code...
}

// The rest of the code remains the same

document.addEventListener('DOMContentLoaded', initApp);

/*const manifestUri = video.src;

const spinner = document.querySelector(".spinner");
let currentEpisodeIndex = localStorage.getItem('videoIndex') || 0;
const liveState = document.getElementById('live-state');
const liveStateDot = document.getElementById('live-state-dot');
const timeBreaker = document.getElementById('time-breaker');

//const savedTime = localStorage.getItem('videoTime');

function initApp() {
  shaka.polyfill.installAll();

  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  // Function to format the stats object into an HTML list
  function formatStats(stats) {
    // Exclude state history and switch history from the stats object
    const { stateHistory, switchHistory, ...filteredStats } = stats;
  
    let html = '<ul>';
    for (const key in filteredStats) {
      html += `<li>${key}: ${filteredStats[key]}</li>`;
    }
    html += '</ul>';
    return html;
  }

  // Update the UI with the stats in real-time
  function updateStatsUI() {
    const stats = player.getStats();
    const formattedStats = formatStats(stats);
    statsContainer.innerHTML = formattedStats;
  }

  // Call the updateStatsUI function periodically
  setInterval(updateStatsUI, 1000); // Update every 1 second

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');

    // Get the available video tracks/resolutions from the manifest.
    const tracks = player.getVariantTracks();

    // Sort tracks in descending order based on height.
    tracks.sort((a, b) => b.height - a.height);

    const autoButton = document.createElement('button');
    var qualityState = document.getElementById("quality-state")
    autoButton.id = 'autoButton';
    autoButton.innerHTML = `
    <div id="left-items">
      Auto
    </div>
    `;
    autoButton.addEventListener('click', () => {
      // Enable auto mode for adaptive streaming.
      player.configure({ abr: { enabled: true } });
      qualityState.textContent = 'auto';
    });
    overlayQuality.appendChild(autoButton);

    tracks.forEach((track) => {
      const resolutionButton = document.createElement('button');
      resolutionButton.id = `resolutionButton${track.height}`;
      resolutionButton.innerHTML = `
        <div id="left-items">
          ${track.height}p
        </div>
      `;
      resolutionButton.addEventListener('click', () => {
        // Change to the selected resolution.
        player.selectVariantTrack(track, true);
        qualityState.textContent = track.height + 'p';
      });
      overlayQuality.appendChild(resolutionButton);
    });

    const isLive = player.isLive();

    // Display or hide the 'live-state' element based on whether the manifest is live
    if (isLive) {
      liveState.style.display = 'flex';
      liveStateDot.style.display = 'flex';
      remainingTime.style.display = 'none';
      elapsedTime.style.display = 'none';
      timeBreaker.style.display = 'none';
    } else {
      liveState.style.display = 'none';
      liveStateDot.style.display = 'none';
      remainingTime.style.display = 'flex';
      elapsedTime.style.display = 'flex';
      timeBreaker.style.display = 'flex';
    }
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }

  window.addEventListener("load", showSpinner);
  // Event listener for video buffering
  video.addEventListener("waiting", showSpinner);

  // Event listener for video playing
  video.addEventListener("playing", hideSpinner, video.play());

  video.addEventListener("loadeddata", function() {
    video.addEventListener("playing", function() {
      hideSpinner();
      enableSkip();
    });
    
    video.play();
  });

  // Rest of the code...
}*/

function onErrorEvent(event) {
  onError(event.detail);
}

function onError(error) {
  console.error('Error code:', error.code, 'object:', error);
}

function enableSkip() {
  video.play()
  backward30s.style.opacity = "1";
  forward30s.style.opacity = "1";
  forward30s.style.pointerEvents = "all";
  forward30s.style.scale = "1";
  backward30s.style.scale = "1";
  backward30s.style.pointerEvents = "all";
  skipNext.style.scale = "1";
  skipNext.style.opacity = "1";
  skipPrevious.style.scale = "1";
  skipPrevious.style.opacity = "1";
  skipNext.style.pointerEvents = "all";
  skipPrevious.style.pointerEvents = "all";
  timeBarWrapper.style.pointerEvents = 'all';
  playedBar.style.display = "block";
  shadowFull.style.backdropFilter = "none";
  captionsStyles.style.display = "flex";
  captionContainer.style.display = "flex";
  captionContainer.style.height = "auto"
  captionsButton.style.display = "flex";
  settingsButton.style.display = "flex";
  clickElement.style.display = "flex";
  clickElement.style.pointerEvents = "all";
  video.style.objectFit = "contain";
  if (!('pictureInPictureEnabled' in document)) {
    // Browser does not support PiP
    pipButton.style.display = 'none';
  } else {
    pipButton.style.display = 'flex';
  }
}

/*function showLeftButtons() {
  playButton.style.display = "none";
  pauseButton.style.display = "block";
  backward30s.style.marginright = "0px";
  forward30s.style.marginLeft = "0px";
}

function hideLeftButtons() {
  backward30s.style.marginright = "88px";
  forward30s.style.marginLeft = "88px";
  playButton.style.display = "none";
  pauseButton.style.display = "none";
}*/

function showSpinner() {
  //backward30s.style.marginright = "88px";
  //forward30s.style.marginLeft = "88px";
  spinner.style.display = "block";
  captionContainer.style.bottom = '95px';
  captionContainer.style.transform = 'scale(1)'
  nextEpisodeHolder.style.bottom = '102.5px';
  castContainer.style.opacity = '1';
  exitContainer.style.opacity = '1';
  sessionLogoContainer.style.opacity = '1';
  controlBar.style.opacity = '1';
  controlBar.style.bottom = '0px';
  shadow1.style.height = '125px';
  shadow1.style.opacity = '1';
  shadow1.style.bottom = '0px';
  shadow2.style.height = '125px';
  shadow2.style.opacity = '1';
  shadow2.style.top = '0px';
  shadowFull.style.opacity = '1';
  videoPlayerContainer.style.cursor = 'auto';
  isMouseMoving = true;
  overlaySettings.style.opacity = "1";
  resetHideCursorTimer();
  setTimeout(function() {
    isMouseMoving = false;
  }, 1000);
  //pauseButton.style.opacity = "0";
  //pauseButton.style.pointerEvents = "none";
  //playButton.style.opacity = "0";
  //playButton.style.pointerEvents = "none";
  //hideLeftButtons();
}

function hideSpinner() {
  //backward30s.style.marginright = "5px";
  //forward30s.style.marginLeft = "5px";
  spinner.style.display = "none";
  //playButton.style.opacity = "1";
  //playButton.style.pointerEvents = "all";
  //pauseButton.style.opacity = "1";
  //pauseButton.style.pointerEvents = "all";
  //showLeftButtons();
  video.play();
}

video.addEventListener("progress", function() {
  if (video.buffered.length > 0) {
    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
    const bufferedWidth = (bufferedEnd / video.duration) * 100 + "%";
    bufferedBar.style.width = bufferedWidth;
  }
});

/*setInterval(function() {
  localStorage.setItem('videoTime', video.currentTime);
}, 1000);*/

document.addEventListener('DOMContentLoaded', initApp);

// Initial setup with the first episode
/*if (savedTime) {
  video.currentTime = parseFloat(savedTime);
}*/

exitButton.addEventListener('click', function() {
  window.history.back();
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

const thumbnailContainer = document.getElementById('thumbnail-container');
const thumbnailImages = {}; // Cache for storing thumbnail images

// Define the desired dimensions for the thumbnail image
const thumbnailWidth = 'auto'; // Replace with your desired width
const thumbnailHeight = 154; // Replace with your desired height

// Function to load all thumbnail images and cache them
async function loadAllThumbnailImages() {
  let thumbnailIndex = 1;
  let totalThumbnails = 0;

  while (true) {
    try {
      const thumbnailImage = new Image();
      thumbnailImage.src = `//output_${thumbnailIndex.toString().padStart(3, '0')}.webp`; // Assumes thumbnail filenames follow the pattern output_001.jpg, output_002.jpg, etc.

      await new Promise((resolve, reject) => {
        thumbnailImage.onload = resolve;
        thumbnailImage.onerror = reject;
      });

      thumbnailImages[thumbnailIndex] = thumbnailImage;
      totalThumbnails++;
      thumbnailIndex++;
    } catch (error) {
      break;
    }
  }

  return totalThumbnails;
}

// Load all thumbnail images into the cache on page load
loadAllThumbnailImages().then((totalThumbnails) => {
  // Use the totalThumbnails value here
  console.log(`Total thumbnails: ${totalThumbnails}`);
});

// Function to get a cached thumbnail image
function getThumbnailImage(thumbnailIndex) {
  return thumbnailImages[thumbnailIndex];
}

timeBarWrapper.addEventListener('mousemove', (event) => {
  // Calculate the position of the mouse relative to the time bar
  const timeBarRect = timeBarWrapper.getBoundingClientRect();
  const mouseX = event.clientX - timeBarRect.left;

  // Check if the mouse is within the time bar range
  if (mouseX >= 0 && mouseX <= timeBarRect.width) {
    // Calculate the timestamp based on the mouse position
    const videoDuration = video.duration; // Replace with the actual video duration in seconds
    const timestamp = (mouseX / timeBarRect.width) * videoDuration;

    // Calculate the thumbnail index based on the timestamp
    const thumbnailIndex = Math.floor(timestamp);

    // Get the thumbnail image from the cache
    const thumbnailImage = getThumbnailImage(thumbnailIndex);

    // Set the dimensions of the thumbnail image
    thumbnailImage.style.width = `${thumbnailWidth}px`;
    thumbnailImage.style.height = `${thumbnailHeight}px`;

    // Calculate the position of the mouse relative to the thumbnail container
    let thumbnailContainerLeft = mouseX - thumbnailContainer.offsetWidth / 2;

    // Limit the thumbnail container to the edges of the time bar wrapper
    thumbnailContainerLeft = Math.max(thumbnailContainerLeft, 0);
    thumbnailContainerLeft = Math.min(thumbnailContainerLeft, timeBarRect.width - thumbnailContainer.offsetWidth);

    // Update the thumbnail container position
    thumbnailContainer.style.left = `${thumbnailContainerLeft}px`;

    // Show the thumbnail container
    thumbnailContainer.style.display = 'block';

    // Replace the thumbnail image content with the new image
    while (thumbnailContainer.firstChild) {
      thumbnailContainer.firstChild.remove();
    }
    thumbnailContainer.appendChild(thumbnailImage);
  } else {
    // Hide the thumbnail container if the mouse is outside the time bar range
    thumbnailContainer.style.display = 'none';
  }
});

// Event listener for mouseleave on the time bar
timeBarWrapper.addEventListener('mouseleave', () => {
  // Check if the time bar wrapper is not active
  const isTimeBarWrapperActive = timeBarWrapper.matches(':active');
  
  if (!isTimeBarWrapperActive) {
    // Hide the thumbnail container when the mouse leaves the time bar
    thumbnailContainer.style.display = 'none';
  }
});
