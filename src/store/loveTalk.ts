import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk', {
    state(){
        return {'talkList':[
            { id: "1", content: '今天天气不错1' },
            { id: "2", content: '今天天气不错2' },
            { id: "3", content: '今天天气不错3' },
        ]}
    }
})
