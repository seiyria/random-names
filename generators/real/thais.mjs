export default function thais() {
  let rnd;

  let rnd2;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aat', 'Aawut', 'Adirake', 'Akkanee', 'Akkarat', 'Alak', 'Amnuay', 'Anada', 'Ananada', 'Ananda', 'Annan', 'Anon', 'Anuia', 'Anuman', 'Anurak', 'Anuthat', 'Apichart', 'Aran', 'Aroon', 'Arthit', 'Ashwin', 'Asnee', 'Athiti', 'Atid', 'Badinton', 'Baharn', 'Bahn', 'Bandasak', 'Banjong', 'Banlop', 'Banlue', 'Bannarasee', 'Bannarot', 'Bannasorn', 'Banthorn', 'Banwithit', 'Banyat', 'Banyong', 'Bapit', 'Barinai', 'Barinot', 'Baritharn', 'Baroma', 'Baveethran', 'Bawornnon', 'Bawornthath', 'Bhakdi', 'Bhichai', 'Bhumipol', 'Bin', 'Bodesta', 'Boon-Mee', 'Boon-Nam', 'Boon-mee', 'Boon-nam', 'Boonchu', 'Boonma', 'Boonpipob', 'Boontung', 'Brosong', 'Buangam', 'Budin', 'Bunbongkarn', 'Bunkit', 'Bunyakorn', 'Bunyapoo', 'Buppakorn', 'Burapol', 'Burimas', 'Burin', 'Burit', 'Burut', 'Cha', 'Chai', 'Chai Son', 'Chairat', 'Chaisai', 'Chaiya', 'Chaiyanuchit', 'Chaiyo', 'Chakan', 'Chakrabandhu', 'Chakri', 'Chalerm', 'Chalermchai', 'Chaloem', 'Chalong', 'Changsai', 'Channarong', 'Chanthara', 'Chao Fah', 'Chao fah', 'Chao-Khun-Sa', 'Chao-Tak', 'Chao-khun-sa', 'Chao-tak', 'Chaovalit', 'Chaowas', 'Charn Chai', 'Charnchai', 'Charoen', 'Charoensom', 'Charong', 'Chatalerm', 'Chatchalerm', 'Chatchawee', 'Chatchom', 'Chatichai', 'Chatri', 'Chaturon', 'Chavalit', 'Chayan', 'Chayond', 'Cheewaket', 'Chennoi', 'Chermsak', 'Chesda', 'Chet', 'Chetta', 'Chinawoot', 'Chiradet', 'Chomanan', 'Chompoo', 'Chon', 'Chongrak', 'Choochai', 'Choonhavan', 'Choonhavon', 'Chuachai', 'Chuan', 'Chuanchen', 'Chuchai', 'Chuia', 'Chula', 'Chulalongkorn', 'Chulamai', 'Churai', 'Chuthamani', 'Daeng', 'Damrong', 'Danai', 'Danit', 'Danunan', 'Danusorn', 'Daran', 'Daranpob', 'Darin', 'Decha', 'Deng', 'Denpoom', 'Dentharonee', 'Dhipyamongkol', 'Dilok', 'Diloktham', 'Disakorn', 'Disnadda', 'Disorn', 'Ditaka', 'Dithakar', 'Ditt', 'Dok', 'Dok rak', 'Dolrit', 'Dolsook', 'Dorn', 'Duchanee', 'Emjaroen', 'Erawan', 'Fah', 'Fufanwonich', 'Gee', 'Hainad', 'Hanuman', 'Hiran', 'Intradit', 'Ittiporn', 'Jaidee', 'Jao', 'Jarunsuk', 'Jatukamramthep', 'Jaturun', 'Jayavarman', 'Jessupha', 'Jettrin', 'Jirasak', 'Jutharat', 'Kaan', 'Kaandit', 'Kacha', 'Kamalakorn', 'Kamalanan', 'Kamalat', 'Kamik', 'Kamnan', 'Kamolpob', 'Kamolpoo', 'Kamut', 'Kan', 'Kananat', 'Kanaporn', 'Kanasanan', 'Kanda', 'Kandad', 'Kanin', 'Kanisorn', 'Kankawee', 'Kanok', 'Kanokpol', 'Kantapol', 'Kantapong', 'Kantayot', 'Kantharat', 'Kanthee', 'Kanthorn', 'Kantinan', 'Kantitat', 'Kantsak', 'Kantsom', 'Kanut', 'Kapp', 'Karan', 'Karanyapat', 'Karin', 'Karit', 'Karmatha', 'Karn', 'Karom', 'Kasan', 'Kasem', 'Kasemchai', 'Kasemsan', 'Kasidid', 'Kasin', 'Kasom', 'Kate', 'Kathawut', 'Kavi', 'Kawee', 'Kawin', 'Kawinpob', 'Keerati', 'Keetau', 'Khakanang', 'Khanti', 'Khattiya', 'Khem', 'Khemanan', 'Khematat', 'Khematin', 'Khemin', 'Khemkhaeng', 'Khun', 'Khunpol', 'Khunsoek', 'Kiet', 'Kiettinonnapat', 'Kiettisuk', 'Kimhan', 'Kirakorn', 'Kit', 'Kitsakan', 'Kitsakorn', 'Kitt', 'Kitti', 'Kittibun', 'Kittichai', 'Kittichat', 'Kittikawin', 'Kittikchorn', 'Kittikorn', 'Kittinai', 'Kittinan', 'Kittipob', 'Kittipon', 'Kittipoom', 'Kittiporn', 'Kittipot', 'Kittisak', 'Kittitat', 'Kittithorn', 'Kittiwin', 'Kla', 'Kla Han', 'Klaew Kla', 'Klahan', 'Kob', 'Kob Chai', 'Kob Khun', 'Kob Sinn', 'Kob Sook', 'Kolatee', 'Komalat', 'Komn', 'Kongbej', 'Kongkidakorn', 'Kongpob', 'Kongsampong', 'Konthee', 'Konthorn', 'Koradol', 'Korakod', 'Koran', 'Korapoo', 'Korasut', 'Koratak', 'Korn', 'Kornballop', 'Kot', 'Kovit', 'Krairawee', 'Kraisee', 'Kraisingha', 'Kraiwin', 'Krarayoon', 'Kriang Krai', 'Kriang Sak', 'Kriangsak', 'Kriengsak', 'Kris', 'Krisik', 'Krit', 'Krita', 'Kritsada', 'Krittameth', 'Krittanoo', 'Krittapat', 'Krittapot', 'Krittayot', 'Krittin', 'Krittinai', 'Krittithee', 'Krom-Luang', 'Krom-luang', 'Kukrit', 'Kulit', 'Kulpat', 'Kulthorn', 'Kunach', 'Kunanan', 'Kunn', 'Kunnthorn', 'Kusa', 'Kusum', 'Kutsa', 'Kwanchai', 'Kwanjai', 'Lamom', 'Lamon', 'Lap', 'Leekpai', 'Leekpie', 'Lek', 'Loesan', 'Luk', 'Maha', 'Mahidol', 'Malian', 'Maliwan', 'Manee', 'Manitho', 'Mee', 'Mee Noi', 'Mengrai', 'Metananda', 'Mok', 'Mokkhavesa', 'Molthisok', 'Mongkut', 'Monyakul', 'Muoi', 'Nadee', 'Nai-Thim', 'Nai-thim', 'Nak', 'Nakaret', 'Nakarin', 'Nang-Klao', 'Nang-klao', 'Nanthapob', 'Nanthayot', 'Nanthit', 'Nantin', 'Nantipat', 'Nantiworn', 'Napan', 'Napat', 'Napatthorn', 'Napon', 'Narai', 'Naresuan', 'Naris', 'Narisa', 'Narong', 'Narongrit', 'Narongwit', 'Naruerong', 'Naruesorn', 'Nat', 'Natee', 'Nathawat', 'Nattadanai', 'Nattakamol', 'Nattakan', 'Nattanai', 'Nattanan', 'Nattanon', 'Nattapat', 'Nattapon', 'Nattaron', 'Nattasit', 'Nattasom', 'Nattasut', 'Nattawat', 'Nattaworn', 'Nattayot', 'Natthapong', 'Natthawut', 'Nawanthorn', 'Nawat', 'Nawatkorn', 'Nawin', 'Nekk', 'Net', 'Netithorn', 'Netiwit', 'Ngam', 'Ngoen', 'Nibun', 'Nikom', 'Nikon', 'Nimman', 'Nimmit', 'Nintau', 'Nipaat', 'Nipat', 'Niphon', 'Nipit', 'Nipitpon', 'Nipon', 'Nipun', 'Niran', 'Nirawit', 'Nirin', 'Nirund', 'Nissorn', 'Nit', 'Nithan', 'Nithikorn', 'Nithit', 'Nithoon', 'Nitithorn', 'Nitthan', 'Nitthon', 'Niwat', 'Niwit', 'Niyom', 'Nodthakorn', 'Noi', 'Non', 'Nongchai', 'Nongkhai', 'Nonpawit', 'Nontapan', 'Nontawat', 'Nontiyut', 'Nopjira', 'Noppadon', 'Noppadorn', 'Noppakorn', 'Noppasin', 'Noppathee', 'Noppawin', 'Norachai', 'Norrapan', 'Norrapon', 'Norrathee', 'Norrawee', 'Norraworn', 'Nuananong', 'Nuengnimman', 'Nugoon', 'Nui', 'Nung', 'Nuta-Laya', 'Nuta-laya', 'Obb', 'Olan', 'Osathee', 'Othong', 'Paan', 'Paanthath', 'Pairat', 'Pairote', 'Paitoon', 'Pakhdi', 'Palat', 'Pamut', 'Pan', 'Panas', 'Panat', 'Panithi', 'Pann', 'Pannathath', 'Pannathorn', 'Pannawat', 'Panthorn', 'Panyarachun', 'Papangkorn', 'Paparn', 'Papawin', 'Papob', 'Papon', 'Paponsan', 'Paponthanai', 'Paponthee', 'Paradorn', 'Parama', 'Paraman', 'Paramat', 'Paramendr', 'Paranat', 'Parat', 'Parin', 'Parit', 'Parnchand', 'Paron', 'Parun', 'Pasan', 'Pasat', 'Pasut', 'Pathanin', 'Pathapee', 'Pathit', 'Patipon', 'Patt', 'Pattama', 'Pawaret', 'Pawarit', 'Pawaritsorn', 'Pawarut', 'Pawat', 'Paween', 'Pawin', 'Pawit', 'Pawornruj', 'Payut', 'Pet', 'Petch', 'Petchara', 'Petchra', 'Phaibun', 'Phaithoon', 'Phanumas', 'Phara', 'Phassakorn', 'Phatra', 'Phatson', 'Phet', 'Phichai', 'Phichit', 'Phinihan', 'Phisan', 'Phongsak', 'Phraisong', 'Phrom-Borirak', 'Phrom-borirak', 'Phueng', 'Phuri', 'Phya', 'Pichai', 'Pichit', 'Pidok', 'Pira', 'Piya', 'Piyabutr', 'Piyapat', 'Piyapon', 'Piyatat', 'Piyawat', 'Ponggool', 'Pongkun', 'Pongpanet', 'Pongpob', 'Pongrit', 'Pongsom', 'Pongtham', 'Pra', 'Pracha', 'Prachuab', 'Prakit', 'Prakorb', 'Pralop', 'Praman', 'Pramanat', 'Pramod', 'Pramoj', 'Pramon', 'Pran', 'Pranai', 'Pranon', 'Pranop', 'Prapaan', 'Prapan', 'Prapawit', 'Prasong', 'Prasopchai', 'Pravat', 'Praves', 'Prawanwit', 'Prawee', 'Praween', 'Praya', 'Prayut', 'Preet', 'Prem', 'Pricha', 'Prid', 'Prisna', 'Pritsadee', 'Pritsanee', 'Proi', 'Pu', 'Pu Yai Bahn', 'Puenthai', 'Puran', 'Puttipat', 'Rachotai', 'Raegan', 'Rajanon', 'Rak', 'Rama', 'Ramkamhaeng', 'Rand', 'Rangsan', 'Rangsiman', 'Ratanankorn', 'Ratri', 'Ratsami', 'Rawee', 'Ritthirong', 'Rom Ran', 'Ronnapee', 'Ruang Rit', 'Ruang Sak', 'Runrot', 'Sajja', 'Sakchai', 'Sakda', 'Sampan', 'Samyan', 'San\'ya', 'Sanan', 'Sanouk', 'Santichai', 'Sanun', 'Sap', 'Saranyu', 'Sarathoon', 'Sarawong', 'Sarawut', 'Sarit', 'Sarut', 'Sataheep', 'Satayu', 'Satra', 'Satrud', 'Savit', 'Sawai', 'Sawat', 'Seni', 'Seri', 'Si', 'Siam', 'Siddhi', 'Sin', 'Singnum', 'Sinn', 'Snoh', 'Som', 'Som Phon', 'Som Phong', 'Sombat', 'Somchai', 'Somchair', 'Somchith', 'Somdej', 'Somdet-Ong-Yai', 'Somdet-ong-yai', 'Somdetch', 'Sompron', 'Somsak', 'Somwang', 'Son', 'Son Chai', 'Sonchai', 'Songgram', 'Songpob', 'Songpole', 'Songwut', 'Soo', 'Sook', 'Sophuk', 'Sri', 'Srimuang', 'Staporn', 'Su', 'Su Suk', 'Suchin', 'Sud', 'Sud Saming', 'Suda', 'Sudarak', 'Suk', 'Sulak', 'Sum', 'Sumatra', 'Sunan', 'Sundaravej', 'Suntarankul', 'Sunti', 'Sunya', 'Sup', 'Suphatra', 'Suphayok', 'Supoj', 'Supp', 'Supsampantuwongse', 'Sura', 'Surasak', 'Surat', 'Surin', 'Suriwongse', 'Suriyawong', 'Sutep', 'Suthep', 'Suttipong', 'Taan', 'Tadpol', 'Tadpong', 'Tadsuang', 'Tadthep', 'Tadthon', 'Taeng', 'Tai', 'Tak', 'Tak-Sin', 'Tak-sin', 'Takdanai', 'Taksin', 'Tam', 'Tamnurath', 'Tanakrit', 'Tangpanitharn', 'Tanit', 'Tanupat', 'Tanusorn', 'Tanutam', 'Tapp', 'Tappasan', 'Taran', 'Tarrin', 'Tassapon', 'Tau', 'Taweepak', 'Taweerat', 'Tayakorn', 'Tayut', 'Teepakorn', 'Teepth', 'Teera', 'Tep', 'Teptath', 'Thahan', 'Thaklaew', 'Thaksin', 'Tham-Boon', 'Tham-boon', 'Thammanit', 'Thammaraja', 'Thammasorn', 'Thampapon', 'Thampon', 'Thamwat', 'Thanaboon', 'Thanadol', 'Thanadun', 'Thanalop', 'Thanandorn', 'Thananop', 'Thanapon', 'Thanapoom', 'Thanarat', 'Thanat', 'Thanatat', 'Thanawan', 'Thanawat', 'Thanawin', 'Thanayut', 'Thanee', 'Thanetpol', 'Thanid', 'Thanik', 'Thanin', 'Thanit', 'Thanom', 'Thanut', 'Thanwa', 'Thanya', 'Thapthim', 'Tharathep', 'Tharathorn', 'Tharit', 'Tharn', 'Thath', 'Thawan', 'Thawanya', 'Thawi', 'Thawin', 'Thawit', 'Thayot', 'Theema', 'Theepob', 'Theera', 'Theeradon', 'Theerameth', 'Theeranai', 'Theeranop', 'Theerapat', 'Theerapatpong', 'Theerat', 'Theeratham', 'Theeratorn', 'Theerit', 'Theerut', 'Theesud', 'Theethath', 'Thinnakorn', 'Thipok', 'Thira', 'Thirakun', 'Thiramon', 'Thiranai', 'Thiraput', 'Thirdpong', 'Thith', 'Thiti', 'Thitipan', 'Thitisan', 'Thitisorn', 'Thitiwat', 'Thitiwut', 'Thong Daeng', 'Thong Di', 'Thong Kon', 'Thong Thaeng', 'Thongchai', 'Thongkon', 'Thoranan', 'Thorm', 'Thorn', 'Thornthep', 'Thuanthong', 'Thurdchai', 'Thuwanan', 'Ti', 'Ti Nung Cha', 'Tikatath', 'Tiloka', 'Ting', 'Tinn', 'Tinnakiet', 'Tinnakit', 'Tinnakorn', 'Tinnapat', 'Tinnapob', 'Tinsulaananda', 'Tinsulanonda', 'Tiron', 'Tisorn', 'Tiwat', 'Ton', 'Tong', 'Tongkanlong', 'Tonnakorn', 'Tosanakorn', 'Totsakan', 'Toy', 'Trai', 'Traikun', 'Traipob', 'Traipoom', 'Traitod', 'Trat', 'Trin', 'Trinai', 'Trintawat', 'Tuksin', 'Tulathorn', 'Ubol', 'Udom', 'Unakan', 'Uthai', 'Vajiralongkorn', 'Vajiravudh', 'Varunvirya', 'Vessandan', 'Vichit', 'Vidura', 'Virote', 'Vit', 'Vitaya', 'Vitchu', 'Vithoon', 'Vuthisit', 'Warun', 'Wasan', 'Wasi', 'Watchara', 'Wattana', 'Wayupak', 'Weera', 'Winai', 'Wiset', 'Witsanunat', 'Wittaya', 'Witthawat', 'Witthaya', 'Wongsa', 'Worrawut', 'Xuwicha', 'Yai', 'Yhukon', 'Yindee', 'Yod', 'Yod Rak', 'Yod rak', 'Yongchaiyudh', 'Yongchaiyuth', 'Yongyuth', 'Yubamrung', 'Yuthakon'];
  const nm2 = ['Abhasra', 'Achara', 'Adung', 'Ampawn', 'Amphorn', 'Amporn', 'Anchali', 'Anna', 'Anon', 'Apsara', 'Apsorn', 'Areva', 'Arinya', 'Arom', 'Atchara', 'Ausanat', 'Baenglum', 'Ban', 'Banjit', 'Bannarasee', 'Benjakalyani', 'Boon-Nam', 'Boon-mee', 'Boon-nam', 'Budsaba', 'Bundarik', 'Busaba', 'Busaya', 'But', 'Butri', 'Cantana', 'Catchada', 'Chaiama', 'Chalermwan', 'Chamnian', 'Chanachai', 'Chandra', 'Chanhira', 'Chantana', 'Chantara', 'Chanthara', 'Chantira', 'Chao-fa', 'Charanya', 'Chariya', 'Charoen', 'Charoenrasamee', 'Charunee', 'Chatmanee', 'Chatrsuda', 'Chatumas', 'Chaveevan', 'Chawiwan', 'Chintana', 'Chirawan', 'Choi', 'Chomechai', 'Chomesri', 'Chomkwan', 'Chompoo', 'Chompunut', 'Chomsiri', 'Chon', 'Chonnanee', 'Chonthicha', 'Chuachan', 'Chuasiri', 'Chulabhorn', 'Chulaborn', 'Chumbot', 'Churai', 'Cintna', 'Daeng', 'Damni', 'Dao', 'Darika', 'Darin', 'Dauenphen', 'Daw', 'Dhipyamongko', 'Dok mai', 'Dok', 'Dok-Rak', 'Dok-ban-yen', 'Dok-phi-sua', 'Dok-rak', 'Duan', 'Duang-Prapha', 'Duang-prapha', 'Duangnet', 'Duangrat', 'Durudee', 'Hansa', 'Hathai', 'Hiran', 'Hpr', 'Inthurat', 'Intira', 'Isaree', 'J�ew', 'Jaidee', 'Jintana', 'Jirattikarn', 'Jittramas', 'Jongchit', 'Jutharat', 'Kaeo', 'Kalaya', 'Kalya', 'Kamala', 'Kamchana', 'Kamonrat', 'Kanchana', 'Kanita', 'Kannika', 'Kanok', 'Kantima', 'Kanya', 'Karawek', 'Karn', 'Karnchana', 'Kasika', 'Keerati', 'Khae', 'Khakkhanang', 'Khantharot', 'Khem', 'Khiew Wan', 'Khouane', 'Khun Mae', 'Khun mae', 'Khun', 'Khunying', 'Kimnai', 'Kimuk', 'Klip', 'Kohsoom', 'Korrakoj', 'Kosum', 'Krijak', 'Krittiga', 'Kulap', 'Kultilda', 'Kusuman', 'Kwaanfah', 'Kwang', 'Kwanjai', 'Lalana', 'Lamai', 'Lamom', 'Lao', 'Lawan', 'Lek', 'Lukden', 'Ma-dee', 'Madee', 'Mae Noi', 'Mae', 'Mae-Duna', 'Mae-Khao', 'Mae-Noi', 'Mae-Pia', 'Mae-Ying-Thahan', 'Mae-duna', 'Mae-khao', 'Mae-noi', 'Mae-pia', 'Mae-ying-thahan', 'Mai', 'Maladee', 'Malee', 'Mali', 'Malisa', 'Malivalaya', 'Maliwan', 'Manee', 'Mani', 'Maniwan', 'Manya-Phathon', 'Manya-phathon', 'Maprang', 'Mathawee', 'Mayura', 'Mayuree', 'Mekhala', 'Mekhalaa', 'Mekhla', 'Monthani', 'Muan Nang', 'Mukda', 'Napatsorn', 'Napha', 'Narissa', 'Naruemon', 'Nataya', 'Natee', 'Nattaporn', 'Neeramphorn', 'Neung', 'Neungluthai', 'Ngam', 'Ngam-Chit', 'Ngor', 'Nidnoi', 'Nim', 'Nimnuan', 'Nin', 'Nisa', 'Nisarra', 'Nissa', 'Nittaya', 'Noi', 'Noklek', 'Nom', 'Nong Yao', 'Noom', 'Nopjira', 'Nuanjan', 'Nuntida', 'On Choi', 'On', 'Orapan', 'Orarat', 'Ornanong', 'Pada', 'Padungsri', 'Pakpao', 'Papao', 'Pasuta', 'Patcharee', 'Pathma', 'Patsaporn', 'Pen-Chan', 'Pensri', 'Pensria', 'Petchra', 'Phaibun', 'Phailin', 'Phairoh', 'Phajee', 'Phak-Phimonphan', 'Phak-phimonphan', 'Phan', 'Phannee', 'Phanthittra', 'Phara', 'Phatchara', 'Phathu', 'Phatra', 'Phawta', 'Phayao', 'Phi', 'Phim', 'Phitchaya', 'Phitsama�', 'Phitsamai', 'Phloi', 'Phueng', 'Piam', 'Piano', 'Pichitra', 'Pim', 'Pimchan', 'Pitsamai', 'Piyapat', 'Porntip', 'Pradtana', 'Praewphan', 'Prahong', 'Praitun', 'Pranee', 'Prang', 'Praphat', 'Preet', 'Preeya', 'Premwadee', 'Prevanutch', 'Prija', 'Prisana', 'Promporn', 'Pummie', 'Pundit', 'Punngarm', 'Putsaya', 'Rachanee', 'Rada', 'Raegan', 'Rajini', 'Rampha', 'Ramphoei', 'Rand', 'Ratana', 'Ratanaporn', 'Ratchanichon', 'Ratri', 'Rattana', 'Rawee', 'Rochana', 'Ruethai', 'Rung', 'Rutana', 'Saeng', 'Saengdao', 'Sairung', 'Samorn', 'Sanan Nam', 'Sangrawee', 'Sangwan', 'Sanoh', 'Sanouk', 'Saowakhon', 'Saowapa', 'Saowatharn', 'Sarai', 'Sarakit', 'Saruta', 'Sasi', 'Sasikarn', 'Savitree', 'Sawat', 'Sawatdi', 'Sawinee', 'Shalisa', 'Si Fah', 'Si Mok', 'Si', 'Siam', 'Simla', 'Sinee', 'Sinn', 'Sirikit', 'Sirindhorn', 'Sirirat', 'Solada', 'Som Chai', 'Som Kid', 'Som Wang', 'Som', 'Somawadi', 'Son-Klin', 'Son-klin', 'Songsuda', 'Sopa', 'Sri-Patana', 'Sri-patana', 'Srinak', 'Srisuriyothai', 'Sroy', 'Sua', 'Suchada', 'Suchin', 'Suchitra', 'Suda', 'Sugunya', 'Sujin', 'Sujitra', 'Sukanda', 'Sukhon', 'Sukonta', 'Suleeport', 'Sumalee', 'Sumana', 'Sumniang', 'Sunanda', 'Sunatda', 'Sunee', 'Sunetra', 'Sunisa', 'Sunstra', 'Sup', 'Supaporn', 'Supharang', 'Suree', 'Sureeporn', 'Suttida', 'Suwattanee', 'Taeng', 'Talap', 'Tamarine', 'Tasanee', 'Teerana', 'Thailah', 'Thaksincha', 'Thao-Ap', 'Thao-ap', 'Thara', 'Theetika', 'Thiang', 'Thikhamphorn', 'Thong Dam', 'Thong Khao', 'Thong Thaem', 'Thong Thao', 'Thong', 'Thongyip', 'Thunyarat', 'Tida', 'Tidarat', 'Tookta', 'Toptim', 'Totsaken', 'Touraine', 'Tppiwan', 'Tuani', 'Tui', 'Tuk', 'Tukata', 'Tulaya', 'Tum', 'Tunlaya', 'Tuptim', 'Ubol', 'Ubolratana', 'Udom', 'Um', 'Ung', 'Urairat', 'Uthai', 'Utumporn', 'Vanida', 'Vipada', 'Waan', 'Waen', 'Wan', 'Wani-Ratana-Kanya', 'Wansa', 'Waralee', 'Wasana', 'Wayo', 'Wila', 'Wilasinee', 'Wimon', 'Winai', 'Wipa', 'Wismita', 'Wonnapa', 'Xuwicha', 'Ya Chai', 'Yada', 'Yaowalak', 'Yaowaman', 'Yen', 'Yindee', 'Ying', 'Yodman', 'Yodmani', 'Yong-Yut', 'Yrita', 'Yu-Pha', 'Yu-Phin', 'Yupin'];
  const nm3 = ['Aduladej', 'Adulet', 'Ahunai', 'Akradej', 'Amornchantanakorn', 'Anand', 'Apichart', 'Ariyanuntaka', 'Aromdee', 'Atchariyaboonyong', 'Atitarn', 'Banruerit', 'Benjawan', 'Bhirombhakdi', 'Boonliang', 'Boonmee', 'Boripat', 'Bunnag', 'Bunyasarn', 'Chadee', 'Chai\'at', 'Chaipatana', 'Chaipoowapat', 'Chaiprasit', 'Chaisurivirat', 'Chaiyachue', 'Chaiyasan', 'Chaiyawan', 'Chakrabonse', 'Chalerm', 'Chalor', 'Chamlong', 'Chamroon', 'Chan\'ocha', 'Chanpakdee', 'Chansiri', 'Chao', 'Charanachitta', 'Charoenkul', 'Chatichai', 'Chatwilai', 'Chavalit', 'Chearavanont', 'Cheenchamras', 'Chirapaisarnsakul', 'Chirathivat', 'Chiwpreecha', 'Choosak', 'Chuan', 'Chuasiriporn', 'Chumphorn', 'Chuthathep', 'Chutimant', 'Dabaransi', 'Dahkling', 'Dajpaisarn', 'Damrongsak', 'Darawan', 'Diskul', 'Ekaluck', 'Gason', 'Hitapot', 'Ho\'thai', 'Honghannarong', 'Iemtadanai', 'Inchaieur', 'Inchareon', 'Jainukul', 'Janpong', 'Jatusripitak', 'Jetatikarn', 'Jetjirawat', 'Jivacate', 'Juntasa', 'Jurangkool', 'Kachornsak', 'Kadesadayurat', 'Kaewburesai', 'Kaewmanee', 'Kammana', 'Kamwilaisak', 'Kanjanapas', 'Kantawong', 'Kaouthai', 'Kasamsun', 'Kasemsarn', 'Kattiya', 'Kawrungruang', 'Keacham', 'Kedmanee', 'Khadpo', 'Khemanich', 'Khumpai', 'Khuntilanont', 'Kitjakarn', 'Klinpraneet', 'Kongkatitum', 'Kongpaisarn', 'Kongsangchai', 'Kosaisook', 'Kraiputra', 'Kriangsak', 'Kukrit', 'Kulawanit', 'Kunakorn', 'Kunchai', 'Kurusarttra', 'Kurusatienkit', 'Kwaigno', 'Lam', 'Lamwilai', 'Larpthawornkiet', 'Leekpai', 'Leelapun', 'Leeyao', 'Lekcharuthas', 'Lertkunakorn', 'Limthongkul', 'Luang', 'Lui', 'Mahagitsiri', 'Mahidol', 'Maleenon', 'Maleenont', 'Maneerattana', 'Meesang', 'Monkoltham', 'Montri', 'Mookjai', 'Nakpradith', 'Nantakarn', 'Narkbunnum', 'Narkhirunkanok', 'Narongdid', 'Nimitwanitch', 'Niratpattanasai', 'Nitaya', 'Nitpattanasai', 'Noppachorn', 'Nut', 'Ornlamai', 'Ornwimol', 'Pachrapa', 'Paireerak', 'Paithoonbuathong', 'Palapol', 'Palathai', 'Panichwit', 'Panomyaong', 'Panyarachun', 'Paowsong', 'Parnpradub', 'Parnthep', 'Parnthong', 'Patalung', 'Phatipatanawong', 'Phornprapha', 'Phrompan', 'Phya', 'Pibul', 'Pichit', 'Pimolkittikool', 'Pinthong', 'Pisit-na', 'Plai\'nukool', 'Plainukool', 'Plaphol', 'Pongchandaj', 'Pongsak', 'Pongsanam', 'Ponhpaiboon', 'Pookusuwan', 'Poolvaraluck', 'Poonlarp', 'Pornpipatpong', 'Prachuab', 'Pradchaphet', 'Pramoj', 'Prapanpoj', 'Prapass', 'Praphasirirat', 'Prasarttong', 'Prasongsanti', 'Prateung', 'Praves', 'Preecha', 'Prem', 'Prempree', 'Pridi', 'Prinya', 'Prugsanapan', 'Puarborn', 'Pumpihon', 'Puntasrima', 'Punyawong', 'Pureesrisak', 'Putrie', 'Rardchawat', 'Ratana', 'Ratanarak', 'Rattanakosin', 'Rattanapong', 'Rojjanasukchai', 'Rojumanong', 'Saenamuang', 'Sakda', 'Sakdathorn', 'Samak', 'Samenem', 'Sangsorn', 'Sangwit', 'Sansurin', 'Santisakul', 'Sanya', 'Saowaluk', 'Sarit', 'Sasiprapa', 'Sathianthai', 'Sawasdipon', 'Sepsook', 'Shiew\'aram', 'Shimma', 'Shinawatra', 'Silpa-archa', 'Sindudeja', 'Singhapat', 'Singharattanapan', 'Sintawichai', 'Sinthudecha', 'Sirishumsaeng', 'Sirisopa', 'Siriwanich', 'Sitdhirasdr', 'Sivaraksa', 'Somwan', 'Songprawati', 'Souvanatong', 'Srichure', 'Sripituksakul', 'Sriroj', 'Srisai', 'Srisati', 'Sriwarunyu', 'Suchinda', 'Sudham', 'Sukbunsung', 'Suksabaijai', 'Sunthorn', 'Suntornnitikul', 'Supachai', 'Suparat', 'Supasawat', 'Supitayaporn', 'Suppamongkon', 'Suprija', 'Suramongkol', 'Sutabuhr', 'Sutasanachinda', 'Suttikul', 'Suttirat', 'Taksin', 'Tanasugarn', 'Tangwongsan', 'Tansoongnen', 'Tantasatityanon', 'Tawisuwan', 'Temirak', 'Terdsak', 'Thabchumpon', 'Thaibangouy', 'Thanasukolwit', 'Thanom', 'Thanwareth', 'Thaugsuban', 'Thawan', 'Thong-oon', 'Thongthang', 'Thumying', 'Tomson', 'Tongproh', 'Traivut', 'Trivisvavet', 'Tuntayakul', 'Udomprecha', 'Vanich', 'Veerapol', 'Vejjajiva', 'Vijitpongpun', 'Vilailuck', 'Vipavakit', 'Visalyaputra', 'Wattana', 'Wattanapanit', 'Wattanasin', 'Wechsupaporn', 'Wi\'lepana', 'Wichasak', 'Willapana', 'Wisetkaew', 'Wongkrachang', 'Wongrutiyan', 'Wongsawat', 'Wongsuwon', 'Yao-Yun', 'Yodsuwan', 'Yongchaiyudh', 'Yongjaiyut', 'Yoobamroong', 'Yoonim', 'Yoovidhya', 'Yuvaves'];


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
