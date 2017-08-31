<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Orbitron';

body {
  margin: 0;
  height: 100vh;
  background-image: url('./assets/bg-1680x1050.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}

#app {
  font-family: 'Orbitron', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  /* margin-top: 40px; */
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

footer {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
</style>
