<template>
  <div class="contact">
    <h1>Contact</h1>
    <h3>Email: dwstein@outlook.com</h3>
    <h3>Phone: 781-775-8125</h3>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  components: {
    AppMenu: Menu
  }
}
</script>

<style>
.contact {
  width: var(--desktopWidth);
  margin: 0 auto;
}

.contact > h3 {
  font-size: var(--fontSm);
  font-weight: 400;
}
</style>
