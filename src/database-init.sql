INSERT INTO roles("id", "value") VALUES('1','USER'), ('2','ADMIN');

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