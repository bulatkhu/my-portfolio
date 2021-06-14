<template>
  <footer class="footer">
    <h5 class="footer__description">
      Living, learning, & leveling up one day at a time.
    </h5>

    <SocialLinks class-name="footer__links" />

    <p class="footer__note">Handcrafted by Bulat Khudainazarov ©️2021</p>
  </footer>
</template>

<script>
import SocialLinks from "../SocialLinks";
export default {
  components: { SocialLinks },
};
</script>

<style scoped lang="scss">
.footer {
  background: rgb(22, 25, 32);
  position: relative;
  border-top: 1px solid rgb(51, 48, 54);
  padding: 40px 50px 50px;
  margin: 40px -20px 0 -20px;

  text-align: center;
  font-size: 30px;

  &__description {
    color: $purple;
    margin-bottom: 40px;
    @include fluid-type(320px, 1920px, 18px, 24px);
  }

  &__links {
    display: flex;
    justify-content: center;
  }

  &__note {
    color: rgb(143, 154, 167);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 12px;
    margin-top: 60px;
  }
}
</style>
