const stadtFakten = [
    {
        name: "Tokyo", land: "🇯🇵",
        fakten: "Tokyo ist technisch gesehen keine Stadt sondern eine Metropolpräfektur – die größte der Welt mit 37 Millionen Menschen. Das U-Bahn-Netz befördert täglich 8,7 Millionen Fahrgäste und ist so pünktlich, dass eine Verspätung von 60 Sekunden als Entschuldigung gilt. Tokios Fischmarkt Toyosu verkauft täglich über 700 Tonnen Meeresfrüchte. Die Stadt hat mehr Michelin-Sterne als Paris und New York zusammen."
    },
    {
        name: "London", land: "🇬🇧",
        fakten: "London war 2000 Jahre lang die größte Stadt der Welt – von der römischen Gründung als Londinium bis ins 19. Jahrhundert. Die Tube ist die älteste U-Bahn der Welt (1863) und hat 270 Stationen, von denen 29 nie benutzt werden – sogenannte Ghost Stations. Big Ben ist eigentlich der Name der Glocke, nicht des Turms. Der Turm heißt Elizabeth Tower. Unter London existiert ein geheimes Posttunnelnetz aus dem Jahr 1927."
    },
    {
        name: "New York", land: "🇺🇸",
        fakten: "New York war von 1785 bis 1790 die erste Hauptstadt der USA. Der Central Park ist so konzipiert dass man von keiner Stelle aus ein Gebäude sehen kann – reine Ingenieurskunst. Das New Yorker U-Bahn-System läuft 24/7 als einziges der Welt ohne Betriebspause. Unter Manhattan liegen über 50 km ungenutzter Tunnel. Der Spitzname 'Big Apple' stammt aus der Jazzszene der 1920er."
    },
    {
        name: "Paris", land: "🇫🇷",
        fakten: "Paris hat mehr Hunde als Kinder – statistisch 300.000 Hunde in der Stadt. Unter Paris existiert ein 300 km langes Katakombennetz mit den Gebeinen von 6 Millionen Menschen. Der Eiffelturm wird im Sommer 15 cm höher durch Wärmeausdehnung. Paris war im 19. Jahrhundert vollständig neu gebaut worden – Baron Haussmann ließ 60% der mittelalterlichen Stadt abreißen. Die Louvre hat so viele Kunstwerke dass man 100 Tage bräuchte um jedes 30 Sekunden zu betrachten."
    },
    {
        name: "Dubai", land: "🇦🇪",
        fakten: "Dubai hatte 1960 keine einzige asphaltierte Straße – heute ist es die Stadt mit den meisten Wolkenkratzern pro Kopf. Der Burj Khalifa ist so hoch dass man auf der Spitze den Sonnenuntergang sehen kann, dann mit dem Aufzug nach unten fahren und ihn nochmal sehen kann. 92% der Einwohner Dubais sind Ausländer. Das Dubai Mall Aquarium enthält 33.000 Meerestiere. Die Polizei fährt Lamborghini, Bugatti und Ferrari."
    },
    {
        name: "Sydney", land: "🇦🇺",
        fakten: "Sydney ist nicht die Hauptstadt Australiens – das ist Canberra, das 1908 als Kompromiss zwischen Sydney und Melbourne gebaut wurde. Das Opernhaus hat 1.000.000 Dachfliesen. Der Harbour Bridge-Bau dauerte 8 Jahre und kostete 16 Arbeitern das Leben. Sydney liegt auf einem der größten natürlichen Häfen der Welt mit 240 km Küstenlinie. Unter Sydney gibt es ein 170 km langes Tunnelnetz aus dem 2. Weltkrieg."
    },
    {
        name: "Berlin", land: "🇩🇪",
        fakten: "Berlin hat neunmal mehr Brücken als Venedig – über 1.700 Stück. Die Stadt war 28 Jahre durch die Mauer geteilt – heute verläuft eine Kopfsteinpflasterreihe durch die gesamte Stadt um den ehemaligen Verlauf zu markieren. Berlin hat die größte türkische Gemeinschaft außerhalb der Türkei. Das Berliner U-Bahn-Netz hat eine Station die sich heute noch in einem anderen Land befindet – Alexanderplatz hat DDR-Architektur die nie renoviert wurde. Berlin hat mehr Seen als Stockholm."
    },
    {
        name: "Mumbai", land: "🇮🇳",
        fakten: "Mumbai erzeugt 6% des indischen BIP auf nur 0,008% der Landesfläche. Die Dabbawalas – Lunchbox-Lieferanten – liefern täglich 200.000 Mahlzeiten mit einer Fehlerquote von 1 in 16 Millionen, was Harvard Business School analysiert und als Six Sigma zertifiziert hat. Mumbai war ursprünglich 7 separate Inseln die durch Landgewinnung verbunden wurden. Der Dharavi-Slum erzeugt 650 Millionen Dollar Jahresumsatz durch Kleinstbetriebe."
    },
    {
        name: "Shanghai", land: "🇨🇳",
        fakten: "Shanghai hat den schnellsten kommerziellen Zug der Welt – den Maglev mit 430 km/h. Die Stadt versinkt jährlich 2 cm ins Erdreich wegen des Grundwasserentzugs. In den 1930ern war Shanghai die kosmopolitischste Stadt der Welt – mehr Ausländer pro Kopf als heute New York. Das Finanzviertel Pudong existierte 1990 noch als Reisfelder. Shanghai hat mehr Wolkenkratzer als ganz Europa zusammen."
    },
    {
        name: "Cairo", land: "🇪🇬",
        fakten: "Kairo ist die größte Stadt Afrikas und des Nahen Ostens mit 21 Millionen Menschen. Die Pyramiden von Gizeh liegen so nah an der Stadt dass man sie vom Stadtrand aus sehen kann – sie sind keine isolierte Wüstenanlage. Khan el-Khalili Basar existiert seit 1382 ohne Unterbrechung. Unter Kairo liegt eine 4.000 Jahre alte Stadt die noch nicht vollständig ausgegraben ist. Kairo hat das älteste islamische Universitätssystem der Welt – Al-Azhar seit 970 n.Chr."
    },
    {
        name: "Lagos", land: "🇳🇬",
        fakten: "Lagos ist die am schnellsten wachsende Megastadt der Welt – täglich ziehen 3.000 Menschen zu. Die Stadt könnte bis 2100 die größte Stadt der Welt sein mit geschätzten 100 Millionen Einwohnern. Nollywood – die nigerianische Filmindustrie in Lagos – produziert mehr Filme als Hollywood, nur übertroffen von Bollywood. Lagos liegt auf einer Lagune und kämpft gegen das steigende Meer. 60% der Stadt sind informelle Siedlungen die dennoch eigene Wirtschaftssysteme haben."
    },
    {
        name: "Moscow", land: "🇷🇺",
        fakten: "Moskaus Metro ist eines der schönsten U-Bahn-Systeme der Welt – die Stationen wurden als Paläste für das Volk gebaut mit Marmor, Kronleuchtern und Mosaiken. Unter Moskau existiert ein geheimes Metro-2 Netz das für den KGB und die Regierung gebaut wurde – offiziell weder bestätigt noch dementiert. Moskau hat mehr Milliardäre pro Einwohner als jede andere Stadt. Der Kreml ist die größte mittelalterliche Festung der Welt die noch in Betrieb ist."
    },
    {
        name: "Istanbul", land: "🇹🇷",
        fakten: "Istanbul ist die einzige Stadt der Welt die auf zwei Kontinenten liegt – Europa und Asien, getrennt durch den Bosporus. Die Stadt war Hauptstadt von drei Weltreichen: Römisch, Byzantinisch und Osmanisch. Die Hagia Sophia war 1.000 Jahre lang die größte Kirche der Welt. Unter Istanbul liegen Zisternen aus der Römerzeit die 80.000 Kubikmeter Wasser speichern konnten. Istanbul hat mehr historische Moscheen als Mekka."
    },
    {
        name: "Seoul", land: "🇰🇷",
        fakten: "Seoul hat die schnellste durchschnittliche Internetgeschwindigkeit aller Großstädte weltweit. Der Han-Fluss wurde in den 1970ern vollständig kanalisiert und die Ufer betoniert – heute wird er renaturiert. Gangnam – bekannt durch den Song – ist der wohlhabendste Bezirk Asiens pro Quadratmeter. Südkorea hat die höchste Bildungsrate weltweit und Seoul konzentriert 40% aller Universitäten des Landes. PC-Bangs – Internetcafés – sind Teil der nationalen Kultur und entstanden nach der Asienkrise 1997."
    },
    {
        name: "Buenos Aires", land: "🇦🇷",
        fakten: "Buenos Aires hat die meisten Psychotherapeuten pro Kopf weltweit – eine tiefe kulturelle Verankerung der Psychoanalyse. Die Stadt wurde zweimal von ihren eigenen Bewohnern abgebrannt – 1806 gegen britische Invasoren. Das Teatro Colón gilt als eine der fünf besten Opernhäuser der Welt wegen seiner einzigartigen Akustik. Buenos Aires hat die größte jüdische Gemeinschaft Südamerikas. Der Tango entstand nicht in vornehmen Salons sondern in den Armenvierteln der Hafenstadt."
    },
    {
        name: "Toronto", land: "🇨🇦",
        fakten: "Toronto ist die multikulturellste Stadt der Welt – über 200 Sprachen werden gesprochen und 51% der Einwohner sind im Ausland geboren. Unter Toronto liegt ein 27 km langes unterirdisches Einkaufszentrum – PATH – das man bei Minus-30-Grad nutzen kann ohne einen Mantel zu brauchen. Der CN Tower war 34 Jahre lang das höchste Gebäude der Welt. Toronto hat mehr Grünfläche pro Einwohner als jede andere nordamerikanische Großstadt. Der Spitzname 'The 6ix' kommt von den 6 ursprünglichen Stadtbezirken."
    },
    {
        name: "Bangkok", land: "🇹🇭",
        fakten: "Bangkoks offizieller Name ist der längste Stadtname der Welt mit 169 Zeichen auf Thailändisch. Die Stadt versinkt jährlich bis zu 3 cm – sie könnte bis 2030 unter dem Meeresspiegel liegen. Bangkok hat mehr Tempel als Tage im Jahr – über 400 buddhistische Wat. Das Tuk-Tuk-Netzwerk bewegt täglich Millionen Menschen schneller als Taxis im Stau. Bangkoks Straßenküche gilt als die beste der Welt – ein Straßenstand erhielt 2017 als erster weltweit einen Michelin-Stern."
    },
    {
        name: "Nairobi", land: "🇰🇪",
        fakten: "Nairobi ist die einzige Hauptstadt der Welt mit einem Nationalpark innerhalb der Stadtgrenzen – Löwen laufen vor der Skyline. Die Stadt entstand 1899 als britischer Eisenbahn-Knotenpunkt und wurde innerhalb von 10 Jahren zur Hauptstadt. Silicon Savannah – Nairobis Tech-Hub – ist das führende Startup-Ökosystem Afrikas. M-Pesa, das mobile Zahlungssystem das in Nairobi entwickelt wurde, wird von 96% der kenianischen Haushalte genutzt und gilt als Blaupause für Fintech weltweit."
    },
    {
        name: "Lima", land: "🇵🇪",
        fakten: "Lima ist eine der wenigen Megastädte der Welt in einer Wüste – es regnet praktisch nie, aber Nebel versorgt die Stadt mit Feuchtigkeit. Die Küche Limas gilt als die reichhaltigste Südamerikas – Lima hat mehr Restaurants pro Einwohner als Paris. Unter Lima liegen noch nicht ausgegrabene Inka-Tempel. Lima war 300 Jahre lang die wichtigste spanische Kolonialstadt Südamerikas. Die Surfer-Wellen vor Lima sind durch den Humboldt-Strom einzigartig und ziehen Profis aus aller Welt an."
    },
    {
        name: "Riyadh", land: "🇸🇦",
        fakten: "Riad wuchs von 150.000 Einwohnern (1960) auf 8 Millionen (heute) – eine der schnellsten Urbanisierungen der Geschichte. Die Stadt liegt 600 m über dem Meeresspiegel mitten in der arabischen Halbinsel. Kingdom Centre Tower hat eine Skybridge im 99. Stock die man besuchen kann. Riad hat null öffentlichen Nahverkehr gebaut weil Autos kulturell als Statussymbol gelten – das ändert sich gerade mit dem Bau einer Metro. Der Name Riyadh bedeutet auf Arabisch 'die Gärten'."
    },
    {
        name: "Jakarta", land: "🇮🇩",
        fakten: "Jakarta versinkt schneller als jede andere Stadt der Welt – Teile der Stadt versinken 25 cm pro Jahr. Indonesien baut deshalb eine neue Hauptstadt namens Nusantara im Dschungel Borneos. Jakarta ist die größte Stadt Südostasiens mit 34 Millionen Menschen im Großraum. Das Bajaj – das orangefarbene Dreirad-Taxi – ist das einzige seiner Art das in Indien hergestellt und in Indonesien genutzt wird. Jakarta hat weltweit die schlechteste Luftqualität unter den Megastädten."
    },
    {
        name: "Karachi", land: "🇵🇰",
        fakten: "Karachi ist die größte Stadt der Welt die keine Hauptstadt ist – 16 Millionen Einwohner. Die Stadt erzeugt über 70% der pakistanischen Steuereinnahmen. Karachi war die erste Hauptstadt Pakistans bis 1958. Die Stadt hat eine der größten Küstenlinien aller Megastädte. Karachis Katchi-Abadi-Slums haben eigene inoffizielle Stromnetze, Wasserverteilsysteme und Sozialhierarchien die den offiziellen Strukturen oft überlegen sind."
    },
    {
        name: "Dhaka", land: "🇧🇩",
        fakten: "Dhaka ist die dichtestbevölkerte Stadt der Welt – 44.000 Menschen pro Quadratkilometer. Die Rikscha ist das wichtigste Transportmittel: 400.000 Rikschas fahren täglich durch die Stadt. Dhaka liegt auf einem Flussdelta das bei Hochwasser zu 80% überschwemmt werden kann. Bangladesh hat die größte Garnetenindustrie der Welt und Dhaka ist ihr Zentrum. Die Stadt hat in 50 Jahren ihre Bevölkerung verfünfzigfacht – von 300.000 auf 22 Millionen."
    },
    {
        name: "Mexico City", land: "🇲🇽",
        fakten: "Mexiko-Stadt liegt auf einem ausgetrockneten See – der ehemalige Azteken-See Texcoco. Deshalb sinkt die Stadt 10 cm pro Jahr und viele historische Gebäude stehen schief. Die Stadt liegt 2.240 m über dem Meeresspiegel – höher als die meisten europäischen Berggipfel. Unter Mexiko-Stadt liegt die Azteken-Hauptstadt Tenochtitlan vollständig erhalten aber unausgegraben. Das Metro-System hat Piktogramme statt Buchstaben weil die Analphabetenrate beim Bau 1969 noch hoch war."
    },
    {
        name: "Beijing", land: "🇨🇳",
        fakten: "Peking hat 3.000 Jahre kontinuierliche Besiedlung – eine der ältesten Hauptstädte der Welt. Die Verbotene Stadt hat 9.999 Räume – bewusst eines weniger als die mythischen 10.000 Räume des Himmelspalastes. Pekings Luftverschmutzung war so schlimm dass die Regierung künstlichen Regen einsetzte – 2008 wurden vor den Olympischen Spielen Chemikalien in Wolken geschossen. Der Hutong-Viertel – traditionelle Gassensiedlungen – verschwinden mit 100 pro Jahr. Peking hat mehr Fahrräder als jede andere Stadt der Welt."
    },
    {
        name: "Osaka", land: "🇯🇵",
        fakten: "Osaka gilt als die Essenshauptstadt Japans – der Begriff 'Kuidaore' bedeutet 'sich durch Essen ruinieren' und ist Stadtmotto. Osaka hat den ältesten Vergnügungspark der Welt – Shinsekai aus dem Jahr 1912. Die Menschen in Osaka gehen auf der linken Seite der Rolltreppe – überall sonst in Japan auf der rechten. Osakaner sprechen einen Dialekt der von Tokyotern als unhöflich empfunden wird aber als ehrlicher gilt. Das Aquarium Kaiyukan war 1990 das größte der Welt."
    },
    {
        name: "Kinshasa", land: "🇨🇩",
        fakten: "Kinshasa und Brazzaville sind die zwei Hauptstädte der Welt die am nächsten beieinander liegen – nur 4 km trennen sie über den Kongo-Fluss. Der Kongo-Fluss ist der tiefste Fluss der Welt mit über 220 m Tiefe. Kinshasa hat die zweitgrößte frankophone Bevölkerung nach Paris. Das Kongo-Becken – Kinshasas Hinterland – enthält den zweitgrößten Regenwald der Erde. Kinshasa wächst so schnell dass es bis 2075 zur größten Stadt Afrikas werden könnte."
    },
    {
        name: "Bogota", land: "🇨🇴",
        fakten: "Bogotá liegt 2.600 m über dem Meeresspiegel und ist damit eine der höchstgelegenen Hauptstädte der Welt. Die Stadt hat das weltgrößte Fahrrad-Infrastrukturnetz mit 550 km Radwegen. Jeden Sonntag werden 120 km Hauptstraßen für Autos gesperrt – Ciclovia – genutzt von 2 Millionen Radfahrern. Bogotá verwandelte sich in 10 Jahren von einer der gefährlichsten zu einer der innovativsten Städte durch Bürgermeister Mockus der Mimen statt Polizisten einsetzte. Die Kaffeebörse Bogotás bestimmt den Weltmarktpreis."
    },
    {
        name: "Santiago", land: "🇨🇱",
        fakten: "Santiago liegt zwischen den Anden und dem Pazifik – von der Stadt aus kann man in 90 Minuten sowohl skifahren als auch surfen. Chile ist das längste Land der Welt und Santiago liegt genau in der Mitte. Die Atacama-Wüste – 5 Stunden von Santiago – ist der trockenste Ort der Erde außerhalb der Antarktis. Santiago hat das sauberste Trinkwasser Lateinamerikas wegen der Andenschmelzwasser-Filtration. Chile produziert 10% des weltweiten Kupfers und Santiago ist das Handelszentrum."
    },
    {
        name: "Ankara", land: "🇹🇷",
        fakten: "Ankara wurde 1923 als künstliche Hauptstadt aus einem Dorf von 30.000 Menschen gebaut – vollständig geplant wie Canberra oder Brasília. Das Anıtkabir – Mausoleum von Atatürk – ist das meistbesuchte Denkmal der Türkei. Ankara liegt im anatolischen Hochland auf 938 m Höhe und hat ein kontinentales Klima mit Schnee im Winter. Die Stadt war in der Antike als Ancyra bekannt und war Hauptstadt des Königreichs Galatien. Angorawolle – von Angoraziegen – kommt ursprünglich aus der Region Ankara."
    },
    {
        name: "Johannesburg", land: "🇿🇦",
        fakten: "Johannesburg entstand 1886 über Nacht als Gold gefunden wurde – keine Stadt der Welt wuchs schneller von null. Joburg hat den größten von Menschenhand gepflanzten Wald der Welt – 10 Millionen Bäume die in einer baumlosen Savanne gepflanzt wurden. Die Stadt liegt 1.750 m über dem Meeresspiegel und hat nie Frost trotz des Winters. Unter Johannesburg liegen 500 km verlassene Goldminentunnel die heute von obdachlosen Minern bewohnt werden – Zama Zamas. Der Randgold-Komplex unter Joburg ist der reichste Goldgürtel der Erde."
    },
    {
        name: "Casablanca", land: "🇲🇦",
        fakten: "Casablanca hat die größte Moschee Afrikas und die drittgrößte der Welt – Hassan II Moschee mit einem 210 m hohen Minarett. Der berühmte Film 'Casablanca' wurde nie in Casablanca gedreht – komplett in Hollywood. Die Stadt ist Marokkos Wirtschaftshauptstadt obwohl Rabat die politische Hauptstadt ist. Casablancas Art-Déco-Viertel ist das größte geschlossene Art-Déco-Ensemble der Welt nach Miami. Der Hafen Casablancas ist der größte Afrikas."
    },
    {
        name: "Accra", land: "🇬🇭",
        fakten: "Accra ist Afrikas am schnellsten wachsende Tech-Hub-Stadt und wird als 'Silicon Valley Afrikas' bezeichnet. Ghana war das erste Land Schwarzafrikas das 1957 die Unabhängigkeit erlangte und Accra wurde zum Symbol der afrikanischen Selbstbestimmung. Kantamanto in Accra ist einer der weltgrößten Secondhand-Kleidungsmärkte – 15 Millionen Kleidungsstücke pro Woche aus Westeuropa und Nordamerika. Die Ga-Leute Accras bauen die berühmtesten FantasieSärge der Welt – in Form von Flugzeugen, Fischen und Autos."
    },
    {
        name: "Addis Ababa", land: "🇪🇹",
        fakten: "Addis Abeba ist die Hauptstadt der Afrikanischen Union und damit diplomatisches Zentrum des ganzen Kontinents. Die Stadt liegt 2.355 m über dem Meeresspiegel – eine der höchstgelegenen Hauptstädte der Welt. Äthiopien hat seinen eigenen Kalender mit 13 Monaten und ist damit 7-8 Jahre hinter dem gregorianischen Kalender. Lucy – das berühmteste Fossilienskelett der menschlichen Vorgeschichte – wurde in Äthiopien gefunden und ist im Nationalmuseum Addis Abebas ausgestellt. Kaffee wurde in Äthiopien entdeckt."
    },
    {
        name: "Dar es Salaam", land: "🇹🇿",
        fakten: "Dar es Salaam bedeutet auf Arabisch 'Hafen des Friedens'. Die Stadt war die Hauptstadt Tansanias bis Dodoma 1996 offiziell Hauptstadt wurde – aber Dar es Salaam bleibt die wirtschaftliche und bevölkerungsreichste Stadt. Tansanias Serengeti – eine der letzten großen Wildtierwanderungen der Erde – ist von Dar es Salaam in 8 Stunden erreichbar. Die Stadt hat das größte Straßenmarkt-System Ostafrikas. Swahili – eine der meistgesprochenen Sprachen Afrikas – entstand als Handelssprache in Küstenstädten wie Dar es Salaam."
    },
    {
        name: "Khartoum", land: "🇸🇩",
        fakten: "Khartum liegt am Zusammenfluss von Blauem und Weißem Nil – dem Punkt wo der längste Fluss der Welt entsteht. Die Stadt hat eines der extremsten Klimas der Welt: Temperaturen bis 47°C und Haboobs – massive Sandstürme die die Stadt in Minuten in Dunkelheit hüllen. Sudan hat mehr Pyramiden als Ägypten – 200-255 meroitische Pyramiden in der Wüste. Khartum war Schauplatz der berühmten Belagerung von 1885 bei der General Gordon von Mahdi-Truppen getötet wurde. Die Stadt liegt strategisch zwischen Sahara und tropischem Afrika."
    },
    {
        name: "Luanda", land: "🇦🇴",
        fakten: "Luanda war zeitweise die teuerste Stadt der Welt für Expats – ein Hamburger kostete 2013 umgerechnet 25 Euro. Angola ist einer der größten Ölproduzenten Afrikas und Luanda ist das Zentrum dieser Industrie. Die Musekenha – traditionelle Musikform Luandas – beeinflusste direkt die Entstehung des Samba in Brasilien durch versklavte Angolaner. Luanda hat eine der jüngsten Bevölkerungen der Welt – Durchschnittsalter 17 Jahre. Die portugiesische Kolonialarchitektur Luandas ist UNESCO-Kandidat."
    },
    {
        name: "Abidjan", land: "🇨🇮",
        fakten: "Abidjan ist die größte frankophone Stadt Afrikas nach Kinshasa und Casablanca. Die Elfenbeinküste produziert 40% des weltweiten Kakaos und Abidjan ist das Handelszentrum. Das Plateau-Viertel Abidjans gilt als 'das Manhattan Afrikas' wegen seiner Skyline. Abidjan war bis 1983 die Hauptstadt bevor Yamoussoukro offiziell Hauptstadt wurde – aber wie bei Dar es Salaam blieb Abidjan das echte Zentrum. Der Hafen Abidjans ist der zweitgrößte Westafrikas."
    },
    {
        name: "Kuala Lumpur", land: "🇲🇾",
        fakten: "Kuala Lumpur bedeutet 'schlammiger Zusammenfluss' – benannt nach dem trüben Wasser wo die Flüsse Klang und Gombak zusammentreffen. Die Petronas Towers waren von 1998 bis 2004 die höchsten Gebäude der Welt. Malaysia gilt als das Land mit der größten ethnischen und religiösen Vielfalt Südostasiens – Malaien, Chinesen und Tamilen leben gemeinsam in KL. Das Food-Ökosystem KLs gilt als das günstigste und vielfältigste der Welt. Der Batu-Caves-Tempel liegt innerhalb der Stadtgrenzen."
    },
    {
        name: "Singapore", land: "🇸🇬",
        fakten: "Singapur ist der einzige Stadtstaat Südostasiens und eines von nur drei Stadtstaaten weltweit. Das Land hat keine natürlichen Ressourcen und importiert sogar Trinkwasser – trotzdem ist es eines der reichsten Länder der Welt. Singapur hat die strengsten Verkehrsgesetze der Welt – Kaugummiverkauf ist eingeschränkt, Littering kostet 1.000 Dollar. Der Changi Airport gilt seit Jahren als weltbester Flughafen mit einem 40 m hohen Wasserfall im Inneren. Singapur baut aktiv neue Landfläche – 25% des heutigen Territoriums ist aufgeschüttetes Land."
    },
    {
        name: "Hong Kong", land: "🇭🇰",
        fakten: "Hongkong hat die höchste Dichte an Wolkenkratzern weltweit – mehr als New York und Chicago zusammen. Das MTR U-Bahn-System hat eine Pünktlichkeitsrate von 99,9% und ist profitabel – als einzige Metro der Welt. Hongkong hat 263 Inseln. Der Mid-Levels Escalator ist die längste überdachte Rolltreppe der Welt – 800 m lang. Hongkongs Hafenfront war Jahrzehnte die meistfotografierte Skyline der Welt. Dim Sum entstand in Hongkong als Yum-Cha-Kultur in Teehouses."
    },
    {
        name: "Taipei", land: "🇹🇼",
        fakten: "Taipei 101 war das erste Gebäude das 500 m überschritt und nutzt einen 660-Tonnen-Dämpfer um Taifune und Erdbeben abzufedern. Taiwan produziert 90% aller High-End-Computerchips der Welt – TSMC in Taipei ist das wichtigste Unternehmen der globalen Lieferkette. Taipeis Nachtmärkte gelten als die besten der Welt – Shilin Night Market zieht täglich 100.000 Besucher. Die Bubble Tea Kultur entstand in Taipeis Teehäusern in den 1980ern. Taiwan hat die höchste Dichte an 7-Eleven-Filialen weltweit."
    },
    {
        name: "Ho Chi Minh", land: "🇻🇳",
        fakten: "Ho-Chi-Minh-Stadt – früher Saigon – hat 9 Millionen registrierte Motorräder auf 9 Millionen Einwohner. Die Tunnels von Củ Chi – 250 km Tunnel direkt unter der Stadt – wurden im Vietnamkrieg von Guerillas genutzt und können heute besichtigt werden. Vietnam hat eine der jüngsten und am schnellsten wachsenden Volkswirtschaften Asiens und HCMC ist ihr Motor. Der Mekong-Delta – Vietnams Reisschüssel – beginnt direkt vor den Toren der Stadt. Das Kriegsremanenzenmuseum zeigt die eindrücklichste Dokumentation des Vietnamkriegs."
    },
    {
        name: "Yangon", land: "🇲🇲",
        fakten: "Yangon war bis 2006 die Hauptstadt Myanmars bevor die Militärjunta die neue Hauptstadt Naypyidaw mitten im Dschungel baute – eine Stadt für 1 Million Menschen die fast leer ist. Die Shwedagon-Pagode in Yangon ist mit 98 m vergoldetem Stupa eine der bedeutendsten buddhistischen Stätten der Welt und enthält angeblich 8 Haare des Buddha. Yangon hat die am besten erhaltene koloniale Architektur Südostasiens – ganze Straßenzüge britischer Verwaltungsgebäude. Die Stadt liegt am Yangon-Fluss direkt am Zusammenfluss zweier Flüsse."
    },
    {
        name: "Colombo", land: "🇱🇰",
        fakten: "Colombo ist das wirtschaftliche Zentrum Sri Lankas obwohl Sri Jayawardenepura Kotte die offizielle Hauptstadt ist – direkt angrenzend. Sri Lanka war das erste Land der Welt das eine Frau zur Premierministerin wählte – Sirimavo Bandaranaike 1960. Colombo war ein wichtiger Hafen der alten Gewürzroute – Zimt, Pfeffer und Edelsteine machten die Stadt reich. Der Colombo Port City – künstlich aufgeschüttete Insel vor der Küste – wird zum größten Bauprojekt Asiens. Ceylon-Tee aus der Region ist weltweit bekannt."
    },
    {
        name: "Kathmandu", land: "🇳🇵",
        fakten: "Kathmandu liegt in einem Tal auf 1.400 m Höhe umgeben von Bergen die über 8.000 m erreichen. Nepal beherbergt 8 der 10 höchsten Berge der Welt und Kathmandu ist das Tor zum Everest. Die Pashupatinath-Tempel-Anlage am Bagmati-Fluss ist die heiligste Hindu-Stätte außerhalb Indiens. Kathmandus Straßen sind so eng und gewunden dass keine Stadtplanung sie jemals begradigt hat. Der Kathmandu-Durbar-Square hat Tempel aus dem 3. Jahrhundert n.Chr. die noch in Betrieb sind."
    },
    {
        name: "Tashkent", land: "🇺🇿",
        fakten: "Taschkent ist die größte Stadt Zentralasiens mit 3 Millionen Einwohnern. Die Stadt wurde 1966 durch ein Erdbeben fast vollständig zerstört und danach als sowjetische Musterstadt wiederaufgebaut – breite Boulevards, Marmor-U-Bahn und Plattenbauten. Taschkent liegt an der alten Seidenstraße und war Jahrtausende ein Handelsknotenpunkt zwischen China, Indien und Europa. Usbekistans Baumwollindustrie – größtenteils in der Region Taschkent – prägte die Sowjet-Wirtschaft. Samarkand und Buchara – 300 km entfernt – sind UNESCO-Welterbe."
    },
    {
        name: "Baku", land: "🇦🇿",
        fakten: "Baku liegt am Kaspischen Meer – dem größten Binnensee der Welt, obwohl er Meer heißt. Aserbaidschan hatte das erste Ölbohrloch der Welt – 1846, vor Pennsylvania. Baku produzierte einst 50% des gesamten Weltöls. Die Altstadt Bakus ist UNESCO-Welterbe und hat Mauern aus dem 12. Jahrhundert. Das Flame Towers-Trio – drei Hochhäuser in Flammenform – sind bei Nacht mit LED-Fassaden beleuchtet und von 30 km Entfernung sichtbar. Das Kaspische Meer hat keine Verbindung zu einem Ozean."
    },
    {
        name: "Tbilisi", land: "🇬🇪",
        fakten: "Tiflis wurde im 5. Jahrhundert gegründet als ein König eine heiße Schwefelquelle entdeckte – Tbilisi bedeutet 'warme Quelle'. Die Stadt liegt in einem tiefen Flusstal eingerahmt von Bergen was ihr einzigartiges Microklima gibt. Georgien gilt als Geburtsort des Weins – archäologische Beweise für Weinherstellung gehen 8.000 Jahre zurück. Die georgische Schrift ist eines von nur 14 Alphabeten der Welt das noch aktiv genutzt wird. Tiflis hat eine der ältesten christlichen Kirchen der Welt – Anchiskhati aus dem 5. Jahrhundert."
    },
    {
        name: "Yerevan", land: "🇦🇲",
        fakten: "Eriwan ist eine der ältesten kontinuierlich bewohnten Städte der Welt – gegründet 782 v.Chr., älter als Rom. Der Ararat – Armeniens nationales Symbol – liegt heute in der Türkei und ist von Eriwan aus perfekt sichtbar. Armenien war 301 n.Chr. das erste Land der Welt das das Christentum als Staatsreligion annahm. Die armenische Diaspora – durch den Genozid von 1915 verstreut – ist größer als die Bevölkerung Armeniens selbst. Erimans Rosa-Tuff-Stein-Architektur gibt der Stadt ihren charakteristischen rosafarbenen Ton."
    },
    {
        name: "Kiev", land: "🇺🇦",
        fakten: "Kyiv ist eine der ältesten Städte Europas – gegründet im 5. Jahrhundert und war im Mittelalter größer als Paris oder London. Die Kiewer Höhlenkloster-Lavra enthält ein Labyrinth von unterirdischen Gängen mit mumifizierten Mönchen aus dem 11. Jahrhundert. Kyiv liegt am Dnipro – dem drittlängsten Fluss Europas. Die Stadt hat eine der höchsten Dichten an Kastanienbäumen weltweit – Kastanie ist das Stadtsymbol. Die Chreschtschatyk – Kyivs Hauptstraße – wird jeden Sonntag für Autos gesperrt."
    },
    {
        name: "Warsaw", land: "🇵🇱",
        fakten: "Warschau wurde im 2. Weltkrieg zu 85% zerstört – nach dem Warschauer Aufstand 1944 ließ Hitler die Stadt systematisch dem Erdboden gleichmachen. Die Altstadt wurde danach so exakt rekonstruiert dass die UNESCO sie als Weltkulturerbe aufnahm – ein einmaliger Präzedenzfall für eine rekonstruierte Stadt. Warschau ist die Phoenix-Stadt Europas. Chopin wurde in der Nähe Warschaus geboren und sein Herz liegt in einer Kirche der Stadt – sein Körper in Paris. Polen hat mehr Nobelpreisträger pro Kopf als der Durchschnitt."
    },
    {
        name: "Vienna", land: "🇦🇹",
        fakten: "Wien war Hauptstadt des Habsburger Reichs das 600 Jahre lang Europa dominierte. Die Wiener Kaffeehauskultur ist UNESCO-immaterielles Kulturerbe – Kaffeehäuser galten als Wohnzimmer der Intellektuellen. Freud, Klimt, Mahler, Wittgenstein, Hitler und Stalin lebten alle gleichzeitig in Wien um 1910. Die Wiener Kanalisation wurde weltberühmt durch den Film 'Der dritte Mann' (1949) – Touren werden heute angeboten. Wien hat die höchste Lebensqualität aller Großstädte weltweit laut Mercer-Index."
    },
    {
        name: "Amsterdam", land: "🇳🇱",
        fakten: "Amsterdam liegt 2 m unter dem Meeresspiegel und wird von 2.500 Hausbooten und einem 400-jährigen Kanalsystem durchzogen. 900.000 Fahrräder stehen in Amsterdam – mehr als Einwohner. Die gesamte Innenstadt steht auf 11 Millionen Holzpfählen die im Boden eingerammt wurden – der Boden war zu weich zum Bauen. Das Anne Frank Haus ist heute das meistbesuchte Museum der Niederlande. Die VOC – niederländische Ostindien-Kompanie, gegründet in Amsterdam 1602 – war das erste multinationale Unternehmen der Welt."
    },
    {
        name: "Brussels", land: "🇧🇪",
        fakten: "Brüssel ist de facto die Hauptstadt der Europäischen Union obwohl offiziell keine EU-Hauptstadt existiert. Belgien hat 11 Millionen Einwohner und 3 offizielle Sprachen – Niederländisch, Französisch und Deutsch. Das Atomium – gebaut für die Weltausstellung 1958 – ist ein vergrößertes Eisenkristallatom. Brüssel hat die höchste Dichte an Lobbybüros und internationalen Organisationen weltweit nach New York und Genf. Belgische Pommes wurden fälschlicherweise 'French Fries' genannt weil amerikanische Soldaten im 1. Weltkrieg sie in Belgien aßen wo Französisch gesprochen wurde."
    },
    {
        name: "Stockholm", land: "🇸🇪",
        fakten: "Stockholm liegt auf 14 Inseln und hat 57 Brücken. Schweden hat keine Inflation für mehr als 200 Jahre gehabt – die Riksbank ist die älteste Zentralbank der Welt (1668). Stockholm hat das höchste Startup-Wachstum pro Kopf nach Silicon Valley – Spotify, Klarna, Mojang (Minecraft) kommen alle aus Stockholm. Die Stockholmer U-Bahn gilt als längste Kunstgalerie der Welt – 90 der 100 Stationen sind mit Kunstwerken dekoriert. Alfred Nobel – Erfinder des Dynamits und Stifter des Nobelpreises – wurde in Stockholm geboren."
    },
    {
        name: "Oslo", land: "🇳🇴",
        fakten: "Oslo verwaltet den größten Staatsfonds der Welt – 1,4 Billionen Dollar aus Öleinnahmen für künftige Generationen. Norwegen entschied sich bewusst sein Öl nicht zu verbrauchen sondern zu sparen – ein einmaliges Experiment in Staatspolitik. Der Oslofjord friert im Winter nicht zu obwohl die Stadt auf dem Breitengrad von Alaska liegt. Oslo hat die teuersten Bierpreise der Welt. Das Vigelandspark enthält 212 Skulpturen eines einzigen Künstlers – Gustav Vigeland – die alle Menschen in allen Lebensphasen zeigen."
    },
    {
        name: "Helsinki", land: "🇫🇮",
        fakten: "Helsinki hat die höchste Dichte an Saunas pro Einwohner weltweit – 3 Millionen Saunas für 5,5 Millionen Finnin. Finnland hat das beste Bildungssystem der Welt laut PISA-Studien und Helsinki ist sein Zentrum. Unter Helsinki liegt eine komplette unterirdische Stadt – Tunnelisystem für Autos, U-Bahn, Einkaufszentren und sogar eine unterirdische Schwimmhalle. Die Finnen trinken weltweit am meisten Kaffee pro Kopf. Helsinki war 1812-1917 russische Großherzogtums-Hauptstadt und hat russisch-imperiale Architektur."
    },
    {
        name: "Lisbon", land: "🇵🇹",
        fakten: "Lissabon ist die älteste Hauptstadt Westeuropas – 400 Jahre älter als London, Paris und Madrid. Das Erdbeben von 1755 zerstörte 85% der Stadt und löste einen Tsunami aus – es war eines der ersten modernen Naturkatastrophen-Ereignisse bei dem staatliches Krisenmanagement entwickelt wurde. Portugal entdeckte die Seeroute nach Indien und dominierte 200 Jahre lang den Welthandel von Lissabon aus. Fado – die melancholische Musikform – entstand in Lissabons Alfama-Viertel. Die Lissaboner Metro-Station Oriente wurde von Santiago Calatrava entworfen."
    },
    {
        name: "Rome", land: "🇮🇹",
        fakten: "Rom hat so viele antike Überreste dass U-Bahn-Bau regelmäßig für Jahre gestoppt wird wenn neue Funde gemacht werden – die Metro C kostet pro Kilometer viermal mehr als andere Linien wegen archäologischer Arbeit. Unter Rom liegen 900 km Katakomben mit 600.000 Gräbern. Der Vatikan – ein eigenständiger Staat innerhalb Roms – ist der kleinste Staat der Welt. Die Trevi-Fontäne sammelt täglich 3.000 Euro Münzwürfe die an bedürftige Römer verteilt werden. Die Sixtinische Kapelle zeigt nicht die Schöpfung Gottes – sondern die Geschichte der Menschheit vor Moses."
    },
    {
        name: "Washington DC", land: "🇺🇸",
        fakten: "Washington DC ist der einzige Ort in den USA der zu keinem Bundesstaat gehört – ein eigenes Federal District. Per Gesetz darf kein Gebäude in DC höher sein als das Capitol – weshalb die Skyline einzigartig flach ist. Der Smithsonian-Museumsverbund – 19 Museen alle kostenlos – ist das größte Museumsnetzwerk der Welt. Das Pentagon hat mehr Toiletten als nötig weil es ursprünglich für Virginia mit getrennten Toiletten für Schwarze und Weiße gebaut wurde. Das FBI, CIA und NSA haben alle ihr Hauptquartier in der DC-Metropolregion – nirgendwo sonst so viele Geheimdienste."
    }
];