<template>
    <div>
      <headline></headline>
      <div>
        <nav id="projectNav" class="project-nav__wrapper">
          <div class="project-nav">
            <div class="project-nav__button" @click="toggleThruProjects('prev')"><span class="accent--green">←</span> Previous</div>
            <div>Project {{ projectIndex + 1 }} of {{ projectsFull.length }}</div>
            <div class="project-nav__button" @click="toggleThruProjects('next')">Next <span class="accent--green">→</span></div>
          </div>
        </nav>
        <project v-for="(project, i) in projectsFull" v-show="projectIndex === i" :key="project.id" :projectData="project"></project>
      </div>
    <app-menu></app-menu>
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

    Prismic.getApi(apiEndpoint).then(api => {
      return api.query("", { orderings: '[my.project.project_order_num]'})
    }).then(response => {
      console.log('Documents: ', response.results)
      this.projectsFull = response.results
    }, err => {
      console.log('Something went wrong', err)
    });
  },
  // mounted () {
  //   const nav = document.getElementById('projectNav')
  //   const topOfNav = nav.offsetTop;

  //   function fixNav() {
  //     console.log(topOfNav, window.scrollY);
  //     if (window.scrollY >= topOfNav) {
  //       document.body.style.paddingTop = nav.offsetHeight;
  //       document.body.classList.add('fixed-nav');
  //     } else {
  //       document.body.classList.remove('fixed-nav');
  //     }
  //   }

  //   window.addEventListener('scroll', fixNav);
  // },
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

.fixed-nav {
  position: fixed;
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
  width: var(--desktopWidth);
}

.project-nav__button {
  cursor: pointer;
  transition: color 250ms;
}

.project-nav__button:hover {
  color: var(--blue);
}
</style>
