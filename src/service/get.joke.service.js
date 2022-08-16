import axios from 'axios';
const GetJoke=()=>{
    return axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
}

export default GetJoke;