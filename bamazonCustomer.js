var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
host: "localhost",

port: 3306,

user: "root",

password: "password",
database: "bamazon_DB"
});

connection.connect(function(err){
if (err) throw err;
console.log("connected as id " + connection.threadId);
afterConnection();
});


function(){
    inquirer.prompt({
        name: "IDask",
        type: "rawlist",
        message: "What is the ID of the product you're looking for?",
        choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }).then(function(res){
        inquirer.prompt({
            name: "quantityAsk",
            type: "input",
            message: "How much of that product would you like to buy?"
        }).then(function(res){
            var res = 

        })

    })
}





// function afterConnection() {
//     connection.query("SELECT * FROM products", function(err,res) {
//         if (err) throw err;
//         console.log(res);
//         connection.end();
//     });
// }