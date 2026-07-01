
<script setup>

const year = new Date().getFullYear()

</script>
<template>
   <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="logo">
          <div class="logo-icon"></div>
        </div>
        <span class="footer-copy">© {{ year }} — DESIGNED FOR THE FUTURE</span>
        <div class="footer-links">
          <a href="#" class="footer-link">GitHub</a>
          <a href="#" class="footer-link">LinkedIn</a>
        </div>
      </div>
    </footer>
</template>
<style scoped>
/* ── Footer ────────────────────────────────────────────── */
.footer {
  position: relative;
  z-index: 10;
  border-top: 1px solid var(--border);
  padding: 48px 24px;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-copy {
  font-family: monospace;
  font-size: 12px;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  font-size: 14px;
  color: var(--text-muted);
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--green);
}

</style>
