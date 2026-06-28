<script setup>
import TextMarquee from '../Animações/TextMarquee.vue';
</script>


<template>
  <section class="hero">
    <div class="conteudo">
      <h1>Transforme sua ideia em um negócio com <span style="color:#4ade80 ;">presença online</span></h1>

      <p>
        Sites, lojas virtuais e automações inteligentes para você vender mais,
        ganhar tempo e profissionalizar sua marca.
      </p>

      <button>Quero meu projeto</button>
    </div>
    
  </section>
 <TextMarquee>
 </TextMarquee>
</template>


<style scoped>

.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;
}

.conteudo {
  text-align: center;
  max-width: 900px;
}

h1 {
  color: white;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

p {
  color: #9ca3af;
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

button {
  border: none;
  background-color: #4ade80;
  color: #0f172a;

  width: 260px;
  height: 60px;
  border-radius: 50px;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-color: rgba(74, 222, 128, 0.8);
  transform: translateY(-2px);
}
</style>