var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startQuery();
});

function startQuery(){
connection.query("SELECT * FROM products", function (err, res) {
for (var i = 0; i < res.length; i ++) {
console.log(res[i].item_ID + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
} askQuestions();
console.log("--------------------------------------------------")
}) 
}

function askQuestions() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
       
        var itemArray = [];
        var quantityArray = [];
        var priceArray = [];
        for (var i = 0; i < results.length; i++) {
            itemArray.push(results[i].item_ID)
            quantityArray.push(results[i].stock_quantity)
            priceArray.push(results[i].price)
            
            
        }
        inquirer.prompt([
            {
                name: "IDask",
                type: "rawlist",
                message: "What is the ID of the product you're looking for?",
                choices: itemArray
            },
            {
                name: "quantity",
                type: "input",
                message: "How much of that item would you like?",

            }
        ]).then(function (answer) { //may want to try adding an object here to give stock quantity a key and value
           var selectedItem = itemArray[answer.IDask-1]
            var selectedQuantity = answer.quantity
            var queryQuantity = quantityArray[answer.IDask-1]
            var selectedPrice = priceArray[answer.IDask-1]
            for (var i = 0; i < results.length; i++) {
                if (selectedItem === results[i].item_ID) {
                    var itemChoice = results[i].item_ID;
                    if (queryQuantity >= parseInt(answer.quantity)) {
                        console.log("Here is your item! That will be " + (selectedQuantity*selectedPrice) + " please!")
                        var X = queryQuantity - parseInt(selectedQuantity)
                        updateProduct(itemChoice, X)
                    } else {
                        console.log("Sorry we are out of the item, please search again")
                        
  
                }
                } 
              
        }
        })
        })
}

function updateProduct(itemChoice, X){
    //query mysql to update
    var query = connection.query(
    "UPDATE products SET ? WHERE ?",[
    {
        stock_quantity: X
    },
    {
        item_ID: itemChoice
    }
], 
function(err, res) {
}
)
readResult(); 
}

function readResult(){
    connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i ++) {
    console.log(res[i].item_ID + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    } askQuestions();
    console.log("--------------------------------------------------")
    }) 
    }