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
