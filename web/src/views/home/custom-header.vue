<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <h1 class="text-white font-black text-4xl">Feedfier</h1>
        </div>

        <div class="flex">
          <button
            class="px-6 py-2 mx-2 font-bold text-white rounded-sm border border-white focus:outline-none hover:bg-white hover:text-brand-graydark transition duration-200"
          >
            Log In
          </button>
          <button
            class="px-6 py-2 font-bold bg-white rounded-sm text-brand-graydark focus:outline-none hover:bg-brand-graydark border border-white hover:text-white transition duration-200"
          >
            Create an account
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Get and manage feedbacks easily. <br />
          And made your customers <br class="hidden lg:inline-block" />
          happy.
        </h1>
        <p class="text-lg mt-4 text-white font-medium">
          Receive ideas, feedbacks, sugestions and claims with<br
            class="hidden lg:inline-block"
          />
          a simple widget on your website page.
        </p>
        <div>
          <button
            class="px-10 py-2 mt-10 font-bold bg-brand-danger rounded-sm text-white focus:outline-none hover:bg-brand-graydark border border-brand-danger hover:border-white hover:text-white transition duration-200"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.header {
  height: 700px;
  @apply bg-brand-graydark w-full flex justify-center;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 1140px) {
  .header-group {
    background-image: url(../../assets/images/landing.svg);
    background-size: 558px;
    background-position: 100% 60%;
    background-repeat: no-repeat;
  }
}
</style>
