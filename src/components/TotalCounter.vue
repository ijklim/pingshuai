<template>
  <div class='total-counter' :class='{ "pause": !active }'>
    {{ counter }}
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'TotalCounter',

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
      counter: 0
    }
  },

  // methods
  methods: {
    setCounter () {
      if (this.active) {
        this.counter++
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
.total-counter {
  float: right;
  margin: 15px;
  color: red;
  font-size: 1.5em;
}

.pause {
  color: #999;
}
</style>