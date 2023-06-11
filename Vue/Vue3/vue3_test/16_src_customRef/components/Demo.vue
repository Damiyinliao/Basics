<template>
    <div class="content">
        <input type="text" v-model="keyword">
        <h2>关键词：{{ keyword }}</h2>
    </div>
</template>

<script>
import { customRef, reactive, ref } from 'vue';
export default {
    name: 'Demo',
    setup() {
        function myRef(value){
            return customRef((track, trigger)=>{ 
                return{
                    get(){
                        console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
                        track();    //通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
                        return value;
                    },
                    set(newValue){
                        console.log(`有人把myRef这个容器中修改了数据为:${newValue}`);
                        value = newValue;
                        trigger();  //通知Vue去重新解析模板
                    }
                }
            })
        };

        let keyword = myRef('hello');

        return {
            keyword
        }
        /* 延迟500ms写法
        setup(){
			// let keyword = ref('hello') //使用Vue准备好的内置ref
			//自定义一个myRef
			function myRef(value,delay){
				let timer
				//通过customRef去实现自定义
				return customRef((track,trigger)=>{
					return{
						get(){
							track() //告诉Vue这个value值是需要被“追踪”的
							return value
						},
						set(newValue){
							clearTimeout(timer)
							timer = setTimeout(()=>{
								value = newValue
								trigger() //告诉Vue去更新界面
							},delay)
						}
					}
				})
			}
			let keyword = myRef('hello',500) //使用程序员自定义的ref
			return {
				keyword
			}
		}
        */
    }
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>