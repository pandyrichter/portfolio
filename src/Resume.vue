<template>
  <div class="resume" id="resume">
    <h1>Resume</h1>
    <div>
      <h3>Education</h3>
      <div v-for="e in education" :key="e.name">
        <div>{{ e.name }}</div>
        <div>{{ e.degree }} <span v-if="e.minor">| {{ e.minor }}</span></div>
        <div>{{ e.concentration }}</div>
        <hr>
      </div>
    </div>
    <div>
      <h3>Resume</h3>
      <div v-for="j in jobs" :key="j.name">
        <div>{{ j.name }}</div>
        <div>{{ j.location }} | {{ j.dates }}</div>
        <div>{{ j.title }}</div>
        <div>responsibilities</div>
        <ul>
          <li v-for="(r, index) in j.responsibilities" :key="index">{{ r }}</li>
        </ul>
      </div>
    </div>
    <div class="skills">
      <div class="skills__title">
        <h3>Skills I can use professionally...</h3>
        <ul>
          <li class="skills_skill" v-for="(s, index) in skills.confident" :key="index">{{ s }}</li>
        </ul>
      </div>
      <div class="skills__title">
        <h3>Skills I'm working on...</h3>
        <ul>
          <li class="skills_skill" v-for="(s, index) in skills.workingOn" :key="index">{{ s }}</li>
        </ul>
      </div>
    </div>
    <div></div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  data () {
    return {
      education: {
        Cornell: {
          name: 'Cornell University',
          degree: 'BS Hotel Administration',
          minor: 'Real Estate',
          concentration: 'Hotel Development'
        },
        Parsons: {
          name: 'Parsons The New School for Design',
          degree: 'AAS Graphic Design',
          concentration: 'Interactive Design'
        }
      },
      jobs: {
        BenWest: {
          name: 'Benjamin West',
          location: 'Louisville, CO',
          dates: 'July 2015 - Present',
          title: 'Manager, Operations and Digital Services',
          responsibilities: [
            "Oversee and execute the design, development, and implementation of digital services, analytics tools, and various IT initiatives in support of the company's core function",
            "Support the executive team in day-to-day management of the company",
            "Provide ad-hoc analysis and project support to key clients, including REITs, PE firms, and portfolio projects"
          ]
        },
         Hotelied: {
          name: 'Hotelied',
          location: 'New York, NY',
          dates: 'March 2014 - June 2015',
          title: 'Visual Designer',
          responsibilities: [
            "Design, execute, and maintain all creative work related to the company's digital, print, event, and investor-related collateral"
          ]
        },
         VirginHotels: {
          name: 'Virgin Hotels',
          location: 'New York, NY',
          dates: 'January 2012 - May 2013',
          title: 'Analyst, Acquisitions and Development',
          responsibilities: [
            "Execute feasibility and financial analysis on all acquisition and ground-up development opportunities, resulting in projects totaling 600+ keys and $30M+ projected annual income from management and brand fees"
          ]
        },
        Tishman: {
          name: 'Tishman Hotel and Realty',
          location: 'New York, NY',
          dates: 'June 2010 - January 2012',
          title: 'Analyst, Development',
          responsibilities: [
            "Assist on analysis and due diligence on all major hotel development opportunities in Manhattan",
            "Assist with programming, schematic design, pre-construction logistics, zoning, and consultant management for advisory and owned projects totaling $3B+"
          ]
        }
      },
      skills: {
        confident: [
          'Adobe Creative Cloud',
          'Sketch',
          'HTML',
          'CSS / PostCSS',
          'JavaScript',
          'Vue (+ Vue ecosystem)',
          'Python',
          'Pandas',
          'Git',
          'Firbase',
          'Excel'
        ],
        workingOn: [
          'Good CSS (and no more Bootstrap)',
          'React (+ Redux)',
          'Node.js',
          'Testing',
          'Making my own API',
        ]
      }
    }
  },
  components: {
    AppMenu: Menu
  }
}
</script>

<style>
.resume {
  text-align: left;
  width: var(--desktopWidth);
  margin: 0 auto;
}

.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid teal;
  padding: 10px;
}

.skills__title > h3 {
  border-bottom: 1px solid teal;
}

.skills__skill {
  display: block;
}

</style>
