<template>
  <section id="contato" class="cta">
    <!-- Linha divisória superior -->
    <div class="cta__divider" />

    <div class="cta__container">

      <!-- Badge -->
      <span class="cta__badge">CONTATO</span>

      <!-- Título -->
      <h2 class="cta__title">
        Vamos colocar sua ideia no ar?
      </h2>

      <!-- Subtítulo -->
      <p class="cta__body">
        Me conta um pouco sobre seu projeto e eu te mostro o melhor caminho —
        seja um site, uma loja.
      </p>


      <!-- Botão CTA -->
      <button class="cta__btn">
        Falar agora
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Texto de confiança -->
      <p class="cta__trust">
        ✅ Resposta em até 24h &nbsp;·&nbsp; 🔒 Sem compromisso &nbsp;·&nbsp; 💬 Atendimento personalizado
      </p>

    </div>

    <!-- Linha divisória inferior -->
    <div class="cta__divider" />
  </section>
</template>

<script setup>

</script>

<style scoped>
/* ========================
   SEÇÃO
======================== */
.cta {
  padding: 96px 16px;
  background-color: #0a0a0a;
  text-align: center;
}

.cta__container {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

/* Linha divisória com gradiente verde */
.cta__divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(74, 222, 128, 0.4),
    transparent
  );
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
}

/* ========================
   BADGE
======================== */
.cta__badge {
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

/* ========================
   TÍTULO
======================== */
.cta__title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  color: white;
  line-height: 1.15;
  margin: 0;
}

/* ========================
   CORPO
======================== */
.cta__body {
  font-size: 18px;
  color: #9ca3af;
  line-height: 1.7;
  margin: 0;
}

/* ========================
   ÍCONES DE SERVIÇOS
======================== */
.cta__icons {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta__icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.cta__icon-box {
  width: 56px;
  height: 56px;
  background: #1a2e1a;
  border: 1px solid #2a3a2a;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta__icon-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(74, 222, 128, 0.2);
}

.cta__icon-label {
  font-size: 14px;
  color: #9ca3af;
  font-weight: 500;
}

/* ========================
   BOTÃO CTA
======================== */
.cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #4ade80;
  color: black;
  font-weight: 700;
  font-size: 18px;
  padding: 18px 48px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 10px 40px rgba(74, 222, 128, 0.3);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.cta__btn:hover {
  background: #22c55e;
  transform: scale(1.05);
  box-shadow: 0 16px 48px rgba(74, 222, 128, 0.45);
}

/* ========================
   TEXTO DE CONFIANÇA
======================== */
.cta__trust {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* ========================
   RESPONSIVO
======================== */
@media (max-width: 600px) {
  .cta__icons {
    gap: 24px;
  }

  .cta__btn {
    font-size: 16px;
    padding: 16px 32px;
  }
}
</style>
