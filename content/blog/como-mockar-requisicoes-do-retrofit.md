---
id: 'como-mockar-requisicoes-do-retrofit'
name: 'como-mockar-requisicoes-do-retrofit'
title: Como mockar requisicoes do retrofit
author: Vítor Marçal
description: Uma simples maneira de mockar requisições ultilizando Retrofit, OkHttp e continuar com seus testes unitários.
created_at: 27 de Agosto de  2019
tags:
  - retrofit
  - mock
  - unit test
---

Retrofit é uma biblioteca muito poderosa que facilita muito a vida ao fazer integrações com web services. Quando a conheci, logo me deparei com um problema: como continuar meus testes unitários mockando as respostas do retrofit? É isso que veremos nesse artigo.

Imagine que em sua aplicação existe uma integração a uma Api chamada StoreApi. Nessa hipotética API, você consegue listar produtos e acessar seus detalhes. Por exemplo, ao consultar a uri `products/`, é retornado uma lista de produtos; ao fazer uma requisição a  `products/{id}` o retorno é o detalhe de determinado produto.
Prosseguindo, em nossa aplicação, temos uma funcionalidade que em determinado ponto busca um produto na  API passando o `id` do recurso, para logo após imprimir suas informações. Para nosso exemplo, não importa o que metódos como `isSuccessful` ou `print` faz:

`class ProductService`
```
// package, imports omitidos
class ProductService {
    private final StoreApi storeApi;
    private static final Logger log = Logger.getLogger(ProductService.class.getName());

    ProductService(StoreApi storeApi) {
        this.storeApi = storeApi;
    }

    void printProductOfId(Long id) {
        Optional<Product> optionalProduct = findInStoreApi(id);
        if (optionalProduct.isPresent()) {
            print(optionalProduct.get());
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    Optional<Product> findInStoreApi(Long id) {
        final Response<Product> response;
        try {
            response = this.storeApi.getDetail(id).execute();
            if (response.isSuccessful()) {
                return Optional.ofNullable(response.body());
            } else {
                log.log(Level.WARNING, "The response body is empty with id " + id);
                return Optional.empty();
            }
        } catch (IOException e) {
            log.log(Level.WARNING, "Error with id " + id, e);
            return Optional.empty();
        }

    }

    private void print(Product product) {
        System.out.println(product);
    }
}

```

Você deseja criar um teste unitário para o método `printProductOf`, mas por algum motivo você não pode fazer uma chamada real a StoreApi e talvez você nem queira realmente disparar uma requisição verdadeira: vamos supor que cada requisição gere um custo para você!
Podemos continuar nossos testes simplesmente mockando a `StoreApi` com um `interceptor`:

`class RestClientMock`

```
// package, imports da classe omitidos
class RestClientMock {
    private static StoreApi storeApi;

    static StoreApi getClient() {
        if (storeApi == null) {
            final OkHttpClient client = new OkHttpClient.Builder()
                    .addInterceptor(new FakeInterceptor())
                    .build();

            final Retrofit retrofit = new Retrofit.Builder()
                    .addConverterFactory(GsonConverterFactory.create())
                    .baseUrl("https://wwww.storemock-api.com.br")
                    .client(client)
                    .build();

            storeApi = retrofit.create(StoreApi.class);
        }
        return storeApi;
    }
}
```

Perceba que adicionamos um novo `interceptor` chamado `FakeInterceptor`. Ele intercepta a requisição e devolve uma resposta mockada, assim como o nome da classe diz:

`class FakeInterceptor `

```
// package, imports omitidos
public class FakeInterceptor implements Interceptor {
    private static final String productDetail = "{\"id\":1,\"name\":\"Book\"}";


    @Override
    public Response intercept(Chain chain) {
        Response response;
        String responseString = "{}";
        final List<String> paths = chain.request().url().pathSegments();

        Response.Builder builder = new Response.Builder();
        builder.code(404);
        if (paths != null && !paths.isEmpty()) {
            String lastPath = paths.get(paths.size() - 1);
            if (lastPath.equals("1")) {
                builder.code(200);
                responseString = productDetail;
            }
        }

        response = builder
                .message(responseString)
                .request(chain.request())
                .protocol(Protocol.HTTP_1_0)
                .body(ResponseBody.create(MediaType.parse("application/json"), responseString.getBytes()))
                .addHeader("content-type", "application/json")
                .build();

        return response;
    }
}
```

Agora só precisamos utilizar o cliente mockado em nossos testes unitários:

`class ProductServiceTest`
```
// package, imports omitidos
public class ProductServiceTest {
    private static final StoreApi storeApi = RestClientMock.getClient();

    @Test
    public void printProductOfId() {
        ProductService productService = new ProductService(storeApi);
        productService.printProductOfId(1L);
        // some test to validate the print
    }

    @Test(expected = RuntimeException.class)
    public void giveProductNotFound_ThenThrowRuntimeException() {
        ProductService productService = new ProductService(storeApi);
        productService.printProductOfId(2L);
    }

    @Test
    public void productIsPresent() {
        ProductService productService = new ProductService(storeApi);
        Optional<Product> optionalProduct = productService.findInStoreApi(1L);
        assertTrue(optionalProduct.isPresent());
    }

    @Test
    public void productIsNotPresent() {
        ProductService productService = new ProductService(storeApi);
        Optional<Product> optionalProduct = productService.findInStoreApi(2L);
        assertFalse(optionalProduct.isPresent());
    }
}
```

A implementação completa deste exemplo pode ser <a href="https://github.com/vitormarcal/retrofit-unit-test-tutorial" title="Código completo do artigo" target="_blank" rel="noopener noreferrer">encontrada neste repositório do GitHub</a>.
