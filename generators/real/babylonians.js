export default function babylonians() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abdi-ili', 'Abi-Rattas', 'Abi-eshuh', 'Abi-maras', 'Abieshu', 'Abil-ili', 'Abil-ilishu', 'Abil-ishtar', 'Abil-kubi', 'Abilkisu', 'Abilsin', 'Abisare', 'Abu-waqar', 'Abum', 'Adad-apla-iddina', 'Adad-shuma-iddina', 'Adad-shuma-usur', 'Adadanu', 'Adapa', 'Adar-malik', 'Adini', 'Adiur', 'Adrahasis', 'Agrotes', 'Agukakrimi', 'Agum', 'Agum', 'Agum-Kakrime', 'Aguragas', 'Ahi-kilim', 'Ahimelek', 'Ahiyababa', 'Ahuni', 'Ahushina', 'Akki', 'Akurduana', 'Alala', 'Alam', 'Alaparos', 'Allamu', 'Almelon', 'Aloros', 'Alorus', 'Amarsin', 'Amatnim', 'Amelagar', 'Amempsin', 'Amilanu', 'Ammenon', 'Ammi-ditana', 'Ammi-saduqa', 'Ammi-zaduga', 'Ammidikaga', 'Ammisaduqa', 'Amukkan', 'Amurum', 'Ana-sin-emid', 'Annunnaki', 'Anos', 'Anshar', 'Anti\'iikusu', 'Anu', 'Anu-malik', 'Anunnaki', 'Aos', 'Apason', 'Apil-Sin', 'Aplaa', 'Appan-Il', 'Apsu', 'Apuulluunideeszu', 'Ar\'siuqqa', 'Arakhu', 'Aralu', 'Ardates', 'Ardi-ea', 'Ardorach', 'Ardusin', 'Ariistuun', 'Arishaka', 'Arshaka', 'Arua', 'Asardin', 'Assoros', 'Ataneedusu', 'Athtor dhu kabdh', 'Athtor dhu yahrak', 'Attii\'kusu', 'Avil kush', 'Awil-ili', 'Awil-ishtar', 'Awil-nabium', 'Awil-nannar', 'Ayadaragalama', 'Azag-nannar', 'Baal', 'Baassiia', 'Baba-aha-iddina', 'Balashi', 'Balasi', 'Balasu', 'Balathu', 'Bashaa', 'Bel', 'Bel-samu', 'Bel-sarra-uzur', 'Bel-shar-uzzur', 'Bel-sum-iscun', 'Belbalidina', 'Belesis', 'Belibni', 'Bellabarisruk', 'Belsamilicapi', 'Belteshazzar', 'Belzarbi', 'Berosus', 'Boktnassar', 'Bulludhu', 'Bunene', 'Burnaburiash', 'Burnaburyas', 'Buvalu', 'Buzur-sa-di-rabi', 'Cagagilgati', 'Chinzirus', 'Chosmasbelus', 'Cit', 'Dadanum', 'Dagan', 'Dakhe & dakhos', 'Dakuri', 'Damqi-ilishu', 'Daon', 'Dapinu', 'Dee\'qiteesu', 'Deemeethresu', 'Deemethereesu', 'Deemethresi', 'Deemethresu', 'Deemuukratee', 'Demeetheresu', 'Demetheriia', 'Dibbarra', 'Dii\'duuresu', 'Diimeritia', 'Diipaa\'ni', 'Diipanii', 'Diipatusu', 'Dipatusu', 'Dipti', 'Dir', 'Dudu', 'Dungi', 'Dunnusaidu', 'Dur-i-galzu', 'Duzi', 'Ea', 'Ea-gamil', 'Ea-mukin-zeri', 'Ea-nasir', 'Ekurzakir', 'Emisum', 'Enlil-nadin-ahi', 'Enlil-nadin-apli', 'Enlil-nadin-shumi', 'Enmeduranki', 'Enshunu', 'Enusat', 'Eriba-Marduk', 'Etana', 'Eulmash-shakin-shumi', 'Evil-merodach', 'Gadatas', 'Gaga', 'Gahal', 'Gal', 'Gallamta-uddua', 'Gamil-ninip', 'Gamil-sin', 'Gandas', 'Gandu', 'Gibil', 'Gilgamesh', 'Gina', 'Gobryas', 'Gudea', 'Gulkishar', 'Gungunnu', 'Gungunum', 'Haban', 'Haldita', 'Hammurabi', 'Harbishihu', 'Hasis-adra', 'Hassimir', 'Hea-mukin-zira', 'Heabani', 'Hillalum', 'Hunzuu', 'Iaazipaa', 'Ibbi-Adad', 'Ibilsin', 'Idadu', 'Igigi', 'Ikuppi-Adad', 'Ilgi', 'Illinos', 'Ilu', 'Ilu-kassat', 'Ilum-ma-ili', 'Immertum', 'Ipqu-Annunitum', 'Ipqu-Aya', 'Ira', 'Irib-bin', 'Iriba-maruduk', 'Irigibel', 'Irshusin', 'Isbi-bar-ra', 'Ishkibal', 'Ishme-Ea', 'Ishum', 'Isiratuu', 'Ismi-dagan', 'Issaruutunu', 'Istar-su-mes-ses', 'Itti-Marduk-balatu', 'Itti-bel', 'Itti-ili-nibi', 'Iva', 'Izdubar', 'Kadashman', 'Kadashman-Enlil', 'Kadashman-Harbe', 'Kadashman-Turgu', 'Kadashman-harbe', 'Kandalanu', 'Kara-bel', 'Kara-hardas', 'Kara-hardash', 'Kara-indas', 'Karaindash', 'Kashshu-nadin-ahi', 'Kashtiliash', 'Kashtiliashu', 'Kassu-nadin-ahu', 'Kastiliasu', 'Kha-hea', 'Khamourabi', 'Khanni-cit', 'Kiipluu\'', 'Kiipluuu\'', 'Kin�ladan', 'Kinaa', 'Kinel�danos', 'Kineladanus', 'Kingu', 'Kinziru', 'Kir-shamash', 'Kissare', 'Kudur-Enlil', 'Kuri', 'Kuribattaraya', 'Kurigalzu', 'Labashi', 'Laborosoarchod', 'Labynetus', 'Lakhmu', 'Laliya', 'Laqip', 'Libit-nana', 'Libluth', 'Lidan-gula', 'Lidunnamu', 'Ligish', 'Lik-ba-gas', 'Lugal-marada', 'Makru', 'Manishtushu', 'Manishtusu', 'Mannuiqapi', 'Mannuiqapu', 'Manuiqapu', 'Mar-biti-ahhe-iddina', 'Mar-biti-apla-usur', 'Mar-sippar', 'Marduk', 'Marduk-ahhe-eriba', 'Marduk-apla-iddina', 'Marduk-apla-usur', 'Marduk-balassu-iqbi', 'Marduk-bel-zeri', 'Marduk-kabit-ahheshu', 'Marduk-nadin-ahhe', 'Marduk-shapik-zeri', 'Marduk-zakir-shumi', 'Marduk-zer', 'Maruduk-bal-idinna', 'Maruduk-balad-su-iqbi', 'Maruduk-bel-usate', 'Maruduk-bel-uzur', 'Maruduk-mu-damik', 'Maruduk-nadin-ahi', 'Maruduk-sadua', 'Maruduk-salim-anni', 'Maruduk-sapik-zirrat', 'Maruduk-zikur-izkur', 'Melamkurkurra', 'Meli-Shipak', 'Merodach', 'Merodach-bal-uzur', 'Merodach-baladan', 'Merodak-mu-basa', 'Mesisimardoch', 'Mili-sihu', 'Milik-harbat', 'Misa-nana-kal-ammi', 'Moumis', 'Mu-sal-lim-maruduk', 'Mulagunnuna', 'Muranu', 'Murdus', 'Nabo-bal-atir-rib', 'Nabonahid', 'Nabonassar', 'Nabonidus', 'Nabopalassar', 'Nabu', 'Nabu-apla-iddina', 'Nabu-bal-idinna', 'Nabu-bel-shum', 'Nabu-bel-uzur', 'Nabu-dim-tir', 'Nabu-ekhi-erba', 'Nabu-ikbi', 'Nabu-kudu-zur', 'Nabu-kudur-uzur', 'Nabu-kudur-yut-sur', 'Nabu-kudurri-usur', 'Nabu-kudurri-uzur', 'Nabu-kullani', 'Nabu-mu-set-si', 'Nabu-mukin-apli', 'Nabu-nazir', 'Nabu-salim', 'Nabu-sha-pik-zir', 'Nabu-shum-libur', 'Nabu-shuma-ishkun', 'Nabu-shuma-ukin', 'Nabu-u-sabsi', 'Nabu-zar-adan', 'Nabu-zikir-iskun', 'Nabu-zir-napis-ti-esir', 'Nabua', 'Nabuchodrosser', 'Naditabirus', 'Nahid-maruduk', 'Namtar', 'Nannar', 'Naplanum', 'Naram-Sin', 'Naram-sin', 'Naramsin', 'Nazaratus', 'Nazi-Bugash', 'Nazi-Maruttash', 'Nazi-bugas', 'Nazi-rudas', 'Nebo', 'Nebo-pal-assar', 'Nebo-zucipunu', 'Nebuchadnezzar', 'Nebuchadrezzar', 'Nergal', 'Nergal-edir', 'Nergal-sar-ussur', 'Neriglissar', 'Nidintu-Bel', 'Nidintulugal', 'Nigsummu', 'Nigsummulugal', 'Nigsummunu', 'Niiqarquusu', 'Niiqiarqusu', 'Niiqquulamuusu', 'Nikanuur', 'Nikiiarqusu', 'Nin-gal-idina', 'Nin-girsu', 'Nin-ridu', 'Ninib', 'Ninip', 'Ninurta-apla', 'Ninurta-kudurri-usur', 'Ninurta-nadin-shumi', 'Nis-belu', 'Numunia', 'Nur-Adad', 'Nur-Ayya', 'Nurval', 'Nusku', 'Nutesh', 'Orchamus', 'Otiartes', 'Pahas-bel', 'Peshgaldaramesh', 'Putur-sin', 'Puzur-Ishtar', 'Rabi-Sillashu', 'Ramman', 'Ri-is-vul', 'Rihat', 'Rim-Sin', 'Rim-agu', 'Rimsin', 'Rimush', 'Ripaa', 'Sabium', 'Sabum', 'Sadudu', 'Saga-saltiyas', 'Samas-ibni', 'Samas-sum-ukin', 'Samium', 'Samoulsamouken', 'Samsi-luna', 'Samsu-Ditana', 'Samsu-iluna', 'Samsuiluna', 'Saosduchinus', 'Sar', 'Sar-ili', 'Sar-tuda', 'Sardanapalus', 'Sargina', 'Sargon', 'Sarkimuna', 'Seluku', 'Shagarakti-Shuriash', 'Shagaraktiyash', 'Shamas', 'Shamash', 'Shamash-Andulli', 'Shamash-Nasir', 'Shamash-bel', 'Shamash-mudammiq', 'Shar-kali-sharri', 'Sharyukin', 'Shemesh', 'Shirikti-shuqamuna', 'Shu-Turul', 'Shukura', 'Shushushi', 'Shuzigash', 'Sibi', 'Sibri', 'Sige', 'Silani', 'Silik-mu-lu-dug', 'Silik-mu-lu-khi', 'Silli-Adad', 'Sim-ma-sihu', 'Simbar-shipak', 'Simti-sil-hak', 'Sin', 'Sin-Eribam', 'Sin-Iddinam', 'Sin-Iqisham', 'Sin-Nasir', 'Sin-baladan', 'Sin-gasit', 'Sin-idinna', 'Sin-inun', 'Sin-ishmeanni', 'Sin-mat-ikali', 'Sin-muballit', 'Sin-said', 'Sipta�ulzi', 'Sisit', 'Su-abu', 'Sumai', 'Sumu-abum', 'Sumu-la-El', 'Sumuel', 'Sutur-cit', 'Suusaandar', 'Suzub', 'Tammuz', 'Tamzi', 'Tassi-guru-bar', 'Tattannu', 'Timgiratee', 'Tir-utur', 'Tu', 'Ubar', 'Ubaratutu', 'Ugurnaszir', 'Uktannu', 'Ul-khum-khum', 'Ulam-khala', 'Ulamburiash', 'Ulamburyas', 'Ulbasurkidina', 'Ummiah-ziriti', 'Uppulu', 'Ur', 'Ur-zigurumas', 'Uras', 'Urhammu', 'Urhamsi', 'Urukh', 'Utuaa', 'Utultar', 'Va-anna', 'Vul-pal-idinna', 'Warad-Sin', 'Yahatti-Il', 'Yanzu', 'Zababa-shuma-iddin', 'Zabaia', 'Zabu', 'Zaidu', 'Zamama', 'Zamama-zikur-idinna', 'Zamana', 'Zicu', 'Zikar-sin', 'Zu', 'Zur-sin', 'Zuuthusu'];
  const nm2 = ['Adeeshuduggaat', 'Ahassunu', 'Ahati-waqrat', 'Ahatsunu', 'Alittum', 'Allatu', 'Amata', 'Anagalmeshshu', 'Anagalshu', 'Anatu', 'Anunit', 'Anunit', 'Arahunaa', 'Aralu', 'Aruru', 'Arwia', 'Ashlultum', 'Atanah-ili', 'Banunu', 'Bau', 'Bau', 'Belatsunat', 'Belessunu', 'Beletsunu', 'Belili', 'Belit', 'Beltis', 'Bibi', 'Bilit taauth', 'Damkina', 'Darice', 'Davcina', 'Davke', 'Ellat-gula', 'Enheduana', 'Erishti-Aya', 'Esther', 'Ettu', 'Gashansunu', 'Gemegishkirihallat', 'Gemekaa', 'Gemeti', 'Gula', 'Gula', 'Humusi', 'Ia', 'Iltani', 'Ishtar', 'Ishtar-gamelat', 'Istar', 'Isthar', 'Kalumtum', 'Kishar', 'Kishar', 'Kissare', 'Ku-Aya', 'Ku-Baba', 'Kullaa', 'Monireh', 'Mot', 'Mummu', 'Munawwirtum', 'Mupallidat-serua', 'Mushezibitu', 'Mushezibti', 'Mylitta', 'Nana', 'Ni', 'Nidintu', 'Nin-marki', 'Ninsunu', 'Omarosa', 'Ri', 'Rubati', 'Rubati', 'Sabitum', 'Sarpanitum', 'Shala', 'Shala', 'Tabni-Ishtar', 'Tashmitum', 'Tauthe', 'Tiamat', 'Tiamat', 'Ubalnu', 'Yadidatum', 'Zakiti', 'Zirat-banit', 'Zirratbanit', 'Zirratbanit'];



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
