export default function bears() {
  let rnd;

  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Adalbero', 'Aloysius', 'Andy', 'Anuk', 'Arcadius', 'Arcot', 'Arkadios', 'Arktos', 'Armel', 'Arnbjorn', 'Arshag', 'Art', 'Artair', 'Artan', 'Arther', 'Arthfael', 'Arthmael', 'Arthog', 'Arthur', 'Artie', 'Artis', 'Arto', 'Artorius', 'Arttu', 'Artturi', 'Artur', 'Arturas', 'Arturo', 'Arty', 'Asbjorn', 'Attie', 'Atty', 'Auberon', 'Avery', 'Avonaco', 'Bam-Bam', 'Bamard', 'Bamey', 'Banjo', 'Barbell', 'Barend', 'Barley', 'Barnard', 'Barnea', 'Barney', 'Barnie', 'Barny', 'Barret', 'Barrett', 'Barry', 'Basil', 'Bastian', 'Beamard', 'Bear', 'Bearnabus', 'Bearnard', 'Behrend', 'Beirne', 'Bemelle', 'Bemot', 'Benard', 'Benat', 'Benno', 'Benton', 'Beorn', 'Beornheard', 'Beowulf', 'Ber', 'Beraco', 'Beranger', 'Beregiso', 'Berend', 'Berengar', 'Berengarius', 'Berenger', 'Berenguer', 'Berernger', 'Beringar', 'Beringarius', 'Berinhard', 'Bern', 'Bernaldino', 'Bernard', 'Bernardino', 'Bernardo', 'Bernardus', 'Bernardyn', 'Bernat', 'Bernd', 'Berndt', 'Berne', 'Berney', 'Bernfried', 'Bernhard', 'Bernhardt', 'Bernie', 'Bernon', 'Bernt', 'Bernward', 'Berny', 'Bero', 'Billie', 'Biorna', 'Bitsy', 'Bjarne', 'Bjarni', 'Bjoern', 'Bjorn', 'Bjornar', 'Bjorne', 'Blubber', 'Bobby', 'Bobo', 'Boo Boo', 'Boots', 'Burnard', 'Burney', 'Buttercup', 'Buttons', 'Calico', 'Capps', 'Caramel', 'Casey', 'Cedar', 'Chancie', 'Charlie', 'Chip', 'Coco', 'Cornelius', 'Dopey', 'Dov', 'Drogo', 'Dubi', 'Dusty', 'Eden', 'Edun', 'Einstein', 'Enyeto', 'Esben', 'Espen', 'Finley', 'Flubber', 'Fluffy', 'Frankie', 'Freddy', 'Garcia', 'Geoff', 'George', 'Georgie', 'Georgy', 'Gerben', 'Grumpy', 'Gunnbjorn', 'Hallbjorn', 'Hamilton', 'Happy', 'Hartz', 'Hausu', 'Henri', 'Henry', 'Hohots', 'Honaw', 'Honon', 'Horace', 'Howell', 'Humbert', 'Humphrey', 'Huslu', 'Jack', 'James', 'Jammy', 'Jasper', 'Joachim', 'Johnny', 'Jonsey', 'Jupiter', 'Justin', 'Kolbjorn', 'Kuma', 'Kuruk', 'Lannie', 'Lennie', 'Liwanu', 'Louis', 'Machk', 'Mahon', 'Marley', 'Marshmellow', 'Mathe', 'Mathuin', 'Matoskah', 'Mecho', 'Mitch', 'Molimo', 'Myr', 'Nanook', 'Nanuk', 'Nibbs', 'Niels', 'Norman', 'Notaku', 'O\'Berry', 'Oberon', 'Oliver', 'Omar', 'Orion', 'Ors', 'Orsen', 'Orsin', 'Orsino', 'Orso', 'Orson', 'Osbeorn', 'Osborn', 'Osborne', 'Osbourne', 'Oscar', 'Otso', 'Ottille', 'Otto', 'Ourson', 'Panda', 'Pandy', 'Pat', 'Patches', 'Pebbles', 'Ponty', 'Popey', 'Preben', 'Pridbjorn', 'Quadro', 'Rio', 'Robbie', 'Rocky', 'Rolly', 'Rum', 'Sabby', 'Sammy', 'Scoot', 'Scottie', 'Sebastian', 'Sewati', 'Shorty', 'Sigbjorn', 'Skittle', 'Sleepy', 'Smokey', 'Snowball', 'Sonny', 'Sooty', 'Spencer', 'Spike', 'Spiky', 'Stormy', 'Sugar', 'Sunshine', 'Svenbjorn', 'Tabby', 'Talbert', 'Tarben', 'Tatty', 'Teddy', 'Telutci', 'Theo', 'Theodore', 'Thorben', 'Thorbern', 'Thorbjorn', 'Thorburn', 'Thorton', 'Tickles', 'Tims', 'Toby', 'Toffy', 'Tony', 'Torben', 'Torbern', 'Torbernus', 'Torbjorn', 'Tottles', 'Trevor', 'Trump', 'Tubby', 'Tuketu', 'Turi', 'Twinky', 'Ucumari', 'Uffo', 'Uigbiorn', 'Urs', 'Ursino', 'Ursinus', 'Ursus', 'Uther', 'Uzumati', 'Vemados', 'Vermundo', 'Vernados', 'Victor', 'Waffle', 'Walter', 'Willie', 'Winston', 'Woodsy', 'Wyborn', 'Yana', 'Zed'];
  const nm2 = ['Abby', 'Angel', 'Apple-pie', 'Arcadia', 'Ariane', 'Armelle', 'Arthuretta', 'Arthurine', 'Arti', 'Averi', 'Averie', 'Avery', 'Ayla', 'Banjo', 'Barrett', 'Barretta', 'Beatrice', 'Bella', 'Bemadette', 'Bera', 'Beratrice', 'Berdine', 'Berengari', 'Berengaria', 'Berenice', 'Bern', 'Bernadea', 'Bernadete', 'Bernadett', 'Bernadette', 'Bernadina', 'Bernadine', 'Bernarda', 'Bernarde', 'Bernardete', 'Bernardetta', 'Bernardette', 'Bernardina', 'Bernardine', 'Bernardita', 'Berne', 'Berneen', 'Bernelle', 'Bitsy', 'Blubber', 'Bobo', 'Boo Boo', 'Boots', 'Bubbles', 'Buttercup', 'Buttons', 'Calico', 'Calista', 'Callista', 'Callisto', 'Caramel', 'Clymene', 'Coco', 'Dandelion', 'Dopey', 'Doris', 'Dusty', 'Eden', 'Eferhild', 'Eferhilda', 'Elizabeth', 'Emily', 'Fatima', 'Flubber', 'Fluffy', 'Georgy', 'Grumpy', 'Hagar', 'Happy', 'Hausu', 'Heltu', 'Honey', 'Irene', 'Isobel', 'Izzy', 'Jammy', 'Jane', 'Jerica', 'Jewel', 'Jupiter', 'Justine', 'Kuma', 'Louis', 'Louise', 'Lusela', 'Maggie', 'Mahtowa', 'Margaret', 'Marshmellow', 'Mecislava', 'Melanie', 'Miffy', 'Myr', 'Nadetta', 'Nadette', 'Nibbs', 'Nita', 'Orsa', 'Orsaline', 'Orse', 'Orsel', 'Orselina', 'Orseline', 'Orsina', 'Orsola', 'Orsolya', 'Osha', 'Ottilie', 'Pam', 'Panda', 'Pandy', 'Pat', 'Patches', 'Patricia', 'Peaches', 'Pebbles', 'Penny', 'Persephone', 'Poe', 'Polly', 'Puddles', 'Queenie', 'Rio', 'Rolly', 'Rosie', 'Roxie', 'Sabby', 'Samantha', 'Sammie', 'Sandra', 'Sapata', 'Sargie', 'Sienna', 'Skittle', 'Sleepy', 'Smokey', 'Snowball', 'Sugar', 'Sunshine', 'Susanna', 'Susie', 'Suzie', 'Tabby', 'Taffy', 'Tatty', 'Thorborg', 'Tickles', 'Toffy', 'Torborg', 'Tottles', 'Tubby', 'Twinky', 'Ursa', 'Ursala', 'Ursel', 'Ursella', 'Ursicina', 'Ursina', 'Ursine', 'Urska', 'Ursula', 'Ursule', 'Ursulina', 'Urszula', 'Uschi', 'Valerie', 'Venus', 'Veronica', 'Versula', 'Viola', 'Violet', 'Violette', 'Waffle', 'Wilhelmina', 'Winifred', 'Winnie', 'Winona'];


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
