import {AxiosInstance as axios} from "axios";

let source = {
    fetchAuditEvents: function (search) {

        let markets;
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                markets = res.data;
            })

        return markets;
    },
};