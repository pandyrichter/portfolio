<template>
  <div id="app">
    <headline></headline>
    <div id="projectWrapper">
      <div id="projectNav">
        <div class="project-nav" @click="toggleThruProjects('prev')">Prev Project</div>
        <div>Project {{ projectIndex + 1 }}</div>
        <div class="project-nav" @click="toggleThruProjects('next')">Next Project</div>
      </div>
      <project v-for="(project, i) in projectsFull" v-show="projectIndex === i" :key="project.id" :projectData="project"></project>
    </div>
    <resume></resume>
    <currently></currently>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript';

import Headline from './Headline'
import Project from './Project'
import Resume from './Resume'
import Currently from './Currently'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projectIndex: 0,
      projectsFull: [],
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
    Resume,
    Currently
  }
}
</script>

<style>
:root {
  --cyan: #38FFD9;
  --blue: #37A1E1;
}

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

#projectNav {
  display: flex;
  align-items: center;
  justify-content: space-around; 
}

.project-nav {
  border: 1px solid blue;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  width: 25px;
  height: 25px;
}
</style>
