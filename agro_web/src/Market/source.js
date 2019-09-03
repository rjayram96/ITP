import axios from "axios";

let source = {
    fetchMarkets: function (search) {
        axios({
            method: 'get',
            url: 'http://192.168.43.91:8079/api/v1/3d/service/markets',
        })
            .then(function (response) {
                alert('success: ' + response);
                console.log(response.data);
//                this.setState({ markets: response.data });
            })
            .catch(function (error) {
                alert('error: ' + error);
            });
    },
};

export default source;