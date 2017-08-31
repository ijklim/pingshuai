<template>
  <div>
    <h1>Resources</h1>
    <ul>
      <li v-for="(resource, index) in resources" :key='index'>
        <a :href='resource.url' target='_blank'>{{ resource.title }}</a>
      </li>
    </ul>

    <footer>
      <a href='/'>Home</a>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'resources',
  components: {
  },
  data () {
    return {
      resources: [
        { title: '(video) 平甩功 Ping Shuai Exercise demonstration in Chinese', url: 'https://www.youtube.com/watch?v=Mf-hj9H95Co' },
        { title: '(video) Ping Shuai Exercise demonstration in English', url: 'https://www.youtube.com/watch?v=YARCKKFAIzk&t=2s' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul {
  text-align: left;
}

li {
  font-size: 1.4em;
  line-height: 1.5em;
  margin-top: 25px;
}
</style>
