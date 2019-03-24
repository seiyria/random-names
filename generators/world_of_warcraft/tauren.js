export default function tauren() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abu', 'Abuk', 'Ach', 'Acha', 'Ada', 'Adah', 'Adr', 'Adri', 'Aha', 'Ahan', 'Ahi', 'Ahig', 'Ahm', 'Ahmi', 'Aho', 'Ahot', 'Aka', 'Akan', 'Ake', 'Akec', 'Aku', 'Akul', 'Alo', 'Ana', 'Anak', 'Ano', 'Anok', 'Ans', 'Anse', 'Ape', 'Apen', 'Api', 'Apia', 'Apo', 'Apon', 'Ara', 'Aran', 'Ash', 'Ask', 'Asko', 'Ate', 'Atep', 'Avo', 'Avon', 'Awa', 'Awan', 'Aya', 'Ayaw', 'Bem', 'Bemo', 'Ber', 'Bera', 'Bid', 'Bil', 'Bila', 'Bim', 'Bimi', 'Bod', 'Boda', 'Bre', 'Brek', 'Bul', 'Bulr', 'Cai', 'Cair', 'Cat', 'Cata', 'Cha', 'Chas', 'Chay', 'Che', 'Cher', 'Ches', 'Chev', 'Cho', 'Choc', 'Chog', 'Choo', 'Chov', 'Chow', 'Chu', 'Chuc', 'Chun', 'Ciq', 'Ciqa', 'Coc', 'Coch', 'Dak', 'Dako', 'Das', 'Dasa', 'Del', 'Delg', 'Dels', 'Dem', 'Demo', 'Dic', 'Dich', 'Doh', 'Doho', 'Dya', 'Dyam', 'Ela', 'Elan', 'Elk', 'Elki', 'Els', 'Elsu', 'Ena', 'Enap', 'Eny', 'Enye', 'Etc', 'Etch', 'Etu', 'Eya', 'Eyah', 'Ezh', 'Ezhn', 'Gaa', 'Gaag', 'Gad', 'Gos', 'Gosh', 'Gro', 'Grod', 'Gul', 'Gull', 'Guy', 'Guya', 'Hah', 'Hahn', 'Hak', 'Haka', 'Hal', 'Halp', 'Ham', 'Hamu', 'Han', 'Hani', 'Har', 'Hark', 'Has', 'Hass', 'Hast', 'Haw', 'Hawi', 'Hea', 'Heam', 'Hek', 'Hel', 'Hela', 'Helu', 'Hes', 'Hesu', 'Hev', 'Heva', 'Hew', 'Hewa', 'Hia', 'Hiam', 'Hin', 'Hint', 'Hog', 'Hogo', 'Hol', 'Holt', 'Hon', 'Hona', 'Hono', 'Hot', 'Hota', 'Hoto', 'How', 'Howa', 'Howi', 'Hur', 'Huri', 'Hus', 'Husl', 'Iga', 'Igas', 'Ill', 'Illa', 'Int', 'Inte', 'Ist', 'Ista', 'Istu', 'Iye', 'Jac', 'Jacy', 'Jol', 'Jolo', 'Kac', 'Kach', 'Kag', 'Kaga', 'Kah', 'Kaj', 'Kaji', 'Kar', 'Kard', 'Karn', 'Kel', 'Kele', 'Kem', 'Keme', 'Kes', 'Kese', 'Kit', 'Kitc', 'Kno', 'Knot', 'Koh', 'Koha', 'Kol', 'Koli', 'Kom', 'Komi', 'Kos', 'Kosu', 'Kot', 'Koto', 'Kru', 'Krum', 'Kuc', 'Kuck', 'Kur', 'Kurm', 'Kuru', 'Kwa', 'Kwah', 'Kwat', 'Lan', 'Lang', 'Lans', 'Lap', 'Lapu', 'Len', 'Lenn', 'Ley', 'Leyt', 'Lis', 'Lise', 'Liw', 'Liwa', 'Lok', 'Lokn', 'Lon', 'Lona', 'Loo', 'Loot', 'Mac', 'Mach', 'Mah', 'Mahk', 'Mahp', 'Mahu', 'Mak', 'Makk', 'Maky', 'Man', 'Mant', 'Mas', 'Masi', 'Mask', 'Mat', 'Matc', 'Mato', 'Matu', 'Matw', 'Maz', 'Maza', 'Meg', 'Mege', 'Mel', 'Melo', 'Met', 'Metu', 'Mik', 'Mika', 'Mil', 'Mila', 'Min', 'Ming', 'Minn', 'Mis', 'Misu', 'Moc', 'Moch', 'Moj', 'Moja', 'Mok', 'Moka', 'Moke', 'Moki', 'Moko', 'Mol', 'Moli', 'Mon', 'Mona', 'Mong', 'Mot', 'Mota', 'Mote', 'Mua', 'Muat', 'Muk', 'Mukk', 'Mur', 'Mura', 'Naa', 'Naal', 'Nah', 'Nahc', 'Nahe', 'Nahi', 'Nan', 'Nant', 'Nap', 'Napa', 'Nas', 'Nast', 'Naw', 'Nawa', 'Nawk', 'Nay', 'Naya', 'Nek', 'Neka', 'Nib', 'Niba', 'Nig', 'Niga', 'Nii', 'Niic', 'Nik', 'Niki', 'Nit', 'Niti', 'Nix', 'Nixk', 'Niy', 'Niyo', 'Nod', 'Nodi', 'Noo', 'Noot', 'Nos', 'Nosh', 'Nuk', 'Nukp', 'Oda', 'Odak', 'Oga', 'Ogal', 'Oha', 'Ohan', 'Ohc', 'Ohcu', 'Ohi', 'Ohit', 'Okh', 'Okhm', 'Oma', 'Omaw', 'Orm', 'Ota', 'Otak', 'Oto', 'Otoa', 'Our', 'Oura', 'Pac', 'Pach', 'Paco', 'Pah', 'Paha', 'Pal', 'Pall', 'Pan', 'Pand', 'Pann', 'Pat', 'Pata', 'Patw', 'Pay', 'Paya', 'Payt', 'Pow', 'Powa', 'Qal', 'Qale', 'Rah', 'Raha', 'Rum', 'Rums', 'Sah', 'Saha', 'Sak', 'Saki', 'San', 'Sani', 'Sar', 'Sark', 'Seg', 'Sege', 'Sew', 'Sewa', 'Sha', 'Sham', 'Shi', 'Shil', 'Shir', 'Shiy', 'Shiz', 'Sic', 'Sich', 'Sik', 'Sike', 'Siki', 'Siky', 'Siw', 'Siwi', 'Ska', 'Skah', 'Son', 'Song', 'Sow', 'Sowi', 'Sta', 'Stam', 'Suc', 'Suck', 'Tah', 'Tahk', 'Tai', 'Taim', 'Tak', 'Tako', 'Tal', 'Tan', 'Tand', 'Tang', 'Tas', 'Tasu', 'Tat', 'Tate', 'Tau', 'Taur', 'Tee', 'Teet', 'Teg', 'Tel', 'Telu', 'Tem', 'Temm', 'Thr', 'Thru', 'Tig', 'Tigo', 'Tih', 'Tihk', 'Toc', 'Toch', 'Tog', 'Togq', 'Toh', 'Toho', 'Tok', 'Toka', 'Too', 'Tooa', 'Tor', 'Torm', 'Torn', 'Tua', 'Tuar', 'Tuk', 'Tuke', 'Tup', 'Tupi', 'Tur', 'Tura', 'Ure', 'Urek', 'Uzu', 'Uzum', 'Ver', 'Vere', 'Vih', 'Viho', 'Vip', 'Vipp', 'Voh', 'Vohk', 'Wah', 'Waha', 'Wahc', 'Wahk', 'Wak', 'Waki', 'Wam', 'Wamb', 'Wan', 'Wana', 'Wani', 'Wap', 'Wapi', 'Waq', 'Waqu', 'Wea', 'Weay', 'Wem', 'Wema', 'Wemi', 'Wic', 'Wica', 'Wik', 'Wikv', 'Woh', 'Wohe', 'Wuy', 'Wuyi', 'Wyn', 'Wyno', 'Xan', 'Xani', 'Yah', 'Yaho', 'Yaht', 'Yan', 'Yanc', 'Yani', 'Yas', 'Yis', 'Yisk', 'Yum', 'Yuma', 'Zan', 'Zang'];
  const nm2 = ['a', 'aa', 'ablaska', 'aco', 'ada', 'ag', 'agaana', 'ageeska', 'ah', 'ahecassa', 'ahkan', 'ahnacto', 'ahome', 'ahonaw', 'ahton', 'ai', 'ak', 'aku', 'akw', 'akwunu', 'ala', 'ale', 'ali', 'am', 'amat', 'amich', 'amon', 'an', 'ana', 'anassatta', 'ani', 'anipi', 'antuh', 'anu', 'ap', 'api', 'apitew', 'aqa', 'asa', 'asi', 'at', 'atan', 'ataneo', 'atavatah', 'atavo', 'ati', 'atin', 'ato', 'aton', 'att', 'au', 'auro', 'ausuen', 'avato', 'aw', 'away', 'ay', 'aya', 'ayshni', 'blaska', 'blee', 'bleesha', 'chaad', 'cheech', 'cheta', 'chi', 'chinksapa', 'chintonka', 'chip', 'chitehew', 'chiyaw', 'chmo', 'chunka', 'chuvio', 'ck', 'co', 'comence', 'cy', 'd', 'da', 'dagik', 'do', 'e', 'edagik', 'ee', 'eesha', 'ega', 'egowaase', 'ehiv', 'eii', 'ekah', 'ekhwa', 'el', 'ele', 'em', 'emin', 'en', 'enam', 'eome', 'etaqa', 'eto', 'etoveto', 'etu', 'eus', 'even', 'eyo', 'g', 'ga', 'gaa', 'gaana', 'gakwunu', 'gan', 'geeska', 'gen', 'gii', 'go', 'gowaase', 'gundo', 'gwau', 'h', 'haad', 'hada', 'haka', 'hakw', 'hali', 'hecassa', 'hee', 'heii', 'hemin', 'heta', 'heven', 'hi', 'hinksapa', 'hintonka', 'hip', 'hise', 'hitehew', 'hiv', 'hk', 'hkan', 'hmo', 'hn', 'hnacto', 'hni', 'ho', 'hton', 'hu', 'hua', 'hy', 'i', 'ia', 'ichiyaw', 'ichuvio', 'iel', 'ii', 'iil', 'iin', 'ik', 'ika', 'iki', 'ikiy', 'ilat', 'ilawu', 'ili', 'ima', 'imo', 'imon', 'in', 'ingwa', 'ini', 'inne', 'innewah', 'iohoya', 'iossi', 'iovi', 'is', 'ise', 'isi', 'isin', 'iti', 'itt', 'ivi', 'iza', 'k', 'ka', 'kah', 'kahome', 'kamich', 'kan', 'kapitew', 'kausuen', 'kaw', 'kcheech', 'keome', 'khwa', 'ki', 'kii', 'kinne', 'kiy', 'ko', 'koosue', 'kota', 'ktay', 'ku', 'kunniwi', 'l', 'la', 'lah', 'lat', 'laton', 'le', 'lee', 'leesha', 'lem', 'li', 'lnish', 'lo', 'lu', 'm', 'ma', 'man', 'mati', 'mawihio', 'mgache', 'mhaka', 'mi', 'mmawihio', 'mn', 'mo', 'mon', 'movi', 'mpi', 'mu', 'n', 'na', 'naagd', 'naco', 'nakw', 'nam', 'nassatta', 'nck', 'ndo', 'nee', 'ngwa', 'ni', 'nimon', 'ninnewah', 'nipi', 'nish', 'nivi', 'nke', 'nko', 'no', 'noowau', 'nta', 'ntuh', 'nu', 'nzee', 'ne', 'nk', 'nu', 'o', 'oda', 'ok', 'okee', 'oko', 'ol', 'olo', 'omence', 'on', 'onah', 'onka', 'ono', 'ook', 'oosue', 'oowau', 'opka', 'or', 'ori', 'osan', 'oskah', 'ossed', 'ossi', 'ota', 'otah', 'othi', 'oto', 'otohpa', 'ovaoto', 'ovi', 'ovio', 'p', 'pa', 'pana', 'pay', 'pee', 'pi', 'pka', 'ponah', 'qa', 'quos', 'r', 'rato', 'ri', 'riki', 'rne', 'rokee', 'rug', 's', 'sa', 'san', 'schunka', 'shka', 'sho', 'si', 'sin', 'skah', 'smu', 'ssed', 'stag', 'sun', 't', 'ta', 'tag', 'tah', 'tai', 'tan', 'taneo', 'taqa', 'tas', 'tau', 'tavatah', 'tay', 'tci', 'te', 'tekah', 'thi', 'ti', 'tiin', 'tima', 'tin', 'to', 'toko', 'ton', 'tonka', 'totohpa', 'toveto', 'tt', 'tu', 'u', 'ua', 'ug', 'uini', 'uk', 'ul', 'umgache', 'umi', 'umn', 'un', 'unaagd', 'undo', 'unke', 'unniwi', 'uos', 'urato', 'uro', 'us', 'ushka', 'utci', 'utu', 'uul', 'vaoto', 'vato', 'vaya', 'veyo', 'vi', 'vio', 'viohoya', 'w', 'wamat', 'wau', 'waw', 'way', 'wilawu', 'win', 'wnakw', 'y', 'ya', 'yahonaw', 'yatavo', 'yaya', 'ye', 'yshni', 'yton', 'za', 'zee', 'zhee', 'ziil', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['Abe', 'Abed', 'Abeq', 'Ado', 'Adoe', 'Ads', 'Adsi', 'Aiy', 'Aiya', 'Ala', 'Alam', 'Alaq', 'Alaw', 'Alg', 'Algo', 'Alt', 'Alts', 'Ama', 'Amad', 'Amay', 'Ami', 'Amit', 'Ane', 'Anev', 'Ang', 'Ange', 'Ank', 'Ankt', 'Ann', 'Anna', 'Apo', 'Apon', 'Aqu', 'Aque', 'Ask', 'Aska', 'Ate', 'Atep', 'Avo', 'Avon', 'Awe', 'Awen', 'Awi', 'Awin', 'Aya', 'Ayas', 'Ayi', 'Ayit', 'Bas', 'Bash', 'Ben', 'Bena', 'Bly', 'Cat', 'Cato', 'Cha', 'Chap', 'Che', 'Chen', 'Chep', 'Ches', 'Chey', 'Chi', 'Chia', 'Chic', 'Chil', 'Chim', 'Chit', 'Cho', 'Chol', 'Chos', 'Chu', 'Chum', 'Coc', 'Coch', 'Den', 'Dena', 'Don', 'Dono', 'Dya', 'Dyan', 'Eno', 'Enol', 'Ete', 'Eten', 'Eyo', 'Eyot', 'Fal', 'Fala', 'Fel', 'Fela', 'Flo', 'Fyr', 'Gah', 'Gaho', 'Gal', 'Gali', 'Hac', 'Hach', 'Hal', 'Halo', 'Hat', 'Hate', 'Hau', 'Haus', 'Heh', 'Hehe', 'Hin', 'Hint', 'Hon', 'Hono', 'Hum', 'Humi', 'Hur', 'Huri', 'Ima', 'Imal', 'Isi', 'Ist', 'Ista', 'Itu', 'Ituh', 'Izu', 'Izus', 'Jyn', 'Kac', 'Kach', 'Kak', 'Kaka', 'Kal', 'Kali', 'Kan', 'Kant', 'Kar', 'Karm', 'Kary', 'Kas', 'Kasa', 'Kay', 'Kaya', 'Kee', 'Keeg', 'Ker', 'Kil', 'Kile', 'Kim', 'Kima', 'Kimi', 'Kin', 'Kine', 'Kio', 'Kion', 'Kir', 'Kiri', 'Kiw', 'Kiwi', 'Kok', 'Koko', 'Kol', 'Kole', 'Kun', 'Kuna', 'Kuw', 'Kuwa', 'Kwa', 'Kwan', 'Kym', 'Len', 'Lenm', 'Leo', 'Leot', 'Leq', 'Lequ', 'Lil', 'Lilu', 'Lis', 'Lise', 'Lom', 'Loma', 'Luy', 'Luyu', 'Mac', 'Mach', 'Mag', 'Maga', 'Mage', 'Mah', 'Maha', 'Mai', 'Man', 'Mani', 'Mar', 'Mara', 'Mau', 'Maus', 'Med', 'Meda', 'Mem', 'Memd', 'Meo', 'Meoq', 'Mia', 'Miak', 'Mig', 'Migi', 'Mik', 'Mika', 'Min', 'Mina', 'Mino', 'Miny', 'Mon', 'Mona', 'Moo', 'Moor', 'Mun', 'Muna', 'Nad', 'Nadi', 'Nam', 'Nami', 'Nan', 'Nar', 'Nara', 'Nas', 'Nasc', 'Nash', 'Nasn', 'Nat', 'Nata', 'Nee', 'Neen', 'Net', 'Neti', 'Nid', 'Nida', 'Nij', 'Nijl', 'Nit', 'Nita', 'Nitu', 'Nok', 'Noko', 'Nol', 'Nolc', 'Nov', 'Nova', 'Nuk', 'Nukp', 'Num', 'Nume', 'Nun', 'Nuna', 'Nut', 'Nutt', 'Oda', 'Odah', 'Ogi', 'Ogin', 'Ola', 'Olat', 'Oli', 'Olis', 'Omi', 'Omin', 'Ona', 'Onaw', 'One', 'Onei', 'Oni', 'Onid', 'Oot', 'Oota', 'Opa', 'Ore', 'Oren', 'Ori', 'Orid', 'Pak', 'Paku', 'Pakw', 'Pal', 'Pala', 'Pam', 'Pamu', 'Pap', 'Papi', 'Pau', 'Pauw', 'Pav', 'Pava', 'Pet', 'Peta', 'Petu', 'Pol', 'Polo', 'Pow', 'Powa', 'Pul', 'Pule', 'Qua', 'Quan', 'Ros', 'Rosi', 'Roz', 'Roze', 'Sah', 'Sahk', 'Sal', 'Sala', 'Sat', 'Sati', 'Seq', 'Sequ', 'Sew', 'Sewa', 'Sha', 'Shad', 'Shan', 'Shas', 'She', 'Shea', 'Shes', 'Shi', 'Shim', 'Shu', 'Shum', 'Sih', 'Sihu', 'Sil', 'Siln', 'Sin', 'Sino', 'Sis', 'Sisi', 'Sna', 'Snan', 'Sok', 'Soka', 'Sokw', 'Soo', 'Sool', 'Sor', 'Sora', 'Soy', 'Soya', 'Sun', 'Sunk', 'Sur', 'Sura', 'Tab', 'Tabl', 'Tabo', 'Tac', 'Taci', 'Tad', 'Tadi', 'Tag', 'Taga', 'Tah', 'Tahk', 'Tai', 'Taig', 'Taim', 'Tain', 'Taip', 'Tak', 'Taka', 'Tako', 'Tal', 'Tala', 'Tall', 'Tam', 'Tama', 'Tan', 'Tand', 'Tans', 'Tar', 'Tars', 'Taw', 'Tawa', 'Tay', 'Taya', 'Taye', 'Taz', 'Taza', 'Teh', 'Tehy', 'Tep', 'Tepa', 'Tip', 'Tipo', 'Tiv', 'Tiva', 'Tol', 'Toli', 'Top', 'Topa', 'Tot', 'Tots', 'Tuw', 'Tuwa', 'Una', 'Wak', 'Waka', 'Waki', 'Wan', 'Wane', 'Wau', 'Waun', 'Wen', 'Weno', 'Wic', 'Wica', 'Wik', 'Wiki', 'Win', 'Wine', 'Wino', 'Wut', 'Wuti', 'Wya', 'Wyan', 'Wyn', 'Wyno', 'Yam', 'Yamk', 'Yep', 'Yepa', 'Yok', 'Yoki', 'Zab', 'Zaba', 'Zal', 'Zalt', 'Zih', 'Zihn', 'Zit', 'Zitk', 'Zlh', 'Zlhn', 'Zon', 'Zont', 'Zuz', 'Zuze'];
  const nm4 = ['a', 'abun', 'aco', 'adabun', 'ah', 'ahongva', 'ahy', 'ain', 'al', 'ala', 'alah', 'alasa', 'ali', 'alis', 'am', 'ama', 'an', 'ana', 'anda', 'ane', 'anga', 'ani', 'anita', 'anna', 'anne', 'anon', 'anta', 'anyauma', 'apiwakan', 'aqa', 'as', 'asa', 'asi', 'atha', 'ati', 'au', 'awangwa', 'ay', 'cha', 'ckoa', 'd', 'da', 'dabun', 'dahy', 'dela', 'di', 'dinok', 'dy', 'e', 'eawa', 'eda', 'ees', 'eks', 'ela', 'eli', 'ema', 'en', 'ena', 'ene', 'eni', 'enne', 'enya', 'es', 'et', 'eta', 'ette', 'ewuti', 'eya', 'eyna', 'ga', 'gsquaw', 'ha', 'hana', 'he', 'hebens', 'heta', 'hi', 'hina', 'hingum', 'hongva', 'hota', 'i', 'ia', 'id', 'ida', 'idinok', 'ie', 'ika', 'ila', 'ilahi', 'ima', 'imak', 'imela', 'in', 'ina', 'incala', 'ine', 'ingum', 'inka', 'is', 'isi', 'iska', 'isse', 'it', 'ita', 'iti', 'ka', 'kala', 'kalasa', 'ki', 'koa', 'koda', 'ks', 'kyo', 'l', 'la', 'lah', 'lahi', 'lam', 'leawa', 'lena', 'li', 'lita', 'lon', 'lulah', 'ma', 'mak', 'malis', 'man', 'mana', 'mani', 'meda', 'mela', 'mis', 'miti', 'mu', 'n', 'na', 'naco', 'nan', 'nasa', 'ncala', 'nda', 'ndela', 'ne', 'net', 'nga', 'ni', 'nia', 'nita', 'nka', 'nn', 'nna', 'noa', 'non', 'notago', 'nya', 'nyauma', 'o', 'oa', 'oba', 'oda', 'oia', 'ola', 'oma', 'omis', 'on', 'ona', 'oni', 'onya', 'opa', 'ori', 'orri', 'ota', 'otago', 'ovi', 'owa', 'pa', 'pana', 'pi', 'piwakan', 'posi', 'qa', 'qua', 'quanee', 'ranta', 'ri', 'rri', 's', 'sa', 'sha', 'she', 'shebens', 'si', 'sis', 'sisse', 'ska', 'smu', 'soba', 'sovi', 'sposi', 'squaw', 'sta', 'sy', 't', 'ta', 'tah', 'tana', 'tha', 'the', 'ti', 'tie', 'to', 'tola', 'tsa', 'tte', 'u', 'ua', 'uanee', 'ulah', 'una', 'unia', 'uoia', 'uy', 'uye', 'vay', 'vi', 'w', 'wa', 'wangwa', 'wau', 'wuti', 'y', 'ya', 'yanna', 'yanne', 'ye', 'yenne', 'yeta', 'yna', 'yo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm5 = ['Autumn', 'Black', 'Blood', 'Chest', 'Claw', 'Cloud', 'Crest', 'Dark', 'Dawn', 'Eagle', 'Earth', 'Ember', 'Far', 'Fire', 'Flame', 'Flat', 'Fog', 'Four', 'Free', 'Full', 'Gloom', 'Glow', 'Grass', 'Great', 'Hard', 'Hawk', 'Haze', 'Heavy', 'Hill', 'Iron', 'Keen', 'Kodo', 'Light', 'Lightning', 'Lone', 'Long', 'Mist', 'Mountain', 'Oat', 'Pine', 'Plain', 'Proud', 'Pyre', 'Rage', 'Rain', 'Raven', 'River', 'Rock', 'Rough', 'Rumble', 'Rune', 'Sharp', 'Single', 'Sky', 'Soft', 'Spirit', 'Spring', 'Steel', 'Still', 'Stone', 'Storm', 'Strong', 'Swift', 'Summer', 'Sun', 'Tall', 'Thunder', 'Three', 'Tree', 'Truth', 'Two', 'Wheat', 'White', 'Wild', 'Wind', 'Winter', 'Wise', 'Young'];
  const nm6 = ['bash', 'bend', 'bender', 'binder', 'blade', 'bluff', 'brace', 'breath', 'breeze', 'caller', 'chaser', 'creek', 'cut', 'cutter', 'draft', 'dream', 'dreamer', 'drifter', 'feather', 'forest', 'grain', 'gust', 'hair', 'hide', 'hoof', 'horn', 'jumper', 'mane', 'moon', 'pelt', 'rage', 'rider', 'roar', 'runner', 'scar', 'seeker', 'soar', 'shadow', 'shield', 'shot', 'shout', 'singer', 'snout', 'song', 'spear', 'stalker', 'stream', 'stride', 'strider', 'talon', 'tail', 'tusk', 'tusks', 'totem', 'walker', 'watcher', 'water', 'weaver', 'whisk', 'whisper', 'wind', 'winds', 'wood', 'woods', 'wound'];



  {
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm3[rnd] + nm4[rnd2]} ${nm5[rnd5]}${nm6[rnd6]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd] + nm2[rnd2]} ${nm5[rnd5]}${nm6[rnd6]}`;
    }
    return names;
  }
}
