// updating the local.ini file 
      [cors]
origins = *

[httpd]
    enable_cors = true

// --------------------CRUD operations COUCHDB-------------------------------------------------------

// "mycouchshop" is a database name

    let     username = "*****";
    let password = "*****";
    let EN = {
        "name": "Morgan",
        "age": "24"
    }
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')    
    const url = 'http://localhost:5984/mycouchshop/133806b8e7a26f9099884e5ff10031db/'
    const data = {EN, "_rev":"1-f62208cb5761dd5c7d1c5954dfba0e7a"};

    // Getting data from couch
    Axios.get(url, {
      headers: {
        'Authorization': `Basic ${token}`
      },
    })
    .then (res => console.log(res.data));

    // posting data to couch
    Axios.post('http://localhost:5984/mycouchshop/', data.EN , {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    .then(res => console.log(res.data));

    // deleting a document
    Axios.delete('http://localhost:5984/mycouchshop/d06e965d06a8ea98b26451104c00a7f6?rev=1-08224ab06812cfc70af4a5fa52a2df46', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    .then(res => console.log(res));

    
    // updating a document
    Axios.put('http://localhost:5984/mycouchshop/133806b8e7a26f9099884e5ff10031db/', data, {
      headers: {
        'Authorization': `Basic ${token}`,
        
      }
    })
    .then (res => console.log(res));

// deleting a database
      Axios.delete('http://localhost:5984/mycouchshop', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    .then(res => console.log(res));
   
