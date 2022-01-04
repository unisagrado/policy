## Landing Page Proteção de Dados UNISAGRADO

Esse repositório contém a landing page com informações sobre as políticas de proteção de
dados pessoais do UNISAGRADO.

## Como desenvolver? / How to Develop?

1. Clonar o repositório
2. Instalar as dependências
3. Compilar os estilos (tailwindcss)
4. Realizar modificações (src)

```console
git clone git@github.com:unisagrado/policy.git
cd policy
npm install
npx tailwindcss -i src/css/styles.css -o public/css/tailwind.css
```

## Compilar para produção

Utilize o comando abaixo para compilar os arquivos do tailwind na versão otimizada para produção

```console
npx tailwindcss -i src/css/styles.css -o public/css/tailwind.css --minify
```
