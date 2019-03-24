export default function celtic_welshs() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Aberthol', 'Adda', 'Aeron', 'Afan', 'Aidan', 'Alan', 'Aled', 'Alun', 'Alwyn', 'Amhar', 'Amlawdd', 'Amlodd', 'Amren', 'Amynedd', 'Andreas', 'Aneirin', 'Aneurin', 'Anwas', 'Anwill', 'Anwir', 'Anwyl', 'Anyon', 'Ap', 'Arawn', 'Arfon', 'Arnall', 'Aron', 'Arthur', 'Arthwr', 'Artur', 'Arwel', 'Arwyn', 'Awstin', 'Badan', 'Baddon', 'Baeddan', 'Baglen', 'Barri', 'Bedo', 'Bedwyr', 'Bedyw', 'Beinon', 'BeliMawr', 'Berian', 'Berwyn', 'Bevan', 'Bevin', 'Bleddyn', 'Bradwen', 'Bradwr', 'Brychan', 'Bryn', 'Bryne', 'Brynmor', 'Brys', 'Bwlch', 'Cadarn', 'Cadawg', 'Cadel', 'Cadell', 'Cadfael', 'Cadman', 'Cadog', 'Cadwaladr', 'Cadwallen', 'Cadwgan', 'Cadwgawn', 'Cadwy', 'CaerLlion', 'Caerau', 'Caerwyn', 'Cai', 'Caio', 'Calcas', 'Caledfwlch', 'Camedyr', 'Caradawg', 'Caradoc', 'Caradog', 'Carian', 'Caron', 'Carwyn', 'Caswallawn', 'Cayo', 'Cedrik', 'Cedwyn', 'Cefni', 'Celyn', 'Cennydd', 'Cenwyn', 'Ceredig', 'Ceri', 'Cled', 'Cledwyn', 'Cranog', 'Crwys', 'Custenhin', 'Cybi', 'Cymry', 'Cynbel', 'Cynedyr', 'Cynog', 'Cynychwr', 'Dafydd', 'Dai', 'Darren', 'Deiniol', 'Delwin', 'Delwyn', 'Derec', 'Derfel', 'Deri', 'Derwen', 'Derwyn', 'Dewey', 'Dewi', 'Dirrnyg', 'Dremidydd', 'Drystan', 'Drywsone', 'Dyfan', 'Dyfed', 'Dyfi', 'Dyfri', 'Dyfrug', 'Dylan', 'Dywel', 'Edryd', 'Edwyn', 'Efrog', 'Eifion', 'Einian', 'Eirwyn', 'Elfyn', 'Elgan', 'Elgar', 'Elis', 'Elwyn', 'Emhyr', 'Emlyn', 'Emrys', 'Emyr', 'Ergyriad', 'Ermid', 'Erwin', 'Eryi', 'Eudav', 'Eurion', 'Evrawg', 'Fychan', 'Garanhon', 'Garanwyn', 'Gareth', 'Garnoc', 'Garth', 'Garwyli', 'Gawain', 'Geraint', 'Gerallt', 'Gerwyn', 'Gethin', 'Gilvaethwy', 'Glanmor', 'Glyn', 'Glynn', 'Goreu', 'Goronwy', 'Govannon', 'Gowyr', 'Griff', 'Griffeth', 'Griffith', 'Gruddyeu', 'Gruffin', 'Gruffudd', 'Gruffydd', 'Grufudd', 'Guto', 'Gwalchmai', 'Gwalchmei', 'Gwallawg', 'Gwallter', 'Gwaun', 'Gwawl', 'Gwayne', 'Gweir', 'Gwenallt', 'Gwent', 'Gwenwynwyn', 'Gwern', 'Gwili', 'Gwilym', 'Gwion', 'Gwres', 'Gwri', 'Gwydion', 'Gwydyon', 'Gwyn', 'Gwyndaf', 'Gwynfor', 'Gwyngad', 'Gwynlais', 'Gwynn', 'Harri', 'Hedd', 'Heddwyn', 'Hefin', 'Heilyn', 'Heini', 'Hopcyn', 'Howel', 'Huarwar', 'Hueil', 'Huw', 'Huwcyn', 'Hywel', 'Iago', 'Ianto', 'Iau', 'Iddawg', 'Idris', 'Idwal', 'Iestyn', 'Ieuan', 'Ifan', 'Ifor', 'Ioan', 'Iolo', 'Iorath', 'Iorwerth', 'Iorweth', 'Irfon', 'Islwyn', 'Iver', 'Ivor', 'Iwan', 'Jac', 'Jesstin', 'Kenyon', 'Kerwin', 'Kerwyn', 'Kyffin', 'Kyledyr', 'Kynwyl', 'Lewys', 'Llacheu', 'Llassar', 'Lleu', 'Llew', 'Llewellyn', 'Llion', 'Llwyd', 'Llyr', 'Llywelyn', 'Luc', 'Lyn', 'Mabon', 'Mabsant', 'Macsen', 'Maddock', 'Madog', 'Mael', 'Maelgwyn', 'Maelog', 'Maelon', 'Maelor', 'Mal', 'Maldwyn', 'Marc', 'Maredudd', 'Martyn', 'Medwyn', 'Medyr', 'Meic', 'Meilir', 'Meilyg', 'Meilyr', 'Meirion', 'Mercher', 'Meredith', 'Meredudd', 'Meredydd', 'Merfyn', 'Meridith', 'Merion', 'Merlin', 'Mervyn', 'Merwyn', 'Meurig', 'Mihangel', 'Morcan', 'Moren', 'Morgan', 'Morlais', 'Morthwyl', 'Morys', 'Myrddin', 'Myrddyn', 'Neifion', 'Nerthach', 'Newyddilyn', 'Niclas', 'Ninian', 'Nudd', 'Ofydd', 'Osian', 'Oswallt', 'Owain', 'Owein', 'Owen', 'Owin', 'Padrig', 'Pawl', 'Pedr', 'Pennant', 'Penvro', 'Phylip', 'Powell', 'Preece', 'Price', 'Pryderi', 'Prydwen', 'Prys', 'Reece', 'Reese', 'Rhain', 'Rhion', 'Rhisiart', 'Rhobat', 'Rhobert', 'Rhodri', 'Rhun', 'Rhychdir', 'Rhydian', 'Rhydwyn', 'Rhys', 'Robat', 'Rodric', 'Saer', 'Saith', 'Samlet', 'Sawel', 'Seimon', 'Seith', 'Selwyn', 'Seth', 'Siams', 'Siarl', 'Siawn', 'Sion', 'Sioni', 'Steffan', 'Steffon', 'Sulwyn', 'Syvwlch', 'Talfryn', 'Taliesin', 'Tecwyn', 'Teifion', 'Teilo', 'Telor', 'Terfel', 'Tewdwr', 'Tomi', 'Tomos', 'Trahaearn', 'Trefor', 'Tristan', 'Tristram', 'Tristyn', 'Trystan', 'Tudful', 'Tudor', 'Tudur', 'Twm', 'Twrgadarn', 'Uchdryd', 'Vaddon', 'Watcyn', 'Wil', 'Wmffre', 'Wyn', 'Wynford', 'Wynn', 'Ynyr', 'Ysberin'];
  const namesFemale = ['Aberfa', 'Addfwyn', 'Aderyn', 'Aelwen', 'Aelwyd', 'Aeres', 'Aerona', 'Aeronwen', 'Alaw', 'Alis', 'Alwen', 'Alwena', 'Alys', 'Amser', 'Aneira', 'Anest', 'Angharad', 'Anna', 'Annest', 'Anwen', 'Anwyn', 'Arglwyddes', 'Arian', 'Ariana', 'Arianrhod', 'Arianwen', 'Artaith', 'Arwen', 'Arwydd', 'Aures', 'Awen', 'Awsta', 'Beca', 'Begw', 'Berthog', 'Bethan', 'Beti', 'Betrys', 'Betsan', 'Blodeuwedd', 'Blodwen', 'Blodwyn', 'Braith', 'Brangwen', 'Brangwy', 'Branwen', 'Branwenn', 'Branwyn', 'Brenda', 'Briallen', 'Bronwen', 'Bronwyn', 'Buddug', 'Cadi', 'Cadwyn', 'Caitlyn', 'Callwen', 'Caniad', 'Cari', 'Caron', 'Carwen', 'Caryl', 'Carys', 'Catelyn', 'Cati', 'Catrin', 'Ceinwen', 'Ceirios', 'Ceri', 'Cerian', 'Ceridwen', 'Cerys', 'Clwyd', 'Cothi', 'Cranogwen', 'Creiddylad', 'Cristyn', 'Cymreiges', 'Daere', 'Dafina', 'Delwen', 'Delyth', 'Derwen', 'Deryn', 'Difyr', 'Dilys', 'Dona', 'Dwynwen', 'Dwysil', 'Ebrill', 'Efa', 'Eheubryd', 'Eiddwen', 'Eilian', 'Eiluned', 'Eilwen', 'Eira', 'Eirian', 'Eiriana', 'Eirianedd', 'Eiriol', 'Eirlys', 'Eirwen', 'Elain', 'Elan', 'Elen', 'Elena', 'Elenydd', 'Eleri', 'Elin', 'Elinor', 'Elliw', 'Eluned', 'Elwyn', 'Eneuawg', 'Enfys', 'Enrhydreg', 'Erdudvyl', 'Erin', 'Eryn', 'Esyllt', 'Eurneid', 'Eurolwyn', 'Eurwen', 'Fanw', 'Ffanci', 'Ffion', 'Fflur', 'Ffraid', 'Fioled', 'Gaenor', 'Garwen', 'Gaynor', 'Gladys', 'Glain', 'Glenda', 'Glenys', 'Glesni', 'Glyn', 'Glynis', 'Glynnis', 'Goewyn', 'Grug', 'Guinevere', 'Gwaeddan', 'Gwanwyn', 'Gwawr', 'Gwen', 'Gwenabwy', 'Gwenant', 'Gwendolen', 'Gwendoline', 'Gwendolyn', 'Gweneth', 'Gwenfrewy', 'Gwenifer', 'Gwenith', 'Gwenledyr', 'Gwenllian', 'Gwennalarch', 'Gwennan', 'Gwenyth', 'Gwladys', 'Gwlithen', 'Gwylan', 'Gwyn', 'Gwynedd', 'Gwynefa', 'Gwynes', 'Gwyneth', 'Gwynn', 'Haf', 'Hafren', 'Hafwen', 'Heledd', 'Heulwen', 'Ifanna', 'Ina', 'Iola', 'Iona', 'Iorwen', 'Irwen', 'Isolde', 'Jestine', 'Leri', 'Lili', 'Liliwen', 'Llian', 'Llinos', 'Llion', 'Lona', 'Lowri', 'Luned', 'Lyn', 'Lyneth', 'Lynn', 'Lynne', 'Mabli', 'Mabyn', 'Madlen', 'Maegan', 'Maeryn', 'Mai', 'Mair', 'Mairead', 'Mairwen', 'Mali', 'Mallt', 'Manod', 'Manon', 'Maredudd', 'Marged', 'Margred', 'Mari', 'Mati', 'Maygan', 'Medi', 'Megan', 'Meggan', 'Meinir', 'Meinwen', 'Meleri', 'Men', 'Meredydd', 'Mererid', 'Mona', 'Morgaine', 'Morgana', 'Morgann', 'Morvudd', 'Morwen', 'Morwenna', 'Morwyn', 'Myfanawy', 'Myfanwy', 'Myfi', 'Nerys', 'Nest', 'Nesta', 'Nia', 'Non', 'Olwen', 'Olwenna', 'Olwina', 'Olwyn', 'Olwyna', 'Owena', 'Penarddun', 'Prydwen', 'Rhedyn', 'Rhiain', 'Rhian', 'Rhiannon', 'Rhona', 'Rhonwen', 'Rhoslyn', 'Rhoswen', 'Saeth', 'Sara', 'Seirian', 'Seren', 'Sian', 'Siani', 'Siany', 'Sioned', 'Siriol', 'Siwan', 'Sulwyn', 'Tagwen', 'Tangwen', 'Tanwen', 'Tegan', 'Tegwen', 'Tegyd', 'Teleri', 'Telyn', 'Terrwyn', 'Tirion', 'Tonwen', 'Valmai', 'Winnie', 'Wyn', 'Wynne', 'Ysbail'];
  const names2 = ['Arthur', 'Bebb', 'Bennett', 'Bevan', 'Beynon', 'Bowen', 'Broderick', 'Brodrick', 'Cadogan', 'Cadwalader', 'Cadwallader', 'Cecil', 'Charles', 'Daniels', 'David', 'Davies', 'Dawes', 'Edwards', 'Ellis', 'Evans', 'Francis', 'George', 'Gethin', 'Gibbs', 'Gower', 'Griffin', 'Griffith', 'Griffiths', 'Gronow', 'Gwyn', 'Gwynne', 'Harries', 'Harry', 'Howell', 'Howells', 'Hughes', 'Humphreys', 'Humphries', 'Isaac', 'Isaacs', 'James', 'Jeffries', 'Jenkins', 'John', 'Jones', 'Lewis', 'Llewellyn', 'Lloyd', 'Mabbet', 'Maddock', 'Maddocks', 'Madox', 'Mathias', 'Meredith', 'Morgan', 'Morris', 'Moses', 'Owen', 'Parry', 'Pendry', 'Penry', 'Pew', 'Phillips', 'Phrys', 'Pierce', 'Powell', 'Preece', 'Price', 'Pritchards', 'Pritchett', 'Prosser', 'Prothero', 'Rees', 'Reese', 'Rhys', 'Richards', 'Roberts', 'Rosser', 'Rowlands', 'Tanner', 'Thomas', 'Tudor', 'Vaughan', 'Walters', 'Watkins', 'Webb', 'Williams', 'Windsor', 'Arthur', 'Bach', 'Badder', 'Badders', 'Badham', 'Baines', 'Bainum', 'Balch', 'Barry', 'Batch', 'Baughan', 'Baughn', 'Beavin', 'Beddoe', 'Beddow', 'Bees', 'Beese', 'Bellin', 'Belling', 'Bellis', 'Belvin', 'Bennion', 'Bethel', 'Bethell', 'Bevan', 'Bevans', 'Beynon', 'Binion', 'Binner', 'Binnion', 'Bithell', 'Biven', 'Bivens', 'Bivin', 'Bivins', 'Blaney', 'Blethen', 'Blevens', 'Blevins', 'Bliven', 'Blood', 'Blower', 'Bloyd', 'Boal', 'Boliver', 'Bonner', 'Bowell', 'Bowen', 'Bowens', 'Breckon', 'Brice', 'Brickell', 'Broadus', 'Broderick', 'Brodrick', 'Bryn', 'Brys', 'Buell', 'Bugh', 'Bunner', 'Caddell', 'Caddick', 'Cadigan', 'Cadle', 'Cadogan', 'Cadwalader', 'Cadwallader', 'Caleb', 'Camm', 'Cardiff', 'Carew', 'Carey', 'Cattell', 'Cecil', 'Charles', 'Clough', 'Cloyd', 'Cogan', 'Comey', 'Conway', 'Corfield', 'Cornog', 'Coslett', 'Couch', 'Craddock', 'Crowder', 'Dacus', 'David', 'Davies', 'Day', 'Days', 'Dee', 'Dew', 'Dewey', 'Dey', 'Edris', 'Elias', 'Elijah', 'Elley', 'Ellis', 'Enoch', 'Erwood', 'Esau', 'Evan', 'Evans', 'Evanson', 'Evens', 'Eynon', 'Faughn', 'Firth', 'Fithen', 'Flint', 'Flower', 'Floyd', 'Gaynor', 'Geddings', 'George', 'Gethin', 'Gettings', 'Gibby', 'Gittings', 'Gittins', 'Glace', 'Glas', 'Glasco', 'Glascock', 'Glasscock', 'Glines', 'Glynn', 'Goff', 'Gotch', 'Gough', 'Gower', 'Greenway', 'Griff', 'Griffin', 'Griffith', 'Griffiths', 'Guild', 'Guilliams', 'Gurganus', 'Gwilliam', 'Gwyn', 'Gwynn', 'Gwynne', 'Hanes', 'Hanmer', 'Hargest', 'Harley', 'Harries', 'Harris', 'Harvard', 'Havard', 'Heaven', 'Hennion', 'Hewitt', 'Hier', 'Hire', 'Hovey', 'Howell', 'Howells', 'Hughes', 'Humphreys', 'Humphries', 'Idle', 'Isaac', 'Isaacks', 'Isaacs', 'Issac', 'Jack', 'John', 'Jones', 'Keelan', 'Kemble', 'Kendrick', 'Kenefick', 'Kenrick', 'Kerry', 'Kindrick', 'Lace', 'Lanman', 'Lewis', 'Lewison', 'Llewellyn', 'Llewelyn', 'Lloyd', 'Maddex', 'Maddix', 'Maddock', 'Maddocks', 'Maddox', 'Maddux', 'Maddy', 'Mathias', 'Mattick', 'Mattix', 'Mattocks', 'Mattox', 'Maurice', 'Meredith', 'Merrick', 'Meylor', 'Moor', 'Moore', 'Mordecai', 'More', 'Morgan', 'Morgans', 'Moris', 'Morris', 'Morse', 'Mortimer', 'Moses', 'Moss', 'Mostyn', 'Mower', 'Moyle', 'Myricks', 'Nanney', 'Nest', 'Nevitt', 'Nist', 'Oliver', 'Onion', 'Owen', 'Owens', 'Palin', 'Parcel', 'Parcell', 'Parcells', 'Parry', 'Peairs', 'Pearce', 'Pembroke', 'Pendry', 'Pennoyer', 'Penrose', 'Penry', 'Perry', 'Pew', 'Pewitt', 'Pierce', 'Poovey', 'Popkin', 'Povey', 'Powe', 'Powell', 'Powles', 'Poyner', 'Preddy', 'Preece', 'Price', 'Prichard', 'Prichett', 'Priddy', 'Pride', 'Pritchard', 'Pritchett', 'Probert', 'Prosser', 'Prothero', 'Protheroe', 'Prothro', 'Prowell', 'Pryce', 'Pryde', 'Pugh', 'Pumphrey', 'Purcell', 'Pye', 'Rease', 'Reece', 'Rees', 'Reese', 'Reuben', 'Rhees', 'Rhoderick', 'Rice', 'Roderick', 'Rosser', 'Samson', 'Samuel', 'Sare', 'Sayer', 'Scurlock', 'Sealy', 'Sear', 'Seff', 'Shone', 'Stackpole', 'Stackpoole', 'Stant', 'Stealey', 'Sundy', 'Swavely', 'Taaffe', 'Teague', 'Tennis', 'Tew', 'Trahern', 'Treharne', 'Trevor', 'Tudor', 'Uren', 'Urian', 'Vaughan', 'Vaughn', 'Voiles', 'Voils', 'Voyles', 'Wathen', 'Wiliams', 'Wogan', 'Wren', 'Wynn', 'Wynne', 'Yale', 'Yarwood'];

  const names1 = type === 1 ? namesFemale : namesMale;


  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd2]}`;
    return names;
  }
}
