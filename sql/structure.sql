-- Crear base de datos
CREATE DATABASE IF NOT EXISTS mor_db;
USE mor_db;

-- Tabla: user_categories
CREATE TABLE user_categories (
    user_categories_id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(25) NOT NULL
);

-- Tabla: users
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    user_categories_id INT NOT NULL,
    FOREIGN KEY (user_categories_id) REFERENCES user_categories(user_categories_id)
);

-- Tabla: product_categories
CREATE TABLE product_categories (
    product_categories_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tabla: product_colors
CREATE TABLE product_colors (
    product_colors_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tabla: products
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    price FLOAT NOT NULL,
    promotional_price FLOAT,
    stock INT DEFAULT 0,
    product_categories_id INT NOT NULL,
    product_colors_id INT NOT NULL,
    FOREIGN KEY (product_categories_id) REFERENCES product_categories(product_categories_id),
    FOREIGN KEY (product_colors_id) REFERENCES product_colors(product_colors_id)
);

-- Tabla: carts
CREATE TABLE carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    total_price FLOAT NOT NULL DEFAULT 0,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabla: cart_details
CREATE TABLE cart_details (
    detail_cart_id INT AUTO_INCREMENT PRIMARY KEY,
    quantity INT NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
