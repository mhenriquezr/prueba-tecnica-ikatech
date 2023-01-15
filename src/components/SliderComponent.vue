<template>
    <div>
      <div class="slider-container" style="display: flex; justify-content: space-between;">
        <button v-on:click="prevSlide" :disabled="currentIndex === 0" class="transparent"> <i class="fas fa-arrow-left"></i> </button>
        
        
        <div>
          <div v-for="(item, index) in zapato" :key="item.referencia" class="zapato-container" v-show="currentIndex === index">
            <img class= zapato-img :src="require('@/assets/img/' + item.foto)">
            <div class="zapato-info">
              <h2 class="zapato-name">{{ item.nombre }}</h2>
              <p class="zapato-price">${{ item.precio.toLocaleString() }}</p>
              <button class="buy-button">Comprar</button>
            </div>
          </div>
        </div>
        <button v-on:click="nextSlide" :disabled="currentIndex === zapato.length - 1" class="transparent"> <i class="fas fa-arrow-right"></i></button>


      </div>
    </div>
</template>
  
  <script>
  import zapato from '@/data/zapato.json'
  
  export default {
    data() {
      return {
        zapato: zapato,
        currentIndex: 0
      }
    },
    methods: {
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--
        }
      },
      nextSlide() {
        if (this.currentIndex < this.zapato.length - 1) {
          this.currentIndex++
        }
      }
    }
  }
  </script>
  
  <style>
  .zapato-container {
    display: flex;
    align-items: center;
    height: 60vh;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  
  .zapato-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  
  .zapato-info {
    width: 50%;
  }
  
  .zapato-name {
    font-size: 1.2
    em;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-bottom: 10px;
}

.zapato-price {
    font-size: 1.1em;
    color: #999;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.buttons-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    cursor: pointer;
    margin: 0 10px;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
.transparent {
    background-color: transparent;
}

</style>  