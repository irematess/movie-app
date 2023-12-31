import { ref } from "vue";

export function useFetch (url) {

    const response = ref()

    fetch(url)
    .then((response) => response.json())
    .then((jsonData) => response.value = jsonData)

    return{ 
        response
    }
}

//axios
//service folder