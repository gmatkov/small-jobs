<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const schema = toTypedSchema(
  z.object({
    email: z.email('Unesite važeći email!'),
    password: z.string().min(6, 'Minimalno 6 znakova'),
  }),
);

const { handleSubmit, errors, defineField, meta } = useForm({
  validationSchema: schema,
});

const [email] = defineField('email');
const [password] = defineField('password');

const authStore = useAuthStore();

const { message, redirect } = defineProps<{
  message?: string | null;
  redirect?: string;
}>();

const onSubmit = handleSubmit(async (values) => {
  try {
    await authStore.login(values.email, values.password);
    navigateTo(redirect);
  } catch (error) {
    console.log('Login Failed', error);
  }
});

const { user } = storeToRefs(authStore);
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <h2>Login</h2>
    <form @submit="onSubmit">
      <UiInput
        v-model="email"
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        :error="errors.email" />
      <UiInput
        v-model="password"
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        :error="errors.password" />
      <UiButton type="submit" :disabled="!meta.valid">Login</UiButton>
    </form>
  </div>
</template>
