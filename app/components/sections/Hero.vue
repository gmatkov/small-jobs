<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-grid">
        <div class="hero-visual">
          <figure class="image-wrapper">
            <img
              alt="Hero image of a person cleaning a house"
              class="hero-img"
              width="413"
              height="300"
              src="/hero/hero-left.avif" />
          </figure>
        </div>
        <div class="hero-content">
          <div class="content-inner">
            <h1 class="hero-title">
              <span class="text-green">Mali Poslovi.</span> Velike usluge.
            </h1>
            <div class="hero-text">
              Oglasi besplatno.
              <span class="text-green">&nbsp;Dogovori izravno.</span>
              <div>
                Bez <span class="text-green">posrednika</span> i provizije.
              </div>
            </div>
            <div class="hero-actions">
              <NuxtLink to="/jobs/create" class="btn btn-primary"
                >Objavi oglas</NuxtLink
              >
            </div>
            <div class="hero-text">
              Registiraj obrt. Nađi lokalni oglas.
              <div>Prva 3 mjeseca besplatno</div>

              <div></div>
            </div>
            <div class="hero-actions">
              <NuxtLink to="/auth/registration" class="btn btn-link">
                Postani izvođač
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
              src="/hero/hero-right.avif" />
          </figure>
        </div>
        <!-- <div class="grid-full-width">
          <UiPromoBadge />
        </div> -->
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
  margin-bottom: 40px;
  font-weight: 700;
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
  background-color: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  box-shadow: 0 10px 15px -3px rgba(13, 148, 137, 0.2);
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
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
  }
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* align-items: center; */
    gap: 40px;
  }

  .content-inner {
    text-align: center;
    padding: 0;
  }

  .hero-actions {
    flex-direction: row;
    max-width: none;
  }

  .hero-visual {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    opacity: 0.4;
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
  .hero-title {
    font-size: 48px;
    margin: 0 -144px;
    background-color: #f9f9f9;
    z-index: 1;
    padding: 24px 24px;
  }
}
</style>
