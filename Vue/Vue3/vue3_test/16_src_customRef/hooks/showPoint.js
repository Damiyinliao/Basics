import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function(){
    // 鼠标坐标打点的位置
    let point = reactive({
        x:0,
        y:0
    });
    function savePonit(event){
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(point.x, point.y);
    };
    onMounted(()=>{
        window.addEventListener('click', savePonit);
    });
    onBeforeUnmount(()=>{
        window.removeEventListener('click', savePonit)
    })
    return point
}