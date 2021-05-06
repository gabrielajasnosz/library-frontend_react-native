import React, {Component} from 'react';

class LibraryService extends Component {
  baseURL = 'http://192.168.0.241:8080/library';

  constructor() {
    super();

    this.state = {
      loginValues: [],
    };
  }

  getBookDetails = async bookId => {
    return await fetch(this.baseURL + '/books/' + bookId)
      .then(response => {
        console.log('dziala');
        return response.json();
      })
      .then(json => {
        //console.log(json);
        return json;
      })
      .catch(error => {
        console.log('Api call error' + error);
      });
  };

  getBooks = async () => {
    return await fetch(this.baseURL + '/books/all')
      .then(response => {
        console.log('dziala');
        return response.json();
      })
      .then(json => {
        //console.log(json);
        return json;
      })
      .catch(error => {
        console.log('Api call error' + error);
      });
  };

  signIn = async (nick, pass) => {
    const data = {login: nick, password: pass};
    const url =
      this.baseURL +
      `/client/login?login=${encodeURIComponent(
        data.login,
      )}&password=${encodeURIComponent(data.password)}`;

    console.log(url);
    return await fetch(url)
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          return data;
        } else {
          return [];
        }
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
