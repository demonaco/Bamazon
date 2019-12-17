DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;
 
CREATE TABLE products (
item_ID INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(6,2) NOT NULL,
stock_quantity INT(30) NOT NULL,
PRIMARY KEY (item_ID)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("salad mix", "food", "3.99", "45");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("socks", "clothing", "4.99", "62");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cat nip", "pet supplies", "1.99", "200");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "food", "5.99", "78");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 11", "electronics", "1100", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kit Kat", "food", "1.99", "800");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fishing pole", "outdoors", "49.99", "98");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grand Theft Auto", "Electronics", "49.99", "78");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike running shoes", "clothing", "79.99", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tent", "outdoors", "19.99", "52");