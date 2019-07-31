import axios from 'axios';

export default {
    sendImage: function(data) {
       return axios.post('/api/uploads', data)
    },
    getImage: function(){
        return axios.get('/api/uploads');
    }
}