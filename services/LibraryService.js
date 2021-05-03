import React, {Component} from 'react';

class LibraryService extends Component {
  baseURL = 'http://192.168.0.21:8080/ksiegarnia';

  constructor() {
    super();

    this.state = {
      loginValues: [],
    };
  }

  getResult = async () => {
    return await fetch(this.baseURL + '/results?last=10')
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(error => {
        console.log('Api call error' + error);
      });
  };

  signIn = async (nick, pass) => {
    console.log(nick);
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({login: nick, password: pass}),
    };

    return await fetch(this.baseURL + '/login', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(error => {

        console.log('Api call error' + error);
        return [];
      });
  };

  // getTests = async () => {
  //   return await fetch(this.baseURL + '/tests')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(json => {
  //       return json;
  //     })
  //     .catch(error => {
  //       console.log('Api call error' + error);
  //     });
  // };

  //   getDetailsTests = async id => {
  //     return await fetch(this.baseURL + '/test/' + id)
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(json => {
  //         return json;
  //       })
  //       .catch(error => {
  //         console.log('Api call error' + error);
  //       });
  //   };
  // }
}
export default LibraryService;
