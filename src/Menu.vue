<template>
  <transition>
    <div v-if="menuOpen" class="menu">
      <div class="menu__items">
        <h1>Home</h1>
        <div class="hr--blue"></div>
        <h1>Projects</h1>
        <div class="hr--blue"></div>
        <h1>Resume</h1>
        <router-link :to="{ name: 'Resume' }">Resume</router-link>
        <div class="hr--blue"></div>
        <h1>Contact</h1>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <div class="menu-nav">Close</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['menuOpen']
}
</script>

<style scoped>
h1 {
  color: var(--blue);
}
.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  opacity: .95;
  top: 0;
  left: 0;
  background-color: var(--cyan);
  color: var(--blue);
}

.menu__items {
  width: 50%;
}
</style>
