<template>
    <div class="container-shoes">
      <div class="image-container left" :style="{ backgroundImage: 'url(' + require('@/assets/img/hombre.png') + ')' }">
        <button class="center">HOMBRE</button>
      </div>
      <div class="image-container right" :style="{ backgroundImage: 'url(' + require('@/assets/img/mujer1.jpeg') + ')' }">
        <button class="center">MUJER</button>
      </div>
    </div>
  </template>
  
  <style>
  .container-shoes {
      display: flex;
      justify-content: center;
      margin: 5px;
      margin-right: 10%;
      margin-left: 10%;
  }
  
  .image-container {
      width: 45%;
      height: 70vh;
      background-size: cover;
      position: relative;
      margin: 5px;
  }
  
  .left {
      text-align: right;
  }
  
  .right {
      text-align: left;
  }
  
  .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  </style>
  