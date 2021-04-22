<template>
  <teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToogle({ status: false })"
    >
      <div class="fixed mx-10" :class="state.width" @click.stop>
        <div
          class="flex flex-col overflow-hidden bg-brand-light rounded-lg animate__animated animate__zoomIn animate__faster"
        >
          <div class="flex flex-col px-8 py-6 bg-brand-light">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { reactive, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { useModal } from '../../../hooks/use-modal'

const LoginModal = defineAsyncComponent(() => import('../login/index'))
const CreateAccountModal = defineAsyncComponent(() =>
  import('../create-account/index')
)

const defaultWidth = 'w-3/4 lg:w-1/3'

export default {
  components: {
    LoginModal,
    CreateAccountModal
  },
  setup() {
    const modal = useModal()
    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: defaultWidth
    })

    onMounted(() => {
      modal.listen(handleModalToogle)
    })

    onBeforeUnmount(() => {
      modal.off(handleModalToogle)
    })

    function handleModalToogle(payload) {
      if (payload.status) {
        state.component = payload.component
        state.props = payload.props
        state.width = payload.width ?? defaultWidth
      } else {
        state.component = {}
        state.props = {}
        state.width = defaultWidth
      }

      state.isActive = payload.status
    }

    return {
      state,
      handleModalToogle
    }
  }
}
</script>
