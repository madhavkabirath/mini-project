var http=require('http')

http.createServer(function(req,res)
{
    console.log('My Node JS Server Started Successfully')
}).listen(5000)