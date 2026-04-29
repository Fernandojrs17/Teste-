# Teste-

Vitrine de produtos desenvolvida com HTML, CSS e JavaScript puro — sem frameworks, sem bibliotecas de UI como especificado.

---

## 📋 Sobre o projeto

Aplicação web simples que exibe uma grade de produtos carregados dinamicamente a partir de um arquivo JSON. Ao clicar em um produto, um modal é aberto com mais detalhes e o preço formatado em Real (BRL).

---

## 📁 Estrutura de arquivos

```
vitrine-produtos/
├── index.html       # Estrutura da página
├── style.css        # Estilização completa
├── main.js          # Lógica de renderização e modal
└── products.json    # Dados dos produtos
```

---

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/vitrine-produtos.git
   ```

2. Abra a pasta no VS Code:
   ```bash
   cd vitrine-produtos
   code .
   ```

3. Instale a extensão **Live Server** no VS Code e clique em **"Go Live"** na barra inferior.

> ⚠️ O projeto usa `fetch()` para ler o `products.json`, por isso precisa rodar em um servidor local — não funciona abrindo o `index.html` diretamente pelo navegador.

---

## 🧩 Funcionalidades

- Listagem de produtos em grade responsiva
- Preços formatados em Real brasileiro (R$)
- Modal com detalhes do produto ao clicar no card
- Fechamento do modal pelo botão ✕ ou clicando fora
- CSS e JS 100% nativos, sem dependências externas

---

## 🗂️ Formato do products.json

```json
{
  "success": true,
  "products": [
    {
      "productName": "Nome do produto",
      "descriptionShort": "Descrição curta",
      "photo": "nome-da-imagem.png",
      "price": 1000
    }
  ]
}
```

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica da página |
| CSS3 | Estilização e layout em grid |
| JavaScript ES6+ | Fetch API, manipulação do DOM |
| JSON | Fonte de dados dos produtos |

> Nenhuma biblioteca de UI foi utilizada (sem Bootstrap, Foundation ou similares).

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.
