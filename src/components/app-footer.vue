<template>
 <div id="rules-container" v-if="showRules">
     <div class="rules">
         <div class="rules-header">
             <div class="rules-title">
                 <h3>Rules</h3>
             </div>
             <div class="rule-close" @click="showRules=false">
                 <img src="../assets/icon-close.svg" alt="">
             </div>
         </div>
         <div class="rules-image-container">
             <img src="../assets/image-rules.svg" alt="">
        </div>
         
     </div>
 </div>
  <footer>
      <div class="credit">
          <h5></h5>
      </div>
        <div class="button-container">
          <button class="button" @click="showRules=true">Rules</button> 
        </div>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            showRules: false
        }
    }

}
</script>

<style scoped>
footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.button{
outline: 0px;
border: 1px solid #fff;
border-style: solid;
border-radius: 10px;
background: transparent;
color: #fff;
padding: 10px 20px;
text-transform: uppercase;
    cursor: pointer;    

}
#rules-container{
    top: 0%;
    bottom:0%;
    right: 0%;
    left:0%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
}
.rules{
    
    top: 50%;
    left:50%;
    padding: 20px;
    width: 300px;
    height: 350px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}
.rules-title{
    color: rgb(61, 61, 70);
}
.rules-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.rules-image-container{
    width: 100%;
    padding: 10px 0px;
}
.rule-close{
    cursor: pointer;
}
</style>