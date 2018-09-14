<template>
  <div id="headlineWrapper">
    <div class="headline">
      <div>
        <div class="headline__top">
          <h1 class="accent--green"><strong>Dave Stein</strong></h1>
          <h1>Design + Development + Skiing</h1>
          <div class="hr--green"></div>
          <h2>I combine my <span class="accent--green">business background</span> with
            <span class="accent--green">Visual, UX, and Branding Design</span><br class="hide-until-desktop"> and
            <span class="accent--green">Front-End Development</span>
            skills to build capable and comprehensive experiences.
          </h2>
        </div>
      </div>
      <div class="hr--green"></div>
      <div class="headline__bottom">
        <a href="#projectNav" @click="visitProject(p.projectIndex)" v-for="p in projects" :key="p.name" class="project-preview">
          <div class="project-preview__headline">{{ p.headline }}:</div>
          <div class="project-preview__name">{{ p.name }}</div>
          <div class="project-preview__toolbar">
            <div class="project-preview__description">
              <div>
              {{ p.description }}
              </div>
              <div>
                <a v-if="p.website" :href="p.website" target="_blank"><span class="hide-until-desktop">|</span>Visit Site</a>
                <a v-if="p.process" href="#projectNav" @click="visitProject(p.projectIndex)"><span class="hide-until-desktop">|</span>View Details</a>
              </div>
            </div>
          </div>
        </a>
      </div>
        <!-- <h2>(I also love <span class="highlight">getting</span><span class="highlight">outside</span>.)</h2> -->
    </div>
  </div>
</template>

<script>
import { eventBus } from './main'

export default {
  data() {
    return {
      filters: {
        active: null,
        options: ['UX Design', 'Visual Design', 'Branding', 'Analytics', 'Front End Development'],
      },
      projects: {
        project2: {
          name: '🛋 Benjamin West',
          headline: 'I work at',
          description: 'Digital services for real estate furniture, fixtures, and equipment procurement',
          process: 'www',
          skills: ['Analytics', 'UX Design', 'Visual Design', 'Development'],
          projectIndex: 0,
        },
        project3: {
          name: '🏖 Hotelied',
          headline: 'I previously worked at',
          description: 'Luxury hotel and resort bookings that reward you for being you',
          process: 'www',
          skills: ['Visual Design', 'Branding'],
          projectIndex: 1
        },
        project1: {
          name: '🏰 Shiny Buildings',
          headline: 'I built and founded',
          description: 'Centralized data storage and access for real estate owners and their buildings',
          process: 'www',
          skills: ['UX Design', 'Visual Design', 'Branding', 'Development'],
          projectIndex: 2
        }
      },
      contact: {
        phone: '781-775-8125',
        email: 'dwstein@outlook.com',
        linkedin: 'linkedin.com',
        github: 'github.com',
        location: 'Denver, CO'
      }
    }
  },
  methods: {
    addProjectFilter (filter) {
      if (filter === this.filters.active) {
        this.filters.active = null
      } else {
        this.filters.active = filter
      }
    },
    visitProject (index) {
      eventBus.$emit('visitingProject', index)
      // this.scrollTo('projectNav')
    },
    scrollTo (el) {
      const elObj = document.getElementById(el)
      const elTop = elObj.offsetTop
      window.scrollTo(300, 800)
    }
  }
}
</script>

<style>
#headlineWrapper {
  background-color: var(--darkBlue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
}

.highlight {
  background-color: #34E4EA;
  border-radius: 3px;
  padding: 2px 5px;
  color: black;
  cursor: pointer;
  transition: all 250ms;
}

.highlight:hover {
  background-color: var(--red); 
  color: white;
}

.headline {
  background-color: var(--darkBlue);
  border-radius: 5px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.headline__top {
  color: white;
  text-align: left;
}

.headline__top > h1 {
  font-size: var(--fontLg);
  font-weight: 500;
}

.headline__top > h2 {
  font-size: var(--fontLg);
  font-weight: 500;
  margin-bottom: 0px;
}

.project-preview {
  background-color: white;
  border-radius: 3px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 15px 15px 10px;
  text-align: left;
  text-decoration: none;
}

.project-preview:hover {
  background-color: var(--gray);
}

.project-preview__headline {
  color: #333;
  font-size: var(--fontSm);
  display: inline-block;
}

.project-preview__name {
  color: #333;
  font-weight: 500;
  font-size: var(--fontLg);
  margin-top: 5px;
}

.project-preview__toolbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.project-preview__description {
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: left;
}

.project-preview__description a {
  color: var(--blue);
  border-radius: 4px;
  text-decoration: none;
  font-size: var(--fontSm);
  font-weight: 500;
}

.project-preview__description a:hover {
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .headline {
    max-width: var(--tabletWidth);
  }

  .headline__top > h1 {
    font-size: var(--fontXl);
    width: 80%;
  }

}

@media screen and (min-width: 1200px) {
  #headlineWrapper {
    min-height: 100vh;
  }
  .headline {
    max-width: var(--desktopWidth);
  }

  .headline__top > h1 {
    font-size: var(--fontXl);
    width: 100%;
  }

  .project-preview__description {
    flex-direction: row;
  }
}

</style>
