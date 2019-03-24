export default function hobbits() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Adalard', 'Adalbert', 'Adalhaid', 'Adalolf', 'Ageric', 'Agilfride', 'Agiulf', 'Alberic', 'Amand', 'Andica', 'Angilbert', 'Engilbert', 'Ansegisel', 'Ansovald', 'Aregisel', 'Arnegisel', 'Arnold', 'Arnulf', 'Audovald', 'Austregisel', 'Badegisel', 'Balderic', 'Baldrick', 'Baudry', 'Berengar', 'Berenger', 'Bernhard', 'Bernard', 'Bero', 'Berthefried', 'Bertram', 'Burchard', 'Carloman', 'Chararic', 'Charibert', 'Childebert', 'Childebrand', 'Childeric', 'Chilperic', 'Chlodomer', 'Chramnesind', 'Clodio', 'Chlodion', 'Cloud', 'Clovis', 'Chlodwig', 'Conrad', 'Corbus', 'Dagobert', 'Dagaric', 'Drogo', 'Drogon', 'Durand', 'Eberhard', 'Evrard', 'Eberulf', 'Ebregisel', 'Emmon', 'Engelbert', 'Egide', 'Eracle', 'Erard', 'Erenfried', 'Euric', 'Farabert', 'Floribert', 'Fulcaire', 'Gararic', 'Garivald', 'Gerbert', 'Gerold', 'Giselbert', 'Gilbert', 'Godomar', 'Gondulph', 'Grimald', 'Grimoald', 'Griffon', 'Guido', 'Wido', 'Gundobad', 'Gundovald', 'Gunthar', 'Guntram', 'Hartgard', 'Hartmut', 'Hartnid', 'Heribert', 'Hildebald', 'Hubert', 'Imnachar', 'Ingelram', 'Enguerrand', 'Ingomer', 'Ingund', 'Lambert', 'Leudast', 'Leuthard', 'Lothar', 'Magnachar', 'Magneric', 'Malaric', 'Marachar', 'Marcomir', 'Meginhard', 'Merovech', 'Monulph', 'Munderic', 'Nevelung', 'Nibelung', 'Nithard', 'Notger', 'Odilon', 'Odo', 'Otbert', 'Otto', 'Otton', 'Otker', 'Pippin', 'Pepin', 'Ramnulf', 'Rathar', 'Rathier', 'Ratold', 'Reginar', 'Reginard', 'Remacle', 'Ricbodo', 'Ricchar', 'Richer', 'Ricfried', 'Rigunth', 'Samson', 'Sichar', 'Siegfried', 'Sigefroy', 'Sigeric', 'Sigibert', 'Sigismund', 'Sunnegisil', 'Sunno', 'Tassilo', 'Theodard', 'Theodebert', 'Theodemir', 'Theodon', 'Theodoric', 'Thierry', 'Theodore', 'Theodwin', 'Theudebald', 'Theuderic', 'Unroch', 'Wala', 'Waleran', 'Walcaud', 'Waltgaud', 'Wazo', 'Werinbert', 'Willichar', 'Wolbodo', 'Wulfhard', 'Zwentibold', 'Abbo', 'Adalbert', 'Adaldag', 'Adalhard', 'Adelard', 'Aega', 'Agilbert', 'Agobard', 'Aigulf', 'Alberic', 'Allowin', 'Amalricus', 'Amand', 'Amator', 'Angegisis', 'Angilbart', 'Angilbert', 'Anno', 'Ansegisel', 'Anskar', 'Arbitio', 'Arbogast', 'Arbogastes', 'Arculf', 'Arnoul', 'Arnulf', 'Artaud', 'Asselin', 'Atacinus', 'Audoen', 'Audomar', 'Audoneus', 'Audramnus', 'Baugulf', 'Bauto', 'Bavo', 'Benild', 'Berchar', 'Berengar', 'Bernard', 'Berno', 'Bero', 'Bertelis', 'Berthaire', 'Bertin', 'Bertulf', 'Besso', 'Birinus', 'Blutmund', 'Boso', 'Bovo', 'Brice', 'Britius', 'Brocard', 'Bruno', 'Burchard', 'Butilin', 'Carloman', 'Cassyon', 'Ceufroy', 'Charibert', 'Charles', 'Cheldric', 'Childebert', 'Childebrand', 'Childeric', 'Chilperic', 'Chlodmer', 'Chlodowig', 'Chlotar', 'Chrodegang', 'Clodomir', 'Clotaire', 'Clothair', 'Clovis', 'Corbinian', 'Cyr', 'Cyricus', 'Dado', 'Dagobert', 'Dalfin', 'Dodo', 'Dreux', 'Drogo', 'Dudon', 'Ebbo', 'Ebroin', 'Ebrulf', 'Einhard', 'Emme', 'Emmeran', 'Engilbert', 'Enurchus', 'Erchinoald', 'Evroul', 'Evroult', 'Fardulf', 'Faro', 'Flodoard', 'Folcard', 'Folmar', 'Fredegar', 'Fridolin', 'Fridugis', 'Fulbert', 'Fulk', 'Fulrad', 'Gerbert', 'Gereon', 'Gerold', 'Gifemund', 'Giseler', 'Giso', 'Godobald', 'Godun', 'Goisfrid', 'Goscelin', 'Gouzlim', 'Gozbert', 'Gozolon', 'Grifo', 'Grimald', 'Grimbald', 'Gunthar', 'Guntramn', 'Hagen', 'Halinard', 'Hartmut', 'Helinand', 'Helisachar', 'Heribert', 'Hildebald', 'Hildebold', 'Hildeprand', 'Hilduin', 'Hincmar', 'Hlodver', 'Huebald', 'Humbert', 'Hunald', 'Imbert', 'Imninon', 'Jocelin', 'Lambert', 'Lanfranc', 'Laudus', 'Lebuin', 'Ledger', 'Leger', 'Leodegar', 'Letard', 'Leufred', 'Leufroy', 'Leutfrid', 'Leuthere', 'Liudhard', 'Liudolf', 'Lo', 'Lothar', 'Lul', 'Lull', 'Maiuel', 'Maixent', 'Majorian', 'Mallobaudes', 'Mansuetus', 'Maraulf', 'Marcoul', 'Matfrid', 'Mauger', 'Medard', 'Meginhard', 'Merobaudes', 'Merovech', 'Nithard', 'Norbert', 'Nordbert', 'Notker', 'Odger', 'Odo', 'Odulf', 'Omer', 'Orderic', 'Otker', 'Ouen', 'Ouus', 'Pacatian', 'Pair', 'Pancras', 'Panteleon', 'Pepin', 'Philibert', 'Piligrim', 'Pippin', 'Poppo', 'Puvis', 'Radigis', 'Ragnfred', 'Razo', 'Reginald', 'Reginar', 'Remi', 'Reolus', 'Richomer', 'Richomeres', 'Riquier', 'Rothad', 'Samo', 'Sergius', 'Sicho', 'Sigebert', 'Sigibert', 'Suger', 'Suidbert', 'Suidger', 'Syagrius', 'Tassilo', 'Taurin', 'Tescelin', 'Thankmar', 'Theodard', 'Theodoric', 'Theodulf', 'Theodulph', 'Theudebert', 'Theuderic', 'Theutgaud', 'Thierry', 'Thietmar', 'Turpin', 'Vedast', 'Vicelin', 'Vigor', 'Vulmar', 'Waiofar', 'Wala', 'Walaric', 'Waldolanus', 'Waltgaud', 'Wandregisel', 'Wandregisilus', 'Wandrille', 'Warmann', 'Werinbert', 'Wibert', 'Wichmann', 'Willehad', 'Willibald', 'Willibrord', 'Wulfram', 'Adelbert', 'Adelgrim', 'Adelard', 'Alaric', 'Alberic', 'Andwise', 'Ansegar', 'Arnor', 'Athanaric', 'Balbo', 'Banazir', 'Bandobras', 'Belisarius', 'Bercilac', 'Berilac', 'Bilba', 'Bilbo', 'Bilcuzal', 'Bildad', 'Bildat', 'Bingo', 'Bladud', 'Blanco', 'Bucca', 'Bob', 'Basso', 'Bodo', 'Bosco', 'Bowman', 'Briffo', 'Bruno', 'Brutus', 'Bungo', 'Caradas', 'Caradoc', 'Carambo', 'Carl', 'Cedivar', 'Celedor', 'Ceredic', 'Cerdic', 'Columbus', 'Conrad', 'Cosimo', 'Cotman', 'Cottar', 'Crassus', 'Crispus', 'Deagol', 'Dinodas', 'Doderic', 'Dodinas', 'Drogo', 'Dudo', 'Elfstan', 'Erling', 'Everard', 'Falco', 'Faramir', 'Faramond', 'Fastred', 'Fastolph', 'Ferdinand', 'Ferumbras', 'Filibert', 'Flambard', 'Flavus', 'Folcard', 'Folco', 'Fortinbras', 'Fosco', 'Fredegar', 'Frodo', 'Fulvus', 'Gerontius', 'Goodwill', 'Gorhendad', 'Gorbadoc', 'Gorbaduc', 'Gorbulas', 'Gormadoc', 'Griffo', 'Gringamor', 'Grossman', 'Gruffo', 'Guido', 'Gundabald', 'Gundahar', 'Gundobad', 'Gundolpho', 'Habaccuc', 'Haiduc', 'Hal', 'Halfred', 'Hamfast', 'Hamilcar', 'Harding', 'Hending', 'Heribald', 'Herugar', 'Hildibrand', 'Hildigard', 'Hildifons', 'Hildigrim', 'Hob', 'Hobson', 'Holfast', 'Holman', 'Hugo', 'Ilberic', 'Iago', 'Inigo', 'Iolo', 'Isembard', 'Isembold', 'Isengar', 'Isengrim', 'Isengrin', 'Isumbras', 'Jago', 'Jo', 'Jolly', 'Kalimac', 'Lamorac', 'Largo', 'Longo', 'Lotho', 'Madoc', 'Magnus', 'Marcho', 'Marco', 'Marcus', 'Marmadoc', 'Marmaduc', 'Marmaduke', 'Marroc', 'Matta', 'Mattalic', 'Maura', 'Melampus', 'Meneaduc', 'Marmadas', 'Meriadoc', 'Merimac', 'Merimas', 'Merry', 'Milo', 'Minto', 'Moro', 'Mosco', 'Mungo', 'Nahand', 'Nob', 'Nibs', 'Nicol', 'Nick', 'Obo', 'Odo', 'Odovacar', 'Olo', 'Orgulas', 'Orlando', 'Otho', 'Peregrin', 'Pippin', 'Polo', 'Ponto', 'Porro', 'Posco', 'Priamus', 'Prospero', 'Ranugad', 'Razanur', 'Reginard', 'Robin', 'Robur', 'Roderic', 'Rollo', 'Rorimac', 'Rudibert', 'Rudigar', 'Rudolph', 'Rufus', 'Sadoc', 'Sago', 'Samlad', 'Samwise', 'Sancho', 'Sagramor', 'Saradas', 'Saradoc', 'Scudamor', 'Seredic', 'Sigismond', 'Smeagol', 'Ted', 'Theobald', 'Theodoric', 'Timba', 'Tim', 'Timothy', 'Tobias', 'Tobold', 'Togo', 'Tolman', 'Tomba', 'Tomburan', 'Tomacca', 'Trahand', 'Uffo', 'Valdemar', 'Vigo', 'Wilcome', 'Wilibald', 'Wilimar', 'Will', 'Wiseman'];
  const nm2 = ['Adallinda', 'Adaltrude', 'Adelheid', 'Alpaida', 'Alpais', 'Ansgard', 'Aubirge', 'Audofleda', 'Baldechildis', 'Basina', 'Begga', 'Berenga', 'Bertha', 'Bertrada', 'Burgundefara', 'Clothild', 'Eadgithu', 'Emma', 'Engelberga', 'Ermengard', 'Ermentrudis', 'Fara', 'Fastrada', 'Foy', 'Genofeva', 'Gersvinda', 'Gisela', 'Gudula', 'Gudule', 'Gundrada', 'Herleva', 'Hildegard', 'Hildegarde', 'Hildegund', 'Hiltrude', 'Hodierna', 'Ingeltrude', 'Ingeltrudis', 'Joveta', 'Liobsynde', 'Liutgarde', 'Madelgarde', 'Mechtild', 'Moschia', 'Nantechildis', 'Oda', 'Ogiva', 'Plectrudis', 'Radogund', 'Rosamund', 'Rothaide', 'Rotrude', 'Rotrudis', 'Ruothilde', 'Theodelinda', 'Theoderada', 'Theutberga', 'Waldrada', 'Adaltrude', 'Adallind', 'Adallinda', 'Adelhaid', 'Adda', 'Albofleda', 'Alpaide', 'Alpais', 'Aregund', 'Aude', 'Audofleda', 'Audovera', 'Austrechild', 'Atula', 'Athalia', 'Adele', 'Baldechildis', 'Basina', 'Bave', 'Berchildis', 'Begga', 'Beretrude', 'Bertha', 'Berthe', 'Berthefled', 'Berthefried', 'Berthegund', 'Bertoane', 'Bertrada', 'Bilichildis', 'Blesinde', 'Brunhild', 'Brunhilda', 'Fastrada', 'Chlodeswinthe', 'Chlodosind', 'Chlothsinda', 'Chrodechildis', 'Chrodtrude', 'Clotild', 'Clotilde', 'Chunsina', 'Cunegonde', 'Kunegund', 'Cunegundis', 'Cunegund', 'Deuteria', 'Ealswid', 'Ellinrat', 'Engelberge', 'Ingelburga', 'Engeltrude', 'Ermenberga', 'Ermengarde', 'Ermentrudis', 'Faileuba', 'Fastrada', 'Fredegunde', 'Galswinth', 'Gersvinda', 'Gisela', 'Gundrada', 'Gundradis', 'Gomatrudis', 'Goiswinth', 'Gundrade', 'Guntheuc', 'Gunza', 'Hamesindis', 'Hatilde', 'Hildeburg', 'Hildegarde', 'Hiltrude', 'Himiltrud', 'Ingeltrud', 'Ingitrude', 'Ingoberg', 'Ingunde', 'Irmgard', 'Irmingard', 'Itta', 'Lanthechilde', 'Leubast', 'Leubovera', 'Liutgarde', 'Luitgarde', 'Magnatrude', 'Marcatrude', 'Marcovefa', 'Madelgarde', 'Madelgarda', 'Merofled', 'Merwig', 'Nantechildis', 'Radegund', 'Ragnachilde', 'Regintrude', 'Regnetrudis', 'Rigunth', 'Rosamund', 'Rotrud', 'Ruodhaid', 'Ruothild', 'Ruothilde', 'Rothaide', 'Rotrude', 'Swanahilde', 'Teutberga', 'Theoderada', 'Theodrada', 'Theodelinda', 'Theodrade', 'Theudechild', 'Theudelinde', 'Ultrogotha', 'Veneranda', 'Vuldretrada', 'Vulfegundis', 'Wisigard', 'Adaldrida', 'Alfrida', 'Amalda', 'Amanda', 'Amaranth', 'Amethyst', 'Angelica', 'Arabella', 'Asphodel', 'Belba', 'Belinda', 'Bellisima', 'Bell', 'Belladonna', 'Bertha', 'Berylla', 'Camelia', 'Cara', 'Caramella', 'Celendine', 'Cora', 'Cornelia', 'Chica', 'Daisy', 'Diamanda', 'Diamond', 'Dina', 'Donnamira', 'Dora', 'Duenna', 'Eglantine', 'Elanor', 'Esmeralda', 'Estella', 'Fatima', 'Gerda', 'Gilly', 'Gloriana', 'Goldilocks', 'Grimalda', 'Hilda', 'Jasmine', 'Jemima', 'Jessamine', 'Lalia', 'Laura', 'Lavinia', 'Lily', 'Linda', 'Lobelia', 'Malva', 'Marigold', 'Mantissa', 'Matilda', 'Maxima', 'May', 'Melba', 'Melilot', 'Melissa', 'Menegilda', 'Mentha', 'Mimosa', 'Mirabella', 'Miranda', 'Myrtle', 'Nina', 'Nora', 'Pamphila', 'Pandora', 'Pansy', 'Pearl', 'Peony', 'Pervinca', 'Pimpernel', 'Poppy', 'Prima', 'Primrose', 'Primula', 'Prisca', 'Regina', 'Rhoda', 'Robinia', 'Rosa', 'Rosamunda', 'Rose', 'Rowan', 'Ruby', 'Salvia', 'Savanna', 'Selina', 'Semolina', 'Tanta', 'Yolanda', 'Abigail', 'Alexandra', 'Alexandria', 'Alexis', 'Alia', 'Alicia', 'Allison', 'Alura', 'Alyssa', 'Amanda', 'Amber', 'Amy', 'Andrea', 'Angela', 'Anna', 'Autumn', 'Bailey', 'Brianna', 'Brittany', 'Brooke', 'Caitlin', 'Calamity', 'Caroline', 'Cassandra', 'Catherine', 'Chelsea', 'Cheryl', 'Cheyenne', 'Christina', 'Cori', 'Courtney', 'Danielle', 'Darby', 'Deirdre', 'Delaney', 'Destiny', 'Devin', 'Diana', 'Donna', 'Elizabeth', 'Ellie', 'Emily', 'Emma', 'Erica', 'Erin', 'Esmee', 'Fallon', 'Fiona', 'Gabrielle', 'Ginelle', 'Grace', 'Haley', 'Hannah', 'Heather', 'Iridian', 'Jacqueline', 'Jasmine', 'Jenna', 'Jennifer', 'Jessica', 'Jordan', 'Julia', 'Kaitlyn', 'Katherine', 'Katie', 'Kayla', 'Keena', 'Keira', 'Kelsey', 'Kestrel', 'Kiley', 'Kimberly', 'Kristen', 'Kymma', 'Laura', 'Lauren', 'Leesha', 'Lenora', 'Lindsey', 'Llewella', 'Mackenzie', 'Madeline', 'Madison', 'Maria', 'Mariah', 'Marissa', 'Mary', 'Megan', 'Melissa', 'Michelle', 'Mindy', 'Miranda', 'Moira', 'Molly', 'Monica', 'Morgan', 'Myrna', 'Natalie', 'Neela', 'Nicole', 'Nora', 'Olivia', 'Paige', 'Rachel', 'Rebecca', 'Roslyn', 'Rowan', 'Ryan', 'Rylee', 'Sabrina', 'Saffron', 'Samantha', 'Sarah', 'Sarai', 'Savannah', 'Scarlet', 'Sestiva', 'Shanna', 'Shannon', 'Shawna', 'Shelby', 'Sierra', 'Sophie', 'Stephanie', 'Suri', 'Sydney', 'Tabitha', 'Tara', 'Taryn', 'Tasha', 'Tatiana', 'Tavia', 'Taylor', 'Terri', 'Tiffany', 'Vanessa', 'Victoria'];
  const nm3 = ['Baggins', 'Banks', 'Barrowes', 'Bilberry', 'Boffin', 'Bolger', 'Bolger-Baggins', 'Bophin', 'Boulderhill', 'Bottomhill', 'Bracegirdle', 'Bramblethorn', 'Brandagamba', 'Brandybuck', 'Brandywood', 'Brockhouse', 'Brown', 'Brownlock', 'Bunce', 'Burrowes', 'Burrows', 'Butcher', 'Button', 'Chubb', 'Chubb-Baggins', 'Clayhanger', 'Cotton', 'Cutton', 'Dewfoot', 'Diggle', 'Elvellon', 'Farfoot', 'Fairbairn', 'Fairfoot', 'Fallohide', 'Featherbottom', 'Finnagund', 'Fleetfoot', 'Galbassi', 'Galpsi', 'Gamgee', 'Gammidge', 'Gamwich', 'Gardner', 'Gaukrogers', 'Gawkroger', 'Gluttonbelly', 'Goldworthy', 'Goodbody', 'Goodchild', 'Goodsong', 'Goodwort', 'Goold', 'Greenhand', 'Greenhill', 'Grubb', 'Hairyfoot', 'Harfoot', 'Hayward', 'Headstrong', 'Heathertoes', 'Hedgehopper', 'Hlothran', 'Hogpen', 'Hopesinger', 'Hornblower', 'Hornwood', 'Knotwise', 'Labingi', 'Langham', 'Leafwalker', 'Lightfoot', 'Littlefoot', 'Longbottom', 'Longhole', 'Longfoot', 'Longriver', 'Lothran', 'Maggot', 'Mugwort', 'Noakes', 'Noakesburrow', 'North-took', 'Oakbottom', 'Oldbuck', 'Pott', 'Proudbottom', 'Proudfoot', 'Proudbody', 'Proudmead', 'Puddifoot', 'Puddlefoot', 'Riverhopper', 'Roper', 'Rumble', 'Rumblebelly', 'Sackville', 'Sackville-Baggins', 'Sandheaver', 'Sandyman', 'Silentfoot', 'Silverstring', 'Smallburrow', 'Stoor', 'Stumbletoe', 'Swiftfoot', 'Thornburrow', 'Tinyfoot', 'Took', 'Took-Brandybuck', 'Took-Took', 'Townsend', 'Tunnelly', 'Twofoot', 'Underburrow', 'Underfoot', 'Underhill', 'Undertree', 'Underlake', 'Wanderfoot', 'Whitfoot', 'Whitbottom', 'Zaragamba'];


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
