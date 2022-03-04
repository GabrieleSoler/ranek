<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
      </router-link>
      <router-link class="btn" to="/usuario" v-if="$store.state.login">{{nome}}</router-link>
      <router-link v-else to="/login" class="btn">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    nome() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
      // Esse replace faz com que só apareça o primeiro nome no login.
    }
  }
};
</script>

<style scoped>

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, .1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}


</style>