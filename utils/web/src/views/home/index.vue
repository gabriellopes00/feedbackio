<template>
  <div class="w-full h-full">
    <CustomHeader
      @create-account="handleCreateAccount()"
      @login="handleLogin()"
    />

    <Contact />
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useModal } from '../../hooks/use-modal'

import CustomHeader from './custom-header'
import Contact from './contact'
import Footer from './footer'

export default {
  components: { CustomHeader, Contact, Footer },
  setup() {
    const router = useRouter()
    const modal = useModal()

    function handleLogin() {
      modal.open({ component: 'LoginModal' })
    }
    function handleCreateAccount() {
      modal.open({ component: 'CreateAccountModal' })
    }

    onMounted(() => {
      const token = localStorage.getItem('token')
      if (token) router.push({ name: 'Feedbacks' })
    })

    return { handleLogin, handleCreateAccount }
  }
}
</script>
