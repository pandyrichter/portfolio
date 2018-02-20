<template>
  <div>
    <nav id="projectNav">
      <div class="project-nav__wrapper">
        <div class="project-nav">
          <div class="project-nav__button" @click="toggleThruProjects('prev')"><span>←</span><span class="hide-until-tablet">Prev</span></div>
          <div>Project {{ projectIndex + 1 }} of {{ projectsFull.length }}</div>
          <div class="project-nav__button" @click="toggleThruProjects('next')"><span class="hide-until-tablet">Next </span><span>→</span></div>
        </div>
      </div>
    </nav>
    <div id="Projects">
      <project v-for="(project, i) in projectsFull" v-show="projectIndex === i" :key="project.id" :projectData="project"></project>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main'
import Prismic from 'prismic-javascript';
import Project from './Project'

export default {
  data () {
    return {
      projectIndex: 0,
      projectsFull: [],
    }
  },
  created () {
    const apiEndpoint = 'https://dsportfolio.prismic.io/api/v2';

    Prismic.getApi(apiEndpoint).then(api => {
      return api.query("", { orderings: '[my.project.project_order_num]'})
    }).then(response => {
      // console.log('Documents: ', response.results)
      this.projectsFull = response.results
    }, err => {
      console.log('Something went wrong', err)
    });
  },
  mounted () {
    eventBus.$on('visitingProject', pInd => {
      this.projectIndex = pInd
      console.log('Project switched!', pInd)
    })
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
          self.projectIndex = (self.projectsFull.length - 1)
        }
      }
    }
  },
  components: {
    Project
  }
}
</script>

<style>
nav {
  background-color: white;
  top:0;
  width: 100%;
  transition:all 0.5s;
  position: relative;
}

.project-nav__wrapper {
  border-bottom: 1px solid var(--blue);
  padding: 20px 0px;
}

.project-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
}

.project-nav__button {
  cursor: pointer;
  transition: color 250ms;
}

.project-nav__button:hover {
  color: var(--blue);
}

@media screen and (min-width: 768px) {
  .project-nav {
    max-width: var(--tabletWidth);
  }
}

@media screen and (min-width: 1200px) {
  .project-nav {
    max-width: var(--desktopWidth);
  }
}
</style>
