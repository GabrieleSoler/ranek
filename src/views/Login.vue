<template>
  <section class="login">
    <h1> Login</h1>
    <form>
      <label for="email"> Email </label>
      <input type="email" id="email" name="email" v-model="login.email">
       <label for="senha"> Senha </label>
      <input type="password" name="senha" v-model="login.senha">
      <button class="btn" @click.prevent="logar">Fazer Login</button>
    </form>
    <p class="perder">
      <a href="/" target="_blank">Esqueceu sua senha? Clique aqui.</a>
    </p>
    <LoginCriar/>
  </section>
</template>

<script>

import LoginCriar from "@/components/LoginCriar.vue";
export default {
  name: "Login",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUsuario", this.login.email);
      //no dipatch, tem que colocar o nome da ação, ou seja, getUsuario, nesse getUsuario tinha a ação de fazer login true, e colocar o payload,que nesse caso é o email.
      this.$router.push({ name: "usuario" })
//Esse ultimo router é para fazer com que quando o usuario faz login, já é levado direto para a pagina de usuario.
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perder {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perder a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>