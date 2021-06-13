<template>
  <div id="app">
    <User></User>
  </div>
</template>

<script>
import User from "@/roles/pages/User";

export default {
  name: "App",
  components: {
    User,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: inherit;

  font-weight: unset;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  all: unset;
  display: block;
  cursor: pointer;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
