<template>
  <div class='timer' :class='{ "pause": !active }'>
    {{ counter }}
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      counter: '00 : 00 : 00',
      startTime: (new Date()).getTime(),
      interval: 1000,     /* in ms */
      timeDifference: 0
    }
  },
  mounted () {
    setInterval(this.setCounter, this.interval)
  },

  methods: {
    setCounter () {
      /* let timeDiff = (new Date((new Date()).getTime() - this.startTime)) */
      if (this.active) {
        this.timeDifference += this.interval
        var time = new Date(this.timeDifference)
        this.counter = '' +
                        ('00' + time.getUTCHours()).slice(-2) +
                        ' : ' +
                        ('00' + time.getUTCMinutes()).slice(-2) +
                        ' : ' +
                        ('00' + time.getUTCSeconds()).slice(-2)
      }
    }
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
