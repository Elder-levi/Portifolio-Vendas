<template>
  <div class="wrapper">
    <h1>O que eu posso construir por você</h1>
    <div class="container">

      <div class="box-wrapper">
        <div class="box">
          <h3>Portfólio Profissional</h3>
          <p>Apresente seu trabalho com credibilidade e conquiste a confiança de quem visita sua página.</p>
        </div>
      </div>

      <div class="box-wrapper">
        <div class="box">
          <h3>Loja Virtual</h3>
          <p>Venda seus produtos 24 horas por dia, sem depender só das redes sociais.</p>
        </div>
      </div>

      <div class="box-wrapper">
        <div class="box">
          <h3>Atendimento 24h</h3>
          <p>Tem muito fluxo de mensagens? Um bot responde seus clientes a qualquer hora, sem perder nenhuma oportunidade.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrapper {
  background-color: #27272a;
  padding: 48px 25px;
  max-width: 1800px;
  margin: 0 auto;
  text-align: center;
  color: white;
}

.wrapper h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 25px;
}


.box-wrapper {
  position: relative;
  flex: 1;
  border-radius: 26px;
  padding: 2px; 
  background: #3f3f46;
  overflow: hidden; 
  transition: box-shadow 0.3s ease;
}


.box-wrapper::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    #4ade80 30%,
    transparent 60%
  );
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.box-wrapper:hover::before {
  opacity: 1;
  animation: spin 3s linear infinite;
}

.box-wrapper:hover {
  box-shadow: 0 0 30px rgba(74, 222, 128, 0.25);
}


.box {
  position: relative;
  background: #3f3f46;
  border-radius: 24px;
  padding: 40px;
  z-index: 1; 
  height: 100%;
  box-sizing: border-box;
  text-align: left;
}

.box h3 {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.box p {
  color: #9ca3af;
  line-height: 1.7;
  font-size: 0.95rem;
}


@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>