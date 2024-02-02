# MyWallet

Essa API é responsável por fornecer recursos para uma carteira digital de controle de gastos.

Com essa API é possível:

- Criar uma conta;
- Entrar na conta;
- Registrar seus ganhos;
- Registrar seus gastos;
- Adicionar uma descrição aos gastos ou ganhos;
- Visualizar o histórico de movimentações;

Confira também o repositório do frontend dessa aplicação: <https://github.com/Nicoladla/MyWallet_Front-end>.

---

## Confira como usar os recursos da API:

#### 1- Para criar uma conta

- Método: **`POST`**;
- Rota: **`/sign-up`**;

* Você deverá enviar pelo **body** da requisição os seguintes dados:

  ```javascript
  {
    name: "Fulano",
    email: "fulano123@gmail.com",
    password: "ful4ninh0_Milgr4l"
  }
  ```

  - **Observações**:

    - **name** deve ser uma string com tamanho maior que 2;
    - **email** deve estar no formato correto para um email;
    - **password** deverá ser uma string com tamanho maior que 5;
    - **Todos** os campos são obrigatórios.

- Status Code:

  - Ocorre quando dá tudo certo:

    ```
    status: 201
    ```

  - Ocorre quando algum campo está preenchido incorretamente:

    ```
    status: 422
    message: [...]
    ```

  - Ocorre quando o email a ser cadastrado já existe:

    ```
    status: 409,
    message: Email já cadastrado!
    ```

  - Ocorre quando acontece um erro no servidor:

    ```
    status: 500
    ```

    - **OBS**: Esse erro pode se repetir nas próximas rotas.

#### 2- Para entrar na conta:

- Método: **`POST`**;
- Rota: **`/sign-in`**;

* Envie pelo **body** da requisição os seguintes dados:

  ```javascript
  {
    email: "fulano123@gmail.com",
    password: "ful4ninh0_Milgr4l"
  }
  ```

- Status Code:

  - Ocorre quando dá tudo certo:

    ```
    status: 200,
    ```

  - Ocorre quando o email ou a senha estão incorretos, ou os campos estão preenchidos em um formato incorreto:

    ```
    status: 422,
    message: Email ou senha incorreto!,
    message: [...]
    ```

#### Token:

- Ao entrar na conta, você receberá um **token**. Esse token será necessário para você autenticar "quem você é" em rotas privadas. Veja o formato do token:

  ```
  e4b5abbd-abf9-4589-baa9-1dd514c25983
  ```

- Em todas as rotas que necessite enviar o token, esse erro estará presente:

  ```
  status: 401
  ```

  - **OBS:** Ocorre quando o token não é enviado ou não existe no banco de dados, ou o usuário dono do token não existe mais:

- Quando necessário, o token deve ser enviado, pelo `header`, no seguinte formato:

  ```javascript
  {
    headers: {
      Authorization: `Bearer e4b5abbd-abf9...`,
    }
  }
  ```

#### 3- Para sair da conta:

- Método: **`DELETE`**;
- Rota: **`/sign-out`**;

* Você deverá enviar pelo `header` da requisição o token que você recebeu ao entrar na conta.

- Status Code:

  - Ocorre quando dá tudo certo:

    ```
    status: 200
    ```

#### 4- Para adicionar uma saída ou entrada de dinheiro:

- Método: **`POST`**;
- Rota: **`/transaction`**;

* Você deve enviar pelo **header** da requisição o **token** do usuário.

* Você deve enviar pelo **body** os seguintes dados:

  ```javascript
  {
    value: 10000,
    description: "Salário",
    type: "deposit"
  }
  ```
  - **Observações**:

    - **value** deve ser um número maior que 0;
    - **description** deve ser uma string não vazia e maior que 2;
    - **type** só pode ser a string `"deposit"` ou `"withdraw"`;
    - **Todos** os campos são obrigatórios.

- Status Code:

  - Ocorre quando dá tudo certo:

    ```
      status: 201
    ```

#### 5- Para receber a lista de transações:

- Método: **`GET`**;
- Rota: **`/transaction`**;

* Você deve enviar pelo **header** da requisição o **token** do usuário.

* Você receberá um array com todas as transações:

  ```javascript
  {
    userName: "fulano",
    transactions: [
      {
        _id: "637934d2952c68857e7cd778",
        value: 10000,
        description: "Salário",
        type: "deposit",
        userId: "6379342c952c68857e7cd776",
        date: "19/11"
      },
      {
        _id: "637a1512d93d49c2ce0be581",
        value: 4000,
        description: "Aquela merenda da boa",
        type: "withdraw",
        userId: "6379342c952c68857e7cd776",
        date: "20/11"
      }
    ]
  }
  ```

- Status Code:

  - Ocorre quando dá tudo certo:

    ```
      status: 200
    ```

---

## Informações técnicas

### Observações:

- Esse projeto utiliza o banco de dados NoSQL **MongoDB**. Portanto, você deverá ter ele instalado na sua máquina, para a execução correta da aplicação.

- Para fazer a instalação do MongoDB, você pode seguir algum tutorial pela internet, ou se preferir, você pode ir direto no [site oficial](https://www.mongodb.com/) do MongoDB.

- A versão do MongoDB usada nesse projeto foi a `v5.0.18`.

### Tecnologias utilizadas:

- **Desenvolvimento**:

  - Nodemon.

- **Produção**:
  - Node (v16.17.0);
  - Express;
  - Cors;
  - Bcrypt;
  - Dayjs;
  - Dotenv;
  - Joi;
  - Uuid;
  - MongoDB.
