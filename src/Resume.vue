<template>
  <div class="resume">
    <h1 class="accent--green">Dave Stein</h1>
    <h1>Resume</h1>
    <div>
      <div v-for="e in education" :key="e.name" class="resume__block">
        <h3>{{ e.name }}</h3>
        <div>{{ e.dates }}</div>
        <div>{{ e.degree }} <span v-if="e.minor">| {{ e.minor }}</span></div>
        <div>Concentration: {{ e.concentration }}</div>
      </div>
    </div>
    <div class="hr-thin--blue"></div>
    <div>
      <div v-for="j in jobs" :key="j.name" class="resume__block">
        <h3>{{ j.name }}</h3>
        <div>{{ j.location }} | {{ j.dates }}</div>
        <div>{{ j.title }}</div>
        <ul>
          <li v-for="(r, index) in j.responsibilities" :key="index"><p>{{ r }}</p></li>
        </ul>
      </div>
    </div>
    <div class="hr--blue"></div>
    <div id="CodeSection">
      <h1>Code Samples</h1>
      <h3>Learning to code has helped me to become a better and more effective designer.
      </h3>
      <a target="_blank" href="https://medium.com/@ddubski/setting-up-modular-postcss-with-webpack-9af084513acc">A Medium Post</a>
      <a target="_blank" href="https://stackoverflow.com/questions/47893923/vue2-vuex-commit-not-committing-without-vue-devtools">A Stack Overflow Question</a>
    </div>
    <div class="hr--blue"></div>
    <h1>Tools + Skills</h1>
    <div class="skills">
        <div class="skills__group">
        <h3>Good to go:</h3>
        <div class="skills__skill" v-for="(s, index) in skills.confident" :key="index">{{ s }}</div>
        </div>
        <div class="skills__group">
          <h3>Working on it:</h3>
          <div class="skills__skill--yellow" v-for="(s, index) in skills.workingOn" :key="index">{{ s }}</div>
        </div>
    </div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Menu from './Menu'
import Footer from './Footer'

export default {
  data () {
    return {
      education: {
        Cornell: {
          name: 'Cornell University',
          dates: '2006-2010',
          degree: 'BS Hotel Administration',
          minor: 'Real Estate',
          concentration: 'Hotel Development'
        },
        Parsons: {
          name: 'Parsons The New School for Design',
          dates: '2013-2015',
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
          'Photoshop',
          'Illustrator',
          'InDesign',
          'XD',
          'AfterEffects',
          'Sketch',
          'HTML',
          'CSS / PostCSS',
          'JavaScript',
          'Vue (+ Vue ecosystem)',
          'Python',
          'Pandas',
          'Git',
          'InVision',
          'Zeplin',
          'Excel'
        ],
        workingOn: [
          'Good CSS',
          'React (+ Redux)',
          'Node.js',
          'Testing',
          'Making my own API',
          'Build Configurations'
        ],
        notGreat: [
          'Machine Learning',
          'Politics'
        ]
      }
    }
  },
  components: {
    AppMenu: Menu,
    AppFooter: Footer
  }
}
</script>

<style>
.resume {
  margin: 0 auto;
  font-size: var(--fontSm);
  padding: 10px;
}

.resume p {
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px 0px;
}

.resume li {
  margin: 0px;
}

.resume h5 {
  font-weight: 500;
  font-size: var(--fontMd);
  margin-bottom: 5px;
}

.resume h3 {
  font-weight: 400;
}

.resume h2 {
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
}

.resume > h1 {
  margin: 0px;
}

.resume a {
  color: var(--blue);
  display: block;
  margin-bottom: 10px;
}

.resume a:hover {
  color: var(--cyan);
}

.resume__block:not(:last-child) {
  margin-bottom: 15px;
  border-bottom: 1px solid var(--gray);
  padding: 20px 0px;
}

.resume__block:last-child {
  margin-bottom: 15px;
  padding: 20px 0px;  
}

#CodeSection {
  padding: 0px 0px 10px;
}

.skills {
  margin-bottom: 20px;
}

.skills__skill {
  display: inline-block;
  padding: 8px;
  background-color: var(--cyan);
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.skills__skill--yellow {
  display: inline-block;
  padding: 8px;
  background-color: var(--yellow);
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.skills__skill--red {
  display: inline-block;
  padding: 8px;
  background-color: var(--red);
  color: white;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}

@media screen and (min-width: 768px) {
  .resume {
    max-width: var(--tabletWidth);
    padding: 25px 0px 50px;
  }

  .skills {
    width: 80%;
  }
}

@media screen and (min-width: 1200px) {
  .resume {
    max-width: var(--desktopWidth);
  }

  .skills {
    width: 60%;
  }
}

</style>
