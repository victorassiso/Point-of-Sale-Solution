# Requisitos Funcionais

### Usuários:

- [x] O usuário deve poder se cadastrar

### Produtos:

- [ ] O usuário deve poder criar um novo produto;
- [ ] O usuário deve poder visualizar todos os produtos;
- [ ] O usuário deve poder visualizar um produto único;
- [ ] O usuário deve poder atualizar um produto;
- [ ] O usuário deve poder excluir um produto;
- [ ] O usuário deve poder visualizar o histórico de edição dos produtos;

### Lojas:

- [ ] O usuário deve poder criar uma nova loja;
- [ ] O usuário deve poder visualizar todas as lojas;
- [ ] O usuário deve poder visualizar uma loja única;
- [ ] O usuário deve poder atualizar lojas;
- [ ] O usuário deve poder excluir uma loja;

### Estoques:

- [ ] O usuário deve poder adicionar produtos ao estoque das lojas;
- [ ] O usuário deve poder visualizar todos os estoques;
- [ ] O usuário deve poder visualizar um estoque único;
- [ ] O usuário deve poder remover produtos do estoque das lojas;
- [ ] O usuário deve poder visualizar o histórico de transações do estoque das lojas;

### Vendas:

- [ ] O usuário deve poder realizar uma venda;
- [ ] O usuário deve poder visualizar todas as vendas;
- [ ] O usuário deve poder visualizar uma venda específica;

### Itens de Venda:

- [ ] O usuário deve poder visualizar todos os itens de uma venda específica;

# Requisitos de Negócio

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

- [ ] Ao criar uma nova loja, seu estoque deve ser criado automaticamente;
- [ ] Ao criar um produto, deve se incluí-lo em todos os estoques com quantidade = zero
- [ ] Ao criar um estoque, deve se incluir todos os produtos com quantidade = zero;
- [ ] Quando uma loja é excluída, seu estoque é excluído junto;
- [ ] Uma transação do estoque deve ter tipo 'entrada' ou 'saída'
- [ ] Transações de saída devem ser vinculadas a uma venda ou conter um motivo
- [ ] Transações de entrada devem ser vinculadas a um fornecedor ou conter um motivo

### Vendas:

- [ ]

# Requisitos Não Funcionais

- [ ]
