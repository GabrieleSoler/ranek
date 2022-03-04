<template>
<div>
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
        <label>Search title:</label>
  </div>
  <div class="wrapper">
    <div class="card" v-for="post in filteredList" :key="post.id">
      <a v-bind:href="post.cidade" target="_blank">
        <small>posted by: {{ post.nome }}</small>
        {{ post.valor }}
      </a>
    </div>
  </div>
</div>
</template> 

<script>

class Post {
  constructor(nome, cidade, data, valor) {
    this.nome = nome;
    this.cidade = cidade;
    this.data = data;
    this.valor = valor;
  }
}

export default {
  name: "ProdutosAdicionar",
  data () {
    return {
search: '',
    postList : [
      new Post(
        'Gabriele', 
        'Cocal', 
        '2019', 
        '19000'
      ),
      new Post(
        'React.js', 
        'https://facebook.github.io/react/', 
        'Tim',
        'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
      ),
      new Post(
        'Angular.js', 
        'https://angularjs.org/', 
        'Sam', 
        'https://angularjs.org/img/ng-logo.png'
      ),
      new Post(
        'Ember.js', 
        'http://emberjs.com/', 
        'Rachel',
        'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
      ),
      new Post(
        'Meteor.js', 
        'https://www.meteor.com/', 
        'Chris', 
        'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
      ),
      new Post(
        'Aurelia', 
        'http://aurelia.io/', 
        'Tim',
        'https://cdn.auth0.com/blog/aurelia-logo.png'
      ),
      new Post(
        'Node.js', 
        'https://nodejs.org/en/', 
        'A. A. Ron',
        'https://code-maven.com/img/node.png'
      ),
      new Post(
        'Pusher', 
        'https://pusher.com/', 
        'Alex', 
        'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
      ),
      new Post(
        'Feathers.js', 
        'http://feathersjs.com/', 
        'Chuck',
        'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
      ),
]
    }
    
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.nome.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

</script>
