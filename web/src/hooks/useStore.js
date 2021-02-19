import store from '../store/index'

export default function useStore(module) {
  if (module) return store[module]
  return store
}
