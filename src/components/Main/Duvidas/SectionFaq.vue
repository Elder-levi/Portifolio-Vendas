<template>
  <section class="faq">
    <div class="faq__header">
      <span class="faq__badge">DÚVIDAS FREQUENTES</span>
      <h2 class="faq__title">Perguntas frequentes</h2>
    </div>

    <div class="faq__list">
      <div v-for="item in faqItems" :key="item.question" class="faq__item">
        <button class="faq__question" @click="toggle(item)">
          <span>{{ item.question }}</span>
          <div :class="['faq__chevron', { 'faq__chevron--open': item.open }]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </button>
        <transition name="faq-slide">
          <p v-if="item.open" class="faq__answer">{{ item.answer }}</p>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const faqItems = reactive([
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer: 'Nosso processo começa com um briefing detalhado para entender suas necessidades. Em seguida, criamos o design para sua aprovação e, após validado, seguimos para o desenvolvimento e entrega final.',
    open: false
  },
  {
    question: 'Posso solicitar alterações após a entrega?',
    answer: 'Sim! Todos os nossos projetos incluem um período de revisões após a entrega para garantir que tudo esteja exatamente como você imaginou.',
    open: false
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos PIX, boleto bancário e cartões de crédito com possibilidade de parcelamento em até 12x.',
    open: false
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'O prazo varia de acordo com o projeto: Landing pages em 7 dias, lojas virtuais em 14 dias e projetos de automação em até 21 dias.',
    open: false
  }
])

function toggle(item) {
  item.open = !item.open
}
</script>

<style scoped>
.faq {
  padding: 96px 16px;
  background: #0a0a0a;
}
.faq__header {
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.faq__badge {
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
.faq__title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: white;
  margin: 0;
}
.faq__list {
  max-width: 800px;
  margin: 0 auto;
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 24px;
  padding: 8px 32px;
}
.faq__item {
  border-bottom: 1px solid #27272a;
}
.faq__item:last-child { border-bottom: none; }
.faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  gap: 16px;
  transition: color 0.2s;
  font-family: inherit;
}
.faq__question:hover { color: #4ade80; }
.faq__chevron {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: #27272a;
  border: 1px solid #3f3f46;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  transition: all 0.3s;
}
.faq__chevron--open {
  background: #4ade80;
  border-color: #4ade80;
  color: #18181b;
  transform: rotate(180deg);
}
.faq__answer {
  color: #9ca3af;
  line-height: 1.7;
  padding-bottom: 24px;
  margin: 0;
  font-size: 15px;
}

/* Animação */
.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.faq-slide-enter-from,
.faq-slide-leave-to {
  opacity: 0;
  max-height: 0;
  padding-bottom: 0;
}
.faq-slide-enter-to,
.faq-slide-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>