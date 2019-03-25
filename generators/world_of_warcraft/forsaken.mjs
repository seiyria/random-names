export default function forsaken() {
  let rnd;

  let rnd2;
  let rnd3;
  let
    rnd4;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Alex', 'Amada', 'Axel', 'Blight', 'Caesar', 'Camus', 'Chadli', 'Colton', 'Dario', 'Desmond', 'Dominic', 'Duke', 'Edge', 'Eike', 'Elliot', 'Franz', 'Freed', 'Jacques', 'Klaus', 'Landis', 'Mazus', 'Nadir', 'Nash', 'Neclord', 'Nicolas', 'Richmond', 'Ridley', 'Sid', 'Zamza', 'Icas', 'Semias', 'Ramin', 'Balsam', 'Autar', 'Nictis', 'Babbage', 'Zyler', 'Zayin', 'Arther', 'Aarbrok', 'Aaron', 'Abe', 'Abraham', 'Abram', 'Adolfo', 'Aedelwulf', 'Aethelwulf', 'Ahab', 'Ahlf', 'Alan', 'Alder', 'Alessandro', 'Alex', 'Alexander', 'Alexandro', 'Alf', 'Amity', 'Amos', 'Anderson', 'Andre', 'Andrean', 'Andrew', 'Andron', 'Angel', 'Ansel', 'Anselm', 'Anthony', 'Anton', 'Antonio', 'Arald', 'Arcadio', 'Archibald', 'Arden', 'Aries', 'Arion', 'Ariston', 'Armadyl', 'Armand', 'Armin', 'Armon', 'Arnald', 'Arnet', 'Arren', 'Arric', 'Arthur', 'Aryn', 'Ashnard', 'Austin', 'Balfour', 'Balrog', 'Balthazad', 'Balthazar', 'Baltus', 'Bandos', 'Barald', 'Bardawulf', 'Bardolph', 'Bardulf', 'Barion', 'Bariston', 'Barmin', 'Barmon', 'Barnabas', 'Barnald', 'Barnet', 'Barney', 'Barrett', 'Barric', 'Bart', 'Barther', 'Bartholomew', 'Bartolomew', 'Baryn', 'Basel', 'Basil', 'Bauhaus', 'Belmont', 'Ben', 'Benijah', 'Benjamin', 'Beorhtwulf', 'Berald', 'Bergan', 'Berhtulf', 'Berion', 'Bermin', 'Bermon', 'Bernald', 'Bernet', 'Berric', 'Berriston', 'Berther', 'Bertolf', 'Bertulf', 'Beryl', 'Beryn', 'Bess', 'Bethor', 'Biggs', 'Bill', 'Bingham', 'Bishop', 'Blade', 'Booker', 'Borgan', 'Boris', 'Bosch', 'Bowyer', 'Boyd', 'Brady', 'Brass', 'Brett', 'Brian', 'Brock', 'Brody', 'Brogan', 'Brom', 'Bruno', 'Brutus', 'Buck', 'Cain', 'Caine', 'Caineghis', 'Calhoun', 'Callum', 'Calvin', 'Campbell', 'Camus', 'Candra', 'Cane', 'Carlos', 'Carter', 'Celvin', 'Cerberus', 'Chandler', 'Charles', 'Charlie', 'Charlies', 'Cheng', 'Chris', 'Christian', 'Christof', 'Christofer', 'Christoffer', 'Christoph', 'Christopher', 'Claude', 'Clayton', 'Clover', 'Cluny', 'Cobb', 'Coinin', 'Colby', 'Cole', 'Colin', 'Collin', 'Colton', 'Conan', 'Conner', 'Connor', 'Conrad', 'Corey', 'Cormath', 'Coyote', 'Cromwell', 'Cuetlachtli', 'Cyrus', 'Dagger', 'Dalton', 'Dan', 'Dane', 'Danforth', 'Daniel', 'Darald', 'Darion', 'Dariston', 'Darmin', 'Darmon', 'Darnald', 'Darnet', 'Darren', 'Darric', 'Darther', 'Daryl', 'Daryn', 'Dasha', 'Dave', 'Davey', 'David', 'Dawn', 'De Luca', 'Decker', 'Deegon', 'Delmor', 'Dennis', 'Derak', 'Derald', 'Deran', 'Derion', 'Deriston', 'Dermin', 'Dermon', 'Dernald', 'Dernet', 'Derric', 'Derther', 'Deryn', 'Desmond', 'Devdan', 'Dexter', 'Diego', 'Dillinger', 'Dirge', 'Dolph', 'Donovan', 'Douglas', 'Doyle', 'Drake', 'Draven', 'Driscoll', 'Duffy', 'Duncan', 'Dunstan', 'Dylan', 'Ed', 'Edd', 'Eddie', 'Eddy', 'Edward', 'Elias', 'Elliot', 'Embry', 'Enid', 'Ephraim', 'Eric', 'Ernest', 'Errol', 'Ershin', 'Evan', 'Ewan', 'Ezekiel', 'Faelan', 'Faith', 'Falcon', 'Faolan', 'Faranell', 'Farrar', 'Farthing', 'Fausto', 'Fay', 'Federico', 'Felgrom', 'Felix', 'Fenrisulfr', 'Fenrisulfur', 'Fernard', 'Fillin', 'Finch', 'Flinch', 'Flint', 'Foley', 'Forrester', 'Fowley', 'Fran', 'Frances', 'Francis', 'Francisco', 'Frank', 'Franklin', 'Franklyn', 'Fred', 'Frederick', 'Frederico', 'Fuely', 'Fynn', 'Gaepora', 'Gannon', 'Ganon', 'Ganondorf', 'Gareth', 'Garnet', 'Garr', 'Gatrie', 'Gavin', 'Gavner', 'Gayle', 'Geegagis', 'Geoffrey', 'Geofrey', 'George', 'Gerome', 'Gerwulf', 'Gharnef', 'Ghirahim', 'Gifford', 'Gilbert', 'Gillian', 'Gilroy', 'Glen', 'Gollum', 'Gordon', 'Gordul', 'Gothmog', 'Grace', 'Graham', 'Grant', 'Greg', 'Gregor', 'Gregorio', 'Gregory', 'Greil', 'Grey', 'Grieg', 'Grim', 'Grimm', 'Grogan', 'Groose', 'Gunter', 'Gunther', 'Gus', 'Haar', 'Hades', 'Hamil', 'Hanklin', 'Hans', 'Harland', 'Harold', 'Harry', 'Hartwell', 'Hawes', 'Heath', 'Heller', 'Hemming', 'Herb', 'Herbert', 'Herrick', 'Hiro', 'Hogan', 'Hook', 'Horace', 'Hoshi', 'Howley', 'Hrodulf', 'Hrodwulf', 'Hrolf', 'Hrolfr', 'Hubert', 'Hugh', 'Humbert', 'Hunt', 'Hunter', 'Hyde', 'Ian', 'Ike', 'Ingolf', 'Ingolfr', 'Inigo', 'Irving', 'Isaac', 'Ismael', 'Ivailo', 'Ivan', 'Ivaylo', 'Jack', 'Jackal', 'Jacob', 'Jaggar', 'James', 'Jamie', 'Jamil', 'Jarom', 'Jasmine', 'Jason', 'Javier', 'Jay', 'Jecht', 'Jeff', 'Jeremiah', 'Jeremie', 'Jeremy', 'Jericho', 'Jett', 'Jim', 'Jimmy', 'Jimothy', 'Jiro', 'John', 'Johnathan', 'Johnson', 'Jon', 'Jonathan', 'Jones', 'Jorah', 'Josef', 'Joseph', 'Josh', 'Joshua', 'Josiah', 'Kai', 'Kain', 'Kaine', 'Kalvin', 'Kane', 'Karn', 'Kear', 'Kellam', 'Kelvin', 'Kenyon', 'Kevin', 'Kieran', 'Kira', 'Kodan', 'Konrad', 'Koray', 'Korey', 'Kurt', 'Kurthnaga', 'Kyle', 'Landon', 'Lankester', 'Lansire', 'Larc', 'Lars', 'Laurent', 'Lawrence', 'Lawson', 'Lazarus', 'Leo', 'Leon', 'Lewis', 'Lex', 'Lexx', 'Liam', 'Lincoln', 'Liulfr', 'Lobo', 'Lonan', 'Lope', 'Lothian', 'Louis', 'Loup', 'Louvel', 'Lovel', 'Lovell', 'Lowell', 'Luca', 'Lucas', 'Lucian', 'Luis', 'Luka', 'Luke', 'Lupin', 'Lupus', 'Luther', 'Lycaon', 'Lycurgus', 'Lydell', 'Lydon', 'Lykaon', 'MacLaren', 'Mace', 'Mackie', 'Maclean', 'Magan', 'Malakai', 'Malaroy', 'Malcom', 'Malthus', 'Mano', 'Marald', 'Marc', 'Marcel', 'Marcus', 'Margeuse', 'Marion', 'Mariston', 'Marley', 'Marmin', 'Marmon', 'Marnald', 'Marnet', 'Marric', 'Marrok', 'Marth', 'Marther', 'Martin', 'Martyn', 'Mason', 'Mathew', 'Matt', 'Matthew', 'Max', 'Maximillion', 'Maynord', 'McCoy', 'Mebeth', 'Mei', 'Mennet', 'Merle', 'Merric', 'Michael', 'Mick', 'Mickey', 'Mickie', 'Mike', 'Miles', 'Milligan', 'Moe', 'Montego', 'Mordecai', 'Morgan', 'Morganus', 'Morley', 'Morris', 'Mort', 'Morten', 'Mortimer', 'Nathan', 'Nathaniel', 'Nealuchi', 'Niccolo', 'Nicholas', 'Nick', 'Nico', 'Nigel', 'Nolan', 'Norm', 'Norman', 'Ogma', 'Oliver', 'Orkney', 'Orson', 'Osald', 'Oscar', 'Osion', 'Osiston', 'Oskar', 'Osmin', 'Osmon', 'Osnald', 'Osnet', 'Osric', 'Osther', 'Osyn', 'Otsoa', 'Otsoko', 'Owain', 'Pablo', 'Parqual', 'Patrick', 'Paul', 'Pavel', 'Pelleas', 'Penn', 'Pennington', 'Peony', 'Percival', 'Persephone', 'Pete', 'Phelan', 'Philip', 'Pierce', 'Pontius', 'Preston', 'Quin', 'Radcliffe', 'Radulf', 'Radulfr', 'Raedwulf', 'Rafe', 'Rahl', 'Raleigh', 'Ralf', 'Ralph', 'Ralphie', 'Rand', 'Randal', 'Randall', 'Randell', 'Randolf', 'Randolfr', 'Randolph', 'Randulf', 'Randulfr', 'Randwulf', 'Randy', 'Rannulf', 'Rannulfr', 'Rannulfus', 'Ransome', 'Ranulf', 'Ranulfr', 'Ranulph', 'Raoul', 'Rassler', 'Rasso', 'Raul', 'Raulf', 'Ray', 'Reade', 'Red', 'Reddas', 'Reed', 'Remus', 'Rhys', 'Richard', 'Rico', 'Riddick', 'Rob', 'Roberick', 'Robert', 'Robin', 'Rocky', 'Rodald', 'Roderic', 'Roderick', 'Roderiston', 'Rodion', 'Rodmin', 'Rodmon', 'Rodnald', 'Rodnet', 'Rodolf', 'Rodolfo', 'Rodolph', 'Rodther', 'Rodyn', 'Roffe', 'Roger', 'Rolf', 'Rollo', 'Ron', 'Ronald', 'Ronan', 'Ronion', 'Roniston', 'Ronmin', 'Ronmon', 'Ronnald', 'Ronnet', 'Ronric', 'Ronther', 'Ronyn', 'Ross', 'Roth', 'Roul', 'Roy', 'Royd', 'Roz', 'Rudi', 'Rudolf', 'Rudolph', 'Rudolphus', 'Rudy', 'Rupert', 'Rusty', 'Ruud', 'Ryan', 'Saku', 'Salazar', 'Saltain', 'Sam', 'Samuel', 'Sandulf', 'Sawyer', 'Sean', 'Sebastian', 'Seff', 'Serratus', 'Seth', 'Shane', 'Shaun', 'Shaw', 'Shawn', 'Shawne', 'Shay', 'Sheldon', 'Sheng', 'Shymm', 'Simon', 'Skrimir', 'Smith', 'Stein', 'Stephan', 'Stephen', 'Steven', 'Stewart', 'Stockton', 'Subodh', 'Sullivan', 'Sven', 'Tallow', 'Tauroneo', 'Terrence', 'Terri', 'Thad', 'Thaddeus', 'Theo', 'Theodore', 'Thomas', 'Thorin', 'Thrain', 'Tibald', 'Tibarn', 'Tim', 'Timmy', 'Timothy', 'Tobhias', 'Tobias', 'Toby', 'Tom', 'Tommie', 'Tommy', 'Tony', 'Tor', 'Tormod', 'Trald', 'Trion', 'Triston', 'Trmin', 'Trmon', 'Trnald', 'Trnet', 'Troy', 'Trric', 'Trther', 'Tryn', 'Turk', 'Tybalt', 'Tyler', 'Ulbrecht', 'Ulf', 'Ulfang', 'Ulfgangur', 'Ulfhrafn', 'Ulfr', 'Ulfric', 'Ulfur', 'Ulric', 'Ulrick', 'Valentine', 'Vance', 'Varg', 'Velvel', 'Victor', 'Vince', 'Virion', 'Vlad', 'Volke', 'Voss', 'Vossler', 'Vuk', 'Vukasin', 'Walker', 'Wallace', 'Walter', 'Ward', 'Wedge', 'Weiss', 'Welch', 'Weldon', 'Wench', 'Wendham', 'Will', 'Willas', 'William', 'Wolf', 'Wolfe', 'Wolffang', 'Wolfgang', 'Wolfgrim', 'Wolfgrimm', 'Wolfram', 'Wulfric', 'Wulfrun', 'Xavier', 'Yarly', 'York', 'Yuri', 'Zach', 'Zachariah', 'Zane', 'Zavier', 'Zeeb', 'Zeff', 'Zeus', 'Zev', 'Zog'];
  const nm2 = ['Adrienne', 'Agnes', 'Ayda', 'Annallee', 'Elza', 'Emilia', 'Jillia', 'Leona', 'Lucia', 'Raura', 'Elaine', 'Emily', 'Elenor', 'Sarah', 'Belle', 'Estella', 'Luce', 'Lulu', 'Sana', 'Ameria', 'Chein', 'Eusmil', 'Servillah', 'Sisuca', 'Nifsara', 'Abbigail', 'Abby', 'Abbygail', 'Abe', 'Abigail', 'Abygail', 'Acantha', 'Adela', 'Adelina', 'Adeline', 'Adora', 'Ady', 'Aelenor', 'Agatha', 'Aldith', 'Aldusa', 'Alexandra', 'Alexis', 'Alexxandra', 'Alice', 'Alina', 'Almedha', 'Amanda', 'Amelia', 'Amethyst', 'Amity', 'Amoret', 'Anastasia', 'Angel', 'Angela', 'Angelina', 'Angeline', 'Anju', 'Ansel', 'Anya', 'Ara', 'Aranae', 'Arcadio', 'Ariadne', 'Arian', 'Ariana', 'Ariane', 'Arianne', 'Armenia', 'Asema', 'Ashen', 'Ashera', 'Aster', 'Aswang', 'Aura', 'Autumn', 'Avice', 'Azura', 'Baize', 'Barbara', 'Basia', 'Basilea', 'Bathilda', 'Beatrice', 'Beatrix', 'Bela', 'Belinda', 'Belladonna', 'Bellatrix', 'Belvina', 'Bess', 'Betsy', 'Birgite', 'Birgitte', 'Blake', 'Bonnie', 'Bowen', 'Brandy', 'Bree', 'Brett', 'Bridget', 'Brie', 'Brigite', 'Brigitte', 'Brooke', 'Bruna', 'Bruxa', 'Caeda', 'Caitrin', 'Calamity', 'Callow', 'Callum', 'Camden', 'Camilla', 'Candra', 'Carey', 'Carletta', 'Carline', 'Carmilla', 'Carmina', 'Carol', 'Carolai', 'Carolain', 'Carolaine', 'Caroline', 'Carolyn', 'Carrie', 'Cassandra', 'Cat', 'Cecil', 'Cecile', 'Cecille', 'Celestria', 'Celina', 'Cellica', 'Chalice', 'Charlie', 'Charna', 'Cherry', 'Chloe', 'Christine', 'Churel', 'Cinder', 'Cindy', 'Claerice', 'Clarice', 'Clarisse', 'Clarita', 'Clayton', 'Clerice', 'Clover', 'Colby', 'Constance', 'Consuela', 'Crimson', 'Cyan', 'Cybil', 'Dalrymple', 'Damsel', 'Dane', 'Danielle', 'Darcy', 'Daria', 'Darla', 'Darthalia', 'Dasha', 'Dawn', 'Dayle', 'Deidra', 'Delaney', 'Delinda', 'Dementia', 'Demonia', 'Deze', 'Diamanda', 'Dora', 'Dream', 'Duffy', 'Earlene', 'Ebony', 'Echo', 'Edith', 'Edwina', 'Eirika', 'Elaine', 'Eleanor', 'Eleanore', 'Elegia', 'Elena', 'Elenor', 'Elisa', 'Elise', 'Eliza', 'Elizabeth', 'Elize', 'Elleanor', 'Ellen', 'Ellenor', 'Ellie', 'Elly', 'Elphina', 'Elreth', 'Ember', 'Emily', 'Emma', 'Enid', 'Entropy', 'Enya', 'Erin', 'Eris', 'Errol', 'Ertha', 'Essence', 'Estrilda', 'Eternity', 'Eunice', 'Eva', 'Faith', 'Fatima', 'Fay', 'Felicia', 'Felita', 'Fina', 'Finnula', 'Fiona', 'Floris', 'Frita', 'Fynn', 'Garnet', 'Gayle', 'Gem', 'Genavie', 'Genevere', 'Gilian', 'Gillian', 'Gina', 'Ginger', 'Ginny', 'Glenda', 'Glennis', 'Glimmer', 'Glinda', 'Golda', 'Gossamer', 'Gothena', 'Grace', 'Grecia', 'Gretchen', 'Grimina', 'Gundred', 'Gunnora', 'Gwen', 'Gwench', 'Gwenna', 'Gwin', 'Habitha', 'Halley', 'Hanna', 'Hannah', 'Harker', 'Harley', 'Harlot', 'Hartwell', 'Haunild', 'Heath', 'Heather', 'Hebkya', 'Helen', 'Helena', 'Helewise', 'Helga', 'Hellen', 'Hilda', 'Holly', 'Hook', 'Hope', 'Hortensia', 'Ida', 'Idonea', 'Ilene', 'Ilona', 'Ilta', 'Ilya', 'Imeena', 'Imperia', 'Isabella', 'Isabelle', 'Isobel', 'Ivory', 'Jacqueline', 'Jacqui', 'Jaezel', 'Jamesina', 'Jane', 'Janey', 'Janice', 'Jasmine', 'Jay', 'Jayde', 'Jazael', 'Jazel', 'Jean', 'Jena', 'Jennete', 'Jennie', 'Jennifer', 'Jenny', 'Jessica', 'Jezebel', 'Jezel', 'Jinelle', 'Jocelyn', 'Johanna', 'Jones', 'Jora', 'Jose', 'Josiah', 'Josphine', 'Jude', 'Juliana', 'June', 'Juniper', 'Kafei', 'Kai', 'Kaige', 'Kali', 'Kallee', 'Kandyl', 'Kari', 'Karmin', 'Kassidy', 'Kat', 'Katelyn', 'Kath', 'Katharina', 'Kathleen', 'Kathryn', 'Katia', 'Katie', 'Katreena', 'Katrina', 'Kay', 'Kayla', 'Kayren', 'Keena', 'Keila', 'Kelsey', 'Kerry', 'Kiera', 'Kindle', 'Kira', 'Kirsten', 'Kitty', 'Kristen', 'Kyley', 'La Rue', 'Lace', 'Lacy', 'Lament', 'Lashley', 'Lass', 'Lauren', 'Lavinia', 'Layla', 'Leah', 'Leeka', 'Leeta', 'Leslie', 'Lettice', 'Liecia', 'Lilith', 'Lilleth', 'Lillian', 'Lillith', 'Limmy', 'Linde', 'Linnea', 'Linota', 'Lirit', 'Lisa', 'Lithia', 'Liz', 'Lizbeth', 'Lorelei', 'Lorna', 'Louise', 'Luana', 'Lucia', 'Lucille', 'Lucina', 'Lucretia', 'Lucy', 'Lulu', 'Luna', 'Lusha', 'Lycia', 'Lyndis', 'Lynn', 'Maggie', 'Magwina', 'Majora', 'Maleficent', 'Malissa', 'Marcia', 'Margaret', 'Margorie', 'Maria', 'Marian', 'Marianne', 'Marion', 'Marjory', 'Marrielle', 'Martha', 'Martine', 'Mary', 'Maxine', 'May', 'Mayze', 'Mazelina', 'Megan', 'Meghan', 'Mei', 'Melania', 'Melanie', 'Memory', 'Mercy', 'Merielle', 'Meril', 'Merill', 'Meryl', 'Meryll', 'Mickey', 'Mierelle', 'Miley', 'Millie', 'Mindy', 'Minerva', 'Mirage', 'Mirelle', 'Mirielle', 'Misericordia', 'Mist', 'Mizette', 'Montenegro', 'Moon', 'Moonlight', 'Morgan', 'Morgana', 'Morrigan', 'Morticia', 'Morwenna', 'Mystery', 'Nadine', 'Nance', 'Nancy', 'Narcissa', 'Narween', 'Natasha', 'Nathan', 'Naxxremis', 'Naxxy', 'Naxy', 'Nereza', 'Nesta', 'Nia', 'Nicky', 'Nina', 'Noira', 'Noreen', 'Norway', 'Nylora', 'Olga', 'Oma', 'Opal', 'Opaline', 'Ophelia', 'Orkney', 'Paige', 'Pamela', 'Pandora', 'Parella', 'Parker', 'Patrina', 'Pavel', 'Pearl', 'Peggy', 'Persephone', 'Petra', 'Petrine', 'Phaedra', 'Philippa', 'Phoebe', 'Porcelain', 'Princessa', 'Priscilla', 'Quintessa', 'Quistis', 'Quota', 'Qutie', 'Rachel', 'Rachelle', 'Rain', 'Raina', 'Ramona', 'Ramonita', 'Rapture', 'Rashida', 'Raven', 'Rebekah', 'Refia', 'Renee', 'Renena', 'Reyna', 'Rhyker', 'Ricca', 'Richolda', 'Riley', 'Roberta', 'Robin', 'Roesia', 'Romani', 'Rona', 'Rosary', 'Rose', 'Rosetta', 'Roshia', 'Rowena', 'Roy', 'Rubella', 'Rubia', 'Ruby', 'Rue', 'Ruth', 'Sabelina', 'Sable', 'Sadie', 'Saige', 'Sally', 'Sam', 'Samanta', 'Samantha', 'Samara', 'Sandy', 'Sara', 'Sarah', 'Sarias', 'Sarina', 'Satin', 'Sawyer', 'Scarlet', 'Scarlett', 'Secret', 'Seguine', 'Senka', 'Seraphim', 'Severa', 'Severina', 'Sharon', 'Sheik', 'Sheila', 'Shelene', 'Shelly', 'Sherie', 'Sibyl', 'Simone', 'Siouxsie', 'Sophia', 'Steven', 'Stewart', 'Strawberri', 'Sully', 'Susannah', 'Suspiria', 'Sybil', 'Sydney', 'Sylvie', 'Tabitha', 'Tantra', 'Tara', 'Tatiana', 'Tawny', 'Terri', 'Tetra', 'Tharja', 'Theda', 'Thelma', 'Theola', 'Thistle', 'Titania', 'Tricket', 'Trik', 'Trisha', 'Twilight', 'Ukara', 'Ulsa', 'Uma', 'Umona', 'Upiorzyca', 'Ursen', 'Ursin', 'Ursula', 'Ursyn', 'Valentine', 'Valerie', 'Velma', 'Velora', 'Velory', 'Velvet', 'Venya', 'Veronika', 'Vervain', 'Victoria', 'Viktoria', 'Violet', 'Vivian', 'Whisper', 'Wilhelmina', 'Willow', 'Wilma', 'Winona', 'Wish', 'Wynne', 'Wynona', 'Wysteria', 'Xanthe', 'Xenia', 'Xoxo', 'Xyla', 'Yellen', 'Yellow', 'Yenn', 'Yoko', 'Yolanda', 'Yureka', 'Zamah', 'Zaphara', 'Zarise', 'Zeldalia', 'Zen', 'Zephyr', 'Zillah', 'Zima', 'Zinge', 'Zofia', 'Zolona'];
  const nm3 = ['Abraham', 'Abram', 'Acheron', 'Acton', 'Adam', 'Addington', 'Adlam', 'Ainsworth', 'Alabaster', 'Alby', 'Alden', 'Alder', 'Alistair', 'Allen', 'Allerton', 'Alliestar', 'Alston', 'Altham', 'Alvingham', 'Amarant', 'Amaranth', 'Anderton', 'Andrean', 'Annison', 'Antone', 'Appleton', 'Aranas', 'Arc', 'Arch', 'Archer', 'Argent', 'Aries', 'Ark', 'Arlin', 'Armstead', 'Arnes', 'Artemis', 'Asema', 'Ashes', 'Asheton', 'Ashley', 'Ashton', 'Astley', 'Atherton', 'Atkins', 'Atterton', 'Atwood', 'Auron', 'Autumn', 'Balo', 'Balthier', 'Bane', 'Barclay', 'Barlow', 'Barney', 'Barone', 'Barov', 'Barrie', 'Bartholomew', 'Bartlett', 'Barton', 'Bartram', 'Bates', 'Bauhaus', 'Beasant', 'Beckwith', 'Belzebob', 'Benson', 'Bentham', 'Bentley', 'Berkeley', 'Beverly', 'Bing', 'Birkenhead', 'Blackwood', 'Blade', 'Blakemore', 'Blankley', 'Bloch', 'Blythe', 'Bourne', 'Bradford', 'Bradley', 'Bradly', 'Bradshaw', 'Brady', 'Brandon', 'Branson', 'Braxton', 'Breeden', 'Brent', 'Brink', 'Bristol', 'Brooks', 'Brown', 'Brownell', 'Browning', 'Brownrigg', 'Bryce', 'Buckley', 'Bunce', 'Burbridge', 'Burch', 'Burlingame', 'Burton', 'Bush', 'Butler', 'Byron', 'Call', 'Callow', 'Camden', 'Camus', 'Carkad', 'Carlisle', 'Carlton', 'Carlyle', 'Carmine', 'Castleton', 'Chalice', 'Chandler', 'Chaos', 'Charles', 'Charlton', 'Chatham', 'Cheek', 'Chester', 'Chesterhill', 'Cholmondeley', 'Chrom', 'Churchill', 'Cidolfus', 'Clapham', 'Clare', 'Claridge', 'Clark', 'Clarke', 'Clayden', 'Clayton', 'Clemons', 'Clifford', 'Clifton', 'Clinton', 'Clive', 'Cloven', 'Colby', 'Colton', 'Compton', 'Coombs', 'Cooper', 'Copeland', 'Cotton', 'Crane', 'Crawford', 'Crompton', 'Cromwell', 'Crowder', 'Crowe', 'Crowley', 'Crutchley', 'Cullen', 'Currington', 'Curthas', 'Dalton', 'Damien', 'Damon', 'Dante', 'Darby', 'Darkwalker', 'Darrow', 'Darth', 'Davenport', 'Dawson', 'Dayton', 'Deighton', 'Demien', 'Denholm', 'Derrington', 'Devdan', 'Devine', 'Dexter', 'Dhampir', 'Digby', 'Doan', 'Drace', 'Drachen', 'Draegan', 'Drake', 'Drakkar', 'Drakul', 'Draven', 'Dred', 'Driscoll', 'Dryden', 'Dudley', 'Duke', 'Dukes', 'Earle', 'Eastaughffe', 'Eastoft', 'Edge', 'Edras', 'Eldon', 'Eldritch', 'Eliot', 'Elton', 'Emmit', 'Emsworth', 'England', 'Enigma', 'Ephraim', 'Ethel', 'Eulisses', 'Evans', 'Everit', 'Fane', 'Fark', 'Farnham', 'Farnsley', 'Farthing', 'Fawcett', 'Fenner', 'Finch', 'Fintallas', 'Firion', 'Fisc', 'Fiske', 'Fletcher', 'Forrest', 'Fowler', 'Foy', 'Franks', 'Frederik', 'Fromir', 'Fry', 'Frye', 'Fulton', 'Gabranth', 'Gabriel', 'Gail', 'Gale', 'Gant', 'Garfield', 'Garret', 'Garrett', 'Garrick', 'Garside', 'Garthside', 'Gartside', 'Gastly', 'Glacier', 'Gladstone', 'Gloom', 'Gnash', 'Godfrey', 'Godwin', 'Goodwin', 'Gotham', 'Graeme', 'Graham', 'Grail', 'Granger', 'Granite', 'Graves', 'Gregorian', 'Grendel', 'Gresham', 'Greymane', 'Griffin', 'Grim', 'Grimsford', 'Grisette', 'Grissom', 'Hackney', 'Hades', 'Hagey', 'Hailey', 'Hale', 'Haley', 'Halgar', 'Hall', 'Hallewell', 'Halsey', 'Hamet', 'Hamilton', 'Hamlet', 'Hammett', 'Hammond', 'Hampton', 'Hansen', 'Hanzel', 'Harding', 'Harley', 'Harrington', 'Harrison', 'Hartford', 'Hartwell', 'Hastings', 'Hayden', 'Hayes', 'Hayhurst', 'Hayley', 'Hayward', 'Heinrik', 'Helton', 'Hildom', 'Hinott', 'Hitch', 'Hogan', 'Holmes', 'Holt', 'Holton', 'Home', 'Hornsby', 'Huckabee', 'Hunter', 'Huxley', 'Iceshard', 'Ike', 'Incubus', 'Inigo', 'Irvine', 'Isaac', 'Isaiah', 'Jacks', 'Jasper', 'Jaymes', 'Jeffcoat', 'Jeronimo', 'Jett', 'Jinx', 'Johnson', 'Joshua', 'Kains', 'Kaiser', 'Karayan', 'Kargal', 'Karn', 'Karver', 'Keats', 'Keetes', 'Kellam', 'Kellen', 'Kelles', 'Kells', 'Kelsey', 'Kendal', 'Kendall', 'Kent', 'Kerwin', 'Kieran', 'Killian', 'Kimberley', 'Kimberly', 'Kirby', 'Klark', 'Knotley', 'Knottley', 'Labyrinth', 'Laguna', 'Lancaster', 'Landon', 'Lang', 'Langdon', 'Langley', 'Lankester', 'Larc', 'Larsa', 'Law', 'Layre', 'Lazarus', 'Lea', 'Lee', 'Leighton', 'Lester', 'Leviathan', 'Levine', 'Lewis', 'Lexx', 'Lincoln', 'Lindsay', 'Lindsey', 'Link', 'Livingstone', 'Lloyd', 'Locke', 'Loki', 'Loom', 'Lore', 'Louis', 'Luca', 'Lucifer', 'Lucius', 'Luke', 'Luther', 'Lux', 'Luxford', 'Lynk', 'Lynx', 'Mabbott', 'Mace', 'Marks', 'Marlowe', 'Marrow', 'Marth', 'Marthand', 'Mathian', 'Maulray', 'Maxim', 'McQueen', 'Melling', 'Melton', 'Mendenhall', 'Merton', 'Middleton', 'Mildenhall', 'Milton', 'Mitch', 'Mitchell', 'Mitrik', 'Mollor', 'Montague', 'Moore', 'Mordan', 'Morden', 'Morley', 'Morren', 'Morrow', 'Mortaim', 'Morton', 'Murray', 'Myerscough', 'Nash', 'Naxxremis', 'Nayte', 'Nealuchi', 'Nebula', 'Netley', 'Newberry', 'Newbery', 'Newbury', 'Newcomb', 'Nibley', 'Nicholai', 'Nightshade', 'Nightwind', 'Nitely', 'Noire', 'Noonan', 'Norman', 'Norton', 'Notleigh', 'Notley', 'Nottley', 'Nunnally', 'Nutlea', 'Nutlee', 'Oakley', 'Obsidian', 'Ogden', 'Oldham', 'Olson', 'Omar', 'Omen', 'Orfeo', 'Osgood', 'Otto', 'Outerbridge', 'Owings', 'Oxworth', 'Paddle', 'Paddley', 'Padley', 'Panther', 'Parch', 'Parrish', 'Payne', 'Payton', 'Peddle', 'Penney', 'Penny', 'Peregrine', 'Perry', 'Petrik', 'Peyton', 'Pickering', 'Pickman', 'Pinkerton', 'Pleasance', 'Prescott', 'Presley', 'Preston', 'Prince', 'Pritchard', 'Prysm', 'Puck', 'Quint', 'Quway', 'Quye', 'Rabonne', 'Ragnor', 'Raims', 'Rakshasas', 'Ramsay', 'Ramsey', 'Rassler', 'Rave', 'Raven', 'Read', 'Redcap', 'Redescu', 'Reed', 'Reeve', 'Reeves', 'Reid', 'Reks', 'Remington', 'Renel', 'Requiem', 'Rexx', 'Reyson', 'Rhobart', 'Rhys', 'Richard', 'Richmond', 'Ridley', 'Riley', 'Rischer', 'Rivers', 'Rodney', 'Rogue', 'Romulus', 'Roscoe', 'Rosemond', 'Ross', 'Rowley', 'Royal', 'Royston', 'Rudge', 'Rudges', 'Rumlar', 'Rusk', 'Rutherford', 'Rutland', 'Rylan', 'Sabre', 'Sagar', 'Saldean', 'Salem', 'Salvodor', 'Salvodore', 'Salvotor', 'Salvotore', 'Sampson', 'Samuel', 'Sarkhoff', 'Satan', 'Savant', 'Sawyer', 'Sax', 'Scias', 'Seaton', 'Seguine', 'Seifer', 'Sephiran', 'Seth', 'Seymour', 'Shadow', 'Sharman', 'Shayde', 'Shearman', 'Shelby', 'Sheldon', 'Shelley', 'Shelly', 'Sherlock', 'Sherman', 'Sherwood', 'Shirley', 'Shurman', 'Sidney', 'Sisk', 'Smit', 'Smith', 'Smithe', 'Smither', 'Smithers', 'Smithies', 'Smithy', 'Smoky', 'Smyth', 'Smythe', 'Snape', 'Snowdon', 'Soames', 'Soren', 'Southey', 'Spalding', 'Spaulding', 'Spooner', 'Springfield', 'Stafford', 'Stamper', 'Stampes', 'Stanford', 'Stanley', 'Stansfield', 'Stanton', 'Starbeeze', 'Steele', 'Steenwick', 'Stern', 'Stevens', 'Stevenson', 'Stockton', 'Stone', 'Stonebridge', 'Storm', 'Strain', 'Stratford', 'Stryker', 'Summers', 'Sutherland', 'Sutton', 'Swail', 'Swailes', 'Swale', 'Swales', 'Sweat', 'Sweet', 'Sweete', 'Swet', 'Swett', 'Sydney', 'Sykes', 'Synth', 'Tack', 'Talon', 'Tattersall', 'Tempest', 'Thackeray', 'Theodor', 'Theodore', 'Theodoric', 'Thor', 'Thorne', 'Thornton', 'Thorp', 'Thorpe', 'Thunder', 'Thyme', 'Tidus', 'Tiffens', 'Tindall', 'Tompkins', 'Torp', 'Townend', 'Townsend', 'Tremayne', 'Trias', 'Tristan', 'Trixter', 'Trollope', 'Twynam', 'Tyndall', 'Uberto', 'Ulrik', 'Umbri', 'Upir', 'Upton', 'Vail', 'Valhalla', 'Van Brunt', 'Van Halen', 'Van Talen', 'Vance', 'Vaughn', 'Vayne', 'Vesh', 'Vexacion', 'Vexx', 'Victor', 'Viktor', 'Virion', 'Vome', 'Von Croy', 'Voss', 'Vossler', 'Wahl', 'Walker', 'Walthorn', 'Ward', 'Warnam', 'Warren', 'Watt', 'Watterly', 'Webb', 'Weiss', 'Weldon', 'Wendell', 'Wendham', 'Weston', 'Whatley', 'Wheatleigh', 'Wheatley', 'Wheeler', 'Whiteley', 'Whitewall', 'Whitley', 'Whitney', 'Williams', 'Winmore', 'Wither', 'Withers', 'Wolf', 'Wright', 'Wyther', 'Xander', 'Xensor', 'Xix', 'Yao', 'Yardley', 'Yeardley', 'Ymo', 'Yulis', 'Zain', 'Zaine', 'Zander', 'Zayn', 'Zayne', 'Zeddicus', 'Zelgius', 'Zell', 'Zelroth', 'Zen', 'Zeph', 'Zero', 'Zeus', 'Zindo', 'Zorander', 'Zul'];
  const nm4 = ['Blight', 'Bone', 'Curse', 'Death', 'Decay', 'Decaying', 'Doom', 'Fading', 'Grim', 'Grims', 'Gut', 'Gallow', 'Hallow', 'Hollow', 'Horror', 'Hart', 'Hate', 'Heart', 'Life', 'Lost', 'Moon', 'Night', 'Pain', 'Plague', 'Poison', 'Rotten', 'Scourge', 'Shackle', 'Shadow', 'Skull', 'Sleep', 'Sleeping', 'Snake', 'Soul', 'Spirit', 'Tomb', 'Torment', 'Toxic', 'Venom', 'Viral', 'Virus', 'Void', 'Wind'];
  const nm5 = ['bane', 'bearer', 'binder', 'biter', 'bringer', 'caller', 'creator', 'defiler', 'demise', 'destroyer', 'end', 'fever', 'flesh', 'ford', 'fury', 'griever', 'harvester', 'hate', 'hater', 'meat', 'menace', 'pest', 'reaper', 'runner', 'sinew', 'slicer', 'spell', 'ton', 'walker', 'weeper', 'well', 'wrencher', 'writhe', 'wyrm', 'glare', 'blood', 'fall', 'song', 'gloom'];


  const i = Math.floor(Math.random() * 10);
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    rnd3 = Math.floor(Math.random() * nm4.length);
    rnd4 = Math.floor(Math.random() * nm5.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      if (i < 5) {
        names = `${nm2[rnd]} ${nm4[rnd3]}${nm5[rnd4]}`;
      } else {
        names = `${nm2[rnd]} ${nm3[rnd2]}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      if (i < 5) {
        names = `${nm1[rnd]} ${nm4[rnd3]}${nm5[rnd4]}`;
      } else {
        names = `${nm1[rnd]} ${nm3[rnd2]}`;
      }
    }
    return names;
  }
}
