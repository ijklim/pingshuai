<template>
  <div class="hello">
    <timer :active="active"></timer>
    <controls @pause="active = !active"></controls>
  </div>
</template>

<script>
import Timer from './Timer'
import Controls from './Controls'

export default {
  name: 'hello',
  components: {
    Timer,
    Controls
  },
  data () {
    return {
      active: true
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
