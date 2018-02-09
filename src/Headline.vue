<template>
  <div class="headline-wrapper">
    <div class="headline">
      <div>
        <div class="headline__left">
          <h1>Dave Stein</h1>
          <h2>Product Designer for Real Estate, Construction, Hospitality + Finance Tech</h2>
        </div>
        <div class="skills-bar">
          <div class="filter-bar">
            <div>{{ filters.active }}</div>
            <div v-for="(f, index) in filters.options" :key="index" class="filter-bar__buttons" @click="addProjectFilter(f)">{{ f }}</div>
          </div>
        </div>
      </div>
      <div></div>
      <div class="headline__right">
        <div v-for="p in projects" :key="p.name" class="project">
          <div class="project__headline">{{ p.headline }}:</div>
          <div class="project__name">{{ p.name }}</div>
          <div class="project__description">{{ p.description }}</div>
          <div>
            <a :href="p.website" target="_blank">Visit here</a>
            <a v-if="p.process" href="#">Details Here</a>
          </div>
          <!-- <div v-for="(p, index) in p.skills" :key="index" class="project__skills">{{ p }}</div> -->
        </div>
      </div>
        <h2>(I also love 🎸<span class="highlight">music</span>, <span class="highlight">drawing</span> and 🎄🎄<span class="highlight">getting outside</span>.)</h2>
    </div>
    <div class="contact">
      <div>Email: {{ contact.email }}</div>
      <div>Phone: {{ contact.phone }}</div>
      <div>Linkedin</div>
      <div>Github</div>
      <!-- <a href="#resume">Resume</a> -->
      <router-link :to="{ name: 'Resume' }">Resume</router-link>
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
          website: 'http://www.benjaminwest.com',
          process: 'www',
          skills: ['Analytics', 'UX Design', 'Visual Design', 'Development']
        },
        project3: {
          name: 'Hotelied',
          headline: 'I previously worked at',
          description: 'Luxury hotel bookings that reward you for being you',
          website: '#',
          process: 'www',
          skills: ['Visual Design', 'Branding']
        },
        project1: {
          name: '🏰 Shiny Buildings',
          headline: 'I built and started',
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
  margin-bottom: 25px;
}

.skills-bar {
  margin: 15px 0px;
}

.filter-bar {
  display: flex;
  justify-content: flex-start;
  border-top: 2px solid var(--cyan);
  border-bottom: 2px solid var(--cyan);
  padding: 5px;
}

.filter-bar__buttons {
  border-radius: 5px;
  color: var(--cyan);
  padding: 2px;
  margin-right: 15px;
}

.highlight {
  background-color: #34E4EA;
  padding: 2px;
  color: black;
  cursor: pointer;
}

.highlight:hover {
  background-color: rgb(252, 255, 46); 
}

.headline {
  background-color: #37A1E1;
  border: 1px solid #37A1E1;
  border-radius: 5px;
  width: 1080px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* grid-template-columns: repeat(2, 1fr); */
}

.headline__left {
  color: white;
  text-align: left;
  width: 60%;
}

.headline__left > h1 {
  font-size: 3rem;
  font-weight: 500;
}

.headline__left > h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0px;
}

.headline__right {
  padding: 10px;
}

.project {
  background-color: white;
  border-radius: 3px;
  margin-bottom: 8px;
  color: #37A1E1;
  padding: 10px;
  text-align: left;
}

.project__headline {
  color: black;
  font-size: .85rem;
  display: inline-block;
}

.project__name {
  color: #173753;
  font-weight: 500;
  font-size: 1.4rem;
}

.project__description {
  margin: 5px 0px;
}

.project__skills {
  color: #37A1E1;
  display: inline;
  font-size: .8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 5px;
}

.contact {
  border-top: 2px solid white;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  width: 1080px;
}

</style>
