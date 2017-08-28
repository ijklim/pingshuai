<template>
  <div class='controllers'>
    <button @click='toggle' :class='{ "play": pause, "pause": !pause }'>
    </button>
  </div>
</template>

<script>
// import imgPausePath from '../assets/icon-pause-50x50.png'

export default {
  name: 'Controls',

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
      pause: false
    }
  },

  // methods
  methods: {
    toggle () {
      this.pause = !this.pause
      this.$emit('play-button-toggle', {
        'pause': this.pause
      })
    }
  },

  // component Lifecycle hooks
  mounted () {
    this.pause = !this.active
    // this.imgPause = imgPausePath
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
