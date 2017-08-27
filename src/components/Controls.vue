<template>
  <div class='controllers'>
    <button @click='toggle' :class='{ "play": pause, "pause": !pause }'>
    </button>
  </div>
</template>

<script>
// import imgPausePath from '../assets/icon-pause-50x50.png'

export default {
  name: 'controllers',
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      pause: false
    }
  },

  mounted () {
    this.pause = !this.active
    // this.imgPause = imgPausePath
  },

  methods: {
    toggle () {
      this.pause = !this.pause
      this.$emit('pause', {
        'pause': this.pause
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .controllers {
    position: absolute;
    width: 100%;
    bottom: 0px;
    text-align: center;
    margin-bottom: 10px;
  }

  button {
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    background: none;
  }

  button.play {
    background-image: url('../assets/icon-play-50x50.png');
  }

  button.pause {
    background-image: url('../assets/icon-pause-50x50.png');
  }

  button:hover {
    cursor: pointer;
  }
</style>
