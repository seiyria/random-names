export default function argentinians() {
  const type = Math.random() < 0.5 ? 0 : 1;

  const nm1 = ['Abran', 'Adan', 'Adelio', 'Adrían', 'Adriano', 'Agustín', 'Agustin', 'Alano', 'Alanzo', 'Alarico', 'Alba', 'Alberto', 'Aldo', 'Alejandro', 'Alfonso', 'Alfredo', 'Ali', 'Alonso', 'Alonzo', 'Aluino', 'Alvar', 'Alvaro', 'Alvino', 'Amadeo', 'Amado', 'Ambrosio', 'Amoldo', 'Anastasio', 'Anbessa', 'Andrés', 'Andreo', 'Andres', 'Angel', 'Angelino', 'Angelito', 'Angelo', 'Anibal', 'Anselmo', 'Anton', 'Antonio', 'Aquila', 'Aquilino', 'Archibaldo', 'Arlo', 'Armando', 'Arnaldo', 'Arnoldo', 'Arturo', 'Ascanio', 'Atahualpa', 'Atila', 'Augusto', 'Aureliano', 'Aurelio', 'Aurelius', 'Baltasar', 'Barto', 'Bartoli', 'Bartolo', 'Bartolome', 'Bartolomeo', 'Basilio', 'Bautista', 'Beinvenido', 'Beltran', 'Bemabe', 'Bembe', 'Benedicto', 'Benjamín', 'Bernardino', 'Bernardo', 'Berto', 'Blanco', 'Blas', 'Bonifacio', 'Bonifaco', 'Buinton', 'Calvino', 'Carlomagno', 'Carlos', 'Casimiro', 'Casta', 'Cayetano', 'Cedro', 'Cesar', 'Cesario', 'Cesaro', 'Chan', 'Chano', 'Charro', 'Chavez', 'Chayo', 'Che', 'Chico', 'Ciceron', 'Cid', 'Cidro', 'Cipriano', 'Cirilo', 'Ciro', 'Cisco', 'Claudio', 'Clodoveo', 'Conrado', 'Constantino', 'Cornelio', 'Cortez', 'Cris', 'Cristian', 'Cristiano', 'Cristobal', 'Cristofer', 'Cristofor', 'Criston', 'Cristos', 'Cristoval', 'Cruz', 'Cuartio', 'Cuarto', 'Curcio', 'Currito', 'Curro', 'Dacio', 'Damario', 'Damián', 'Damian', 'Daniel', 'Danilo', 'Dantae', 'Dante', 'Dantel', 'Darío', 'Dario', 'Daunte', 'David', 'Delmar', 'Demario', 'Diego', 'Domingo', 'Eduardo', 'Edwardo', 'Efrain', 'Elia', 'Elias', 'Elija', 'Eloy', 'Eluney', 'Elvio', 'Emanuel', 'Emesto', 'Emiliano', 'Emilio', 'Eneas', 'Enrique', 'Enrrique', 'Enzo', 'Erasmo', 'Ernesto', 'Eron', 'Esequiel', 'Estanislao', 'Esteban', 'Estefan', 'Estevan', 'Estevon', 'Eugenio', 'Evarado', 'Everardo', 'Ezequiel', 'Fabián', 'Fabio', 'Fabricio', 'Facundo', 'Fadrique', 'Fanuco', 'Faro', 'Faron', 'Faustino', 'Fausto', 'Federico', 'Feliciano', 'Felipe', 'Felippe', 'Felix', 'Feo', 'Fermín', 'Fermin', 'Fernán', 'Fernando', 'Fidel', 'Fidele', 'Flavio', 'Florencio', 'Florentino', 'Florinio', 'Fraco', 'Francisco', 'Franco', 'Frasco', 'Frascuelo', 'Frederico', 'Fresco', 'Frisco', 'Gabino', 'Gabriel', 'Gabrio', 'Galeno', 'Galtero', 'Garcia', 'Gaspar', 'Gaspard', 'Gastón', 'Generosb', 'Geraldo', 'Gerardo', 'German', 'Gervasio', 'Gervaso', 'Gezane', 'Gil', 'Gilberto', 'Gillermo', 'Ginebra', 'Ginessa', 'Gitana', 'Godalupe', 'Godfredo', 'Godofredo', 'Gonzalo', 'Gorane', 'Gotzone', 'Gracia', 'Graciana', 'Gregoria', 'Gregorio', 'Guadalupe', 'Gualterio', 'Guido', 'Guillelmina', 'Guillermo', 'Gustava', 'Gustavo', 'Héctor', 'Hector', 'Henriqua', 'Heriberto', 'Hermosa', 'Hernán', 'Hernan', 'Hernandez', 'Hernando', 'Hidalgo', 'Hilario', 'Hipolito', 'Horado', 'Hortencia', 'Hugo', 'Humberto', 'Iago', 'Idoia', 'Idurre', 'Ignacia', 'Ignacio', 'Ignado', 'Ignazio', 'Igone', 'Ikerne', 'Ileanna', 'Iliana', 'Jairo', 'Isidoro', 'Iván', 'Javier', 'Javiero', 'Jax', 'Jerardo', 'Jeremías', 'Jeremias', 'Jerico', 'Jerold', 'Jeronimo', 'Jerrald', 'Jerrold', 'Jesus', 'Joaquín', 'Joaquin', 'Jonas', 'Jorge', 'José', 'José Luis', 'José María', 'Jose', 'Joselito', 'Josias', 'Josue', 'Juan', 'Juan Bautista', 'Juan Carlos', 'Juan Cruz', 'Juan Domingo', 'Juan José', 'Juan Manuel', 'Juan Martín', 'Juan Pablo', 'Juan Pedro', 'Juanito', 'Julián', 'Julian', 'Juliano', 'Julio', 'Julio César', 'Justino', 'Justo', 'Kemen', 'Ladislao', 'Lalo', 'Lautaro', 'Lazaro', 'León', 'Leandro', 'Leon', 'Leonardo', 'Leonel', 'Leonides', 'Leopoldo', 'Lia', 'Lisandro', 'Lobo', 'Lonzo', 'Lorenzo', 'Lucas', 'Lucero', 'Luciano', 'Lucila', 'Lucio', 'Luis', 'Macario', 'Macerio', 'Mannie', 'Mano', 'Manolito', 'Manolo', 'Manuel', 'Manuelo', 'Marcelo', 'Marco', 'Marcos', 'Mariano', 'Mario', 'Marquez', 'Martín', 'Martin', 'Martinez', 'Martino', 'Matías', 'Mateo', 'Matias', 'Matro', 'Maureo', 'Mauricio', 'Mauro', 'Maximiliano', 'Maximo', 'Miguel', 'Milagro', 'Milton', 'Mio', 'Moises', 'Montae', 'Montay', 'Monte', 'Montego', 'Montel', 'Montenegro', 'Montes', 'Montez', 'Montrel', 'Montrell', 'Montrelle', 'Néstor', 'Nahuel', 'Naldo', 'Natal', 'Natalio', 'Natanael', 'Nataniel', 'Navarro', 'Nehuen', 'Nemesio', 'Neron', 'Nesto', 'Nestor', 'Neto', 'Nevada', 'Nicanor', 'Nicolás', 'Nicolas', 'Niguel', 'Noe', 'Norberto', 'Normando', 'Oliverio', 'Oliverios', 'Omar', 'Onofre', 'Orlan', 'Orland', 'Orlando', 'Orlin', 'Orlondo', 'Oro', 'Oscar', 'Osvaldo', 'Ovidio', 'Pablo', 'Pacho', 'Paco', 'Pacorro', 'Palben', 'Pancho', 'Pascual', 'Pasqual', 'Patricio', 'Patricio', 'Patrido', 'Paz', 'Pedro', 'Pepe', 'Pirro', 'Placido', 'Platon', 'Porfirio', 'Porfiro', 'Primeiro', 'Prospero', 'Pueblo', 'Quin', 'Quinto', 'Quito', 'Raúl', 'Rafael', 'Rafe', 'Rai', 'Raimundo', 'Ramirez', 'Ramiro', 'Ramon', 'Ramone', 'Raul', 'Raulo', 'Rayman', 'Raymon', 'Renaldo', 'Renato', 'Reno', 'Rey', 'Reyes', 'Reynaldo', 'Reynardo', 'Ricardo', 'Richie', 'Rico', 'Rio', 'Ritchie', 'Roano', 'Roberto', 'Rodas', 'Roderigo', 'Rodolfo', 'Rodrigo', 'Rogelio', 'Roldan', 'Roman', 'Romano', 'Romeo', 'Ronaldo', 'Roque', 'Rosario', 'Ruben', 'Rufio', 'Rufo', 'Sabino', 'Sal', 'Salbatore', 'Salomon', 'Salvador', 'Salvadore', 'Salvatore', 'Salvino', 'Samuel', 'Sancho', 'Sandro', 'Santiago', 'Santino', 'Santo', 'Santos', 'Saturnin', 'Saul', 'Sebastián', 'Sebastian', 'Sebastiano', 'Segundo', 'Sein', 'Senon', 'Serafin', 'Sergio', 'Severo', 'Silverio', 'Silvino', 'Silvio', 'Simón', 'Socorro', 'Sol', 'Stefano', 'Suelita', 'Tabor', 'Tadeo', 'Tajo', 'Taurino', 'Tauro', 'Tavio', 'Tejano', 'Teo', 'Teodor', 'Teodoro', 'Terciero', 'Teyo', 'Thiago', 'Tiago', 'Timo', 'Timoteo', 'Tito', 'Tobias', 'Toli', 'Tomás', 'Tomas', 'Tonio', 'Toro', 'Tulio', 'Turi', 'Ulises', 'Ulrich', 'Urbano', 'Víctor', 'Valentin', 'Veto', 'Vicente', 'Victor', 'Victoriano', 'Victorino', 'Victorio', 'Victoro', 'Vidal', 'Videl', 'Vincente', 'Virgilio', 'Wenceslao', 'Yaguatí'];
  const nm2 = ['Ámbar', 'Ángeles', 'Abadora', 'Abril', 'Adriana', 'Agostina', 'Ailin', 'Alén', 'Alegra', 'Alejandra', 'Alelí', 'Alessa', 'Alicia', 'Alina', 'Alma', 'Amaike', 'Amakáik ', 'Amancay', 'Amanda', 'Ana', 'Ana Lía', 'Ana Laura', 'Anabela', 'Anahí', 'Analía', 'Analisa', 'Anamaría', 'Andrea', 'Antonella', 'Araceli', 'Arcadia', 'Arcelia', 'Arcilla', 'Arella', 'Aricela', 'Ariela', 'Armanda', 'Armena', 'Artemisia', 'Artura', 'Ascencion', 'Asianah ', 'Asuncion', 'Atalaya', 'Athalia', 'Aura', 'Aurelia', 'Aureliana', 'Aurkena', 'Aurkene', 'Aurora', 'Ayelén', 'Azucena', 'Azul', 'Azura', 'Beatrisa', 'Beatriz', 'Belen', 'Belgis', 'Belicia', 'Belinda', 'Belita', 'Bella', 'Benigna', 'Benita', 'Berenice', 'Bernicia', 'Berta', 'Bertha', 'Betiana', 'Bibiana', 'Bienvenida', 'Blanca', 'Blandina', 'Blasa', 'Bonita', 'Brandye ', 'Brigida', 'Brigidia', 'Brisa', 'Brisha', 'Brisia', 'Brissa', 'Briza', 'Bryssa', 'Buena', 'Calandria', 'Calida', 'Calvina', 'Camila', 'Candela', 'Candelaria', 'Candi', 'Candida', 'Candie', 'Cari', 'Carilla', 'Carisa', 'Carla', 'Carleigha ', 'Carletta', 'Carlita', 'Carlota', 'Carlotta', 'Carmela', 'Carmelita', 'Carmen', 'Carmencita', 'Carmina', 'Carminda', 'Carmita', 'Carola', 'Carolina', 'Carona', 'Carrola', 'Casandra', 'Casey', 'Cassandra ', 'Casta', 'Catalin', 'Catalina', 'Catarina', 'Cayetana', 'Cecilia', 'Ceibo', 'Celerina', 'Celesta', 'Celeste', 'Celestina', 'Cenobia', 'Ceri', 'Ceria', 'Cesara', 'Chalina', 'Chamayra ', 'Charo', 'Chavela', 'Chavelle', 'Chaya', 'Cheena ', 'Chela', 'Chica', 'Chiquita', 'Chrisanna', 'Chrisanne', 'Christina', 'Chrysann', 'Cielo', 'Cierra', 'Cionnaye ', 'Cipriana', 'Cira', 'Ciri', 'Clara', 'Clareta', 'Clarinda', 'Clarisa', 'Clarissa', 'Claudia', 'Clementina', 'Clodovea', 'Coco', 'Coleta', 'Concepcion', 'Concetta', 'Conchetta', 'Conshita', 'Consolacion', 'Consolata', 'Constantia', 'Constanza', 'Consuela', 'Consuelo', 'Coraly ', 'Corazana', 'Corazon', 'Crisann', 'Crisanna', 'Crista', 'Cristina', 'Cristine', 'Crotilda', 'Cyntia', 'Dalila', 'Damita', 'Dana', 'Dani', 'Daniela', 'Danita', 'Daria', 'Dayami ', 'Dayanara ', 'Deiene', 'Deikun', 'Deina', 'Delcine', 'Delfina', 'Delma', 'Delmar', 'Delmara', 'Delphia', 'Denisa', 'Desideria', 'Destina', 'Devera', 'Dia', 'Diega', 'Digna', 'Dina', 'Dinora', 'Dionis', 'Dionisa', 'Dita', 'Dolores', 'Dolorita', 'Domenica', 'Dominga', 'Dominica', 'Dona', 'Dora', 'Dorbeta', 'Dorinda', 'Dorotea', 'Dreena', 'Drina Duena', 'Dukine', 'Dukinea', 'Dulce', 'Dulcea', 'Dulcina', 'Dulcinea', 'Dulcinia', 'Earlena', 'Earlene', 'Earlina', 'Edenia', 'Edita', 'Elba', 'Elbertina', 'Eldora', 'Eleadora', 'Eleanora', 'Eleena', 'Elena', 'Eleonora', 'Eliana', 'Elina', 'Elisa', 'Eliza', 'Elizabeth', 'Ella', 'Elodia', 'Eloisa', 'Elsa', 'Elvera', 'Elvia', 'Elvira', 'Elvita', 'Ema', 'Emerald', 'Emesta', 'Emilia', 'Emilie', 'Emily ', 'Encarnacion', 'Engracia', 'Enrica', 'Enriqua', 'Enriqueta', 'Erendira', 'Erendiria', 'Erlene', 'Erlina', 'Ernesta', 'Eskama', 'Esma', 'Esmeralda', 'Esmerelda', 'Esperanza', 'Estebana', 'Estefana', 'Estefani', 'Estefania', 'Estefany', 'Estela', 'Estelita', 'Estella', 'Estelle ', 'Estephanie', 'Ester', 'Esteva', 'Estralita', 'Estrella', 'Estrellita', 'Eufemia', 'Eugenia', 'Eva', 'Eva-Yolanda', 'Evalisse ', 'Evangelina', 'Evelin', 'Evita', 'Exaltacion', 'Ezmeralda', 'Fabiana', 'Fabiola', 'Faqueza', 'Fausta', 'Faustina', 'Felicita', 'Felicitas', 'Felisa', 'Fermina', 'Fernanda', 'Fidelia', 'Fidelina', 'Filipa', 'Fiorela', 'Flaca', 'Flor', 'Floramaria', 'Florencia', 'Florentina', 'Florida', 'Florinia', 'Florita', 'Fonda', 'Fortuna', 'Francisca', 'Freira', 'Frescura', 'Fresia', 'Gabriela', 'Gabriella', 'Gala', 'Galena', 'Galenia', 'Garabina', 'Garabine', 'Garaitz', 'Garbina', 'Garbine', 'Gaspara', 'Geavonna', 'Gechina', 'Generosa', 'Genevalisse ', 'Gertrudes', 'Gertrudis', 'Gezana', 'Gloria', 'Graciela', 'Grazia', 'Grizelda', 'Guadalupe', 'Guanina ', 'Guillermina', 'Guliana', 'Helena', 'Heriberto ', 'Huilén', 'Idalyz ', 'Iliana', 'Iluminada', 'Imelda', 'Immaculada', 'Inés', 'Ines', 'Inez', 'Inocencia', 'Inoceneia', 'Inocenta', 'Iratze', 'Irene', 'Irma', 'Irune', 'Irupé', 'Isabel', 'Isabela', 'Isabella', 'Isi', 'Isidora', 'Itatí', 'Itsaso', 'Itxaro', 'Ivelisse ', 'Ivette', 'Ivonne', 'Izar', 'Izarra', 'Izarre', 'Izazkun', 'JaJuan ', 'Jacarandá', 'Jacinta', 'Jade', 'Jaione', 'Jakinda', 'Janisa ', 'Jasone', 'Javier ', 'Javiera', 'Jerrely ', 'Jesenia ', 'Jesusa', 'Jimena', 'Joaquina', 'Jolie', 'Jomayra ', 'Jordana', 'Jorgelina', 'Josefa', 'Josefina', 'Josune', 'Jovana', 'Jovanna', 'Jovena', 'Jovina', 'Jovita', 'Juana', 'Juandalynn', 'Juanetta', 'Juanisha', 'Juanita', 'Judith ', 'Julia', 'Juliana', 'Julieta', 'Julina', 'Karelma ', 'Karina', 'Karmen', 'Katia', 'Katya', 'Kemena', 'Kemina', 'Kesara', 'Kesare', 'Kiki', 'Kita', 'Kristina', 'LaCienega', 'Ladonna', 'Lala', 'Lali', 'Lalia', 'Laline ', 'Lalla', 'Lana', 'Landa', 'Landrada', 'Lara', 'Lareina', 'Larunda', 'Laura', 'Laurana', 'Laurencia', 'Laurinda', 'Laurita', 'Lavina', 'Lea', 'Leahonia', 'Leala', 'Leandra', 'Legarre', 'Leila', 'Leira', 'Lela', 'Lenora', 'Leonor', 'Leonora', 'Lera', 'Leticia', 'Letitia', 'Letizia', 'Levina', 'Leya', 'Lia', 'Liana', 'Lihuén', 'Lilen', 'Lilia', 'Liliana', 'Linda', 'Llesenia', 'Lluvia', 'Lola', 'Loleta', 'Lolita', 'Lolitta', 'Lora', 'Lorda', 'Lore', 'Lorena', 'Loretta', 'Lourdes', 'Louredes', 'Lucía', 'Lucena', 'Luciana', 'Lucila', 'Lucita', 'Lucrecia', 'Ludmila', 'Luella', 'Luisa', 'Luiza', 'Luján', 'Luna', 'Lupe', 'Lupita', 'Lur', 'Luvenia', 'Luvina', 'Luz', 'Mónica', 'Madalena', 'Madalynn', 'Madeira', 'Madelynn', 'Madena', 'Madia', 'Madina', 'Madre', 'Madrona', 'Maela ', 'Mafalda', 'Magalys ', 'Magdalen', 'Magdalena', 'Magdalene', 'Mailen', 'Maite', 'Maitea', 'Maja', 'Malaya', 'Malena', 'Malia', 'Malita', 'Mallorie ', 'Malvina', 'Manda', 'Manoela', 'Manuela', 'María', 'María Belén', 'María Cecilia', 'María Celeste', 'María Fátima', 'María Itatí', 'María Marta', 'María Pilar', 'María del Carmen', 'María del Luján', 'María del Mar', 'María del Rosario', 'Marcela', 'Marelys ', 'Margarita', 'Maria', 'Mariana', 'Marianela', 'Marianella', 'Maribel', 'Maricel', 'Maricela', 'Maricelia', 'Maricella', 'Maricruz', 'Mariela', 'Marietta', 'Marilu', 'Mariquita', 'Marisa ', 'Marisela', 'Marisol', 'Maritza ', 'Marlina', 'Marquilla', 'Marta', 'Martha', 'Martina', 'Materia', 'Matia', 'Maxima', 'Maya', 'Mayra-Liz ', 'Melisenda', 'Melita', 'Melosa', 'Melosia', 'Mendi', 'Mercedes', 'Micaela', 'Michaela', 'Michelle', 'Migdalia ', 'Mikaela', 'Milagritos', 'Milagro', 'Milagros', 'Milagrosa', 'Mimi', 'Mirabel', 'Miranda', 'Mirari', 'Mireya', 'Mirta', 'Modesta', 'Modeste', 'Molara', 'Monaique ', 'Monica', 'Monita', 'Mora', 'Morisa', 'Morissa', 'Moya', 'Muriel', 'Myra', 'Naiara', 'Nailea', 'Nalda', 'Nana', 'Narcisa', 'Natacha', 'Natalia', 'Natividad', 'Nautica ', 'Neiva', 'Nekana', 'Nekane', 'Nelia', 'Nelida', 'Nerea', 'Nerita', 'Neta', 'Neva', 'Nevada', 'Nicanora', 'Nieve', 'Nina', 'Nita', 'Nixzaliz ', 'Noelia', 'Noemi', 'Norma ', 'Novia', 'Odanda', 'Ofelia', 'Oihane', 'Olademis', 'Olinda', 'Oliveria', 'Olivia', 'Ora', 'Orquidia', 'Osana', 'Pía', 'Pabla', 'Paciencia', 'Palba', 'Palma', 'Palmira', 'Paloma', 'Paola', 'Paquita', 'Pasha', 'Pastora', 'Patricia', 'Paula', 'Paulita', 'Paz', 'Pedra', 'Pepita', 'Perfecta', 'Pia', 'Pilar', 'Pitina', 'Placenta', 'Placida', 'Presencia', 'Presta', 'Primavera', 'Prudencia', 'Puebla', 'Pura', 'Pureza', 'Purisima', 'Querida', 'Quinta', 'Raimunda', 'Raina', 'Ramira', 'Ramona', 'Raquel', 'Regina', 'Reia', 'Reina', 'Remedios', 'Renata', 'Reya', 'Reyna', 'Ria', 'Rica', 'Ricarda', 'Rio', 'Rita', 'Roana', 'Roberta', 'Rocio', 'Roderiga', 'Roja', 'Roldana', 'Romana', 'Romina', 'RosIyn', 'Rosa', 'Rosalia', 'Rosalind', 'Rosalinda', 'Rosalinde', 'Rosaline', 'Rosalyn', 'Rosamar', 'Rosamaria', 'Rosario', 'Rosemarie', 'Roz', 'Rufa', 'Rufina', 'Sabana', 'Sabina', 'Sabrina', 'Salbatora', 'Salma', 'Salvadora', 'Samanta', 'Sancha', 'Sancia', 'Sara', 'Sarita', 'Saturnina', 'Savanna', 'Savannah', 'Segunda', 'Seina', 'Senalda', 'Senona', 'Serafina', 'Serena', 'Sevilla', 'Shoshana', 'Sierra', 'Silvana', 'Silvia', 'Silvina', 'Simona', 'Socorro', 'Sofía', 'Sofia', 'Sol', 'Solana', 'Solange', 'Soledad', 'Soledada', 'Solymar', 'Sonora', 'Stella Maris', 'Suelita', 'Susana', 'Suyai', 'Suzelly', 'Tabora', 'Tamara', 'Tanis', 'Tea', 'Tejana', 'Telma', 'Teodora', 'Terceira', 'Teresa', 'Teresita', 'Thaimy ', 'Thalia', 'Tia', 'Tierra', 'Tranquilla', 'Trella', 'Tulia', 'Ula', 'Uma', 'Ursulina', 'Usoa', 'Valencia', 'Valentina', 'Valeria', 'Vanesa', 'Ventana', 'Ventura', 'Verónica', 'Verda', 'Verdad', 'Veronica', 'Veta', 'Vicenta', 'Victoria', 'Vina', 'Violeta', 'Vionaika ', 'Virginia', 'Viridiana', 'Vittoria', 'Viviana', 'Waleska ', 'Wanda', 'Xalbadora', 'Xalvadora', 'Xaviera', 'Xenia', 'Xevera', 'Xeveria', 'Xiomara', 'Xiomarys ', 'Xochitl', 'Xuxa', 'Yadra', 'Yaineris ', 'Yaira ', 'Yajaira', 'Yanamaria', 'Yaneisy', 'Yanely', 'Yanire ', 'Yara', 'Yara ', 'Yashira', 'Yedid', 'Yelina ', 'Yesenia', 'Yizel', 'Yoana', 'Yolanda', 'Yonaidys ', 'Yosdalkis ', 'Yumaris', 'Yuricema ', 'Yvonne', 'Zaira', 'Zamora', 'Zandra', 'Zaneta', 'Zanetta', 'Zanita', 'Zapopa', 'Zarita', 'Zaviera', 'Zita', 'Zuleika', 'Zumac', 'Zurina', 'Zurine'];
  const nm3 = ['Álvarez', 'Ávila', 'Acosta', 'Acuña', 'Acuna', 'Agüero', 'Aguilar', 'Aguirre', 'Al Sadd', 'Albarez', 'Alonso', 'Alvarez', 'Angelo', 'Arce', 'Arcuri', 'Arias', 'Auriemma', 'Autino', 'Avelardez', 'Baggio', 'Baresi', 'Barrios', 'Baumann', 'Belasio', 'Bellucci', 'Benítez', 'Beneventi', 'Benitez', 'Beuchene', 'Bianchi', 'Blanco', 'Boedo', 'Bogatzian', 'Boni', 'Borroni', 'Bravo', 'Bregmann', 'Bruno', 'Buccho', 'Bullrich', 'Cáceres', 'Córdoba', 'Cabrera', 'Caceres', 'Calvo', 'Campos', 'Capon', 'Cardozo', 'Carrizo', 'Castiglione', 'Castillo', 'Castro', 'Chávez', 'Cocci', 'Cohen', 'Colombo', 'Conti', 'Cordero', 'Coronel', 'Correa', 'Costa', 'Cruz', 'Díaz', 'D\'Onofrio', 'Davide', 'De Luca', 'De Marco', 'De la Cruz', 'DeRose', 'Delgado', 'Dellucci', 'Devia', 'Di Donato', 'Di Natale', 'Di Stefano', 'Diaz', 'Domínguez', 'Dominguez', 'Duarte', 'Dukaroff', 'Echeverria', 'Endrizzi', 'Escobar', 'Esposito', 'Falcone', 'Fallaci', 'Fanucci', 'Farías', 'Feimann', 'Fernández', 'Fernandez', 'Ferrari', 'Ferreyra', 'Ferri', 'Fetuccini', 'Figueroa', 'Fiorentino', 'Flores', 'Folliero', 'Franco', 'French', 'Gómez', 'Gallo', 'García', 'Garcia', 'Gashi', 'Genovese', 'Genz', 'Gershkovich', 'Gil', 'Giménez', 'Gimenez', 'Giordano', 'Godoy', 'Gomez', 'González', 'Gonzalez', 'Gonzalezs', 'Greco', 'Grimoldi', 'Gutiérrez', 'Gutierrez', 'Guzmán', 'Guzman', 'Halder', 'Hernández', 'Hernandez', 'Herrera', 'Hirigoyen', 'Hoffman', 'Iadanza', 'Ibáñez', 'Ibañez', 'Ibanez', 'Iglesias', 'Juárez', 'Juarez', 'Kämpfer', 'Kirchner', 'López', 'Lacroze', 'Lavezzi', 'Ledesma', 'Leguizamón', 'Leiva', 'Lettiere', 'Li Fonti', 'Lo Duca', 'Loggia', 'Lombardi', 'Lombardo', 'Longo', 'Lopez', 'Lorenzo', 'Lori', 'Lousteau', 'Lucciano', 'Lucero', 'Luna', 'Méndez', 'Maidana', 'Malavia', 'Maldonado', 'Mancini', 'Manfrin', 'Manna', 'Mansilla', 'Marcelo', 'March', 'Marchesi', 'Marino', 'Martín', 'Martínez', 'Martin', 'Martinez', 'Mazzanti', 'Mazzi', 'Medina', 'Mele', 'Mendez', 'Mendoza', 'Milani', 'Milano', 'Miniati', 'Miranda', 'Molina', 'Monaldo', 'Montenegro', 'Morales', 'Moreau', 'Moreno', 'Moretti', 'Mosconi', 'Moyano', 'Muñoz', 'Munoz', 'Núñez', 'Núnez', 'Nair', 'Napolitano', 'Narzecian', 'Navarro', 'Nuñez', 'Nucci', 'Nunez', 'Ojeda', 'Olivera', 'Olleros', 'Onio', 'Ortíz', 'Ortiz', 'Otero', 'Páez', 'Pérez', 'Pagnotto', 'Palazzo', 'Palermo', 'Panicucci', 'Paz', 'Pazarella', 'Pellegrini', 'Peralta', 'Pereira', 'Pereyra', 'Perez', 'Pestalozzi', 'Piazza', 'Piccio', 'Pinto', 'Pirozzi', 'Pisani', 'Pisano', 'Ponce', 'Prieto', 'Pugliesi', 'Quiroga', 'Ríos', 'Ramírez', 'Ramirez', 'Ramos', 'Rey', 'Ricci', 'Rios', 'Rivas', 'Rivera', 'Rivero', 'Rizzo', 'Roca', 'Rodríguez', 'Rodriguez', 'Rojas', 'Roldán', 'Romano', 'Romero', 'Rossi', 'Rousse', 'Ruiz', 'Russo', 'Sánchez', 'Sabbatini', 'Sabella', 'Sagese', 'Sal', 'Sanchez', 'Santos', 'Scalabrini', 'Schiavone', 'Schmidt', 'Siciliano', 'Silva', 'Simone', 'Soria', 'Sosa', 'Soto', 'Suárez', 'Suarez', 'Tarella', 'Tocci', 'Toledo', 'Torres', 'Toscani', 'Toscano', 'Trevisan', 'Trevisani', 'Udinese', 'Udinesi', 'Urquiza', 'Vásquez', 'Vázquez', 'Valdéz', 'Varela', 'Vargas', 'Vazquez', 'Vecoli', 'Vega', 'Vera', 'Vidal', 'Villalba', 'Villar', 'Von Brocken', 'Zetticci', 'Zito'];


  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
