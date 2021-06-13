<template>
  <div class="item-skill">
    <div class="item-skill__img">
      <img v-if="typeof icon === 'string'" :src="icon" alt="item" />
      <component v-else :is="icon" />
    </div>
    <p class="item-skill__label">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: ["icon", "label"],
};
</script>

<style lang="scss" scoped>
.item-skill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  padding: 10px 0;
  flex-basis: 25%;

  flex-wrap: wrap;

  @media (max-width: 450px) {
    flex-basis: 33%;
  }

  &__label {
    font-size: 14px;
  }

  &__img {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    background-color: $darkBlack;

    margin-bottom: 10px;

    img,
    svg {
      max-width: 60%;
      max-height: 60%;
    }
  }
}
</style>
