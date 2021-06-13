<template>
  <div class="skills">
    <p class="skills__title">{{ title }}</p>

    <div class="skills-content">
      <div v-if="!other" class="skills-content__col">
        <ul class="skills-list">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="skills-list__item"
          >
            <span style="font-weight: bold">{{ item.main }}</span> -
            {{ item.text }}
          </li>
        </ul>
      </div>

      <div
        class="skills-content__col"
        :style="{ flexBasis: other ? '100%' : '50%' }"
      >
        <ItemSkill
          v-for="(item, index) in skillsItems"
          :key="index"
          :icon="item.icon"
          :label="item.label"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemSkill from "./ItemSkill";

export default {
  components: { ItemSkill },
  props: ["title", "items", "skillsItems", "other"],
};
</script>

<style scoped lang="scss">
.skills {
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 10px;
    color: $purple;
  }

  &-content {
  }
}

.skills-content {
  display: flex;
  justify-content: space-between;

  &__col {
    flex-basis: calc(50% - 5px);
    background-color: $mainBlack;
    padding: 20px;

    &:last-child {
      justify-content: center;
      display: flex;
      flex-flow: row wrap;
    }
  }
}

.skills-list {
  &__item {
    padding-left: 20px;
    position: relative;
    margin-bottom: 20px;
    font-size: 15px;

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $purple;

      border-radius: 50%;
      left: 0;
    }
  }
}
</style>
