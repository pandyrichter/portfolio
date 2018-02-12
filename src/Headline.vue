<template>
  <div class="headline-wrapper">
    <div class="headline">
      <div>
        <div class="headline__top">
          <h1><span class="accent--green">Hi,</span> I'm Dave! <br> I'm a Product Designer for Real Estate, Construction, Hospitality + Finance Tech</h1>
          <div class="hr--green"></div>
          <h2>I combine my business background with
            <span class="accent--green">Visual, UX, and Branding Design</span><br>and
            <span class="accent--green">Front-End Development</span>
            skills to make informed and thoughtful experiences.
          </h2>
        </div>
      </div>
      <div class="hr--green"></div>
      <div class="headline__bottom">
        <div v-for="p in projects" :key="p.name" class="project-preview">
          <div class="project-preview__headline">{{ p.headline }}:</div>
          <div class="project-preview__name">{{ p.name }}</div>
          <div class="project-preview__toolbar">
            <div class="project-preview__description">
              <div>
              {{ p.description }}
              </div>
              <div>
                <a v-if="p.website" :href="p.website" target="_blank">| Visit Site</a>
                <a v-if="p.process" href="#">| View Details</a>
              </div>
            </div>
          </div>
          <!-- <div v-for="(p, index) in p.skills" :key="index" class="project__skills">{{ p }}</div> -->
        </div>
      </div>
        <h2>(I also love 🎸<span class="highlight">music</span>, <span class="highlight">drawing</span> and 🎄🎄<span class="highlight">getting outside</span>.)</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        active: null,
        options: ['UX Design', 'Visual Design', 'Branding', 'Analytics', 'Front End Development'],
      },
      projects: {
        project2: {
          name: 'Benjamin West',
          headline: 'I work at',
          description: 'Digital services for real estate furniture, fixtures, and equipment procurement',
          process: 'www',
          skills: ['Analytics', 'UX Design', 'Visual Design', 'Development']
        },
        project3: {
          name: 'Hotelied',
          headline: 'I previously worked at',
          description: 'Luxury hotel bookings that reward you for being you',
          process: 'www',
          skills: ['Visual Design', 'Branding']
        },
        project1: {
          name: '🏰 Shiny Buildings',
          headline: 'I built and founded',
          description: 'Centralized data storage and access for real estate owners and their buildings',
          website: 'https://www.shinybuildings.co',
          process: '',
          skills: ['UX Design', 'Visual Design', 'Branding', 'Development']
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
    }
  }
}
</script>

<style>
.headline-wrapper {
  background-color: var(--blue);
  min-height: 100vh;
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
  background-color: #37A1E1;
  border: 1px solid #37A1E1;
  border-radius: 5px;
  width: var(--desktopWidth);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* grid-template-columns: repeat(2, 1fr); */
}

.headline__top {
  color: white;
  text-align: left;
}

.headline__top > h1 {
  font-size: var(--fontXl);
  font-weight: 500;
  width: 60%;
}

.headline__top > h2 {
  font-size: var(--fontLg);
  font-weight: 500;
  margin-bottom: 0px;
}

.project-preview {
  background-color: white;
  border-radius: 3px;
  color: #37A1E1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 15px 15px 10px;
  text-align: left;
}

.project-preview__headline {
  color: black;
  font-size: var(--fontSm);
  display: inline-block;
}

.project-preview__name {
  color: #173753;
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
  justify-content: flex-start;
  width: 100%;
  align-items: center;
}

.project-preview__description a {
  color: #333;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  font-size: var(--fontSm);
  font-weight: 500;
}

.contact {
  border-top: 2px solid white;
  color: white;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  width: 1080px; 
}

.contact > a {
  color: var(--cyan);
}

</style>
