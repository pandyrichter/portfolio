<template>
  <transition name="fade">
    <div>
      <h1>{{ projectData.data.project_title[0].text }}</h1>
      <h3>Company Summary</h3>
      <h3>Overview</h3>
      <div>{{ projectData.data.project_roles }}</div>
      <h3>Goals</h3>
      <div>{{ projectData.data.project_research[0].text }}</div>
      <img :src="projectData.data.lead_image.url" width="400px">
      <div v-for="(gallery, i) in projectData.data.body" :key="i" class="project__carousel">
        <h2>{{ gallery.primary.gallery_title[0].text }}</h2>
        <carousel
          :perPage="1" 
          :scrollPerPage="true"
          :paginationSize="5" 
          :navigationEnabled="true"
          :navigationNextLabel="'👉'"
          :navigationPrevLabel="'👈'">
          <!-- <div v-if="gallery.primary.gallery_description">{{ gallery.primary.gallery_description[0].text }}</div> -->
          <slide v-for="(item, i) in gallery.items" :key="i">
              <img :src="item.gallery_img.url" alt="" height="400px">
              <div>{{ item.img_caption[0].text }}</div>
          </slide>
        </carousel>
      </div>
    </div>
  </transition>
</template>

<script>
// import content from './helpers/cms'
import Prismic from 'prismic-javascript';
import { Carousel, Slide } from 'vue-carousel';

export default {
  props: {
    projectData: {
      type: Object,
      required: false
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
.project__carousel {
  margin: 80px 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
