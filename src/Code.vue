<template>
  <div class="code">
    <h1>Code</h1>
    <p>Learning to code has helped me to become a better and more effective designer.
      <br>Here are a few very smalls samples that help demonstrate how I think with code.
    </p>
    <a target="_blank" href="https://medium.com/@ddubski/setting-up-modular-postcss-with-webpack-9af084513acc">A Medium Post</a>
    <a target="_blank" href="https://stackoverflow.com/questions/47893923/vue2-vuex-commit-not-committing-without-vue-devtools">My First Stack Overflow Question</a>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  data () {
    return {
      jsSample: "https://gist.github.com/pandyrichter/4ac8f024fa8361bd683873adbde7a103.js"
    }
  },
  mounted () {
    const jsSample1 = document.getElementById('jsSample1')
    jsSample1.innerHTML = eval('<script src=\"https://gist.github.com/pandyrichter/4ac8f024fa8361bd683873adbde7a103.js\"><\/script>')

  },
  components: {
    AppMenu: Menu
  }
}
</script>

<style>
.code {
  width: var(--desktopWidth);
  margin: 0 auto;
}

.code > h3 {
  font-size: var(--fontMd);
}

.code > p {
  font-size: var(--fontLg);
}

.code > a {
  display: block;
  font-size: var(--fontLg);
  color: var(--cyan);
}

.code a:hover {
  color: var(--blue);
}
</style>
