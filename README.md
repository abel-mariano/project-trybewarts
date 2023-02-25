# Bem-Vindo ao repositório do projeto Trybewarts Wizarding School! 🧙

<summary><strong>🧑‍💻 O que foi desenvolvido no projeto</strong></summary><br />

Neste projeto, tive que desenvolver uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo verdadeiramente mágico!

In this project, I had to develop a form page for the Trybewarts School of Magic, where students can send their feedback about it. The theme of this project is based on the book 'Harry Potter', by J. K. Rowling, as programming is the closest we can get to something truly magical!

## Demonstração

<details>

<div align="center">
<img src="https://user-images.githubusercontent.com/120792207/221375640-d56fb2c6-7e87-454c-aa38-1b6ed2c3b65c.gif" width="640px"/>
</div>

</details>

## 🚀Tecnologias e Ferramentas utilizadas:
<h1 align='left'>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</h1>

# Requisitos Obrigatórios

## 1. Crie uma barra verde na parte superior da página.

<details>
  <summary>
    A barra deve possuir a classe <code>header</code>, ser um <code>flex container</code> e ter a cor de fundo <code>rgb(50, 167, 145)</code>
  </summary><br/>

</details>

## 2. Adicione o logotipo da Trybewarts.

<details>
  <summary>
    O logotipo deve estar dentro do <code>header</code> e ser um elemento <code>img</code>
  </summary><br/>

  - Crie uma tag `img` dentro do elemento com a classe `header`:
  - Adicione a classe `trybewarts-header-logo`;
  - Adicione o atributo `src` com o valor `images/trybewarts-header-logo.svg`;

</details>

## 3. Acrescente um formulário de login no `header`.

<details>
  <summary>
    Crie um formulário de login com os inputs de <code>email</code>, <code>senha</code> e um botão para login. O formulário deve estar posicionado à direita da logo;
    O botão deve validar os dados inseridos no formulário de forma que um alerta seja disparado quando o email e a senha forem corretos, e outro alerta seja disparado quando os inputs email ou senha estiverem incorretos.
  </summary><br/>

  - Crie um formulário com a classe `trybewarts-login`;

  - Crie o input de **email** dentro do formulário:
    - Adicione o atributo `name` com o valor **email**;
    - Adicione o atributo `placeholder` com o valor **Email**;

  - Crie o input de **senha** dentro do formulário:
    - Adicione o atributo `name` com o valor **password**;
    - Adicione o atributo `placeholder` com o valor **Senha**;

  - Crie um botão com o texto **"Entrar"**;
    - Faça com que o formulário seja um **flex container**;
    - Faça com que o formulário fique à direita da logo;

  - Valide o formulário:
    - Ao preencher o formulário e clicar no botão, será validado que:
    - Caso o email seja **"tryber@teste.com"** e a senha seja **"123456"**, será emitido um alerta contendo o texto **"Olá, Tryber!"**;
    - Em todos os outro casos deverá ser emitido um alerta contendo o texto **"Email ou senha inválidos."**;

**De olho na dica 👀:** adicione a propriedade `flex` que faz os elementos terem o espaçamento máximo **entre eles** no **header**

</details>

## 4. Crie um título com o texto "Trybewarts" centralizado dentro do `Header`.

<details>
  <summary>
  Deve existir um elemento <code>h1</code> com o texto Trybewarts, posicionado no meio do cabeçalho. Será necessário criar três elementos filhos para diagramar o cabeçalho
  </summary><br/>

  - Crie a tag `h1` com o `id` igual a `trybewarts-header-title`;
  - O título `h1` deverá ter o texto **"Trybewarts"**;

  - O título deverá estar no meio da barra verde:
    - O header deve ter exatamente três elementos filhos;
    - O filho do meio deve ser o título;

</details>

## 5. Adicione um formulário no corpo da página.

<details>
  <summary>
  Crie um formulário dentro de uma tag <code>main</code>. Ambos, formulário e tag <code>main</code> devem ser <code>flex containers</code> e a largura do formulário deve ser de <code>675px</code>
  </summary><br/>

  - Crie um formulário com o `ID` igual a `evaluation-form`;
  - Insira o formulário dentro de uma tag `main`;
  - Faça com que o formulário seja um `flex container`;
  - Faça com que o `main`, seja um `flex container`;
  - Adicione uma largura de `675px` ao formulário.

</details>

## 6. Faça com que a direção do formulário seja vertical.

<details>
  <summary>
    A direção dos itens do formulário com o <code>ID</code> igual a <code>evaluation-form</code> devem estar na vertical, em coluna.
 </summary><br/>

</details>

