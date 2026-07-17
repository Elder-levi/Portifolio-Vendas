<script setup>
const skillCards = [
  { id: 'vue',        name: 'Vue 3',      description: 'Interfaces reativas, rápidas e bem estruturadas.' },
  { id: 'java',       name: 'Java',       description: 'Aplicações robustas com tipagem forte e maturidade.' },
  { id: 'spring',     name: 'Spring Boot',description: 'APIs escaláveis para produtos digitais robustos.' },
  { id: 'node',       name: 'Node.js',    description: 'Serviços eficientes com JavaScript no back-end.' },
  { id: 'mysql',      name: 'MySQL',      description: 'Dados relacionais com performance e confiabilidade.' },
  { id: 'mongodb',    name: 'MongoDB',    description: 'Dados flexíveis para aplicações modernas e escaláveis.' },
]

const featureCards = [
  { id: 'simple',   icon: '01', title: 'Simples',   description: 'Arquitetura limpa, decisões objetivas e código preparado para durar.' },
  { id: 'efficient',icon: '02', title: 'Eficiente', description: 'Entrega veloz sem abrir mão de performance, acessibilidade e qualidade.' },
  { id: 'creative', icon: '03', title: 'Criativo',  description: 'Soluções elegantes para transformar problemas complexos em produtos úteis.' },
]

</script>

<template>

    <div class="about-page">
      <!-- HERO -->
      <section id="home" class="about-hero" aria-labelledby="hero-title">
        <div class="about-hero-copy">

          <h1 id="hero-title">
            <span>Olá, eu sou </span>
            <span class="about-name">Elder levi</span>
          </h1>
          <p>
         Sou Desenvolvedor Full Stack , nascido em Salvador/BA, movido por curiosidade e atenção aos detalhes.
        Ajudo a transformar ideias em produtos digitais elegantes, rápidos e confiáveis —
        do primeiro contato ao lançamento em produção.
          </p>
          <div class="about-actions">
            <a class=" about-secondary-button " href="#habilidad">Download CV</a>


          </div>
        </div>
            <div class="about-orb" aria-hidden="true">
              <img class="about-orb-image" src="../../../assets/IMG/Perfil_Elder_levi.png" alt="Elder Levi" />
            </div>
      </section>

      <!-- METODOLOGIA -->
      <section id="metodo" class="about-cards-section" aria-labelledby="method-title">
        <p class="about-section-label">Metodologia</p>
        <h2 id="method-title" class="about-section-title">
          Uma forma mais inteligente de criar valor
        </h2>
        <div class="about-feature-row">
          <article
            v-for="feature in featureCards"
            :key="feature.id"
            class="about-feature-card"
          >
            <span class="about-card-icon" aria-hidden="true">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </section>


      <!-- HABILIDADES -->
      <section id="habilidades" class="about-skills" aria-labelledby="skills-title">
        <h2 id="skills-title">Habilidades técnicas</h2>
        <div class="about-skill-grid">
          <article
            v-for="skill in skillCards"
            :key="skill.id"
            class="about-skill-card"
          >
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </article>
        </div>
      </section>
    </div>
  
</template>

