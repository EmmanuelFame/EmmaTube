document.addEventListener("DOMContentLoaded", () => {
    const mainVideo = document.getElementById("main-video");
    const videoItems = document.querySelectorAll(".video-item");
    const videoContainer = document.getElementById("player-container");
    const viewButtons = document.querySelectorAll(".view-buttons button");
  
    // Set default size to 'medium' on page load
    setSize("medium");
  
    // Playlist functionality
    videoItems.forEach((item) => {
      item.addEventListener("click", () => {
        const videoSrc = item.getAttribute("data-video-src");
        mainVideo.src = videoSrc; // Update video source
        mainVideo.play(); // Auto-play the selected video
      });
    });
  
    // View buttons functionality
    viewButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        viewButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        const size = button.id.split("-")[0]; // Extract 'small', 'medium', or 'large'
        setSize(size); // Adjust video size
      });
    });
  
    function setSize(size) {
      if (size === "small") {
        videoContainer.className = "small"; // Apply small class
        exitFullscreen(); // Ensure fullscreen is exited
      } else if (size === "medium") {
        videoContainer.className = "medium"; // Apply medium class
        exitFullscreen(); // Ensure fullscreen is exited
      } else if (size === "large") {
        videoContainer.className = "large"; // Apply large class
        enterFullscreen(mainVideo); // Enter fullscreen mode
      }
    }
  
    function enterFullscreen(video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  
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
  });
  