## 7. Adicione a logo da Trybewarts ao lado direito da página.

  <details>
  <summary>
  Crie um elemento com a tag <code>img</code> e modifique sua altura para <code>500px</code>
  </summary><br/>

- Crie um elemento `img` com o `ID` igual a `trybewarts-forms-logo`;
- Adicione o atributo `src` com o valor `images/trybewarts-colored.svg`;
- Adicione o estilo css `height` de `500px`;

</details>

## 8. Acrescente inputs de `nome, sobrenome` e `email` ao formulário.

<details>
  <summary>
    Dentro do formulário adicione os inputs de <code>nome</code>, <code>sobrenome</code> e <code>email</code>
  </summary> <br />

  - Crie um input com o `ID` igual a `input-name`:
    - Adicione o atributo `placeholder` com o valor `Nome`;

  - Crie um input com o `ID` igual a `input-lastname`:
    - Adicione o atributo `placeholder` com o valor `Sobrenome`;

  - Crie um input com o `ID` igual a `input-email`:
    - Adicione o atributo `placeholder` com o valor `Email`.

</details>

## 9. Acrescente um `select` ao formulário.

<details>
  <summary>
    O formulário deve possuir um input tipo <code>select</code>, com as opções <code>Gitnória</code>, <code>Reactpuff</code>, <code>Corvinode</code> e <code>Pytherina</code>
  </summary> <br />

  - Crie um `select` com o `ID` igual a `house`;
  - Adicione ao `select`:
    - A opção `Gitnória` com o `ID` igual a `gitnoria-house` e o atributo `value` igual a `Gitnória`;
    - A opção `Reactpuff` com o `ID` igual a `reactpuff-house` e o atributo `value` igual a `Reactpuff`;
    - A opção `Corvinode` com o `ID` igual a `corvinode-house` e o atributo `value` igual a `Corvinode`;
    - A opção `Pytherina` com o `ID` igual a `pytherina-house` e o atributo `value` igual a `Pytherina`.

</details>

## 10. Posicione os campos de `Nome` e `Sobrenome` lado a lado.

<details>
  <summary>
    Os campos de <code>Nome</code> e <code>Sobrenome</code> devem estar lado a lado, com o campo de <code>Sobrenome</code> à direita
  </summary> <br />

</details>

## 11. Posicione os campos de `Email` e `Casa` lado a lado.

<details>
  <summary>
    Os campos de <code>Email</code> e <code>Casa</code> devem estar lado a lado, com o campo de <code>Casa</code> à direita
  </summary> <br />

</details>

## 12. Adicione 3 inputs do tipo `radio` ao formulário.

<details>
  <summary>
    O formulário deve possuir um campo de entrada com 3 inputs, um abaixo do outro, do tipo <code>radio</code> para que a pessoa estudante escolha com qual família mais se identifica.
  </summary> <br />

- Crie uma `label` com o `ID` igual a `label-family` e acrescente o texto **"Qual sua família?"**;

- Adicione ao formulário os seguintes elementos:
  - um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `Frontend`;
  - um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `Backend`;
  - um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `FullStack`;

- Posicione os `radio buttons` para ficar abaixo um do outro e na sequência: **Frontend**, **Backend** e **FullStack**;

- Posicione os radio buttons abaixo da `label`.

</details>

## 13. Crie inputs do tipo `checkbox`.

<details>
  <summary>
    Os campos de entrada do tipo <code>checkbox</code> devem conter seis opções: <code>Hofs, Jest, Promises, React, SQL, Python</code> com a classe <code>subject</code> estando abaixo de uma label com <code>ID</code> igual a <code>label-content</code> cujo texto é <code>Qual conteúdo você está com mais vontade de aprender?</code>
  </summary> <br />

- Crie um elemento com o `id` igual a `label-content` e acrescente o texto **"Qual conteúdo você está com mais vontade de aprender?"**;
- Crie um input do tipo `checkbox` com a classe `subject` e o `value` igual a `HoFs`;
- Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `Jest`;
- Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `Promises`;
- Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `React`;
- Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `SQL`;
- Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `Python`;
- Posicione as checkboxes abaixo da label.

</details>

## 14. Crie um campo de avaliação.

<details>
  <summary>
    O campo deve possuir 10 inputs do tipo <code>radio</code> para avaliar de 1 a 10 o nível de satisfação com a Trybewarts. Estes inputs devem ficar abaixo de uma <code>label</code> com texto <code>Como você avalia a Trybewarts?</code> e devem estar posicionados lado a lado.
  </summary> <br />

  - Crie uma `label` com o `ID` igual a `label-rate` e acrescente o texto **"Como você avalia a Trybewarts?"**;

  - Crie 10 `radio buttons`, contendo as opções de 1 a 10:
    - Adicione o atributo `value` com o valor de 1 a 10;
    - Adicione ao atributo `name` dos `radio buttons` o valor `rate`;

  - Posicione os `radio buttons` de modo que fiquem lado a lado.

