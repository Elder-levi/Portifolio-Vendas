<template>
  <section id="automacao" class="automacao">
    <div class="automacao__container">

      <!-- Coluna Esquerda: Imagens -->
      <div class="automacao__images">
        <!-- Glow de fundo -->
        <div class="automacao__glow" />

        <!-- Imagem 1 -->
        <div class="automacao__img-wrapper automacao__img-wrapper--1">
          <img src="https://picsum.photos/seed/worker1/400/480" alt="Profissional trabalhando" class="automacao__img" />
          <div class="automacao__img-overlay" />
        </div>

        <!-- Imagem 2 -->
        <div class="automacao__img-wrapper automacao__img-wrapper--2">
          <img src="https://picsum.photos/seed/worker2/320/400" alt="Equipe focada" class="automacao__img" />
          <div class="automacao__img-overlay" />
        </div>

        <!-- Seta decorativa animada -->
        <div class="automacao__arrow">
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none">
            <path d="M2 16 Q20 4 40 16 Q50 22 58 16" stroke="#4ade80" stroke-width="2"
              stroke-linecap="round" fill="none" stroke-dasharray="4 3" />
            <path d="M54 10 L62 16 L54 22" stroke="#4ade80" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" fill="none" />
          </svg>
        </div>
      </div>

      <!-- Coluna Direita: Texto -->
      <div class="automacao__content">
        <!-- Badge -->
        <span class="automacao__badge">AUTOMAÇÃO</span>

        <!-- Título -->
        <h2 class="automacao__title">
          Existe alguma tarefa que você repete todos os dias?
        </h2>

        <!-- Corpo -->
        <p class="automacao__body">
          Cadastro de pedidos, respostas repetitivas, agendamentos, planilhas...
          Se você se identificou com algo disso, esse processo pode ser automatizado.
          Assim você ganha tempo pra focar no que só você pode fazer: fazer seu negócio crescer.
        </p>

        <!-- Lista de benefícios -->
        <ul class="automacao__list">
          <li v-for="item in checklist" :key="item" class="automacao__list-item">
            <span class="automacao__check">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#4ade80" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            {{ item }}
          </li>
        </ul>

        <!-- Botão CTA -->
        <button class="automacao__cta">
          Quero automatizar meu processo
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
const checklist = [
 
  'Agendamentos sem intervenção manual',
  'Integração entre sistemas e planilhas'
]
</script>

<style scoped>
/* ========================
   SEÇÃO
======================== */
.automacao {
  padding: 96px 16px;
  background-color: #18181b;
  overflow: hidden;
}

.automacao__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
}

/* ========================
   IMAGENS (coluna esquerda)
======================== */
.automacao__images {
  position: relative;
  height: 480px;
}

/* Glow verde atrás das imagens */
.automacao__glow {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.automacao__glow::after {
  content: '';
  width: 288px;
  height: 288px;
  background: rgba(74, 222, 128, 0.1);
  filter: blur(80px);
  border-radius: 9999px;
}

/* Wrapper das imagens */
.automacao__img-wrapper {
  position: absolute;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
}
.automacao__img-wrapper--1 {
  top: 0;
  left: 0;
  width: 256px;
  height: 288px;
  border-radius: 100px 100px 0 100px;
  z-index: 10;
}
.automacao__img-wrapper--2 {
  bottom: 0;
  right: 16px;
  width: 208px;
  height: 240px;
  border-radius: 0 100px 100px 100px;
  z-index: 20;
}

.automacao__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.75);
}

/* Overlay verde sobre as imagens */
.automacao__img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(74, 222, 128, 0.18);
  mix-blend-mode: multiply;
}

/* Seta decorativa */
.automacao__arrow {
  position: absolute;
  bottom: 48px;
  left: 192px;
  z-index: 30;
  animation: arrowSlide 1.8s ease-in-out infinite;
}

/* ========================
   CONTEÚDO (coluna direita)
======================== */
.automacao__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.automacao__badge {
  display: inline-block;
  padding: 6px 16px;
  background: #161b16;
  border: 1px solid #232a23;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #6b7280;
}

.automacao__title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  color: white;
}

.automacao__body {
  font-size: 18px;
  color: #9ca3af;
  line-height: 1.7;
}

/* Lista com checkmarks */
.automacao__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.automacao__list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: 500;
  font-size: 16px;
}
.automacao__check {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #1a2e1a;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Botão CTA */
.automacao__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #4ade80;
  color: black;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 32px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
.automacao__cta:hover {
  background: #22c55e;
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
}

/* ========================
   RESPONSIVO
======================== */
@media (max-width: 768px) {
  .automacao__container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .automacao__images {
    height: 360px;
  }
  .automacao__title {
    font-size: 28px;
  }
}

/* ========================
   ANIMAÇÃO DA SETA
======================== */
@keyframes arrowSlide {
  0%, 100% { transform: translateX(0);   opacity: 1;   }
  50%       { transform: translateX(6px); opacity: 0.7; }
}
</style>
