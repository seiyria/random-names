export default function estonians() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aabel', 'Aabraham', 'Aadu', 'Aare', 'Aarne', 'Aaron', 'Ago', 'Agu', 'Ahti', 'Ahto', 'Aigar', 'Ain', 'Aivar', 'Aivo', 'Aksel', 'Alar', 'Alari', 'Albert', 'Aleks', 'Aleksander', 'Allan', 'Allar', 'Alo', 'Alvar', 'Ando', 'Andre', 'Andreas', 'Andres', 'Andrus', 'Anti', 'Anton', 'Ants', 'Ardi', 'Ardo', 'Arno', 'Arnold', 'Arti', 'Artur', 'Arved', 'Arvi', 'Arvo', 'Asko', 'August', 'Edgar', 'Eduard', 'Eedo', 'Eedu', 'Eerik', 'Eero', 'Egert', 'Egon', 'Einar', 'Eino', 'Elias', 'Elmar', 'Elmo', 'Endel', 'Endrik', 'Enn', 'Enno', 'Ergo', 'Erik', 'Erki', 'Erko', 'Erlend', 'Ermo', 'Evald', 'Evert', 'Feliks', 'Georg', 'Gert', 'Gunnar', 'Gustav', 'Hannes', 'Hans', 'Hardi', 'Harri', 'Heigo', 'Heiki', 'Heino', 'Heiti', 'Hendrik', 'Henn', 'Henri', 'Hillar', 'Iisak', 'Illar', 'Illimar', 'Ilmar', 'Ilmo', 'Imre', 'Indrek', 'Innar', 'Ivar', 'Ivari', 'Ivo', 'Jaagup', 'Jaak', 'Jaakob', 'Jaan', 'Jaanus', 'Jakob', 'Janar', 'Janek', 'Janno', 'Jass', 'Joel', 'Johannes', 'Joona', 'Joonas', 'Joonatan', 'Joosep', 'Juhan', 'Juho', 'Jukk', 'Juss', 'Jurgen', 'Juri', 'Jurjo', 'Kaarel', 'Kaido', 'Kajar', 'Kalev', 'Kaljo', 'Kalju', 'Kalle', 'Kardo', 'Karl', 'Kaspar', 'Kaupo', 'Kaur', 'Kauri', 'Ken', 'Kermo', 'Kert', 'Kevin', 'Koit', 'Kristen', 'Kristian', 'Kristjan', 'Kristo', 'Kristofer', 'Kuldar', 'Kunnar', 'Kusta', 'Kustas', 'Kustav', 'Kullo', 'Laur', 'Lauri', 'Leevi', 'Leho', 'Lembit', 'Lennart', 'Luukas', 'Maanus', 'Maarjo', 'Madi', 'Madis', 'Magnus', 'Maido', 'Mairo', 'Mait', 'Marek', 'Margo', 'Margus', 'Mario', 'Mark', 'Marko', 'Markus', 'Marten', 'Marti', 'Martin', 'Mati', 'Matteus', 'Mattias', 'Meelis', 'Meeme', 'Mehis', 'Mihkel', 'Miikael', 'Mikk', 'Mart', 'Neeme', 'Nigul', 'Nigulas', 'Niilo', 'Nuut', 'Olari', 'Olavi', 'Olev', 'Oliver', 'Oskar', 'Ott', 'Otto', 'Paavo', 'Paul', 'Paulus', 'Peep', 'Peeter', 'Peetrus', 'Priidu', 'Priit', 'Ragnar', 'Raido', 'Raigo', 'Raiko', 'Raimo', 'Raimond', 'Rain', 'Rainer', 'Rait', 'Raivo', 'Rando', 'Ranno', 'Rasmus', 'Raul', 'Rauno', 'Reedik', 'Reigo', 'Rein', 'Reio', 'Rene', 'Richard', 'Rihard', 'Riho', 'Riivo', 'Risto', 'Robert', 'Robi', 'Robin', 'Roland', 'Roman', 'Romet', 'Roomet', 'Rudolf', 'Ruuben', 'Ruudi', 'Ruut', 'Runno', 'Saamuel', 'Sander', 'Siim', 'Siimeon', 'Siimon', 'Silver', 'Sten', 'Sulev', 'Sven', 'Taaniel', 'Taavet', 'Taavi', 'Taavo', 'Taivo', 'Tambet', 'Tanel', 'Tarmo', 'Tarvi', 'Tarvo', 'Tauno', 'Tauri', 'Teet', 'Tiidrik', 'Tiit', 'Tiitus', 'Timmo', 'Timmu', 'Timo', 'Toivo', 'Toomas', 'Tormi', 'Tuudor', 'Tonis', 'Tonu', 'Udo', 'Uku', 'Uno', 'Urmas', 'Urmet', 'Urmo', 'Uudo', 'Vahur', 'Vaiko', 'Vaino', 'Valdeko', 'Valdo', 'Valdur', 'Valentin', 'Vallo', 'Valter', 'Vambola', 'Veiko', 'Veljo', 'Vello', 'Verner', 'Vidrik', 'Viktor', 'Viljar', 'Viljo', 'Ville', 'Villem', 'Villu', 'Voldemar', 'Vootele', 'Vaino', 'Ulari', 'Ullar', 'Ullo', 'Ulo', 'Urjo'];
  const nm2 = ['Aada', 'Aasa', 'Aet', 'Age', 'Agnes', 'Aile', 'Aili', 'Aino', 'Ainu', 'Aire', 'Airi', 'Aita', 'Aive', 'Aleksandra', 'Alina', 'Andra', 'Anete', 'Angela', 'Angelika', 'Ann', 'Anna', 'Anne', 'Anneli', 'Anni', 'Annika', 'Anu', 'Asta', 'Astrid', 'Auli', 'Aune', 'Aurelia', 'Ave', 'Berit', 'Birgit', 'Brita', 'Dagmar', 'Diana', 'Ebe', 'Eda', 'Eeva', 'Eevi', 'Egle', 'Eha', 'Eili', 'Eliisa', 'Eliisabet', 'Eliise', 'Elina', 'Elis', 'Elle', 'Ellen', 'Elo', 'Elvi', 'Emma', 'Endla', 'Ene', 'Eneli', 'Epp', 'Ere', 'Erika', 'Esta', 'Ester', 'Eva', 'Eve', 'Evelin', 'Gerli', 'Greete', 'Grete', 'Hanna', 'Hedi', 'Heidi', 'Heili', 'Helbe', 'Hele', 'Helen', 'Helena', 'Heleri', 'Helga', 'Helgi', 'Heli', 'Helina', 'Helju', 'Helle', 'Helmi', 'Helve', 'Hiie', 'Hilda', 'Hilja', 'Hille', 'Iiris', 'Ille', 'Ilme', 'Ilona', 'Imbi', 'Ines', 'Inga', 'Inge', 'Ingel', 'Ingrid', 'Inna', 'Irene', 'Iris', 'Irja', 'Irma', 'Ivi', 'Ivika', 'Jaana', 'Jaanika', 'Jana', 'Jane', 'Janne', 'Johanna', 'Juta', 'Kaarin', 'Kadi', 'Kadri', 'Kai', 'Kaia', 'Kaidi', 'Kaie', 'Kaili', 'Kairi', 'Kaisa', 'Kaja', 'Karin', 'Karina', 'Karmen', 'Karoliina', 'Karoliine', 'Karolin', 'Katariina', 'Kati', 'Katre', 'Katri', 'Katriin', 'Katrin', 'Keiu', 'Kelli', 'Kerli', 'Kersti', 'Kerstin', 'Kertu', 'Kirke', 'Koidu', 'Krista', 'Kristel', 'Kristen', 'Kristi', 'Kristiina', 'Kristin', 'Kristina', 'Kart', 'Katlin', 'Kulli', 'Kullike', 'Laine', 'Laura', 'Lea', 'Leelo', 'Lehte', 'Leida', 'Leili', 'Lembi', 'Lemme', 'Lii', 'Liia', 'Liidia', 'Liilia', 'Liina', 'Liis', 'Liisa', 'Liisbet', 'Liisi', 'Liivi', 'Lilian', 'Lilli', 'Linda', 'Luule', 'Luudia', 'Maarika', 'Maarja', 'Made', 'Madli', 'Mai', 'Maia', 'Maie', 'Maila', 'Maimu', 'Maire', 'Malle', 'Mare', 'Maret', 'Margareeta', 'Margaret', 'Marge', 'Margit', 'Margot', 'Mari', 'Mari-Liis', 'Maria', 'Marika', 'Mariliis', 'Marina', 'Maris', 'Marit', 'Marje', 'Marju', 'Marleen', 'Marta', 'Marve', 'Meeli', 'Meelika', 'Meelike', 'Merike', 'Merili', 'Merilin', 'Merit', 'Merje', 'Merle', 'Miia', 'Miina', 'Minna', 'Mirjam', 'Monika', 'Moonika', 'Nele', 'Olli', 'Paula', 'Piia', 'Pille', 'Pilvi', 'Piret', 'Raahel', 'Rahel', 'Raili', 'Rebeka', 'Reeli', 'Reelika', 'Reet', 'Regina', 'Reili', 'Renate', 'Riin', 'Riina', 'Riinu', 'Rita', 'Ruth', 'Rutt', 'Ruut', 'Saara', 'Saima', 'Salme', 'Sandra', 'Sigrid', 'Siiri', 'Silja', 'Silvi', 'Silvia', 'Siret', 'Sirje', 'Sirli', 'Susanna', 'Taimi', 'Talvi', 'Tea', 'Teele', 'Terje', 'Tiia', 'Tiina', 'Tiiu', 'Triin', 'Triinu', 'Tuule', 'Tuuli', 'Ursula', 'Urve', 'Vaike', 'Valli', 'Veronika', 'Viia', 'Viiu', 'Viive', 'Viivi', 'Vilja', 'Virge', 'Virve', 'Oie', 'Onne', 'Onnela', 'Ulle'];
  const nm3 = ['Aare', 'Aasmae', 'Aavik', 'Allik', 'Alver', 'Eenpalu', 'Eskola', 'Harma', 'Ilves', 'Jakobson', 'Janes', 'Jogi', 'Kabin', 'Kalda', 'Kaljurand', 'Kallas', 'Kallaste', 'Kangro', 'Kangur', 'Kapp', 'Kask', 'Kass', 'Keskkula', 'Keskula', 'Kirsipuu', 'Kivi', 'Klavan', 'Koiv', 'Korjus', 'Kotka', 'Kross', 'Kukk', 'Kuusik', 'Kuusk', 'Laar', 'Laas', 'Laht', 'Laurits', 'Leok', 'Lepmets', 'Lepp', 'Levandi', 'Lill', 'Lippmaa', 'Lohmus', 'Looke', 'Magi', 'Malk', 'Mand', 'Mannik', 'Mark', 'Masing', 'Meri', 'Mets', 'Mitt', 'Must', 'Nurme', 'Nurmsalu', 'Oja', 'Olesk', 'Opik', 'Orav', 'Paasuke', 'Padar', 'Parn', 'Part', 'Peebo', 'Peetre', 'Pihlak', 'Piip', 'Puhvel', 'Putsep', 'Puusepp', 'Raud', 'Rebane', 'Rootare', 'Rummo', 'Ruutel', 'Ruutli', 'Saar', 'Sepp', 'Sibul', 'Sirel', 'Sisask', 'Sokk', 'Soosaar', 'Tamm', 'Teder', 'Toom', 'Vaher', 'Vaino', 'Valbe', 'Valjas', 'Valk', 'Vesik', 'Viiding', 'Vitsut', 'Vosu'];


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
