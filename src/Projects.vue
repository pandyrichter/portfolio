<template>
  <div>
    <nav id="projectNav">
      <div class="project-nav__wrapper">
        <div class="accent--green hide-nav">Dave Stein</div>
        <div class="project-nav">
          <div class="project-nav__button" href="#projectNav" @click="toggleThruProjects('prev')"><span>←</span><span class="hide-until-tablet">Prev</span></div>
          <div>Project {{ projectIndex + 1 }} of {{ projectsFull.length }}</div>
          <div class="project-nav__button" href="#projectNav" @click="toggleThruProjects('next')"><span class="hide-until-tablet">Next </span><span>→</span></div>
        </div>
        <div class="accent--green hide-nav" @click="openMenu">Menu</div>
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

    // Thanks to Wes Bos for this quick one:
    const nav = document.querySelector('#projectNav');
    let topOfNav = nav.offsetTop;

    function fixNav() {
      if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }

      window.addEventListener('scroll', fixNav);
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
    },
    openMenu () {
      eventBus.$emit('openingMenu', true)
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
  border-bottom: 1px solid var(--blue);
  top:0;
  width: 100%;
  transition:all 0.5s;
  position: relative;
}

.project-nav__wrapper {
  padding: 20px 0px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}

.project-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 50%;
  flex-basis: 50%;
}

.project-nav__button {
  padding: 10px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 250ms;
}

.project-nav__button:hover {
  color: var(--blue);
}

nav {
  background-color: white;
  top:0;
  width: 100%;
  transition: all 0.5s;
  position: relative;
  z-index: 1;
}

body.fixed-nav nav {
  background-color: var(--blue);
  color: white;
  position: fixed;
  box-shadow:0 5px 3px rgba(0,0,0,0.1);
}

.fixed-nav .project-nav__button {
  padding: 10px;
  font-weight: 500;
  border-bottom: 2px solid white;
  color: #333;
}

.hide-nav {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s;
  display: block;
  font-weight: 500;
  flex-basis: 20%;
  text-align: center;
}

.hide-nav:last-child {
  cursor: pointer;
}

.fixed-nav .hide-nav {
  max-width: 500px;
  opacity: 1;
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
