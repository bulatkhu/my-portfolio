<template>
  <div class="about-wrapper">
    <div class="about">
      <div class="about-col">
        <h2 class="about__title">About me</h2>

        <p class="about__text">
          Hello friends! I am Bulat, a
          {{ myAge }} years old Full-Stack JavaScript & NodeJS developer.
          Currently based in Finland, Espoo, but originally hail from Russia,
          Ufa.
        </p>

        <p class="about__text">
          Well-organised person, problem solver and an independent employee with
          high attention to detail. Specialised in architecting and building
          complex Javascript web and backend applications. Interested in working
          on ambitious projects with positive people.
        </p>

        <p class="about__text">
          I am deeply interested in Mathematics and its applications in software
          development. I'm always down to collaborate when I have the time.
          Reach out and let's chat! ✌️ Languages background
        </p>

        <Languages />
      </div>
    </div>

    <div class="about-content">
      <h3 class="about__title">Professional skills</h3>

      <div class="about-content__skills">
        <SkillsBlock
          v-for="(item, index) in skillItems"
          :key="index"
          :title="item.title"
          :skillsItems="item.skillsItems"
          :items="item.items"
          :other="item.other"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import SkillsData from "@/roles/pages/User/AboutPage/Data";

import Languages from "@/roles/pages/User/AboutPage/Languages";
import SkillsBlock from "@/roles/pages/User/AboutPage/SkillsBlock";
import Footer from "@/roles/pages/User/components/Footer";

export default {
  components: { Languages, SkillsBlock, Footer },
  data() {
    return {
      skillItems: SkillsData,
    };
  },
  computed: {
    myAge() {
      return new Date().getFullYear() - new Date("2000-07-02").getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  color: #fff;

  border-radius: 10px;
  background-color: #1e1731;
  width: 1200px;
  max-width: 100%;

  padding: 20px;

  margin: 0 auto 30px auto;

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;

    @include fluid-type(320px, 1920px, 18px, 24px);
  }

  &__text {
    letter-spacing: 0.2px;
    flex: 3.5 1 0;
    margin-bottom: 15px;

    @include fluid-type(320px, 1920px, 14px, 18px);

    a {
      color: $purple;
      font-weight: bold;
    }
  }
}

.about-col {
  max-width: 700px;
}

.about-content {
  max-width: 900px;
  margin: 0 auto 20px auto;
  color: #fff;

  &__title {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }
}
</style>
