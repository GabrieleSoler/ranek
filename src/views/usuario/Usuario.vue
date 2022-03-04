<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'usuario'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'compras'}">Compras</router-link>
        </li>
          <li>
          <router-link :to="{name: 'vendas'}">Vendas</router-link>
        </li>
          <li>
            <router-link :to="{name: 'editar'}">Editar Usuário</router-link>
          </li>
            <button @click.prevent="deslogar">Deslogar</button>
      </ul>
    </nav>
    <transition mode="out-in">
    <router-view></router-view>
    </transition> 
  </section>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
  deslogar() {
    this.$store.dispatch("deslogarUsuario");
    this.$router.push("/login")
    //esse metodo primeiramente vai ativar o metodo criado no store para desfazer o login, e para limpar as informações de cadastro. Depois de deslogar, o usuario é levado para a rota de login.
    }
  }
}
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width:  900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .usuario {
      grid-template-columns: 1fr;
  margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background:  #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active, .sidenav a:hover, 
.sidenav button:hover {
  background: #87f;
  color: white;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

</style>