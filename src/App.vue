<template>
  <!-- <main id="app"> -->
    <app-header :title="title" :score="score"></app-header>
    <app-field :characters="characters" :playing="palying" :play="play"></app-field>
    <app-footer></app-footer>
  <!-- </main> -->
</template>

<script>
import appHeader from './components/app-header.vue'
import appField from './components/field.vue'
import appFooter from './components/app-footer.vue'
export default {
  name: 'App',
  data(){
    return{
      appName:"Scissor game",
      characters: ["rock", "paper","scissors"],
      score: 0,
      playing: false,
      selectedCharacter: null
    }
  },
  methods:{
    play(character1, character2 ){
      switch(character1){
        case 'rock':
          return character2=="scissors"?"Win": "Loss"
        case 'paper':
          return character2=="rock"?"Win": "Loss"
        case 'scissors':
          return character2=="paper"?"Win": "Loss"
      }
    }
  },
  components: {
    appHeader,
    appField, 
    appFooter
  },computed:{
    title(){
      return this.characters.join('\t')
    }
  }
}
</script>

<style>
body{
  background: no-repeat center/cover radial-gradient( hsl(214, 47%, 23%) , hsl(237, 49%, 15%));
  min-height: 100vh;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
  max-width: 800px;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: no-wrap;
  justify-content: space-between  ;
}
*{
  max-width: 100%;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
