import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";    

export const useTalkStore = defineStore('talk', {
    actions:{
        async getATalk(){
            let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

            let obj = { id: nanoid(), content };

            this.talkList.unshift(obj);
        }
    },
    state(){
        return {'talkList':[
            { id: "1", content: '今天天气不错1' },
            { id: "2", content: '今天天气不错2' },
            { id: "3", content: '今天天气不错3' },
        ]}
    }
})
