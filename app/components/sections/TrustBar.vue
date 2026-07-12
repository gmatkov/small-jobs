<template>
  <section class="trust-section">
    <div class="trust-header">
      <h2 class="trust-title">Zašto odabrati Portal?</h2>
      <p class="trust-subtitle">
        Povezujemo vas s najboljim lokalnim čistačima na transparentan i siguran
        način.
      </p>
    </div>

    <div class="trust-grid">
      <div class="trust-card">
        <div class="image-container">
          <img
            alt="Verificirani profili"
            class="badge-img"
            src="/badges/trust.avif" />
        </div>
        <h3 class="card-title">Verificirani profili</h3>
        <p class="card-text">
          Svi čistači prolaze kroz strogu provjeru OIB-a i identiteta.
        </p>
      </div>

      <div class="trust-card">
        <div class="image-container">
          <img alt="0% Provizije" class="badge-img" src="/badges/fee.avif" />
        </div>
        <h3 class="card-title">0% Provizije</h3>
        <p class="card-text">
          Cijena koju dogovorite je cijena koju plaćate. Bez skrivenih troškova.
        </p>
      </div>

      <div class="trust-card">
        <div class="image-container">
          <img
            alt="Direktan dogovor"
            class="badge-img"
            src="/badges/hands.avif" />
        </div>
        <h3 class="card-title">Direktan dogovor</h3>
        <p class="card-text">
          Komunicirajte direktno i dogovorite termine koji vam najbolje
          odgovaraju.
        </p>
      </div>
    </div>

    <div class="trust-cta">
      <button class="cta-button">Započni s pretragom</button>
    </div>
  </section>
</template>

<style scoped>
.trust-section {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 16px;
  box-sizing: border-box;
}

.trust-header {
  text-align: center;
  margin-bottom: 64px;
}

.trust-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.trust-subtitle {
  font-size: 1.125rem;
  color: #475569;
  max-width: 672px;
  margin: 0 auto;
  line-height: 1.5;
}

.trust-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.trust-card {
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 12px 40px -15px rgba(0, 106, 99, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
}

.trust-card:hover {
  transform: scale(1.02);
}

.image-container {
  width: 128px;
  height: 128px;
  margin-bottom: 32px;
}

.badge-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 12px 0;
}

.card-text {
  font-size: 1rem;
  color: #475569;
  margin: 0;
  line-height: 1.6;
}

.trust-cta {
  margin-top: 80px;
  text-align: center;
}

.cta-button {
  background-color: #0d9489;
  color: #ffffff;
  padding: 16px 40px;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button:hover {
  box-shadow: 0 10px 15px -3px rgba(13, 148, 137, 0.3);
}

.cta-button:active {
  transform: scale(0.95);
}

@media (min-width: 768px) {
  .trust-section {
    padding: 80px 24px;
  }

  .trust-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
