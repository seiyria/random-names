export default function basothos() {
  let rnd;

  let names;

  const type = Math.random() < 0.5 ? 0 : 1;

  const nm1 = ['Amohelang (Receive)', 'Amose (Burdened)', 'Ata ((Increase/Multiply)', 'Baholo (Elders)', 'Bokang (Rejoice/Praise)', 'Bongoe (One)', 'Diboko (Praises)', 'Dikotsi (Accidents)', 'Esaia (God is my salvation)', 'Hlompho (Respect)', 'Kabelo ((Inheritance)', 'Kabelo (Given)', 'Kamohelo (Acceptance/Welcome)', 'Kananelo (Approval/Appreciation)', 'Karabo (Answer)', 'Katleho (Success)', 'Kealeboa (Thank You)', 'Kekeletso (Addition)', 'Kelebogile (I am grateful)', 'Kelebohile (I am grateful)', 'Keneiloe (I have been given)', 'Kgethang (Choose)', 'Kgotso (Peace/Tranquility)', 'Khabane (Warrior)', 'Khethang (Choose)', 'Khotso (Peace)', 'Khotsofalang (Be satisfied)', 'Kotsi (Danger)', 'Kutloano (Mutual understanding)', 'Kutloisiso (Understanding)', 'Kutlwano (Mutual understanding)', 'Kutlwisiso (Understanding)', 'Leabua (You speak)', 'Leauoa (To be advised)', 'Lebo (Be thankful)', 'Lebohang (Be thankful)', 'Lebona (The one who sees)', 'Lefa (Inheritance)', 'Lefu (Death/Misfortune)', 'Lehlohonolo (Luck)', 'Lekgotla (Court of law)', 'Lekhotla (Court of law)', 'Lemoha (Take cognisance)', 'Lemohang (Take cognisance)', 'Lenka (Taker)', 'Lentswe (Voice)', 'Leoatle (Ocean)', 'Lepolesa (Police officer)', 'Lereko (Abundance/Merciful)', 'Lesebo (Gift from the ancestors)', 'Lesedi (Light/Illumination)', 'Leseli (Light/Illumination)', 'Letlotlo (Treasure)', 'Letsie (Chieftain)', 'Letsoalo (Fear/Apprehension)', 'Letswalo (Fear/Apprehension)', 'Lewatle (Ocean)', 'Liboko (Praises)', 'Likotsi (Accidents)', 'Makalo (Surprise/Bewilderment)', 'Makgotla (Courts of law)', 'Makhotla (Courts of law)', 'Malefane (One who pays)', 'Mamello (Patience)', 'Mareka (Warlike)', 'Masingita (Miracle)', 'Masopha (Chieftain)', 'Moeketsi (Proliferator)', 'Moeletsi (Advisor)', 'Mohapi (Victor)', 'Mohato (Step)', 'Mohau (Pity/mercy)', 'Mohlomi (Wisest of Leaders)', 'Mojalefa (Heir)', 'Mokgethi (Chooser)', 'Mokhasi (Crawler)', 'Mokhethi (Chooser)', 'Molahlehi (The Lost One)', 'Molapo (Stream/River)', 'Molatadi (One who denies all)', 'Moluleloa (We have long awaited your arrival)', 'Moreri (Preacher)', 'Mosela (Tail)', 'Moselantja (Dog\'s tail)', 'Moshanyana (Boy)', 'Moshe (Saved from water)', 'Mosiuoa (The Abandoned One)', 'Mothusi (Helper)', 'Motlalentwa (Fighter)', 'Motlalepule (The Rain Bringer)', 'Motsamai (Traveller)', 'Motsumi (The seeker)', 'Mpfareleli (Forgive Me)', 'Mphafane (Praises God)', 'Mpho (Gift)', 'Neo (Gift)', 'Nkoe (Tiger)', 'Nkoeneane (Little Tiger)', 'Nkoenyane (Little Tiger)', 'Nku (Sheep)', 'Nkwe (Tiger)', 'Nkwenyane (Little Tiger)', 'Nthofeela (Thing)', 'Ntja (Dog)', 'Ntsu (Eagle)', 'Oagile	(Firmly built household)', 'Oagile (Household has been firmly built)', 'Oatile (Household has been firmly built)', 'Oupanyana (Small grandfather)', 'Paolosi (Little One)', 'Paseka (Easter)', 'Phahamo (Eminence)', 'Pheello (Perseverance)', 'Pheko (Remedy/Cure)', 'Phethisi (Completion/Execution)', 'Phetoho (Change)', 'Phutheho (Congregation)', 'Polo (Alligator)', 'Poloko (Safety)', 'Pule (Rainy/In the rain)', 'Reaboka (We are full of praise)', 'Realeboha (We are thankful)', 'Reaotlotla (We praise His name)', 'Refiloe (We have been given)', 'Refilwe (We have been given)', 'Remaketse (We’re surprised)', 'Rethabile (We are happy)', 'Sechaba (Nation)', 'Sehloho (Cruelty)', 'Sehlolo (Disaster)', 'Sello (Wailing)', 'Seretse (Mud)', 'Setjhaba (Nation)', 'Tšeliso (Consolation)', 'Tšepo (Hope)', 'Tšoeu (White one)', 'T\'sehla (Yellow Man)', 'Tau (Lion)', 'Tebello (Expectation)', 'Teboho (Gratitude)', 'Tefo (Payment/reward)', 'Thaba (Mountain)', 'Thabang (Be happy)', 'Thabiso (Joy-bringer)', 'Thabo (Happiness)', 'Thapeli (Appeal)', 'Thapelo (Prayer/Plea)', 'Thato (Love)', 'Thebe (Shield)', 'Thoriso (Praise)', 'Thuso (Help)', 'Thuto (Lesson)', 'Tiisetso (Perseverance)', 'Tlali (Fulfilled)', 'Tlhokomelo (Care)', 'Tlholo (Victory)', 'Tlotliso (Honor)', 'Tlotliso (Honour)', 'Tsebo (Knowledge)', 'Tsela (Path)', 'Tshediso (Consolation)', 'Tshepo (Hope)', 'Tsie (Locust)', 'Tsietsi (Predicament/Dilemma)', 'Tsotang (Amazement)', 'Tsweu (White one)', 'Tumelo (Faith)', 'Tumisang (Give praise)'];
  const nm2 = ['‘Malefu (Mother of death or illness)', '‘Mampe (Mother of ugliness)', '‘Mathapelo (Mother of prayer)', 'Amohelang (Receive)', 'Arabang (Reply/Respond)', 'Basetsana (Ladies)', 'Bohlokoa (Precious)', 'Bohlokwa (Precious)', 'Bokang (Praise/Rejoice)', 'Bonolo (Ease)', 'Bontle (Beauty)', 'Bophelo (Life)', 'Botle (Beauty)', 'Buang (Speak/Chat)', 'Diboko (Praises)', 'Dikeledi (Tears)', 'Dikgang (Arguments)', 'Dimakatso (Surprises/Amazements)', 'Dimpho (Gifts/Presents)', 'Dineo (Gifts/Talents)', 'Dintle (Beauty)', 'Dipalesa (Flowers)', 'Disebo (Whispers)', 'Dithole (Dusty Waste)', 'Ditsheho (Laughter)', 'Ditswanelo (Suitable Things)', 'Felleng (Beyond the End/Exposed)', 'Fumane (Found/Discovered)', 'Itumeleng (Be joyous/Be grateful)', 'Kamohelo (Acceptance/Welcome)', 'Kananelo (Approval/Appreciation)', 'Katleho (Success)', 'Keneoue (I’ve been given)', 'Keneuwe (I\'ve been given)', 'Keromang (One who was sent)', 'Khauhelo (Compassion/Pity)', 'Khothatso (Encouragement)', 'Kutloano (Mutual understanding)', 'Kutloisiso (Understanding)', 'Kutlwano (Mutual understanding)', 'Kutlwisiso (Understanding)', 'Lebo (Be Thankful)', 'Lebohang (Be Thankful)', 'Lerato (Love)', 'Letlotlo (Treasure)', 'Letsatsi (Sun/Day)', 'Liboko (Praises)', 'Liepollo (Revelations)', 'Likeleli (Teardrops)', 'Likengkeng (Tears)', 'Likhang  (Arguments)', 'Likhapa (Tears)', 'Limakatso (Surprises/Amazements)', 'Limpho (Gifts/Presents)', 'Lindelani (Be Patient)', 'Lindidwe (Waited For)', 'Lineo (Gifts/Talents)', 'Lintle (Beauty)', 'Lipalesa (Flowers)', 'Lisebo (Whispers)', 'Litšeho (Laughter)', 'Litšehoana (Little laughter)', 'Lithole (Dusty Waste)', 'Litsoanelo (Suitable things)', 'Majobo (Mother of job)', 'Makhokolotso (Refuse)', 'Maleshoane (Ladybird)', 'Maletsatsi (Sun/Day)', 'Mamello (Patience/Perseverance)', 'Mantso (The dark one)', 'Mariha (Winter)', 'Masoabi (Shame)', 'Matšeliso (Consolation)', 'Mathe (Saliva)', 'Matlakala (Waste Paper or Broken Sticks)', 'Matshediso (Consolation)', 'Mmalefu (Mother of death or illness)', 'Mmalesotho (Mother of Lesotho)', 'Mmampe (Mother of ugliness)', 'Mmaseretse (Mother of mud)', 'Mmathapelo (Mother of prayer)', 'Mohau (Pity/Mercy)', 'Moipone (Self-Admirer)', 'Mookho (Tear/Lacrimation)', 'Moratuoa (Darling)', 'Moratuwa (Darling)', 'Mosa (Grace)', 'Mosela (Tail/The Last One)', 'Moselantja (Dog’s tail)', 'Motle (Beautiful)', 'Mpho (Gift/Present)', 'Mponeng (Behold me)', 'Naledi (Star)', 'Naleli (Star)', 'Nana (Baby/Infant)', 'Neo (Gift/Talent)', 'Nkhetheleng (Choose for me)', 'Nthabi (Make me happy)', 'Nthabiseng (Make me happy)', 'Nthati (One to love me)', 'Ntsebo (Whispers)', 'Ntsoaki (Girl amongst boys (many brothers))', 'Ntswaki (Girl amongst boys (many brothers))', 'Nyakallo (Joy)', 'Oarona (Ours)', 'Paballo (Protection)', 'Palesa (Flower)', 'Phutheho (Congregation or collection)', 'Pont\'so (Show/Revelation)', 'Pula (Rain)', 'Pulane (Rainy)', 'Puleng (In or during the Rain)', 'Qenehelo (Pity)', 'Ramatjato (Agility)', 'Ramatla (Strength)', 'Ramona (Selfishness)', 'Ratsebo (Knowledge)', 'Ratu (Love of mine)', 'Reabetsoe (We have been provided for)', 'Reabetswe (We have been provided for)', 'Reabiloe (We have been blessed)', 'Reabilwe (We have been blessed)', 'Refiloe (We have been given)', 'Refilwe (We have been given)', 'Relebohile (We are grateful)', 'Remaketse (We are surprised)', 'Rethabile (We are happy)', 'Seeng (Gone)', 'Shoeshoe (Flower)', 'Tšepiso (Promise)', 'Tebatso (Distraction/Make forget)', 'Tebello (Expectation)', 'Thato (Love)', 'Thuto (Lesson)', 'Tiisetso (Perseverance)', 'Tlhokomelo (Care)', 'Tlotliso (Honour)', 'Tokoloho (Freedom/Independence)', 'Topollo (Emancipation/Release)', 'Tshepiso (Promise)', 'Tshepo (Hope)', 'Tumelo (Faith)'];


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
