import React, { useEffect, useState } from 'react';

const ListaDeAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    const res = await fetch('http://localhost:3000/alunos');
    const data = await res.json();
    setAlunos(data);
  };

  const adicionarAluno = async (e) => {
    e.preventDefault();
    // Não definimos o campo 'id' para que o json-server gere automaticamente um número sequencial.
    await fetch('http://localhost:3000/alunos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email }), // Sem o campo 'id'
    });
    setNome('');
    setEmail('');
    fetchAlunos(); // Atualiza a tabela
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>

      <form onSubmit={adicionarAluno}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <table border="1" cellPadding="5" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaDeAlunos;
