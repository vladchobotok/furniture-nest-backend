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

INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('1', 'Horizonte', '25000', 'Minotti Horizonte', 'A floating island with square lines that marks the horizon of the living space.', '3','{"5867afe4-a3e5-4b1c-b9cf-60216916c553.jpg", "ee970867-28a3-43ab-8f65-8077bb8f0631.jpg", "258a4c23-3982-406a-9e8b-e10e590577a1.jpg"}', '1', '1');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('2', 'Twiggy', '30000', 'Minotti Twiggy', 'A new aggregative language is born: free from schemes and preconfigurations, capable of adapting to needs in continuous evolution.', '5','{"c5da9241-15ea-43e0-a394-6ac567b5bda4.jpg", "37c10d54-da17-4036-aaf4-912ce87620a0.jpg"}', '1', '2');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('3', 'Ліжко Рамона', '8999', 'Ліжко Рамона', 'Сучасна стильна спальня', '4','{"7981d306-0dc3-4af4-b14d-92a0891e3eb8.jpg"}', '2', '3');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('4', 'Ліжко Честер', '7999', 'Ліжко Честер', 'Сучасна стильна спальня', '5','{"983556ef-c2f3-49ea-bb0c-7d67d3dd5ec9.jpg"}', '2', '4');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('5', 'Ліжко Венеція люкс', '8999', 'Ліжко Венеція люкс', 'Сучасна стильна спальня', '6','{"e86149ee-e4a8-4dcd-96af-ecefdbacd6b6.jpg"}', '2', '4');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('6', 'Ліжко Імперія', '8999', 'Ліжко Імперія', 'Сучасна стильна спальня', '7','{"2f49f1c1-f75e-4677-8ca8-2e0a043ae345.jpg"}', '2', '3');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('7', 'Ліжко Адель', '8999', 'Ліжко Адель', 'Сучасна стильна спальня', '8','{"60bdb7ac-8c96-4975-b4c4-9f0b45ebf446.jpg"}', '2', '1');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('8', 'Ліжко Атлант', '7999', 'Ліжко Атлант', 'Сучасна стильна спальня', '9','{"05635611-c03a-4b10-862b-cb427ba031f2.jpg"}', '2', '2');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('9', 'Домашнє крісло', '11800', 'Домашнє крісло з неповторним сучасним дизайном', 'Домашнє крісло з неповторним сучасним дизайном', '6','{"bd3098ca-5f20-4cb9-850f-a214efa48231.jpg",  "63835c64-7cd4-442b-bd7b-1e31c49b27b7.jpg"}', '3', '3');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('10', 'Комод Глорія', '16712', 'Комод Глорія 3-дверний', 'Комод Глорія 3-дверний', '3','{"93a4db77-788a-4f76-aba1-14dfd1ccfb00.jpg"}', '4', '5');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('11', 'Шафа для одягу', '6340', 'Шафа для одягу', 'Шафа для одягу', '6','{"a74e2de1-99fa-4ef6-9df2-84f33ac5a585.jpg"}', '5', '3');
INSERT INTO "products"("id", "name", "price", "title", "description", "inStock", "images", "typeId", "brandId") VALUES('12', 'Кухня модульна', '9000', 'Кухня модульна', 'Кухня модульна', '1','{"9b998c3b-4058-49a4-ad39-2f407b89e22e.jpg", "ecc9fe21-0f9c-440f-b6cf-4eff64c2cc02.jpg"}', '6', '2');

SELECT setval(pg_get_serial_sequence('roles', 'id'), coalesce(max(id)+1, 1), 'false') FROM roles;
SELECT setval(pg_get_serial_sequence('users', 'id'), coalesce(max(id)+1, 1), 'false') FROM users;
SELECT setval(pg_get_serial_sequence('users_roles', 'id'), coalesce(max(id)+1, 1), 'false') FROM users_roles;
SELECT setval(pg_get_serial_sequence('brands', 'id'), coalesce(max(id)+1, 1), 'false') FROM brands;
SELECT setval(pg_get_serial_sequence('types', 'id'), coalesce(max(id)+1, 1), 'false') FROM types;
SELECT setval(pg_get_serial_sequence('carts', 'id'), coalesce(max(id)+1, 1), 'false') FROM carts;
SELECT setval(pg_get_serial_sequence('products', 'id'), coalesce(max(id)+1, 1), 'false') FROM products;
SELECT setval(pg_get_serial_sequence('carts_products', 'id'), coalesce(max(id)+1, 1), 'false') FROM carts_products;