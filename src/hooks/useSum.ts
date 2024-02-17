
import { ref, reactive, computed } from 'vue'
import axios from 'axios'


export default function () {

    let sum = ref(0)

    let bigSum=computed(()=>sum.value*10)

    function add() {
        sum.value++
    }

    return {sum,bigSum,add}
}

