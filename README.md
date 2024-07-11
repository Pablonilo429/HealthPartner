# HealthPartner - Monitorando suas Atividades Vitais! - README


Este projeto foi desenvolvido como cumprimento da avaliação 2 da disciplina IC824 - "Interação Humano-Computador" pela UFRRJ no semestre 2023.2 .

O projeto foi criado em NodeJS em conjunto com ExpressJS, utilizando os serviços da API Google Health para capturar dados como batimento cardíaco, passos, distância percorrida e gasto calórico.

Como base, utilizou-se o projeto [fitness-app](https://github.com/ayoubkhial/fitness-app).

Atualmente é necessário realizar os seguintes passos para utilizar a aplicação com a sua conta Google pessoal:

-Acessar https://developers.google.com/oauthplayground/
-Selecionar Fitness API v1;
-Selecionar todo escopo que tem haver com .read exemplo: "https://www.googleapis.com/auth/fitness.activity.read";
-Depois de selecionar todas e clicar em autorizar, será fornecido um "Authorization Code", logo em seguida clique em "Exchange authorization code for tokens";
-Será fornecido o Access Token, nisso copie e cole no arquivo .env e no arquivo View/Pages/scripts.js

-Na próxima versão será fornecido um painel de autenticação com o Google dentro do próprio aplicativo. 

# Desenvolvido por:

- Helon de França Medeiros
- Pablo de Oliveira Araujo Xavier
- Tiago César Cunha da Costa
- Vanessa Santos de Andrade
