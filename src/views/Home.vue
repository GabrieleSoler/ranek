<template>
  <section>
    <h1> Compre ou Venda </h1>
    <ProdutosBusca/>
    <ProdutosLista/>
  </section>
</template>

<script>

import ProdutosBusca from "@/components/ProdutosBusca.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: 'home',
  components: {
    ProdutosBusca,
    ProdutosLista
  }
};
</script>

<style scoped>

h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>