# API para estudiantes de aplicación

Consiste en un juego en el que se presentan tarjetas
por nivel y lenguaje de programación que contienen preguntas
con una respuesta correcta y otra incorrecta.

## Entidades

- User:
  - id
  - name
  - avatar
  - email
  - password

- Language:
  - id
  - name

- Level:
  - id
  - name (fácil, medio, difícil)

- Card:
  - id
  - question
  - true_answer
  - false_anwser
  
- Deck:
  - id
  - name

- User_Card
  - id
  - is_correct
  - is_favourite

- User_Card_Deck 
  -id
  

## Endpoints

- **POST /user**  Registro de usuario ✅
- **GET /user/:id** Devuelve información de usuario 
- **POST /login**  Login de usuario (devuelve token) 
- **GET /card/:id**  Devuelve la tarjeta por id ✅
