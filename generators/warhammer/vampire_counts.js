export default function vampire_counts() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abram', 'Aleks', 'Aleksandr', 'Aleksei', 'Andrei', 'Anton', 'Artem', 'Artemiy', 'Artur', 'Bogdan', 'Boris', 'Boyan', 'Branis', 'Damir', 'David', 'Demian', 'Dimi', 'Dimitri', 'Dmitri', 'Dobro', 'Dobromir', 'Edgar', 'Georgiy', 'Gera', 'Gleb', 'Grigoriy', 'Igor', 'Igorek', 'Ilik', 'Ilya', 'Iosif', 'Isaak', 'Ivan', 'Jaromir', 'Jora', 'Karl', 'Klav', 'Klavdiy', 'Krasimir', 'Kusma', 'Lazar', 'Luka', 'Lukyan', 'Makar', 'Maks', 'Mikhail', 'Milan', 'Milomir', 'Milor', 'Milorad', 'Miron', 'Misha', 'Niko', 'Nikolay', 'Oleg', 'Osip', 'Potap', 'Prokhor', 'Radomir', 'Radoslav', 'Rasim', 'Rati', 'Ratibor', 'Ratimir', 'Rodion', 'Rodya', 'Roma', 'Roman', 'Ruslan', 'Rustem', 'Sambor', 'Sava', 'Semyon', 'Slava', 'Stanimir', 'Stanislav', 'Stas', 'Stepan', 'Timofey', 'Timur', 'Vad', 'Vadik', 'Vadim', 'Valya', 'Velimir', 'Vic', 'Victor', 'Vik', 'Viktor', 'Vitomir', 'Vitya', 'Vlad', 'Vladan', 'Vladimir', 'Vova', 'Yakov', 'Yan', 'Yanka', 'Yaroslav', 'Yasha', 'Yefim', 'Yefrem', 'Yegor', 'Yuliy', 'Yura', 'Yuri', 'Yuriy', 'Zinoviy'];
  const nm2 = ['Agata', 'Agnessa', 'Aleksandra', 'Aline', 'Alisa', 'Alla', 'Alya', 'Alyona', 'Amalia', 'Ana', 'Anastasia', 'Angela', 'Ania', 'Anna', 'Anya', 'Arina', 'Asya', 'Daria', 'Dasha', 'Diana', 'Dunya', 'Edita', 'Ekaterina', 'Elena', 'Emiliya', 'Evgenia', 'Frosya', 'Galina', 'Galya', 'Grusha', 'Ida', 'Inga', 'Ira', 'Irina', 'Janna', 'Jenya', 'Kalina', 'Karina', 'Karolina', 'Katya', 'Klara', 'Lada', 'Lana', 'Lara', 'Lena', 'Lera', 'Lesya', 'Lida', 'Lidia', 'Lilia', 'Lilya', 'Lisa', 'Ludmila', 'Luiza', 'Lyuba', 'Lyuda', 'Maria', 'Marianna', 'Marina', 'Marisya', 'Mariya', 'Marta', 'Masha', 'Matryosha', 'Maya', 'Mila', 'Milyena', 'Mira', 'Miroslava', 'Nadya', 'Nastya', 'Natalia', 'Natasha', 'Nina', 'Nyura', 'Oksana', 'Olesya', 'Olga', 'Olya', 'Polina', 'Polya', 'Rada', 'Raina', 'Raisa', 'Raya', 'Roza', 'Sara', 'Sasha', 'Shura', 'Slavena', 'Sofia', 'Sonya', 'Stella', 'Sveta', 'Svetlana', 'Tamara', 'Tanya', 'Tatiana', 'Tereza', 'Tonya', 'Ulyana', 'Valentina', 'Valera', 'Valya', 'Varya', 'Vasilisa', 'Vera', 'Veronika', 'Vika', 'Viktoriana', 'Viola', 'Vlada', 'Yana', 'Yeva', 'Yulia', 'Yuliana', 'Yuliya', 'Zina', 'Zoya', 'Zoyka'];
  const nm3 = ['Aach', 'Abegg', 'Abend', 'Abendroth', 'Aberbach', 'Abetz', 'Abicht', 'Abs', 'Abt', 'Achenbach', 'Achleitner', 'Ackner', 'Adelman', 'Adler', 'Adorf', 'Ahle', 'Ahrendt', 'Aichele', 'Aigner', 'Albiker', 'Albrecht', 'Alt', 'Alterman', 'Altermann', 'Altmann', 'Altschul', 'Amann', 'Ammann', 'Ammermann', 'Amsel', 'Anderle', 'Anschütz', 'Apel', 'Apfelbaum', 'Arendt', 'Armbruster', 'Arneth', 'Arnold', 'Arnoldi', 'Aschenbrener', 'Assing', 'Auch', 'Auer', 'Auerbach', 'Auernheimer', 'Auerswald', 'Auffarth', 'Augenstein', 'Augsberger', 'Aumann', 'Aumeier', 'Auspitz', 'Aust', 'Austerlitz', 'Bäcker', 'Bähr', 'Bär', 'Bärwald', 'Bäumler', 'Böckler', 'Bödeker', 'Böhm', 'Böhme', 'Böhmer', 'Böhnisch', 'Bönsch', 'Börner', 'Börngen', 'Böttger', 'Bötticher', 'Büchel', 'Büchner', 'Bühl', 'Bürger', 'Baade', 'Baader', 'Baar', 'Baasch', 'Babo', 'Bach', 'Bacharach', 'Bachmann', 'Bachmayer', 'Backer', 'Backhaus', 'Baer', 'Bahnsen', 'Bahr', 'Bain', 'Balmer', 'Bamberger', 'Band', 'Bartels', 'Bartram', 'Bartsch', 'Bartz', 'Basinger', 'Bastian', 'Baten', 'Bauer', 'Bauernfeind', 'Baum', 'Bauman', 'Baumann', 'Baumeister', 'Baumer', 'Baumhauer', 'Baumstein', 'Bauschinger', 'Becherer', 'Bechtel', 'Bechtholdt', 'Bechtold', 'Beck', 'Becken', 'Beckenbauer', 'Becker', 'Beckermann', 'Beckers', 'Beckmann', 'Beer', 'Behm', 'Behr', 'Behrend', 'Behrends', 'Behrendt', 'Behrmann', 'Beitz', 'Bendel', 'Bennewitz', 'Berchtold', 'Bergen', 'Berger', 'Bergius', 'Bergler', 'Bergmann', 'Berkel', 'Berkhoff', 'Berlepsch', 'Berlin', 'Bernauer', 'Bernbaum', 'Berninger', 'Bernstein', 'Berthold', 'Bessemer', 'Bethmann', 'Beutler', 'Biel', 'Bier', 'Bierbaum', 'Bierkamp', 'Bierwirth', 'Binder', 'Bing', 'Binger', 'Birken', 'Birnbaum', 'Bischof', 'Bischoff', 'Bitterlich', 'Bittermann', 'Blücher', 'Blacher', 'Blanke', 'Blankenburg', 'Blatt', 'Blattner', 'Blaustein', 'Blecher', 'Bleich', 'Blobel', 'Bloch', 'Blocher', 'Blomberg', 'Bluhm', 'Blum', 'Blumberg', 'Blumenberg', 'Blumenfeld', 'Blumenkrantz', 'Blumenthal', 'Blumentritt', 'Blumhardt', 'Bode', 'Boden', 'Bodenheimer', 'Bodenschatz', 'Bodenstein', 'Bodmer', 'Boeckmann', 'Boehm', 'Boettcher', 'Bohlen', 'Bohm', 'Bohn', 'Bolender', 'Boll', 'Bopp', 'Borchers', 'Bormann', 'Bornemann', 'Bott', 'Brötzmann', 'Brack', 'Brahm', 'Brahms', 'Brandeis', 'Brandis', 'Brandler', 'Brandstätter', 'Brandt', 'Brauer', 'Braun', 'Braunbeck', 'Braune', 'Brauner', 'Braunlich', 'Braunstein', 'Brausewetter', 'Brecher', 'Brecht', 'Breitner', 'Brenner', 'Breslau', 'Breslauer', 'Brestrich', 'Bretschneider', 'Breuer', 'Breytenbach', 'Brickner', 'Brockhaus', 'Brodmann', 'Bronner', 'Bronstein', 'Brosch', 'Bruckmann', 'Brugmann', 'Bruhn', 'Bruhns', 'Brunke', 'Brunner', 'Buchardt', 'Buchberger', 'Buchheim', 'Buchholz', 'Buchman', 'Buchner', 'Buchtel', 'Buchwald', 'Buckler', 'Buhler', 'Busch', 'Busemann', 'Bussler', 'Buttmann', 'Buxbaum', 'Carstens', 'Cassirer', 'Christmann', 'Clasen', 'Clauberg', 'Conzelmann', 'Corcilius', 'Cornfeld', 'Cossmann', 'Cranz', 'Creuzburg', 'Cronenberg', 'Cullmann', 'Curschmann', 'Döhl', 'Dörflinger', 'Dümmler', 'Dünhaupt', 'Dahlke', 'Dahmen', 'Dahmer', 'Dahn', 'Dalman', 'Daluege', 'Danneberg', 'Dannecker', 'Danzig', 'Daschner', 'Dassler', 'Dedekind', 'Degen', 'Degener', 'Dehne', 'Dehnert', 'Deichgräber', 'Delbrück', 'Dellinger', 'Denker', 'Denzel', 'Denzinger', 'Derfflinger', 'Desch', 'Dessauer', 'Destinn', 'Detmold', 'Deutsch', 'Deutscher', 'Deutschmann', 'Diederich', 'Diekwisch', 'Diemer', 'Dieterich', 'Dietrich', 'Dillinger', 'Dinter', 'Dischinger', 'Distel', 'Distler', 'Dittrich', 'Doerr', 'Dohna', 'Dorfmann', 'Dorn', 'Drach', 'Drache', 'Drachmann', 'Dreifuss', 'Drescher', 'Drewes', 'Drexler', 'Dreyfus', 'Dreyfuss', 'Drossel', 'Ducke', 'Duden', 'Eberl', 'Eckstein', 'Edelmann', 'Edelstein', 'Egner', 'Ehlers', 'Ehman', 'Ehmann', 'Ehrenbaum', 'Ehrenberg', 'Ehrenfeld', 'Ehrenfest', 'Ehrenpreis', 'Ehrenreich', 'Ehrenstein', 'Ehrhardt', 'Ehrler', 'Ehrlinger', 'Ehrmann', 'Eibenschütz', 'Eich', 'Eichberg', 'Eichel', 'Eichelbaum', 'Eichenberg', 'Eichenwald', 'Eicher', 'Eichhorn', 'Eichinger', 'Eichler', 'Eichmann', 'Eichwald', 'Eicke', 'Einhorn', 'Einstein', 'Eisen', 'Eisenberg', 'Eisenberger', 'Eisenmann', 'Eisenmenger', 'Eisenstadt', 'Eisenstein', 'Eisner', 'Ellmenreich', 'Elser', 'Elsner', 'Elssler', 'Emmerich', 'Engel', 'Engelberg', 'Engelberger', 'Engelhardt', 'Engelmann', 'Engels', 'Enzenauer', 'Enzensberger', 'Erdmann', 'Erhard', 'Erlach', 'Erlbaum', 'Eschenbach', 'Escherich', 'Essen', 'Esser', 'Essig', 'Ettlinger', 'Eugster', 'Eulenburg', 'Euler', 'Fähnrich', 'Fährmann', 'Fünten', 'Fürst', 'Fürstenberg', 'Faas', 'Fabricius', 'Faehlmann', 'Faehrmann', 'Faerber', 'Fahr', 'Fahrenheit', 'Falck', 'Falkenberg', 'Fassbender', 'Faulhaber', 'Faulstich', 'Fechner', 'Fechter', 'Fehr', 'Fehrenbach', 'Feig', 'Feigenbaum', 'Feigenspan', 'Feilhaber', 'Fein', 'Feinberg', 'Feininger', 'Feistel', 'Feit', 'Felder', 'Felgenhauer', 'Fellerer', 'Fellgiebel', 'Fellner', 'Felsenbaum', 'Fenchel', 'Fendler', 'Ferber', 'Fersen', 'Feuchtwanger', 'Feuerstein', 'Feuerwerker', 'Feulner', 'Feyerabend', 'Fichte', 'Fichtner', 'Fieber', 'Fiedler', 'Finck', 'Fincke', 'Fink', 'Finke', 'Finkel', 'Fisch', 'Fischart', 'Fischbacher', 'Fischbein', 'Fischer', 'Fischinger', 'Fischler', 'Fitkau', 'Fittkau', 'Flügel', 'Fleck', 'Fleischhacker', 'Fleischman', 'Fleischmann', 'Fleiss', 'Fleming', 'Flesch', 'Florstedt', 'Fröhlich', 'Franck', 'Francke', 'Frank', 'Franke', 'Frankenburg', 'Franz', 'Freisler', 'Freitag', 'Frenz', 'Frenzel', 'Fresenius', 'Freudenberg', 'Freudenberger', 'Freudenstein', 'Freudenthal', 'Freund', 'Freundel', 'Freundlich', 'Frey', 'Freytag', 'Fric', 'Fried', 'Friedberg', 'Friedberger', 'Friedeberg', 'Friedel', 'Friedemann', 'Friedl', 'Friedrich', 'Fries', 'Friesinger', 'Frisch', 'Froese', 'Fromm', 'Frosch', 'Frucht', 'Fuchs', 'Funke', 'Furrer', 'Furstenfeld', 'Furtwängler', 'Fux', 'Göbel', 'Görder', 'Göring', 'Götz', 'Güldenstädt', 'Günzburg', 'Gaertner', 'Ganser', 'Gansz', 'Ganz', 'Ganzfried', 'Gebauer', 'Gebhardt', 'Gegenbauer', 'Gehrig', 'Gehring', 'Gehrke', 'Geier', 'Geiger', 'Geller', 'Gellner', 'Gerhardt', 'Gering', 'Germann', 'Germar', 'Gerson', 'Gerstäcker', 'Gerstacker', 'Gerstaecker', 'Gerstenberg', 'Gerster', 'Gerstmann', 'Gerstner', 'Geschke', 'Geschwind', 'Gesner', 'Gessler', 'Gessner', 'Geyer', 'Gildemeister', 'Gilger', 'Gilges', 'Glöckner', 'Glück', 'Glas', 'Glasser', 'Glehn', 'Glockenton', 'Gmehling', 'Goebel', 'Goedde', 'Goethe', 'Goldberg', 'Goldberger', 'Goldblatt', 'Goldblum', 'Goldenberg', 'Goldfarb', 'Goldfeld', 'Goldhaber', 'Goldreich', 'Goldscheider', 'Goldschmidt', 'Goldstein', 'Goldwasser', 'Gollwitzer', 'Gottesman', 'Gottfried', 'Gottlieb', 'Gottschalk', 'Gottschall', 'Gräbner', 'Grün', 'Grünbaum', 'Grünberg', 'Grünfeld', 'Grünspan', 'Grabner', 'Gradl', 'Graebner', 'Graf', 'Gramlich', 'Grasshoff', 'Grassl', 'Grau', 'Grebel', 'Greifelt', 'Grendel', 'Gressmann', 'Griebel', 'Grimminger', 'Grisbaum', 'Grob', 'Grohl', 'Gross', 'Grosskopf', 'Grossman', 'Groth', 'Grothmann', 'Gruber', 'Grundmann', 'Grunebaum', 'Gustloff', 'Gutenberg', 'Gutfreund', 'Gutheil', 'Guttenberg', 'Guttmacher', 'Gyrowetz', 'Häberli', 'Hämmerli', 'Hänel', 'Härig', 'Häring', 'Häussler', 'Höffner', 'Höfle', 'Höger', 'Höhmann', 'Hölder', 'Hölderlin', 'Höller', 'Hönig', 'Hönigberg', 'Hönigmann', 'Hönigsberg', 'Hönigsmann', 'Hönigswald', 'Höss', 'Hössler', 'Hülsen', 'Haarmann', 'Haas', 'Haass', 'Haber', 'Haberkorn', 'Haberlin', 'Habermann', 'Habich', 'Habicht', 'Hacke', 'Hackenholt', 'Hackl', 'Haeberle', 'Haerig', 'Haering', 'Haeusser', 'Hafer', 'Hagedorn', 'Hagel', 'Hagelstein', 'Hagemeister', 'Hagmann', 'Hahn', 'Hahne', 'Hahnel', 'Hahnemann', 'Halberstam', 'Hamburg', 'Hamburger', 'Hammerl', 'Hammerschmidt', 'Hammerstein', 'Hammesfahr', 'Handke', 'Handmann', 'Hanfstaengl', 'Hanisch', 'Hannawald', 'Hanneman', 'Hannig', 'Hansch', 'Hanselmann', 'Hantzsch', 'Happe', 'Hardt', 'Harig', 'Haring', 'Harms', 'Harnisch', 'Harrer', 'Hartig', 'Hartjenstein', 'Hartknoch', 'Hartl', 'Hartleben', 'Hartlieb', 'Hartmann', 'Hartstein', 'Hartwich', 'Haselberger', 'Haselrieder', 'Hasenclever', 'Hass', 'Hassel', 'Hasselbach', 'Hasselhoff', 'Hassell', 'Hasselmann', 'Hasselvander', 'Hassler', 'Hattenberger', 'Hattendorf', 'Hauck', 'Hauer', 'Hauffe', 'Haugwitz', 'Hauke', 'Hauschka', 'Hauser', 'Haushofer', 'Hausmann', 'Haussegger', 'Hauswald', 'Hautzig', 'Havenstein', 'Hebrang', 'Hecher', 'Hechler', 'Hecht', 'Heck', 'Hecke', 'Hecker', 'Hector', 'Heerwagen', 'Heffelfinger', 'Hegeler', 'Hegewald', 'Heidemann', 'Heiden', 'Heidenreich', 'Heider', 'Heidler', 'Heidrich', 'Heilbronn', 'Heilbronner', 'Heilmann', 'Heilmeier', 'Heilprin', 'Heim', 'Heimsoth', 'Heine', 'Heinecke', 'Heineken', 'Heinemann', 'Heiner', 'Heinig', 'Heinrich', 'Heinsohn', 'Heinz', 'Heisenberg', 'Heisig', 'Heissler', 'Heitler', 'Heitmann', 'Heitmeyer', 'Heitz', 'Helbig', 'Heldmann', 'Heldt', 'Heller', 'Hellmann', 'Hellmuth', 'Hellwig', 'Helmke', 'Hencke', 'Hengsbach', 'Hengstler', 'Henlein', 'Hennig', 'Henninger', 'Henschel', 'Henze', 'Henzler', 'Hepner', 'Herber', 'Herberger', 'Herbig', 'Herder', 'Herdrich', 'Hergenröther', 'Herig', 'Hering', 'Herkenhoff', 'Hermann', 'Herr', 'Herreshoff', 'Herrlein', 'Hersch', 'Herschel', 'Herschlag', 'Hersh', 'Hertel', 'Hertner', 'Hertrich', 'Hertzberg', 'Hertzfeld', 'Hertzog', 'Herwig', 'Herz', 'Herzberg', 'Herzfeld', 'Herzig', 'Herzog', 'Herzsprung', 'Hess', 'Hesse', 'Hessel', 'Hettich', 'Hettinger', 'Hetz', 'Heuberger', 'Heumann', 'Heun', 'Heuser', 'Heydrich', 'Hielscher', 'Hilbert', 'Hildebrandt', 'Hillebrand', 'Hilscher', 'Himmelblau', 'Himmelfarb', 'Himmler', 'Hinrichs', 'Hippler', 'Hirsch', 'Hirschl', 'Hirtreiter', 'Hitzig', 'Hochberg', 'Hochheim', 'Hochmeister', 'Hoehman', 'Hoehmann', 'Hoelder', 'Hoelscher', 'Hoenigberg', 'Hoenigsberg', 'Hoess', 'Hofbauer', 'Hoffman', 'Hoffmann', 'Hoffmeister', 'Hofmeister', 'Hofstetter', 'Hohenlohe', 'Hohenstein', 'Hohmann', 'Holderbaum', 'Holderman', 'Holdermann', 'Holighaus', 'Holthusen', 'Holtz', 'Holtzmann', 'Holweck', 'Holz', 'Holzer', 'Holzhausen', 'Homann', 'Homburg', 'Homrighausen', 'Honig', 'Honigberg', 'Honigman', 'Honigmann', 'Honigsberg', 'Honigsman', 'Honigsmann', 'Hopf', 'Hopfer', 'Hopfner', 'Horkheimer', 'Horn', 'Hornberger', 'Hornbostel', 'Horstmann', 'Huber', 'Huhn', 'Huppert', 'Husch', 'Hutto', 'Huwyler', 'Idelson', 'Imhoff', 'Jäger', 'Jürgens', 'Jahn', 'Jahnke', 'Janke', 'Jentzsch', 'Joachim', 'Johner', 'Jonas', 'Jonke', 'Jost', 'Josten', 'Jung', 'Junkermann', 'Kändler', 'Kästner', 'Käutner', 'Köhler', 'Köler', 'König', 'Köppen', 'Körte', 'Körver', 'Köstler', 'Köstner', 'Küchler', 'Kühn', 'Kühne', 'Kümmel', 'Künneth', 'Künstler', 'Kürschner', 'Küttner', 'Kachel', 'Kadelburg', 'Kahl', 'Kahler', 'Kahn', 'Kaiser', 'Kalkbrenner', 'Kallenbach', 'Kaltenbrunner', 'Kammerer', 'Kampf', 'Kamphaus', 'Kant', 'Kantner', 'Kantorowicz', 'Kaplan', 'Kapp', 'Kapsner', 'Kasper', 'Kass', 'Kassebaum', 'Katterfeld', 'Katz', 'Katzen', 'Katzenbach', 'Katzmann', 'Kaufmann', 'Kaulbach', 'Kaulen', 'Kaulitz', 'Kautz', 'Kayserling', 'Kehlmann', 'Kehrer', 'Keilberth', 'Keiner', 'Keitel', 'Keller', 'Kellermann', 'Kellner', 'Kempf', 'Kepler', 'Keppler', 'Kersting', 'Kesselman', 'Kesselring', 'Kessler', 'Kestenbaum', 'Ketterer', 'Keyserling', 'Kieber', 'Kiefer', 'Kieffer', 'Kielholz', 'Kiesel', 'Kiesewetter', 'Kiesinger', 'Kiesling', 'Kindl', 'Kindler', 'Kippenberger', 'Kipping', 'Kirchner', 'Kirchweger', 'Kirchwey', 'Kirsch', 'Kirschbaum', 'Kirschenbaum', 'Kirstein', 'Kisling', 'Kissling', 'Kistler', 'Kittel', 'Klügmann', 'Klaproth', 'Klauber', 'Klebs', 'Klee', 'Kleiber', 'Klein', 'Kleiner', 'Kleinfeld', 'Kleinheisterkamp', 'Kleinman', 'Kleinmann', 'Klemm', 'Klemme', 'Klemperer', 'Klempner', 'Klengel', 'Klepper', 'Kling', 'Klinger', 'Klinghoffer', 'Klippel', 'Klopfer', 'Klopp', 'Klopstock', 'Klostermann', 'Klotz', 'Kluck', 'Kluckhohn', 'Klugman', 'Klugmann', 'Knacke', 'Knauer', 'Knirsch', 'Knoerr', 'Kober', 'Koch', 'Kocher', 'Koegel', 'Koehler', 'Koehne', 'Koeppen', 'Kogler', 'Kohl', 'Kohlberg', 'Kohlhaase', 'Kohlhase', 'Kohlmann', 'Kohnstamm', 'Kohring', 'Kolb', 'Kollmann', 'Korholz', 'Korn', 'Kornberg', 'Kornblum', 'Kornfeder', 'Kornfeld', 'Korngold', 'Kornhäusel', 'Korsch', 'Kossmann', 'Kott', 'Kottmann', 'Krämer', 'Krüger', 'Kracht', 'Krahl', 'Krakouer', 'Krampitz', 'Kranefuss', 'Krantz', 'Kranz', 'Kratochwil', 'Kraus', 'Krause', 'Krauser', 'Krauss', 'Krausser', 'Krauszer', 'Krebs', 'Krehl', 'Kreisel', 'Kremers', 'Krenkel', 'Kresge', 'Kresinger', 'Kretschmer', 'Kreutzberg', 'Kreutzwald', 'Krieger', 'Krier', 'Kringel', 'Krist', 'Kroeger', 'Kroemer', 'Kroll', 'Kromer', 'Kronenberg', 'Kronthaler', 'Kruckenberg', 'Krueger', 'Kruger', 'Krukenberg', 'Kruspe', 'Kuchler', 'Kuechler', 'Kuhn', 'Kummer', 'Kunst', 'Kuntz', 'Kupferblum', 'Kurrat', 'Kuttner', 'Löffler', 'Löw', 'Lüthi', 'Laar', 'Lachner', 'Lachs', 'Lafrenz', 'Lampadius', 'Landau', 'Landauer', 'Landsberg', 'Landsberger', 'Landsteiner', 'Lang', 'Lange', 'Lasch', 'Lasker', 'Lattke', 'Latzke', 'Laube', 'Lauer', 'Laufer', 'Lauterbach', 'Lay', 'Lechner', 'Lehman', 'Lehmann', 'Lehmbruck', 'Lehmkuhl', 'Lehner', 'Lehning', 'Lehr', 'Lehrer', 'Leiber', 'Leiner', 'Leistner', 'Leitgeb', 'Leitner', 'Lemann', 'Lemberger', 'Lemmer', 'Lerch', 'Lerche', 'Lerner', 'Lettmann', 'Letzel', 'Leupold', 'Lewisohn', 'Lexer', 'Lexis', 'Licht', 'Lichtenberger', 'Lichtenfels', 'Lichtenstein', 'Lichter', 'Lichtwark', 'Liebehenschel', 'Lieber', 'Liebermann', 'Lieblein', 'Lilienthal', 'Lindauer', 'Lindemann', 'Lindenbaum', 'Lindenlaub', 'Lindner', 'Lindwurm', 'Lingenfelter', 'Linse', 'Lippert', 'Lips', 'Lischke', 'Lissauer', 'Littauer', 'Lobe', 'Lochte', 'Loeb', 'Loewe', 'Lohmüller', 'Lohmiller', 'Loos', 'Loosli', 'Lorber', 'Lorenz', 'Lotz', 'Lowenstam', 'Ludecke', 'Ludwig', 'Lulling', 'Lustenberger', 'Lutz', 'Lux', 'Luxenberg', 'Möhring', 'Müller', 'Münch', 'Münchberg', 'Müntefering', 'MacNicol', 'Macher', 'Madelung', 'Mader', 'Madritsch', 'Mahlau', 'Mahler', 'Maibaum', 'Maier', 'Mair', 'Maisel', 'Mallwitz', 'Mandelbaum', 'Mandl', 'Mangels', 'Mangold', 'Mann', 'Mannheim', 'Mannheimer', 'Manteuffel', 'Marks', 'Martin', 'Marx', 'Masing', 'Masur', 'Mathesius', 'Matthes', 'Maurer', 'Mauss', 'May', 'Mayenburg', 'Mayer', 'Mayr', 'Mayrhofer', 'Meckler', 'Meidner', 'Meindl', 'Meissner', 'Mencken', 'Mengelberg', 'Mengele', 'Menke', 'Mensing', 'Mergenthaler', 'Merkel', 'Mertz', 'Merz', 'Messerschmidt', 'Metternich', 'Metze', 'Metzger', 'Metzinger', 'Meyer', 'Meyr', 'Miete', 'Mittag', 'Mitter', 'Mittermaier', 'Mittermeier', 'Mohnhaupt', 'Mohr', 'Moldenhauer', 'Molitor', 'Mommsen', 'Morgentaler', 'Morgenthau', 'Moritz', 'Moser', 'Mozart', 'Much', 'Mucke', 'Mueller', 'Muff', 'Mummert', 'Muntz', 'Musäus', 'Myers', 'Myrthenbaum', 'Nägelein', 'Nachtigal', 'Nachtigall', 'Nadelman', 'Nadelmann', 'Nadler', 'Nagelberg', 'Naumann', 'Nebe', 'Neff', 'Nemetz', 'Nessel', 'Nesselrode', 'Nessler', 'Neubauer', 'Neubert', 'Neuer', 'Neufeld', 'Neugebauer', 'Neuhäuser', 'Neuhäusser', 'Neuhaeuser', 'Neuhaeusser', 'Neuhaus', 'Neuheuser', 'Neumann', 'Neumark', 'Neumayer', 'Neuner', 'Nickel', 'Niebuhr', 'Niedenthal', 'Niedermayer', 'Niedermeyer', 'Niehaus', 'Niekisch', 'Niemeyer', 'Niephaus', 'Nimitz', 'Nitzsch', 'Noffke', 'Noske', 'Nosske', 'Nostitz', 'Nothnagel', 'Nottebohm', 'Nowitzki', 'Nussbaum', 'Ober', 'Oberhauser', 'Oberlander', 'Obst', 'Ochs', 'Ochsner', 'Oehlenschläger', 'Oesau', 'Ohlendorf', 'Ohly', 'Olberding', 'Olbrich', 'Oldenberg', 'Opitz', 'Oppelt', 'Oppenheim', 'Oppert', 'Oppolzer', 'Orndorff', 'Ortmann', 'Osswald', 'Osterhaus', 'Otto', 'Outman', 'Pöge', 'Pölzl', 'Pöpel', 'Pückler', 'Paasche', 'Pabst', 'Palitzsch', 'Palme', 'Palotás', 'Pankau', 'Panzer', 'Panzinger', 'Parler', 'Pasche', 'Pauli', 'Peltzer', 'Pelzer', 'Peters', 'Petzold', 'Peucker', 'Peukert', 'Pfaff', 'Pfeffer', 'Pfefferberg', 'Pfeiffer', 'Pfennig', 'Pfister', 'Pfisterer', 'Pfitzner', 'Pichler', 'Pickler', 'Pilc', 'Pilcz', 'Piltz', 'Pilz', 'Pilzer', 'Platz', 'Plesner', 'Plessner', 'Pohl', 'Poland', 'Pollmächer', 'Porsche', 'Posse', 'Potthast', 'Pröll', 'Pracht', 'Prager', 'Prantl', 'Preis', 'Preisner', 'Preiss', 'Preissner', 'Preiszner', 'Priesner', 'Proch', 'Prochnow', 'Pruefer', 'Quaschny', 'Quattlebaum', 'Quint', 'Rädler', 'Rödl', 'Röhr', 'Rösch', 'Rösler', 'Röthke', 'Rühl', 'Rühle', 'Raab', 'Raabe', 'Rabe', 'Raddatz', 'Rademacher', 'Rader', 'Radnitz', 'Radnitzer', 'Raedler', 'Rahmer', 'Rahner', 'Ramberg', 'Rasch', 'Rasche', 'Rathenau', 'Ratzenberger', 'Ratzinger', 'Raupach', 'Rausch', 'Rauschenberg', 'Rauscher', 'Rechcigl', 'Reder', 'Redler', 'Redlich', 'Reeder', 'Reger', 'Rehberg', 'Rehder', 'Rehn', 'Reich', 'Reichart', 'Reichen', 'Reichenau', 'Reichenbach', 'Reichleitner', 'Reichmann', 'Reichwein', 'Reimann', 'Reimold', 'Reinhard', 'Reinhardt', 'Reinhart', 'Reinmann', 'Reiter', 'Reitter', 'Reitz', 'Reubke', 'Reuter', 'Rheingold', 'Ribbeck', 'Ribbentrop', 'Richter', 'Rickenbacker', 'Riedel', 'Riederer', 'Riegel', 'Rieger', 'Riehl', 'Riemann', 'Riemenschneider', 'Riesch', 'Riess', 'Riesz', 'Rimensberger', 'Rinder', 'Ritschel', 'Ritter', 'Robisch', 'Rodenberg', 'Roehr', 'Roemheld', 'Rogge', 'Rohmer', 'Rohr', 'Rohrbach', 'Rohrmann', 'Romberg', 'Rommel', 'Rorer', 'Rosen', 'Rosenbaum', 'Rosenberger', 'Rosenblatt', 'Rosenblum', 'Rosenbluth', 'Rosenfeld', 'Rosengart', 'Rosengarten', 'Rosenhain', 'Rosenkranz', 'Rosenstock', 'Rosenthal', 'Rosenzweig', 'Rosin', 'Ross', 'Rossel', 'Rossmann', 'Roth', 'Rothberg', 'Rothenstein', 'Rothman', 'Rothmann', 'Rott', 'Rottmann', 'Rottmanner', 'Rowohlt', 'Rozenkwit', 'Rudel', 'Ruhl', 'Rutter', 'Söllner', 'Sacher', 'Sachs', 'Sack', 'Sackler', 'Saft', 'Saks', 'Salzer', 'Samter', 'Sanner', 'Sattler', 'Saudek', 'Sauer', 'Sauerbeck', 'Sauerbruch', 'Sauerbrunn', 'Sauerland', 'Saxer', 'Schädler', 'Schöler', 'Schöll', 'Schön', 'Schönau', 'Schönbaum', 'Schönbeck', 'Schönbein', 'Schönberger', 'Schönborn', 'Schöner', 'Schönfeld', 'Schönfinkel', 'Schönfisch', 'Schönherr', 'Schönlein', 'Schöpfer', 'Schünemann', 'Schürer', 'Schürmann', 'Schütz', 'Schützenberger', 'Schaab', 'Schaber', 'Schachner', 'Schachtschneider', 'Schaefer', 'Schaeffer', 'Schantz', 'Schanz', 'Schaper', 'Scharf', 'Scharff', 'Scharwenka', 'Schatz', 'Schau', 'Schauer', 'Schauerte', 'Schaumann', 'Schaus', 'Schechter', 'Scheck', 'Schedl', 'Scheerbart', 'Scheffel', 'Scheffler', 'Scheibel', 'Scheid', 'Scheidel', 'Scheidemann', 'Scheider', 'Scheiner', 'Scheller', 'Schellscheidt', 'Schenk', 'Scherer', 'Scherler', 'Scherrer', 'Scherzer', 'Scherzinger', 'Scheu', 'Scheuer', 'Scheuermann', 'Scheurer', 'Schichau', 'Schickedanz', 'Schickendantz', 'Schiefer', 'Schieffer', 'Schiele', 'Schierokauer', 'Schiff', 'Schiffer', 'Schiffner', 'Schild', 'Schildenfeld', 'Schilder', 'Schildhauer', 'Schildknecht', 'Schildkraut', 'Schiller', 'Schilling', 'Schillinger', 'Schimpf', 'Schimpff', 'Schimscheiner', 'Schindler', 'Schinkel', 'Schirlitz', 'Schirmer', 'Schlüter', 'Schlag', 'Schlamme', 'Schlechter', 'Schleibaum', 'Schleiermacher', 'Schlesinger', 'Schlessinger', 'Schlick', 'Schlim', 'Schlitz', 'Schlosser', 'Schmadel', 'Schmeichel', 'Schmeller', 'Schmerling', 'Schmetterling', 'Schmid', 'Schmidt', 'Schmidtke', 'Schmied', 'Schmiedeberg', 'Schmitt', 'Schmitz', 'Schmuck', 'Schnabel', 'Schneider', 'Schneiderman', 'Schnell', 'Schneller', 'Schnitzer', 'Schnitzler', 'Schnorr', 'Schnyder', 'Schober', 'Schock', 'Schoeler', 'Schoenauer', 'Schoenberg', 'Schoenherr', 'Schoff', 'Scholl', 'Scholz', 'Schopenhauer', 'Schor', 'Schott', 'Schottel', 'Schottenstein', 'Schröpfer', 'Schrötter', 'Schrade', 'Schreber', 'Schreck', 'Schreiber', 'Schreiner', 'Schrempf', 'Schricker', 'Schroth', 'Schubert', 'Schuerer', 'Schuhbeck', 'Schulberg', 'Schulhof', 'Schulhoff', 'Schulman', 'Schult', 'Schulte', 'Schultz', 'Schultze', 'Schulz', 'Schulze', 'Schumacher', 'Schumann', 'Schur', 'Schurz', 'Schuster', 'Schutte', 'Schuttler', 'Schutz', 'Schwan', 'Schwann', 'Schwanthaler', 'Schwartz', 'Schwartzman', 'Schwartzmann', 'Schwarz', 'Schwarzenbach', 'Schwarzenberger', 'Schwarzenegger', 'Schwarzkopf', 'Schwarzman', 'Schwarzmann', 'Schwefel', 'Schwegler', 'Schweiger', 'Schweinitz', 'Schwender', 'Schwerdtfeger', 'Schwerin', 'Schwerner', 'Schwertfeger', 'Schwertner', 'Schwortz', 'Seck', 'Seckbach', 'Seeliger', 'Seelman', 'Seelmann', 'Seger', 'Segert', 'Sehlman', 'Sehlmann', 'Seidel', 'Seiden', 'Seidenstücker', 'Seidl', 'Seiler', 'Seitz', 'Selig', 'Semmelrogge', 'Semmler', 'Sendler', 'Senger', 'Sepp', 'Seppelt', 'Sessler', 'Seydel', 'Seyfried', 'Seyler', 'Siegel', 'Siemens', 'Silberbauer', 'Simmel', 'Simon', 'Simson', 'Singer', 'Slesinger', 'Sommer', 'Sommerfeld', 'Sondheim', 'Sonnenfeld', 'Spörl', 'Spahn', 'Spahr', 'Spanner', 'Specht', 'Speck', 'Speckmann', 'Speidel', 'Spener', 'Sperber', 'Sperl', 'Sperling', 'Spiegel', 'Spiegelmann', 'Spiegler', 'Spielberg', 'Spielmann', 'Spies', 'Spiess', 'Spindler', 'Spitz', 'Spitzer', 'Sprecher', 'Springborn', 'Springer', 'Stäbler', 'Stöcker', 'Stüber', 'Stadler', 'Stadtbäumer', 'Staebler', 'Staffel', 'Stahl', 'Stahlecker', 'Stahnke', 'Stamm', 'Stanger', 'Stangl', 'Starck', 'Starker', 'Stassen', 'Staudenmaier', 'Staudinger', 'Stauffer', 'Steichen', 'Steimle', 'Stein', 'Steinbach', 'Steinbacher', 'Steinbauer', 'Steinberg', 'Steinberger', 'Steiner', 'Steinhäuser', 'Steinhäusl', 'Steinhäusser', 'Steinhaeuser', 'Steinhaeusser', 'Steinhauer', 'Steinhauser', 'Steinheil', 'Steinitz', 'Steinmeyer', 'Steinsaltz', 'Steitz', 'Stellwagen', 'Stelzner', 'Stemmler', 'Stengel', 'Stengelin', 'Stentz', 'Stenzel', 'Steppuhn', 'Stern', 'Sternberg', 'Sternberger', 'Sternhell', 'Stettin', 'Steuermann', 'Steyer', 'Stickler', 'Stieler', 'Stier', 'Stirner', 'Stock', 'Stocker', 'Stockert', 'Stockhausen', 'Stockmann', 'Stoiber', 'Stoltenberg', 'Storch', 'Storl', 'Stosch', 'Strasburg', 'Strasburger', 'Strassmann', 'Straube', 'Strauch', 'Strauss', 'Straussler', 'Streckenbach', 'Strecker', 'Streicher', 'Stricker', 'Strittmatter', 'Strobel', 'Strobl', 'Stromberg', 'Strub', 'Stuhr', 'Stumpfegger', 'Suckow', 'Suhren', 'Sulzberger', 'Sulzer', 'Sundermann', 'Surmann', 'Sussman', 'Tangemann', 'Tanne', 'Tanneberger', 'Tannen', 'Tanzer', 'Tarr', 'Taschner', 'Taube', 'Tauber', 'Taubert', 'Taubman', 'Tausch', 'Tausche', 'Tauscher', 'Taussig', 'Tegeler', 'Teicher', 'Teichmüller', 'Teller', 'Tendler', 'Teschner', 'Tetzlaff', 'Teyber', 'Thälmann', 'Thalberg', 'Thalmann', 'Theil', 'Theiner', 'Theismann', 'Thiel', 'Thielemann', 'Thierse', 'Thimig', 'Thoma', 'Thomalla', 'Thomas', 'Thorn', 'Tiedemann', 'Tietjen', 'Tilgner', 'Tillich', 'Tisch', 'Tischbein', 'Tischendorf', 'Tischer', 'Tischler', 'Tischner', 'Toman', 'Totleben', 'Traeger', 'Traub', 'Traube', 'Trausch', 'Trauth', 'Treich', 'Treitschke', 'Tugendhat', 'Turnau', 'Uebelhoer', 'Ueberroth', 'Uffermann', 'Uhlmann', 'Uiberreither', 'Ullmann', 'Ullmer', 'Ullrich', 'Ulmer', 'Umlauf', 'Ungar', 'Unger', 'Ungerer', 'Ungers', 'Unterberger', 'Untermann', 'Uthman', 'Vahlen', 'Van Houten', 'Veidt', 'Veiel', 'Veil', 'Vetter', 'Viermetz', 'Vieweg', 'Visscher', 'Vogel', 'Vogelstein', 'Vogelweide', 'Vogt', 'Voight', 'Voigt', 'Voit', 'Vom Bruch', 'Von Bingen', 'Von Bothmer', 'Von Braun', 'Von Cocceji', 'Von Hardenberg', 'Von Meyer', 'Von Sydow', 'Von Weber', 'Vonhof', 'Vorgrimler', 'Wächter', 'Wächtler', 'Wöhler', 'Wölfflin', 'Wach', 'Wachs', 'Wachsmuth', 'Wachtel', 'Wachter', 'Wachtler', 'Wackernagel', 'Wagenknecht', 'Wagenseil', 'Wagner', 'Wahl', 'Wahle', 'Wahler', 'Wahrmann', 'Waibel', 'Walbaum', 'Walch', 'Wald', 'Waldmüller', 'Waldmann', 'Waldner', 'Waldow', 'Waldschmidt', 'Waldstein', 'Walker', 'Wall', 'Wallmann', 'Wallner', 'Wandesleben', 'Wank', 'Wanka', 'Wasser', 'Wassermann', 'Waxman', 'Weber', 'Wechsler', 'Wegener', 'Wegmann', 'Wegner', 'Wegscheider', 'Wehausen', 'Wehinger', 'Wehner', 'Weide', 'Weideman', 'Weidemann', 'Weidenmann', 'Weider', 'Weidmann', 'Weidner', 'Weigl', 'Weigle', 'Weinbacher', 'Weinbaum', 'Weinberg', 'Weinberger', 'Weindorf', 'Weiner', 'Weinfeld', 'Weingaertner', 'Weingand', 'Weingart', 'Weingartner', 'Weininger', 'Weinmann', 'Weinreb', 'Weinreich', 'Weinstein', 'Weinstock', 'Weintraub', 'Weinwurm', 'Weis', 'Weisgerber', 'Weishaupt', 'Weiskopf', 'Weiss', 'Weisser', 'Weisskopf', 'Weisz', 'Weitz', 'Weitzmann', 'Weiz', 'Weizenbaum', 'Weizmann', 'Welcker', 'Welker', 'Weller', 'Wellmann', 'Welser', 'Wendl', 'Wendland', 'Wendlinger', 'Weninger', 'Wentz', 'Wentzel', 'Wenz', 'Wenzel', 'Wepper', 'Werdin', 'Werfel', 'Werich', 'Werkner', 'Wernicke', 'Wernz', 'Wertheim', 'Werthner', 'Weschler', 'Wessely', 'Westermann', 'Westheimer', 'Wetter', 'Wexler', 'Wexner', 'Weyrauch', 'Wichterle', 'Wickler', 'Widmann', 'Wiedemann', 'Wiedenfeld', 'Wiedermann', 'Wiener', 'Wieseltier', 'Wieser', 'Wiesner', 'Wieters', 'Wildner', 'Wilhelm', 'Wilpert', 'Wimpffen', 'Windisch', 'Windischmann', 'Winkelhock', 'Winkler', 'Winter', 'Wintsch', 'Winzer', 'Wirth', 'Wirths', 'Wirz', 'Wissmann', 'Wittgenstein', 'Wittich', 'Witting', 'Wittke', 'Woerfel', 'Wolf', 'Wolfensohn', 'Wolff', 'Wolfsohn'];


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
