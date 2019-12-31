<template>
  <div class="about">

    <h1>Vuex Demo</h1>

    <input type="number" id="uid" name="uid"  v-model="investment">
    <button @click="invest()">Invest</button>
    <h6>{{this.$store.getters.message}}</h6>

    <P>Your current investment is </P>
    <p>{{this.$store.getters.counter}}</p>

    <P>Your token is </P>
    <button @click="genToken()">Generate Token</button>
    <p>{{this.$store.getters.tokenize}}</p>

  </div>
</template>

<script>

export default {

  name: 'about',
  methods: {
    invest(){
      this.$store.dispatch('invest',this.investment)
    },
    genToken(){
      this.$store.dispatch('genToken')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button{
  padding:10px 20px;
  margin: 30px 10px;
}
</style>
