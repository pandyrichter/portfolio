<template>
  <div>
    <div class="filter-bar">
      <div>{{ filters.active }}</div>
      <div v-for="(f, index) in filters.options" :key="index" class="filter-bar__buttons" @click="addProjectFilter(f)">{{ f }}</div>
    </div>
    <div class="headline">
      <div class="headline__left">
        <h1>Dave Stein</h1>
        <h2>Product Designer | Real Estate, Hospitality, Finance</h2>
      </div>
      <div class="headline__right">
        <div v-for="p in projects" :key="p.name" class="project">
          <div>{{ p.headline }}</div>
          <div>{{ p.name }}</div>
          <div>{{ p.description }}</div>
          <div>
            <a :href="p.website" target="_blank">Visit here</a>
            <a href="#">Process Here</a>
          </div>
          <div v-for="(p, index) in p.skills" :key="index" class="project__skills">{{ p }}</div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div>Email: {{ contact.email }}</div>
      <div>Phone: {{ contact.phone }}</div>
      <div>Linkedin</div>
      <div>Github</div>
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
        project1: {
          name: 'Shiny Buildings',
          headline: 'I built and started',
          description: 'Centralized data storage and access for real estate owners and their buildings',
          website: 'www.shinybuildings.co',
          process: 'www',
          skills: ['UX Design', 'Visual Design', 'Branding', 'Development']
        },
        project2: {
          name: 'Benjamin West',
          headline: 'I work at',
          description: 'Digital services for real estate furniture, fixutre, and equipment procurement',
          website: 'www.benjaminwest.com',
          process: 'www',
          skills: ['Analytics', 'UX Design', 'Visual Design', 'Development']
        },
        project3: {
          name: 'Hotelied',
          headline: 'I previously worked at',
          description: 'Luxury hotel bookings that reward you for being you',
          website: 'www.hotelied.com',
          process: 'www',
          skills: ['Visual Design', 'Branding']
        },
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
.filter-bar {
  display: flex;
  justify-content: flex-end;
}

.filter-bar__buttons {
  background-color: white;
  border-radius: 5px;
  color: teal;
  padding: 5px;
}

.filter-bar__buttons:hover {
  background-color: teal;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px;
}

.headline {
  border: 1px solid teal;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.project {
  border: 1px solid gray;
  color: teal;
  padding: 10px;
  text-align: left;
}

.project__skills {
  color: teal;
  display: inline;
}

.contact {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
}

</style>
