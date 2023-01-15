<template>
    <footer>
      <div class="container-footer">
        <div class="column">
          <h3>Servicio al Cliente</h3>
          <ul>
            <li><a href="#">Contactenos</a></li>
            <li><a href="#">Cambios y Devoluciones</a></li>
            <li><a href="#">Politicas de Tienda</a></li>
            <li><a href="#">Politicas de Datos</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Mi Cuenta</h3>
          <ul>
            <li><a href="#">Mis Pedidos</a></li>
            <li><a href="#">Mis Devoluciones</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Recursos</h3>
          <ul>
            <li><a href="#">Tiendas</a></li>
            <li><a href="#">Devoluciones</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Newsletter</h3>
          <p>Registrate para ser el primero en recibir nuestras noticias</p>
          <form>
            <input type="email" placeholder="Email">
            <button class ="button-news" type="submit"><i class="fas fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
      <div class="logos-container">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
        <img :src="require('@/assets/img/visa-logo.png')" alt="Logo visa">
      </div>
    </footer>
  </template>
  
  <style>
  footer {
    background-color: #f2f2f2;
    padding: 40px 0;
  }
  
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 7%;
    margin-right: 7%;
  }
  
  .column {
    width: 25%;
    text-align: left;
  }
  
  h3 {
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .logos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  img {
    width: 80px;
    margin: 0 10px;
  }
  .button-news{
    background-color: transparent;
  }

  </style>