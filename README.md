# Restoque - First coding dojo puzzle

---

## Inicialização

Coloque a chave de serviço do firebase em functions/__tests__/helpers/service-account-file.json

```
$ npm install
```


## Testes

```
$ npm run test
```

## Puzzle

Este é um micro serviço responsável pelos produtos. Especialise essa API para responder requisições de preços de produtos.
Receba um array com códigos de produtos, consulte os produtos em uma base do firestore e retornar um array de objetos com o código do produto e seu preços.
Impemente os métodos ProductRepository.getByCode, ProductService.getPrices e ProductController.getPrices de forma que todos os testes de integração sejam concluídos com sucesso.

### Exemplo de entrada

```
['0003.00.11', '0005.55.22', '0002.01.00']
```

### Exemplo de retorno válido

```
[
      { code: '0003.00.11', price: 200 },
      { code: '0005.55.22', price: 250 },
      { code: '0002.01.00', price: 120 },
]
```
