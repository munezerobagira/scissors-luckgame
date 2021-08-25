<template>
  <header id="appHeader">
      <section class="title">
          <h1>{{title}}</h1>
      </section>
      <section class="score">
          <h5>Score</h5>
         <h1>{{score}}</h1> 
      </section>
  </header>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required:true
        },
        score:{
            type: Number,
            required: true
        }
        
    }

}
</script>

<style scoped>
#appHeader{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px 10px;
}
section.title{
    width: 80%;
    padding: 10px 5px;
}
section.score{
    border-radius: 10px;
    width: 20%;
    background: #fff;
    color: #333;
    text-align: center;
    padding: 20px 0px;
}
</style>