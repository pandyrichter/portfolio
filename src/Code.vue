<template>
  <div class="code">
    <h1>Code Samples</h1>
    <p>Learning to code has helped me to become a better and more effective designer.
      <br>Here are a few very smalls samples that help demonstrate how I think with code.
    </p>
    <h3>My first code</h3>
    <p id="jsSample1"></p>
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
</style>
