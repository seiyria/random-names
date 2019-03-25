export default function gallentes() {
  let rnd;

  let rnd2;
  let rnd3;
  let
    rnd4;


  let names;

  const type = Math.random() < 0.5 ? 0 : 1;

  const names1 = ['Aa', 'Abe', 'Abha', 'Abhi', 'Abra', 'Acha', 'Adha', 'Adi', 'Aga', 'Ahri', 'Ai', 'Aira', 'Ama', 'Ana', 'Ani', 'Anto', 'Asu', 'Au', 'Ba', 'Be', 'Bha', 'Bhi', 'Bra', 'Brae', 'Brai', 'Bre', 'Bru', 'Bry', 'Ca', 'Came', 'Cha', 'Cla', 'Cli', 'Co', 'Da', 'De', 'Dee', 'Dhe', 'Di', 'Do', 'Edga', 'Edoua', 'Elia', 'Eme', 'Emi', 'Fa', 'Fe', 'Fo', 'Fra', 'Ga', 'Gau', 'Ge', 'Gera', 'Gra', 'Gre', 'Gua', 'Gue', 'Gui', 'Ha', 'Ho', 'Hu', 'Ja', 'Jona', 'Jou', 'Ka', 'Ke', 'Kee', 'Ko', 'La', 'Lu', 'Ma', 'Mi', 'Mo', 'Mu', 'Na', 'No', 'Pa', 'Pi', 'Pie', 'Pita', 'Po', 'Qui', 'Ra', 'Re', 'Ri', 'Ro', 'Sa', 'Sha', 'Ste', 'Ta', 'Theo', 'Thi', 'Tre', 'Tri', 'Ty', 'Va', 'Vi', 'Xa', 'Ya', 'Za', 'Zo'];
  const names2 = ['baud', 'bault', 'bert', 'bien', 'bin', 'ce', 'cen', 'cien', 'cin', 'ckary', 'ckery', 'cque', 'ctor', 'den', 'dhi', 'don', 'dore', 'dou', 'dson', 'fford', 'fton', 'gan', 'gger', 'gory', 'gues', 'gust', 'ham', 'han', 'har', 'jra', 'ke', 'kkhu', 'kra', 'kul', 'lan', 'land', 'lari', 'ld', 'le', 'lere', 'lhem', 'li', 'lian', 'lien', 'lim', 'lin', 'lki', 'lkin', 'llan', 'llas', 'llaume', 'llin', 'llon', 'lten', 'lton', 'lya', 'ma', 'maha', 'mal', 'man', 'manyu', 'mar', 'mba', 'mbert', 'mi', 'mian', 'mien', 'mion', 'mont', 'naka', 'nald', 'nan', 'nard', 'nat', 'natien', 'nce', 'ncent', 'ncis', 'ncois', 'nd', 'nda', 'ndaka', 'ndan', 'ndar', 'nden', 'nder', 'ndon', 'ndra', 'ndu', 'nesh', 'nga', 'ni', 'niel', 'nin', 'nio', 'njan', 'njay', 'njit', 'njiv', 'nner', 'nnor', 'no', 'noit', 'nor', 'nrad', 'nt', 'nten', 'ntin', 'nton', 'nu', 'nuka', 'numan', 'pak', 'phan', 'phen', 'phon', 'ra', 'rak', 'ran', 'rard', 'rat', 'raud', 'rcus', 'rd', 'rdain', 'rell', 'ren', 'rese', 'rian', 'ric', 'rid', 'rien', 'rin', 'rion', 'riq', 'rius', 'rles', 'rlot', 'rma', 'rmain', 'rman', 'rnand', 'rnard', 'rnell', 'rod', 'ron', 'rone', 'rred', 'rrell', 'rrest', 'rret', 'rrett', 'rrison', 'rrot', 'rson', 'rter', 'rtin', 'ruda', 'run', 'runa', 'rvin', 'ry', 'rya', 'sey', 'sh', 'sha', 'shita', 'shma', 'shnu', 'sile', 'sin', 'skar', 'son', 'stan', 'sten', 'stin', 'stya', 'styn', 'su', 'suki', 'tan', 'tar', 'tari', 'than', 'thier', 'thon', 'thurin', 'ti', 'tier', 'tin', 'tra', 'tri', 'tthias', 'tthieu', 'tya', 'van', 'vana', 'vas', 'vata', 've', 'vek', 'ven', 'ver', 'vi', 'vier', 'vin', 'vion', 'vit', 'von', 'vor', 'vyn', 'ward', 'ya', 'yden', 'ydon', 'ylan', 'ylen', 'ylin', 'ylon', 'yon', 'yson', 'yton'];
  const names3 = ['Acha', 'Aga', 'Ahu', 'Alde', 'Alli', 'Amou', 'Aro', 'Atki', 'Au', 'Aubi', 'Ba', 'Bai', 'Bau', 'Be', 'Beau', 'Beni', 'Bho', 'Bi', 'Bla', 'Bo', 'Boi', 'Bra', 'Bre', 'Bri', 'Bro', 'Bu', 'Ca', 'Ch', 'Cha', 'Cho', 'Cla', 'Cle', 'Co', 'Cru', 'Cu', 'Da', 'De', 'Dela', 'Di', 'Du', 'Eme', 'Eve', 'Fa', 'Fla', 'Fou', 'Fu', 'Ga', 'Gai', 'Gal', 'Gi', 'Go', 'Gra', 'Gri', 'Ha', 'He', 'Hi', 'Ho', 'Ja', 'Jui', 'Ka', 'Kaa', 'Kada', 'Ke', 'Kha', 'Kni', 'Ku', 'Le', 'Li', 'Lu', 'Maha', 'Mai', 'Mi', 'Monta', 'Mou', 'Mu', 'My', 'Na', 'Naga', 'Nara', 'Ne', 'Nicho', 'Pa', 'Pe', 'Pi', 'Pou', 'Pra', 'Pro', 'Ra', 'Rama', 'Re', 'Ri', 'Rou', 'Roui', 'Ru', 'Sa', 'Sea', 'Sha', 'Si', 'Sou', 'Spe', 'Sunda', 'Te', 'Tha', 'The', 'Tho', 'Thou', 'Thu', 'Va', 'Wa', 'We', 'Wo'];
  const names4 = ['apelle', 'apon', 'bault', 'bbard', 'bberd', 'bbert', 'bbett', 'bert', 'bertin', 'bin', 'bir', 'champ', 'chaut', 'chaux', 'cher', 'cker', 'ckham', 'cking', 'ckles', 'ckley', 'ckman', 'cques', 'cquet', 'cquier', 'creux', 'crocq', 'croix', 'cros', 'da', 'dal', 'dam', 'dami', 'ddick', 'ddle', 'ddock', 'ddy', 'de', 'den', 'deo', 'des', 'det', 'dger', 'dgers', 'dges', 'dha', 'dhan', 'din', 'dley', 'dman', 'dmon', 'doin', 'dot', 'douin', 'dow', 'drey', 'dshaw', 'dwood', 'ffen', 'ffin', 'fflet', 'fils', 'fit', 'fitt', 'fort', 'gal', 'gar', 'gault', 'gaux', 'gford', 'gg', 'ghtly', 'ghton', 'ghts', 'gier', 'gnard', 'gnault', 'gne', 'gnier', 'gnon', 'goi', 'got', 'grand', 'grave', 'graves', 'groves', 'ha', 'hal', 'ham', 'han', 'hl', 'hni', 'hota', 'hri', 'hu', 'ja', 'jan', 'kar', 'kash', 'ker', 'khale', 'kia', 'kkar', 'kshi', 'kur', 'la', 'laire', 'lard', 'las', 'ldar', 'lder', 'lding', 'ldman', 'ldo', 'ldon', 'ldren', 'le', 'les', 'let', 'ley', 'lfe', 'li', 'lia', 'liff', 'lin', 'lis', 'lita', 'lla', 'llam', 'llar', 'llard', 'llas', 'llaway', 'lle', 'llen', 'ller', 'llet', 'lleton', 'llett', 'lleul', 'llew', 'lley', 'llford', 'lliard', 'lliday', 'llier', 'lling', 'llings', 'lliwell', 'llman', 'llom', 'llon', 'llot', 'lls', 'lman', 'lmer', 'lsa', 'lson', 'lte', 'lter', 'lton', 'lver', 'lvers', 'man', 'mand', 'mant', 'mar', 'mas', 'mat', 'maud', 'mault', 'mbard', 'mbee', 'mbel', 'ment', 'mer', 'mley', 'mmens', 'mmett', 'mmis', 'mmus', 'mond', 'mp', 'mpler', 'na', 'nathan', 'nchal', 'nd', 'nda', 'nder', 'ndey', 'ndhi', 'ndi', 'ndin', 'ndit', 'ndke', 'ndom', 'ndon', 'ndra', 'ndya', 'neau', 'nerjee', 'net', 'neux', 'nfold', 'nford', 'ngham', 'ngton', 'nham', 'niau', 'niaud', 'niell', 'niels', 'nier', 'nis', 'nkar', 'nker', 'nna', 'nnam', 'nnard', 'nnels', 'nnent', 'nner', 'nnier', 'ns', 'nsle', 'nson', 'nton', 'pal', 'pham', 'phet', 'pra', 'pson', 'pton', 'que', 'quet', 'quier', 'quin', 'ra', 'raf', 'rai', 'rajan', 'ram', 'ran', 'rbeau', 'rbet', 'rbey', 'rbier', 'rdell', 'rden', 'rdier', 'rdin', 'rdon', 'rdou', 'rdoux', 'rest', 'ret', 'rett', 'rey', 'rghese', 'rian', 'rieux', 'riez', 'rin', 'rine', 'rkar', 'rken', 'rker', 'rkes', 'rkett', 'rkey', 'rlet', 'rlett', 'rley', 'rling', 'rlow', 'rma', 'rman', 'rmen', 'rmer', 'rmon', 'rmond', 'rna', 'rnace', 'rnam', 'rner', 'ron', 'rot', 'roux', 'roy', 'royer', 'rreau', 'rret', 'rrier', 'rris', 'rrish', 'rrot', 'rrott', 'rsell', 'rson', 'rtin', 'rtis', 'rtiss', 'rton', 'rua', 'ruah', 'rula', 'rup', 'rvey', 'rwal', 'rya', 'sad', 'sak', 'sale', 'shad', 'sker', 'skey', 'sley', 'squet', 'ssard', 'sseau', 'sset', 'ssi', 'ssier', 'ssiere', 'ssinot', 'sten', 'stin', 'ston', 'swamy', 'tal', 'thier', 'tin', 'ton', 'tra', 'tret', 'tta', 'ttal', 'ttan', 'tteau', 'tter', 'tti', 'van', 'var', 've', 'venin', 'venot', 'vgan', 'vier', 'vill', 'ville', 'vills', 'wal', 'ward', 'wick', 'wie', 'wison', 'yal', 'yan', 'yanan', 'ymon', 'yton', 'zaux'];
  const names5 = ['Aa', 'Abhi', 'Ade', 'Adria', 'Adrie', 'Aha', 'Ahi', 'Ala', 'Ale', 'Ali', 'Ama', 'Amri', 'Ana', 'Ani', 'Aria', 'Arie', 'Aru', 'Ava', 'Be', 'Bha', 'Bla', 'Bra', 'Bri', 'Bru', 'Ca', 'Came', 'Cami', 'Ce', 'Ceci', 'Cele', 'Cha', 'Cia', 'Cie', 'Cle', 'Cri', 'Cry', 'Da', 'Deni', 'Desi', 'Deva', 'Dia', 'Do', 'Elia', 'Eme', 'Emi', 'Emme', 'Este', 'Ga', 'Gane', 'Gia', 'Gwe', 'Ha', 'Hai', 'Hari', 'Isa', 'Ja', 'Jai', 'Je', 'Jea', 'Josse', 'Ju', 'Julie', 'Ka', 'Kai', 'Ke', 'Ki', 'Kri', 'Ku', 'La', 'Leo', 'Lilia', 'Lu', 'Ma', 'Mada', 'Maddi', 'Mari', 'Marli', 'Marly', 'Me', 'Myria', 'Myrie', 'Na', 'Ni', 'Noe', 'Pa', 'Pau', 'Ra', 'Re', 'Rene', 'Ri', 'Ro', 'Sa', 'Sha', 'Sky', 'So', 'Sta', 'Sylva', 'Sylve', 'Ta', 'Tana', 'Tani', 'Tanu', 'Va', 'Vale', 'Vi', 'Vio', 'Ya'];
  const names6 = ['beca', 'becca', 'bel', 'bell', 'ce', 'cey', 'chel', 'chelle', 'cia', 'cile', 'cille', 'cinde', 'cy', 'da', 'ddhi', 'de', 'den', 'di', 'die', 'dyn', 'fia', 'ge', 'ghana', 'ghna', 'gite', 'gitte', 'hadi', 'hana', 'hi', 'hila', 'hini', 'hita', 'ja', 'ka', 'kha', 'ki', 'kini', 'kra', 'kti', 'la', 'laine', 'lar', 'lee', 'lene', 'ler', 'leta', 'letta', 'lette', 'ley', 'li', 'lia', 'liana', 'lianna', 'lie', 'lin', 'lina', 'linda', 'lindi', 'line', 'lissa', 'lla', 'lle', 'lli', 'llie', 'lody', 'loma', 'ly', 'lya', 'lyn', 'lyne', 'lynn', 'mala', 'mana', 'mara', 'mari', 'matar', 'mela', 'mence', 'ment', 'mentine', 'mia', 'muda', 'muna', 'munda', 'na', 'nae', 'naelle', 'nan', 'nata', 'nca', 'nda', 'ndal', 'ndall', 'ndara', 'ndi', 'ndita', 'ndra', 'ndy', 'ndyn', 'ne', 'nette', 'ngita', 'ngla', 'ni', 'nia', 'nie', 'niela', 'niele', 'niella', 'nielle', 'nifer', 'nine', 'ninne', 'nis', 'niya', 'njana', 'njna', 'nju', 'nna', 'nnah', 'nne', 'nnifer', 'nola', 'nta', 'ntha', 'nti', 'ntine', 'nya', 'phia', 'phie', 'phne', 'ra', 'rae', 'rah', 'rati', 'rby', 'ree', 'ren', 'rgaret', 'rgareth', 'rgarett', 'ri', 'riah', 'riam', 'riana', 'riane', 'rianna', 'ribel', 'rie', 'rima', 'rina', 'rine', 'rlene', 'rlette', 'rley', 'rline', 'rlotte', 'rmada', 'rmen', 'rol', 'ron', 'rsha', 'rsi', 'rson', 'rtana', 'rtha', 'rtina', 'rtine', 'ruda', 'rudi', 'runa', 'rvani', 'ry', 'sa', 'se', 'sha', 'shita', 'sia', 'siman', 'sma', 'smine', 'son', 'ssa', 'sse', 'sta', 'stal', 'ste', 'sten', 'stin', 'stina', 'stine', 'suya', 'ta', 'tara', 'tesa', 'tha', 'thy', 'ti', 'tie', 'tlyn', 'tna', 'trina', 'tte', 'ty', 'vana', 'vanah', 'vanna', 'vati', 'veka', 'vika', 'xia', 'xis', 'xus', 'xys', 'ya', 'yah', 'yana', 'yani', 'yati', 'yla', 'ylah', 'ylee', 'yna'];


  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * names3.length);
      rnd2 = Math.floor(Math.random() * names4.length);
      rnd3 = Math.floor(Math.random() * names5.length);
      rnd4 = Math.floor(Math.random() * names6.length);
      names = `${names5[rnd3] + names6[rnd4]} ${names3[rnd]}${names4[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      rnd3 = Math.floor(Math.random() * names3.length);
      rnd4 = Math.floor(Math.random() * names4.length);
      names = `${names1[rnd] + names2[rnd2]} ${names3[rnd3]}${names4[rnd4]}`;
    }
    return names;
  }
}
