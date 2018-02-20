<template>
    <div>
    <app-menu></app-menu>
    <headline></headline>
    <projects></projects>
    </div>
</template>

<script>
import Headline from './Headline'
import Projects from './Projects'
import Menu from './Menu'

export default {
  components: {
    Headline,
    Projects,
    AppMenu: Menu
  }
}
</script>

<style>
body {
  margin: 0;
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

.accent--green {
  color: var(--cyan);
}
</style>
