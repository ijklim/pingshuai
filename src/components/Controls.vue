<template>
  <div class='controls'>
    <transition name='fade' mode="out-in">
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
    }
  },

  // methods
  methods: {
    toggle () {
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

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
</style>
