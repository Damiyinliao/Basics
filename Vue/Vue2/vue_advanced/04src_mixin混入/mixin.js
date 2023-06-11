export const mixin={
    methods:{
        showName(){
            console.log(this.name);
        }
    }
}

export const hunhe = {
    mounted() {
        console.log("混合")
    },
}