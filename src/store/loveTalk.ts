import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";    
/*选项式
export const useTalkStore = defineStore('talk', {
    actions:{
        async getATalk(){
            let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

            let obj = { id: nanoid(), content };

            this.talkList.unshift(obj);
        }
    },
    state(){
        return {'talkList': JSON.parse(localStorage.getItem('talkList')||'[]')}
    }
})
*/
//组合式
import { ref } from "vue";
export const useTalkStore = defineStore('talk', ()=>{
    
    const talkList = ref(JSON.parse(localStorage.getItem('talkList') as string)||'[]')

    async function getATalk(){
        let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

        let obj = { id: nanoid(), content };

        talkList.value.unshift(obj);

    }

    
    return { talkList, getATalk }
})


