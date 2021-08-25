<template>
    <div class="character-container half">
        <div class="character" :class="cname">
            <div class="inner-image-container">
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
    display: flex;
    align-items: center;
    justify-content:center;
}
.character .inner-image-container{
    width: 80%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    height: 80%;
    padding: 15% 15%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.half .character{
    width:250px;
    height: 250px;
}
.half{
    width: 50%;
}
</style>