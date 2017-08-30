<template>
  <div class='swing-counter-wrapper'>
    <div class='swing-counter' :class='{ "pause": !active, "squat": shouldSquat }'>
      {{ counter }}
    </div>
    <div>Speed: {{ speed / 1000 }}s per swing</div>
  </div>
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

.swing-counter {
  color: green;
  font-size: 20em;
}

.squat {
  color: lightgreen;
}

.pause {
  color: #999;
}
</style>