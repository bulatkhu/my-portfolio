<template>
  <header class="header">
    <ul class="header-list">
      <li
        v-for="({ to, label, icon }, index) in links"
        class="header-list__item"
        :key="index"
      >
        <router-link
          :to="to"
          class="header-list__btn"
          exact-active-class="active"
        >
          <component :is="icon" />
          {{ label }}
        </router-link>
      </li>
    </ul>

    <div class="header-mob__wrapper">
      <div class="header-mob">
        <button
          @click="openMenu = !openMenu"
          :class="['header-mob__burger', openMenu && 'active']"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul :class="['header-mob__list mobList', openMenu && 'active']">
        <li
          v-for="({ to, label, icon }, index) in [...links, ...sideLinks]"
          class="header-list__item"
          :key="index"
          @click="openMenu = false"
        >
          <router-link
            :to="to"
            class="header-list__btn"
            exact-active-class="active"
          >
            <component :is="icon" />
            {{ label }}
          </router-link>
        </li>
      </ul>
    </div>

    <ul v-if="sideLinks.length" class="header-list">
      <li
        v-for="({ to, label, icon }, index) in sideLinks"
        :key="index"
        class="header-list__item"
      >
        <router-link
          :to="to"
          class="header-list__btn"
          exact-active-class="active"
        >
          <component :is="icon" />
          {{ label }}</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
import AboutIcon from "@/assets/svg-icons/about-icon.svg";
import ContactIcon from "@/assets/svg-icons/contacts-icon.svg";
import HomeIcon from "@/assets/svg-icons/home-icon.svg";
// import PortfolioIcon from "@/assets/svg-icons/portfolio-icon.svg";

const links = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/contacts", label: "Contacts", icon: ContactIcon },
  { to: "/about", label: "About", icon: AboutIcon },
];

const sideLinks = [
  // { to: "/portfolio", label: "Portfolio", icon: PortfolioIcon },
];

export default {
  data() {
    return {
      links,
      sideLinks,
      openMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$hideMediumMenuIcon: 720px;
$hideDeskMenuOn: 600px;

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
  margin: 0 auto 60px auto;
  justify-content: space-between;

  @media (max-width: $hideDeskMenuOn) {
    margin: 0 0 40px 0;
    padding: 0;
    max-width: 100%;
  }

  &-list {
    display: flex;

    @media (max-width: $hideDeskMenuOn) {
      display: none;
    }

    &__item {
      &:not(:last-child) {
        margin-right: 15px;
      }

      @media (max-width: $hideDeskMenuOn) {
        all: unset;
        display: inline-block;

        margin-bottom: 15px;

        a {
          display: inline-block;
        }
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

      @include fluid-type(320px, 1920px, 12px, 18px);

      text-transform: uppercase;
      padding: 10px 10px 10px 35px;

      &:hover,
      .active {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: rgb(0 0 0 / 10%) 0 10px 20px,
          rgb(255 255 255 / 20%) 0 0 0 0.5px inset;
      }

      @media (max-width: $hideMediumMenuIcon) {
        padding: 8px;
        svg {
          display: none;
        }
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

.header-mob__wrapper {
  display: none;
  background-color: $mainBlack;
  padding: 0 10px;
  width: calc(100% + 30px);
  margin: -15px;

  @media (max-width: $hideDeskMenuOn) {
    display: flex;
    flex-direction: column;
  }
}

.header-mob {
  height: 50px;
  //width: calc(100% + 20px);
  //margin: -10px;
  padding: 0 10px;

  &__burger {
    display: inline-block;
    cursor: pointer;
    position: relative;
    margin-top: 3px;

    span {
      display: block;
      width: 35px;
      height: 2px;
      background-color: #fff;
      margin: 6px 0;
      transition: 0.4s;

      &:first-child {
        //transform: rotate(-45deg) translate(-9px, 6px);
      }

      &:nth-child(2) {
      }

      &:last-child {
        //transform: rotate(45deg) translate(-8px, -8px);
      }
    }

    &.active {
      span {
        &:first-child {
          transform: rotate(-45deg) translate(-8px, 5px);
          width: 120%;
        }
        &:nth-child(2) {
          transform: scale(0);
        }
        &:last-child {
          width: 120%;
          transform: rotate(45deg) translate(-7px, -3px);
        }
      }
    }
  }

  @media (max-width: $hideDeskMenuOn) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.mobList {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s;

  &.active {
    max-height: 500px;
  }
}
</style>
