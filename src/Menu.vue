<template>
  <div>
  <transition>
    <div class="menu" v-if="menuOpened">
      <div class="menu__items">
        <h1 @click="navToComponent('Home')">Home</h1>
        <div class="hr--blue"></div>
        <h1 @click="scrollToProjects()">Projects</h1>
        <div class="hr--blue"></div>
        <h1 @click="navToComponent('Resume')">Resume</h1>
      </div>
    </div>
  </transition>
  <div v-if="!menuOpened" class="menu-nav" @click="menuOpened = !menuOpened">Menu</div>
  </div>
</template>

<script>
import { eventBus} from './main'

export default {
  data () {
    return {
      menuOpened: false
    }
  },
  mounted () {
    eventBus.$on('openingMenu', status => {
      console.log('Opened menu from Projects!')
      this.menuOpened = status
    })
  },
  methods: {
    closeMenu () {
      this.menuOpened = false
    },
    navToComponent (name) {
      if (name !== this.$route.name) {
        this.$router.push({ name })
        this.closeMenu()
      } else {
        this.closeMenu()
      }
    },
    scrollToProjects () {
      const headlineWrapper = document.getElementById('headlineWrapper')
      if (this.$route.name !== 'Home') {
        this.navToComponent('Home')
        window.scrollTo(0,headlineWrapper.offsetHeight)
      } else {
        window.scrollTo(0,headlineWrapper.offsetHeight)
        this.closeMenu()
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: fixed;
  opacity: .95;
  top: 0;
  left: 0;
  background-color: var(--cyan);
  z-index: 3;
}

.menu__items {
  width: 90%;
}

.menu__items > h1 {
  cursor: pointer;
  transition: color 200ms;
  color: var(--black);
}

.menu__items > h1:hover {
  color: var(--blue);
}

.menu-nav {
  position: fixed;
  top: 0;
  right: 0;
  color: var(--cyan);
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  text-align: right;
  width: 100%;
  padding: 15px 15px;
  z-index: 2;
  transition: all 200ms;
}

.menu-nav:hover {
  color: var(--red);
}

.fixed-nav .menu-nav {
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .menu {
    justify-content: space-around;
  }

  .menu__items {
    width: 50%;
  }

  .menu-nav {
    position: fixed;
    top: 5%;
    right: 5%;
    margin: 25px;
    color: var(--blue);
    display: inline-block;
    background-color: var(--cyan);
    border-radius: 3px;
    padding: 15px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    width: auto;
  }
}
</style>
