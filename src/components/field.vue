<template>
<template v-if="userChoice">
    <div class="playing-title">
            <h3>You Picked</h3>
            <h3>The house picked</h3>
    </div>
    <section id="field">
            <character :cname="userChoice" additional="half"></character>

            <character :cname="computerChoice" additional="half" v-if="computerChoice"></character>
            <null-character  v-else></null-character>
        
    </section>
</template>
<section v-else id="field" :class="`${this.characters.length==3?'bg-triangle': this.characters.length==5?'bg-pentagon': 'monomode'}`">
    <template v-for="(character,index) in characters" :key="character">
        <!-- Check if the element if it last element and fill up the entire space -->
        <character :select="selectCharacter" :index="index" :cname="character" :additional="`${(index+1)%2!=0&&(index+1)/(characters.length)==1?'full':'half'}`"></character>
    </template>
</section>

</template>
<script>
import character from './character.vue'
import nullCharacter from './null-character.vue'
export default {
    data(){
        return{
            playing: false,
            userChoice: "",
            computerChoice: ""

        }
    },
    props:{
        characters:{
            type: Array,
            required: true
        }, 
    },computed:{
        }, components:{
        character, nullCharacter
    }, methods:{
        selectCharacter(key){
            alert('Hello you clicked me')
            this.userChoice=this.characters[key];
            this.playing= true,
            setTimeout(()=>{ 
                this.computerChoice=this.characters[Math.round(Math.random()*2)]
            },1000)
        }
    }
}
</script>

<style>
#field{
    background-size: 35%;
    background-position: 50% 60%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 0px;
    width: 100%;
}
.bg-pentagon{
    background-image: url('../assets/bg-pentagon.svg');
}
.bg-triangle{
    background-image: url('../assets/bg-triangle.svg');

}
.playing-title{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
}
.playing-title h3{
    width: 50%;
    text-align: center;

}
</style>