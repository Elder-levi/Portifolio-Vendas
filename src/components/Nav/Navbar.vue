<template>
   <nav class="navbar">
      <div class="logo">
           <h1>CreateDev</h1>
     </div>
      <ol>
       <li><router-link class="nav-link" to="/">Home</router-link></li>
       <li><router-link class="nav-link"  to="/Sevices">Serviços</router-link></li>
       <li><router-link class="nav-link"  to="/Duvidas">Duvidas</router-link></li>
       <li><router-link class="nav-link" to="/Sobre">Sobre</router-link></li>
      </ol>
      <div class="Bottom">
         <button>Fale-Conosco</button>
      </div>
   </nav>
   </template>
   <script setup>

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

   .nav-link
   {
       color: #9ca3af;
   }

   button {
   border: none;
   background-color: #4ade80;
   width: 150px;
   height: 40px;
   border-radius: 50px;
   cursor: pointer;
   }
   button:hover {
   background-color:
   rgba(74,222,128,0.3);
   }

   </style>
