# Projeto-inicial-fetch-github-api

Esse projeto foi desenvolvido durante o curso DevQuest-DevEmDobro. Durante o projeto deveriamos desenvolver uma página onde ao digitar o nome do usuário uma API do github usando o fetch, iria buscar informações dos usuários e mostrar em tela.

## Funcionalidades
- Ao digitar o nome do usuário a API busca o nome, bio, a foto e os 10 últimos repositórios.
- A aquisição deveria ser feita ao clicar no botão ou ao apertar o enter.
- Caso não fosse digitado nada no campo, um alerta deveria aparecer, orientado o usuário a preencher o campo.
- Caso o usuário não possuir nome cadastrado, aparecerá uma mensagem de nome não possui nome cadastrado. E se não houver uma bio cadastrada, aparecerá uma mensagem de não possui bio cadastrada. 
- Resposividade.

## Layout
<img src="./src/images/Animação-projeto-inicial-fetch-github-api.gif">

## Técnologias utilizadas
- HTML
- CSS
- JavaScript
- API GitHub

## Adicionando Funcionalidades

Foi feito uma atualização do projeto, deveria ser adicionado algumas funcionalidades:
- Além de trazer imagem o usuário, nome completo, login e bio (que foi feito na primeira etapa). Agora deveria mostrar:

◽ Número de seguidores;

◽ Número de pessoas que o usuário segue.
- Deveria ser apresentado na tela uma lista os dez últimos eventos do usuário. Os eventos deveriam ser de dois tipos CreateEvent e PushEvent.
Os eventos do tipo PushEvent deveria mostrar o nome do repositório e a mensagem de commit do Evento.
Os CreateEvents deveria ser mostrado apenas a mensagem "Sem mensagem de commit".
- No repositório, além de mostrar o nome do repostório e link, também deveria mostrar:

◽Quantidade de fork;

◽ Quatidade de estrelas;

◽ Quantidade de watchers;

◽ Linguagem de programação do repositório.

## Layout

Algumas mudanças foram feitas no layout:

<img src="./src/images/Animação-projeto-inicial-fetch-github-api-2.gif">
