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
