export default function swedishs() {
  let rnd;

  let rnd1;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Ögge', 'Önde', 'Önder', 'Öne', 'Önne', 'Önnert', 'Övid', 'Adam', 'Adrian', 'Albin', 'Alex', 'Alexander', 'Alf', 'Alfred', 'Allan', 'Alvin', 'Anders', 'Andreas', 'Anifas', 'Anton', 'Arendt', 'Arfast', 'Arne', 'Arnfast', 'Aron', 'Arvid', 'Astrad', 'August', 'Axel', 'Båhl', 'Börje', 'Bengt', 'Benjamin', 'Bertil', 'Birger', 'Björn', 'Bo', 'Botel', 'Bror', 'Brynnel', 'Carl', 'Casper', 'Charles', 'Christer', 'Christian', 'Daniel', 'David', 'Ebbe', 'Eddie', 'Edvin', 'Edward', 'Einar', 'Elias', 'Elis', 'Elliot', 'Elton', 'Elvin', 'Emanuel', 'Emil', 'Erengisle', 'Eric', 'Erik', 'Ernst', 'Evert', 'Faje', 'Fajer', 'Faltin', 'Fardhe', 'Farman', 'Felix', 'Filip', 'Folke', 'Frank', 'Fredrik', 'Gärdar', 'Göran', 'Gösta', 'Gabriel', 'Georg', 'Gertorn', 'Gissel', 'Gjöl', 'Gjohl', 'Gjord', 'Gjur', 'Gorm', 'Gudhlek', 'Gunnar', 'Gustaf', 'Gustav', 'Hälje', 'Håkan', 'Hampus', 'Hannes', 'Hans', 'Harald', 'Harry', 'Hendri', 'Henrik', 'Henry', 'Herlek', 'Herse', 'Hersten', 'Hinder', 'Hindrik', 'Hjalmar', 'Holing', 'Holvaster', 'Hugo', 'Ilgen', 'Ingemar', 'Inggiäl', 'Ingor', 'Ingvar', 'Isak', 'Ivar', 'Järle', 'Jack', 'Jacob', 'Jan', 'Joel', 'Joen', 'Johan', 'Johannes', 'John', 'Jonas', 'Jonathan', 'Josef', 'Julian', 'Karl', 'Kent', 'Kevin', 'Kjell', 'Knut', 'Kurt', 'Lars', 'Leif', 'Lennart', 'Leo', 'Leon', 'Liam', 'Linus', 'Loke', 'Love', 'Lucas', 'Ludvig', 'Magnus', 'Malte', 'Marcus', 'Martin', 'Mats', 'Matteo', 'Mattias', 'Max', 'Maximilian', 'Melker', 'Melvin', 'Michael', 'Mikael', 'Niklas', 'Nils', 'Noah', 'Odert', 'Oliver', 'Olle', 'Olof', 'Olov', 'Ored', 'Oscar', 'Oskar', 'Otto', 'Ove', 'Patrik', 'Per', 'Peter', 'Ragnar', 'Ramund', 'Rasmus', 'Ravel', 'Reer', 'Robert', 'Roger', 'Roland', 'Rolf', 'Rune', 'Sam', 'Samuel', 'Sebastian', 'Segol', 'Sigge', 'Simon', 'Sixten', 'Sone', 'Spjälle', 'Störje', 'Stefan', 'Sten', 'Stig', 'Stränge', 'Strange', 'Svante', 'Sven', 'Töres', 'Tage', 'Theo', 'Theodor', 'Thomas', 'Tim', 'Tobias', 'Tomas', 'Tommy', 'Tor', 'Torsten', 'Troed', 'Tron', 'Trued', 'Tulson', 'Tyres', 'Ulf', 'Valdemar', 'Valter', 'Vaste', 'Velam', 'Vensel', 'Vernik', 'Vidar', 'Viggo', 'Viktor', 'Vilgot', 'Vilhelm', 'Vilken', 'Ville', 'Vincent', 'Vollrat', 'Wilhelm', 'William', 'Wilmer'];
  const namesFemale = ['Adelheid', 'Adhelin', 'Agnes', 'Agneta', 'Aimée', 'Alice', 'Alicia', 'Alma', 'Alva', 'Amanda', 'Anette', 'Anita', 'Anja', 'Ann', 'Anna', 'Annika', 'Asgärd', 'Astrid', 'Barbro', 'Berit', 'Birgit', 'Birgitta', 'Britt', 'Camilla', 'Carina', 'Caroline', 'Cecilia', 'Charlotta', 'Christ', 'Christina', 'Cornelia', 'Dammö', 'Ebba', 'Edit', 'Edith', 'Elin', 'Elina', 'Elisabet', 'Elisabeth', 'Elise', 'Eljena', 'Ella', 'Ellen', 'Ellena', 'Elsa', 'Elvira', 'Emelie', 'Emfrid', 'Emilia', 'Emma', 'Emmy', 'Ester', 'Eva', 'Evelina', 'Felicia', 'Filippa', 'Fiorentina', 'Fransiska', 'Freja', 'Frida', 'Göle', 'Gölig', 'Geska', 'Gillian', 'Greta', 'Grid', 'Gun', 'Gunborg', 'Gunhild', 'Gunilla', 'Gunvor', 'Gyrid', 'Hanna', 'Hebbla', 'Hedda', 'Hedvig', 'Helena', 'Hilda', 'Hildr', 'Ida', 'Ines', 'Inga', 'Ingeborg', 'Ingegärd', 'Ingegerd', 'Ingelöv', 'Inger', 'Ingiärd', 'Ingrid', 'Irene', 'Iris', 'Isabella', 'Isabelle', 'Jasmine', 'Jenny', 'Jesca', 'Johanna', 'Josefin', 'Julia', 'Karin', 'Karolina', 'Katarina', 'Kerstin', 'Kjellög', 'Klara', 'Kristina', 'Lena', 'Lilian', 'Lina', 'Linda', 'Linnéa', 'Linn', 'Linnea', 'Lisa', 'Liv', 'Louise', 'Lovisa', 'Lykke', 'Märta', 'Madelene', 'Maj', 'Maja', 'Majken', 'Malin', 'Margareta', 'Margit', 'Maria', 'Marie', 'Matilda', 'Meja', 'Melissa', 'Minna', 'Mira', 'Moa', 'Molly', 'Monica', 'My', 'Nathalie', 'Nellie', 'Nerthus', 'Nora', 'Oleana', 'Olivia', 'Olu', 'Radgärd', 'Ragiähl', 'Ragierdh', 'Ragnil', 'Rangela', 'Ronja', 'Rosemarie', 'Rut', 'Saga', 'Sara', 'Selma', 'Signe', 'Sigrid', 'Siri', 'Siv', 'Sofia', 'Sofie', 'Sonja', 'Stella', 'Stina', 'Susanne', 'Svea', 'Thea', 'Therese', 'Tilda', 'Tilde', 'Tindra', 'Tove', 'Truen', 'Tullia', 'Tuva', 'Tyra', 'Ulla', 'Ulrika', 'Vera', 'Viktoria', 'Vilda', 'Viola', 'Viviana', 'Wilma', 'Yvonne'];
  const names2 = ['Angström', 'Öberg', 'Östberg', 'Aaberg', 'Aalberg', 'Aberg', 'Adelsköld', 'Afzelius', 'Agren', 'Ahlander', 'Ahlgren', 'Ahlund', 'Akerlund', 'Akerman', 'Akerström', 'Almgren', 'Almqvist', 'Anderberg', 'Anderson', 'Antonsson', 'Aspelund', 'Asplund', 'Augustsson', 'Axelsson', 'Backstrom', 'Bengtsson', 'Berggren', 'Bergh', 'Bergius', 'Bergkvist', 'Berglund', 'Bergman', 'Bergmann', 'Bergquist', 'Bergqvist', 'Bergstrom', 'Björk', 'Bjorklund', 'Bjorkman', 'Blix', 'Bloch', 'Blom', 'Blomgren', 'Blomquist', 'Blomqvist', 'Blomstedt', 'Bolander', 'Borg', 'Borgström', 'Brahe', 'Brodd', 'Bruun', 'Byström', 'Carlsson', 'Ceder', 'Cederblom', 'Cederström', 'Crusenstolpe', 'Dahl', 'Dahlberg', 'Dahlgren', 'Dahlin', 'Dahlman', 'Dahlquist', 'Dahlstrom', 'Dalin', 'Davidsson', 'Degermark', 'Drakenberg', 'Edgren', 'Edlund', 'Edström', 'Egnell', 'Ekberg', 'Ekblad', 'Ekbom', 'Ekdahl', 'Ekdal', 'Ekholm', 'Eklund', 'Ekman', 'Ekström', 'Engberg', 'Engdahl', 'Englund', 'Engström', 'Enquist', 'Ericsson', 'Eriksson', 'Ernman', 'Fältskog', 'Fagerudd', 'Forsberg', 'Forslund', 'Forsman', 'Fredholm', 'Friberg', 'Frisk', 'Fronberg', 'Göransson', 'Geijer', 'Grönblom', 'Granqvist', 'Gronberg', 'Gunnarsson', 'Gustafson', 'Gyllenhaal', 'Gylling', 'Hägg', 'Hägglund', 'Hagelin', 'Hagerstrom', 'Haglund', 'Hagström', 'Hallström', 'Hammarberg', 'Hammarström', 'Hansdotter', 'Hansson', 'Hedberg', 'Hedlund', 'Hedman', 'Hedstrom', 'Heidenstam', 'Hellberg', 'Hellquist', 'Hellqvist', 'Henriksson', 'Hermansson', 'Hjertsson', 'Hjortsberg', 'Holgersson', 'Holm', 'Holmgren', 'Holmlund', 'Holmquist', 'Holmqvist', 'Holmström', 'Hopp', 'Hultgren', 'Igelström', 'Isaksson', 'Järnefelt', 'Jönsson', 'Jacobsson', 'Jakobsson', 'Jansson', 'Johannesson', 'Johansson', 'Johnsson', 'Jonsson', 'Källström', 'Karlsson', 'Kroon', 'Löfgren', 'Lötvall', 'Lagerfeld', 'Lagerfelt', 'Lagerkvist', 'Lagerlöf', 'Lagerquist', 'Lagerqvist', 'Larsson', 'Laxman', 'Lennartsson', 'Liljeström', 'Lind', 'Lindahl', 'Lindbergh', 'Lindblad', 'Lindblom', 'Lindelöf', 'Lindeman', 'Linden', 'Linderoth', 'Lindgren', 'Lindholm', 'Lindquist', 'Lindqvist', 'Lindroth', 'Lindskog', 'Lindstrom', 'Ljung', 'Ljungberg', 'Lund', 'Lundberg', 'Lundell', 'Lundgren', 'Lundholm', 'Lundin', 'Lundmark', 'Lundquist', 'Lundstrom', 'Mörner', 'Magnuson', 'Magnusson', 'Malmberg', 'Malmgren', 'Malmkvist', 'Malmquist', 'Malmqvist', 'Malmsten', 'Malmstrom', 'Marklund', 'Mattisson', 'Mattson', 'Molander', 'Moller', 'Naslund', 'Nilsson', 'Norberg', 'Nordahl', 'Nordin', 'Nordlund', 'Nordquist', 'Nordstrom', 'Norström', 'Nystrom', 'Odenberg', 'Odhner', 'Ohlin', 'Ohlson', 'Ohlsson', 'Ohly', 'Olander', 'Olofsson', 'Olsson', 'Ossler', 'Ostlund', 'Ostrom', 'Palmcrantz', 'Palme', 'Palmgren', 'Palmstruch', 'Paulsson', 'Persson', 'Petersson', 'Pettersson', 'Posse', 'Quist', 'Qvist', 'Rehn', 'Rehnquist', 'Richardsson', 'Rosenblad', 'Rosenquist', 'Rosenqvist', 'Söderberg', 'Södergren', 'Söderholm', 'Söderlund', 'Sörenstam', 'Samuelsson', 'Sandahl', 'Sandberg', 'Sandell', 'Sandin', 'Sandström', 'Schauman', 'Selander', 'Simonsson', 'Sjöberg', 'Sjögren', 'Sjöholm', 'Sjöström', 'Sköld', 'Skarsgard', 'Skoglund', 'Skoog', 'Sohlmann', 'Sparre', 'Sparv', 'Stenbeck', 'Stenbock', 'Stenmark', 'Stenström', 'Ström', 'Strömberg', 'Strandberg', 'Sundberg', 'Sundin', 'Sundqvist', 'Sundström', 'Svärd', 'Svensson', 'Syrén', 'Tegnér', 'Tornquist', 'Torvalds', 'Ulf', 'Vikström', 'Wahlberg', 'Wahlgren', 'Wahlström', 'Wallenberg', 'Wallin', 'Westergren', 'Westermarck', 'Westermark', 'Widforss', 'Wikström', 'Winblad'];

  const names1 = type === 1 ? namesFemale : namesMale;

  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd1]}`;
    return names;
  }
}
