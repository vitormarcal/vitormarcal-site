---
id: 'como-mockar-responses-do-retrofit'
name: 'como-mockar-responses-do-retrofit'
title: Como mockar responses do retrofit
author: Vítor Marçal
description: Uma simples maneira de mockar reponses do Retrofit e continuar com seus testes unitários
created_at: 24 de Agosto de  2019
tags:
  - retrofit
  - mock
  - unit test
---

Retrofit é uma lib muito poderosa qu facilita muito a vida ao fazer integrações com web services. Quando comecei a ultilizá-la, logo me deparei com um problema: como continuar meus testes unitários mockando as respostas do retrofit? É isso que veremos nesse artigo.

Imagina que na sua aplicação existe uma integração a uma Api chamada StoreApi. Nessa hipotética API, você consegue listar produtos e acessar o detalhes dele. Por exemplo, ao consultar a uri `products/`, é retornado uma lista de produtos; ao consultar `products/{id}` é retornado o detalhe de determinado produto.
Pois bem, na nossa aplicação, temos uma funcionalidade que em determinado ponto busca um produto na  API passando o `id` do product, para apenas imprimir as informações dele. Para nosso exemplo, não importa o que metódos como `isSuccessful` ou `print` faz:

`class ProductService`
`
// package, imports e declaração da classe omitidos
private final StoreApi storeApi;

public ProductService(StoreApi storeApi) {
      this.storeApi = storeApi;
}
 
public void printProductOf(Long id) {
       Optional<Product> optionalProduct = findInStoreApi(id);
       if (optionalProduct.isPreset()) {
          print(optionalProduct.get());
       } else {
          throw new RuntimeException("Produto não existe");
       }
 }

private Optional<Product> findInStoreApi(Long id) {
      final Response<Product> response = this.storeApi.getDetail(id).execute();
      if (isSuccessful(response)) {
          return Optional.ofNullable(response.body());
      } else {
          log.warn("O corpo da resposta veio vazia ao chamar products/{}", id);
          return Optional.empty();
      }
 }
`

Você deseja criar um teste unitário para o método `printProductOf` mas por algum motivo você não pode fazer uma chamada real a StoreApi e talvez você nem queira realmente fazer essa requisição real: vamos supor que cada requisição gere um custo para você!
Podemos continuar nossos testes simplesmente mockando, `StoreApi`:
