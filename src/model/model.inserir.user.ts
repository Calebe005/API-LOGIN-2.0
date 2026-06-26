import poll from "./model.connect";

export default async function Insert_user(user: any, res: any) {
  try {
    const [result] = await poll.execute(
      "INSERT INTO \`usuario\`(\`nome_usuario\`, \`sobrenome_usuario\`, \`email_usuario\`, \`senha_usuario\`,\`data_nascimento\`)VALUES (?, ?, ?, ?, ?)",
      [
        user.nome_usuario,
        user.sobre_nome_usuario,
        user.email_usuario,
        user.senha_usuario,
        user.data_nascimento,
      ],
    );

    res.status(201).send("Usuário criado com sucesso!");
  } catch (err: any) {
    console.error("Erro ao inserir cadastro na base de dados: ", err.message);
  }
}
