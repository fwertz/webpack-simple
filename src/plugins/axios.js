import _axios from 'axios';

const axios = _axios.create({
    baseURL: process.env.APIS
});

axios.CancelToken = _.axios.CancelToken;

export default {
    install( Vue, options ) {
        // let token = Vue.ls.get( 'token' );
        
        // if ( token ) {
        //     axios.defaults.headers.common['Authorization'] = token;
        // }

        Vue.prototype.$axios = axios;
    }
}