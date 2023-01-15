<template>
    <div class="container">
      <div class="image-container left" :style="{ backgroundImage: 'url(' + require('@/assets/img/accesorios.jpeg') + ')' }">
        <button class="center">ACCESORIOS</button>
      </div>
      <div class="image-container right">
        <div class="image-container__item" :style="{ backgroundImage: 'url(' + require('@/assets/img/hombre2.jpeg') + ')' }">
          <button class="center">HOMBRE</button>
        </div>
        <div class="image-container__item" :style="{ backgroundImage: 'url(' + require('@/assets/img/mujer2.jpeg') + ')' }">
          <button class="center">MUJER</button>
        </div>
      </div>
    </div>
  </template>
  <style>
.container {
    display: flex;
    justify-content: center;
}

.image-container {
    width: 48.33%;
    height: 100vh;
    background-size: cover;
    position: relative;
}

.left {
    text-align: right;
}

.right {
    text-align: left;
}

.image-container__item {
    width: 100%;
    height: 50%;
    background-size: cover;
    position: relative;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
