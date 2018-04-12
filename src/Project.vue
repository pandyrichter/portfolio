<template>
  <transition name="fade">
    <div class="project">
      <h3>Project</h3>
      <h1 :style="{ color: projectData.data.brand_color }">{{ projectData.data.project_title[0].text }}</h1>
      <h3>Overview</h3>
      <p>{{ projectData.data.project_overview[0].text }}</p>
      <h3>My Role</h3>
      <p>{{ projectData.data.project_role[0].text }}</p>
      <h3>Tools</h3>
      <p>{{ projectData.data.project_tools[0].text }}</p>
      <h3>Dates</h3>
      <p>{{ projectData.data.project_dates[0].text }}</p>
      <div class="hr--blue"></div>
      <h3>Work</h3>
      <div
      :id="`${removeSpace(gallery.primary.gallery_title[0].text)}`"
      v-for="(gallery) in projectData.data.body" 
      :key="`${removeSpace(gallery.primary.gallery_title[0].text)}`" 
      class="project-gallery">
        <h2>{{ gallery.primary.gallery_title[0].text }}</h2>
        <div v-if="gallery.primary.gallery_description[0].text" class="project-gallery__description">{{ gallery.primary.gallery_description[0].text }}</div>
        <div>
          <div v-for="(item, i) in gallery.items" :key="i" class="project-img__block">
            <!-- <div>{{ projectData.data.brand_color }}</div> -->
            <div :style="{ color: projectData.data.brand_color }" v-if="item.img_caption[0].text" class="project-img__caption">{{ item.img_caption[0].text }}:</div>
            <picture>
              <img :src="item.gallery_img.url" alt="" class="project-img__img">
            </picture>
          </div>
        </div>
      </div>
      <div class="hr--blue"></div>
      <h3>See more: <a :href="`http://${projectData.data.site_url[0].text}`" target="_blank">{{ projectData.data.site_url[0].text }}</a></h3>
    </div>
  </transition>
</template>

<script>
import Prismic from 'prismic-javascript';

export default {
  props: {
    projectData: {
      type: Object,
      required: false
    }
  },
  methods: {
    removeSpace (str) {
      return str.replace(/\s/g, "");
    },
    goTo (ref) {
      let element = this.$refs[ref]
      console.log(element)
      let top = element.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>

<style>
.project {
  padding: 10px 8px 20px;
}

.project > h3 {
  font-size: var(--fontSm);
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 30px 0px 0px;
}

.project h2 {
  font-size: var(--fontLg);
}

.project > p {
  font-size: var(--fontLg);
  margin-top: 8px;
}

.project__gallery-link {
  display: block;
  font-size: var(--fontLg);
}


.project-gallery {
  margin-top: 10px;
  /* border-top: 1px solid var(--gray); */
}


.project-gallery__description {
  /* border-top: 1px solid var(--gray); */
  /* border-bottom: 1px solid var(--gray); */
}

.project-img__block {
  margin: 10px 0px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.project-img__img {
  max-width: 100%;
  object-fit: cover;
}

.project-img__caption {
  color: var(--blue);
  display: block;
  font-size: var(--fontSm);
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px dotted var(--gray);
  padding: 10px 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .project {
    max-width: var(--tabletWidth);
    padding-top: 40px;
    margin: 0 auto;
  }

  .project-gallery {
    margin-top: 25px;
  }

  .project-gallery__description {
    width: 80%;
  }

  .project-img__block {
    margin: 60px 0px 100px;
  }

  .project-img__caption {
    font-size: var(--fontSm);
    margin-top: 20px;
  }

}

@media screen and (min-width: 1200px) {
  .project {
    max-width: var(--desktopWidth);
    padding-top: 40px;
  }
  .project-gallery {
    margin-top: 50px;
  }
}
</style>
