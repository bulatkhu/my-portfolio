<template>
  <div class="portfolio">
    <div class="portfolio-text">
      <h1 class="portfolio-text__title">Portfolio</h1>

      <p class="portfolio-text__description">
        I had an opportunity to work with a number of clients from different
        industries and I am proud of taking part in their projects. Below I
        presented some of my recent projects:
      </p>
    </div>

    <div class="portfolio-items">
      <ProjectPreview
        v-for="({ id, icon, title, description, thumbnail }, index) in items"
        :key="index"
        :icon="icon"
        :title="title"
        :description="description"
        :thumbnail="thumbnail"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import DataItems from "./Data";
import ProjectPreview from "@/roles/pages/User/Portfolio/ProjectPreview";

export default {
  components: {
    ProjectPreview,
  },
  data() {
    return {
      items: DataItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  text-align: center;
  color: #fff;
}

.portfolio-text {
  margin: auto auto 50px;
  max-width: 900px;

  &__title {
    margin-bottom: 20px;
    font-weight: bold;
    @include fluid-type(320px, 1920px, 20px, 32px);
  }

  &__description {
    @include fluid-type(320px, 1920px, 14px, 18px);
    margin-bottom: 15px;
  }
}

.portfolio-items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

  max-width: 1300px;
  margin: auto;
}
</style>
