<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-grid">
        <div class="grid-full-width">
          <UiPromoBadge />
        </div>

        <div class="hero-content">
          <div class="content-inner">
            <h1 class="hero-title">Povežite se s čistačima direktno</h1>
            <p class="hero-text">
              Bez provizije. Bez posrednika u plaćanju. Klijentima je korištenje
              uvijek besplatno.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary">Postani Čistač</button>
              <NuxtLink to="/jobs/create" class="btn-link">
                <button class="btn btn-secondary">Treba mi Čišćenje</button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <figure class="image-wrapper">
            <img
              alt="Hero image of a person cleaning a house"
              class="hero-img"
              width="413"
              height="300"
              src="/12_converted.avif" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  width: 100%;
  box-sizing: border-box;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.grid-full-width {
  grid-column: 1 / -1;
}

.hero-content {
  width: 100%;
}

.content-inner {
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.25;
}

.hero-text {
  font-size: 1.125rem;
  color: #475569;
  max-width: 448px;
  margin-top: 0;
  margin-bottom: 40px;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 320px;
}

.btn-link {
  text-decoration: none;
  width: 100%;
}

.btn {
  width: 100%;
  padding: 20px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #0d9489;
  color: #ffffff;
  border: none;
  box-shadow: 0 10px 15px -3px rgba(13, 148, 137, 0.2);
}

.btn-primary:active {
  transform: scale(0.95);
}

.btn-secondary {
  background-color: #f0fdfa;
  color: #0d9489;
  border: 1px solid rgba(13, 148, 137, 0.1);
}

.btn-secondary:active {
  transform: scale(0.95);
}

.hero-visual {
  display: none;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    gap: 40px;
  }

  .content-inner {
    align-items: flex-start;
    text-align: left;
    padding: 80px 0;
  }

  .hero-actions {
    flex-direction: row;
    max-width: none;
  }

  .btn {
    width: auto;
  }

  .hero-visual {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .image-wrapper {
    margin: 0;
    width: 100%;
    max-width: 413px;
  }

  .hero-img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
}
</style>
