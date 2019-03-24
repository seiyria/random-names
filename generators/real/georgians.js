export default function georgians() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abel', 'Abraam', 'Abram', 'Adam', 'Akaki', 'Akim', 'Aleksandr', 'Aleksandre', 'Alexei', 'Ambrosi', 'Amiran', 'Andria', 'Andro', 'Anri', 'Anzor', 'Aram', 'Archil', 'Arkady', 'Artyom', 'Avet', 'Avi', 'Avskenti', 'Avtandil', 'Avto', 'Azat', 'Baadur', 'Babken', 'Badri', 'Bagrat', 'Bakur', 'Besarion', 'Beso', 'Bidzina', 'Boris', 'Daniel', 'Dato', 'Davit', 'Daviti', 'Dito', 'Dmitry', 'Eduard', 'Eldar', 'Elguja', 'Eli', 'Erekle', 'Gaioz', 'Genadi', 'Giga', 'Giorgi', 'Giuli', 'Givi', 'Gocha', 'Goga', 'Grigol', 'Gurgen', 'Husik', 'Iakob', 'Ilia', 'Imeda', 'Ioane', 'Iona', 'Ioseb', 'Irakli', 'Isidore', 'Iuri', 'Ivane', 'Koba', 'Kokhta', 'Konstantine', 'Korneli', 'Kote', 'Lado', 'Levan', 'Luka', 'Malkhazi', 'Mamuka', 'Mate', 'Meliton', 'Merab', 'Mikheil', 'Misho', 'Movsoum', 'Murtaz', 'Nika', 'Nikoloz', 'Nodar', 'Okropir', 'Otar', 'Pavle', 'Petre', 'Pridon', 'Pridoni', 'Ramaz', 'Ramazi', 'Revaz', 'Revazi', 'Reziko', 'Rostom', 'Rouben', 'Saba', 'Sandro', 'Sergei', 'Simon', 'Simoni', 'Soso', 'Spartak', 'Stepane', 'Tamaz', 'Tamazi', 'Tedore', 'Teimuraz', 'Teimurazi', 'Temo', 'Temur', 'Temuri', 'Tengiz', 'Terenti', 'Toma', 'Tornike', 'Vakhtang', 'Valeri', 'Valerian', 'Vano', 'Vasil', 'Vaso', 'Vazha', 'Vepkhia', 'Vladimer', 'Yuriy', 'Zaal', 'Zakaria', 'Zura', 'Zurab', 'Zviad', 'Zviadi'];
  const nm2 = ['Ana', 'Anna', 'Arus', 'Bedisa', 'Darejan', 'Darejani', 'Eka', 'Ekaterine', 'Elena', 'Elene', 'Elisabed', 'Eliso', 'Endzela', 'Erekle', 'Eteri', 'Eva', 'Gulisa', 'Gvanca', 'Helen', 'Ia', 'Irina', 'Irine', 'Izolda', 'Kathryn', 'Katie', 'Ketevan', 'Keti', 'Ketino', 'Keto', 'Khatia', 'Khvaram', 'Kira', 'Ksenia', 'Lali', 'Leila', 'Lia', 'Lisa', 'Lizzie', 'Madona', 'Maia', 'Maiko', 'Makvala', 'Manana', 'Marekhi', 'Mariam', 'Mariami', 'Marie', 'Marika', 'Marina', 'Marine', 'Mariya', 'Marta', 'Mary', 'Maya', 'Medea', 'Medico', 'Meri', 'Mzia', 'Nana', 'Nani', 'Nanuli', 'Natalia', 'Natela', 'Natia', 'Nestan', 'Nestani', 'Nina', 'Nino', 'Nutsa', 'Olga', 'Qetevani', 'Rusudan', 'Rusudani', 'Sally', 'Salome', 'Shorena', 'Shushanik', 'Slow', 'Sofiko', 'Sophie', 'Sopio', 'Tamar', 'Tamari', 'Tatiana', 'Tekla', 'Tina', 'Tinatin', 'Tinatini', 'Tsisana', 'Tsisia', 'Tsiuri', 'Vardo', 'Yelena'];
  const nm3 = ['Abakelia', 'Abashidze', 'Abazasdze', 'Abkhazi', 'Abramidze', 'Abuladze', 'Abuletisdze', 'Abuselidze', 'Agiashvili', 'Akhalaia', 'Akhalkatsi', 'Akhvlediani', 'Alasania', 'Alavidze', 'Aleksidze', 'Amilakhvari', 'Amiranashvili', 'Amirejibi', 'Amirkhanashvili', 'Anchabadze', 'Andronikashvili', 'Anjaparidze', 'Apakidze', 'Arabidze', 'Arakhamia', 'Arveladze', 'Arziani', 'Asatiani', 'Aslanishvili', 'Atanashvili', 'Avaliani', 'Avalishvili', 'Babadishvili', 'Bagrationi', 'Bakhia', 'Bakhsoliani', 'Bakradze', 'Balakhadze', 'Balanchivadze', 'Balavadze', 'Bandzeladze', 'Baratashvili', 'Barnabishvili', 'Basilia', 'Beridze', 'Bestavashvili', 'Biniashvili', 'Bobokhidze', 'Bochorishvili', 'Bokuchava', 'Bolkvadze', 'Botkoveli', 'Bukia', 'Burchuladze', 'Chabukiani', 'Chachkhiani', 'Chakhunashvili', 'Chanturia', 'Charkviani', 'Chavchavadze', 'Cherkezishvili', 'Chiaureli', 'Chichua', 'Chikovani', 'Chkadua', 'Chkhaidze', 'Chkheidze', 'Chkhetidze', 'Chkonia', 'Cholokashvili', 'Dadeshkeliani', 'Dadiani', 'Darchidze', 'Darsalia', 'Davitaia', 'Davituliani', 'Dgebuadze', 'Diasamidze', 'Dolidze', 'Donauri', 'Dongvani', 'Dzhugashvili', 'Esadze', 'Gabashvili', 'Gagua', 'Gakharia', 'Gamkrelidze', 'Gamsakhurdia', 'Garsevanishvili', 'Gedevanishvili', 'Geladze', 'Gelovani', 'Ghurtskaia', 'Giorgadze', 'Giorgobiani', 'Glonti', 'Gloveli', 'Gogoladze', 'Gogolauri', 'Gogolidze', 'Gotsiridze', 'Gruzinsky', 'Gugunava', 'Guramishvili', 'Gurgenidze', 'Gurieli', 'Guruli', 'Gvasalia', 'Gvazava', 'Iarajuli', 'Iashvili', 'Iluridze', 'Imedashvili', 'Iosava', 'Ivanishvili', 'Jalagonia', 'Jananashvili', 'Janashia', 'Jandieri', 'Japaridze', 'Jaqeli', 'Javakhishvili', 'Javrishvili', 'Jeladze', 'Jibuti', 'Jinjikhashvili', 'Jishkariani', 'Jorjadze', 'Juansheriani', 'Jughashvili', 'Kakhaberidze', 'Kalichava', 'Kapanadze', 'Kashibadze', 'Kasradze', 'Kazbegi', 'Kereselidze', 'Kharaishvili', 'Khardziani', 'Kherkheulidze', 'Khidirbegishvili', 'Khimshiashvili', 'Khomeriki', 'Khujadze', 'Khurtsilava', 'Khutsishvili', 'Kiknadze', 'Kipiani', 'Kobalia', 'Kobulashvili', 'Kochakidze', 'Kodoshvili', 'Koridze', 'Kotrikadze', 'Kurtanidze', 'Kvaratskhelia', 'Kvernadze', 'Laliashvili', 'Lazarashvili', 'Leonidze', 'Licheli', 'Liparteliani', 'Lobzhanidze', 'Lortkipanidze', 'Machabeli', 'Machavariani', 'Machutadze', 'Magalashvili', 'Maisuradze', 'Mamaladze', 'Manvelishvili', 'Mchedlishvili', 'Mdivani', 'Melikishvili', 'Melkadze', 'Melua', 'Meskhi', 'Mikeladze', 'Mildiani', 'Mkheidze', 'Mukhraneli', 'Mzhavanadze', 'Nakani', 'Nakashidze', 'Nanava', 'Nemsadze', 'Nikoladze', 'Nizharadze', 'Nogaideli', 'Ochiauri', 'Okinashvili', 'Okropiridze', 'Oniani', 'Orbeliani', 'Orjonikidze', 'Palavandishvili', 'Pataraia', 'Patarava', 'Patarkatsishvili', 'Pavlenishvili', 'Pertakhia', 'Pirtskhalaishvili', 'Pkheidze', 'Rapava', 'Razmadze', 'Rekhviashvili', 'Revazishvili', 'Rokva', 'Rusieshvili', 'Saakadze', 'Saakashvili', 'Sabauri', 'Sakandelidze', 'Saralidze', 'Shaburidze', 'Shalikashvili', 'Shengelia', 'Shervashidze', 'Shetekauri', 'Shevardnadze', 'Shushania', 'Shvelidze', 'Sichinava', 'Sikharulidze', 'Sologashvili', 'Sukhishvili', 'Svanadze', 'Svanidze', 'Tabagari', 'Tarkhnishvili', 'Tavdgiridze', 'Tavkhelidze', 'Toreli', 'Tsenteradze', 'Tsereteli', 'Tsintsadze', 'Tsitsishvili', 'Tskitishvili', 'Tsulukidze', 'Tugushi', 'Tumanishvili', 'Tusishvili', 'Ujmajuridze', 'Undiladze', 'Urushadze', 'Vachnadze', 'Vakhvakhishvili', 'Vardanidze', 'Vezirishvili', 'Virsaladze', 'Yachvili', 'Zakarashvili', 'Zakareishvili', 'Zakariadze', 'Zalkaliani', 'Zambakhidze', 'Zamtaradze', 'Zhorzholiani', 'Zibzibadze', 'Zoidze', 'Zotikishvili', 'Zumadze', 'Zurabashvili', 'Zurabiani', 'Zviadadze'];


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
