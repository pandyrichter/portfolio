<template>
  <div>
  <transition>
    <div class="menu" v-if="menuOpened">
      <div class="menu__items">
        <h1 @click="navToComponent('Home')">Home</h1>
        <div class="hr--blue"></div>
        <h1 >Projects</h1>
        <div class="hr--blue"></div>
        <h1 >Code</h1>
        <div class="hr--blue"></div>
        <h1 @click="navToComponent('Resume')">Resume</h1>
        <div class="hr--blue"></div>
        <h1 @click="navToComponent('Contact')">Contact</h1>
        <div class="menu-nav" @click="closeMenu">Close</div>
      </div>
    </div>
  </transition>
  <div v-if="!menuOpened" class="menu-nav" @click="menuOpened = !menuOpened">Menu</div>
  </div>
</template>

<script>
export default {
  // props: ['menuOpen'],
  data () {
    return {
      menuOpened: false
    }
  },
  methods: {
    closeMenu () {
      this.menuOpened = false
    },
    navToComponent (name) {
      if (this.$route.name !== name) {
        this.$router.push({ name })
      } else {
        this.menuOpened = false
      }
    }
  }
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

.menu__items > h1 {
  cursor: pointer;
  transition: color 200ms;
}

.menu__items > h1:hover {
  color: var(--red);
}

.menu-nav {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
  color: var(--blue);
  background-color: var(--cyan);
  border-radius: 3px;
  padding: 15px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}

.menu-nav:hover {
  color: var(--red);
}
</style>
