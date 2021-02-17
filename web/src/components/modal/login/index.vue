<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-3xl font-medium text-brand-darker">Enter your account</h1>
      <button
        @click="close"
        class="text-4xl text-brand-darker focus:outline-none"
      >
        &times;
      </button>
    </div>

    <div class="mt-8">
      <form @submit.prevent="handleSubmit">
        <label for="email" class="block">
          <span class="text-lg font-medium text-brand-darker">E-mail</span>
          <input
            v-model="state.email.value"
            type="email"
            class="block w-full px-4 py-3 mt-1 bg-brand-medium_light border border-transparent rounded-sm focus:outline-none placeholder-brand-medium_dark"
            placeholder="feedfier@mail.com"
            :class="{ 'border-brand-danger': !!state.email.errorMessage }"
          />
          <span
            v-if="!!state.email.errorMessage"
            class="block font-normal text-brand-danger"
            >{{ state.email.errorMessage }}</span
          >
        </label>

        <label for="password" class="block mt-4">
          <span class="text-lg font-medium text-brand-darker">Password</span>
          <input
            v-model="state.password.value"
            type="password"
            class="focus:outline-none block w-full px-4 py-3 mt-1 bg-brand-medium_light border border-transparent rounded-sm placeholder-brand-medium_dark"
            placeholder="******"
            :class="{ 'border-brand-danger': !!state.password.errorMessage }"
          />
          <span
            v-if="!!state.password.errorMessage"
            class="block font-normal text-brand-danger"
            >{{ state.password.errorMessage }}</span
          >
        </label>
        <button
          :class="{ 'opacity-50': state.isLoading }"
          :disabled="state.isLoading"
          class="w-full py-3 mt-6 text-xl font-medium bg-brand-danger rounded-sm text-brand-extra_light focus:outline-none hover:bg-transparent border border-brand-danger hover:border-brand-darker hover:text-brand-darker transition duration-200 shadow-md"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import { useModal } from '../../../hooks/use-modal'
import { passwordValidation, emailValidation } from '../../../utils/validations'

export default {
  setup() {
    const { value: emailValue, errorMessage: emailErrorMessage } = useField(
      'email',
      emailValidation
    )
    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', passwordValidation)

    const modal = useModal()
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })
    const handleSubmit = () => {}
    return { state, close: modal.close, handleSubmit }
  }
}
</script>
