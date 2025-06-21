-- Usuarios Categorias
INSERT INTO user_categories (user_categories_id, category) VALUES (1, 'admin');
INSERT INTO user_categories (user_categories_id, category) VALUES (2, 'developer');
INSERT INTO user_categories (user_categories_id, category) VALUES (3, 'client');

-- Usuarios
INSERT INTO users (user_id, name, lastname, email, password, user_categories_id) VALUES (1, 'Feliciana', 'Cantón', 'jose-ignacio32@calatayud.com', 'P!1GShVl!ldD', 3);
INSERT INTO users (user_id, name, lastname, email, password, user_categories_id) VALUES (2, 'Cirino', 'Pinto', 'rebeca59@aroca-segovia.com', 'nXR&ej49^518', 1);
INSERT INTO users (user_id, name, lastname, email, password, user_categories_id) VALUES (3, 'Herminia', 'Lasa', 'bibianahierro@sevilla.org', 'Bi8mHH%vTf_O', 1);
INSERT INTO users (user_id, name, lastname, email, password, user_categories_id) VALUES (4, 'Emilio', 'Huerta', 'xpujol@gmail.com', 'h8++cWGW#6Pc', 3);
INSERT INTO users (user_id, name, lastname, email, password, user_categories_id) VALUES (5, 'Maricela', 'Lasa', 'marintrinidad@gmail.com', '0P1tqXZX*xRj', 2);

-- Productos Categorias
INSERT INTO product_categories (product_categories_id, name) VALUES (1, 'peluches');
INSERT INTO product_categories (product_categories_id, name) VALUES (2, 'juguetes');
INSERT INTO product_categories (product_categories_id, name) VALUES (3, 'munecas');

-- Productos Colores
INSERT INTO product_colors (product_colors_id, name) VALUES (1, 'marron');
INSERT INTO product_colors (product_colors_id, name) VALUES (2, 'beige');
INSERT INTO product_colors (product_colors_id, name) VALUES (3, 'rosado');
INSERT INTO product_colors (product_colors_id, name) VALUES (4, 'blanco');
-- Productos
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (1, 'Muneca 1', 'Ad eius dolore qui perspiciatis tempora assumenda.', 'muneca1.png', 14453.24, 11562.59, 5, 3, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (2, 'Peluche 2', 'Adipisci atque doloremque nobis natus quaerat praesentium in ipsum eius sit.', 'peluche2.png', 15581.52, 12465.22, 2, 1, 2);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (3, 'Muneca 3', 'Praesentium excepturi culpa vero excepturi at atque sed.', 'muneca3.png', 39626.71, 31701.37, 9, 3, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (4, 'Peluche 4', 'Eaque aliquam itaque commodi ullam aspernatur eos occaecati suscipit facere deleniti architecto optio.', 'peluche4.png', 11271.31, 9017.05, 2, 1, 4);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (5, 'Peluche 5', 'Voluptates sequi sint fugit iste rerum cum explicabo pariatur.', 'peluche5.png', 30214.21, 24171.37, 1, 1, 2);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (6, 'Muneca 6', 'Non cupiditate quas cum fugit voluptatibus.', 'muneca6.png', 17953.51, 14362.81, 9, 3, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (7, 'Juguete 7', 'Dolor eveniet quisquam animi reprehenderit rem illo architecto totam necessitatibus quaerat distinctio libero.', 'juguete7.png', 18817.62, 15054.1, 10, 2, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (8, 'Juguete 8', 'Corporis consequuntur quia molestiae quia incidunt nesciunt facere voluptatum consequuntur laudantium.', 'juguete8.png', 42377.22, 33901.78, 1, 2, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (9, 'Peluche 9', 'Similique corrupti cum perspiciatis nisi harum.', 'peluche9.png', 23610.02, 18888.02, 3, 1, 4);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (10, 'Peluche 10', 'Voluptatum minus voluptas similique accusamus quam placeat modi eaque odit beatae ipsa iste.', 'peluche10.png', 14088.41, 11270.73, 7, 1, 3);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (11, 'Peluche 11', 'Voluptas quis magni autem numquam sapiente magni dicta fugiat.', 'peluche11.png', 43899.77, 35119.82, 10, 1, 3);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (12, 'Juguete 12', 'Molestiae quod minus a eum accusantium ut soluta.', 'juguete12.png', 42285.13, 33828.1, 8, 2, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (13, 'Muneca 13', 'Dolores dolores necessitatibus aspernatur quasi repellendus voluptate minus commodi.', 'muneca13.png', 14993.05, 11994.44, 7, 3, 5);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (14, 'Peluche 14', 'Veniam cumque minus non vitae ut quidem porro quae id perferendis fuga.', 'peluche14.png', 43176.19, 34540.95, 10, 1, 3);
INSERT INTO products (product_id, name, description, image, price, promotional_price, stock, product_categories_id, product_colors_id) VALUES (15, 'Juguete 15', 'Iste dolorum aperiam accusantium mollitia nihil ab provident animi architecto adipisci ex.', 'juguete15.png', 33094.09, 26475.27, 2, 2, 5);

-- Carritos
INSERT INTO carts (cart_id, total_price, createAt, user_id) VALUES (1, 68287.48, '2025-06-21 15:44:27', 1);
INSERT INTO carts (cart_id, total_price, createAt, user_id) VALUES (2, 227648.42, '2025-06-21 15:44:27', 2);
INSERT INTO carts (cart_id, total_price, createAt, user_id) VALUES (3, 288058.78, '2025-06-21 15:44:27', 3);
INSERT INTO carts (cart_id, total_price, createAt, user_id) VALUES (4, 22541.46, '2025-06-21 15:44:27', 1);
INSERT INTO carts (cart_id, total_price, createAt, user_id) VALUES (5, 33828.1, '2025-06-21 15:44:27', 2);

-- Detalles de carritos
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (1, 2, '2025-06-21 15:44:27', 1, 1);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (2, 2, '2025-06-21 15:44:27', 3, 2);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (3, 1, '2025-06-21 15:44:27', 3, 3);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (4, 2, '2025-06-21 15:44:27', 3, 4);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (5, 3, '2025-06-21 15:44:27', 2, 5);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (6, 3, '2025-06-21 15:44:27', 3, 6);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (7, 3, '2025-06-21 15:44:27', 1, 7);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (8, 3, '2025-06-21 15:44:27', 2, 8);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (9, 1, '2025-06-21 15:44:27', 2, 9);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (10, 2, '2025-06-21 15:44:27', 4, 10);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (11, 3, '2025-06-21 15:44:27', 3, 11);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (12, 1, '2025-06-21 15:44:27', 5, 12);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (13, 1, '2025-06-21 15:44:27', 3, 13);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (14, 1, '2025-06-21 15:44:27', 2, 14);
INSERT INTO cart_details (detail_cart_id, quantity, createAt, cart_id, product_id) VALUES (15, 2, '2025-06-21 15:44:27', 3, 15);