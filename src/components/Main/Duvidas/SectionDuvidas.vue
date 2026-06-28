<template>
  <section class="hero">
    <!-- Grid de fundo -->
    <div class="hero__grid" />
    <!-- Glow -->
    <div class="hero__glow" />

    <div class="hero__content">
      <span class="hero__badge">FALE COMIGO</span>
      <h1 class="hero__title">
        Conta pra mim sobre <br /> o seu projeto
      </h1>
      <p class="hero__subtitle">
        Preencha o formulário abaixo e eu te retorno com o melhor
        caminho para tirar sua ideia do papel.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 128px 16px 80px;
  background: #0a0a0a;
  overflow: hidden;
  text-align: center;
}
.hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
  background-image:
    linear-gradient(#333 1px, transparent 1px),
    linear-gradient(90deg, #333 1px, transparent 1px);
  background-size: 40px 40px;
}
.hero__glow {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: rgba(74, 222, 128, 0.1);
  filter: blur(120px);
  border-radius: 9999px;
  pointer-events: none;
}
.hero__content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.hero__badge {
  display: inline-block;
  padding: 6px 16px;
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #6b7280;
}
.hero__title {
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin: 0;
}
.hero__subtitle {
  font-size: 18px;
  color: #9ca3af;
  line-height: 1.7;
  max-width: 560px;
  margin: 0;
}
</style>