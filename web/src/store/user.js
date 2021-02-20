import { reactive } from 'vue'

const userInitialState = reactive({
  currentUser: {}
})

const state = reactive(userInitialState)
export default state

export const setCurrentUser = user => {
  state.currentUser = user
}

export const setApiKey = apiKey => {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}

export const cleanCurrentUser = () => (state.currentUser = {})
