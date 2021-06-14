<template>
  <div class="content">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/App/Navbar";

export default {
  components: { Navbar },
};
</script>

<style scoped lang="scss">
.content {
  background: #171721;
  min-height: 100vh;
  padding: 20px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 720px) {
    padding: 15px;
  }

  @media (max-width: 520px) {
    padding: 10px;
  }
}

.blueBg {
  background: url("/images/background-main-page.jpg") no-repeat center 10%;
  background-size: cover;
}
</style>
