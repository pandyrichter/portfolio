<template>
    <main id="app">
      <router-view></router-view>
    </main>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
:root {
  --cyan: #38FFD9;
  --blue: #37A1E1;
  --red: #F25757;
  --yellow: #F2E863;
}

body {
  margin: 0;
}

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

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
  color: #333;
  font-weight: 500;
  font-size: .8rem;
  transition: color 250ms;
}

a:hover {
  color: var(--cyan)
}

.hr--green {
  width: 100%;
  border-bottom: 2px solid var(--cyan);
  margin: 15px 0px;
}

.hr--blue {
  width: 100%;
  border-bottom: 2px solid var(--blue);
  margin: 15px 0px;
}

.accent--green {
  color: var(--cyan);
}
</style>
