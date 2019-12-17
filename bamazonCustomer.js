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


function askQuestions() {
    connection.query("SELECT item_ID FROM products", function (err, results) {

        if (err) throw err;
        var itemArray = [];
        for (var i = 0; i < results.length; i++) {
            itemArray.push(results[i].item_ID)
        }
        inquirer.prompt([
            {
                name: "IDask",
                type: "rawlist",
                message: "What is the ID of the product you're looking for?",
                choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            },
            {
                name: "quantity",
                type: "input",
                message: "How much of that item would you like?"

            }
        ]).then(function (answer) {
            var itemChoice;
            for (var = i; i < results.length; i++) {
                if (results[i].item_ID === answer.IDask) {
                    itemChoice = results[i].item_ID;
                }
}
        if (itemChoice.stock_quantity >= parseInt(answer.quantity)) {
            return ("Here is your item!");
        } else {
            return ("Sorry we are out of the item, please search again")
        }
    }
        )
}
    )
};


//askQuestion() function in a switch case statement to start inquiry over.