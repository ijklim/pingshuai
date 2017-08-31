<template>
  <transition name='fade'>
    <!-- Adding :key='counter' to swing-counter-wrapper div will transition each counter change -->
    <div class='swing-counter-wrapper'@click='toggle' v-if='counter > 0' :key='active'>
      <div class='swing-counter' :class='{ "pause": !active, "squat": shouldSquat }'>
        {{ counter }}
      </div>
      <div v-if='counter > 0 && !active' class='speed'>{{ speed / 1000 }}s per swing</div>
    </div>
  </transition>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'SwingCounter',

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
      counter: 0,
      maxSwings: 5
    }
  },
  computed: {
    shouldSquat: function () {
      return (this.counter === this.maxSwings)
    }
  },

  // methods
  methods: {
    setCounter () {
      if (this.active) {
        this.counter = (this.counter++ % (this.maxSwings)) + 1
      }
      // console.log('(SwingCounter) setCounter > Counter: ' + this.counter)
    },
    toggle () {
      this.$emit('play-button-toggle')
    }
  },

  // component Lifecycle hooks
  beforeCreate () {},
  mounted () {
    // console.log('(SwingCounter) Mounted > Speed: ' + this.speed)
    setInterval(this.setCounter, this.speed)
    // console.log('(SwingCounter) Mounted > Counter: ' + this.counter)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swing-counter-wrapper {  
  /* Center element */
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

.swing-counter-wrapper:hover {
  cursor: pointer;
}

.swing-counter {
  color: green;
  font-size: 20em;
  line-height: 1.1em;
}

/* Mobile landscape */
@media screen and (max-height: 412px) {
  .swing-counter {
    font-size: 12em;
  }

  .speed {
    display: none;
  }
}

.squat {
  color: lightgreen;
}

.pause {
  color: #999;
}


.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>