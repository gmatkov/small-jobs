<script setup lang="ts">
const contactMethod = ref('portal');

const onSubmit = (event: Event) => {
  event.preventDefault();

  const target = event.target as HTMLFormElement;
  const formData = new FormData(target);
  const formValues = Object.fromEntries(formData.entries());

  console.log('Nativni podaci oglasa spremni za obradu:', formValues);
};
</script>

<template>
  <div class="page-wrapper">
    <div class="top-app-bar">
      <div class="header-container">
        <button type="button" class="back-btn" @click="$router.back()">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 class="header-title">Post a Job</h1>
      </div>
    </div>

    <main class="main-content">
      <form class="job-form" @submit="onSubmit">
        <section class="form-section">
          <UiInput
            name="title"
            label="Naslov oglasa"
            placeholder="npr. Čišćenje stana 50m2" />

          <UiTextarea
            name="description"
            label="Opis posla"
            placeholder="Detaljno opišite što vam je potrebno..."
            rows="5" />
        </section>

        <section class="grid-section">
          <div class="relative-input">
            <UiInput name="city" label="Grad" placeholder="Zagreb" />
            <span class="material-symbols-outlined input-icon"
              >location_on</span
            >
          </div>

          <UiInput
            name="district"
            label="Kvart/Naselje"
            placeholder="Trešnjevka" />
        </section>

        <section class="form-section">
          <h2 class="section-heading">
            Kako želite da vas čistači kontaktiraju?
          </h2>

          <div class="radio-stack">
            <UiRadioButton
              v-model="contactMethod"
              name="contactPreference"
              value="portal"
              title="Preko Portala"
              description="Komunicirajte sigurno unutar aplikacije bez dijeljenja broja." />

            <UiRadioButton
              v-model="contactMethod"
              name="contactPreference"
              value="phone"
              title="Direktan telefonski poziv"
              description="Čistači vas mogu odmah nazvati na vaš broj telefona." />

            <UiRadioButton
              v-model="contactMethod"
              name="contactPreference"
              value="both"
              title="Oboje"
              description="Preporučeno" />
          </div>
        </section>

        <div class="form-actions">
          <UiButton type="submit">Objavi oglas</UiButton>
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: var(--background);
  box-sizing: border-box;
}

.top-app-bar {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 50;
  background-color: #ffffff;
  border-bottom: 1px solid var(--outline-variant);
  box-shadow: 0 4px 12px rgba(77, 182, 172, 0.04);
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.header-container {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.back-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary);
  display: flex;
  align-items: center;
  padding: 8px;
  transition: transform 0.2s;
}

.back-btn:active {
  transform: scale(0.95);
}

.header-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--on-surface);
  margin: 0;
  letter-spacing: -0.01em;
}

.main-content {
  padding-top: 96px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 128px;
  max-width: 512px;
  margin: 0 auto;
  box-sizing: border-box;
}

.job-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.relative-input {
  position: relative;
}

.input-icon {
  position: absolute;
  right: 12px;
  top: 44px;
  color: var(--outline);
  pointer-events: none;
  font-size: 20px;
}

.section-heading {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--on-surface);
  margin: 0;
}

.radio-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-actions {
  margin-top: 16px;
}
</style>
