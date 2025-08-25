// Toggles a Bootstrap border on/off via click
export default {
  data() {
    return { hasBorder: false }
  },
  methods: {
    toggleBorder() {
      this.hasBorder = !this.hasBorder
    }
  },
  computed: {
    imageBorderClass() {
      return this.hasBorder ? 'border border-primary' : ''
    }
  }
}