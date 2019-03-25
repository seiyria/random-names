export default function shonas() {
  let rnd;

  let rnd2;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Akadzva (Success)', 'Anesu (He Is With Us)', 'Baba (Father)', 'Bastirai (Help Each Other)', 'Bhudhi (Brother)', 'Biria (Gathering)', 'Buve (Spider)', 'Chamunorwa (What Are You Fighting For?)', 'Chenjerai (Be Wise)', 'Chidao (Praise Name)', 'Chidawo (Sub-Clan Name)', 'Chikomborero (Blessing)', 'Chipinduka (Returning)', 'Chipo (Gift)', 'Chisi (Holiday)', 'Dakarai (Rejoice)', 'Dambanyika (Power)', 'Diindingwe (Cheetah)', 'Dunzvi (Chief\'s Nephew)', 'Dzingai (Chase Away)', 'Dziva (Water)', 'Edzai (Try)', 'Farai (Be Happy)', 'Fungai (Think)', 'Funganayi (Remember Each Other)', 'Garai (Stay)', 'Garikai (Have A Good Life)', 'Gondo (Eagle)', 'Goridhe (Gold)', 'Hamadziripi (Where Is Everybody?)', 'Hatitye (We Are Not Afraid)', 'Hosho (Rattle)', 'Hungwe (Eagle)', 'Hupenyu (Life)', 'Ibwe (Stone Builder)', 'Ingwe (Leopard)', 'Irikidzayi (Add Another One)', 'Isheanesu (God Is With Us)', 'Itai (Do)', 'Iwe (You)', 'Izibongo (Royal Praise)', 'Jekuche (Very Old Shona)', 'Jongwe (Rooster)', 'Kapomba (Old Name)', 'Kariba (Trap)', 'Karikoga (One Who Is On His Own)', 'Kuchema (To Cry)', 'Kuda (To Love)', 'Kudakwashe (Will Of God)', 'Kudiwanashe (To Be Loved By God)', 'Kudzanai (Show Respect)', 'Kudzoka (To Come Back)', 'Kuenda (To Go)', 'Kumbirai (Boy)', 'Kupakwashe (The Giving Of The Lord)', 'Kuseka (To Laugh)', 'Kusvika (To Arrive)', 'Kutamba (To Dance)', 'Kuziva (Knowing)', 'Maguri (Maize)', 'Makomborero (Blessing)', 'Mambo (King)', 'Manenji (Miracle)', 'Mangwanani (Morning)', 'Masamba (Leaves)', 'Mauya (Welcome)', 'Mazomba (Great One)', 'Mbada (Leopard)', 'Mbira (Voice)', 'Mhara (Impala)', 'Mhuru (Calf)', 'Mhuvi (Elephant)', 'Moyo (Heart)', 'Muchafara (You Shall Be Happy)', 'Muchaneta (You Shall Be Tired)', 'Muchazvireva (You Will Say It)', 'Muchengeti (Protector)', 'Mudiwa (Beloved)', 'Mufaro (Happiness)', 'Munaki (Good One)', 'Munashe (God With Us)', 'Munashi (With God)', 'Munetsi (Troublesome One)', 'Munonzwa (You Hear God)', 'Munyai (Go Between)', 'Munyaradzi (Comforter)', 'Musafare (Don\'t Be Happy)', 'Mutungamiri (Leader)', 'Mutupo (Totem)', 'Muzukuru (Nephew)', 'Mweya (Soul)', 'Nashe (With God)', 'Ndinevimb (I Have Hope)', 'Nduma (Token Of Love)', 'Ngonidzashe (God’s Mercy)', 'Ngunzi (Bull)', 'Nhamo (Problems)', 'Nhamoinesu (We Have Serious Problems)', 'Nhoro (Antelope)', 'Nokutenda (With Thanks)', 'Nokutendaishe (We Are Grateful)', 'Nyasha (Grace)', 'Nyashadzashe (Blessing Of God)', 'Nyika (United)', 'Nzou (Elephant)', 'Onai (See)', 'Pikirayi (Promise)', 'Rambwa (Male Buffalo)', 'Rangarirai (Remember)', 'Rud ((Love)', 'Rudzi (Clan)', 'Rufaro (Joy)', 'Rukodzi (Hawk)', 'Rungano (Legend)', 'Rupenyu (Life)', 'Rutendo (Faith)', 'Samhuri (Family Head)', 'Shingai (Be Brave)', 'Shingirai (Be Brave)', 'Shumba (Lion)', 'Shungudzemwoyo (Yearnings Of The Heart)', 'Sikarudzi (Founding Ancestor)', 'Simba (Power)', 'Simbarashe (God’s Power)', 'Tadiwanashe (God Loves Us)', 'Tadzoka (We Have Returned)', 'Tafadzwa (We Are Pleased)', 'Tafara (We Rejoice)', 'Takaedza (We Tried)', 'Takakunda (We Are Victorious)', 'Takawira (We Have Fallen)', 'Takudzwa (We Have Been Honored)', 'Takunda (We Conquered)', 'Takura (We Are Grown Up)', 'Takwana (We Are Enough Now)', 'Tamai (To Move To A Better Place)', 'Tamuka (We Have Risen)', 'Tamutswa (We Have Been Awakened)', 'Tanaka (We Are Good)', 'Tangaikupashe (Give To The Lord First)', 'Tanunurwa (We Have Been Saved)', 'Taonatose (We Have All Seen)', 'Tapera (We Are Finished)', 'Tapfuma (We Are Rich)', 'Tapfumaneyi (What Has Made Us Rich?)', 'Tapiwa (Given)', 'Taremekedzwa (We Have Been Honored)', 'Tarirai (Look At)', 'Tariro (Hope)', 'Taropafadzwa (We Are Blessed)', 'Tashinga (We Are Brave)', 'Tashongedzwa (Beautification)', 'Tateguru (Father\'s Father)', 'Tatenda (Thank You)', 'Taurai (Talk)', 'Taurainashe (Talk To God)', 'Tauya (We Have Come)', 'Tavonga (With Thanks)', 'Tawana (We Have Found)', 'Tawedzegwa (There Is More Of Us)', 'Taziva (We Have Known)', 'Tazvitya (We Are Afraid)', 'Tendai  (Thank You)', 'Tendeka (Trusted One)', 'Tendekai (Be Faithful)', 'Terereai (Listen)', 'Tichafara (We Will Rejoice)', 'Tichaona (We Will See)', 'Tichatonga (We Will Rule This Country)', 'Tichayana (We Shall Agree)', 'Tinashe (God With Us)', 'Tinavo (We Are With Them)', 'Tinaye (We Are With God)', 'Tinoda (We Want)', 'Tinodaishe (We Love The Lord)', 'Tinomudaishe (We Thank The Lord)', 'Tinotenda (We Are Thankful)', 'Tinozivaishe (We Know God)', 'Tirivangani (How Many Are We?)', 'Todii (What Shall We Do?)', 'Tofara (We Are Happy)', 'Toitasei (What Shall We Do?)', 'Tomtenda (We Thank Him)', 'Tonderai (Remember)', 'Tongai (Rule)', 'Tsungirirai (Perseverance)', 'Tsuru ((Hare)', 'Tumai (Send)', 'Twiza ((Giraffe)', 'Uchi ((Honey)', 'Upenyu (Life)', 'Vudzijena (Grey Hair)', 'Wonai (See)', 'Zhou ((Elephant)', 'Zimba (House)', 'Zivai (Know)', 'Zivanai (Get To Know Each Other)', 'Zivorashe (The Lord\'s Knowledge)', 'Zvarevashe (What The Lord Has Said)', 'Zvinodaishe (What God Wants)', 'Zvionere (Look After Yourself)'];
  const nm2 = ['Aizivaishe (God Knew)', 'Akadzva (Success)', 'Anashe (With God)', 'Anatswanashe  Perfected By God)', 'Aneni (She Is With Me)', 'Anesu (She Is With Us)', 'Anesuishe (God With Us)', 'Anodiwa (Beloved)', 'Anokosha (She Is Precious)', 'Anoona (She Sees)', 'Anotida (She Loves Us)', 'Atidaishe (God Has Loved Us)', 'Auyanerudo (She Has Come With Love)', 'Batsirai (Help)', 'Biria (Gathering)', 'Chenai (Be Clean)', 'Chenesai (Make Clean)', 'Chengetai (Keep)', 'Chidao (Praise Name)', 'Chidiwa (Adorable)', 'Chido (Loved One)', 'Chidochashe (Will Of God)', 'Chiedza (Dawn)', 'Chipiwa (God Given)', 'Chipo (Gift)', 'Chipochashe (The Lord\'s Gift!)', 'Chiramwiwa (Abandoned)', 'Chiratidzo (Wonder)', 'Chishamiso (Miracle)', 'Chisi (Holiday)', 'Chivaraidzo (Something That Gives You Relaxation)', 'Chiwoniso (Vision)', 'Dadirai (Show Off)', 'Dadisai (Be Proud)', 'Dakarai (Rejoice)', 'Danai (Love Each Other)', 'Dova (Morning Dew)', 'Dudzai (Be Truthful)', 'Dziva (Water)', 'Edzai (Try)', 'Fadzai (Make Happy)', 'Farai (Rejoice)', 'Farirai (Find Joy)', 'Farisai (Be Very Happy)', 'Fudzayi (Lead)', 'Fungai (Think)', 'Fungisai (Think Well)', 'Gamuchirai (To Accept A Gift With Your Hands)', 'Gondayi (Trust)', 'Goridhe (Gold)', 'Haruperi (It Doesn’t End)', 'Hazvinei (It Doesn’t Matter)', 'Idai (Like)', 'Idai (Love Them)', 'Ipaishe (Give To God)', 'Isheanopa (God Gives)', 'Itai (Do)', 'Iwe (You)', 'Izibongo (Royal Praise)', 'Kama (Milk)', 'Katsiru (Female Cow)', 'Kitti (Cat)', 'Kubvoruno (Very Old Shona)', 'Kuchema (To Cry)', 'Kuda (To Love)', 'Kudakwake (God\'s Will)', 'Kudzai (Respect)', 'Kudzaishe (Respect God)', 'Kudzanai (Respect Each Other)', 'Kudzoka (To Come Back)', 'Kuenda (To Go)', 'Kufara (Happiness)', 'Kugarakunzwana (To Live Together Is To Find Peace)', 'Kunashe (God Is There)', 'Kundai (Overcome)', 'Kundiso (Victory)', 'Kuseka (To Laugh)', 'Kusvika (To Arrive)', 'Kutamba (To Play)', 'Kuzivakwashe  (God\'s Will)', 'Kwayedza (Sunrise)', 'Mai (Mother)', 'Maidei (What You Want)', 'Maitaishe (Thank You God)', 'Majaira (You Are Getting Used To This)', 'Makanaka (Good)', 'Makatendeka (God Is Faithful)', 'Mandida (You Love Me)', 'Mandiedza (You Have Tried Me)', 'Mangwanani (Morning)', 'Manyara (You Have Been Humbled)', 'Manyika (Thank You)', 'Marwei (Why Are You Fighting?)', 'Masamba (Leaves)', 'Matida (You Have Loved Us)', 'Matipa (You Have Given Us)', 'Matiroya (You Fixed Us)', 'Mavhu (Sand)', 'Mawanda (You Are Many)', 'Mazvita (Thank You)', 'Mbada (Leopord)', 'Mbeva (Mouse)', 'Mbira (Voice)', 'Meso (Eyes)', 'Mhara (Impala)', 'Moyo (Heart)', 'Muchafara (You Shall Be Happy)', 'Muchaneta (You Shall Be Tired)', 'Muchazvirega (You Will Stop This)', 'Muchero (Fruit)', 'Mudiwa (Loved One)', 'Mukaddzi (Wife)', 'Mukai (Arise)', 'Mukudzei (Praise God)', 'Munashe (God With Us)', 'Munodaani (Who Do You Like?)', 'Munopa (He Gives)', 'Munopashe (God Gives)', 'Musatye (Don\'t Be Afraid)', 'Musawenkosi (The Grace Of God)', 'Mutapa (Conquered Lands)', 'Mutsa (Mercy)', 'Mutsawashe (God’s Mercy)', 'Mwaita (Thank You)', 'Mweya (Soul)', 'Mwoyo (Heart)', 'Naishewedu (With Our God)', 'Nakai (Be Nice)', 'Natsai (Make Good)', 'Ndadzoka (I Am Back)', 'Ndafadzwa (I Am Happy)', 'Ndakasharwa (I Have Been Chosen)', 'Ndanatsei (Am I Good?)', 'Ndochii (What Is This)', 'Nduma (Token Of Love)', 'Netsai (Troublesome)', 'Ngaakudzwe (Praise The Lord)', 'Ngaatendwe (Give Thanks)', 'Ngonidzashe (God’s Mercy)', 'Nguvayake (In God\'s Time)', 'Nhambo (Hen)', 'Nhamburo (Many Troubles)', 'Nhamo (Trials)', 'Nhiriri (Wild Cat)', 'Njapa (Very Old Shona)', 'Njive (Dove)', 'Nomusa (Merciful)', 'Nyaradzai (Console)', 'Nyaradzo (Consolation)', 'Nyarai (Respect)', 'Nyararai (Be Quiet)', 'Nyasha (Mercy)', 'Nyemwererai (Smile)', 'Nyenganyenga  Swallow)', 'Nyengeterai (Pray For)', 'Nyenyedzi (Star)', 'Nyika (Unity)', 'Ona (See)', 'Onai (See)', 'Paidamoyo (Where The Heart Desired)', 'Pamhidzai (Repeat)', 'Panashe (Where There Is God)', 'Pepukai (Wake Up)', 'Pepukai (Be Aware)', 'Pfuma (Wealth)', 'Rangariraishe  Remember God)', 'Ratidzai (Show Someone)', 'Ratidzo (Vision)', 'Revesai (We Mean It)', 'Rindai (Take Care Of)', 'Ropafadzo (Blessing)', 'Rudairo (Faith)', 'Rudaviro (An Answer)', 'Rudo (Love)', 'Rudorwashe (God’s Love)', 'Rufaro (Joy)', 'Rujeko (Brilliance)', 'Rukudzo (Respect)', 'Rumbidzai (Worship)', 'Rungano (Story)', 'Runyararo (Peace)', 'Rupenyu (Life)', 'Ruponeso (Salvation)', 'Ruramisai (Make Right)', 'Rutendo (Thankful)', 'Ruvarashe (God\'s Flower)', 'Ruvimbo (Faith)', 'Ruwadzano (Togetherness)', 'Sadzamari (Income)', 'Sarudzai (Chosen One)', 'Sekai (Laugh)', 'Shamiso (Miracle)', 'Shindi (Squirrel)', 'Shingai (Perseverance)', 'Shingirirai (Perseverance)', 'Shorai (Criticize)', 'Shumba (Lioness)', 'Shungu (Ambitious)', 'Simba (Strength)', 'Simukai (Arise)', 'Tadisa (We\'ve Loved)', 'Tadiswanashe (We\'ve Been Loved By God)', 'Tadiwa (We\'re Loved)', 'Tadiwanashe (God Loves Us)', 'Tadziripa (We Have Paid)', 'Tafadzwa (We Are Happy)', 'Takaedza (We Tried)', 'Tambudzai (Trouble)', 'Tamirira (We\'re Waiting)', 'Tamupiwa (We\'ve Been Given)', 'Tanaka (Nice)', 'Tanatsa (Do Good)', 'Tanatswa (We\'ve Been Purified)', 'Tanyaradzwa (We\'ve Been Consoled)', 'Tapedza (We Have Finished)', 'Tapiwa (Given)', 'Tapiwanashe (Given By God)', 'Tapuwa (Given)', 'Tarirai (Look)', 'Tariro (Hope)', 'Tarisai (Here It Is)', 'Taropafadzwa (We\'re Blessed)', 'Tasimudzwa (God Has Lifted Us Up)', 'Tatadzei (What Went Wrong?)', 'Tatadzeiko (What Wrong Have We Done?)', 'Tatenda (Thank You)', 'Tauya (We Have Arrived)', 'Tawana (We Have Found)', 'Tawananyasha  We Have Found Grace)', 'Tawanda (We Are Many)', 'Tenda (To Give Thanks)', 'Tendai (Be Thankful)', 'Tese (Together)', 'Teuraiishe (Pray To God)', 'Tichaona (We Will See)', 'Timukudzei (Praise Him)', 'Tinash (We Are With The Lord)', 'Tinashe (We Are With The Lord)', 'Tinatsei (Make Us Pure)', 'Tinavo (We Are With Them)', 'Tinaye (We Are With God)', 'Tinevimbo (We Have Faith)', 'Tinopiwanashe (We Are Given By God)', 'Tinotenda (Thank You)', 'Tinotendaisheanesu (We Thank God For He Is With Us)', 'Tinozivaishe (We Know God)', 'Tiripo (Born In A Family Of Many Wives)', 'Tirivashe (We Belong To God)', 'Todii ((What Shall We Do?)', 'Toitasei (What Do We Need To Do?)', 'Tomupeishe (What Shall We Give God?)', 'Tozonziani (What Will They Call Us?)', 'Tsitsi (Mercy)', 'Tsungirirai (Perseverance)', 'Tsvakai (Look For) Name)', 'Tumai ((Send Us)', 'Uchi ((Honey)', 'Unopa (God Is A Giver)', 'Upenyu (Life)', 'Vambo (New Beginnings)', 'Vanesu (They Are With Us)', 'Varaidzo (Caring About Others)', 'Vatete (Aunt)', 'Veneka (Illuminate)', 'Vhenekerayi (Illuminate)', 'Vimbai (Have Faith)', 'Vimbainashe (Trust In God)', 'Vimbayi (Have Faith)', 'Vimbiso (Promise)', 'Vongai (Cherish)', 'Wadzanai (Live In Harmony)', 'Watida (He Has Loved Us)', 'Watidaishe (The Lord Has Loved Us)', 'Watinoda (The One We Love)', 'Wonai (See)', 'Yananiso (Togetherness)', 'Yemurai (Admire)', 'Yeukai (Remember)', 'Zuva (The Sun)', 'Zvaitwa (It Has Been Done)', 'Zvamaita (What God Has Done)', 'Zvanaka (It Is Well)', 'Zvanyadza (Ashamed)', 'Zviedzo (Temptations)', 'Zvikomborero (Blessings)', 'Zvinashe (It\'s With God)', 'Zvinodaishe (What God Wants)'];
  const nm3 = ['Asante', 'Buckle', 'Bulawayo', 'Carne', 'Chavunduka', 'Chigwedere', 'Chikerema', 'Chikuhwa', 'Chikwava', 'Chimusasa', 'Chimutengwende', 'Chinamano', 'Chinodya', 'Chinotimba', 'Chirau', 'Chiroto', 'Chitepo', 'Chiweshe', 'Chiyangwa', 'Coghlan', 'Croome', 'Dabengwa', 'Dangarembga', 'Dongo', 'Dulini', 'Dumbutshena', 'Eppel', 'Gappah', 'Gezi', 'Godwin', 'Gumbo', 'Gumede', 'Guti', 'Gwisai', 'Hatendi', 'Hunzvi', 'Jokonya', 'Jongwe', 'Kabweza', 'Kombayi', 'Kumbula', 'Kyagumbo', 'Madhuku', 'Magwa', 'Mahachi', 'Majabvi', 'Majange', 'Makwarimba', 'Malianga', 'Mangwende', 'Manyika', 'Marachera', 'Maraire', 'Masiyiwa', 'Masunda', 'Mathema', 'Matombo', 'Matonga', 'Matongo', 'Mawere', 'Mbangwa', 'Mhlanga', 'Midzi', 'Mkondo', 'Mkwananzi', 'Mnangagwa', 'Mnkandla', 'Moffat', 'Mombeshora', 'Moyo', 'Mtawarira', 'Mubako', 'Muchena', 'Muchinguri', 'Mudzuri', 'Mugabe', 'Mujuru', 'Mukonoweshuro', 'Mumbengegwi', 'Mungoshi', 'Mushohwe', 'Mushonga', 'Mutambara', 'Mutasa', 'Mutezo', 'Mutsekwa', 'Muzanenhamo', 'Muzenda', 'Muzorewa', 'Mwaruwari', 'Mwayenga', 'Ncube', 'Ndlovu', 'Nengomasha', 'Nhema', 'Nhiwatiw', 'Nkala', 'Nkomo', 'Nyambuya', 'Nyandoro', 'Olonga', 'Pocock', 'Rugeje', 'Rusere', 'Samkange', 'Shamuyarira', 'Shaw', 'Shumba', 'Sibanda', 'Sithole', 'Takawira', 'Tekere', 'Towungana', 'Tsvangirai', 'Tungamirai', 'Ullyet', 'Vera', 'Zvinavashe'];


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
