<template>
    <div class="character-container" @click="select(index)" :class="additional">
        <div class="character" :class="cname">
            <div class="inner-image-container">
                    <img :src=' require("../assets/icon-"+cname+".svg")' :alt="cname">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cname: {type:String , required: true},
        additional:{type:String, required: true},
        select:{type: Function, required: false},
        index: {type:Number, required: false}
    }

}
</script>

<style scoped>
.character-contaier{
    display: flex;
    align-items: center;
    justify-content: center;
}
.character{
    margin: auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 180px;
    width: 180px;
    cursor: pointer;
    border-bottom: 7px;
    border-style: solid; 
}
.character .inner-image-container{
    width: 80%;
    background-color: #eee;
    border-radius: 50%;
    height: 80%;
    padding: 15% 15%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.half{
    width: 40%;
}
.half-2{
    width: 50%
}
.half-2 .character{
    width:250px;
    height: 250px;
}
.full{
    width: 100%
}
.scissors{
    background: linear-gradient(hsl(39, 89%, 49%) ,hsl(40, 84%, 53%));
    border-color:hsl(40, 94%, 40%);
}
.rock{
    background: linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%));
    border-color: hsl(349, 72%, 44%);
}
.paper{
    background: linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%));
    border-color: hsl(230, 69%, 55%);
}
</style>