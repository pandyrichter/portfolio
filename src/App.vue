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
  --darkBlue: #111D4A;
  --red: #F25757;
  --yellow: #F2E863;
  --black: #333;
  --gray: #E8E8E8;
  --desktopWidth: 1080px;
  --tabletWidth: 700px;
  --fontSm: 0.85rem;
  --fontMd: 0.95rem;
  --fontLg: 1.5rem;
  --fontXl: 3.2rem;
}

body {
  margin: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-weight: normal;
  font-family: 'Rubik', sans-serif;
}

ul {
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

.hide-until-tablet {
  display: none;
}

.hide-until-desktop {
  display: none;
}

.hide-at-tablet {
  display: none;
}

@media screen and (min-width: 768px) {
  .hide-until-tablet {
    display: inline-block;
    margin: 0px 5px;
  }

  .hide-at-tablet {
    display: inline-block;
    margin: 0px 5px;
  }

  .show-mobile-only {
    display: none;
  }

}

@media screen and (min-width: 1200px) {
  .hide-until-desktop {
    display: inline-block;
    margin: 0px 5px;
  }

  .hide-at-tablet {
    display: none;
  }
}
</style>
