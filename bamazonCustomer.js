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
        ]).then(function (answer) { //may want to try adding an object here to give stock quantity a key and value
            console.log("hello")
            for (var i = 0; i < results.length; i++) {

                if (results[i].item_ID === answer.IDask) {

                    var itemChoice = answer.IDask;

                    console.log(itemChoice);

                } if (itemChoice >= parseInt(answer.quantity)) {
                    console.log("Yes")
                    return ("Here is your item!");
                } else {
                    return ("Sorry we are out of the item, please search again")
                    
                }
                start();
            }
        }) 
        })
        }
        
//toString?
  

//                 if (quantityArray[i] >= parseInt(answer.quantity)) {
//                     console.log("Yes")
//                     return ("Here is your item!");
//                  } else {
//                 return ("Sorry we are out of the item, please search again")
//              start();
//             }
//         }
//     } 
//         function updatedQuantity() {
//             connect.query(
//                 "UPDATE products SET ? WHERE ?", function(err, res) {
//                 [
//                     {
//                         stock_quantity: -(stock_quantity)

//                     },

//                     {
//                         product_name: (itemChoice)
//                     }
//                 ]
//             })
//                 function updateResult(err, res) {
//                     console.log("res.affectedRows");
//                 }

//         }
//     }
//     )
// };


//askQuestion() function in a switch case statement to start inquiry over.


// }.then(function SelectQuantity() {
                //     var requestedQuantity = answer.quantity;

                //     var query = "SELECT stock_quantity FROM products WHERE position ?";
                //     connection.query(query, [answer.quantity], function (err, results) {
                //         for (var i = 0; i < results.length; i++) {
                //             console.log(results[i])
                //         }
                //     })
                // });