// v-elevate[.sm|.lg] -> adds a hover shadow using Bootstrap's shadow classes
export default {
  inserted(el, binding) { // Vue 2 hook
    const cls = binding.modifiers.lg
      ? 'shadow-lg'
      : binding.modifiers.sm
      ? 'shadow-sm'
      : 'shadow'
    const onEnter = () => el.classList.add(cls)
    const onLeave = () => el.classList.remove(cls)
    el.__elevateHandlers__ = { onEnter, onLeave }
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
  },
  unbind(el) {
    const h = el.__elevateHandlers__ || {}
    if (h.onEnter) el.removeEventListener('mouseenter', h.onEnter)
    if (h.onLeave) el.removeEventListener('mouseleave', h.onLeave)
  }
}