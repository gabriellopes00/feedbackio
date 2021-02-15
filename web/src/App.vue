<template>
  <ModalFactory />
  <router-view />
</template>

<script>
import ModalFactory from './components/modal/factory/index'
export default {
  components: { ModalFactory }
}
</script>
