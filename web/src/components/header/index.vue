<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <div class="flex justify-center">
        <h1 class="mr-4 text-brand-light text-4xl font-black">Feedfier</h1>
        <img class="w-10" src="../../assets/images/logo-light.svg" alt="logo" />
      </div>
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
          @click="() => router.push({ name: 'Credentials' })"
          class="px-6 mr-2 font-bold text-brand-darker rounded-sm bg-brand-light cursor-pointer focus:outline-none"
        >
          Credentials
        </li>
        <li
          @click="() => router.push({ name: 'Feedbacks' })"
          class="px-6 mr-2 font-bold text-brand-darker bg-brand-light rounded-sm cursor-pointer focus:outline-none"
        >
          Feedbacks
        </li>
        <li
          @click="handleLogOut"
          class="px-6 py-2 font-bold rounded-sm cursor-pointer text-brand-darker bg-brand-light focus:outline-none"
        >
          {{ logOut }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { cleanCurrentUser } from '../../store/user'
import useStore from '../../hooks/useStore'

export default {
  setup() {
    const router = useRouter()
    const store = useStore('user')
    const logOut = computed(() => {
      if (!store.currentUser.name) return '...'
      else return `${store.currentUser.name} (LogOut)`
    })

    const handleLogOut = () => {
      localStorage.removeItem('token')
      cleanCurrentUser()
      router.push({ name: 'Home' })
    }

    return { router, logOut, handleLogOut }
  }
}
</script>
