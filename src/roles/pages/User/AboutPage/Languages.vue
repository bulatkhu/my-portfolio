<template>
  <ul class="langs">
    <li class="langs-item">
      <RussianFlagIcon class="langs-item__icon" />
      <p class="langs-item__language">Russian</p>
      <p style="color: rgb(62, 194, 68)" class="langs-item__level">Native</p>
    </li>
    <li class="langs-item">
      <EnglandFlagIcon class="langs-item__icon" />
      <p class="langs-item__language">English</p>
      <p class="langs-item__level">Intermediate</p>
    </li>
    <li class="langs-item">
      <GermanFlagIcon class="langs-item__icon" />
      <p class="langs-item__language">German</p>
      <p style="color: rgb(62, 194, 68)" class="langs-item__level">Fluent</p>
    </li>
    <li class="langs-item">
      <FinlandFlagIcon class="langs-item__icon" />
      <p class="langs-item__language">Finnish</p>
      <p style="color: rgb(62, 194, 68)" class="langs-item__level">Fluent</p>
    </li>
  </ul>
</template>

<script>
import RussianFlagIcon from "@/assets/svg-icons/countries/russian-flag.svg";
import EnglandFlagIcon from "@/assets/svg-icons/countries/england-flag.svg";
import GermanFlagIcon from "@/assets/svg-icons/countries/german-flag.svg";
import FinlandFlagIcon from "@/assets/svg-icons/countries/finland-flag.svg";

export default {
  components: {
    RussianFlagIcon,
    EnglandFlagIcon,
    GermanFlagIcon,
    FinlandFlagIcon,
  },
};
</script>

<style lang="scss" scoped>
.langs {
  display: flex;
  align-items: center;
  margin-left: -10px;

  @media (max-width: 520px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  &-item {
    text-align: center;

    //@media (max-width: 520px) {
    //  margin-bottom: 10px;
    //}

    margin: 10px;

    &__icon {
      width: 20px;
      height: 20px;
      margin-bottom: 7px;
    }
    &__language {
      font-weight: 600;
      word-spacing: 2px;
      margin-bottom: 1.8px;
    }
    &__level {
      font-size: 12pt;
      color: orange;
    }
  }
}
</style>
