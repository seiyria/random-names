export default function parrots() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abbot', 'Abrian', 'Acford', 'Achilles', 'Adam', 'Adrian', 'Ahmar', 'Ainsley', 'Akker', 'Aladin', 'Aldric', 'Alex', 'Alphons', 'Amery', 'Ami', 'Amin', 'Amiri', 'Amos', 'Andreo', 'Andy', 'Apple Jack', 'Archie', 'Arlo', 'Arnie', 'Arvis', 'Ashki', 'Aspen', 'Atkins', 'Averin', 'Aviel', 'Aztec', 'Azzam', 'Bailey', 'Bailoch', 'Balderic', 'Baltazar', 'Banner', 'Banny', 'Barney', 'Baron', 'Barret', 'Barry', 'Bartholomew', 'Basil', 'Beaufort', 'Berkley', 'Bernie', 'Bert', 'Berto', 'Bing', 'Bingo', 'Bishop', 'Blake', 'Blooper', 'Blu', 'Bob', 'Boca', 'Bogart', 'Bogie', 'Bonkers', 'Boo', 'Boris', 'Brando', 'Brandon', 'Branson', 'Brian', 'Brick', 'Brion', 'Brock', 'Broderik', 'Bruce', 'Bubba', 'Buddy', 'Bug', 'Burstone', 'Buster', 'Byron', 'Cadby', 'Callahan', 'Carlisle', 'Carlo', 'Cartman', 'Casey', 'Casper', 'Cayenne', 'Cecil', 'Chad', 'Chase', 'Cheeko', 'Chili', 'Chip', 'Chitter', 'Chuck', 'Cinnamon', 'Claude', 'Claudius', 'Claus', 'Clayton', 'Clevon', 'Clover', 'Colby', 'Cole', 'Conn', 'Connor', 'Corbin', 'Corey', 'Corky', 'Corrente', 'Corwell', 'Cosmo', 'Cowboy', 'Cracker', 'Cricket', 'Cruiser', 'Crunchie', 'Curtis', 'DJ', 'Daniel', 'Danny', 'Dante', 'Darby', 'Davey', 'Davian', 'Deaglan', 'Derrik', 'Desilyn', 'Devil', 'Dewdrop', 'Dewey', 'Diego', 'Dillen', 'Dillon', 'Domino', 'Donovan', 'Donut', 'Dougal', 'Douglas', 'Drizzle', 'Ducky', 'Duff', 'Duffman', 'Duke', 'Duran', 'Dustin', 'Dusty', 'Dwight', 'Dylan', 'Earl Lee', 'Earl', 'Earle', 'Echo', 'Edward', 'Eggbert', 'Egglet', 'Einstein', 'Elazar', 'Elliot', 'Emerald', 'Emeril', 'Emerson', 'Emmett', 'Ernando', 'Ernie', 'Erwin', 'Esau', 'Eugene', 'Even Steven', 'Ewald', 'Ewart', 'Fabio', 'Farley', 'Feathers', 'Fiji', 'Filbert', 'Fitz', 'Fitzgerald', 'Fondue', 'Fontana', 'Fontane', 'Fonz', 'Fonzey', 'Forest', 'Fraiser', 'Franklin', 'Frisco', 'Gabe', 'Gabriel', 'Garreth', 'Garrison', 'Garry', 'Garvyn', 'Gauthier', 'George', 'Gerald', 'Gilligan', 'Gilroy', 'Gismo', 'Gizmo', 'Glynn', 'Gofried', 'Gray', 'Gregson', 'Griffin', 'Grumpy', 'Guava', 'Gumby', 'Gunnar', 'Gunner', 'Hairy', 'Halton', 'Hamlet', 'Hansell', 'Harley', 'Harlow', 'Harvey', 'Hawthorne', 'Heracles', 'Hercules', 'Hero', 'Heston', 'Hewey', 'Holden', 'Howie', 'Huey', 'Humphrey', 'Hunter', 'Inca', 'Irwyn', 'Jabber', 'Jackson', 'Jade', 'Jaden', 'Jake', 'Jamaal', 'Jamie', 'Jarrah', 'Jarren', 'Jasper', 'Jay', 'Jaye ', 'Jazz', 'Jerald', 'Jerick', 'Jerrell', 'Jessie', 'Jester', 'Jiggs', 'Jo', 'JoJo', 'Joel', 'Joey', 'Jojo', 'Jordain', 'Jordy', 'Justin', 'Kale', 'Kane', 'Kazoo', 'Kelly', 'Kelsey', 'Kendall', 'Keno', 'Kermit', 'Kevin', 'Kevion', 'Kiko', 'Killian', 'Kirby', 'Kiwi', 'Kody', 'Kollyn', 'Kuizo', 'Laine', 'Lance', 'Lancelot', 'Langston', 'Leighton', 'Lightning', 'Linden', 'Linus', 'Loco', 'Logan', 'Looney', 'Louie', 'Lucky', 'Lyle', 'Lyric', 'Mac', 'MacLeod', 'MacNiall', 'MacQuaid', 'Macintosh', 'Maestro', 'Major', 'Mango', 'Manni', 'Manolo', 'Manuel', 'Marco', 'Marcus', 'Markus', 'Marley', 'Marlon', 'Marlow', 'Mathew', 'Mathews', 'Matt', 'Maui', 'Max', 'Maximus', 'Melvin', 'Mikey', 'Millard', 'Milo', 'Mitchel', 'Mongo', 'Moss', 'Mothra', 'Mr.Loud', 'Mugsly', 'Munchie', 'Murray', 'Murry', 'Myles', 'Myst', 'Nadim', 'Narcissus', 'Neo', 'Newton', 'Nico', 'Nippy', 'Nova', 'Oddball', 'Odin', 'Odysseus', 'Oliver', 'Omelet', 'Omer', 'Onslowe', 'Orion', 'Orvin', 'Oscar', 'Paco', 'Paphos', 'Pasqual', 'Paulie', 'Pauloc', 'Peanut', 'Pedro', 'Pepper', 'Pepsi', 'Perry', 'Perseus', 'Perzifal', 'Phoenix', 'Phoenyx', 'Picasso', 'Pickle', 'Pickles', 'Pikard', 'Piper', 'Pokey', 'Prancer', 'Quinn', 'Radburne', 'Radclyf', 'Ramiro', 'Randon', 'Ranger', 'Rendall', 'Reno', 'Renton', 'Reo', 'Reymond', 'Rhett', 'Ricky', 'Riki', 'Riko', 'Riku', 'Rio', 'Roald', 'Rocky', 'Rohais', 'Rollie', 'Romeo', 'Rooney', 'Rosco', 'Rowdy', 'Rowland', 'Ruff', 'Ruffles', 'Russell', 'Rusty', 'Rutger', 'Rye', 'Sam', 'Sammy', 'Samson', 'Sander', 'Scooby', 'Scooter', 'Scotty', 'Scruffy', 'Serro', 'Shadow', 'Shady', 'Shaggy', 'Shakespeare', 'Shamrock', 'Shellby', 'Shelly', 'Shephard', 'Sherbet', 'Sidney', 'Sierro', 'Simba', 'Simon', 'Sinatra', 'Sinbad', 'Skipper', 'Sky', 'Snoopy', 'Solly', 'Solo', 'Sonny', 'Sorra', 'Spade', 'Spike', 'Splash', 'Spud', 'Spyro', 'Squacker', 'Squeak', 'Squeaker', 'Squeeker', 'Stanford', 'Starsky', 'Stephenson', 'Steven', 'Stoney', 'Striker', 'Sullivan', 'Sultan', 'Sundance', 'Sunny', 'Sydney', 'Taco', 'Tegan', 'Theo', 'Thor', 'Thunder', 'Tico', 'Tigger', 'Tiki', 'Tiko', 'Toby', 'Toni', 'Tory', 'Trenton', 'Trey', 'Tristan', 'Tucker', 'Twitter', 'Tycoon', 'Tyler', 'Tyrus', 'Valentin', 'Verdi', 'Waldo', 'Waldron', 'Walthari', 'Wasabi', 'Washburn', 'Watkinson', 'Webber', 'Whitcomb', 'Wilbert', 'Wings', 'Winston', 'Woolsey', 'Xalvadore', 'York', 'Yoshi', 'Yvan', 'Yvon', 'Zack', 'Zackery', 'Zazu', 'Zeke', 'Zero', 'Zeus', 'Ziggy', 'Zipper', 'Zippy', 'Zirby', 'Zolly', 'Zonkers', 'Zora', 'Zorro'];
  const nm2 = ['Abby', 'Abiane', 'Abigale', 'Adah', 'Adene', 'Adinah', 'Adrienne', 'Aileen', 'Aislyn', 'Akiko', 'Aldora', 'Alexie', 'Alexine', 'Alexis', 'Alexsie', 'Alice', 'Alise', 'Alita', 'Aliva', 'Alixandra', 'Aliz', 'Ally', 'Allyse', 'Alodia', 'Alvira', 'Amelia', 'Amya', 'Ane', 'Angel', 'Angelina', 'Anika', 'Ann', 'Anna', 'Annie ', 'Annie', 'Annikka', 'Annora', 'Anuva', 'Aponi', 'April', 'Aquila', 'Aquilina', 'Arcadia', 'Arlene', 'Astrix', 'Athilda', 'Atique', 'Audelia', 'Audree', 'Aurora', 'Avelina', 'Avia', 'Aviana', 'Avira', 'Ayisha', 'Azriel', 'Baby', 'Baibrey', 'Bailey', 'Barbara', 'Barbie', 'Bedina', 'Bell', 'Bella', 'Belle', 'Benita', 'Berry', 'Bertha', 'Beryl', 'Beverlee', 'Blanche', 'Blondey', 'Bonnie', 'Bonny', 'Brandy', 'Breezy', 'Brendalyn', 'Brettany', 'Brianne', 'Bridget', 'Brigit', 'Brilla', 'Brunhilde', 'Bubbles', 'Butter', 'Cailyn', 'Caitlyn', 'Cali', 'Calypso', 'Camilah', 'Candi', 'Candy', 'Cari', 'Carina', 'Carlene', 'Carlie', 'Carly', 'Carmen', 'Carmina', 'Casandra', 'Cassie', 'Celeste', 'Cerise', 'Chaka', 'Charlie', 'Charlotte', 'Chasidey', 'Chelsaa', 'Chelsea', 'Chelsey', 'Cher', 'Chika', 'Christal', 'Christy', 'Cindee', 'Cindra', 'Cindy', 'Cleo', 'Cloe', 'Coco', 'Colette', 'Collette', 'Constance', 'Cookie', 'Corie', 'Corinne', 'Crayon', 'Cricket', 'Crimson', 'Cupid', 'Daedrey', 'Daisy', 'Dana', 'Danira', 'Darla', 'Darline', 'Darling', 'Dawna', 'Dayshia', 'Delila', 'Desire', 'Dia', 'Dionne', 'Diva', 'Dixie', 'Dolly', 'Dolorita', 'Dora', 'Dreena', 'Duchess', 'Earlene', 'Ebony', 'Echo', 'Eda', 'Edith', 'Edlyne', 'Eileen', 'Elicia', 'Elizabeth', 'Elkie', 'Elle', 'Ellie', 'Ellone', 'Elodie', 'Elsa', 'Elvira', 'Ember', 'Emeline', 'Emmaline', 'Emmi', 'Emmy', 'Erlene', 'Estefania', 'Euforey', 'Eva', 'Eve', 'Evia', 'Evika', 'Fae', 'Faith', 'Fancy', 'Farrah', 'Fawne', 'Faye', 'Felicity', 'Fifi', 'Finley', 'Fleur', 'Flo', 'Flower', 'Frederica', 'Gabby', 'Gala', 'Garnet', 'Gaya', 'Gem', 'Gemma', 'Geneva', 'Georgine', 'Gillian', 'Gina', 'Ginger', 'Ginnette', 'Gipsy', 'Glory', 'Grace', 'Gracie', 'Greta', 'Gwendoline', 'Gwenith', 'Gwynn', 'Gypsy ', 'Gypsy', 'Haley', 'Hannah', 'Hannela', 'Harley', 'HarleyQuinn', 'Harlow', 'Harriette', 'Hayleigh', 'Heather', 'Helga', 'Holly', 'Idette', 'Iona', 'Iris', 'Isabelle', 'Isadora', 'Isane', 'Isis', 'Ivette', 'Ivory', 'Jade', 'Jamilee', 'Janell', 'Janetta', 'Jasmine', 'Jeanne', 'Jeannette', 'Jemma', 'Jena', 'Jenice', 'Jenna', 'Jennifer', 'Jetta', 'Jewel', 'Jewels', 'Jianna', 'Jill', 'Jillian', 'Jo', 'Joanne', 'Jocelyn', 'Jody', 'Jolie', 'Josephine', 'Josey', 'Josie', 'Julie', 'Juliet', 'June', 'Juniper', 'Kadee', 'Kady', 'Kaedee', 'Kalila', 'Kally', 'Karolyne', 'Katharina', 'Katy', 'Kayleen', 'Kaytlyne', 'Kia', 'Kira', 'Kiwi', 'Kyra', 'Lacey', 'Lady', 'Layla', 'Leah', 'Leotie', 'Lexie', 'Lexus', 'Lil', 'Lilac', 'Lileath', 'Lili', 'Lilibeth', 'Lilliana', 'Lilly', 'Lily', 'Lina', 'Linda', 'Lindsey', 'Lise', 'Little', 'Liv', 'Livia', 'Liwanu', 'Liza', 'Lizzie', 'Lola', 'Lopez', 'Lorine', 'Lorraina', 'Lorre', 'Lorreli', 'Louis', 'Love', 'Lucila', 'Lucinda', 'Lucy', 'Luella', 'Lulu', 'Luna', 'Luvyna', 'Lyn', 'Lynn', 'Lyza', 'Macey', 'Macy', 'Madison', 'Magenta', 'Maggie', 'Maia', 'Malita', 'Mandy', 'Mango', 'Maria', 'Maribella', 'Marley', 'Marlisa', 'Marnie', 'Marrisa', 'Mathilda', 'Maurelle', 'Max', 'Medusa', 'Meg', 'Melodie', 'Melody', 'Mercedes', 'Mertise', 'Mia', 'Mikayla', 'Milly', 'Minnie', 'Mirri', 'Missy', 'Moira', 'Molly', 'Mona', 'Monet', 'Morisa', 'Moxie', 'Mulan', 'Narcisa', 'Natasha', 'Neveah', 'Nicole', 'Nikita', 'Nikki', 'Nineve', 'Nita', 'Noami', 'Opal', 'Oralie', 'Pandora', 'Paradise', 'Pari', 'Paulie', 'Peach', 'Peaches', 'Penelope', 'Penney', 'Penny', 'Persephone', 'Phoebe', 'Piper', 'Plum', 'Pogo', 'Polly', 'Poly', 'Pookie', 'Poppy', 'Priscilla', 'Purgatori', 'Rain', 'Rainbow', 'Riri', 'Rose', 'Rosebud', 'Rosey', 'Rosie', 'Rowan', 'Roxanna', 'Roxanne', 'Roxy', 'Ruby Rose', 'Ruby', 'Sabrina', 'Sadie', 'Saffron', 'Sakura', 'Salsa', 'Sami', 'Sandy', 'Sapphire', 'Sasha', 'Scarlet', 'Scarlett', 'Scena', 'Sela', 'Serena', 'Shea', 'Shelby', 'Shelly', 'Shila', 'Shiloh', 'Shylee', 'Skye', 'Skyler', 'Snowball', 'Snuggles', 'Sophie', 'Spring', 'Star', 'Suzy', 'Sweetie', 'Taboo', 'Talayeh', 'Talia', 'Talula', 'Tara', 'Tawnya', 'Tess', 'Tessa', 'Tessy', 'Tiara', 'Tiffany', 'Tiger', 'Tiki', 'Tina', 'Topaz', 'Torri', 'Trin', 'TwinkleStar', 'Ula', 'Valentina', 'Valentine', 'Valerie', 'Venus', 'Vickie', 'Victorina', 'Villette', 'Violet', 'Vixan', 'Wenda', 'Wilma', 'Winifred', 'Xalvadora', 'Xena', 'Yasmin', 'Yasmine', 'Yoko', 'Yolanda', 'Yolonda', 'Zaa-Zoo', 'Zamira', 'Zillah', 'Zoe', 'Zoey', 'Zohra', 'Zola', 'Zsa Zsa', 'Zyana'];


  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
