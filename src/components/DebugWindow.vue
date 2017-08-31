<template>
  <div class='debug-window' v-if='!hide'>
    <button @click='hide = true'>&times;</button>
    Screen Width: {{ screenWidth }}, Screen Height: {{ screenHeight }}
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'DebugWindow',

  // component properties/variables
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },

  // variables
  data () {
    return {
      hide: false,
      screenWidth: 0,
      screenHeight: 0
    }
  },

  // methods
  methods: {
    setData () {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
    }
  },

  // component Lifecycle hooks
  beforeCreate () {},
  mounted () {
    this.hide = !this.show
    this.setData()
    window.addEventListener('resize', () => {
      this.setData()
    })
  }
}
</script>

<style scoped>
.debug-window {  
  /* Center element */
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>