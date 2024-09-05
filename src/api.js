import axios from "axios";

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID hUws9rQSnzvjMkJ_VkmPyi4of_JlhSvfn--G1UMRkEg'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImage; 