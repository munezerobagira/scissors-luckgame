<template>
<div class="game-result">
    <h1>{{result=="Win"?'You win':result=="Loss"?"You loose":"unexpected error"}}</h1>
    <button @click="resetGame">Play again</button>
</div>
  

</template>

<script>
export default {
    props:{
        result:{type: String},
        resetGame:{type:String}
    }

}
</script>

<style>
.game-result{
    
}
</style>