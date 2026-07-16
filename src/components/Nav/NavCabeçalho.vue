<template>
    <nav class="navbar" :class="{ open: menuOpen }">
    <div class="logo">
      <h1>CreateDev</h1>
    </div>

    <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Abrir menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ol :class="{ show: menuOpen }">
      <li><router-link class="nav-link" to="/" @click="menuOpen = false">Home</router-link></li>
      <li><router-link class="nav-link" to="/Sevices" @click="menuOpen = false">Serviços</router-link></li>
      <li><router-link class="nav-link" to="/Duvidas" @click="menuOpen = false">Duvidas</router-link></li>
      <li><router-link class="nav-link" to="/Sobre" @click="menuOpen = false">Sobre</router-link></li>
    </ol>
      <div class="Bottom">
         <a
           class="nav-button"
           href="https://wa.me/5571982354613?text=Ol%C3%A1!%20Vi%20o%20seu%20site%20e%20tenho%20interesse%20em%20solicitar%20um%20or%C3%A7amento."
           target="_blank"
           rel="noopener noreferrer"
         >
           Fale-Conosco
         </a>
      </div>
   </nav>
   </template>
   <script setup>
import { ref } from 'vue'

const menuOpen = ref(false)


   </script>
   <style scoped>
   .navbar {
     position: fixed;
     top: 20px;
     left: 50%;
     transform: translateX(-50%);

     width: 90%;
     max-width: 1200px;

     background-color:black;
     color: white;

     display: flex;
     justify-content: space-between;
     align-items: center;

     padding: 1rem 2rem;
     border-radius: 50px;

     z-index: 1000;
   }
   .navbar ol {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
   }


.nav-link {
  color: #9ca3af;
  text-decoration: none;
}

   .nav-button,
   button {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   border: none;
   background-color: #4ade80;
   width: 150px;
   height: 40px;
   border-radius: 50px;
   cursor: pointer;
   text-decoration: none;
   color: inherit;
   }
   .nav-button:hover,
   button:hover {
   background-color: rgba(74,222,128,0.3);
   }

   /* botão hambúrguer: escondido por padrão (desktop) */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  padding: 0;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 2px;
}

 @media screen and (max-width: 700px) {
  .navbar {
    top: 0;
    left: auto;
    right: 0;
    transform: none;

    width: 100%;
    max-width: none;
    border-radius: 0;
    gap: 1rem;

    flex-wrap: wrap;
    padding: 1rem 1.5rem;
  }

  .nav-button:hover,
   button:hover {
   background-color: rgba(74,222,128,0.3);
   }

  .Bottom {
    display: none; /* opcional: some o botão de WhatsApp em mobile, ou mova pra dentro do menu */
  }

  .menu-toggle {
    display: flex;
  }

  .navbar ol {
    display: none;
    flex-direction: column;
    width: 100%;
    order: 3;
    margin-top: 1rem;
    padding: 15px;
    gap: 10px;
  }



  .navbar ol.show {
    display: flex;
  }
}
   </style>
