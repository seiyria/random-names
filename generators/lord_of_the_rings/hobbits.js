export default function hobbits() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abbo', 'Adalard', 'Adalbert', 'Adaldag', 'Adalgrim', 'Adalhaid', 'Adalhard', 'Adalolf', 'Adelard', 'Adelbert', 'Adelgrim', 'Aega', 'Ageric', 'Agilbert', 'Agilfride', 'Agiulf', 'Agobard', 'Aigulf', 'Alaric', 'Alberic', 'Allowin', 'Amalricus', 'Amand', 'Amator', 'Andica', 'Andwise', 'Angegisis', 'Angilbart', 'Angilbert', 'Anno', 'Ansegar', 'Ansegisel', 'Anskar', 'Ansovald', 'Arbitio', 'Arbogast', 'Arbogastes', 'Arculf', 'Aregisel', 'Arnegisel', 'Arnold', 'Arnor', 'Arnoul', 'Arnulf', 'Artaud', 'Asselin', 'Atacinus', 'Athanaric', 'Audoen', 'Audomar', 'Audoneus', 'Audovald', 'Audramnus', 'Austregisel', 'Badegisel', 'Balbo', 'Balderic', 'Baldrick', 'Banazir', 'Bandobras', 'Basso', 'Baudry', 'Baugulf', 'Bauto', 'Bavo', 'Belisarius', 'Benild', 'Berchar', 'Bercilac', 'Berengar', 'Berenger', 'Berilac', 'Bernard', 'Bernhard', 'Berno', 'Bero', 'Bertelis', 'Berthaire', 'Berthefried', 'Bertin', 'Bertram', 'Bertulf', 'Besso', 'Bilba', 'Bilbo', 'Bilcuzal', 'Bildad', 'Bildat', 'Bingo', 'Birinus', 'Bladud', 'Blanco', 'Blutmund', 'Bob', 'Bodo', 'Bosco', 'Boso', 'Bovo', 'Bowman', 'Brice', 'Briffo', 'Britius', 'Brocard', 'Bruno', 'Brutus', 'Bucca', 'Bungo', 'Burchard', 'Butilin', 'Caradas', 'Caradoc', 'Carambo', 'Carl', 'Carloman', 'Cassyon', 'Cedivar', 'Celedor', 'Cerdic', 'Ceredic', 'Ceufroy', 'Chararic', 'Charibert', 'Charles', 'Cheldric', 'Childebert', 'Childebrand', 'Childeric', 'Chilperic', 'Chlodion', 'Chlodmer', 'Chlodomer', 'Chlodowig', 'Chlodwig', 'Chlotar', 'Chramnesind', 'Chrodegang', 'Clodio', 'Clodomir', 'Clotaire', 'Clothair', 'Cloud', 'Clovis', 'Columbus', 'Conrad', 'Corbinian', 'Corbus', 'Cosimo', 'Cotman', 'Cottar', 'Crassus', 'Crispus', 'Cyr', 'Cyricus', 'Dado', 'Dagaric', 'Dagobert', 'Dalfin', 'Deagol', 'Dinodas', 'Doderic', 'Dodinas', 'Dodo', 'Dreux', 'Drogo', 'Drogon', 'Dudo', 'Dudon', 'Durand', 'Ebbo', 'Eberhard', 'Eberulf', 'Ebregisel', 'Ebroin', 'Ebrulf', 'Egide', 'Einhard', 'Elfstan', 'Emme', 'Emmeran', 'Emmon', 'Engelbert', 'Engilbert', 'Enguerrand', 'Enurchus', 'Eracle', 'Erard', 'Erchinoald', 'Erenfried', 'Erling', 'Euric', 'Everard', 'Evrard', 'Evroul', 'Evroult', 'Falco', 'Farabert', 'Faramir', 'Faramond', 'Fardulf', 'Faro', 'Fastolph', 'Fastred', 'Ferdibrand', 'Ferdinand', 'Ferumbras', 'Filibert', 'Flambard', 'Flavus', 'Flodoard', 'Floribert', 'Folcard', 'Folco', 'Folmar', 'Fortinbras', 'Fosco', 'Fredegar', 'Fridolin', 'Fridugis', 'Frodo', 'Fulbert', 'Fulcaire', 'Fulk', 'Fulrad', 'Fulvus', 'Gararic', 'Garivald', 'Gerbert', 'Gereon', 'Gerold', 'Gerontius', 'Gifemund', 'Gilbert', 'Giselbert', 'Giseler', 'Giso', 'Godobald', 'Godomar', 'Godun', 'Goisfrid', 'Gondulph', 'Goodwill', 'Gorbadoc', 'Gorbaduc', 'Gorbulas', 'Gorhendad', 'Gormadoc', 'Goscelin', 'Gouzlim', 'Gozbert', 'Gozolon', 'Griffo', 'Griffon', 'Grifo', 'Grimald', 'Grimbald', 'Grimoald', 'Gringamor', 'Grossman', 'Gruffo', 'Guido', 'Gundabald', 'Gundahar', 'Gundobad', 'Gundolpho', 'Gundovald', 'Gunthar', 'Guntram', 'Guntramn', 'Habaccuc', 'Hagen', 'Haiduc', 'Hal', 'Halfast', 'Halfred', 'Halinard', 'Hamfast', 'Hamilcar', 'Hamson', 'Harding', 'Hartgard', 'Hartmut', 'Hartnid', 'Helinand', 'Helisachar', 'Hending', 'Heribald', 'Heribert', 'Herugar', 'Hildebald', 'Hildebold', 'Hildeprand', 'Hildibrand', 'Hildifons', 'Hildigard', 'Hildigrim', 'Hilduin', 'Hincmar', 'Hlodver', 'Hob', 'Hobson', 'Holfast', 'Holman', 'Hubert', 'Huebald', 'Hugo', 'Humbert', 'Hunald', 'Iago', 'Ilberic', 'Imbert', 'Imnachar', 'Imninon', 'Ingelram', 'Ingomer', 'Ingund', 'Inigo', 'Iolo', 'Isembard', 'Isembold', 'Isengar', 'Isengrim', 'Isengrin', 'Isumbras', 'Jago', 'Jo', 'Jocelin', 'Jolly', 'Kalimac', 'Lambert', 'Lamorac', 'Lanfranc', 'Largo', 'Laudus', 'Lebuin', 'Ledger', 'Leger', 'Leodegar', 'Letard', 'Leudast', 'Leufred', 'Leufroy', 'Leutfrid', 'Leuthard', 'Leuthere', 'Liudhard', 'Liudolf', 'Lo', 'Longo', 'Lothar', 'Lotho', 'Lul', 'Lull', 'Madoc', 'Magnachar', 'Magneric', 'Magnus', 'Maiuel', 'Maixent', 'Majorian', 'Malaric', 'Mallobaudes', 'Mansuetus', 'Marachar', 'Maraulf', 'Marcho', 'Marco', 'Marcomir', 'Marcoul', 'Marcus', 'Marmadas', 'Marmadoc', 'Marmaduc', 'Marmaduke', 'Marroc', 'Matfrid', 'Matta', 'Mattalic', 'Mauger', 'Maura', 'Medard', 'Meginhard', 'Melampus', 'Meneaduc', 'Meriadoc', 'Merimac', 'Merimas', 'Merobaudes', 'Merovech', 'Merry', 'Milo', 'Minto', 'Monulph', 'Moro', 'Mosco', 'Munderic', 'Mungo', 'Nahand', 'Nevelung', 'Nibelung', 'Nibs', 'Nick', 'Nicol', 'Nithard', 'Nob', 'Norbert', 'Nordbert', 'Notger', 'Notker', 'Obo', 'Odger', 'Odilon', 'Odo', 'Odovacar', 'Odulf', 'Olo', 'Omer', 'Orderic', 'Orgulas', 'Orlando', 'Otbert', 'Otho', 'Otker', 'Otto', 'Otton', 'Ouen', 'Ouus', 'Pacatian', 'Pair', 'Paladin', 'Pancras', 'Panteleon', 'Pepin', 'Peregrin', 'Philibert', 'Piligrim', 'Pippin', 'Polo', 'Ponto', 'Poppo', 'Porro', 'Porto', 'Posco', 'Priamus', 'Prospero', 'Puvis', 'Radigis', 'Ragnfred', 'Ramnulf', 'Ranugad', 'Rathar', 'Rathier', 'Ratold', 'Razanur', 'Razo', 'Reginald', 'Reginar', 'Reginard', 'Remacle', 'Remi', 'Reolus', 'Ricbodo', 'Ricchar', 'Ricfried', 'Richer', 'Richomer', 'Richomeres', 'Rigunth', 'Riquier', 'Robin', 'Robur', 'Roderic', 'Rollo', 'Rorimac', 'Rothad', 'Rudibert', 'Rudigar', 'Rudolph', 'Rufus', 'Sadoc', 'Sago', 'Sagramor', 'Samlad', 'Samo', 'Samson', 'Samwise', 'Sancho', 'Saradas', 'Saradoc', 'Scudamor', 'Seredic', 'Sergius', 'Sichar', 'Sicho', 'Siegfried', 'Sigebert', 'Sigefroy', 'Sigeric', 'Sigibert', 'Sigismond', 'Sigismund', 'Smeagol', 'Suger', 'Suidbert', 'Suidger', 'Sunnegisil', 'Sunno', 'Syagrius', 'Tassilo', 'Taurin', 'Ted', 'Tescelin', 'Thankmar', 'Theobald', 'Theodard', 'Theodebert', 'Theodemir', 'Theodon', 'Theodore', 'Theodoric', 'Theodulf', 'Theodulph', 'Theodwin', 'Theudebald', 'Theudebert', 'Theuderic', 'Theutgaud', 'Thierry', 'Thietmar', 'Tim', 'Timba', 'Timothy', 'Tobias', 'Tobold', 'Togo', 'Tolman', 'Tomacca', 'Tomba', 'Tomburan', 'Trahand', 'Turpin', 'Uffo', 'Unroch', 'Valdemar', 'Vedast', 'Vicelin', 'Vigo', 'Vigor', 'Vulmar', 'Waiofar', 'Wala', 'Walaric', 'Walcaud', 'Waldolanus', 'Waleran', 'Waltgaud', 'Wandregisel', 'Wandregisilus', 'Wandrille', 'Warmann', 'Wazo', 'Werinbert', 'Wibert', 'Wichmann', 'Wido', 'Wilcome', 'Wilibald', 'Wilimar', 'Will', 'Willehad', 'Willibald', 'Willibrord', 'Willichar', 'Wiseman', 'Wolbodo', 'Wulfhard', 'Wulfram', 'Zwentibold'];
  const nm2 = ['Achilla', 'Adaldrida', 'Adamanta', 'Agate', 'Alchemilla', 'Allia', 'Alyssa', 'Amaranth', 'Amarantha', 'Amarylla', 'Amaryllis', 'Amsonia', 'Anagella', 'Anagelli', 'Anagellis', 'Anemone', 'Angelica', 'Angelona', 'Angelonia', 'Asphodel', 'Azalea', 'Begona', 'Begonia', 'Belba', 'Bell', 'Belladonna', 'Beryl', 'Berylla', 'Bessera', 'Brodia', 'Brunnera', 'Calaminth', 'Calamintha', 'Calceola', 'Calendine', 'Calla', 'Caltha', 'Calyca', 'Camassia', 'Camella', 'Camellia', 'Camomila', 'Camomile', 'Canna', 'Catalpa', 'Celesta', 'Celeste', 'Celosa', 'Celosia', 'Cerasta', 'Cercis', 'Chica', 'Clemata', 'Clematis', 'Cleoma', 'Cleome', 'Clover', 'Corna', 'Coryda', 'Cosma', 'Crocosmia', 'Daffodil', 'Daffodila', 'Dahlia', 'Daisi', 'Daisy', 'Dandelia', 'Dandelion', 'Datura', 'Diamond', 'Dianthus', 'Diascia', 'Dicentra', 'Donnamira', 'Dora', 'Eglantine', 'Elanor', 'Emerald', 'Erantha', 'Eranthis', 'Esmerelda', 'Estella', 'Firiel', 'Forsythia', 'Gardenia', 'Garnette', 'Gaura', 'Gazania', 'Gerania', 'Gerbera', 'Gilly', 'Gladiola', 'Goldilocks', 'Hanna', 'Heather', 'Heliconia', 'Hilda', 'Hildibrand', 'Hildigrim', 'Holli', 'Holly', 'Hosta', 'Hyacinth', 'Hyacynth', 'Iris', 'Jade', 'Jasmina', 'Kalmia', 'Lalia', 'Lamia', 'Lantana', 'Laura', 'Lavenda', 'Lavender', 'Liatra', 'Liatris', 'Lila', 'Lily', 'Linaria', 'Lobelia', 'Lonicera', 'Lotus', 'Lunaria', 'Lyla', 'Lysima', 'Magnolia', 'Mahonia', 'Malva', 'Maple', 'Marigold', 'Meadow', 'Melilot', 'Menegilda', 'Monarda', 'Myrtle', 'Narcissa', 'Nemisa', 'Nemisia', 'Nigella', 'Opal', 'Pearl', 'Peona', 'Peony', 'Petunia', 'Pimpanella', 'Pimpernel', 'Poinsetta', 'Poppy', 'Primrose', 'Primula', 'Rosa', 'Rose', 'Rowan', 'Ruby', 'Ruellia', 'Salva', 'Salvia', 'Sapphire', 'Scilla', 'Silene', 'Tanta', 'Tulip', 'Valera', 'Verbena', 'Veronica', 'Viola', 'Virginia', 'Zinnia'];
  const nm3 = ['Baggins', 'Banks', 'Boffin', 'Bolger', 'Bophin', 'Bracegirdle', 'Brandagamba', 'Brandybuck', 'Brockhouse', 'Brown', 'Brownlock', 'Bunce', 'Burrow', 'Burrowes', 'Burrows', 'Butcher', 'Chubb', 'Clayhanger', 'Cotton', 'Diggle', 'Fairbairn', 'Fallohide', 'Galbasi', 'Galpsi', 'Gamgee', 'Gammidge', 'Gamwich', 'Gardner', 'Gawkroger', 'Goldworthy', 'Goodbody', 'Goodchild', 'Goodenough', 'Goold', 'Greenhand', 'Greenholm', 'Harfoot', 'Hayward', 'Headstrong', 'Hlothran', 'Hogg', 'Hornblower', 'Labingi', 'Lightfoot', 'Longhole', 'Longholes', 'Maggot', 'Marsh', 'Meadows', 'Mugwort', 'Noaks', 'Oldbuck', 'Pott', 'Proudfoot', 'Puddifoot', 'Roper', 'Rumble', 'Sackville', 'Sandheaver', 'Sandyman', 'Smallburrow', 'Stoor', 'Took', 'Townsend', 'Tuk', 'Tunnelly', 'Twofoot', 'Underhill', 'Whitfoot', 'Zaragamba'];


  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
