
import axios from 'axios';
const CompanyInfo=()=>{
    return axios.get('https://api.spacexdata.com/v3/info')
}
const StarShip=()=>{
    return axios.get('https://api.spacexdata.com/v3/rockets/starship')
}
const getDragon=()=>{
    return axios.get('https://api.spacexdata.com/v3/dragons')
}
const getFalcon=()=>{
    return axios.get('https://api.spacexdata.com/v3/rockets/falcon9')
}

const SpacexApi={StarShip,CompanyInfo,getDragon,getFalcon}
export default SpacexApi;