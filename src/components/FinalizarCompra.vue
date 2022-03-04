<template>
  <section>
    <h2>Endereço de envio</h2>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </UsuarioForm> 
    </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"
import { api } from "@/services.js"
import { mapState } from "vuex"

export default {
  name: "FinalizarCompra",
  components: {
    UsuarioForm
  },
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado
        }
      };
    }
  },
  methods: {
    criarTransacao() {
     return api.post("/transacao", this.compra).then(() => {
        // this.compra é o nome q eu di para as infos, ai vai ser postado na transação os dados de compra do usuario, e tem um return na frente, pois como foi usado async e await, tem q fazer uma promise.
        this.$router.push({ name: "compras" });
      })
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.email);
       await this.criarTransacao();
      } catch (error) {
        console.log(error);
      }
    },
    finalizarCompra() {
      if(this.$store.state.login) {
        this.criarTransacao();
      } else {
        this.criarUsuario();
        // se estiver logado, o usuario já consegue fazer a transação, caso contrario, terá que efetuar o login. 
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn {
  background: #e80;
}
</style>