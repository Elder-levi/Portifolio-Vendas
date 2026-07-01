<template>
  <section class="cta">
    <div class="cta__divider cta__divider--top" />
    <div class="cta__content">
      <h2 class="cta__title">
        Ainda tem dúvidas? <br /> Fala comigo!
      </h2>
      <p class="cta__body">
        Me manda uma mensagem e eu te ajudo a escolher o melhor
        caminho para o seu projeto.
      </p>
      <a
        class="cta__btn"
        href="https://wa.me/5571982354613?text=Ol%C3%A1!%20Vi%20o%20seu%20site%20e%20tenho%20interesse%20em%20solicitar%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.535 4.04 1.473 5.745L.057 23.882l6.305-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.576-.5-5.065-1.373l-.363-.215-3.741.981.999-3.648-.236-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Falar no WhatsApp
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
    <div class="cta__divider cta__divider--bottom" />
  </section>
</template>

<style scoped>
.cta {
  padding: 96px 16px;
  background: #0a0a0a;
  text-align: center;
  position: relative;
}
.cta__divider {
  position: absolute;
  left: 0; right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(74,222,128,0.4), transparent);
}
.cta__divider--top  { top: 0; }
.cta__divider--bottom { bottom: 0; }
.cta__content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.cta__title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  margin: 0;
}
.cta__body {
  color: #9ca3af;
  font-size: 18px;
  line-height: 1.7;
  margin: 0;
}
.cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #4ade80;
  color: #18181b;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 36px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(74,222,128,0.25);
  transition: all 0.2s;
}
.cta__btn:hover {
  background: #22c55e;
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(74,222,128,0.4);
}
</style>
