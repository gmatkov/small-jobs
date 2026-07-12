<template>
  <footer class="site-footer">
    <div class="footer-container">
      <p class="footer-copy">&copy; 2026 Portal. Sva prava pridržana.</p>
      <div class="footer-links">
        <NuxtLink to="/" class="footer-link">Privatnost</NuxtLink>
        <NuxtLink to="/" class="footer-link">Uvjeti korištenja</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #f8fafc;
  border-top: 1px solid #f1f5f9;
  padding: 24px;
  margin-top: auto; /* Osigurava guranje na dno */
}

.footer-container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.footer-copy {
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-link {
  color: #64748b;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #0d9489; /* Teal boja koja prati tvoj Header */
}

/* Prilagodba za mobitele */
@media (max-width: 640px) {
  .footer-container {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
