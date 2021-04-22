import { readonly } from 'vue'
import userState from './user'
import GlobalModule from './global'

export default readonly({ user: userState, global: GlobalModule })
