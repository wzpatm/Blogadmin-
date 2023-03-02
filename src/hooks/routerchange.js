import { useRouter } from 'vue-router';
// const router = useRouter()
 export default function (){
    const routerchange = (event)=>{
        console.log(event);
    }
    return { routerchange}
 }