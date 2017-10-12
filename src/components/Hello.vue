<template>
  <div class="hello">
    <timer :active="active"></timer>
    <total-counter :active="active" :speed="speed"></total-counter>
    <controls :active="active" @play-button-toggle="active = !active"></controls>
    <swing-counter :active="active" :speed="speed" @play-button-toggle="active = !active"></swing-counter>
    <swing-indicator :active="active" :speed="speed"></swing-indicator>
    <debug-window :show="false"></debug-window>
    <footer>
      <a href='/resources'>Resources</a>
    </footer>
  </div>
</template>

<script>

import Controls from './Controls'
import DebugWindow from './DebugWindow'
import SwingCounter from './SwingCounter'
import SwingIndicator from './SwingIndicator'
import Timer from './Timer'
import TotalCounter from './TotalCounter'

export default {
  name: 'hello',
  components: {
    Controls,
    DebugWindow,
    SwingCounter,
    SwingIndicator,
    Timer,
    TotalCounter
  },
  data () {
    return {
      active: false,
      speed: process.env.SWING_SPEED       /* in ms, time taken for each swing */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
