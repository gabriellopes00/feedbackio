<template>
  <div class="w-full h-full">
    <custom-header
      @create-account="handleCreateAccount()"
      @login="handleLogin()"
    />
    <contact />
    <div class="flex justify-center py-10 bg-brand-graydark">
      <p class="font-medium text-center text-white text-lg">
        Feedfier &copy; 2021 | Gabriel Lopes &copy; 2021
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import CustomHeader from './custom-header'
import Contact from './contact'

export default {
  components: { CustomHeader, Contact },
  setup() {
    const router = useRouter()

    function handleLogin() {}
    function handleCreateAccount() {}
    onMounted(() => {
      const token = localStorage.getItem('token')
      if (token) router.push({ name: 'Feedbacks' })
    })

    return { handleLogin, handleCreateAccount }
  }
}
</script>
