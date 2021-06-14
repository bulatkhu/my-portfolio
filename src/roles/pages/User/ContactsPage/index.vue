<template>
  <div class="contacts-page">
    <Contacts />
    <Footer />
  </div>
</template>

<script>
import Contacts from "../components/Contacts";
import Footer from "@/roles/pages/User/components/Footer";

export default {
  components: { Contacts, Footer },
};
</script>

<style scoped lang="scss">
.contacts-page {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
