<template>
  <transition name="fade">
    <div class="project">
      <h1>{{ projectData.data.project_title[0].text }}</h1>
      <h3>Overview</h3>
      <p>{{ projectData.data.project_overview[0].text }}</p>
      <h3>My Role</h3>
      <p>{{ projectData.data.project_role[0].text }}</p>
      <h3>Tools</h3>
      <p>{{ projectData.data.project_tools[0].text }}</p>
      <h3>Dates</h3>
      <p>{{ projectData.data.project_dates[0].text }}</p>
      <!-- <img :src="projectData.data.lead_image.url" width="400px"> -->
      <div class="hr--blue"></div>
      <h3>Work</h3>
      <div v-for="(gallery, i) in projectData.data.body" :key="i" class="project__carousel">
        <h2>{{ gallery.primary.gallery_title[0].text }}</h2>
        <!-- <carousel
          :perPage="1" 
          :scrollPerPage="true"
          :paginationSize="5" 
          :navigationEnabled="true"
          :navigationNextLabel="'👉'"
          :navigationPrevLabel="'👈'">
          <slide v-for="(item, i) in gallery.items" :key="i">
              <img :src="item.gallery_img.url" alt="" height="400px">
              <div>{{ item.img_caption[0].text }}</div>
          </slide>
        </carousel> -->
        <div class="img-wrapper">
          <div v-for="(item, i) in gallery.items" :key="i" class="project-img__block">
            <img :src="item.gallery_img.url" alt="" class="project-img__img">
            <!-- <div :style="{ backgroundImage: `url(${item.gallery_img.url})` }" class="project__img"></div> -->
            <div class="project-img__caption">{{ item.img_caption[0].text }}</div>
          </div>
        </div>
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
.project {
  width: var(--desktopWidth);
  margin: 0 auto;
  padding-top: 40px;
}

.project > h3 {
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 10px 0px 0px;
}

.project > p {
  font-size: 1.5rem;
  margin-top: 8px;
}

.img-wrapper {
  width: 800px;
  margin: 0 auto;
}

.project-img__block {
  margin-bottom: 25px;
}

.project-img__img {
  display: inline-block;
  max-width: 600px;
}

.project-img__caption {
  font-size: .8rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
