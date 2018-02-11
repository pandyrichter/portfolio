<template>
    <div>
      <headline></headline>
      <div id="projectWrapper">
        <nav id="projectNav">
          <div class="project-nav" @click="toggleThruProjects('prev')">👈</div>
          <div>Project {{ projectIndex + 1 }} of {{ projectsFull.length }}</div>
          <div class="project-nav" @click="toggleThruProjects('next')">👉</div>
        </nav>
        <project v-for="(project, i) in projectsFull" v-show="projectIndex === i" :key="project.id" :projectData="project"></project>
      </div>
     <div class="menu-nav" @click="menuOpen = !menuOpen">Menu</div>
    <app-menu :menuOpen="menuOpen"></app-menu>
    </div>
</template>

<script>
import Prismic from 'prismic-javascript';

import Headline from './Headline'
import Project from './Project'
import Menu from './Menu'

export default {
  data () {
    return {
      projectIndex: 0,
      projectsFull: [],
      menuOpen: false,
    }
  },
  created () {
      const apiEndpoint = 'https://dsportfolio.prismic.io/api/v2';

      const content = Prismic.getApi(apiEndpoint).then(api => {
        return api.query("", { orderings: '[my.project.project_order_num]'})
      }).then(response => {
        console.log('Documents: ', response.results)
        this.projectsFull = response.results
      }, err => {
        console.log('Something went wrong', err)
      });

      content();
  },
  methods: {
    toggleThruProjects (dir) {
      let self = this
      if (dir === 'next') {
        self.projectIndex += 1
        if (self.projectIndex > (self.projectsFull.length - 1)) {
        self.projectIndex = 0
        }
      } else if (dir === 'prev') {
        self.projectIndex -= 1
        if (self.projectIndex < 0) {
          self.projectIndex = 0
        }
      }
    },
  },
  components: {
    Headline,
    Project,
    AppMenu: Menu
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 60px auto;
  width: 920px; */
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

#projectNav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--blue);
  padding: 20px; 
}

.project-nav {
  background-color: var(--blue);
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  transition: background-color 250ms;
}

.project-nav:hover {
  background-color: var(--cyan);
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
