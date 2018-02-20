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
            <picture>
              <img :src="item.gallery_img.url" alt="" class="project-img__img">
            </picture>
            <div v-if="item.img_caption[0].text" class="project-img__caption">{{ item.img_caption[0].text }}</div>
          </div>
        </div>
      </div>
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
  padding: 10px;
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
}

.project-gallery__description {
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  padding: 25px 0px;
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
  font-size: var(--fontSm);
  color: var(--blue);
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

  .project-img__block {
    margin-bottom: 25px 0px 50px;
  }

  .project-img__caption {
    font-size: var(--fontSm);
    color: var(--blue);
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

  .project-img__block {
    margin: 50px 0px;
  }
}
</style>
