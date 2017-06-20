/**
 * Created by diamondrubix on 5/29/17.
 */
//url = '172.18.100.133' //home
url = '172.16.15.1' //always
//url = '10.0.0.99' //marco
port = '8090'
//url = '192.168.100.197'//cousin2

exports.AllPage = function (key) {
    return fetch('http://'+url+':'+port+'/phoneGetPost',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key: key
            })
        })
        //.then((result)=> {console.warn("Result:",result); return result})
        //.catch((error)=> {console.warn("Error: ",result); return result})
}

exports.login = function(username,password){
    return fetch('http://'+url+':'+port+'/phoneloginvalidate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            logged: "true"
        })
    })

}

exports.sendPost = function (location,data) {
    fetch('http://'+url+':'+port+'/'+location+'/',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

}

//* this post request works
exports.testConnection =  function() {
    fetch('http://'+url+':'+port+'/phone/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        })
    })
}
