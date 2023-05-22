INSERT INTO "roles"("id", "value") VALUES('1','USER'), ('2','ADMIN');

INSERT INTO "users"("id", "name", "surname", "email", "password") VALUES('1', 'Ivan', 'Ivanov','admin@gmail.com','$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2');
INSERT INTO "users"("id", "name", "surname", "email", "password") VALUES('2', 'Petro', 'Petrov','user1@gmail.com','$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2');
INSERT INTO "users"("id", "name", "surname", "email", "password") VALUES('3', 'Anton', 'Antonov', 'user2@gmail.com','$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2');
INSERT INTO "users"("id", "name", "surname", "email", "password") VALUES('4', 'Mariya', 'Makarova', 'user3@gmail.com','$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2');

INSERT INTO "users_roles"("id", "roleId", "userId") VALUES('1', '1', '1');
INSERT INTO "users_roles"("id", "roleId", "userId") VALUES('2', '2', '1');
INSERT INTO "users_roles"("id", "roleId", "userId") VALUES('3', '1', '2');
INSERT INTO "users_roles"("id", "roleId", "userId") VALUES('4', '1', '3');
INSERT INTO "users_roles"("id", "roleId", "userId") VALUES('5', '1', '4');

INSERT INTO "brands"("id", "brandName") VALUES('1', 'Vikom');
INSERT INTO "brands"("id", "brandName") VALUES('2', 'Yudin');
INSERT INTO "brands"("id", "brandName") VALUES('3', 'Novelty');
INSERT INTO "brands"("id", "brandName") VALUES('4', 'EcoDiv');
INSERT INTO "brands"("id", "brandName") VALUES('5', 'HTO');

INSERT INTO "types"("id", "typeName") VALUES('1', 'Дивани');
INSERT INTO "types"("id", "typeName") VALUES('2', 'Ліжка');
INSERT INTO "types"("id", "typeName") VALUES('3', 'Крісла');
INSERT INTO "types"("id", "typeName") VALUES('4', 'Комоди');
INSERT INTO "types"("id", "typeName") VALUES('5', 'Шафи');
INSERT INTO "types"("id", "typeName") VALUES('6', 'Кухні');

INSERT INTO "carts"("id", "userId") VALUES('1', '1');
INSERT INTO "carts"("id", "userId") VALUES('2', '2');
INSERT INTO "carts"("id", "userId") VALUES('3', '3');
INSERT INTO "carts"("id", "userId") VALUES('4', '4');

INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('1', 'Bed Ornella', '4000', 'Title', 'Desc', '50','{"f9580440-f6a1-4571-8cb1-265fc5d771d9.jpg", "55187c8a-7c43-49b3-9b9e-47f31167a73d.jpg"}', '1', '4');

SELECT setval(pg_get_serial_sequence('roles', 'id'), coalesce(max(id)+1, 1), 'false') FROM roles;
SELECT setval(pg_get_serial_sequence('users', 'id'), coalesce(max(id)+1, 1), 'false') FROM users;
SELECT setval(pg_get_serial_sequence('users_roles', 'id'), coalesce(max(id)+1, 1), 'false') FROM users_roles;
SELECT setval(pg_get_serial_sequence('brands', 'id'), coalesce(max(id)+1, 1), 'false') FROM brands;
SELECT setval(pg_get_serial_sequence('types', 'id'), coalesce(max(id)+1, 1), 'false') FROM types;
SELECT setval(pg_get_serial_sequence('carts', 'id'), coalesce(max(id)+1, 1), 'false') FROM carts;
SELECT setval(pg_get_serial_sequence('products', 'id'), coalesce(max(id)+1, 1), 'false') FROM products;
SELECT setval(pg_get_serial_sequence('carts_products', 'id'), coalesce(max(id)+1, 1), 'false') FROM carts_products;