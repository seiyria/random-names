export default function portugueses() {
  let rnd;

  let rnd1;


  let names;

  const type = Math.random() < 0.5 ? 0 : 1;

  const namesMale = ['Ângelo', 'Afonso', 'Alex', 'Alexandre', 'André', 'António', 'Artur', 'Benjamim', 'Bernardo', 'Brian', 'Bruno', 'César', 'Carlos', 'Cristiano', 'Dário', 'Daniel', 'Davi', 'David', 'Diego', 'Dinis', 'Diogo', 'Duarte', 'Edgar', 'Eduardo', 'Emanuel', 'Enzo', 'Fábio', 'Fernando', 'Filipe', 'Flávio', 'Francisco', 'Frederico', 'Gabriel', 'Gil', 'Gonçalo', 'Guilherme', 'Gustavo', 'Hélder', 'Henrique', 'Hugo', 'Ian', 'Igor', 'Isaac', 'Isac', 'Ismael', 'Ivan', 'Ivo', 'Ivo ', 'Jaime', 'João', 'Joaquim', 'Joel', 'Joel ', 'Jorge', 'José', 'Kévim', 'Kevin', 'Leandro', 'Leonardo', 'Leonel', 'Lisandro', 'Lourenço', 'Luís', 'Luca', 'Lucas', 'Márcio', 'Mário', 'Manel ', 'Manuel', 'Marco', 'Martim', 'Mateus', 'Matias', 'Mauro', 'Micael', 'Miguel', 'Nelson', 'Noah ', 'Nuno', 'Paulo', 'Pedro', 'Rúben', 'Raúl', 'Rafael', 'Renato', 'Ricardo', 'Rodrigo', 'Rui', 'Sérgio', 'Salvador', 'Samuel', 'Sandro', 'Santiago', 'Sebastião', 'Simão', 'Tiago', 'Tomás', 'Tomé', 'Vítor', 'Valentin', 'Vasco', 'Vicente', 'Wilson', 'Xavier'];
  const namesFemale = ['Áurea', 'Ângela', 'Érica', 'Íris', 'Adriana', 'Alícia', 'Alexandra', 'Alice', 'Aline', 'Amélia', 'Ana', 'Andreia', 'Ariana', 'Bárbara', 'Beatriz', 'Benedita', 'Bianca', 'Bruna', 'Caetana', 'Camila', 'Carlota', 'Carminho', 'Carolina', 'Catarina', 'Cláudia', 'Clara', 'Constança', 'Cristiana', 'Cristina', 'Débora', 'Daniela', 'Diana', 'Eduarda', 'Ema', 'Eva', 'Fabiana', 'Filipa', 'Filomena', 'Francisca', 'Gabriela', 'Helena', 'Iara', 'Inês', 'Irina', 'Isabel', 'Isabela', 'Isis', 'Jéssica', 'Júlia', 'Joana', 'Juliana', 'Kelly', 'Kyara', 'Lúcia', 'Lara', 'Laura', 'Leonor', 'Letícia', 'Lia', 'Liliana', 'Lorena', 'Luísa', 'Luana', 'Luciana', 'Luna', 'Mélanie', 'Mónica', 'Madalena', 'Mafalda', 'Maiara', 'Mara', 'Margarida', 'Maria', 'Mariana', 'Marta', 'Matilde', 'Melissa', 'Mia', 'Miriam', 'Nádia', 'Núria', 'Naiara', 'Nicole', 'Noa', 'Paloma', 'Patrícia', 'Pilar', 'Rafaela', 'Raissa', 'Raquel', 'Renata', 'Rita', 'Rute', 'Sílvia', 'Sónia', 'Safira', 'Salomé', 'Sandra', 'Sara', 'Sofia', 'Soraia', 'Tatiana', 'Teresa', 'Teresa', 'Valentina', 'Vera', 'Victória', 'Violeta', 'Vitória', 'Yara', 'Yasmin'];
  const names2 = ['Águas', 'Álvares', 'Ávila', 'Abreu', 'Abril', 'Agostinho', 'Aguiar', 'Albuquerque', 'Alcantara', 'Almeida', 'Alves', 'Alvim', 'Amaral', 'Amorim', 'Andrade', 'Antunes', 'Araújo', 'Azevedo', 'Bandeira', 'Baptista', 'Barbosa', 'Barboza', 'Barreto', 'Barros', 'Bastos', 'Batista', 'Bento', 'Bettencourt', 'Borges', 'Botelho', 'Braga', 'Branco', 'Brandão', 'Brito', 'Câmara', 'Cabral', 'Caetano', 'Campos', 'Cardoso', 'Carneiro', 'Carreira', 'Carrico', 'Carvalho', 'Castro', 'Cavaco', 'Cerqueira', 'Coelho', 'Coimbra', 'Cordeiro', 'Correia', 'Corte-Real', 'Cortes', 'Costa', 'Coutinho', 'Couto', 'Cruz', 'Cunha', 'Dantas', 'De Freitas', 'De Lima', 'De Sá', 'Del Rosario', 'Dias', 'Do Rosário', 'Duarte', 'Faria', 'Fernandes', 'Ferreira', 'Fidalgo', 'Florencio', 'Fonseca', 'Fontes', 'Freire', 'Freitas', 'Furtado', 'Góes', 'Gama', 'Garcia', 'Gomes', 'Gonçalves', 'Gonsalves', 'Gouveia', 'Guerra', 'Guimarães', 'Gusmão', 'Henriques', 'Hernandes', 'Leitão', 'Leite', 'Lima', 'Lobo', 'Lopes', 'Luz', 'Macedo', 'Machado', 'Maciel', 'Magalhães', 'Martins', 'Mascarenhas', 'Mata', 'Matos', 'Medeiros', 'Melo', 'Mendes', 'Mendez', 'Mendonça', 'Menezes', 'Miranda', 'Moniz', 'Monteiro', 'Montenegro', 'Morais', 'Moreira', 'Moreno', 'Moura', 'Nascimento', 'Neves', 'Nogueira', 'Nunes', 'Oliveira', 'Pacheco', 'Paiva', 'Pascoal', 'Passos', 'Pereira', 'Peres', 'Pimentel', 'Pinho', 'Pinto', 'Pires', 'Queiros', 'Queiroz', 'Ramos', 'Rebelo', 'Rego', 'Reis', 'Resende', 'Resendes', 'Ribeiro', 'Rocha', 'Rodrigues', 'Roque', 'Rosa', 'Sá', 'Saldanha', 'Salgado', 'Santos', 'Sapateiro', 'Saraiva', 'Seabra', 'Seixas', 'Sequeira', 'Serra', 'Silva', 'Silveira', 'Silvestre', 'Simões', 'Siqueira', 'Soares', 'Sousa', 'Tavares', 'Teixeira', 'Tomás', 'Torres', 'Valente', 'Varejão', 'Varela', 'Vasconcelos', 'Vaz', 'Venâncio', 'Vidal', 'Vieira', 'Vila', 'Vomlel'];

  const names1 = type === 1 ? namesFemale : namesMale;

  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd1]}`;
    return names;
  }
}
