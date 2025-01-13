document.addEventListener("DOMContentLoaded", () => {
  const mainVideo = document.getElementById("main-video");
  const videoItems = document.querySelectorAll(".video-item");

  // Set the default size to 'small'
  setSize("small");

  // Playlist video click event
  videoItems.forEach((item) => {
    item.addEventListener("click", () => {
      const videoSrc = item.getAttribute("data-video-src");
      if (videoSrc) {
        mainVideo.pause(); // Pause any current playback
        mainVideo.src = videoSrc; // Update video source

        // Wait for the video to load, then play
        mainVideo.addEventListener(
          "loadeddata",
          () => {
            mainVideo.play();
          },
          { once: true }
        );
      }
    });
  });

  // Size change buttons
  document.getElementById("small-view").addEventListener("click", () => setSize("small"));
  document.getElementById("medium-view").addEventListener("click", () => setSize("medium"));
  document.getElementById("large-view").addEventListener("click", () => setSize("large"));
});

// Function to set video player size
function setSize(size) {
  const videoContainer = document.getElementById("player-container");
  const video = document.getElementById("main-video");

  // Remove all size classes
  videoContainer.className = size;

  if (size === "small") {
    video.style.width = "300px";
    video.style.height = "170px";
    exitFullscreen();
  } else if (size === "medium") {
    video.style.width = "600px";
    video.style.height = "340px";
    exitFullscreen();
  } else if (size === "large") {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }
}

// Function to exit fullscreen
function exitFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
