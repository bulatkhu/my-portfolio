<template>
  <div class="content">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/roles/pages/User/Navbar";

export default {
  components: { Navbar },
};
</script>

<style scoped>
.content {
  background: #171721;
  min-height: 100vh;
  padding: 20px;

  display: flex;
  flex-direction: column;
  flex: 1;
}

.blueBg {
  background: url("/images/background-main-page.jpg") no-repeat center 10%;
  background-size: cover;
}
</style>
