<template>
  <div class='controls' :class='{ "started": started }'>
    <transition name='fade' mode='out-in'>
      <!-- Note: Without at least 1 :key binding transition would not work, and it should correspond to a variable without generating Vue warning -->
      <button @click='toggle' class='pause' :key='active' v-if='active' title='Pause'></button>
      <button @click='toggle' class='play' v-else title='Start'></button>
    </transition>
  </div>
</template>

<script>
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
      started: false
    }
  },

  // methods
  methods: {
    toggle () {
      this.started = true
      this.$emit('play-button-toggle')
    }
  },

  // component Lifecycle hooks
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controls {
  /* width: 100%; */
  text-align: center;
  /* Center element */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.started {
  transition: all .5s ease-in;
  /* transform: translate(-50%, 42vh); */
  position: absolute;
  top: unset;
  bottom: 10px;
  transform: translate(-50%, 0);
}

button {
  width: 256px;
  height: 256px;
  border: none;
  outline: none;
  background: none;
  background-repeat: no-repeat;
  background-position: center center;
}

.started button {
  width: 50px;
  height: 50px;
}

button.play {
  background-image: url('../assets/icon-play-256x256.png');
}

.started button.play {
  background-image: url('../assets/icon-play-50x50.png');
}

button.pause {
  background-image: url('../assets/icon-pause-50x50.png');
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
</style>
