<template>
  <div class='timer' :class='{ "pause": !active }'>
    {{ counter }}
  </div>
</template>

<script>
export default {
  name: 'Timer',

  // component properties/variables
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },

  // variables
  data () {
    return {
      counter: '00 : 00 : 00',
      oneSecond: 1000,
      timeDifference: 0
    }
  },

  // methods
  methods: {
    setCounter () {
      if (this.active) {
        this.timeDifference += this.oneSecond
        var time = new Date(this.timeDifference)
        this.counter = '' +
                        ('00' + time.getUTCHours()).slice(-2) +
                        ' : ' +
                        ('00' + time.getUTCMinutes()).slice(-2) +
                        ' : ' +
                        ('00' + time.getUTCSeconds()).slice(-2)
      }
    }
  },

  // component Lifecycle hooks
  mounted () {
    setInterval(this.setCounter, this.oneSecond)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer {
  float: left;
  margin: 15px;
  color: blue;
  font-size: 1.5em;
}

.pause {
  color: #999;
}
</style>
