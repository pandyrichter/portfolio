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
      <div v-for="(gallery, i) in projectData.data.body" :key="i">
        <h2>{{ gallery.primary.gallery_title[0].text }}</h2>
        <div>
          <div v-for="(item, i) in gallery.items" :key="i" class="project-img__block">
            <picture>
              <img :src="item.gallery_img.url" alt="" class="project-img__img">
            </picture>
            <div class="project-img__caption">{{ item.img_caption[0].text }}</div>
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
  font-size: var(--fontSm);
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 10px 0px 0px;
}

.project h2 {
  font-size: var(--fontLg);
  padding: 15px;
  border-bottom: 1px solid var(--black);
}

.project > p {
  font-size: var(--fontLg);
  margin-top: 8px;
}

/* .img-grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-gap: 20px;
} */

.project-img__block {
  margin: 25px 0px 50px;
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
  margin-top: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
