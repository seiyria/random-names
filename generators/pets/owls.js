export default function owls() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['8-ball', 'Aaralyn', 'Aaron', 'Abalone', 'Abe', 'Abner', 'Accent', 'Ace', 'Adonis', 'Ady', 'Aegis', 'Aeris', 'Ahoy', 'Aira', 'Aire', 'Ajax', 'Akea', 'Akiki', 'Akira', 'Akua', 'Albie', 'Albus', 'Alfalfa', 'Alkita', 'Alphie', 'Ami', 'Amigo', 'Amora', 'Amore', 'Amory', 'Ancie', 'Andralyn', 'Andre', 'Andrew', 'Andy', 'Angel', 'Apache', 'Apachee', 'Apachie', 'Apala', 'Apollo', 'Ara', 'Arago', 'Archie', 'Archimedes', 'Areba', 'Arena', 'Arro', 'Art', 'Artemis', 'Arthur', 'Arwen', 'Ash', 'Aso', 'Aspen', 'Asta', 'Aurora', 'Auryon', 'Avalar', 'Avalon', 'Axel', 'Axl', 'Azor', 'Azure', 'Azurell', 'Baggins', 'Bailey', 'Bally', 'Ballyhoo', 'Baloo', 'Bamboo', 'Bandiboo', 'Bandit', 'Banjo', 'Barnaby', 'Barney', 'Barrel', 'Barron', 'Bashful', 'Basil', 'Baxter', 'Bayle', 'Bazzo', 'Beak', 'Beaker', 'Bean', 'Beau', 'Beavis', 'Bebo', 'Becks', 'Bee', 'Beeker', 'Beemer', 'Beeper', 'Beeps', 'Bencher', 'Bender', 'Benji', 'Benny', 'Bentley', 'Benz', 'Beran', 'Berit', 'Bernie', 'Berry', 'Biff', 'Biggie', 'Biggles', 'Bigglesworth', 'Biko', 'Billabong', 'Billie', 'Billy', 'Biloxi', 'Bindi', 'Bing', 'Bingo', 'Binx', 'Birdie', 'Bishop', 'Bit', 'Bits', 'Bitsy', 'Bixby', 'Biz', 'Blackjack', 'Blade', 'Blake', 'Blaze', 'Blazer', 'Blizzard', 'Blue', 'Blues', 'Boa', 'Bogey', 'Bogie', 'Bonbon', 'Bones', 'Bongles', 'Bonji', 'Bonkers', 'Bonner', 'Bono', 'Bonzai', 'Bonzie', 'Bonzo', 'Boo', 'Booger', 'Boomer', 'Bosley', 'Bourbon', 'Breezer', 'Brisco', 'Brooks', 'Bruiser', 'Bryson', 'Bubba', 'Bubble', 'Bubbles', 'Buckett', 'Buddy', 'Budgie', 'Buggy', 'Bugle', 'Bugsy', 'Bullet', 'Bullwinkle', 'Bumble', 'Bumper', 'Bundles', 'Bundy', 'Bungee', 'Buster', 'Butterscotch', 'Buzz', 'Caesar', 'Camilo', 'Carrot', 'Caruso', 'Casey', 'Casper', 'Ceasar', 'Chad', 'Chance', 'Chantilly', 'Chaos', 'Charcoal', 'Charlie', 'Chatter', 'Chaz', 'Cheeks', 'Chekov', 'Cherokee', 'Chester', 'Chi', 'Chickadee', 'Chief', 'Chilli', 'Chino', 'Chipper', 'Chips', 'Chrono', 'Chuckles', 'Chutney', 'Cinammon', 'Cinnabar', 'Cinnamin', 'Cinnamon', 'Clancey', 'Clark', 'Cliff', 'Clipper', 'Clyde', 'Cobie', 'Cody', 'Comet', 'Conan', 'Conner', 'Connor', 'Cookie', 'Cooper', 'Copper', 'Corky', 'Cornowlius', 'Cosmo', 'Cotton', 'Cracker', 'Crackers', 'Crawley', 'Creampuff', 'Cricket', 'Crimson', 'Crip', 'Crisp', 'Crono', 'Cuddle', 'Cuddles', 'Cupcake', 'Cupid', 'Cyrus', 'Daffy', 'Dale', 'Dancer', 'Darius', 'Darling', 'Daryl', 'Dash', 'Davey', 'Daxter', 'Dazzle', 'December', 'Delta', 'Derby', 'Destiny', 'Dewdrop', 'Dewy', 'Digby', 'Digger', 'Digit', 'Dillon', 'Dingo', 'Dipsy', 'Dirby', 'Dirk', 'Doc', 'Doctor Hoo', 'Doctor Hoot', 'Dodger', 'Donut', 'Doobie', 'Doodle', 'Doodles', 'Dragon', 'Dragonfly', 'Drew', 'Droplet', 'Ducky', 'Dudley', 'Duke Owlington', 'Dundee', 'Dune', 'Dunkin', 'Duster', 'Earl', 'Echo', 'Eclipse', 'Elliott', 'Elwood', 'Envy', 'Enzo', 'Esquire', 'Eternity', 'Eureka', 'Faith', 'Farley', 'Feather', 'Feathers', 'Fester', 'Fidel', 'Fidget', 'Fido', 'Figment', 'Finnigan', 'Flake', 'Flakes', 'Fletcher', 'Flint', 'Fluff', 'Fluffy', 'Fontana', 'Forest', 'Forrest', 'Foster', 'Freckles', 'Freedom', 'Freefall', 'Frosty', 'Fuji', 'Fuzz', 'Fuzzle', 'Fuzzy', 'Gabriel', 'Gadget', 'Gazoo', 'Genesis', 'Genica', 'Geronimo', 'Ghost', 'Giggles', 'Gilligan', 'Ginger', 'Gizmo', 'Glimfeather', 'Glory', 'Grady', 'Grampaw', 'Grayson', 'Gregory', 'Grendal', 'Griffon', 'Grimm', 'Grommit', 'Grover', 'Guacamowle', 'Gunnar', 'Gunner', 'Gusty', 'Gypsy', 'Hamlet', 'Hammer', 'Hannibal', 'Happy', 'Havily', 'Havoc', 'Hayden', 'Heckle', 'Hector', 'Hedwig', 'Hercules', 'Higgins', 'Hobart', 'Hobbs', 'Hood', 'Hoodini', 'Hope', 'Horace', 'Horton', 'Horus', 'Houdini', 'Howell', 'Howie', 'Huey', 'Hugo', 'Hunter', 'Hyde', 'Icarus', 'Idgy', 'Igor', 'Ike', 'Independence', 'Indigo', 'Indy', 'Infinity', 'Irish', 'Itchy', 'Jako', 'Java', 'Jax', 'Jaxie', 'Jaxon', 'Jay', 'Jaybird', 'Jayden', 'Jazz', 'Jazzy', 'Jeepers', 'Jeff', 'Jelly', 'Jellybean', 'Jingles', 'Jinx', 'Jonah', 'Josey', 'Joxer', 'Jubilee', 'Jude', 'Julius', 'Jupiter', 'Justice', 'Kaelem', 'Kahn', 'Kalin', 'Kaminsky', 'Kane', 'Kazoo', 'Kazooie', 'Kebles', 'Kernal', 'Kika', 'Kiko', 'Kiky', 'King', 'Kio', 'Kipper', 'Kira', 'Kiwi', 'Knoodles', 'Knuckles', 'Koa', 'Kobe', 'Kohi', 'Kokamoe', 'Kokomo', 'Kruso', 'Kruz', 'Kudo', 'Kye', 'Kyra', 'Kyro', 'Kyzer', 'Laverne', 'Lenny', 'Leo', 'Leroy', 'Levi', 'Liberty', 'Lightning', 'Linny', 'Lipton', 'Litle Miracle', 'Little Hoot', 'Little Hooter', 'Littlefoot', 'Loki', 'Lollipop', 'Loopy', 'Lore', 'Lou', 'Louie', 'Love', 'Lovie', 'Lucky', 'Lupus', 'Mackenzie', 'Madson', 'Mae', 'Maestro', 'Magnum', 'Mahatma', 'Mai', 'Makaila', 'Makana', 'Malakai', 'Malcolm', 'Malice', 'Mango', 'Marble', 'Marbles', 'Marino', 'Marley', 'Marsh', 'Marshall', 'Marshmallow', 'Matsumoto', 'Matu', 'Maverick', 'Max', 'Maximus', 'Meadow', 'Mellon', 'Mellow', 'Melon', 'Mercury', 'Merlin', 'Merlot', 'Merlyn', 'Midnight', 'Migo', 'Mika', 'Mikaia', 'Mikey', 'Milo', 'Minerva', 'Miracle', 'Mo', 'Moa', 'Moby', 'Mocha', 'Mocks', 'Moe', 'Moesby', 'Mojo', 'Moka', 'Moki', 'Mokie', 'Momo', 'Monet', 'Mongo', 'Montana', 'Monty', 'Moochie', 'Moondancer', 'Moondust', 'Moonlight', 'Morgan', 'Mort', 'Mosby', 'Moto', 'Mulder', 'Mullet', 'Munchkin', 'Munkey', 'Murdock', 'Murphy', 'Murray', 'Myron', 'Myster', 'Mystery', 'Napoleon', 'Nash', 'Nemo', 'Neo', 'Neon', 'Nero', 'Newton', 'Nibbles', 'Nibby', 'Night Stalker', 'Nightingale', 'Nimbus', 'Noa', 'Norm', 'Nova', 'Nugget', 'Nutmeg', 'Oatmeal', 'Oats', 'October', 'Odie', 'Okie', 'Oliver', 'Ollie', 'Omega', 'Opus', 'Orbit', 'Oreo', 'Origami', 'Orion', 'Osbourne', 'Oscar', 'Othello', 'Otis', 'Otto', 'Owen', 'Owl Capone', 'Owl Jolson', 'Owl Pacino', 'Owlbert', 'Owlbin', 'Owlexander', 'Owlfonso', 'Owlford', 'Owlistare', 'Owliver', 'Owlton', 'Owlvin', 'Owly', 'Owyn', 'Ozzy', 'Packer', 'Paco', 'Pancake', 'Pancho', 'Pandora', 'Parker', 'Parlay', 'Parsley', 'Passion', 'Patch', 'Patches', 'Patience', 'Pax', 'Pea', 'Peabody', 'Peanut', 'Pearl', 'Peck', 'Pecker', 'Pecks', 'Peepers', 'Peetie', 'Pegasus', 'Pepper', 'Peppermint', 'Peppers', 'Percy', 'Periwinkle', 'Picard', 'Piccolo', 'Picket', 'Pickle', 'Pickles', 'Pico', 'Pika', 'Pinchy', 'Pip', 'Pipper', 'Pipsqueak', 'Pistache', 'Pistachio', 'Pocket', 'Pockets', 'Poco', 'Pogo', 'Poncho', 'Pongo', 'Popcorn', 'Popeye', 'Precious', 'Pretzel', 'Primrose', 'Puddles', 'Pudge', 'Puffins', 'Pyro', 'Qtip', 'Quacker', 'Quill', 'Quincey', 'Quinn', 'Rafiki', 'Raider', 'Rain', 'Rainbow', 'Raindrop', 'Raj', 'Raja', 'Rajah', 'Ramses', 'Rancher', 'Randy', 'Ranger', 'Rascal', 'Reegan', 'Remedy', 'Remi', 'Rhaine', 'Ricochet', 'Ringo', 'Rio', 'Ripley', 'Rizzo', 'Robin Hoot', 'Robyn', 'Rocco', 'Rocket', 'Rocko', 'Rocky', 'Rogue', 'Roku', 'Rolo', 'Rosebud', 'Rowlph', 'Rudy', 'Ruffles', 'Rufous', 'Russell', 'Rusty', 'Sabbath', 'Sable', 'Salem', 'Satchel', 'Savage', 'Sax', 'Saxon', 'Smooch', 'Schwartz', 'Scooter', 'Scoots', 'Scotty', 'Scrabble', 'Screech', 'Scribble', 'Scribbles', 'Scruff', 'Scruffy', 'Scuddle', 'Serendipity', 'Seymoure', 'Shadow', 'Shady', 'Shaggy', 'Shao', 'Sherlock', 'Shiloh', 'Shivers', 'Sid', 'Sidney', 'Sierra', 'Silly', 'Silvano', 'Silver', 'Silvermoon', 'Sizzles', 'Skeeter', 'Skip', 'Skipper', 'Skittles', 'Smith', 'Smokey', 'Smoochie', 'Snappy', 'Sneaky', 'Snicker', 'Snickerdoodle', 'Snickers', 'Snoopy', 'Snow', 'Snowball', 'Snowflake', 'Snowy', 'Snuggles', 'Soleil', 'Solitaire', 'Solomon', 'Soprano', 'Sparkle', 'Sparkler', 'Sparkles', 'Sparky', 'Spartacus', 'Sparx', 'Specker', 'Speckles', 'Spencer', 'Spot', 'Sprite', 'Spuds', 'Spyro', 'Squawk', 'Squawkamole', 'Squawks', 'Squeaker', 'Squiggles', 'Squiggy', 'Squire', 'Stanley', 'Starburst', 'Starlight', 'Starlite', 'Starr', 'Stash', 'Stinky', 'Stitches', 'Storm', 'Stormy', 'Studs', 'Sugar', 'Sugarpop', 'Sully', 'Summer', 'Sundance', 'Sunee', 'Swifty', 'Swoosh', 'Sylvester', 'Tahoe', 'Tally', 'Tango', 'Tater', 'Tatoo', 'Tattoo', 'Taylor', 'Taz', 'Teeny', 'Tempest', 'Thatch', 'Theodore', 'Thor', 'Thunder', 'Thyme', 'Tickles', 'Tico', 'Tigger', 'Tiggy', 'Timber', 'Timmy', 'Tink', 'Tinker', 'Tinky', 'Tiny', 'Titus', 'Toodles', 'Tookie', 'Toot', 'Tootie', 'Topaz', 'Topper', 'Torie', 'Tornado', 'Toshi', 'Toto', 'Tracker', 'Trapper', 'Traveler', 'Travler', 'Treasure', 'Trinket', 'Tristan', 'Trouble', 'Troubles', 'Trucker', 'Truffles', 'Tucker', 'Tully', 'Turbo', 'Tweaker', 'Tweedle', 'Tweeky', 'Tweeter', 'Tweeters', 'Tweets', 'Twiggles', 'Twilight', 'Twinkle', 'Twinkles', 'Twister', 'Twizzler', 'Twizzles', 'Tyson', 'Ulrich', 'Unity', 'Valentine', 'Vanilla', 'Ventura', 'Wacky', 'Waffle', 'Waffles', 'Wallace', 'Wasabi', 'Weazer', 'Weebles', 'Wembley', 'Whacker', 'Whisper', 'Whispers', 'Whitey', 'Wiggle', 'Wiggles', 'Wilbur', 'Willow', 'Wilson', 'Winky', 'Winston', 'Winston Churchowl', 'Wobbles', 'Woddlesworth', 'Wolfgang', 'Woodstock', 'Xanon', 'Yabba', 'Yahtzee', 'Yaya', 'Yogi', 'Yoki', 'Yoshi', 'Yoyo', 'Yuna', 'Zazoo', 'Zibby', 'Ziggy', 'Zoomer', 'Zowie', 'Zues'];
  const nm2 = ['8-ball', 'Aaralyn', 'Abalone', 'Abbey', 'Abby', 'Abigail', 'Accent', 'Ace', 'Addie', 'Adelie', 'Adonica', 'Adriane', 'Aegis', 'Aeris', 'Agatha', 'Aida', 'Aira', 'Aire', 'Akea', 'Akiki', 'Akira', 'Aldara', 'Alice', 'Alida', 'Alkita', 'Allayna', 'Alley', 'Allison', 'Ally', 'Alphie', 'Altessa', 'Alyn', 'Amber', 'Amberly', 'Amelie', 'Ami', 'Amora', 'Amore', 'Amory', 'Ancie', 'Andralyn', 'Angel', 'Angelica', 'Angelina', 'Angie', 'Anika', 'Anna', 'Annabelle', 'Anne', 'Annie', 'Anya', 'Apache', 'Apachee', 'Apple', 'Apricot', 'April', 'Aqua', 'Ara', 'Areba', 'Arena', 'Aridel', 'Arie', 'Ariel', 'Arro', 'Arwen', 'Ash', 'Ashlee', 'Ashleigh', 'Asia', 'Aspen', 'Asta', 'Astrid', 'Athena', 'Auggie', 'Aurora', 'Autumn', 'Ava', 'Avalar', 'Avari', 'Avery', 'Avia', 'Aya', 'Ayanna', 'Azalea', 'Azia', 'Azure', 'Azurelle', 'Babers', 'Babs', 'Bailey', 'Bajeda', 'Bally', 'Ballyhoo', 'Baloo', 'Bamboo', 'Bandiboo', 'Banya', 'Barbara', 'Bashful', 'Basil', 'Baxter', 'Bayle', 'Bea', 'Beaker', 'Bean', 'Beau', 'Beauty', 'Bebo', 'Becca', 'Becks', 'Bee', 'Beeker', 'Beemer', 'Beeper', 'Beeps', 'Bella', 'Belle', 'Benji', 'Berry', 'Bess', 'Betsy', 'Bette', 'Betty', 'Biff', 'Biggles', 'Biko', 'Biloxi', 'Bindi', 'Binx', 'Birdie', 'Bits', 'Bitsy', 'Blanca', 'Blossom', 'Blue', 'Bluebell', 'Blush', 'Bogie', 'Bonbon', 'Bones', 'Bongles', 'Bonita', 'Bonji', 'Bonnie', 'Boo', 'Bootsie', 'Bourbon', 'Bree', 'Breezer', 'Breezy', 'Briana', 'Brianna', 'Brie', 'Brooks', 'Bubble', 'Bubbles', 'Buckett', 'Budgie', 'Buggy', 'Bugle', 'Bugsy', 'Bumble', 'Bumper', 'Bundles', 'Buttercup', 'Butterscotch', 'Cady', 'Calypso', 'Camille', 'Camilo', 'Candy', 'Carly', 'Carmen', 'Carrot', 'Caruso', 'Casey', 'Cassara', 'Cassidy', 'Cece', 'Celeste', 'Chance', 'Chantilly', 'Charity', 'Charlie', 'Charm', 'Chatter', 'Cheeks', 'Cherokee', 'Cherry', 'Cheyenne', 'Chi', 'Chickadee', 'Chilli', 'Chino', 'Chips', 'Chloe', 'Chrono', 'Chuckles', 'Chutney', 'Cinammon', 'Cindy', 'Cinnamin', 'Cinnamon', 'Clare', 'Clarisse', 'Clementine', 'Cleo', 'Clo', 'CloeDelta', 'Clover', 'Cobie', 'Cody', 'Comet', 'Connie', 'Cookie', 'Cootie', 'Copper', 'Coral', 'Corky', 'Cosmo', 'Cotton', 'Cracker', 'Crackers', 'Creampuff', 'Cricket', 'Crimson', 'Crono', 'Crystal', 'Cuddle', 'Cuddles', 'Cupcake', 'Cutie', 'Cutie Pie', 'Daffodil', 'Daisy', 'Dakota', 'Dancer', 'Daphne', 'Darla', 'Darling', 'Dash', 'Dazzle', 'December', 'Delilah', 'Delilia', 'Delora', 'Derby', 'Destiny', 'Dewdrop', 'Dewy', 'Dharma', 'Digit', 'Dipsy', 'Dixie', 'Doctor Hoo', 'Doctor Hoot', 'Dodger', 'Dolly', 'Donut', 'Doobie', 'Doodle', 'Doodles', 'Dottie', 'Dragonfly', 'Drew', 'Droplet', 'Duchess', 'Ducky', 'Dune', 'Ebony', 'Echo', 'Eclipse', 'Electra', 'Elise', 'Ella', 'Ellen', 'Ellie', 'Elliott', 'Emerald', 'Emeril', 'Emma', 'Envy', 'Ester', 'Eternity', 'Eureka', 'Evanesence', 'Eve', 'Faith', 'Fajah', 'Feather', 'Feathers', 'Felicity', 'Fidel', 'Fido', 'Fiona', 'Flake', 'Flakes', 'Fletcher', 'Flint', 'Flower', 'Fluff', 'Fluffy', 'Fontana', 'Forest', 'Forrest', 'Foster', 'Fraya', 'Freckles', 'Freedom', 'Freefall', 'Frosty', 'Fuji', 'Fuzz', 'Fuzzle', 'Fuzzy', 'Gabby', 'Gahara', 'Gazoo', 'Gem', 'Genesis', 'Genica', 'Georgie', 'Giggles', 'Gilligan', 'Ginger', 'Ginny', 'Gladys', 'Gloria', 'Goldie', 'Grace', 'Gracie', 'Gretel', 'Griffon', 'Grommit', 'Guacamowle', 'Gunner', 'Gusty', 'Gypsy', 'Hailey', 'Haley', 'Hannibel', 'Hannibelle', 'Happy', 'Harley', 'Harmony', 'Hazel', 'Heather', 'Heckle', 'Hermie', 'Hermoine', 'Higgins', 'Hobbs', 'Holly', 'Honey', 'Hope', 'Hula', 'Icequeen', 'Idalia', 'Idana', 'Iliana', 'Independence', 'Indigo', 'Indy', 'Infinity', 'Ira', 'Isanne', 'Itchy', 'Ivory', 'Izzy', 'Jace', 'Jacey', 'Jackie', 'Jada', 'Jade', 'Jadey', 'Jadie', 'Jalene', 'Jamie', 'Jane', 'January', 'Jasmine', 'Java', 'Jax', 'Jaxie', 'Jaybird', 'Jazmin', 'Jazz', 'Jazzy', 'Jelly', 'Jellybean', 'Jeneva', 'Jenna', 'Jenny', 'Jesimae', 'Jeslyn', 'Jewel', 'Jezebel', 'Jezibel', 'Jingles', 'Jinx', 'Joy', 'Jubilee', 'Jude', 'Judy', 'June', 'Juniper', 'Justice', 'Kaely', 'Kahlua', 'Kailey', 'Kalea', 'Kalin', 'Kamina', 'Kandy', 'Karah', 'Katey', 'Kawika', 'Kaycee', 'Kayla', 'Kaylee', 'Kazoo', 'Kazooie', 'Kebles', 'Kedzie', 'Keekee', 'Kenadia', 'Kenna', 'Kesler', 'Keyanna', 'Kia', 'Kiana', 'Kiaro', 'Kika', 'Kiki', 'Kiko', 'Kiky', 'Kira', 'Kisses', 'Kissie', 'Kiwi', 'Klara', 'Knoodles', 'Knuckles', 'Koa', 'Kohana', 'Kohi', 'Kokamoe', 'Kokomo', 'Kruz', 'Kye', 'Kyla', 'Kylia', 'Kyra', 'Kyro', 'Lace', 'Lacey', 'Lacy', 'Lady', 'Lavendar', 'Leah', 'Leela', 'Leia', 'Leighna', 'Lelou', 'Lena', 'Levi', 'Lexi', 'Lexis', 'Libby', 'Liberty', 'Lightning', 'Lilian', 'Lilo', 'Lily', 'Litle Miracle', 'Little Hoot', 'Little Hooter', 'Littlefoot', 'Lizzy', 'Lola', 'Lollipop', 'Loopy', 'Lore', 'Lorene', 'Love', 'Lovie', 'Lucky', 'Lucy', 'Lulu', 'Luna', 'Lydia', 'Mabel', 'Macey', 'Mackenzie', 'Madame', 'Maddy', 'Madison', 'Madonna', 'Mae', 'Maggie', 'Mahalia', 'Mai', 'Makaila', 'Makana', 'Malice', 'Mango', 'Marble', 'Marbles', 'Marilu', 'Marilyn', 'Marshmallow', 'Matilda', 'Matsumoto', 'Matu', 'Mauve', 'Maxine', 'May', 'Maya', 'Maylin', 'Meadow', 'Mellon', 'Mellow', 'Melody', 'Melon', 'Melora', 'Mercury', 'Merlot', 'Merlyn', 'Meryl', 'Mia', 'Micah', 'Midnight', 'Migo', 'Mika', 'Mikaia', 'Mildred', 'Mileena', 'Milo', 'Minerva', 'Miracle', 'Misha', 'Missy', 'Mistletoe', 'Misty', 'Mitzee', 'Mixey', 'Mo', 'Moa', 'Mocha', 'Mocks', 'Moka', 'Moki', 'Mokie', 'Molly', 'Momo', 'Mona', 'Mongo', 'Montana', 'Moochie', 'Moondancer', 'Moondust', 'Moonlight', 'Morgan', 'Muffin', 'Mya', 'Mystery', 'Mystique', 'Nadine', 'Nala', 'Nana', 'Nani', 'Naomi', 'Nemo', 'Nia', 'Nibbles', 'Nibby', 'Nightingale', 'Nikita', 'Nina', 'Noa', 'Noelle', 'Nova', 'Nugget', 'Nutmeg', 'Oats', 'Odie', 'Okie', 'Olive', 'Olivia', 'Opal', 'Ophelia', 'Orbit', 'Oreo', 'Origami', 'Owlberta', 'Owlinor', 'Owlivia', 'Owlleta', 'Owlvira', 'Owly', 'Pancake', 'Pandora', 'Parsley', 'Passion', 'Patch', 'Patches', 'Patience', 'Pea', 'Peach', 'Peaches', 'Pebbles', 'Pecker', 'Pecks', 'Peepers', 'Penelope', 'Pepper', 'Peppermint', 'Peppers', 'Phoebe', 'Pickle', 'Pickles', 'Pico', 'Pika', 'Pip', 'Pipper', 'Pipsqueak', 'Pixie', 'Pocket', 'Pockets', 'Pogo', 'Pookie', 'Popcorn', 'Powder', 'Precious', 'Pretzel', 'Primrose', 'Puddles', 'Pudge', 'Puffins', 'Quacker', 'Queenie', 'Quill', 'Racine', 'Raihne', 'Rain', 'Rainbow', 'Raindrop', 'Raine', 'Ramona', 'Razzle', 'Regine', 'Remedy', 'Remi', 'Ricochet', 'River', 'Robyn', 'Rogue', 'Rolo', 'Romana', 'Rose', 'Rosemary', 'Rosey', 'Rosina', 'Rosita', 'Roxanne', 'Roxy', 'Ruby', 'Rudy', 'Ruffles', 'Ruth', 'Sabby', 'Sable', 'Sabrina', 'Sadie', 'Sady', 'Salem', 'Sally', 'Salsa', 'Samantha', 'Sapphire', 'Sarah', 'Savanah', 'Savannah', 'Scarlet', 'Scarlett', 'Scoots', 'Scrabble', 'Screech', 'Scribble', 'Scribbles', 'Scruffles', 'Scuddle', 'Selena', 'Serendipity', 'Shadow', 'Sheila', 'Shiloh', 'Shivers', 'Sidney', 'Sierra', 'Sikita', 'Silk', 'Silly', 'Silver', 'Silvermoon', 'Sizzles', 'Skeetra', 'Skittles', 'Sky', 'Skye', 'Skylar', 'Skyler', 'Smooch', 'Smoochie', 'Snappy', 'Sneaky', 'Snickerdoodle', 'Snow', 'Snowball', 'Snowflake', 'Snowy', 'Snuggles', 'Sonata', 'Sonia', 'Soprano', 'Sparkle', 'Sparkler', 'Sparkles', 'Sparky', 'Sparx', 'Specker', 'Speckles', 'Spot', 'Sprite', 'Squawk', 'Squawks', 'Squeaker', 'Squiggles', 'Squiggy', 'Stacey', 'Starburst', 'Starlight', 'Starlite', 'Starr', 'Stash', 'Stella', 'Sterling', 'Stinky', 'Stitches', 'Storm', 'Stormy', 'Studs', 'Sugar', 'Sugarpop', 'Sully', 'Summer', 'Suna', 'Sundance', 'Sunshine', 'Susanna', 'Suzee', 'Sweet Pepper', 'Sweetheart', 'Sweetie', 'Sweetie Pie', 'Sweetness', 'Sweetpea', 'Sweetums', 'Sweety', 'Swifty', 'Swoosh', 'Sybil', 'Sydney', 'Symone', 'Taffy', 'Tahoe', 'Tally', 'Talula', 'Tamatha', 'Tamber', 'Tapeka', 'Tasha', 'Tater', 'Tatoo', 'Tattoo', 'Taylor', 'Teeny', 'Tempest', 'Tempeste', 'Thatch', 'Thelma', 'Thyme', 'Tickles', 'Tiggy', 'Timber', 'Tinker', 'Tinkerbell', 'Tinkerbelle', 'Tinky', 'Tiny', 'Toodles', 'Toot', 'Tootie', 'Toots', 'Tootsie', 'Toshi', 'Tracey', 'Treasure', 'Trinity', 'Trinket', 'Trixi', 'Trouble', 'Troubles', 'Tweedle', 'Tweeky', 'Tweeter', 'Tweeters', 'Tweets', 'Twiggles', 'Twilight', 'Twinkle', 'Twinkles', 'Valentine', 'Vanilla', 'Velvet', 'Velvette', 'Venus', 'Victoria', 'Violet', 'Vivienne', 'Waffle', 'Waffles', 'Wasabi', 'Weebles', 'Whisper', 'Whispers', 'Whitney', 'Wiggle', 'Wiggles', 'Winifred', 'Wobbles', 'Woodstock', 'Wumba', 'Xantara', 'Xena', 'Yahtzee', 'Yaya', 'Yogi', 'Yoki', 'Yoshi', 'Yoyo', 'Yuna', 'Zabrina', 'Zahava', 'Zava', 'Zaza', 'Zazoo', 'Zelda', 'Zibby', 'Ziggy', 'Zoey', 'Zoya'];



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
