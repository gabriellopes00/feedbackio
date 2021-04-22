<template>
  <div>
    <header
      class="flex items-center justify-center w-full h-28 bg-brand-darker"
    >
      <Header />
    </header>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-light">
      <h1 class="text-4xl font-medium text-center text-brand-darker">
        Credentials
      </h1>
      <p class="text-lg text-center text-brand-dark font-medium mt-2">
        Credentials installation and configuration guide
      </p>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/index'

export default {
  components: { Header }
}
</script>
