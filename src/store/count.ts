import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    //actions放置一个一个的方法，用于相应组件中的操作
    actions:{
        //增加的方法
        increment(vlaue:number){
            //this为当前store实例
            if(this.sum<10){
                this.sum+=vlaue
            }
            
        },
        //减少的方法
        decrement(vlaue:number){
            this.sum-=vlaue
        }
    },
    // 真正存储数据的地方
    state(){
        return {
            sum:6,
            school:'尚硅谷',
            subject:'前端'
        }
    },
    getters:{
        bigSum:state=>state.sum*10,
        smallSum():number {
            return this.sum/10
        }
    }
})