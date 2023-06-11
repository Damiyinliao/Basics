<template>
    <div>
        <h4>{{$route.query.id}}</h4>
        <h4>{{$route.query.title}}</h4>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        data() {
            return {
                
            }
        },
        mounted(){
            console.log('Detail',this.$route);
        }

    }
</script>

<style>

</style>