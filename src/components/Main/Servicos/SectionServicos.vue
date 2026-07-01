<template>
  <div class="page">

    <!-- Background -->
    <div class="bg-effects">
      <div class="bg-grid"></div>
      <div class="glow glow-top"></div>
      <div class="glow glow-bottom"></div>
    </div>

    <!-- Hero -->
    <header class="hero">
      <span class="hero-label">Portfolio & Projetos</span>
      <h1 class="hero-title">
        PROJETOS EM
        <span class="hero-title--green">DESTAQUE</span>
      </h1>
      <p class="hero-subtitle">
        Explorando o futuro da web através de código elegante,
        interfaces intuitivas e infraestrutura escalável.
      </p>

    </header>

    <!-- Stats -->
    <section class="stats">
      <div class="stats-container">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Filtros -->
    <section class="filters">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="activeFilter = filter"
        :class="['filter-btn', activeFilter === filter ? 'filter-btn--active' : '']"
      >
        {{ filter }}
      </button>
    </section>

    <!-- Grid de Projetos -->
    <section class="projects">
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="card"
        >
          <!-- Imagem -->
          <div class="card-image">
            <img :src="project.image" :alt="project.title" />
            <div class="card-image-overlay"></div>
            <span class="card-category">{{ project.category }}</span>
          </div>

          <!-- Conteúdo -->
          <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description }}</p>

            <div class="card-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-box">
        <h2 class="cta-title">
          QUER <span class="cta-title--green">COLABORAR</span><br />
          EM UM NOVO PROJETO?
        </h2>
        <p class="cta-subtitle">
          Estou sempre em busca de novos desafios e parcerias empolgantes.
          Vamos construir algo extraordinário juntos.
        </p>
         <a
           class="cta__btn"
           href="https://wa.me/5571982354613?text=Ol%C3%A1!%20Vi%20o%20seu%20site%20e%20tenho%20interesse%20em%20solicitar%20um%20or%C3%A7amento."
           target="_blank"
           rel="noopener noreferrer"
         >
        Falar agora
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'



const stats = [
  { label: 'Projetos',            value: '3+' },
  { label: 'Tecnologias',         value: '6'   },
  { label: 'Anos de Experiência', value: '1'   },
  { label: 'Open Source',         value: '100%'},
]

const filters = ['Todos', 'Web','Backend']
const activeFilter = ref('Todos')

const projects = [
  {
    id: '1', title: 'Piscologa Rosa Nobrega', category: 'Web',
    description: 'Plataforma de analytics em tempo real para monitorar saúde da rede.',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#', githubUrl: '#',
  },

]

const filteredProjects = computed(() =>
  activeFilter.value === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<style scoped>
/* ── Variáveis ─────────────────────────────────────────── */
:root {
  --green: #00ff6a;
  --bg: #080808;
  --bg-card: #111111;
  --bg-stats: #0c0c0c;
  --text: #ffffff;
  --text-muted: #888888;
  --border: rgba(255, 255, 255, 0.07);
}

/* ── Reset / Base ──────────────────────────────────────── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ── Page ──────────────────────────────────────────────── */
.page {
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* ── Background Effects ────────────────────────────────── */
.bg-effects {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: pulse 4s ease-in-out infinite;
}

.glow-top {
  top: -100px;
  left: 25%;
  width: 500px;
  height: 500px;
  background: rgba(0, 255, 106, 0.08);
}

.glow-bottom {
  bottom: -100px;
  right: 25%;
  width: 400px;
  height: 400px;
  background: rgba(0, 255, 106, 0.04);
  animation-delay: 2s;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}


/* ── Hero ──────────────────────────────────────────────── */
.hero {
  position: relative;
  z-index: 10;
  padding: 160px 24px 80px;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
}

.hero-label {
  display: block;
  font-family: monospace;
  font-size: 13px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 24px;
}

.hero-title {
   font-size: clamp(36px, 6vw, 60px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin: 0;
}

.hero-title--green {
  color: var(--green);
  display: block;
}

.hero-subtitle {
  color: var(--text-muted);
  font-size: 18px;

  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 40px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 16px 32px;
  border-radius: 9999px;
  background: #4ade80;
  color: black;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
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


.btn-primary:hover {
  box-shadow: 0 0 30px rgba(0,255,106,0.5);
  transform: translateY(-1px);
}

.btn-secondary {
  padding: 16px 32px;
  border-radius: 9999px;
  background: transparent;
  color: var(--text);
  font-weight: 700;
  font-size: 15px;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: green;
}

/* ── Stats ─────────────────────────────────────────────── */
.stats {
  position: relative;
  z-index: 10;
  background: var(--bg-stats);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 48px 24px;
}

.stats-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s;
}

.stat-item:hover {
  transform: scale(1.08);
}

.stat-value {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 900;
  color: var(--green);
}

.stat-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  text-align: center;
}

/* ── Filtros ───────────────────────────────────────────── */
.filters {
  position: relative;
  z-index: 10;
  padding: 48px 24px 32px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 24px;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: rgba(255,255,255,0.2);
  color: var(--text);
}

.filter-btn--active {
  background: var(--green);
  border-color: var(--green);
  color: green;
  box-shadow: 0 0 20px rgba(0,255,106,0.2);
}

/* ── Projects Grid ─────────────────────────────────────── */
.projects {
  position: relative;
  z-index: 10;
  padding: 16px 24px 120px;
}

.projects-grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* ── Card ──────────────────────────────────────────────── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  cursor: default;
}

.card:hover {
  border-color: rgba(0,255,106,0.5);
  transform: translateY(-4px);
}

.card-image {
  position: relative;
  height: 192px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s, transform 0.5s;
}

.card:hover .card-image img {
  filter: grayscale(0%);
  transform: scale(1.08);
}

.card-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-card) 0%, transparent 60%);
  z-index: 1;
}

.card-category {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  color: var(--green);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid rgba(0,255,106,0.3);
}

.card-body {
  padding: 24px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  transition: color 0.2s;
}

.card:hover .card-title {
  color: var(--green);
}

.card-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  color: rgba(0,255,106,0.8);
  background: rgba(0,255,106,0.05);
  border: 1px solid rgba(0,255,106,0.1);
  padding: 2px 8px;
  border-radius: 6px;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.btn-demo,
.btn-github {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-demo {
  background: var(--green);
  color: #000;
  border: none;
}

.btn-demo:hover {
  box-shadow: 0 0 15px rgba(0,255,106,0.3);
}

.btn-github {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-github:hover {
  background: rgba(255,255,255,0.05);
}

/* ── CTA ───────────────────────────────────────────────── */
.cta {
  position: relative;
  z-index: 10;
  padding: 0 24px 120px;
}

.cta-box {
  max-width: 960px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 40px;
  padding: 80px 48px;
  text-align: center;
}

.cta-title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
}

.cta-title--green {
  color: var(--green);
}

.cta-subtitle {
  font-size: 17px;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 480px;
  margin: 0 auto 48px;
}

.btn-cta {
  padding: 20px 48px;
  border-radius: 9999px;
  background: var(--green);
  color: #000;
  font-weight: 900;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}

.btn-cta:hover {
  box-shadow: 0 0 40px rgba(0,255,106,0.6);
  transform: scale(1.04);
}

.btn-cta:active {
  transform: scale(0.97);
}


/* ── Responsivo ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-links,
  .btn-hire {
    display: none;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    padding: 48px 24px;
    border-radius: 24px;
  }

  .footer-container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
