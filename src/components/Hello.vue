<template>
  <div class="hello">
    <timer :active="active"></timer>
    <controls @play-button-toggle="active = !active"></controls>
    <swing-counter :active="active" :speed="speed"></swing-counter>
    <swing-indicator :active="active" :speed="speed"></swing-indicator>
  </div>
</template>

<script>

import Controls from './Controls'
import SwingCounter from './SwingCounter'
import SwingIndicator from './SwingIndicator'
import Timer from './Timer'

export default {
  name: 'hello',
  components: {
    Controls,
    SwingCounter,
    SwingIndicator,
    Timer
  },
  data () {
    return {
      active: true,
      speed: 2000       /* in ms, time taken for each swing */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
