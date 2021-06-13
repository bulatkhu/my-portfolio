<template>
  <div class="main">
    <div class="main-col">
      <h2 class="main-col__title">Hi, I am Bulat</h2>
      <p class="main-col__subTitle">React developer</p>

      <p class="main-col__text">
        Full-Stack JavaScript & NodeJS developer with over 2 years of
        professional experience in building frontend, backend and mobile
        applications.
      </p>

      <div class="main-col__btns">
        <!--        <router-link to="/" class="main-col__btn">My portfolio</router-link>-->
        <router-link to="/about" class="main-col__btn">About me</router-link>
        <router-link to="/contacts" class="main-col__btn">Contacts</router-link>
      </div>

      <SocialLinks />
    </div>
    <div class="main-col"></div>
  </div>
</template>

<script>
import SocialLinks from "../components/SocialLinks";

export default {
  components: { SocialLinks },
  mounted() {
    const $content = document.querySelector(".content");
    $content.classList.add("blueBg");
  },
  beforeDestroy() {
    const $content = document.querySelector(".content");
    $content.classList.remove("blueBg");
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 100%;
  width: 90%;
  margin: auto;

  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  color: #fff;

  &-col {
    align-self: stretch;
    flex-basis: 49%;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.main-col {
  &__socialLink {
    border-radius: 15px;
    cursor: pointer;
    font-size: 18pt;
    height: 55px;
    overflow: hidden;
    text-align: center;
    transition: background 0.3s ease 0s, color 0.3s ease 0s,
      box-shadow 0.3s ease 0s, transform 0.3s ease 0s;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(38, 47, 56);

    padding: 10px;

    svg {
      height: 100%;
      width: 100%;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      background: rgb(93, 76, 166);
      transform: translateY(-5px);
      box-shadow: rgb(0 0 0 / 10%) 0 10px 3px, rgb(23 0 102 / 50%) 0 30px 60px,
        rgb(255 255 255 / 50%) 0 0 0 0.5px inset;
    }
  }

  &:first-child {
    max-width: 500px;
  }

  &__title {
    font-size: 60px;
  }

  &__subTitle {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &__text {
    margin-bottom: 20px;
  }

  &__btns {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__btn {
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    box-shadow: rgb(0 0 0 / 10%) 0 10px 23px, rgb(23 0 102 / 20%) 0 20px 40px,
      rgb(255 255 255 / 50%) 0 0 0 0.5px inset;
    transition: all 0.3s ease-out 0s;
    border-radius: 10px;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-right: 15px;
    }

    font-weight: 600;
    font-size: 15px;

    &:hover {
      box-shadow: rgb(0 0 0 / 10%) 0 10px 3px, rgb(23 0 102 / 50%) 0 30px 60px,
        rgb(255 255 255 / 50%) 0 0 0 0.5px inset;
      transform: translateY(-3px);
    }

    padding: 10px;
  }
}
</style>
