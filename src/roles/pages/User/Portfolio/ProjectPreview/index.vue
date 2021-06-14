<template>
  <router-link
    :to="`/project/${id}`"
    :id="`project-id-${id}`"
    class="projectItem"
  >
    <div v-if="!Array.isArray(icon)" class="projectItem__icon">
      <component :is="icon" />
    </div>
    <div v-else class="projectItem-icons">
      <component v-for="(newIcon, index) in icon" :key="index" :is="newIcon" />
    </div>

    <div class="projectItem__thumbnail">
      <img v-if="thumbnail" :src="thumbnail" :alt="title" />
      <span v-else>No photo</span>
    </div>

    <div v-if="title || description" class="project__description description">
      <p v-if="title" class="description__title">{{ title }}</p>
      <p v-if="description" class="description__text">{{ description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: [Object, Array],
    thumbnail: String,
    description: String,
    title: String,
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
.projectItem {
  margin: 10px;
  position: relative;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 1200px) {
    margin: 0;
  }

  @media (max-width: 520px) {
    padding: 0;
    margin-bottom: 50px;
  }

  &:hover {
    transform: translateY(-10px);

    .description {
      opacity: 1;
    }
  }

  width: 600px;

  &__description {
  }

  &__icon {
    top: 0;
    left: 0;
    z-index: 1;

    position: absolute;
    width: 40px;
    height: 40px;

    @media (max-width: 520px) {
      width: 30px;
      height: 30px;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
    }

    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__thumbnail {
    width: 100%;
    height: 100%;

    border-radius: 20px;
    background-color: $mainBlack;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: inherit;

      width: 100%;
      height: 100%;
    }
  }
}

.projectItem-icons {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -10px;

  @media (max-width: 520px) {
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
  }

  svg {
    width: 40px;
    height: 40px;

    @media (max-width: 520px) {
      width: 30px;
      height: 30px;
    }

    margin: 0 10px;
  }
}

.description {
  min-height: 60px;
  transition: all 0.3s;
  padding: 10px;

  width: calc(100% - 40px);
  position: absolute;
  bottom: 20px;
  left: calc(50% + 0px);
  opacity: 0;

  background-color: rgba(0, 0, 0, 0.56);

  border-radius: 0 0 20px 20px;

  transform: translateX(-50%);

  @media (max-width: 520px) {
    width: 100%;
    bottom: 0;
  }

  &__title {
    @include fluid-type(320px, 1920px, 15px, 19px);
    margin-bottom: 10px;
  }

  &__text {
    @include fluid-type(320px, 1920px, 12px, 16px);
  }
}
</style>
