<template>
  <div class='swing-indicator-wrapper'>
    <transition name='move'>
      <div class='swing-indicator' v-show='active'></div>
    </transition>
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'SwingIndicator',

  // component properties/variables
  props: {
    active: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 1000
    }
  },

  // variables
  data () {
    return {
      maxSwings: 5
    }
  },

  // methods
  methods: {
    swing () {
      if (this.active) {
        let indicator = this.$el.querySelector('.swing-indicator')
        // Downward movement, completes in half the time of full swing
        indicator.style.transition = 'all ' + (this.speed / 2000) + 's'
        indicator.style.transitionTimingFunction = 'ease-in-out'
        indicator.style.transform = 'translateY(' + (window.innerHeight - 170) + 'px)'
        setTimeout(() => {
          // Upward movement
          indicator.style.transform = 'translateY(0)'
        }, this.speed / 2)
      }
    }
  },

  // component Lifecycle hooks
  beforeCreate () {},
  mounted () {
    setInterval(this.swing, this.speed)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swing-indicator-wrapper {
  margin-top: 60px;
  position: fixed;
  width: 100%;
}

.swing-indicator {
  background-image: url('../assets/swing_indicator.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 36px;
  width: 100%;
  margin: auto;
}
</style>