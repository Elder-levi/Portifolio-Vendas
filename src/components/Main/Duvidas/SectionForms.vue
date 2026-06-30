<template>
  <section class="form-section">
    <div class="form-section__header">
      <span class="form-section__badge">SEU PROJETO</span>
      <h2 class="form-section__title">Como posso te ajudar?</h2>
      <p class="form-section__subtitle">
        Preencha os campos abaixo com as informações do seu projeto.
      </p>
    </div>

    <div class="form-card">
      <form @submit.prevent="handleSubmit" class="form">

        <!-- Nome -->
        <div class="form__group">
          <label class="form__label">Seu nome</label>
          <input v-model="form.nome" type="text"
            placeholder="Ex: Maria Silva"
            class="form__input" />
        </div>

        <!-- Email -->
        <div class="form__group">
          <label class="form__label">Seu e-mail</label>
          <input v-model="form.email" type="email"
            placeholder="Ex: maria@email.com"
            class="form__input" />
        </div>

        <!-- Tipo de projeto -->
        <div class="form__group">
          <label class="form__label">Qual tipo de projeto você precisa?</label>
          <div class="form__type-grid">
            <button v-for="type in projectTypes" :key="type.id"
              type="button"
              :class="['form__type-card', { 'form__type-card--selected': form.tipo === type.id }]"
              @click="form.tipo = type.id">
              <span class="form__type-emoji">{{ type.emoji }}</span>
              <span class="form__type-label">{{ type.label }}</span>
            </button>
          </div>
        </div>

        <!-- Descrição -->
        <div class="form__group">
          <label class="form__label">Descreva seu projeto</label>
          <textarea v-model="form.descricao"
            placeholder="Conte um pouco sobre o seu negócio, o que você vende, qual o seu público e o que espera do projeto..."
            class="form__input form__textarea" />
        </div>

        <!-- Submit -->
        <button type="submit" class="form__submit">
          Enviar meu projeto
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>

      <!-- Trust indicators -->
      <div class="form__trust">
        <span v-for="t in trust" :key="t.text" class="form__trust-item">
          {{ t.emoji }} {{ t.text }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nome: '', email: '', tipo: '', descricao: '', orcamento: ''
})

const projectTypes = [
  { id: 'portfolio', emoji: '🎨', label: 'Portfolio / Landing Page' },
  { id: 'loja',      emoji: '🛒', label: 'Loja Virtual'             }
 /* { id: 'bot',       emoji: '🤖', label: 'Bot de Atendimento'       }*/
]

const trust = [
  { emoji: '⚡', text: 'Resposta em até 24h'      },
  { emoji: '🔒', text: 'Seus dados estão seguros' },
  { emoji: '🤝', text: 'Sem compromisso'          }
]

function handleSubmit() {
  console.log('Formulário enviado:', form)
  // aqui você conecta com sua API ou WhatsApp
}
</script>

<style scoped>
.form-section {
  padding: 96px 16px;
  background: #18181b;
}
.form-section__header {
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.form-section__badge {
  display: inline-block;
  padding: 6px 16px;
  background: #0a0a0a;
  border: 1px solid #27272a;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #6b7280;
}
.form-section__title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: white;
  margin: 0;
}
.form-section__subtitle {
  color: #9ca3af;
  font-size: 16px;
  margin: 0;
}
.form-card {
  max-width: 720px;
  margin: 0 auto;
  background: #27272a;
  border: 1px solid #3f3f46;
  border-radius: 32px;
  padding: 48px;
}
.form { display: flex; flex-direction: column; gap: 28px; }
.form__group { display: flex; flex-direction: column; gap: 8px; }
.form__label { color: white; font-size: 14px; font-weight: 500; }
.form__input {
  width: 100%;
  background: #3f3f46;
  border: 1px solid #52525b;
  border-radius: 12px;
  padding: 14px 20px;
  color: white;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  font-family: inherit;
}
.form__input::placeholder { color: #71717a; }
.form__input:focus {
  border-color: #4ade80;
  box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.15);
}
.form__textarea { height: 160px; resize: vertical; }
.form__select { cursor: pointer; }
.form__select option { background: #27272a; color: white; }

/* Tipo de projeto */
.form__type-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.form__type-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: #3f3f46;
  border: 1px solid #52525b;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
}
.form__type-card:hover {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.05);
}
.form__type-card--selected {
  border-color: #4ade80 !important;
  background: rgba(74, 222, 128, 0.1) !important;
}
.form__type-emoji { font-size: 24px; }
.form__type-label {
  font-size: 12px;
  font-weight: 500;
  color: #d4d4d8;
  text-align: center;
  line-height: 1.4;
}
.form__type-card--selected .form__type-label { color: #4ade80; }

/* Submit */
.form__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: #4ade80;
  color: #18181b;
  font-weight: 700;
  font-size: 16px;
  padding: 16px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s;
}
.form__submit:hover {
  background: #22c55e;
  transform: scale(1.02);
  box-shadow: 0 0 24px rgba(74, 222, 128, 0.35);
}

/* Trust */
.form__trust {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 32px;
}
.form__trust-item {
  color: #6b7280;
  font-size: 13px;
}

@media (max-width: 600px) {
  .form-card { padding: 28px 20px; }
  .form__type-grid { grid-template-columns: 1fr; }
  .form__trust { gap: 16px; }
}
</style>
