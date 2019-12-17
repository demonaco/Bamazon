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
    askQuestions();
});

function start(){
    askQuestions();
};

function askQuestions() {
    connection.query("SELECT * FROM products", function (err, results) {
console.log(results);
// console.log(mysql.query);
        if (err) throw err;
        var itemArray = [];
        var quantityArray = [];
        for (var i = 0; i < results.length; i++) {
            itemArray.push(results[i].item_ID)
            quantityArray.push(results[i].stock_quantity)
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
        ]).then(function(answer) {
           console.log("hello")
            for (var i = 0; i < results.length; i++) {

                if (results[i].item_ID === answer.IDask) {
                    
                 var itemChoice = results[i].item_ID;
                    console.log(itemChoice);
                }
                if (results[i].stock_quantity >= parseInt(answer.quantity)) {
                    console.log("Yes")
                }
            }
            if (quantityArray[i] >= parseInt(answer.quantity)) {
                console.log("yes");
                return ("Here is your item!");
            } else {
                return ("Sorry we are out of the item, please search again")
             start();
            }
        }
        )
        function updatedQuantity() {
            connect.query(
                "UPDATE products SET ? WHERE ?", function(err, res) {
                [
                    {
                        stock_quantity: -(stock_quantity)

                    },

                    {
                        product_name: (itemChoice)
                    }
                ]
            })
                function updateResult(err, res) {
                    console.log("res.affectedRows");
                }
            
        }
    }
    )
};


//askQuestion() function in a switch case statement to start inquiry over.