<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  authReason: 'create_ad',
});
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { adService } from '~/services/adServices';
import { categoriesService } from '~/services/categoriesService';

const schema = toTypedSchema(
  z.object({
    title: z.string().min(3, 'Minimalno 3 znaka'),
    description: z.string().min(3, 'Minimalno 3 znaka'),
    category: z.string().min(1, { message: 'Ovo polje je obavezno.' }),
    postalCode: z.string().min(5, 'Minimalno 5 brojeva'),
    city: z.string().min(3, 'Minimalno 3 znaka'),
  }),
);

const { defineField, errors, handleSubmit, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    title: '',
    description: '',
    category: '',
    postalCode: '',
    city: '',
  },
});

const [title] = defineField('title');
const [description] = defineField('description');
const [category] = defineField('category');
const [postalCode] = defineField('postalCode');
const [city] = defineField('city');

const contactMethod = ref('message');

const { data } = await useAsyncData(
  'categories',
  () => categoriesService.getCategories(),
  { server: false },
);

const categoryOptions = computed(() => {
  const categories = data.value?.categories ?? [];

  return categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
});

const onSubmit = handleSubmit(async (values) => {
  const result = await adService.createAd({
    ...values,
    contactMethod: contactMethod.value,
  });
});
</script>

<template>
  <div class="page-wrapper">
    <main class="main-content">
      <h2>Postavi oglas</h2>
      <form class="job-form" @submit="onSubmit">
        <section class="form-section">
          <UiInput
            v-model="title"
            name="title"
            label="Naslov oglasa"
            placeholder="npr. Čišćenje stana 50m2"
            :error="errors.title" />

          <UiTextarea
            v-model="description"
            name="description"
            label="Opis posla"
            placeholder="Detaljno opišite što vam je potrebno..."
            rows="5"
            :error="errors.description" />

          <UiSelect
            v-model="category"
            id="category"
            name="category"
            label="Kategorija"
            :options="categoryOptions"
            defaultOption="Odaberi kategoriju" />
        </section>

        <section class="grid-section">
          <UiInput
            v-model="postalCode"
            name="postalCode"
            label="Poštanski broj"
            placeholder="10000"
            :error="errors.postalCode" />

          <UiInput
            v-model="city"
            name="city"
            label="Grad"
            placeholder="Zagreb"
            :error="errors.city" />
        </section>

        <section class="form-section">
          <h2 class="section-heading">
            Kako želite da vas čistači kontaktiraju?
          </h2>

          <div class="radio-stack">
            <UiRadioButton
              v-model="contactMethod"
              name="contactPreference"
              value="message"
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
          <UiButton type="submit" :disabled="!meta.valid"
            >Objavi oglas</UiButton
          >
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
  padding-top: 20px;
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
