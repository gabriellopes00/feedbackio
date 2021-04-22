import { reactive } from 'vue'

const state = reactive({
  isLoading: false
})

export default state
export const setGlobalLoading = status => {
  state.isLoading = status
}
