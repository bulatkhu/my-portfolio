<template>
  <div class="project">
    <div v-if="found" class="project-content p-content">
      <h1 class="p-content__title">{{ title }}</h1>
      <p class="p-content__description">{{ description }}</p>

      <div class="p-content__img"><img :src="thumbnail" :alt="title" /></div>

      <div class="p-content__info p-info">
        <div class="p-info__col">
          <div class="p-info__block">
            <h4 class="p-info__title">Description</h4>
            <p>{{ mainDescription }}</p>
          </div>

          <div v-if="features" class="p-info__block">
            <h4 class="p-info__title">{{ features.title }}</h4>
            <ul class="p-info__list p-info-list" v-if="features.items.length">
              <li
                class="p-info-list__item"
                v-for="(item, index) in features.items"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="technologies && technologies.length" class="p-info__col">
          <div class="p-info__block">
            <h4 class="p-info__title p-info-technologies__title">
              Technologies
            </h4>
            <div class="p-info-technologies">
              <ItemSkill
                class-name="p-info-technologies__item"
                v-for="({ icon, label }, index) in technologies"
                :icon="icon"
                :label="label"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <p class="not-found__text">Project not found</p>

      <PageNotFound class="not-found__img" />
    </div>

    <Contacts />
  </div>
</template>

<script>
import Contacts from "@/roles/pages/User/ContactsPage";
import Data from "@/roles/pages/User/Portfolio/Data";
import ItemSkill from "@/roles/pages/User/AboutPage/SkillsBlock/ItemSkill";
import PageNotFound from "@/assets/page-not-found-icon.svg";

export default {
  components: { ItemSkill, Contacts, PageNotFound },
  data() {
    const item = Data.find((item) => item.id === +this.$route.params.id);

    return { features: null, technologies: null, ...item, found: !!item };
  },
};
</script>

<style scoped lang="scss">
.project {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.p-content {
  text-align: center;
  color: #fff;
  max-width: 70%;
  margin: auto auto 30px;

  @media (max-width: 720px) {
    max-width: 100%;
  }

  &__title {
    margin-bottom: 10px;
    font-weight: bold;
  }

  &__description {
    margin-bottom: 20px;
  }

  &__img {
    margin-bottom: 20px;

    img {
      max-width: 100%;
    }
  }
}

.not-found {
  color: #fff;
  margin: auto;

  &__text {
    @include fluid-type(320px, 1920px, 20px, 36px);
  }

  &__img {
    margin: 30px auto;
    width: 400px;

    max-width: 100%;
  }
}

.p-info {
  display: flex;
  justify-content: space-between;
  text-align: left;

  @media (max-width: 720px) {
    flex-direction: column;
  }

  &__block {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__title {
    font-weight: bold;
    margin-bottom: 10px;

    @include fluid-type(320px, 1920px, 18px, 25px);
  }

  &__col {
    &:first-child {
      flex-basis: calc(70% - 20px);
    }

    &:last-child {
      flex-basis: 30%;
    }
  }
}

.p-info-list {
  &__item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    padding-left: 15px;
    font-size: 14px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      left: 0;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}

.p-info-technologies {
  background-color: $mainBlack;

  &__title {
    @media (max-width: 720px) {
      margin-top: 30px;
    }
  }

  &__item {
    @media (max-width: 1200px) {
      flex-basis: 33.33%;
    }

    @media (max-width: 1200px) {
      flex-basis: 33.33%;
    }

    @media (max-width: 720px) {
      flex-basis: 25%;
    }
  }

  &:last-child {
    justify-content: center;
    display: flex;
    flex-flow: row wrap;

    @media (max-width: 650px) {
      padding-top: 0;
    }
  }
}
</style>
