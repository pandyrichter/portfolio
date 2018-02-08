<template>
  <div class="headline-wrapper">
    <div class="headline">
      <div class="headline__left">
        <h1>Dave Stein</h1>
        <h2>Product Designer for Real Estate, Construction, Hopsitality, Finance</h2>
        <div class="filter-bar">
          <div>{{ filters.active }}</div>
          <div v-for="(f, index) in filters.options" :key="index" class="filter-bar__buttons" @click="addProjectFilter(f)">{{ f }}</div>
        </div>
        <h2>(I also love <span class="highlight">music</span> and <span class="highlight">getting outside.</span>)</h2>
      </div>
      <div class="headline__right">
        <div v-for="p in projects" :key="p.name" class="project">
          <div class="project__headline">{{ p.headline }}</div>
          <div class="project__name">{{ p.name }}</div>
          <div>{{ p.description }}</div>
          <div>
            <a :href="p.website" target="_blank">Visit here</a>
            <a href="#">Process Here</a>
          </div>
          <div v-for="(p, index) in p.skills" :key="index" class="project__skills">{{ p }}</div>
        </div>
      </div>
      <div class="contact">
        <div>Email: {{ contact.email }}</div>
        <div>Phone: {{ contact.phone }}</div>
        <div>Linkedin</div>
        <div>Github</div>
        <a href="#resume">Resume</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        active: null,
        options: ['UX Design', 'Visual Design', 'Branding', 'Analytics', 'Development'],
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
          name: 'Shiny Buildings',
          headline: 'I built and started',
          description: 'Centralized data storage and access for real estate owners and their buildings',
          website: 'https://www.shinybuildings.co',
          process: 'www',
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
  background-color: #37A1E1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
}
.filter-bar {
  display: flex;
  justify-content: flex-end;
}

.filter-bar__buttons {
  background-color: #34E4EA;
  border-radius: 5px;
  color: #2B4141;
  padding: 5px;
}

.filter-bar__buttons:hover {
  background-color: teal;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px;
}

.highlight {
  background-color: #34E4EA;
  padding: 2px;
  color: black;
}

.headline {
  background-color: #37A1E1;
  border: 1px solid #37A1E1;
  border-radius: 5px;
  width: 920px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.headline__left {
  color: white;
  padding: 20px;
  text-align: left;
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
  border-radius: 5px;
  margin-bottom: 8px;
  color: #37A1E1;
  padding: 10px;
  text-align: left;
}

.project__headline {
  background-color: #37A1E1;
  color: white;
  padding: 5px;
  font-size: .8rem;
  font-weight: bold;
  display: inline-block;
}

.project__name {
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
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
  border-top: 1px solid #37A1E1;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  width: 100%;
}

</style>
