<template>
  <div class='swing-counter' :class='{ "pause": !active }'>
    {{ counter + 1 }}
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

  // methods
  methods: {
    setCounter () {
      if (this.active) {
        this.counter = ++this.counter % (this.maxSwings)
      }
    }
  },

  // component Lifecycle hooks
  beforeCreate () {},
  mounted () {
    setInterval(this.setCounter, this.speed)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swing-counter {
  /* Center element */
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);

  color: green;
  font-size: 20em;
}

.pause {
  color: #999;
}
</style>