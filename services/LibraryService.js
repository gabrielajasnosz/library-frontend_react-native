import React, { Component } from 'react';

class LibraryService extends Component {
    baseURL = 'http://192.168.7.167:8080/library'; //kamil pinas ip
    // baseURL = 'http://192.168.56.1:8080/library';     gaba ip

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
                return json;
            })
            .catch(error => {
                console.log('Api call error' + error);
            });
    };

    getBooks = async() => {
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

    getUser = async(login, password) => {
        const url =
            this.baseURL +
            `/client?login=${encodeURIComponent(login)}&password=${encodeURIComponent(
        password,
      )}`;
        console.log(login);
        console.log(password);
        return await fetch(url)
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

    updateUser = async user => {
        console.log(user);
        return await fetch(this.baseURL + '/client/update', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then(response => {
                console.log(response.status);
                if (response.status === 200) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.log('PUT error: ' + error);
            });
    };

    signIn = async(nick, pass) => {
        const data = { login: nick, password: pass };
        console.log(data);
        return await fetch(this.baseURL + '/client/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                console.log(response.status);
                if (response.status === 200) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.log('POST error: ' + error);
            });
    };

    registerUser = async(
        nick,
        pass,
        name,
        surname,
        houseNumber,
        phoneNumber,
        street,
        city,
        zipCode,
    ) => {
        const data = {
            login: nick,
            password: pass,
            name: name,
            surname: surname,
            houseNumber: houseNumber,
            phoneNumber: phoneNumber,
            street: street,
            city: city,
            zipCode: zipCode,
        };
        console.log(data);
        return await fetch(this.baseURL + '/client/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                console.log(response.status);
                if (response.status === 201) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.log('POST error: ' + error);
            });
    };

    rentBook = async(nick, pass, book) => {
        const url = this.baseURL + '/books/rent';
        console.log(url);
        return await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                }),
                body: `login=${encodeURIComponent(nick)}&password=${encodeURIComponent(
        pass,
      )}&book_id=${encodeURIComponent(book)}`,
            })
            .then(response => {
                if (response.status === 200) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.log('Api call error' + error);
            });
    };

    getRentals = async(login, password) => {
        const url =
            this.baseURL +
            `/books/rented/get_client_rentals?login=${encodeURIComponent(
        login,
      )}&password=${encodeURIComponent(password)}`;
        console.log(login);
        console.log(password);
        return await fetch(url)
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