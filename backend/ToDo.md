# Requisitos Funcionais

### Usuários:

- [x] O usuário deve poder se cadastrar

## Categorias:

- [x] O usuario deve poder criar uma nova categoria;
- \*[ ] O usuário deve poder visualizar todas as categorias;
- [ ] O usuário deve poder atualizar uma categoria;
- [ ] O usuário deve poder excluir uma categoria;

### Produtos:

- [x] O usuário deve poder criar um novo produto;
- [x] O usuário deve poder visualizar todos os produtos;
- [x] O usuário deve poder visualizar um produto único;
- [x] O usuário deve poder atualizar um produto;
- [x] O usuário deve poder excluir um produto;
- \*[ ] O usuário deve poder visualizar o histórico de edição dos produtos;

### Lojas:

- [x] O usuário deve poder criar uma nova loja;
- [x] O usuário deve poder visualizar todas as lojas;
- [ ] O usuário deve poder visualizar uma loja única;
- [ ] O usuário deve poder excluir uma loja;
- [ ] O usuário deve poder atualizar uma loja;

### Estoques:

- [x] O usuário deve poder visualizar a quantidade de produtos disponíveis em cada loja
- \*[ ] O usuário deve poder atualizar a quantidade de produtos disponíveis em cada loja

### Vendas:

- [x] O usuário deve poder realizar uma venda;
- \*[ ] O usuário deve poder visualizar todas as vendas;
- [x] O usuário deve poder visualizar todas as vendas de uma loja específica;
- \*[ ] O usuário deve poder visualizar uma venda específica;

### Itens de Venda:

- [ ] O usuário deve poder visualizar todos os itens de uma venda específica;

# Requisitos de Negócio

## Categorias:

- \*[ ] O usuario não deve poder criar categories duplicadas com o mesmo nome

### Usuários:

- [x] O usuário não deve poder se cadastrar utilizando um e-mail já existente

### Produtos:

- [ ] Não deve ser possível excluir um produto que está vinculado a um estoque;
- [ ] Dois produtos não devem poder ter o mesmo nome;

### Lojas:

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
