export default function caldaris() {
  const type = Math.random() < 0.5 ? 0 : 1;

  const names1 = ['A', 'Aa', 'Aata', 'Ada', 'Ade', 'Ado', 'Ah', 'Ai', 'Aka', 'Ake', 'Aki', 'Akse', 'Ala', 'Ale', 'Aleksa', 'Ama', 'Anse', 'Ante', 'Anto', 'Ara', 'Ari', 'Arma', 'Ashi', 'Ata', 'Atshu', 'Atsu', 'Au', 'Augu', 'Auku', 'Azuma', 'Ba', 'Bai', 'Be', 'Benja', 'Bere', 'Bernha', 'Bo', 'Bu', 'Bunji', 'Bunra', 'Chi', 'Cho', 'Chui', 'Da', 'Daa', 'Dai', 'Daise', 'Danju', 'De', 'Die', 'Do', 'Doi', 'Dokuo', 'Domi', 'E', 'Ebi', 'Eckha', 'Ee', 'Ei', 'Eii', 'Eki', 'Emme', 'Enge', 'Enno', 'Etsu', 'Fe', 'Frie', 'Fu', 'Fuji', 'Fukusa', 'Fumi', 'Fumia', 'Ga', 'Ge', 'Gempa', 'Geni', 'Genno', 'Gi', 'Gii', 'Go', 'Gonku', 'Gonshi', 'Gre', 'Gu', 'Gyo', 'Gyu', 'Ha', 'Hache', 'Hachi', 'Haji', 'Haku', 'Hanshi', 'He', 'Hei', 'Heiha', 'Hemmi', 'Hemmo', 'Hi', 'Hide', 'Hito', 'Ho', 'Hoi', 'Hoki', 'Hoku', 'Huu', 'Ii', 'Ila', 'Ina', 'Iso', 'Iwa', 'Izu', 'Ja', 'Jaa', 'Je', 'Jere', 'Ji', 'Jinza', 'Jo', 'Joha', 'Joo', 'Jou', 'Ju', 'Juha', 'Juu', 'Jy', 'Ka', 'Kaa', 'Kai', 'Kale', 'Kao', 'Katsu', 'Katzu', 'Kau', 'Kawa', 'Kazu', 'Kei', 'Ki', 'Kio', 'Kita', 'Kiyo', 'Kiyoe', 'Kle', 'Ko', 'Kri', 'Ku', 'Kui', 'Kulle', 'Kuni', 'Kyö', 'Kyo', 'Kyoi', 'Kyu', 'Kyui', 'La', 'Lau', 'Le', 'Lee', 'Leo', 'Luu', 'Ma', 'Mabu', 'Mago', 'Mako', 'Mamo', 'Mana', 'Mano', 'Mare', 'Mari', 'Masa', 'Masu', 'Mata', 'Mau', 'Maxi', 'Mi', 'Mii', 'Moo', 'Moto', 'Mune', 'Muno', 'Na', 'Nata', 'Nesto', 'Ni', 'Nii', 'Niko', 'No', 'Nobu', 'Nuu', 'Oi', 'Ola', 'Oli', 'Oska', 'Pa', 'Paa', 'Pau', 'Pe', 'Pette', 'Pieta', 'Py', 'Ra', 'Rai', 'Rau', 'Rei', 'Ri', 'Ro', 'Roo', 'Ru', 'Ruu', 'Sa', 'Sada', 'Sae', 'Sai', 'Saka', 'Saku', 'Salo', 'Samu', 'Sane', 'Sante', 'Sau', 'Se', 'Seve', 'Shi', 'Sho', 'Si', 'Sie', 'Sigi', 'Simeo', 'Soi', 'Ste', 'Su', 'Sule', 'Ta', 'Taa', 'Taave', 'Tai', 'Taka', 'Takai', 'Tane', 'Tapa', 'Tau', 'Te', 'Tee', 'Tei', 'Tetsu', 'Teu', 'Tho', 'Ti', 'To', 'Toi', 'Toki', 'Toku', 'Toshi', 'Tou', 'Tuo', 'Tuu', 'Unta', 'Uole', 'Uta', 'Ute', 'Va', 'Vai', 'Valtte', 'Ve', 'Vee', 'Vei', 'Verne', 'Vi', 'Vie', 'Vihto', 'Vilhe', 'Voi', 'Waltte', 'Wi', 'Ya', 'Yaso', 'Yasu', 'Yle', 'Yori', 'Yu', 'Yuno'];
  const names2 = ['bei', 'ben', 'bias', 'briel', 'bu', 'buro', 'buru', 'chi', 'chiro', 'cob', 'colas', 'dayu', 'den', 'deon', 'dolf', 'drich', 'fan', 'ffen', 'fumi', 'fusa', 'gai', 'gawa', 'geaki', 'gekazu', 'geki', 'geko', 'gemasa', 'gematsu', 'gemori', 'genaga', 'genobu', 'geru', 'getaka', 'getoki', 'gfried', 'gmund', 'go', 'gochiyo', 'gor', 'goro', 'ha', 'hachi', 'hana', 'hani', 'hann', 'hannes', 'haru', 'hash', 'hei', 'hide', 'hige', 'hiko', 'hira', 'hiro', 'hisa', 'hito', 'ho', 'htei', 'ji', 'jio', 'jiro', 'jo', 'juro', 'ka', 'kado', 'kael', 'kaku', 'kao', 'karu', 'kas', 'kazu', 'ke', 'ken', 'ki', 'kichi', 'kin', 'kka', 'kkai', 'kki', 'kko', 'klas', 'ko', 'kob', 'kolaus', 'koppi', 'ksi', 'ksis', 'ku', 'kuchu', 'kudo', 'kugoro', 'kuken', 'kuni', 'kuno', 'kunojo', 'kusho', 'lai', 'lar', 'lbert', 'lbrecht', 'lde', 'ldemar', 'le', 'lf', 'lfried', 'lger', 'lhelm', 'lho', 'li', 'lia', 'lias', 'liel', 'lis', 'lius', 'lix', 'ljam', 'ljami', 'ljas', 'ljo', 'lle', 'llervo', 'lliam', 'lm', 'lmar', 'lmari', 'lmer', 'lmi', 'lo', 'lph', 'lpi', 'lpo', 'lppu', 'lto', 'ltter', 'ltteri', 'lvar', 'lvari', 'lvi', 'lwin', 'm', 'ma', 'mara', 'maro', 'mas', 'masa', 'masu', 'me', 'mei', 'meli', 'metti', 'mi', 'mias', 'michi', 'mil', 'milian', 'min', 'minobu', 'mio', 'mitada', 'mitsu', 'mmi', 'mmo', 'mo', 'mon', 'mori', 'moto', 'mpo', 'mpsa', 'mu', 'muel', 'muku', 'mund', 'mune', 'muro', 'n', 'na', 'nael', 'naga', 'nan', 'nari', 'nas', 'natan', 'nathan', 'nbe', 'ncho', 'nd', 'ne', 'ner', 'nfred', 'ngo', 'nho', 'ni', 'nibu', 'nic', 'niel', 'nik', 'nin', 'nis', 'nji', 'njiro', 'njo', 'njuro', 'nkei', 'nki', 'nko', 'nmochi', 'nnai', 'nne', 'nnes', 'nni', 'nnis', 'nno', 'nnojo', 'nnon', 'nns', 'nnu', 'no', 'nobu', 'nori', 'nosuki', 'nraku', 'nri', 'nrich', 'nrik', 'nrikki', 'ns', 'nsei', 'nsuke', 'ntaro', 'nter', 'nteri', 'nu', 'nz', 'nzaburo', 'nzo', 'pe', 'pert', 'phan', 'pi', 'pias', 'pio', 'po', 'ppo', 'pro', 'ra', 'raku', 'rald', 'rbert', 'rd', 'rdt', 're', 'rei', 'reo', 'rhard', 'rho', 'ri', 'rias', 'rich', 'rik', 'rikki', 'ris', 'rise', 'rki', 'rkko', 'rkku', 'rko', 'rkus', 'rle', 'rlo', 'rma', 'rman', 'rmanni', 'rmas', 'rmi', 'rmo', 'rmund', 'rne', 'rni', 'rno', 'ro', 'roaki', 'robumi', 'rofumi', 'roharu', 'rohisa', 'roji', 'rokazu', 'rokichi', 'rokumi', 'rold', 'ron', 'roshi', 'roshige', 'rotada', 'rotaka', 'rotsugu', 'roya', 'royasu', 'royuki', 'rre', 'rri', 'rsi', 'rsti', 'rto', 'rtti', 'rttu', 'rttur', 'rtturi', 'ru', 'ruhiko', 'ruhiro', 'ruki', 'ruko', 'rumi', 'runobu', 'rvi', 'rvo', 'ry', 's', 'sa', 'saaki', 'sada', 'sahsi', 'sai', 'sak', 'saki', 'sakki', 'saku', 'samitsu', 'sanobu', 'sashi', 'sato', 'sayuki', 'seki', 'sen', 'seppi', 'ses', 'shi', 'shichi', 'shige', 'sho', 'si', 'ska', 'sko', 'slak', 'sma', 'smo', 'smund', 'so', 'sper', 'speri', 'sse', 'sser', 'sseri', 'ssho', 'ssi', 'st', 'staa', 'sti', 'stian', 'stin', 'sto', 'stus', 'su', 'suke', 'suo', 'suoka', 'sushi', 'ta', 'tai', 'taka', 'take', 'tan', 'tane', 'taro', 'ter', 'thias', 'ti', 'tias', 'tis', 'tlef', 'tlev', 'to', 'toki', 'toku', 'tomo', 'toru', 'tos', 'toshi', 'trich', 'trik', 'tro', 'tso', 'tsu', 'tsugu', 'tsume', 'tsune', 'tsuo', 'tte', 'tteus', 'tti', 'ttias', 'tto', 'tu', 'va', 'vali', 'vana', 'vari', 'ver', 'vert', 'vertti', 'vi', 'vid', 'vo', 'wa', 'wao', 'ya', 'yaki', 'yasu', 'yato', 'yden', 'yo', 'yoki', 'yori', 'yoshi', 'yu', 'yuki', 'zaburo', 'zan', 'zo', 'zu', 'zuo', 'zushi', 'zushige'];
  const names3 = ['Aa', 'Aalto', 'Abe', 'Ada', 'Ade', 'Aho', 'Ahti', 'Aka', 'Aki', 'Ala', 'Alte', 'Ama', 'Anna', 'Antti', 'Antto', 'Ao', 'Ara', 'Ari', 'Aro', 'Asa', 'Ashi', 'Asi', 'Aue', 'Azu', 'Ba', 'Bau', 'Be', 'Bre', 'Brei', 'Chi', 'Da', 'Do', 'Ee', 'Ehre', 'Esko', 'Fae', 'Fei', 'Fu', 'Fuji', 'Fujio', 'Fuku', 'Ga', 'Gre', 'Grie', 'Ha', 'Haa', 'Haapa', 'Habe', 'Hagi', 'Haka', 'Hakka', 'Halo', 'Hama', 'Hannu', 'Hase', 'Hashi', 'Hata', 'Hau', 'Haya', 'Hei', 'Helmi', 'Hemi', 'Hie', 'Higa', 'Higu', 'Hiltu', 'Hira', 'Hiro', 'Hirvo', 'Honka', 'Huhta', 'Huttu', 'Ihalai', 'Iivo', 'Ike', 'Iko', 'Ima', 'Immo', 'Ina', 'Inou', 'Ise', 'Ishi', 'Iso', 'Iwa', 'Jaa', 'Janhu', 'Jantu', 'Joe', 'Joha', 'Joke', 'Joki', 'Jout', 'Juho', 'Junni', 'Juntti', 'Juntu', 'Jussi', 'Juvo', 'Ka', 'Kai', 'Kane', 'Kankku', 'Kapa', 'Karja', 'Karppi', 'Karttu', 'Karvo', 'Kau', 'Kawa', 'Ke', 'Kekko', 'Kemppai', 'Keski', 'Kettu', 'Ki', 'Kiku', 'Kimo', 'Kimu', 'Kinnu', 'Kino', 'Kita', 'Kle', 'Kleme', 'Kli', 'Knuu', 'Ko', 'Koi', 'Koio', 'Kokko', 'Kopo', 'Korho', 'Korpe', 'Koske', 'Koski', 'Koti', 'Krau', 'Ku', 'Kui', 'Kuja', 'Kukko', 'Kulma', 'Kumpu', 'Kuoppa', 'Kura', 'Kuri', 'Kuro', 'Kuse', 'Kusu', 'Kuu', 'Kuwa', 'La', 'Laa', 'Laakko', 'Lahti', 'Lai', 'Laju', 'Lappa', 'Lassi', 'Latva', 'Lau', 'Laukka', 'Le', 'Lehti', 'Lehto', 'Lei', 'Leino', 'Leski', 'Liika', 'Lindho', 'Lippo', 'Litma', 'Luo', 'Ma', 'Mae', 'Mai', 'Maija', 'Makko', 'Mali', 'Manne', 'Manni', 'Markku', 'Martti', 'Matsu', 'Matti', 'Mau', 'Me', 'Mi', 'Mietti', 'Mikko', 'Miya', 'Moila', 'Mori', 'Mura', 'Musto', 'Naka', 'Neno', 'Neu', 'Neva', 'Ni', 'Nie', 'Nishi', 'Niska', 'Nu', 'Ny', 'Oi', 'Oja', 'Oka', 'Oki', 'Oksa', 'Oku', 'Oshi', 'Pa', 'Paa', 'Pala', 'Parta', 'Parviai', 'Pe', 'Pekka', 'Pelto', 'Peso', 'Pieta', 'Pieti', 'Pu', 'Pulkki', 'Ra', 'Rai', 'Ranta', 'Rau', 'Re', 'Rei', 'Reijo', 'Reko', 'Rissa', 'Ro', 'Ruotsa', 'Sa', 'Saa', 'Salme', 'Schae', 'Schni', 'Shi', 'Shimo', 'Shino', 'Sibe', 'Sii', 'Silta', 'Simo', 'So', 'Soi', 'Soini', 'Some', 'Ste', 'Su', 'Suga', 'Sugi', 'Suo', 'Ta', 'Taka', 'Take', 'Tammi', 'Tana', 'Tani', 'Te', 'Ti', 'Toi', 'Toku', 'Trau', 'Tuo', 'Turu', 'Ukko', 'Uo', 'Uusi', 'Va', 'Vai', 'Valto', 'Vanha', 'Vi', 'Viina', 'Viita', 'Villa', 'Viro', 'Vuo', 'Wa', 'We', 'Wei', 'Wi', 'Yama', 'Yli', 'Yoko', 'Yona', 'Yone', 'Yoshi'];
  const names4 = ['ba', 'bata', 'be', 'bel', 'bo', 'buya', 'chi', 'chida', 'chmann', 'chmayer', 'da', 'dler', 'dlich', 'do', 'drich', 'fer', 'ffer', 'fmann', 'gawa', 'gi', 'guchi', 'hara', 'hira', 'hlau', 'hler', 'hlmann', 'hmer', 'hner', 'hrmann', 'hti', 'hto', 'htola', 'jala', 'jima', 'ka', 'kaga', 'kainen', 'kaki', 'kami', 'kawa', 'ke', 'ki', 'kkanen', 'kki', 'kkinen', 'kko', 'kkola', 'ko', 'kola', 'kso', 'ksonen', 'kuda', 'kui', 'kula', 'la', 'lainen', 'lbach', 'lbronn', 'lius', 'lker', 'ller', 'llio', 'lm', 'lman', 'lmi', 'lo', 'lonen', 'lto', 'ltzer', 'lzer', 'ma', 'maala', 'mainen', 'man', 'mann', 'mark', 'mayer', 'mberg', 'mei', 'meister', 'mela', 'mes', 'mi', 'mine', 'minen', 'mioja', 'miya', 'mmi', 'mmo', 'mola', 'monen', 'mori', 'moto', 'mura', 'naga', 'nai', 'naka', 'nanen', 'nbaum', 'nberg', 'nda', 'nder', 'ndroth', 'ne', 'neko', 'nen', 'ner', 'nfeld', 'nfest', 'ng', 'ngart', 'nger', 'nhardt', 'nhart', 'ni', 'ninger', 'nio', 'nishi', 'nmann', 'nner', 'nno', 'no', 'nonen', 'nreb', 'nreich', 'nser', 'nsson', 'nstein', 'nsuu', 'nsz', 'nta', 'ntz', 'nu', 'nz', 'nzel', 'nzer', 'nzig', 'oka', 'pala', 'pio', 'po', 'pper', 'ppi', 'ppila', 'ppinen', 'ra', 'rai', 'rainen', 'raishi', 'raki', 'rbach', 'rchner', 're', 'rela', 'rfmann', 'rgen', 'rger', 'rheim', 'rho', 'rhu', 'ri', 'rila', 'rinen', 'ris', 'rju', 'rjula', 'rkorn', 'rkoski', 'rlin', 'rman', 'rmann', 'rmi', 'rminen', 'rn', 'rnheimer', 'ro', 'rola', 'roma', 'rta', 'rtanen', 'rth', 'rths', 'rva', 'saari', 'sai', 'saki', 'sato', 'sch', 'schner', 'se', 'sela', 'sen', 'shi', 'shida', 'shido', 'shige', 'shima', 'shiro', 'shita', 'singer', 'sio', 'skanen', 'ski', 'sma', 'ss', 'sser', 'ssler', 'ssmann', 'stian', 'stner', 'szer', 'ta', 'tala', 'talo', 'tani', 'ters', 'thman', 'thmann', 'tila', 'tinen', 'tio', 'tka', 'tner', 'to', 'tola', 'tomi', 'tsuda', 'tsui', 'ttag', 'tter', 'tti', 'tzer', 'tzler', 'tzmann', 'tzold', 'va', 'vanen', 'velä', 'vela', 'vi', 'vimäki', 'vinen', 'vio', 'virta', 'vist', 'visto', 'vola', 'vonen', 'vu', 'vula', 'wa', 'wai', 'wara', 'ya', 'yama', 'ye', 'zaki', 'zawa', 'zuki'];
  const names5 = ['Aa', 'Aallo', 'Ade', 'Aga', 'Ai', 'Aka', 'Ake', 'Aki', 'Aleksa', 'Ali', 'Alii', 'Ama', 'Ane', 'Ani', 'Anne', 'Anni', 'Annu', 'Ao', 'Ari', 'Asa', 'Asu', 'Au', 'Augu', 'Aui', 'Aya', 'Ayu', 'Aza', 'Azu', 'Be', 'Bea', 'Bri', 'Bru', 'Caro', 'Chi', 'Chri', 'Ee', 'Ei', 'Ele', 'Eleo', 'Eli', 'Elvii', 'Emi', 'Emu', 'Eri', 'Este', 'Fa', 'Fio', 'Fra', 'Frau', 'Fumi', 'Gerli', 'Gre', 'Ha', 'Hana', 'Hani', 'Haru', 'Hasu', 'Hato', 'He', 'Hei', 'Hele', 'Helee', 'Hi', 'Hika', 'Hime', 'Ho', 'Hu', 'Ichi', 'Ii', 'Ilma', 'Ilo', 'Ina', 'Inke', 'Io', 'Ire', 'Iri', 'Irme', 'Isa', 'Ja', 'Jaa', 'Jani', 'Jasmi', 'Je', 'Jemi', 'Jo', 'Joha', 'Jose', 'Ju', 'Ka', 'Kaa', 'Kai', 'Kane', 'Kari', 'Karo', 'Kata', 'Ke', 'Ki', 'Ko', 'Koi', 'Kree', 'Kri', 'Ku', 'Ky', 'Kylli', 'La', 'Lai', 'Lau', 'Le', 'Lee', 'Lei', 'Lemmi', 'Li', 'Lii', 'Lo', 'Lu', 'Ma', 'Maa', 'Mai', 'Marja', 'Marjaa', 'Marju', 'Marke', 'Marlee', 'Mati', 'Matlee', 'Me', 'Mee', 'Mi', 'Mie', 'Mii', 'Mika', 'Mikae', 'Mili', 'Mina', 'Mine', 'Moo', 'Mu', 'Na', 'Nae', 'Nai', 'Nami', 'Ne', 'Ni', 'No', 'Noo', 'Oi', 'Oli', 'One', 'Oo', 'Ori', 'Orvo', 'Osa', 'Ou', 'Pau', 'Pe', 'Pi', 'Raa', 'Rai', 'Rau', 'Re', 'Rebe', 'Ree', 'Rei', 'Ri', 'Rii', 'Ro', 'Roo', 'Ru', 'Sa', 'Saa', 'Sai', 'Sane', 'Se', 'Sei', 'Sera', 'Shi', 'Si', 'So', 'Soi', 'Stii', 'Su', 'Suo', 'Sy', 'Ta', 'Tai', 'Talvi', 'Te', 'Tei', 'Telle', 'Terhi', 'Ti', 'Tii', 'To', 'Toi', 'Tsu', 'Tui', 'Tuo', 'Tuu', 'Ty', 'Ume', 'Une', 'Ura', 'Ure', 'Uru', 'Usa', 'Va', 'Vai', 'Ve', 'Vee', 'Vella', 'Vi', 'Vie', 'Vii', 'Vilhe', 'Vio', 'Vuo', 'Waka', 'Yasu', 'Yatsu', 'Yo', 'Yu'];
  const names6 = ['ba', 'ca', 'cca', 'chi', 'chiko', 'chiru', 'da', 'dako', 'de', 'di', 'dit', 'dori', 'fia', 'fiina', 'fine', 'fuyu', 'ga', 'gami', 'ge', 'gi', 'gitte', 'grid', 'gu', 'gumi', 'ha', 'hana', 'haru', 'hi', 'hja', 'hla', 'ho', 'hobu', 'hoko', 'homi', 'hori', 'horu', 'hvi', 'ja', 'ji', 'ju', 'ka', 'kae', 'kage', 'kako', 'kamae', 'kaze', 'ke', 'kel', 'ki', 'kichi', 'kie', 'kiji', 'kika', 'kiko', 'kiwa', 'kiyama', 'kiyo', 'kka', 'kki', 'kko', 'kla', 'ko', 'ku', 'kue', 'kuko', 'kuma', 'kura', 'kurako', 'kuro', 'kyo', 'la', 'lda', 'lde', 'le', 'lga', 'lge', 'li', 'lia', 'liina', 'likk', 'likki', 'lin', 'lina', 'lis', 'lissa', 'lja', 'lka', 'lke', 'lkka', 'lla', 'lle', 'llevi', 'lli', 'llin', 'lma', 'lme', 'lmi', 'lmiina', 'lppa', 'lpur', 'lvi', 'lvia', 'ly', 'ma', 'mach', 'maki', 'mako', 'mari', 'me', 'mi', 'mie', 'mikki', 'miko', 'miyo', 'mmi', 'mo', 'mon', 'mosa', 'mpi', 'mu', 'n', 'na', 'nako', 'nami', 'namo', 'nao', 'nase', 'natsu', 'nd', 'nda', 'nde', 'ndra', 'ne', 'nea', 'nes', 'nhild', 'nhilde', 'ni', 'nie', 'nikka', 'nikki', 'niko', 'nja', 'nla', 'nna', 'nne', 'nnea', 'nnele', 'nni', 'no', 'nobu', 'noka', 'nomi', 'noora', 'nora', 'nore', 'nttu', 'ntu', 'nziska', 'ori', 'phine', 'ppi', 'ppu', 'ra', 'rako', 'rari', 're', 'rea', 'rena', 'ret', 'rgot', 'rgret', 'rgrit', 'rhi', 'ri', 'ria', 'rianne', 'rie', 'riia', 'riina', 'riitta', 'rika', 'riko', 'rin', 'rina', 'ris', 'rit', 'rita', 'ritta', 'rja', 'rjam', 'rjami', 'rjo', 'rka', 'rkka', 'rkko', 'rkku', 'rna', 'ro', 'roe', 'roko', 'romi', 'rona', 'rora', 'roshi', 'rpa', 'rpi', 'rpu', 'rsi', 'rsti', 'rta', 'rtha', 'rtta', 'rttu', 'ru', 'rui', 'ruka', 'ruyo', 'rva', 'rve', 'rvi', 'rvo', 'sa', 'sabet', 'sanna', 'she', 'shi', 'shike', 'shiko', 'shino', 'shun', 'si', 'sko', 'ssika', 'sta', 'ste', 'stel', 'su', 'suki', 'ta', 'tar', 'te', 'tel', 'tha', 'ti', 'tja', 'to', 'toko', 'tomi', 'tra', 'tri', 'trice', 'triina', 'trix', 'tsu', 'tsue', 'tsuka', 'tsuki', 'tsuko', 'tsumi', 'tsune', 'tsuyo', 'tta', 'tte', 'tti', 'tty', 'tu', 'tva', 'va', 'vi', 'via', 'viisa', 'ya', 'yo', 'ze', 'zomi', 'zu', 'zue', 'zuki', 'zuko', 'zume'];


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
