<template>
    <div class="video-container">
      <video ref="videoPlayer" class="full-width" controls>
        <source :src="videoSrc" type="video/mp4">
      </video>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoSrc: require('@/assets/img/video-promo.mp4')
      }
    },
    mounted() {
      this.$refs.videoPlayer.play()
    }
  }
  </script>
  
  <style>
  .video-container {
    width: 100%;
    height: 0;
    padding-bottom: 55.25%;
    margin-top: 2%;
    margin-bottom: -20%;
    position: relative;
  }
  
  .full-width {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
  }
  </style>
  