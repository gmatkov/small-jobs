<script lang="ts" setup>
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const handleClick = () => {
  authStore.logout();
};
</script>

<template>
  <header class="site-header">
    <div class="header-container">
      <div class="header-left">
        <svg
          xmlns="http://w3.org"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#0d9489"
          class="menu-icon">
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>

        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">Portal</span>
        </NuxtLink>
      </div>

      <div class="header-right">
        <NuxtLink v-if="!isAuthenticated" to="/login" class="login-button">
          <svg
            xmlns="http://w3.org"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#94a3b8">
            <path
              d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
          </svg>
          <span>Prijava</span>
        </NuxtLink>
        <div v-else @click="handleClick" class="login-button">
          <svg
            xmlns="http://w3.org"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#94a3b8">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
          <span>Odjava</span>
        </div>

        <span>{{ user?.email }}</span>
        <div class="avatar-container">
          <img alt="User profile photo" class="avatar-img" src="/avatar.avif" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Zaglavlje fiksirano na vrhu s efektom zamućenja pozadine */
.site-header {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #f1f5f9;
  box-shadow: 0 1px 2px 0 rgba(13, 148, 137, 0.05);
  box-sizing: border-box;
}

/* Kontejner koji centrira sadržaj */
.header-container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

/* Lijeva sekcija */
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-icon {
  cursor: pointer;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 900;
  color: #0d9489;
  letter-spacing: -0.05em;
}

/* Desna sekcija */
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Gumb za prijavu */
.login-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  text-decoration: none;
  transition:
    background-color 0.2s,
    transform 0.1s;
  cursor: pointer;
}

.login-button:hover {
  background-color: #f8fafc;
}

.login-button:active {
  transform: scale(0.95);
}

/* Avatar slika */
.avatar-container {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #e2e8f0;
  transition: transform 0.2s;
  cursor: pointer;
}

.avatar-container:active {
  transform: scale(0.95);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
