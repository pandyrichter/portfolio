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
  --black: #333;
  --gray: lightgray;
  --desktopWidth: 1080px;
  --fontSm: 0.85rem;
  --fontLg: 1.5rem;
  --fontXl: 3.0rem;
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

.hr-thin--blue {
  width: 100%;
  border-bottom: 1px solid var(--blue);
  margin: 15px 0px;
}

.hr-thin--gray {
  width: 100%;
  border-bottom: 1px solid var(--gray);
  margin: 15px 0px;
}

.accent--green {
  color: var(--cyan);
}

.accent--blue {
  color: var(--blue);
}
</style>
