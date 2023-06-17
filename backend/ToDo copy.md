# Requisitos Funcionais

### User:

- [x] Create User
<!--
- [ ] List Users
- [ ] Get User
- [ ] Update User
- [ ] Delete User
      -->

### Category:

- [x] Create Category
- [x] List Categories
<!--
- [ ] Get Category
      -->
- [x] Update Category
- [x] Delete Category

### Product:

- [x] Create Product
- [x] List Products
- [x] Get Product
- [x] Update Product
- [x] Delete Product

### Product Log:

- [ ] Create Product Log
- [ ] List Product Logs
- \*[ ] List Product Logs By Product

### Store:

- [x] Create Store
- [x] List Stores
- [ ] Get Store
- [ ] Update Store
- [ ] Delete Store

### Inventory:

- [x] Create Inventory
- [x] List Inventories
- [x] List Inventories By Store
- [ ] Get Inventory
- \*[ ] Update Inventory
- [ ] Delete Inventory

### Inventory Transaction

- [ ] Create Inventory
- [ ] List Inventories
- [ ] List Inventories By Store
- [ ] Get Inventory
- \*[ ] Update Inventory
- [ ] Delete Inventory

- \*[ ] O usuário deve poder atualizar a quantidade de produtos disponíveis em cada loja. Em termos técnicos: deve ser possível atualizar inventários;
- \*[ ] O usuário deve poder visualizar o histórico de transações nos estoques
- \*[ ] O usuário deve poder visualizar a quantidade de itens vendidos semanalmente no estoque de cada loja

### Vendas:

- [x] O usuário deve poder realizar uma venda;
- \*[ ] O usuário deve poder visualizar todas as vendas;
- [x] O usuário deve poder visualizar todas as vendas de uma loja específica;
- [ ] O usuário deve poder visualizar uma venda específica;

### Itens de Venda:

- [ ] O usuário deve poder visualizar todos os itens de uma venda específica;

# Requisitos de Negócio

### Categorias:

- [x] Não deve ser possível cadastrar duas categorias com o mesmo nome

### Usuários:

- [x] Não deve ser possível cadastrar dois usuários com o mesmo email

### Produtos:

- [x] Não deve ser possível cadastrar dois produtos com o mesmo nome
- [ ] Não deve ser possível excluir um produto que esteja vinculado a um estoque;

### Lojas:

- [ ] Não deve ser possível cadastrar duas lojas com o mesmo nome;
- [ ] Não deve ser possível excluir uma loja que esteja vinculada a uma venda;
- [ ] Não deve ser possível excluir uma loja cujo estoque esteja vinculado a uma transação de estoque;
- [ ] Duas lojas não devem poder ter o mesmo nome;

### Estoques:

- [x] Ao criar uma nova loja, seu estoque deve ser criado automaticamente com quantidade zero para todos os produtos;
- [x] Ao criar um produto, deve se incluí-lo em todos os estoques com quantidade = zero;
- [ ] Quando uma loja é excluída, seu estoque é excluído junto;
- \*[ ] Uma transação do estoque deve ter tipo 'entrada' ou 'saída'
- [ ] Transações de saída devem ser vinculadas a uma venda ou conter um motivo;
- [ ] Transações de entrada devem ser vinculadas a um fornecedor ou conter um motivo;

### Vendas:

- [ ]

# Requisitos Não Funcionais

- [x] A senha do usuário precisa ser criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco de dados PostgreSQL;
