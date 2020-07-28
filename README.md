<h1 align="center"> 
<img src="https://img.icons8.com/fluent/48/000000/school.png" alt="Logo school manager" width="200px">

---

🚀 Site School Manager com NodeJS e banco de dados PostgreSQL ✔️ <br>

<img src="https://camo.githubusercontent.com/a45bd10a7ea5a30b5665d9869b0ce1324fa90350/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d6163746976652d737563636573732e737667" alt="Status" data-canonical-src="https://img.shields.io/badge/status-active-success.svg" style="max-width:100%;">
<img src="https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg" style="max-width:100%;">
</h1>


## 📑️ Índice

- [O projeto](#📝️-Sobre)
- [Links desafios](#📝️-Links)
- [Tecnologias utilizadas](#🚀️-Tecnologias-utilizadas)
- [Acrescentado ao projeto original](#💻️-Acrescentado-ao-projeto-original)
- [Como usar](#💾️-Como-baixar/testar-o-projeto)
- [Bootcamp LaunchBase](#ℹ️-O-que-é-o-LaunchBase)
- [Contato](#-Desenvolvido-com-💙️-por)
- [Licença](#-Licença)

---

## 📝️ Sobre

O projeto trata-se de um site gerenciador de escola, cadastrando professores que
dão aulas particulares e alunos matrículados nessas aulas, o desafio foi proposto
para consolidar o aprendizado durante o Bootcamp LaunchBase, onde deve-se utilizar HTML, CSS, JavaScript, NodeJS, Express, Template Engine Nunjucks, PostgreSQL contendo menus, página index com visualização geral, páginas de criação, visualização, edição, exclusão de Professores e Alunos,
paginação e filtros.

<h1>
<img src="public/assets/school-manager-com-db.gif" alt="Gif School Manager">
</h1>

## 📝️ Links

<h2>Links dos desafios propostos:</h2>
<ol>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-1-header.md">Acessar desafio 4-1
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-2-card-teacher.md">Acessar desafio 4-2
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-3-form-and-routes-teacher.md">Acessar desafio 4-3
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-4-show-edit-format-teacher.md">Acessar desafio 4-4
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-5-put-delete-teacher.md">Acessar desafio 4-5
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-6-list-teachers.md">Acessar desafio 4-6
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-7-students.md">Acessar desafio 4-7
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-05/blob/master/desafios/05-1-refatorando-aplicacao.md">Acessar desafio 5-1
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-05/blob/master/desafios/05-2-interagindo-bd.md">Acessar desafio 5-2
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-05/blob/master/desafios/05-3-relacionamentos-filtros-bd.md">Acessar desafio 5-3
  </a>
  </li>
  <li>
  <a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-05/blob/master/desafios/05-4-paginacao-bd.md">Acessar desafio 5-4
  </a>
  </li>
</ol>

---

### 🚀️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- Express
- Template Engine Nunjucks
- PostgreSQL

---

#### 💻️ Acrescentado ao projeto proposto

- Responsividade com media query baseado no toogle device toolbar do chrome.
- Estilização própria
- Formato de exibição dos dados

---

#### 💾️ Como baixar/testar o projeto

- Você irá precisar instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/), [PostgreSQL](https://www.postgresql.org/), [Postbird](https://www.electronjs.org/apps/postbird) + [Visual Studio code](https://code.visualstudio.com/).

```bash
# Versões mínimas ou superiores.
$ node -v
v12.18.0

$ npm -v
6.14.5
```

- Para configurar, no bash digite os seguinte códigos:

```bash
# Clonar o repositório
$ git clone https://github.com/RicardoMejolaro/Projeto-School-Manager-com-NodeJS.git

#Entrar no diretório
$ cd school-manager

#Abrir projeto no VsCode ou com seu prompt de comando de preferência
code . ||  cd school-manager (Passo acima) 

#Com o terminal aberto rodar o comando
$ npm install (para instalar as dependências necessárias)

#Criar o banco de dados no seu PostgreSQL
O meu está nomeado como: schoolmanager

#No arquivo db.js
No campo "database", incluir o nome do banco criado. (Passo acima)
Incluir o seus dados PostgreSQL nos campos: "user" e "password"

```

```bash
#Criar a tabela teachers
```
 <table>
      <thead>
        <tr>
          <th>column</th>
          <th>type</th>
          <th>max length</th>
          <th>default</th>
          <th>primary key</th>
          <th>null</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>id</td>
            <td>integer</td>
            <td></td>
            <td>auto increment</td>
            <td>yes</td>
            <td>no</td>
          </tr>
          <tr>
            <td>avatar_url</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>name</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>birth_date</td>
            <td>timestamp</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>education_level</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>class_type</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>subjects_taught</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
      </tbody>
</table>

```bash
#Criar a tabela students
```
 <table>
      <thead>
        <tr>
          <th>column</th>
          <th>type</th>
          <th>max length</th>
          <th>default</th>
          <th>primary key</th>
          <th>null</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>id</td>
            <td>integer</td>
            <td></td>
            <td>auto increment</td>
            <td>yes</td>
            <td>no</td>
          </tr>
          <tr>
            <td>avatar_url</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>name</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>email</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          <tr>
            <td>birth</td>
            <td>timestamp</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>school_year</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>workload</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>teacher_id</td>
            <td>integer</td>
            <td></td>
            <td></td>
            <td></td>
            <td>yes</td>
          </tr>
      </tbody>
</table>

```bash

#Agora só rodar o projeto com o comando
$ npm start

#Pronto projeto abrirá em seu navegador padrão
Agora é só testar em seu navegador!

```
---

## ℹ️ O que é o LaunchBase?

O LaunchBase é um treinamento no formato de bootcamp online que tem duração de 8 semanas. A cada semana os conteúdos são liberados de acordo com um cronograma, guiando o aluno pelas ferramentas e conceitos mais modernos de desenvolvimento web para entrar com o pé direito nesse universo e ir direto ao ponto naquilo que realmente importa para alcançar seus maiores objetivos como dev..

---

### Desenvolvido com 💙️ por

***Ricardo Mejolaro*** 
<br/> 
<a href="https://www.linkedin.com/in/ricardo-mejolaro/">
<img src="public/assets/linkedin.png">
</a>

### Licença

Este projeto está licenciado sob a licença MIT - consulte a página [LICENSE](https://opensource.org/licenses/MIT) para obter detalhes.
