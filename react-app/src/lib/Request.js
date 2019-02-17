import axios from "Axios";

class Request {
  constructor(url){
    this._url = url;
  }

  postData(data){
    return new Promise((fulfill, reject) => {
      axios.get(this._url + "&text=" + data).then((data)=>{
        fulfill(JSON.parse(data));
      });
    });
  }
}

export default Request;
