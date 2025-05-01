# 🎲 Exercício 5 – Projeto React com API Fake

---

📚 Questão A) Crie uma página que retorne alista de alunos que a sua API fake está retornando.
• Retorne esses dados organizados em uma tabela (table).

<h1>Solução: </h1>

Para simular um back-end, foi utilizado o json-server, uma ferramenta que cria uma API REST baseada em um arquivo .json. Nele foram definidos os dados simulados dos alunos, contendo campos como ID (matrícula), nome e e-mail.

Dentro da aplicação React, foi criado um componente chamado ListaDeAlunos, responsável por:
- Fazer a requisição para a API local (rodando com json-server).
- Armazenar os dados retornados no estado do componente.
- Renderizar as informações recebidas de forma estruturada.

  🛠️ Código do Componente

![image](https://github.com/user-attachments/assets/2dcfef94-bf24-44bf-9ae7-c0274e340c71)

💻 Resultado no navegador:

![image](https://github.com/user-attachments/assets/6aa2edcd-39a8-4eb0-85a8-ef390953437b)

📚 Questão B) Crie um formulário que adicione novos alunos nessa API fake e a lista (a tabela) atualize automaticamente.
• A mesma página carrega a lista de alunos e tem o formulário para salvar novos alunos.

<h1>Solução: </h1> 

A solução envolve a criação de uma página em React que exibe uma lista de alunos em uma tabela e permite a adição de novos alunos. Para isso, foi utilizada uma API fake criada com o json-server, que simula um banco de dados. Exibição da lista de alunos: A lista de alunos é carregada dinamicamente usando o hook useEffect e exibida em uma tabela HTML. Formulário de adição de alunos: Um formulário permite que o usuário insira nome e e-mail de novos alunos. Os dados são enviados para a API via requisição POST, e o json-server gera automaticamente um ID numérico sequencial para o novo aluno. Atualização automática da tabela: Após adicionar um aluno, a tabela é atualizada automaticamente com os novos dados sem precisar recarregar a página. A solução integra React para a interface e json-server para a simulação da API, atendendo aos requisitos de exibição e adição de alunos.

🛠️ Código do Componente

![image](https://github.com/user-attachments/assets/b4352861-10a7-4c89-a286-13b41c4d66a3)
![image](https://github.com/user-attachments/assets/387603de-3016-4fd8-8311-a5453af3222b)



💻 Resultado no navegador:

![image](https://github.com/user-attachments/assets/a4031259-1b84-42cb-a1ab-b9520dff9eda)
