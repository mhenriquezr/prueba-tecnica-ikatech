<template>
    <div>
        <div class="logo-container">
            <div >
                <h3><i class="fa fa-instagram" style="font-size:26px"></i> Instagram - HUSHPUPPIESCO</h3>
            </div>
        </div>
        <div class="container">
            <div class="instagram-post" v-for="post in posts" :key="post.id">
            <img :src="post.image" :alt="post.caption" style="object-fit:cover; width: 100%;">
            <p>{{ post.caption }}</p>
            </div>
        </div>
        <div class="container-rrss">
            <div class="username-container">
                <h1>@HUSHPUPPIESCO</h1>
            </div>
            <div class = "icon-container">
                <i class="fa fa-instagram" style="font-size:40px"></i>
                <i class="fa fa-facebook" style="font-size:40px"></i>
            </div>
        </div>
    </div>

    
  </template>
  <script>
  export default {
    data() {
      return {
        posts: [
          { id: 1, image: require('@/assets/img/mujer1.jpeg'), caption: 'Post 1' },
          { id: 2, image: require('@/assets/img/mujer2.jpeg'), caption: 'Post 2' },
          { id: 3, image: require('@/assets/img/mujer1.jpeg'), caption: 'Post 3' },
          { id: 4, image: require('@/assets/img/mujer2.jpeg'), caption: 'Post 4' },
          { id: 5, image: require('@/assets/img/mujer1.jpeg'), caption: 'Post 5' },
        ]
      }
    }
  }
  </script>
  <style>
  .container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  
  .instagram-post {
    margin: 10px;
    text-align: center;
    position: relative;
  }
  .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25em;
  }
    
  .icon-container{
      align-content: center;
      display:flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 20px;
  }

  .username-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
  }
  .container-rrss{
    background-color: #e7e6e2;
  }

  .fa{
    padding: 10px;  
    }


</style>