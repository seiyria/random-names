export default function amazighs() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abaghugh', 'Abakada', 'Abarug', 'Abayghur', 'Abazza', 'Abdir', 'Abelinut', 'Abelius', 'Aberkan', 'Aberwas', 'Abhau', 'Abidin', 'Abudrar', 'Acku', 'Adal', 'Adan', 'Adane', 'Adas', 'Aderbal', 'Aderfi', 'Adergazuz', 'Adghigh', 'Adgum', 'Adherbal', 'Adhughmas', 'Adi', 'Adid', 'Adidet', 'Adinseg', 'Adiusit', 'Adjan', 'Admer', 'Adrikan', 'Adrir', 'Adum', 'Adza', 'Afa', 'Afagis', 'Afalawas', 'Afalkay', 'Afalku', 'Afaraj', 'Afasi', 'Afassiv', 'Afaw', 'Afekay', 'Afellan', 'Afennich', 'Afennis', 'Afer', 'Afesdiyas', 'Affi', 'Affou', 'Affu', 'Afkal', 'Aflawas', 'Aflis', 'Afoud', 'Afra', 'Afroukh', 'Afrux', 'Afsahi', 'Afsan', 'Afsane', 'Aftas', 'Afud', 'Afulay', 'Agafay', 'Agag', 'Agam', 'Agama', 'Agaoua', 'Agawa', 'Agdada', 'Agdun', 'Agerzam', 'Agetun', 'Aggur', 'Aghali', 'Aghbalu', 'Aghdim', 'Aghecher', 'Aghilas', 'Aghiles', 'Aghlan', 'Aghulas', 'Aghzu', 'Agizul', 'Agnan', 'Agour', 'Agra', 'Agram', 'Aguellid', 'Agur', 'Agura', 'Agwama', 'Agwectim', 'Agwellidth', 'Agwilal', 'Agwillul', 'Agwmar', 'Ahar', 'Ahaszzi', 'Aher', 'Aheyâd', 'Ahmis', 'Ahras', 'Ahsiku', 'Ajan', 'Ajdir', 'Ajeddig', 'Ajeder', 'Ajis', 'Akaday', 'Akakouss', 'Akakus', 'Akaouar', 'Akar', 'Akatelaji', 'Akawar', 'Akawel', 'Akbabou', 'Akbabu', 'Akensus', 'Akersim', 'Akhalaf', 'Akli', 'Aklouf', 'Akluf', 'Akmazir', 'Akmin', 'Akorakor', 'Akouna', 'Aksel', 'Aksim', 'Aktula', 'Akudad', 'Akuna', 'Akunad', 'Akwli', 'Akzer', 'Akziz', 'Alenas', 'Alernas', 'Ales', 'Alsan', 'Améstida', 'Amêzyan', 'Amadsu', 'Amadur', 'Amagan', 'Amalu', 'Amanar', 'Amasin', 'Amassine', 'Amattaken', 'Amawal', 'Amayas', 'Amaynu', 'Amayyas', 'Amazigh', 'Amazuz', 'Amazzal', 'Amdegh', 'Amedras', 'Amellal', 'Amen', 'Amenay', 'Amennay', 'Amenzu', 'Ameqran', 'Ameqwran', 'Amergiw', 'Amermus', 'Amesakul', 'Amesan', 'Amesfal', 'Amesggin', 'Amess', 'Amessan', 'Amestan', 'Amezian', 'Amezwar', 'Amezyan', 'Amezza', 'Amgar', 'Amghar', 'Amghi', 'Amhaws', 'Amjoune', 'Amjun', 'Amma', 'Ammuc', 'Amnas', 'Amnay', 'Amoul', 'Amray', 'Amri', 'Amruc', 'Amrus', 'Amsag', 'Amud', 'Amul', 'Amulas', 'Amuqran', 'Amur', 'Amyaz', 'Amzîn', 'Amzal', 'Amzar', 'Amzi', 'Amzun', 'Anaba', 'Anamar', 'Anamir', 'Anaruz', 'Anazâr', 'Anaz', 'Anazir', 'Andara', 'Andaz', 'Anebdad', 'Anegmar', 'Anes', 'Angad', 'Anir', 'Anka', 'Annaber', 'Annaz', 'Annira', 'Annun', 'Anoune', 'Anqa', 'Antaken', 'Antala', 'Antalas', 'Anun', 'Anwal', 'Anzar', 'Anzer', 'Aouras', 'Aoureg', 'Aqnuc', 'Aqzer', 'Arafou', 'Arafu', 'Araken', 'Aramsu', 'Aras', 'Areksim', 'Argan', 'Arim', 'Ariuc', 'Arkam', 'Arris', 'Arsan', 'Artemit', 'Asaf', 'Asafa', 'Asafar', 'Asafu', 'Asafuk', 'Asagh', 'Asaru', 'Asaruf', 'Asbaku', 'Asemidhan', 'Aserdhil', 'Asfar', 'Asfru', 'Asghour', 'Asghun', 'Asirem', 'Asker', 'Aslal', 'Asmed', 'Asmil', 'Asmun', 'Asnani', 'Aspar', 'Asrag', 'Assala', 'Asulil', 'Asyan', 'Aszar', 'At\'isi', 'Atanawsu', 'Atbir', 'Aten', 'Atisi', 'Atrar', 'Aurigh', 'Autas', 'Autit', 'Awdia', 'Awinagh', 'Awlagh', 'Awragh', 'Awras', 'Awreb', 'Awreg', 'Awrib', 'Awsim', 'Awzal', 'Axalaf', 'Axamuk', 'Axamukw', 'Axamux', 'Ayamoune', 'Ayamun', 'Aydril', 'Ayedril', 'Ayi', 'Ayidril', 'Ayigig', 'Ayitift', 'Aylal', 'Aylan', 'Aylimas', 'Ayrad', 'Aytarel', 'Ayuba', 'Ayur', 'Ayura', 'Ayyur', 'Azêllay', 'Azûlay', 'Azad', 'Azaggagh', 'Azal', 'Azan', 'Azar', 'Azarug', 'Azayku', 'Azday', 'Azem', 'Azenkwd', 'Azenkwed', 'Azenzâr', 'Azenzêr', 'Azenzer', 'Azerwal', 'Azerzour', 'Azerzur', 'Aziki', 'Aziwel', 'Azmar', 'Azmer', 'Aznag', 'Azouaou', 'Azref', 'Azregh', 'Azrur', 'Azulay', 'Azum', 'Azur', 'Azure', 'Azuz', 'Azwaw', 'Azwu', 'Azzad', 'BaBar', 'Badaz', 'Badda', 'Baddi', 'Badias', 'Badiden', 'Badis', 'Baduft', 'Baga', 'Bagay', 'Bagrad', 'Baha', 'Bahada', 'Bahasz', 'Baheddi', 'Bahemus', 'Bahena', 'Baheyyi', 'Bahnini', 'Bahsis', 'Bahu', 'Bahus', 'Bajja', 'Bakada', 'Bakdid', 'BakeBu', 'Bakezda', 'Baki', 'Baku', 'Balidir', 'Balilek', 'Balluk', 'Baloua', 'Balsilek', 'Balwa', 'Bamu', 'Banay', 'Bani', 'Banini', 'Baqaks', 'Barehu', 'Bargbal', 'Bari', 'Barour', 'Barsa', 'Barugsen', 'Barur', 'Basi', 'Bassou', 'Bassu', 'Basu', 'Batus', 'Bawar', 'Bawttu', 'Bayddu', 'Bayghur', 'Bayna', 'Bayru', 'Bayu', 'Bazga', 'Baziw', 'Bazza', 'Bazzi', 'Beddis', 'Bekathen', 'Belkin', 'Bellenen', 'Bellou', 'Bellu', 'Bencor', 'Berjas', 'Berkan', 'Bersi', 'Berzal', 'Betalsa', 'Betsin', 'Bezza', 'Bezzi', 'Bidas', 'Bidin', 'Birzal', 'Bizar', 'Bocchus', 'Bochus', 'Bostar', 'Bouda', 'Bougoud', 'Briruc', 'Buba', 'Buda', 'Bughud', 'Bugud', 'Buhanu', 'Buhasu', 'Bukar', 'Bukkus', 'Bukus', 'Bulughin', 'Bumilkar', 'Buna', 'Burri', 'Buxthuc', 'Buxus', 'Buzattu', 'Buzid', 'Cana', 'Caras', 'Cehdir', 'Charas', 'Chiboub', 'Cibub', 'Cicungh', 'Cucanq', 'Cucunq', 'Culam', 'Curdid', 'Dabar', 'Dadduh', 'Dahi', 'Dali', 'Daliz', 'Dalmas', 'Daris', 'Darri', 'Dasamu', 'Dasi', 'Dehhu', 'Demer', 'Demmou', 'Demmu', 'Deren', 'DeriI', 'Derri', 'Djana', 'Drusila', 'Elïas', 'Elyes', 'Eynan', 'Eysan', 'Faday', 'Faghis', 'Faraksen', 'Faras', 'Farinas', 'Fayed', 'Fejjer', 'Fekkus', 'Fekus', 'Fela', 'Felysam', 'Fenas', 'Fennas', 'Fergan', 'Ferkal', 'Ferkus', 'Ferouane', 'Ferwan', 'Fidas', 'Fiden', 'Filal', 'Filgou', 'Filgu', 'Firhun', 'Firman', 'Firmus', 'Firwus', 'Foughal', 'Founen', 'Fourou', 'Frawsen', 'Fudina', 'Fughal', 'Fuhal', 'Funen', 'Furu', 'Gana', 'Gaoua', 'Garam', 'Garas', 'Garayin', 'Garmul', 'Garnan', 'Gauda', 'Gawa', 'Gaya', 'Gectul', 'Geta', 'Geznay', 'Gezul', 'Ghanim', 'Gharmul', 'Ghaysum', 'Ghenima', 'Ghilas', 'Ghumer', 'Ghumran', 'Gildon', 'Gildun', 'Gimer', 'Giss', 'Giwi', 'Gouda', 'Goula', 'Gourane', 'Gourzil', 'Gubul', 'Guda', 'Gudjil', 'Guechtoul', 'Guimer', 'Guioui', 'Gula', 'Gulalsa', 'Gulusa', 'Gulussa', 'Guran', 'Gurayin', 'Gurzil', 'Gwafa', 'Gwasila', 'Gwejdthi', 'Hacnaq', 'Hadu', 'Haggi', 'Hakku', 'Hamu', 'Hdidou', 'Hdidu', 'Heddi', 'Heddu', 'Hella', 'Hellu', 'Hemmu', 'Hesu', 'Hetu', 'Hiba', 'Hibel', 'Hiemsal', 'Himmi', 'Hintat', 'Hotha', 'Huwar', 'Iafis', 'Ialdas', 'Iarbas', 'Iarbuhan', 'Iba', 'Ibba', 'Ibiza', 'Ibzatha', 'Iccu', 'Ichchou', 'Ichou', 'Icu', 'Idas', 'Iddas', 'Idder', 'Ider', 'Ides', 'Idibal', 'Idir', 'Idmi', 'Idras', 'Idren', 'Idus', 'Iesdan', 'Iffou', 'Iffu', 'Ifni', 'Ifrek', 'Ifren', 'Ifri', 'Ifrou', 'Ifru', 'Ifruy', 'Ifser', 'Iften', 'Ifthen', 'Ifui', 'Ifwin', 'Igan', 'Igas', 'Igdal', 'Iggas', 'Ighis', 'Ighlaf', 'Ighlas', 'Igider', 'Igig', 'Iglen', 'Igli', 'Igmasen', 'Igmaz', 'Igmi', 'Ignim', 'Iguc', 'Iguig', 'Iher', 'Ijja', 'Ijju', 'Iken', 'Ikis', 'Ikken', 'Ikkis', 'Ikku', 'Ikles', 'Iksin', 'Ilalsan', 'Ilasen', 'Ilatig', 'Ilayetmas', 'Ilaytmas', 'Iles', 'Iletan', 'Ilila', 'Ilisen', 'Iliten', 'Iliz', 'Illil', 'Ilmen', 'Ilyas', 'Ilyes', 'Imar', 'Imilten', 'Imlul', 'Immas', 'Immeghar', 'Immel', 'Imrouch', 'Imruc', 'Imsen', 'Imsugar', 'Inarus', 'Indjen', 'Ingadh', 'Ingas', 'Ingras', 'Inguas', 'Inifel', 'Intasen', 'Ioues', 'Irat', 'Irate', 'Iraten', 'Irathen', 'Irenyan', 'Irgasen', 'Irgen', 'Irges', 'Irhad', 'Irjen', 'Irnas', 'Irnaten', 'Irnuhan', 'Irris', 'Irru', 'Irsas', 'Isam', 'Isan', 'Isdur', 'Isef', 'Isgaden', 'Isi', 'Isid', 'Isiguar', 'Iskel', 'Islasen', 'Isli', 'Isliten', 'Isragin', 'Isri', 'Issid', 'Isu', 'Isuda', 'Isugh', 'Isuhet', 'Isul', 'Isula', 'Itbir', 'Ithimbal', 'Ithri', 'Ithvir', 'Itisen', 'Itmasen', 'Itri', 'Itueft', 'Iufas', 'Iunam', 'Iwes', 'Ixfensen', 'Ixzi', 'Iylul', 'Izîl', 'Izar', 'Izdârasen', 'Izdeg', 'Izdyten', 'Izelta', 'Izem', 'Izemrasen', 'Izerdan', 'Izim', 'Izmerten', 'Izri', 'Izul', 'Izzou', 'Izzoul', 'Izzu', 'Izzul', 'Jeggi', 'Jenad', 'Jennad', 'Jerin', 'Jesna', 'Jeta', 'Jildun', 'Jilwa', 'Juba', 'Jugurtha', 'Jugurthen', 'Kaouar', 'Kaousen', 'Karakala', 'Kawar', 'Kawsen', 'Keffou', 'Keffu', 'Kenna', 'Koumaz', 'Kumaz', 'LGawda', 'Lyes', 'Maday', 'Madghan', 'Madghis', 'Madhil', 'Madidu', 'Madikum', 'Madin', 'Madjer', 'Madjkis', 'Madyen', 'Maggen', 'Magher', 'Maghus', 'Magsen', 'Mahha', 'Maius', 'Majen', 'Majer', 'Makoud', 'Makrin', 'Maksen', 'Makud', 'Makurgund', 'Makus', 'Malu', 'Mangelat', 'Maouel', 'Maoues', 'Maoui', 'Maqrin', 'Maqurtam', 'Marasen', 'Maray', 'Mardenic', 'Marin', 'Maris', 'Marksen', 'Marous', 'Marru', 'Marus', 'Masal', 'Masala', 'Masar', 'Masel', 'Masen', 'Masensen', 'Masezel', 'Masgaba', 'Masgawa', 'Masiden', 'Masidiqa', 'Masil', 'Masin', 'Masinas', 'Masinisan', 'Masinissa', 'Masiranis', 'Masiwa', 'Masiwan', 'Masmud', 'Masmul', 'Masnaf', 'Masnag', 'Masnsen', 'Mass', 'Massala', 'Massan', 'Massin', 'Massinissa', 'Massmoul', 'Massyl', 'Mastan', 'Mastanabal', 'Mastaw', 'Masthalul', 'Masthan', 'Mastias', 'Mastilus', 'Mastina', 'Masugrada', 'Masuna', 'Matenan', 'Mathu', 'Mathun', 'Matif', 'Matilam', 'Matzul', 'Mawel', 'Mawes', 'Mawi', 'Maydul', 'Mayen', 'Maysar', 'Mayyu', 'Mayzar', 'Mazdal', 'Mazer', 'Maziba', 'Mazifa', 'Mazigh', 'Mazipa', 'Mazit', 'Mazitula', 'Maziz', 'Mazuka', 'Meddour', 'Meddur', 'Meder', 'Medghasen', 'Medri', 'Medur', 'Megar', 'Meggen', 'Meghraw', 'Mehena', 'Mejdan', 'Mejqan', 'Mekra', 'Melag', 'Melal', 'Meld', 'Melkem', 'Mellal', 'Melloul', 'Mellul', 'Melwan', 'Menac', 'Menad', 'Menan', 'Mendas', 'Mendil', 'Mengelet', 'Menis', 'Menna', 'Mennad', 'Meqran', 'Merad', 'Meri', 'Merin', 'Mernis', 'Mernisa', 'Merwel', 'Merwul', 'Mesfaw', 'Meslagh', 'Meslata', 'Mesli', 'Mesrata', 'Mesray', 'Mestawa', 'Metus', 'Meuzer', 'Mezgeld', 'Mezian', 'Meztata', 'Mezura', 'Mezwar', 'Mezyan', 'Midrar', 'Migin', 'Mihemi', 'Mihi', 'Miknasa', 'Mikyusa', 'Mimum', 'Mindas', 'Mira', 'Misagen', 'Misagenes', 'Misibsen', 'Misifsen', 'Misunia', 'Mizri', 'Mizuar', 'Mizwar', 'Mliles', 'Mualat', 'Muda', 'Mula', 'Munatas', 'Muqran', 'Muthunbal', 'Muttun', 'Saden', 'Sisangh', 'Syphax', 'Tacfin', 'Takfarinas', 'Tanan', 'Tariq', 'Tasfin', 'Tiqfarin', 'Udad', 'Ugwistan', 'Uksintas', 'Usaden', 'Usem', 'Usus', 'Wimmiden', 'Winaruz', 'Winifsan', 'Winitran', 'Winsen', 'Winul', 'Wiwul', 'Wiwurgh', 'Yaba', 'Yabdas', 'Yadisgan', 'Yadras', 'Yafelman', 'Yafren', 'Yafu', 'Yaghmurasen', 'Yaghut', 'Yaksan', 'Yaktin', 'Yala', 'Yaleddes', 'Yam', 'Yanat', 'Yani', 'Yaru', 'Yasul', 'Yattuy', 'Yawus', 'Yazid', 'Yedder', 'Yeften', 'Yehlem', 'Yellel', 'Yemdu', 'Yemel', 'Yemlud', 'Yemlul', 'Yemsal', 'Yendu', 'Yeni', 'Yensal', 'Yerma', 'Yeru', 'Yidaw', 'Yidir', 'Yidthir', 'Yifiw', 'Yifrin', 'Yifruy', 'Yifsas', 'Yighis', 'Yiliyen', 'Yilyen', 'Yinay', 'Yinis', 'Yisisan', 'Yizdig', 'Yub', 'Yuba', 'Yudas', 'Yufan', 'Yufayyur', 'Yufitran', 'Yufitri', 'Yufran', 'Yuften', 'Yufthen', 'Yuger', 'Yugerten', 'Yughurten', 'Yughurtha', 'Yughurthen', 'Yugrazal', 'Yukus', 'Yukyan', 'Yula', 'Yulmes', 'Yuman', 'Yumas', 'Yunan', 'Yunas', 'Yunes', 'Yunus', 'Yur', 'Yurgasel', 'Yurman', 'Yursen', 'Yutaf', 'Ziri'];
  const nm2 = ['Adjan', 'Aduda', 'Afou', 'Afu', 'Aggou', 'Aldjya', 'Amanan', 'Amanecer', 'Amenna', 'Amtziri', 'Anazra', 'Anella', 'Anida', 'Anisa', 'Anitan', 'Anya', 'Arrida', 'Arzeghnet', 'Asa', 'Asia', 'Asifa', 'Asigna', 'Auzia', 'Avedda', 'Awina', 'Awlima', 'Awrigha', 'Aya', 'Azel', 'Badida', 'Bagduda', 'Bahac', 'Bahha', 'Bahta', 'Bahtuta', 'Bakka', 'Bakra', 'Bamu', 'Banu', 'Basil', 'Bati', 'Batti', 'Battusa', 'Batul', 'Baya', 'Bbiya', 'Beghnat', 'Bejja', 'Bella', 'Benat', 'Bennina', 'Bergar', 'Berri', 'Berza', 'Bessa', 'Beszza', 'Bghnat', 'Bibya', 'Bittu', 'Brika', 'Buredyma', 'Buyan', 'Bysra', 'Cama', 'Cefa', 'Cettu', 'Chama', 'Chila', 'Cicma', 'Cila', 'Cilmuma', 'Cuca', 'Cucana', 'Dalila', 'Damya', 'Danna', 'Darbala', 'Dasenti', 'Dasin', 'Dasine', 'Dassa', 'Dassin', 'Dawn', 'Daya', 'Debira', 'Delenda', 'Delina', 'Dhoha', 'Diana', 'Dihinna', 'Dihya', 'Dila', 'Dimmida', 'Dimya', 'Djura', 'Dorisa', 'Drifa', 'Dudja', 'Duga', 'Fabia', 'Fadina', 'Fafa', 'Faghisa', 'Fariza', 'Fasa', 'Feddada', 'Fella', 'Feriel', 'Ferrudja', 'Fettuch', 'Filadelfa', 'Fina', 'Flysa', 'Foras', 'Frara', 'Fuda', 'Gadda', 'Gava', 'Gawa', 'Gaya', 'Gayet', 'Geldasen', 'Geldasent', 'Gemala', 'Ghadda', 'Ghamima', 'Ghella', 'Ghennou', 'Ghennu', 'Ghida', 'Ghighda', 'Ghnima', 'Giva', 'Gourara', 'Gouraya', 'Grica', 'Grisa', 'Grisha', 'Guedduda', 'Guellala', 'Guema', 'Gulusa', 'Guraya', 'Gwejda', 'Gwejdthi', 'H\'edda', 'Habbu', 'Hadda', 'Hallu', 'Hannou', 'Hannu', 'Hatita', 'Hayda', 'Haylana', 'Haysu', 'Hazza', 'Hbiya', 'Hbuba', 'Hdiza', 'Heddou', 'Heddu', 'Hedduga', 'Hedduz', 'Heka', 'Hella', 'Hemma', 'Hemmusa', 'Hennu', 'Hennuba', 'Hennuz', 'Herri', 'Herru', 'Hetta', 'Hezzu', 'Hibba', 'Hmija', 'Hnata', 'Hsiba', 'Huda', 'Ifsan', 'Ihemma', 'Ijja', 'Ijju', 'Ikkou', 'Ikku', 'Illi', 'Ilma', 'Inas', 'Indi', 'Inina', 'Isfra', 'Iszza', 'Iszzu', 'Itran', 'Itri', 'Ittû', 'Ittou', 'Ittuba', 'Ittuna', 'Iza', 'Izelta', 'Izya', 'Izza', 'Jasmin', 'Jdira', 'Jeddjiga', 'Jella', 'Kahina', 'Kanimana', 'Kassu', 'Kejjou', 'Kella', 'Kellou', 'Kellu', 'Kemicha', 'Kenna', 'Kenwa', 'Keslala', 'Kettou', 'Kettu', 'Kinsa', 'Kisa', 'Ksou', 'Ksu', 'Kulla', 'Kwella', 'Kweller', 'Laddu', 'Lahna', 'Lalla', 'Laysa', 'Lebeda', 'Lemta', 'Lhiva', 'Lila', 'Lilia', 'Ljida', 'Lmiara', 'Louiza', 'Loula', 'Louna', 'Loundja', 'Lula', 'Lumsi', 'Luna', 'Lundja', 'Lunja', 'Lwiza', 'Lyaqut', 'Macina', 'Maciva', 'Mada', 'Madel', 'Madila', 'Magara', 'Magiva', 'Maira', 'Malh\'a', 'Malida', 'Malika', 'Maliza', 'Mamma', 'Mammas', 'Mannet', 'Maria', 'Markounda', 'Markunda', 'Marniza', 'Maryama', 'Masa', 'Masana', 'Masilah', 'Masilya', 'Masiva', 'Massa', 'Massila', 'Massilya', 'Matugez', 'Mazika', 'Mazzi', 'Medousa', 'Megdila', 'Megduda', 'Meghighda', 'Meghnisa', 'Melilla', 'Mella', 'Mellala', 'Mellisa', 'Mellula', 'Melluya', 'Meluna', 'Meluza', 'Menna', 'Mennoune', 'Mennun', 'Menza', 'Meriem', 'Merkida', 'Mermusa', 'Mesraya', 'Messuna', 'Metila', 'Metira', 'Metuza', 'Mezifa', 'Mighisa', 'Milda', 'Milla', 'Mimouna', 'Mimuna', 'Mimunt', 'Mina', 'Mira', 'Mirina', 'Mlila', 'Mnahou', 'Mnahu', 'Mouli', 'Mririda', 'Muda', 'Muli', 'Muna', 'MuniMouni', 'MuniMunia', 'Munia', 'Muzaya', 'Myasa', 'Myriam', 'Nadia', 'Nanna', 'Nefza', 'Nora', 'Nounja', 'Nuja', 'Numa', 'Nundina', 'Nundja', 'Nunja', 'Nura', 'Nuva', 'Onesa', 'Ouba', 'Oudda', 'Ouna', 'Ouzza', 'Qayda', 'Qejju', 'Qezzu', 'Qura', 'Raisa', 'Randja', 'Rate', 'Reghisa', 'Reqima', 'Riga', 'Romana', 'Rqiyya', 'Ruza', 'Rziqa', 'Sabu', 'Sadra', 'Salsa', 'Sama', 'Satna', 'Sedrata', 'Sedura', 'Sefuya', 'Segguma', 'Sekkura', 'Selina', 'Setti', 'Sifa', 'Siga', 'Silina', 'Silya', 'Silyuna', 'Siman', 'Sinim', 'Siniman', 'Skikda', 'Skura', 'Slima', 'Sula', 'Sura', 'Susa', 'Susaa', 'Syna', 'Syra', 'Szidhant', 'Taballout', 'Taballutt', 'Tabaynutt', 'Tabayount', 'Tabayt', 'Tabbayt', 'Tabuhayt', 'Tacelvat', 'Tacemayt', 'Tachnout', 'Tacia', 'Tacnut', 'Tadêfi', 'Tadda', 'Taderfit', 'Tadla', 'Tadmut', 'Tafalkayt', 'Tafat', 'Tafenda', 'Taferrujt', 'Taffugt', 'Tafira', 'Tafna', 'Tafrara', 'Tafsut', 'Tafukt', 'Tafza', 'Tagafayt', 'Tagama', 'Taganint', 'Taghbalout', 'Taghbalut', 'Taghit', 'Tagoura', 'Tagrert', 'Tagura', 'Tagwerramt', 'Tagwilalt', 'Tagwillult', 'Tagwizult', 'Taheyyâtt', 'Tahouska', 'Tahu', 'Tahuska', 'Tajeddigt', 'Tajedjigt', 'Takama', 'Takawit', 'Takensust', 'Takfa', 'Taklit', 'Taknarit', 'Takouba', 'Taksimt', 'Takuka', 'Tala', 'Talalit', 'Taliza', 'Taljat', 'Talsa', 'Talut', 'Talwa', 'Talwit', 'Tama', 'Tamada', 'Tamalut', 'Tamanart', 'Tamanga', 'Tamaynut', 'Tamayourt', 'Tamayurt', 'Tamayyurt', 'Tamazight', 'Tamazuzt', 'Tamazzalt', 'Tameddourt', 'Tameddurt', 'Tamella', 'Tamellalt', 'Tamemt', 'Tamenna', 'Tament', 'Tamenzut', 'Tameqrant', 'Tamesmûtt', 'Tamezyant', 'Tamilla', 'Tamimt', 'Tamimunt', 'Taminda', 'Tamment', 'Tamnayt', 'Tamou', 'Tamrust', 'Tamrut', 'Tamseggint', 'Tamsoult', 'Tamsult', 'Tamu', 'Tamunt', 'Tamyourt', 'Tamyurt', 'Tanamart', 'Tanazârt', 'Tanebdatt', 'Tanefzawit', 'Tanemghurt', 'Tanest', 'Tanga', 'Tanifa', 'Tanilla', 'Taninna', 'Tanirt', 'Tanit', 'Tannar', 'Tannes', 'Tannirt', 'Tansaw', 'Taoua', 'Taouala', 'Taouri', 'Taqnart', 'Tara', 'Tarast', 'Tarenza', 'Tariwelt', 'Tarounga', 'Tarunga', 'Tarza', 'Tasa', 'Tasafut', 'Tasekkourt', 'Tasekkurt', 'Tasra', 'Tata', 'Tatam', 'Tatas', 'Tatbirt', 'Tati', 'Tawa', 'Tawala', 'Taweckint', 'Tawenza', 'Tawizet', 'Tawnat', 'Tawri', 'Tawzalt', 'Taya', 'Taylalt', 'Tayma', 'Tayri', 'Tayttutt', 'Tayyurt', 'Tazêllayt', 'Tazdayt', 'Tazenkêt', 'Tazenkwêt', 'Tazerwalt', 'Tazibba', 'Tazikit', 'Tazirit', 'Tazoula', 'Tazrurt', 'Tazrzît', 'Tazrzit', 'Tazula', 'Tazwart', 'Tecwwa', 'Tedus', 'Telgoumas', 'Telgumas', 'Telil', 'Tella', 'Temlud', 'Teriel', 'Tersheddat', 'Tfit', 'Tfoulla', 'Tfulla', 'Thablalt', 'Thadfi', 'Thadmuth', 'Thafat', 'Thafrara', 'Thafrirth', 'Thafsilt', 'Thaladza', 'Thalsa', 'Thamazuzt', 'Thamelle', 'Thamemt', 'Thamrusth', 'Thanaya', 'Thannina', 'Thasa', 'Thasnutt', 'Thasrifa', 'Thati', 'Thawant', 'Thawles', 'Thayda', 'Thazert', 'Themsal', 'Thengadh', 'Therna', 'Thersum', 'Theslas', 'Thidaw', 'Thidir', 'Thifa', 'Thifawth', 'Thifrar', 'Thifruy', 'Thighlan', 'Thighlas', 'Thigis', 'Thigwmi', 'Thikisa', 'Thikwinas', 'Thilelli', 'Thimsal', 'Thinezwa', 'Thinifsan', 'Thinmal', 'Thinufa', 'Thinuzal', 'Thinzerth', 'Thirnis', 'Thisent', 'Thisisn', 'Thiska', 'Thislas', 'Thislith', 'Thithvirth', 'Thiyefsan', 'Thiynay', 'Thiyya', 'Thizemth', 'Thiziri', 'Thuda', 'Thudjin', 'Thufran', 'Thula', 'Thumas', 'Thumer', 'Thunsa', 'Thurda', 'Thureghth', 'Thurnan', 'Thusa', 'Tichi', 'Tidar', 'Tidda', 'Tidghas', 'Tidir', 'Tidmi', 'Tidnas', 'Tifa', 'Tifagour', 'Tifagur', 'Tifawt', 'Tifayour', 'Tifayur', 'Tifirellest', 'Tifna', 'Tifsa', 'Tiga', 'Tiggi', 'Tigmi', 'Tigzi', 'Tihusay', 'Tikinas', 'Tilelli', 'Tililoua', 'Tililwa', 'Tilla', 'Tilleli', 'Tima', 'Timan', 'Timellet', 'Timla', 'Timmi', 'Timya', 'Tin', 'Tin Hinan', 'Tina', 'Tinamer', 'Tindaya', 'Tinef', 'Tinezwa', 'Tinga', 'Tingh', 'Tinghan', 'Tinhinan', 'Tinifsan', 'Tinitran', 'Tinounzar', 'Tinsin', 'Tintadêfi', 'Tintafoukt', 'Tintafukt', 'Tintayri', 'Tintfsut', 'Tintifawin', 'Tintlelli', 'Tintziri', 'Tinunzar', 'Tinwurgh', 'Tinyour', 'Tinyur', 'Tinza', 'Tinzert', 'Tiriya', 'Tisent', 'Tisila', 'Tiska', 'Tiski', 'Tislanzar', 'Tislas', 'Tislit', 'Tistina', 'Titem', 'Titma', 'Titrit', 'Tiwul', 'Tizdig', 'Tizemt', 'Tizenga', 'Tiziri', 'Tizma', 'Tizoua', 'Tizwa', 'Tlafulki', 'Tlaten', 'Tlatig', 'Tlayt', 'Tlaytmas', 'Toucha', 'Touda', 'Toudert', 'Toufayour', 'Toufitri', 'Toufrint', 'Tougga', 'Tougna', 'Touka', 'Toukfa', 'Toukyist', 'Toula', 'Toumert', 'Tounarouz', 'Touncha', 'Triya', 'Tseriel', 'Tsul', 'Tuca', 'Tucka', 'Tuda', 'Tudatt', 'Tudert', 'Tufayyur', 'Tufinet', 'Tufitran', 'Tufitri', 'Tufrint', 'Tuftafukt', 'Tuftent', 'Tuftifawt', 'Tufulla', 'Tugertent', 'Tugga', 'Tugna', 'Tuka', 'Tukyist', 'Tula', 'Tumadir', 'Tumart', 'Tumas', 'Tumert', 'Tunaruz', 'Tunca', 'Tureght', 'Tzeddig', 'Tzil', 'Tzila', 'Uba', 'Udda', 'Ultafa', 'Ultasila', 'Uminet', 'Una', 'Unifa', 'Urika', 'Urtaghir', 'Urtedus', 'Usa', 'Usila', 'Uudda', 'Uza', 'Uzia', 'Uzna', 'Uzza', 'Uzzah', 'Watila', 'Wedira', 'WenzOenza', 'Wesina', 'Wezna', 'Wigelden', 'Wiza', 'Wnisa', 'Wrina', 'Xelludja', 'Xuda', 'Yamina', 'Yamma', 'Yarra', 'Yasmin', 'Yellana', 'Yettou', 'Yettu', 'Yezzi', 'Yilda', 'Zahra', 'Zamra', 'Zana', 'Zara', 'Zawgha', 'Zediga', 'Zefra', 'Zeggula', 'Zegna', 'Zegura', 'Zelgoum', 'Zelgum', 'Zennou', 'Zennu', 'Zennuba', 'Zergha', 'Zibba', 'Zidant', 'Zila', 'Zilgoum', 'Zilgum', 'Zineb', 'Zira', 'Znina', 'Zouara', 'Zunagha', 'Zunja', 'Zwara', 'Zwina', 'Zwira'];
  const nm3 = ['Abad', 'Abbas', 'Abbasi', 'Abdalla', 'Abdallah', 'Abdella', 'Abdelnour', 'Abdelrahman', 'Abdi', 'Abdo', 'Abdoo', 'Abdou', 'Abdul', 'Abdulla', 'Abdullah', 'Abed', 'Abid', 'Abood', 'Aboud', 'Abraham', 'Abu', 'Adel', 'Afzal', 'Agha', 'Ahmad', 'Ahmadi', 'Ahmed', 'Ahsan', 'Akbar', 'Akbari', 'Akel', 'Akhtar', 'Akhter', 'Akram', 'Alam', 'Ali', 'Allam', 'Allee', 'Alli', 'Ally', 'Aly', 'Aman', 'Amara', 'Amber', 'Ameen', 'Amen', 'Amer', 'Amin', 'Amini', 'Amir', 'Amiri', 'Ammar', 'Ansari', 'Anwar', 'Arafat', 'Arif', 'Arshad', 'Asad', 'Ashraf', 'Aslam', 'Asmar', 'Assad', 'Assaf', 'Atallah', 'Attar', 'Awan', 'Aydin', 'Ayoob', 'Ayoub', 'Ayub', 'Azad', 'Azam', 'Azer', 'Azimi', 'Aziz', 'Azizi', 'Azzam', 'Azzi', 'Bacchus', 'Baccus', 'Bacho', 'Baddour', 'Badie', 'Badour', 'Bagheri', 'Bahri', 'Baig', 'Baksh', 'Baluch', 'Bangura', 'Barakat', 'Bari', 'Basa', 'Basha', 'Bashara', 'Basher', 'Bashir', 'Baten', 'Begum', 'Ben', 'Beshara', 'Bey', 'Beydoun', 'Bilal', 'Bina', 'Burki', 'Can', 'Chahine', 'Dada', 'Dajani', 'Dallal', 'Daoud', 'Dar', 'Darwish', 'Dawood', 'Demian', 'Dia', 'Diab', 'Dib', 'Din', 'Doud', 'Ebrahim', 'Ebrahimi', 'Edris', 'Eid', 'Elamin', 'Elbaz', 'El-Sayed', 'Emami', 'Fadel', 'Fahmy', 'Fahs', 'Farag', 'Farah', 'Faraj', 'Fares', 'Farha', 'Farhat', 'Farid', 'Faris', 'Farman', 'Farooq', 'Farooqui', 'Farra', 'Farrah', 'Farran', 'Fawaz', 'Fayad', 'Firman', 'Gaber', 'Gad', 'Galla', 'Ghaffari', 'Ghanem', 'Ghani', 'Ghattas', 'Ghazal', 'Ghazi', 'Greiss', 'Guler', 'Habeeb', 'Habib', 'Habibi', 'Hadi', 'Hafeez', 'Hai', 'Haidar', 'Haider', 'Hakeem', 'Hakim', 'Halaby', 'Halim', 'Hallal', 'Hamad', 'Hamady', 'Hamdan', 'Hamed', 'Hameed', 'Hamid', 'Hamidi', 'Hammad', 'Hammoud', 'Hana', 'Hanif', 'Hannan', 'Haq', 'Haque', 'Hares', 'Hariri', 'Harron', 'Harroun', 'Hasan', 'Hasen', 'Hashem', 'Hashemi', 'Hashim', 'Hashmi', 'Hassan', 'Hassen', 'Hatem', 'Hoda', 'Hoque', 'Hosein', 'Hossain', 'Hosseini', 'Huda', 'Huq', 'Husain', 'Hussain', 'Hussein', 'Ibrahim', 'Idris', 'Imam', 'Iman', 'Iqbal', 'Irani', 'Ishak', 'Ishmael', 'Islam', 'Ismael', 'Ismail', 'Jabara', 'Jabbar', 'Jabbour', 'Jaber', 'Jabour', 'Jafari', 'Jaffer', 'Jafri', 'Jalali', 'Jalil', 'Jama', 'Jamail', 'Jamal', 'Jamil', 'Jan', 'Javed', 'Javid', 'Kaba', 'Kaber', 'Kabir', 'Kader', 'Kaiser', 'Kaleel', 'Kalil', 'Kamal', 'Kamali', 'Kamara', 'Kamel', 'Kanan', 'Karam', 'Karim', 'Karimi', 'Kassem', 'Kazemi', 'Kazi', 'Kazmi', 'Khalaf', 'Khalid', 'Khalifa', 'Khalil', 'Khalili', 'Khan', 'Khatib', 'Khawaja', 'Koroma', 'Laham', 'Latif', 'Lodi', 'Lone', 'Madani', 'Mady', 'Mahdavi', 'Mahdi', 'Mahfouz', 'Mahmood', 'Mahmoud', 'Mahmud', 'Majeed', 'Majid', 'Malak', 'Malek', 'Malik', 'Mannan', 'Mansoor', 'Mansour', 'Mansouri', 'Mansur', 'Maroun', 'Masih', 'Masood', 'Masri', 'Massoud', 'Matar', 'Matin', 'Mattar', 'Meer', 'Meskin', 'Miah', 'Mian', 'Mina', 'Minhas', 'Mir', 'Mirza', 'Mitri', 'Moghaddam', 'Mohamad', 'Mohamed', 'Mohammad', 'Mohammadi', 'Mohammed', 'Mohiuddin', 'Molla', 'Momin', 'Mona', 'Morad', 'Moradi', 'Mostafa', 'Mourad', 'Mousa', 'Moussa', 'Moustafa', 'Mowad', 'Muhammad', 'Muhammed', 'Munir', 'Murad', 'Musa', 'Mussa', 'Mustafa', 'Naderi', 'Nagi', 'Naim', 'Naqvi', 'Nasir', 'Nasr', 'Nasrallah', 'Nasser', 'Nassif', 'Nawaz', 'Nazar', 'Nazir', 'Neman', 'Niazi', 'Noor', 'Noorani', 'Noori', 'Nour', 'Nouri', 'Obeid', 'Odeh', 'Omar', 'Omer', 'Othman', 'Ozer', 'Parsa', 'Pasha', 'Pashia', 'Pirani', 'Popal', 'Pour', 'Qadir', 'Qasim', 'Qazi', 'Quadri', 'Raad', 'Rabbani', 'Rad', 'Radi', 'Radwan', 'Rafiq', 'Rahaim', 'Rahaman', 'Rahim', 'Rahimi', 'Rahman', 'Rahmani', 'Rais', 'Ramadan', 'Ramin', 'Rashed', 'Rasheed', 'Rashid', 'Rassi', 'Rasul', 'Rauf', 'Rayes', 'Rehman', 'Rehmann', 'Reza', 'Riaz', 'Rizk', 'Saab', 'Saad', 'Saade', 'Saadeh', 'Saah', 'Saba', 'Saber', 'Sabet', 'Sabir', 'Sadek', 'Sader', 'Sadiq', 'Sadri', 'Saeed', 'Safar', 'Safi', 'Sahli', 'Saidi', 'Sala', 'Salaam', 'Saladin', 'Salah', 'Salahuddin', 'Salam', 'Salama', 'Salame', 'Salameh', 'Saleem', 'Saleh', 'Salehi', 'Salek', 'Salem', 'Salih', 'Salik', 'Salim', 'Salloum', 'Salman', 'Samaan', 'Samad', 'Samara', 'Sami', 'Samra', 'Sani', 'Sarah', 'Sarwar', 'Sattar', 'Satter', 'Sawaya', 'Sayed', 'Selim', 'Semaan', 'Sesay', 'Shaban', 'Shabazz', 'Shad', 'Shaer', 'Shafi', 'Shah', 'Shahan', 'Shaheed', 'Shaheen', 'Shahid', 'Shahidi', 'Shahin', 'Shaikh', 'Shaker', 'Shakir', 'Shakoor', 'Sham', 'Shams', 'Sharaf', 'Shareef', 'Sharif', 'Shariff', 'Sharifi', 'Shehadeh', 'Shehata', 'Sheikh', 'Siddiqi', 'Siddique', 'Siddiqui', 'Sinai', 'Soliman', 'Soltani', 'Srour', 'Sulaiman', 'Suleiman', 'Sultan', 'Sultana', 'Syed', 'Sylla', 'Tabatabai', 'Tabet', 'Taha', 'Taheri', 'Tahir', 'Tamer', 'Tariq', 'Tawil', 'Toure', 'Turay', 'Uddin', 'Ullah', 'Usman', 'Vaziri', 'Vohra', 'Wahab', 'Wahba', 'Waheed', 'Wakim', 'Wali', 'Yacoub', 'Yamin', 'Yasin', 'Yassin', 'Younan', 'Younes', 'Younis', 'Yousef', 'Yousif', 'Youssef', 'Yousuf', 'Yusuf', 'Zadeh', 'Zafar', 'Zaher', 'Zahra', 'Zaidi', 'Zakaria', 'Zaki', 'Zaman', 'Zamani', 'Zia'];


  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    nm3.splice(rnd2, 1);
    return names;
  }
}
