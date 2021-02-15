<template>
  <header class="w-full h-full flex justify-center bg-brand-light">
    <div class="header-group">
      <div class="py-10 flex items-center justify-between">
        <div class="w-28 lg:w-36">
          <div class="flex">
            <h1 class="mr-4 text-brand-darker text-4xl font-black">Feedfier</h1>
            <img class="w-10" src="../../assets/images/logo.svg" alt="logo" />
          </div>
        </div>

        <div class="flex">
          <button
            @click="() => emit('login')"
            class="px-6 py-2 mx-2 font-medium bg-brand-danger rounded-sm text-brand-extra_light focus:outline-none hover:bg-transparent border border-brand-danger hover:border-brand-darker hover:text-brand-darker transition duration-200 shadow-md"
          >
            Log In
          </button>
          <button
            @click="() => emit('create-account')"
            class="px-6 py-2 mx-2 font-medium bg-brand-darker rounded-sm text-brand-extra_light focus:outline-none hover:bg-transparent border border-brand-darker hover:border-brand-darker hover:text-brand-darker transition duration-200 shadow-md"
          >
            Create an Account
          </button>
        </div>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-brand-darker">
          Get and manage feedbacks easily. <br />
          And have a better control <br class="hidden lg:inline-block" />
          over your services.
        </h1>
        <p class="text-lg mt-4 text-brand-dark font-medium">
          Receive ideas, feedbacks, sugestions and claims with<br
            class="hidden lg:inline-block"
          />
          a simple widget on your website page.
        </p>
        <div>
          <button
            class="px-10 py-2 mt-4 font-medium bg-brand-danger rounded-sm text-brand-extra_light focus:outline-none hover:bg-transparent border border-brand-danger hover:border-brand-darker hover:text-brand-darker transition duration-200 shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup(_, { emit }) {
    return { emit }
  }
}
</script>

<style lang="postcss" scoped>
.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 1140px) {
  .header-group {
    background-image: url(../../assets/images/landing.svg);
    background-size: 458px;
    background-position: 100% 75%;
    background-repeat: no-repeat;
  }
}
</style>
