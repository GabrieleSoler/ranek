<template>
  <section>
    <h2>Adicionar produto</h2>
    <ProdutosAdicionar/>
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{produto.descricao}}</p>
          <button class="deletar" @click="deletarProduto(produto.id)"></button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>

import ProdutosAdicionar from "@/components/ProdutosAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutosAdicionar,
    ProdutoItem
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"])
    //vai puxar o estado desses itens, tipo,se ta logado ou nao etc
  },
  methods: {
     ...mapActions(["getUsuarioProdutos"]),
    //isso faz com que nao precise escrever this.login, this.usuario toda vez
    deletarProduto(id) {
      const confirmar = window.confirm("Deseja remover este produto?");
      if(confirmar) {
        api.delete(`/produto/${id}`).then(() => {
          this.getUsuarioProdutos();
          //usei esse then pois mesmo removendo, ele ainda vai aparecer na pagina de produtosdo usuario, entao eu puxo os produtos novamente atualizada.
        }).catch(error => {
          console.log(error.response);
        })
      }
    }
  },

  watch: {
    login() {
      this.getUsuarioProdutos();
    }
  },
  created() {
    if(this.login) {
      this.getUsuarioProdutos();
      //ele só vai buscar as informações do fetch se o usuario estiver logado, mas se o usuario nao estiver logado, e logar depois, o site nao vai fazer o fetch, pois o componente ja foi criado,entao precisamos criar uma watch
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all .3s
}
</style>