</details>

## 15. Crie uma textarea.

<details>
  <summary>
    Crie uma <code>textarea</code> com número máximo de caracteres igual à 500 abaixo de um <code>label</code> com texto <code>Deixe seu comentário:</code>
  </summary> <br />

  - Crie uma `textarea`;
  - Crie uma label com a classe `textarea` e que possua o texto **"Deixe seu comentário:"**;
  - Adicione ao elemento `textarea` o limite de 500 caracteres.

</details>

## 16. Crie uma `checkbox` que servirá para validar as informações digitadas pela pessoa usuária.

<details>
  <summary>
     Adicione um campo de entrada do tipo <code>checkbox</code> ao lado direito de uma <code>label</code> com texto <code>"Você concorda com o uso das informações acima?"</code>
  </summary> <br />

  - Crie um campo de entrada do tipo `checkbox` com o `ID` igual a `agreement`;
  - Crie uma label com o `ID` igual a `label-infos` e que possua o texto **"Você concorda com o uso das informações acima?"**;
  - Posicione o `checkbox` ao lado da label.

</details>

## 17. Crie um botão de "Enviar" para submeter o formulário.

<details>
  <summary>
    Crie um botão  do tipo <code>submit</code> com o texto <code>Enviar</code> para submeter o formulário.</code>
  </summary> <br />

  - Crie um botão do tipo `submit` com o `ID` igual a `submit-btn`;
  - Adicione o texto **"Enviar"** ao botão.

</details>

## 18. Habilite o botão "Enviar" após a validação do `checkbox`.

<details>
  <summary>
    Faça com que o botão seja habilitado ou desabilitado de acordo com o <code>checkbox</code> criado.
  </summary> <br />

  - Desabilite o botão caso o `checkbox` não esteja selecionado;
  - Habilite o botão caso o `checkbox` seja selecionado.

</details>

## 19. Crie um rodapé ao final da página.

<details>
  <summary>
    O rodapé deverá conter a tag <code>footer</code> e texto <strong>"Direitos reservados à Trybewarts©"</strong>
  </summary> <br />

</details>

---

# Requisitos Bônus

## 20. Crie um contador de caracteres.

<details>
  <summary>
    O contador deve possuir o número de caracteres, que deverá ser atualizado à medida que algo for digitado na <code>textarea</code>. O valor deve ser inicialmente de <code>500</code> e decrementar até <code>0</code> a medida que algo for escrito, ou incrementar à medida que caracteres forem sendo apagados.
  </summary> <br />

- Crie o contador e adicione o `ID` igual a `counter`;
- Adicione ao contador o valor inicial de `500`:
  - O contador deve variar entre `500` caracteres e `0`;
- Decremente o contador à medida que caracteres forem sendo escritos no campo `textarea`;
- Incremente o contador à medida que caracteres forem sendo deletados no campo `textarea`;
- Adicione ao elemento `textarea` o `ID` igual a `textarea`.

</details>

## 21. Substitua o formulário pelas informações da pessoa estudante.

<details>
  <summary>
    Faça com que, ao clicar no botão <code>Enviar</code>, o formulário seja substituído pelas informações preenchidas pela pessoa estudante.
  </summary> <br />

- Crie um elemento com `ID` igual a `form-data` e dentro dele:
  - Crie um campo que vai receber o nome digitado pela pessoa usuária, no formato `Nome: Alguem Aqui`;
  - Crie um campo que vai receber o email digitado pela pessoa usuária, no formato `Email: email@mail.com`;
  - Crie um campo que vai receber a casa escolhida pela pessoa usuária, no formato `Casa: Casa Escolhida`;
  - Crie um campo que vai receber a família selecionada pela pessoa usuária, no formato `Família: Família Escolhida`;
  - Crie um campo que vai receber os conteúdos selecionados pela pessoa usuária, no formato `Matérias: Matérias, Marcadas, Aqui`;

> **De olho na dica 👀 :** os conteúdos devem estar separados por uma vírgula e um espaço

- Crie um campo que vai receber a avaliação selecionada pela pessoa usuária, no formato `Avaliação: NotaAqui`;
- Crie um campo que vai receber o comentário digitado pela pessoa usuária, no formato `Observações: Observações aqui`.
- Substitua os campos do formulário pelas informações da pessoa usuária;

</details>
