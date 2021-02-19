<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-3xl font-medium text-brand-darker">Create an account</h1>
      <button
        @click="close"
        class="text-4xl text-brand-darker focus:outline-none"
      >
        &times;
      </button>
    </div>

    <div class="mt-8">
      <form @submit.prevent="handleSubmit">
        <label for="name" class="block">
          <span class="text-lg font-medium text-brand-darker">Name</span>
          <input
            v-model="state.name.value"
            type="text"
            class="focus:outline-none block w-full px-4 py-3 mt-1 bg-brand-medium_light border border-transparent rounded-sm placeholder-brand-medium_dark"
            placeholder="Gabriel Lopes"
            :class="{ 'border-brand-danger': !!state.name.errorMessage }"
          />
          <span
            v-if="!!state.name.errorMessage"
            class="block font-normal text-brand-danger"
            >{{ state.name.errorMessage }}</span
          >
        </label>

        <label for="email" class="block mt-4">
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
          :class="{ 'opacity-50 hover:bg-brand-danger': state.isLoading }"
          :disabled="state.isLoading"
          class="w-full py-3 mt-6 text-xl font-medium bg-brand-danger rounded-sm text-brand-extra_light focus:outline-none hover:bg-transparent border border-brand-danger hover:border-brand-darker hover:text-brand-darker transition duration-200 shadow-md"
        >
          <icon
            v-if="state.isLoading"
            name="loading"
            class="animate-spin mx-auto"
          />
          <span v-else>Log In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useField } from 'vee-validate'
import { useToast } from 'vue-toastification'

import { useModal } from '../../../hooks/use-modal'
import {
  passwordValidation,
  emailValidation,
  nameValidation
} from '../../../utils/validations'
import services from '../../../services/'
import icon from '../../icon/'

export default {
  components: { icon },
  setup() {
    const toast = useToast()
    const router = useRouter()
    const modal = useModal()

    const { value: emailValue, errorMessage: emailErrorMessage } = useField(
      'email',
      emailValidation
    )

    const { value: nameValue, errorMessage: nameErrorMessage } = useField(
      'name',
      nameValidation
    )

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', passwordValidation)

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      name: {
        value: nameValue,
        errorMessage: nameErrorMessage
      },
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    const login = async ({ email, password }) => {
      const { data, errors } = await services.auth.login({
        email,
        password
      })
      if (!errors) {
        toast.clear()
        localStorage.setItem('token', data.token)
        toast.success('Account created sucessfully')
        router.push({ name: 'Feedbacks' })
        modal.close()
      }
    }

    const handleSubmit = async () => {
      try {
        state.isLoading = true
        const { errors } = await services.auth.register({
          name: state.name.value,
          email: state.email.value,
          password: state.password.value
        })

        if (!errors) {
          await login({
            email: state.email.value,
            password: state.password.value
          })
          return
        }
        if (errors.status === 400) toast.error('Something went wrong')
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Something went wrong inside the server')
      }
    }

    return { state, close: modal.close, handleSubmit }
  }
}
</script>
