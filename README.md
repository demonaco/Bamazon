# Bamazon
Using MySQL to create inventory of items to sell to customers.

## Technologies used:
Visual Studio Code, Inquirer Node package, mysql Node package, mySQL connection and mySQL workbench, and Node.js.

## Summary:
This assignment was meant to put into practice what we had learned regarding databases and in particular mySQL. I created a department store, called "Bamazon", which has products for sale. I created a table for this product table and put in 10 rows of data, which described the product's ID, name, the department it's located in, it's price, and how much of the product is in stock.

Using the Node package "Inquirer" the application asks users which ID of product they are looking for as well as the quantity amount. These values are then stored and a comparison is made on the backend to see if there is enough stock quantity to fulfill the order. If there is, the user will be informed that their transaction was a success and the product's stock quantity will be updated via query to reflect the transaction.

## What I learned: 
Put simply, this entire assignment was a learning experience. I had my first real experience with creating and managing a database.

Here are some things I learned:

- Commonly used query syntax for updating information tables.
- Use response data and place it into an array variable that we can control and use in development of an application.
- Reminded of how much information we can actually obtain and use from arrays and objects of queried searches.
- How to query mySQL and display the data in terminal.
- Further practice with promises (in the form of the .then() method).
- Updating a specific quanitity in our database based off of user input

## Steps:
1. I watched videos from previous lectures to reinforce learnings of mySQL. I also checked out mySQL tutorials on YouTube.
2. Looked at class assignments and code drills to see how to properly structure and code the assignment.
3. Studied and used the "Greatbay" auction assignment as a template for logic and flow of application.
4. Met with my tutor to discuss pain-point in assignment and worked to find solution for it.
5. used CRUD principles - implemented an update function as well as a read function once user input had been collected.

## Sources:
My tutor Ryan, class assignments/code drill solutions, Instructor Jerome for some light mySQL fixing.


## Screenshots and .gif of working product:

![Screenshot of working product](https://github.com/demonaco/Bamazon/blob/master/images/example.gif)

![Choosing an item ID and quantity](https://github.com/demonaco/Bamazon/blob/master/images/Screen%20Shot%202019-12-18%20at%209.35.31%20PM.png)

![Hilighting the total cost of transaction to user](https://github.com/demonaco/Bamazon/blob/master/images/Screen%20Shot%202019-12-18%20at%209.35.54%20PM.png)

![After searching for an item and amount, the stock quantity will decrease](https://github.com/demonaco/Bamazon/blob/master/images/Screen%20Shot%202019-12-18%20at%209.36.18%20PM.png)
