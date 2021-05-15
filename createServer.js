const http = require('http');

// Create server
const server = http.createServer((req,res) => {
    //console.log(req);
    if(req.url == '/'){
        res.end('Welcome to our home page!')
    }
    else if(req.url == '/about'){
        res.end('Here is our short history')
    }
    //res.write('Welcome to our home page!')
    //res.end()
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can't find the page you are looking for</p>
            <a href="/">back home</a>
        `)
    }
})

server.listen(5000);

