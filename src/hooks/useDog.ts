
import { ref, reactive , onMounted} from 'vue'
import axios from 'axios'

export default function () {

    //https://dog.ceo/api/breed/pembroke/images/random
    let dogList = reactive<Array<string>>([])

    async function getDog() {
        try {
            const res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        dogList.push(res.data.message)
        console.log(res.data)
        } catch (error) {
            alert(error)
        }

    }

    onMounted(getDog)

    //向外暴露东西
    return {dogList,getDog}

}
