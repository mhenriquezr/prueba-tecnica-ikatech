<template>
  <div>
    <div class="discountMessage">
      <h2>HOT SALE -30% EN SANDALIAS</h2>
    </div>
    <nav class="nav-secundario">
      <a v-bind:class="{ 'selected': selected === 'Directorio de Tiendas' }" v-on:click="selected = 'Directorio de Tiendas'" href="#">Directorio de Tiendas</a>
      <a v-bind:class="{ 'selected': selected === 'Servicio al Cliente' }" v-on:click="selected = 'Servicio al Cliente'" href="#">Servicio al Cliente</a>
      <a v-bind:class="{ 'selected': selected === 'Mi Cuenta' }" v-on:click="selected = 'Mi Cuenta'" href="#">Mi Cuenta</a>
    </nav>
    <logo class="logo-hp">
      <img src="@/assets/img/hp-logo.png" alt="logo">
    </logo>
    <form class="searchForm">
      <input type="text" placeholder="Buscar...">
      <button type="submit"><i class="fas fa-arrow-right"></i></button>
    </form>
    <div class="storeMessage">
      <p>ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
    </div>
    <nav class="nav-principal">
      <a v-bind:class="{ 'selected': selected === 'Hombre' }" v-on:click="selected = 'Hombre'" href="#">HOMBRE</a>
      <a v-bind:class="{ 'selected': selected === 'Mujer' }" v-on:click="selected = 'Mujer'" href="#">MUJER</a>
      <a v-bind:class="{ 'selected': selected === 'Blog' }" v-on:click="selected = 'Blog'" href="#">BLOG</a>
      <a v-bind:class="{ 'selected': selected === 'Historia' }" v-on:click="selected = 'Historia'" href="#">HISTORIA</a>
      <a v-bind:class="{ 'selected': selected === 'Tienda' }" v-on:click="selected = 'Tienda'" href="#">TIENDA</a>
      <a v-bind:class="{ 'selected': selected === 'Carrito' }" v-on:click="selected = 'Carrito'" href="#" class="carrito">CARRITO<i class="fas fa-shopping-cart"></i>
      </a>
    </nav>


    <SliderComponent />
    <ContainerShoes />
    <VideoContainer />
    <ContainerStore />
    <InstagramPost />
    <FooterStore />

  </div>
</template>

<script>
import SliderComponent from './components/SliderComponent'
import ContainerShoes from './components/ContainerShoes'
import VideoContainer from './components/VideoContainer'
import ContainerStore from './components/ContainerStore'
import InstagramPost from './components/InstagramPost'
import FooterStore from './components/FooterStore'


export default {
  name: 'App',
  components: {
    SliderComponent,
    ContainerShoes,
    VideoContainer,
    ContainerStore,
    InstagramPost,
    FooterStore,
},
  data() {
    return {
      selected: 'Hombre'
    }
  }
}
</script>

<style>
nav.nav-principal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: white;
  padding: 10px;
}
nav.nav-secundario {
  align-items: right;
  text-align: right;
  background-color: #c8c6cb;
  color: #707071;
  padding: 10px;
  margin-bottom: 10px;
}
nav a {
  color: #676767;
  text-decoration: none;
  margin: 0 10px;
}
.selected {
  color: #acacac;
}
.fas {
  float: right;
}
.storeMessage {
  text-align: right;
  color: #97717c;
}
.discountMessage {
  text-align: center;
  background-color: #7a4a58;
  color: white;
  padding: 10px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.searchForm {
  text-align: right;
  
}
.searchForm button {
  background-color: transparent;
}
.logo-hp img {
  width: 20%;
  max-width: 30vh;
  position: absolute;
}

</style>