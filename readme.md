
# Say Hello! 👋

'Diga olá' é uma aplicação simples desenvolvida com Node com o propósito de aprendizado pessoal.
Com ela pude descobrir como uma aplicação é posta em produção. 

A aplicação em si consiste apenas numa caixa de texto onde podemos adcionar nossa saudação. Esta saudação será registrada num banco de dados e posteriormente exibida com todos os outros registros no background da pagina.
## Stack utilizada

**Front-end:** HTML, CSS, Javascript

**Back-end:** Node, Express, MongoDB




## Rodando localmente

Observação: será necessario a utilização de um cluster no Mongo Atlas.

Clone o repositório

```bash
  git clone https://github.com/Nu7nes/say-hello
```

Entre no diretório do projeto

```bash
  cd say-hello
```

Instale as dependências

```bash
  npm install
```

Crie uma arquivo .env e adicione as variáveis

```bash
  PORT = defina a porta que o Node irá usar
  MONGO_CONNECTION_URL = adicione o link de conexão do Mongo com suas credenciais
```

Inicie o servidor

```bash
  npm run start
```


## Documentação da API

#### Retorna todos os saudações

```http
  GET /api/salutations
```

#### Adiciona uma saudação

```http
  PUSH /api/new
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `message`      | `string` | **Obrigatório**. A mensagem de saudação |


## FAQ

#### A aplicação esta online?

Não, infelizmente. Apesar do deploy ter sido bem sucedido o plano do [Render](https://render.com/) utilizada (free) não garante instâncias em periodo de inatividade. Por isso não é possivel vê-lo online.

#### O banco de dados está online?

Sim, porém a inatividade da página torna este inacessivel, pois para tal conexão depende-se de variaveis de ambiente.




## Aprendizados

Neste simples projeto tive a oportunidade de configurar um ambiente com Node e MongoDB, fazer deploy em uma plataforma Cloud e entender mais sobre as variáveis de ambiente.