import { reactive } from 'vue'

const userState = reactive({
  currentUser: {}
})

export default userState

export const setCurrentUser = user => {
  userState.currentUser = user
}

export const setApiKey = apiKey => {
  const currentUser = { ...userState.currentUser, apiKey }
  userState.currentUser = currentUser
}

export const cleanCurrentUser = () => (userState.currentUser = {})
