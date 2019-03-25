export default function celtics() {
  let rnd;

  let rnd1;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Adaidh', 'Adhamh', 'Àdhamh', 'Ailbeart', 'Ailean', 'Ailig', 'Ailpean', 'Ailpein', 'Aindrea', 'Aindreas', 'Alasdair', 'Amhladh', 'Amhlaibh', 'Amhlaidh', 'Amhlaigh', 'Angaidh', 'Anndra', 'Anndrais', 'Aodh', 'Aonghas', 'Aonghus', 'Arailt', 'Artair', 'Artur', 'Asgall', 'Àaron', 'Baltair', 'Bearnard', 'Beathan', 'Beistean', 'Benneit', 'Bhaltair', 'Bhatair', 'Brian', 'Cailean', 'Calum', 'Caomhainn', 'Cathal', 'Ciaran', 'Cliamain', 'Coinneach', 'Colla', 'Colum Cille', 'Comhnall', 'Conall', 'Conn', 'Cormac', 'Cormag', 'Crìsdean', 'Cuithbeart', 'Daibhidh', 'Dàibhidh', 'Daidh', 'Daniel', 'Deorsa', 'Deòrsa', 'Diarmad', 'Domhnall', 'Dòmhnall', 'Domhnull', 'Dòmhnull', 'Donaidh', 'Donnchadh', 'Dubh', 'Dubh-shìth', 'Dubhghall', 'Dànaidh', 'Dùghall', 'Dùghlas', 'Eachann', 'Eacharn', 'Eairdsidh', 'Ealar', 'Eanraig', 'Eanruig', 'Eideard', 'Eirdsidh', 'Ellair', 'Eoghann', 'Eòghann', 'Eumann', 'Eòghan', 'Eòin', 'Eòsaph', 'Faolan', 'Fearchar', 'Fearghas', 'Filib', 'Fionn', 'Fionnghall', 'Fionnghan', 'Fionnlagh', 'Frang', 'Frangan', 'Frangean', 'Friseal', 'Gill-easbuig', 'Gilleasbuig', 'Gill-Eathain', 'Gill-Eòin', 'Gill-Iosa', 'Gillìosa', 'Gille-Aindreis', 'Gille-Brìdhde', 'Gille-Caluim', 'Gille-Crìosd', 'Gilleasbaig', 'Gillebeart', 'Gillebrìde', 'Goiridh', 'Goraidh', 'Grannd', 'Greum', 'Griogair', 'Guaidre', 'Gòrdan', 'Harailt', 'Horas', 'Hùisdean', 'Iagan', 'Iain', 'Ianatan', 'Iomhair', 'Iomhar', 'Isaac', 'Iàcob', 'Iòna', 'Iòsaph', 'Labhrann', 'Labhruinn', 'Lachlann', 'Laomann', 'Luthais', 'Lùcas', 'Maoilios', 'Maol-Chaluim', 'Maol-Domhnuich', 'Maol-Dòmhnuich', 'Maol-Iosa', 'Maol-Moire', 'Maoldònaich', 'Maolmhuire', 'Maolruibh', 'Marc', 'Marcas', 'Martainn', 'Màrtainn', 'Mata', 'Micheil', 'Mhoirbheinn', 'Morgan', 'Muireach', 'Munga', 'Mungan', 'Murchadh', 'Mànas', 'Mànus', 'Mìcheal', 'Mìcheil', 'Neacal', 'Neachdainn', 'Niall', 'Niallghus', 'Oilbhreis', 'Oisean', 'Padean', 'Padruig', 'Para', 'Peadair', 'Peadar', 'Peadaran', 'Peadrus', 'Prainnseas', 'Pàdair', 'Pàdraig', 'Pàdruig', 'Pàl', 'Pàra', 'Pàrlan', 'Pòl', 'Raghnall', 'Raibeart', 'Raonull', 'Ringean', 'Risteard', 'Rob', 'Roibeart', 'Ruairidh', 'Ruaraidh', 'Ruiseart', 'Ràild', 'Sachairi', 'Samuel', 'Sandaidh', 'Seaghdh', 'Seathan', 'Seoc', 'Seocan', 'Seonaidh', 'Seoras', 'Seumas', 'Seòras', 'Seòsaidh', 'Sgàire', 'Sim', 'Simidh', 'Solamh', 'Somhairle', 'Steaphan', 'Stiùbhard', 'Stiùbhart', 'Sìm', 'Sìomon', 'Tadhg', 'Tamhas', 'Taog', 'Tasgall', 'Tearlach', 'Teàrlach', 'Tiobaid', 'Tomag', 'Tomaidh', 'Torcadall', 'Torcall', 'Torcull', 'Tormod', 'Tormoid', 'Tàmhas', 'Tòmachan', 'Tòmas', 'Uailean', 'Ualan', 'Ualraig', 'Uarraig', 'Uilleachan', 'Uilleam', 'Uisdean', 'Ùisdean'];
  const namesFemale = ['Ailios', 'Ailis', 'Aimil', 'Aingealag', 'Anabla', 'Anna', 'Aoife', 'Barabal', 'Baraball', 'Barabla', 'Bearnas', 'Beasag', 'Beathag', 'Beileag', 'Beitidh', 'Beitiris', 'Beitris', 'Bhioctoria', 'Brighde', 'Brìghde', 'Brìde', 'Cairistiòna', 'Cairistìne', 'Cairistìona', 'Caitir', 'Caitlin', 'Caitrìona', 'Calaminag', 'Catrìona', 'Ceana', 'Ceit', 'Ceiteag', 'Ceitidh', 'Ciorsdan', 'Ciorstag', 'Ciorstaidh', 'Ciorstan', 'Cotrìona', 'Criosaidh', 'Curstag', 'Curstaidh', 'Deirdre', 'Deòiridh', 'Deònaidh', 'Dior-bhorgàil', 'Diorbhail', 'Dior-bhail', 'Dior-bhàil', 'Dìorbhail', 'Doileag', 'Doilidh', 'Doirin', 'Dolag', 'Ealasaid', 'Eamhair', 'Eilidh', 'Eimhir', 'Eiric', 'Eithrig', 'Eubh', 'Eubha', 'Èibhlin', 'Fionnaghal', 'Fionninghua', 'Fionnuala', 'Floireans', 'Flòraidh', 'Frangag', 'Giorsail', 'Giorsal', 'Gormall', 'Gormlaith', 'Isbeil', 'Iseabail', 'Iseabal', 'Leagsaidh', 'Leitis', 'Lili', 'Liùsaidh', 'Lucrais', 'Lìosa', 'Magaidh', 'Maighread', 'Mairead', 'Mairearad', 'Malamhìn', 'Malmhìn', 'Marsail', 'Marsaili', 'Marta', 'Milread', 'Moibeal', 'Moire', 'Moireach', 'Muire', 'Muireall', 'Màili', 'Màiri', 'Mòr', 'Mòrag', 'Nansaidh', 'Oighrig', 'Olibhia', 'Peanaidh', 'Peigi', 'Raghnaid', 'Raodhailt', 'Raonaid', 'Raonaild', 'Rut', 'Seasaìdh', 'Seonag', 'Seònaid', 'Simeag', 'Siubhan', 'Siùbhan', 'Siùsaidh', 'Siùsan', 'Sorcha', 'Stineag', 'Sìle', 'Sìleas', 'Sìlis', 'Sìne', 'Sìneag', 'Sìonag', 'Teasag', 'Teàrlag', 'Ùna', 'Una'];
  const names2 = ['Ìomharach', 'Aileanach', 'Ailpeanach', 'Allanach', 'Ambarsan', 'Andarsan', 'Anndrasdan', 'Arasgain', 'Bànach', 'Bòid', 'Bòideach', 'Baran', 'Barrach', 'Beitean', 'Bhàsa', 'Bhodhsa', 'Blàr', 'Blàrach', 'Blacach', 'Bochanan', 'Boid', 'Bràigheach', 'Brùn', 'Breac', 'Breathnach', 'Brothaigh', 'Bruis', 'Brus', 'Buideach', 'Buidheach', 'Buids', 'Buiseid', 'Càidh', 'Cèamp', 'Cèampach', 'Còmhan', 'Cailbhin', 'Caileanach', 'Caimbeul', 'Caimbeulach', 'Camran', 'Camshron', 'Camshronach', 'Cananach', 'Canonach', 'Caoidheach', 'Caolaisdean', 'Catach', 'Catan', 'Catanach', 'Ceallach', 'Ceanadach', 'Ceannaideach', 'Cearrach', 'Ceiteach', 'Ciar', 'Ciarach', 'Ciogach', 'Coineagan', 'Crannach', 'Creag', 'Creagach', 'Criatharach', 'Cuimeanach', 'Cuimein', 'Cuimeineach', 'Dòmhnallach', 'Dòmhnullach', 'Dùbhghlas', 'Dùghallach', 'Dùghlas', 'Dùghlasach', 'Dalais', 'Deòir', 'Deòireach', 'Druimeanach', 'Druimein', 'Druimeineach', 'Druiminn', 'Dubh', 'Dubhach', 'Dunaid', 'Dunaidh', 'Eabarcrombaigh', 'Fòlais', 'Fearghasdan', 'Fionnlasdan', 'Flimean', 'Foirbeis', 'Foirbeiseach', 'Forsàidh', 'Friseal', 'Frisealach', 'Gòrdan', 'Gòrdanach', 'Gall', 'Gallach', 'Geadais', 'Geadasach', 'Gearailteach', 'Gilios', 'Gill\'Iosa', 'GillAndrais', 'GillEasbaig', 'GillEasbuig', 'GilleChrìost', 'GilleChriosd', 'Giobsan', 'Glas', 'Gobha', 'Grannd', 'Grannda', 'Granndach', 'Greum', 'Greumach', 'Griogal', 'Griogalach', 'Griogarach', 'Guaire', 'Guinne', 'Gunnach', 'Gutraidh', 'Lìos', 'Lìosach', 'Lùtair', 'Latharnach', 'Lathurna', 'Leòideach', 'Leamhanach', 'Leamhnach', 'Lobhdain', 'Loganach', 'Loudain', 'Màrnach', 'Màrr', 'Màrtainn', 'Mèinn', 'Mèinnearach', 'MacÀdaidh', 'MacÀdhaimh', 'MacÀidh', 'MacÌomhair', 'MacÌosaig', 'MacÙisdein', 'Mac\'Ill\'Anndrais', 'Mac\'Ill\'Eathainn', 'Mac\'Ill\'Fhinnein', 'Mac\'Ill\'Fhinntain', 'Mac\'Ill\'Fhionndaig', 'Mac\'Ill\'Iosa', 'Mac\'Ill\'Oig', 'Mac\'Ille na Brataich', 'Mac\'IlleBhàin', 'Mac\'IlleBhreac', 'Mac\'IlleBhuidh', 'Mac\'IlleChiar', 'Mac\'IlleDhuibh', 'Mac\'IlleMhìcheil', 'Mac\'IlleMhòire', 'Mac\'IlleNaoimh', 'Mac\'IlleRiabhaich', 'Mac\'IlleRuaidh', 'Mac\'Uirigh', 'MacAbhra', 'MacAbhsalain', 'MacAdaidh', 'MacAdhaimh', 'MacAididh', 'MacAilein', 'MacAilpein', 'MacAlasdair', 'MacAmbrais', 'MacAmhalghaidh', 'MacAmhlaidh', 'MacAmhlaigh', 'MacAnndaidh', 'MacAnndra', 'MacAnndrais', 'MacAodhagain', 'MacAoidh', 'MacAoidhein', 'MacAomalain', 'MacAonghais', 'MacAra', 'MacArtain', 'MacArtair', 'MacAsgaidh', 'MacAsgaill', 'MacAsgain', 'MacBeatha', 'MacBeathag', 'MacBhàididh', 'MacBhàtair', 'MacBharrais', 'MacBheatha', 'MacBheathaig', 'MacBheathain', 'MacBhigein', 'MacBhiocair', 'MacBhlàthain', 'MacBhrìghdeinn', 'MacBhradain', 'MacBhraonaigh', 'MacCàba', 'MacCòiseam', 'MacCòmhain', 'MacCòmhghan', 'MacCùga', 'MacCaibe', 'MacCailein', 'MacCain', 'MacCaisgein', 'MacCalmain', 'MacCaluim', 'MacCaog', 'MacCaoig', 'MacCardaidh', 'MacCarmaig', 'MacCathachaidh', 'MacCathail', 'MacCathain', 'MacCathasaigh', 'MacCathbhaidh', 'MacCathbharra', 'MacCeallaig', 'MacCeallaigh', 'MacCeallair', 'MacCearnaigh', 'MacCearraich', 'MacCeasain', 'MacChoinnich', 'MacCianain', 'MacCiarain', 'MacCinidh', 'MacCiomalain', 'MacCionadha', 'MacClambroch', 'MacCnaimhin', 'MacCnusachainn', 'MacCodrum', 'MacCoinnich', 'MacCoinnigh', 'MacColla', 'MacComhainn', 'MacConaill', 'MacConnain', 'MacCorcadail', 'MacCormaig', 'MacCosgraigh', 'MacCrìsdein', 'MacCròin', 'MacCrain', 'MacCreamhain', 'MacCriomain', 'MacCrithein', 'MacCrosain', 'MacCruimein', 'MacCuaig', 'MacCuidhein', 'MacCuilcein', 'MacCuinn', 'MacCuinnleis', 'MacCuirc', 'MacCuithein', 'MacCullach', 'MacCullaich', 'MacCumasgaigh', 'MacCumhais', 'MacCuthais', 'MacDhàibhidh', 'MacDhòmhnaill', 'MacDhùghaill', 'MacDhùnShléibhe', 'MacDheòrsa', 'MacDhiarmaid', 'MacDhonnchaidh', 'MacDhrostain', 'MacDhubhShìth', 'MacDhubhaich', 'MacDhubhaig', 'MacDhubhthaich', 'MacDhuibh', 'MacDhunlèibhe', 'MacDiarmaid', 'MacEòghainn', 'MacEachaidh', 'MacEachainn', 'MacEachairn', 'MacEacharna', 'MacEalair', 'MacEalar', 'MacEamailinn', 'MacEanain', 'MacEanraig', 'MacFhearchair', 'MacFhearghail', 'MacFhearghais', 'MacFhilib', 'MacFhiongain', 'MacFhionghain', 'MacFhionghuin', 'MacFhionnlaigh', 'MacFhitheachain', 'MacFhlaithbheartaich', 'MacFhraing', 'MacFhraingein', 'MacFigeinn', 'MacFrìdeinn', 'MacFuirigh', 'MacGairbheith', 'MacGaradh', 'MacGhearailt', 'MacGhille', 'MacGill\'Eòin', 'MacGill\'Earnain', 'MacGill\'Easbaig', 'MacGill\'Fhaolagain', 'MacGill\'Fhiontag', 'MacGill\'Oig', 'MacGill\'Onaidh', 'MacGill-Eain', 'MacGillIosa', 'MacGille', 'MacGilleBhàin', 'MacGilleBhràth', 'MacGilleBhrìghde', 'MacGilleBhreac', 'MacGilleChaluim', 'MacGilleChrìosd', 'MacGilleDhonaghart', 'MacGilleDhuibh', 'MacGilleFhialain', 'MacGilleGhlais', 'MacGilleMhartainn', 'MacGilleRiabhaich', 'MacGilleSeathanaich', 'MacGilleathain', 'MacGiobain', 'MacGlaisein', 'MacGobhainn', 'MacGoraidh', 'MacGriogair', 'MacGuaire', 'MacGumaraid', 'MacIain', 'MacIllÌmheir', 'MacIllÌosa', 'MacIll\'Éidich', 'MacIll\'Eòin', 'MacIll\'Fhaolain', 'MacIll\'Fhialain', 'MacIll\'Fhinnein', 'MacIll\'Fhionndaig', 'MacIll\'osa', 'MacIllAnndrais', 'MacIllAodhagain', 'MacIllDheòra', 'MacIllEarnain', 'MacIllEasbaig', 'MacIllEathain', 'MacIllFhaolagain', 'MacIllFheargain', 'MacIllFhionndain', 'MacIllIanain', 'MacIllIomchadha', 'MacIllOnchon', 'MacIllOnfhaidh', 'MacIllUidhir', 'MacIlleBhàin', 'MacIlleBheathain', 'MacIlleBhlàthain', 'MacIlleBhràth', 'MacIlleBhrìghde', 'MacIlleBhris', 'MacIlleBhuidhe', 'MacIlleChaluim', 'MacIlleChatain', 'MacIlleChathbhaidh', 'MacIlleChiar', 'MacIlleChiarain', 'MacIlleChomhghain', 'MacIlleChonaill', 'MacIlleChrìosd', 'MacIlleChruim', 'MacIlleDhòmhnaich', 'MacIlleDhonaghart', 'MacIlleDhubhthaich', 'MacIlleDhuibh', 'MacIlleDhuinn', 'MacIlleGhlais', 'MacIlleGhuinnein', 'MacIlleGhuirm', 'MacIlleMhàrtainn', 'MacIlleMhìcheil', 'MacIlleMhaoil', 'MacIlleMhearnaig', 'MacIlleMhoire', 'MacIlleNaoimh', 'MacIllePhàdraig', 'MacIllePheadair', 'MacIlleRiabhaich', 'MacIlleRuaidh', 'MacIlleSheathain', 'MacIlleSheathanaich', 'MacIlleSheathnaich', 'MacIlleThòmhais', 'MacIomhair', 'MacIonmhainn', 'MacIosaig', 'MacLùcaidh', 'MacLùcais', 'MacLabhrainn', 'MacLabhruinn', 'MacLachlainn', 'MacLagain', 'MacLamraich', 'MacLaomainn', 'MacLathagain', 'MacLeòid', 'MacLeòir', 'MacLianain', 'MacLiuthar', 'MacLothaidh', 'MacLughaidh', 'MacLuinge', 'MacLuirg', 'MacLulaich', 'MacMhànais', 'MacMhàrtainn', 'MacMhèinn', 'MacMhìcheil', 'MacMhòrdha', 'MacMhaighstir', 'MacMhanachain', 'MacMhannain', 'MacMhaoilein', 'MacMhaoirn', 'MacMhaolÌosa', 'MacMhaolBheatha', 'MacMhaolChaluim', 'MacMhaolDòmhnaich', 'MacMhaolagain', 'MacMhaolain', 'MacMharais', 'MacMharcais', 'MacMhata', 'MacMhatha', 'MacMhathain', 'MacMhiadhchain', 'MacMhoirein', 'MacMhorgain', 'MacMhuircheartaich', 'MacMhuirich', 'MacMhunna', 'MacMhurardaich', 'MacMhurchaidh', 'MacNèill', 'MacNìll', 'MacNaois', 'MacNaomhain', 'MacNeacail', 'MacNeachdain', 'MacNeis', 'MacNia', 'MacNiallghais', 'MacNiallghuis', 'MacNiocail', 'MacNobaill', 'MacPhàdraig', 'MacPhàic', 'MacPhàidein', 'MacPhàil', 'MacPhàrlain', 'MacPhòil', 'MacPhaid', 'MacPhaidein', 'MacPhail', 'MacPhairce', 'MacPheadair', 'MacPheadarain', 'MacPheadrais', 'MacPheidearain', 'MacPhilip', 'MacRàild', 'MacRìdeinn', 'MacRìgh', 'MacRabaidh', 'MacRaghnaill', 'MacRaibeirt', 'MacRaoimhin', 'MacRaoiridh', 'MacRaonaill', 'MacRath', 'MacRiada', 'MacRiocaird', 'MacRisnidh', 'MacRob', 'MacRobaidh', 'MacRoibeirt', 'MacRoithridh', 'MacRuairidh', 'MacRusachainn', 'MacShìm', 'MacShanndaidh', 'MacSheòrais', 'MacSheòrsa', 'MacShealbhaigh', 'MacShimidh', 'MacShithich', 'MacShitrig', 'MacShomhairle', 'MacShuibhne', 'MacSiridh', 'MacSporain', 'MacSuain', 'MacSual', 'MacThàmhais', 'MacThòmais', 'MacThaidhg', 'MacTheàrlaich', 'MacThom', 'MacThomaidh', 'MacThorcadail', 'MacThorcaill', 'MacTiridh', 'MacTuirc', 'MacUalraig', 'MacUaraig', 'MacUchtraigh', 'MacUilleim', 'MacUirigh', 'MacUisdein', 'MacUrardaidh', 'MacUrardaigh', 'MacUrchadain', 'MacUrchaidh', 'MacUsbaig', 'Maoileanach', 'MaolIosa', 'Maolanach', 'Matasan', 'Mathanach', 'Matharnach', 'Mawr, Maor', 'Moireach', 'Moireasdan', 'Moireasdanach', 'Morgan', 'Morganach', 'Munna', 'Niocalsan', 'O\'Brolchain', 'O\'Cain', 'O\'Luingeachain', 'Padarsan', 'Paorach', 'Peadarsan', 'Peucag', 'Peutan', 'Preas', 'Puidreach', 'Ròs', 'Ròsach', 'Rathais', 'Robasan', 'Robasdan', 'Roid', 'Roideach', 'Ros', 'Rosach', 'Rothach', 'Ruadh', 'Ruiseal', 'Sùdrach', 'Sailcirc', 'Salmond', 'Seadh', 'Seadhg', 'Seagha', 'Seaghach', 'Seathanach', 'Sgèin', 'Sginnearach', 'Sgot', 'Singleir', 'Siosal', 'Siosalach', 'Smios', 'Stiùbhart', 'Stiùbhartach', 'Sutharlainn', 'Sutharlan', 'Suthurlanach', 'Tàileach', 'Tàillear', 'Talmhach', 'Tod', 'Todt', 'Tolmach', 'Tuairnear', 'Tulach', 'Ualas', 'Umphraidh', 'Urchadainn', 'Urchardan'];

  const names1 = type === 1 ? namesFemale : namesMale;


  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd1]}`;
    return names;
  }
}
