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

   </style>
