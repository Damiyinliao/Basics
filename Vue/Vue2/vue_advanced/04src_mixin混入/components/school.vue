<template>
    <div>
        <h3>名称：{{name}}</h3>
        <h3>地址：{{address}}</h3>
        <button @click="showName">打印名字</button>
    </div>
</template>

<script>
    // import {mixin} from '../mixin.js'
    export default {
        name:'School',
        data(){
            return {
                name:'浙江海洋大学',
                address:'海大南路一号'
            }
        },
        // mixins:[mixin]
    }
</script>