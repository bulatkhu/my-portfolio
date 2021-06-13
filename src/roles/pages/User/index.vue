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
  background: linear-gradient(rgb(26, 2, 108) 0%, rgb(70, 48, 142) 100%);
}
</style>
