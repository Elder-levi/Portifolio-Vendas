<script setup>
import TextMarquee from '../../Animações/TextMarquee.vue';
</script>


<template>
  <section class="hero">
    <div class="conteudo">
      <h1 class="hero__title">Transforme sua ideia em um negócio com <span style="color:#4ade80 ;">presença online</span></h1>

      <p class="hero__subtitle">
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
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}


.conteudo {
  text-align: center;
  max-width: 900px;
}

.hero__title {
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin: 0;
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
