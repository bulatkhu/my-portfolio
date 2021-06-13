<template>
  <div :class="['socialLinks', className]">
    <a
      class="socialLinks__link"
      target="_blank"
      href="https://github.com/bulatkhu"
      ><GithubIcon
    /></a>
    <a
      class="socialLinks__link"
      target="_blank"
      href="https://www.linkedin.com/in/bulat-khudainazarov-891a501b5/"
      ><LinkdinIcon
    /></a>
    <!--        <a class="main-col__socialLink" target="_blank" href="/social"-->
    <!--          ><GithubIcon-->
    <!--        /></a>-->
  </div>
</template>

<script>
import GithubIcon from "@/assets/svg-icons/github-icon.svg";
import LinkdinIcon from "@/assets/svg-icons/linkdin-icon.svg";

export default {
  components: { GithubIcon, LinkdinIcon },
  props: {
    className: String,
  },
};
</script>

<style scoped lang="scss">
.socialLinks {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &__link {
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
}
</style>
