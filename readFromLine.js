const { stdin, stdout } = require("process")
let readline=require("readline")

let rs=readline.createInterface({

     input:stdin,
     output:stdout
}
)

rs.question("write your name  ",(data)=>
{
 console.log("Hello"+" "+data)
 rs.close()
}

)
