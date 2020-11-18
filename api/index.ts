import axios, { getAxios, postAxios } from '../lib/http';

const api = {
     url : '/parking/parkingLot/getParkingLotStateEnum'
}

export default {
     testApi(){
        return postAxios( api.url, {})
     }
}