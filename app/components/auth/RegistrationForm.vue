<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const schema = toTypedSchema(
  z
    .object({
      firstName: z.string().min(3, 'Minimalno 3 znaka'),
      lastName: z.string().min(3, 'Minimalno 3 znaka'),
      email: z.email('Unesite važeći email'),
      password: z.string().min(6, 'Minimalno 6 znakova'),
      confirmPassword: z.string().min(6, 'Minimalno 6 znakova'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Lozinke se ne podudaraju',
      path: ['confirmPassword'],
    }),
);

const { defineField, errors, handleSubmit, meta } = useForm({
  validationSchema: schema,
});

const [firstName] = defineField('firstName');
const [lastName] = defineField('lastName');
const [email] = defineField('email');
const [password] = defineField('password');
const [confirmPassword] = defineField('confirmPassword');
</script>

<template>
  <div>
    <h1>Registration</h1>
    <form>
      <UiInput
        v-model="firstName"
        name="firstName"
        placeholder="Unesite svoje ime"
        label="Vaše ime:"
        type="text"
        :error="errors.firstName" />
      <UiInput
        v-model="lastName"
        name="lastName"
        placeholder="Unesite svoje prezime"
        label="Vaše prezime:"
        type="text"
        :error="errors.lastName" />
      <UiInput
        v-model="email"
        name="email"
        placeholder="Unesite važeći email"
        label="Vaš email"
        type="text"
        :error="errors.email" />
      <UiInput
        v-model="password"
        name="password"
        placeholder="Unesite lozinku"
        label="Lozinka"
        type="password"
        :error="errors.password" />
      <UiInput
        v-model="confirmPassword"
        name="confirmPassword"
        placeholder="Ponovite istu lozinku"
        label="Ponovite lozinku"
        type="password"
        :error="errors.confirmPassword" />
      <UiButton variant="primary" :disabled="!meta.dirty || !meta.valid"
        >Submit</UiButton
      >
    </form>
  </div>
</template>
