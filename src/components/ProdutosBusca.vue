<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="busca" placeholder="Buscar...">
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos">
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({query: { q: this.busca } })
    }
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

#lupa {
  width: 59px;
  height: 59px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  box-shadow: none;
}
</style>