<style scoped>
:root { color-scheme: dark; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: #0a0a0a; }

.about-page {
  min-height: 100vh;
  background: #0a0a0a;
  color: #fff;
  font-family: Inter, Arial, sans-serif;
  overflow-x: hidden;
}

/* HERO */
.about-hero {
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items:center;
  justify-content: space-between;

 
}
.about-hero-copy 
{
   max-width: 760px;
  padding: 0 28px;
  padding-top: 10em;
  margin: 0 auto;
  }
.about-hero h1 { font-size: 72px; font-weight: 900; line-height: 1.1; color: #fff; letter-spacing: -0.07em; margin: 0; }
.about-name { color: #00ff88; }
.about-hero p { color: #888; font-size: 20px; line-height: 1.65; margin: 16px 0 32px; max-width: 620px; }
.about-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.about-secondary-button {
  background: transparent; color: #fff;
  border: 1px solid rgba(255,255,255,0.18);
  padding: 10px 20px; border-radius: 6px; font-weight: bold;
  cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; justify-content: center;
  transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;
}
.about-secondary-button:hover { border-color: #00ff88; color: #00ff88; transform: translateY(-1px); }
.about-orb {
  border-radius: 50%;
  background: radial-gradient(circle, #00ff8833, transparent 68%);
  width: 400px; height: 400px; flex: 0 0 400px;
  border: 1px solid rgba(0,255,136,0.13);
  box-shadow: inset 0 0 80px rgba(0,255,136,0.08), 0 0 110px rgba(0,255,136,0.12);
  margin:  10rem;
}

.about-orb-image
{
width: min(100svh , 100%);
height: min(100svh , 100%);
border-radius: 50%;
}


/* METODOLOGIA */
.about-cards-section { background: #111; padding: 80px; text-align: center; }
.about-section-label { color: #00ff88; font-size: 14px; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; margin: 0 0 14px; }
.about-section-title { color: #fff; font-size: 48px; line-height: 1.05; font-weight: 900; letter-spacing: -0.05em; margin: 0 0 42px; }
.about-feature-row { display: flex; gap: 24px; max-width: 1180px; margin: 0 auto; }
.about-feature-card { background: #1a1a1a; border: 1px solid #00ff8822; border-radius: 12px; padding: 32px; flex: 1; text-align: left; }
.about-card-icon { display: inline-flex; color: #00ff88; font-size: 13px; font-weight: 900; letter-spacing: 0.18em; margin-bottom: 36px; }
.about-feature-card h3 { color: #fff; font-size: 26px; font-weight: 900; margin: 0 0 12px; letter-spacing: -0.04em; }
.about-feature-card p { color: #888; font-size: 16px; line-height: 1.65; margin: 0; }

/* DESTAQUE */
.about-highlight { background: #0a0a0a; padding: 80px; text-align: center; }
.about-glow-mark {
  width: 220px; height: 220px; margin: 0 auto 34px;
  border-radius: 42% 58% 51% 49%;
  background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18), rgba(0,255,136,0.22) 28%, rgba(0,255,136,0.06) 62%, transparent 70%);
  border: 1px solid rgba(0,255,136,0.28);
  box-shadow: 0 0 80px rgba(0,255,136,0.26), inset 0 0 55px rgba(0,255,136,0.12);
}
.about-highlight h2 { font-size: 48px; color: #fff; font-weight: 900; line-height: 1.08; letter-spacing: -0.055em; max-width: 880px; margin: 0 auto 20px; }
.about-highlight-accent { color: #00ff88; }
.about-highlight p { color: #888; font-size: 18px; line-height: 1.7; max-width: 720px; margin: 0 auto; }

/* HABILIDADES */
.about-skills { background: #111; padding: 80px; }
.about-skills h2 { color: #fff; text-align: center; font-size: 44px; font-weight: 900; letter-spacing: -0.05em; margin: 0 0 38px; }
.about-skill-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 1180px; margin: 0 auto; }
.about-skill-card { background: #1a1a1a; border: 1px solid #ffffff11; border-radius: 8px; padding: 24px; min-height: 150px; }
.about-skill-card h3 { color: #fff; font-size: 20px; font-weight: 900; letter-spacing: -0.035em; margin: 0 0 12px; }
.about-skill-card p { color: #888; font-size: 14px; line-height: 1.55; margin: 0; }

@media (max-width: 980px) {
  .about-navbar { padding: 16px 28px; }
  .about-nav-links { display: none; }

  .about-hero {
    min-height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 130px 28px 72px;
  }

  .about-hero h1 { font-size: 54px; }

  .about-orb {
    width: 280px;
    height: 280px;
    flex-basis: 280px;
    align-self: center;
  }

  .about-cards-section,
  .about-highlight,
  .about-skills {
    padding: 68px 28px;
  }

  .about-feature-row { flex-direction: column; }

  .about-skill-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile médio */
@media (max-width: 560px) {
  .about-hero h1 { font-size: 42px; }

  .about-section-title,
  .about-highlight h2,
  .about-skills h2 {
    font-size: 34px;
  }

  .about-skill-grid { grid-template-columns: 1fr; }

  .about-actions {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }

  .about-cta,
  .about-secondary-button {
    width: 100%;
    text-align: center;
  }
}

/* Mobile pequeno */
@media (max-width: 480px) {
  .about-hero {
    padding: 110px 20px 56px;
  }

  .about-hero h1 { font-size: 32px; }

  .about-hero p { font-size: 1rem; }

  .about-orb {
    width: 200px;
    height: 200px;
    flex-basis: 200px;
  }
}

/* Mobile muito pequeno */
@media (max-width: 370px) {
  .about-hero h1 { font-size: 26px; }

  .about-orb {
    width: 160px;
    height: 160px;
    flex-basis: 160px;
  }

  .about-actions {
    gap: 8px;
  }
}
</style>
