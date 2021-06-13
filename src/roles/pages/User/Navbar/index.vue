<template>
  <header class="header">
    <ul class="header-list">
      <li class="header-list__item">
        <router-link
          to="/"
          class="header-list__btn"
          exact-active-class="active"
        >
          <HomeIcon />
          Home
        </router-link>
      </li>
      <li class="header-list__item">
        <router-link
          to="/about"
          class="header-list__btn"
          exact-active-class="active"
          ><AboutIcon /> About me</router-link
        >
      </li>
      <li class="header-list__item">
        <router-link
          to="/contacts"
          class="header-list__btn"
          exact-active-class="active"
          ><ContactIcon /> Contacts</router-link
        >
      </li>
    </ul>

    <ul class="header-list">
      <li class="header-list__item">
        <router-link
          to="/portfolio"
          class="header-list__btn"
          exact-active-class="active"
          ><PortfolioIcon /> Portfolio</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
import AboutIcon from "@/assets/svg-icons/about-icon.svg";
import PortfolioIcon from "@/assets/svg-icons/portfolio-icon.svg";
import ContactIcon from "@/assets/svg-icons/contacts-icon.svg";
import HomeIcon from "@/assets/svg-icons/home-icon.svg";

export default {
  components: { AboutIcon, PortfolioIcon, ContactIcon, HomeIcon },
};
</script>

<style lang="scss" scoped>
.header-list__btn.active {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgb(0 0 0 / 10%) 0 10px 20px,
    rgb(255 255 255 / 20%) 0 0 0 0.5px inset;
}

.header {
  padding: 20px;
  max-width: 90%;
  width: 100%;
  display: flex;
  margin: 0 auto auto auto;
  justify-content: space-between;

  &-list {
    display: flex;

    &__item {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }

    &__btn {
      position: relative;

      background: transparent;
      color: rgba(255, 255, 255, 0.7);
      box-shadow: rgb(0 0 0 / 10%) 0 10px 20px,
        rgb(255 255 255 / 20%) 0 0 0 0.5px inset;
      transition: all 0.3s ease-out 0s;
      border-radius: 10px;

      text-transform: uppercase;

      padding: 10px 10px 10px 35px;

      &:hover,
      .active {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: rgb(0 0 0 / 10%) 0 10px 20px,
          rgb(255 255 255 / 20%) 0 0 0 0.5px inset;
      }

      svg {
        width: 25px;
        height: 25px;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
      }
    }
  }
}
</style>
