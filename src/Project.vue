<template>
  <div>
    <!-- <div v-for="project in projects" :key="project.id">
      <h1 v-for="title in project.data.project_title" :key="title">{{ title.text }}</h1>
      <img :src="project.data.lead_image.url" alt="" width="800px">
    </div> -->
    <h1>{{ project.data.project_title[0].text }}</h1>
    <div>{{ project.data.project_roles }}</div>
    <div>{{ project.data.project_research[0].text }}</div>
    <img :src="project.data.lead_image.url" alt="">
    <carousel
      v-for="(gallery, i) in project.data.body"
      :key="i"
      :perPage="1" 
      :paginationSize="5" 
      :navigationEnabled="true"
      :navigationNextLabel="'👉'"
      :navigationPrevLabel="'👈'">
      <h2>{{ gallery.primary.gallery_title[0].text }}</h2>
      <div v-if="gallery.primary.gallery_description">{{ gallery.primary.gallery_description }}</div>
      <slide v-for="(item, i) in gallery.items" :key="i">
          <img :src="item.gallery_img.url" alt="" height="400px">
          <div>{{ item.img_caption[0].text }}</div>
      </slide>
    </carousel>
    <!-- <div v-for="(item, i) in project.data.body[0].items" :key="i">
      <img :src="item.gallery_img.url" alt="" width="800px">
      {{ item.img_caption[0].text }}
      </div> -->
    <vue-agile>

    </vue-agile>
  </div>
</template>

<script>
// import content from './helpers/cms'
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import VueAgile from 'vue-agile';
import { Carousel, Slide } from 'vue-carousel';

export default {
  data () {
    return {
      project: ''
    }
  },
  created () {
    this.retrieveContent();
  },
  mounted () {
    console.log(this.project);
  },
  computed: {
    projectRoles () {
      return PrismicDOM.RichText.asText(this.project.data.project_roles)
    }
  },
  methods: {
    retrieveContent () {
      let self = this;

      const apiEndpoint = 'https://dsportfolio.prismic.io/api/v2';

      const content = Prismic.getApi(apiEndpoint).then(api => {
        return api.query(
          // Retrieving single project - otherwise, just query ""
          Prismic.Predicates.at('document.id', 'WnKMCSIAAFen4Uuk')
        )
      }).then(response => {
        console.log('Documents: ', response.results);
        self.project = response.results[0];
      }, err => {
        console.log('Something went wrong', err);
      });}
  },
  components: {
    VueAgile,
    Carousel,
    Slide
  }
}
</script>

<style>

</style>
