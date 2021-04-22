import bus from '../utils/bus'

const eventName = 'modal:toggle'

export function useModal() {
  function open(payload = {}) {
    bus.emit(eventName, { status: true, ...payload })
  }

  function close(payload = {}) {
    bus.emit(eventName, { status: false, ...payload })
  }

  function listen(fn) {
    bus.on(eventName, fn)
  }

  function off(fn) {
    bus.off(eventName, fn)
  }

  return { open, close, listen, off }
}
