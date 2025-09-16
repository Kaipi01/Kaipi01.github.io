// --------------------------- PRZYKŁADOWE DANE DO TESTÓW ---------------------------

const BADGES_DATA_STATIC = [{
    "id": 1,
    "name": "Mistyczny Wędrowiec",
    "icon": "icons/badge/badge-1.png",
    "desc": "Twoje pierwsze kroki na ścieżce podróżnika zostały pobłogosławione przez starożytnych strażników dróg. Ta odznaka symbolizuje początek magicznej podróży.",
    "value": 1,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 2,
    "name": "Strażnik Świętych Szczytów",
    "icon": "icons/badge/badge-2.png",
    "desc": "Zdobywając górskie szczyty, zbliżasz się do niebiańskich sfer. Ta odznaka emanuje mocą wysokogórskich duchów.",
    "value": 3,
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 3,
    "name": "Zaklinacz Morskich Opowieści",
    "icon": "icons/badge/badge-3.png",
    "desc": "Poznałeś sekrety morskich głębin i zyskałeś przychylność wodnych nimf. Odznaka nosi ślady starożytnej mocy oceanu.",
    "value": 4,
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 4,
    "name": "Odkrywca Zapomnanych Ścieżek",
    "icon": "icons/badge/badge-4.png",
    "desc": "Odnalazłeś szlaki, które czas próbował ukryć. Ta odznaka pulsuje energią dawno zapomnianych miejsc.",
    "value": 6,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 5,
    "name": "Powiernik Leśnych Tajemnic",
    "icon": "icons/badge/badge-5.png",
    "desc": "Pradawne drzewa uznały cię za godnego swojego zaufania. Odznaka emanuje zieloną aurą starożytnego lasu.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 6,
    "name": "Władca Pustynnych Mirażów",
    "icon": "icons/badge/badge-6.png",
    "desc": "Pustynne duchy uznały twoją wartość. Ta odznaka kryje w sobie mądrość tysięcy ziarenek piasku.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 7,
    "name": "Emisariusz Świętych Miejsc",
    "icon": "icons/badge/badge-7.png",
    "desc": "Odwiedziłeś miejsca przepełnione duchową mocą. Odznaka błyszczy świętym blaskiem pradawnych świątyń.",
    "value": 5,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 8,
    "name": "Poszukiwacz Astralnych Szlaków",
    "icon": "icons/badge/badge-8.png",
    "desc": "Twoje podróże sięgają poza fizyczny wymiar. Ta odznaka połyskuje gwiaździstym blaskiem nocnego nieba.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 9,
    "name": "Chronometr Wiecznego Wędrowca",
    "icon": "icons/badge/badge-9.png",
    "desc": "Czas stał się twoim sprzymierzeńcem w podróżach. Odznaka nosi w sobie echo minionych epok.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 10,
    "name": "Strażnik Międzywymiarowych Bram",
    "icon": "icons/badge/badge-10.png",
    "desc": "Przekroczyłeś granice znanych szlaków. Ta odznaka zawiera esencję międzywymiarowych podróży.",
    "value": 2,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 11,
    "name": "Dziedzic Pradawnych Kompasów",
    "icon": "icons/badge/badge-11.png",
    "desc": "Starożytni nawigatorzy przekazali ci swoją wiedzę o sekretnych szlakach i mistycznych kierunkach. Ta odznaka pulsuje delikatnym światłem wskazującym drogę do miejsc, których nie znajdziesz na żadnej mapie. Mówi się, że jej posiadacze potrafią odnaleźć ścieżki między wymiarami.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 12,
    "name": "Szeptucha Górskich Wiatrów",
    "icon": "icons/badge/badge-12.png",
    "desc": "Wysokogórskie duchy uznały cię za godnego swojej pradawnej wiedzy. Nauczyłeś się rozumieć mowę wiatru i czytać znaki pozostawione przez atmosferyczne istoty. Ta odznaka zawiera w sobie echo tysięcy opowieści niesionych przez górskie powietrze i szept lodowców.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 13,
    "name": "Opiekun Świętych Źródeł",
    "icon": "icons/badge/badge-13.png",
    "desc": "Odkryłeś i ochroniłeś miejsca, gdzie życiodajna woda wypływa z głębin ziemi. Wodne nimfy powierzyły ci swoje sekrety, a górskie strumienie śpiewają twoim imieniem. Odznaka emanuje świeżością górskich potoków i mądrością pradawnych źródeł.",
    "value": 5,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 14,
    "name": "Władca Zaklętych Ruin",
    "icon": "icons/badge/badge-14.png",
    "desc": "Stałeś się strażnikiem zapomnianych miejsc, gdzie czas płynie inaczej. Potrafisz odczytywać historie zapisane w starożytnych kamieniach i rozmawiać z duchami dawnych cywilizacji. Ta odznaka nosi w sobie echa tysiącletnich historii i szept zamkniętych w kamieniu wspomnień.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 15,
    "name": "Mistrz Astralnych Szeptów",
    "icon": "icons/badge/badge-15.png",
    "desc": "Gwiazdy uznały cię za swojego powiernika, dzieląc się z tobą kosmiczną wiedzą o podróżach i przeznaczeniu. Potrafisz czytać z nocnego nieba jak z mapy i odnajdywać drogi wskazane przez konstelacje. Odznaka lśni delikatnym, gwiezdnym blaskiem.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 16,
    "name": "Strażnik Mglistych Dolin",
    "icon": "icons/badge/badge-16.png",
    "desc": "Poznałeś sekrety ukryte w porannych mgłach i wieczornych cieniach górskich dolin. Duchy mgły uznały cię za swojego przyjaciela, pokazując ci ścieżki niewidoczne dla zwykłych wędrowców. Odznaka otacza się delikatną, mistyczną aurą.",
    "value": 6,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 17,
    "name": "Powiernik Księżycowych Ścieżek",
    "icon": "icons/badge/badge-17.png",
    "desc": "Księżyc obdarzył cię zdolnością odnajdywania tajemnych przejść widocznych tylko w świetle jego promieni. Nocne wędrówki stały się twoją domeną, a srebrzyste szlaki prowadzą cię do miejsc pełnych magii. Odznaka emanuje łagodnym, srebrzystym blaskiem.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 18,
    "name": "Kronikarz Mistycznych Podróży",
    "icon": "icons/badge/badge-18.png",
    "desc": "Twoje zapiski z podróży zawierają wiedzę wykraczającą poza zwykłe opisy miejsc. Potrafisz uchwycić magiczną esencję odwiedzanych lokacji i przekazać ją innym. Ta odznaka pulsuje energią tysięcy zapisanych historii i nieodkrytych jeszcze opowieści.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 19,
    "name": "Zaklinacz Czasoprzestrzeni",
    "icon": "icons/badge/badge-19.png",
    "desc": "Odkryłeś miejsca, gdzie czas płynie inaczej, a przestrzeń zgina się wbrew prawom fizyki. Potrafisz odnajdywać szczeliny między światami i bezpiecznie przez nie podróżować. Odznaka zdaje się istnieć jednocześnie w wielu wymiarach.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 20,
    "name": "Władca Zapomnianego Królestwa",
    "icon": "icons/badge/badge-20.png",
    "desc": "Odnalazłeś i przywróciłeś do życia miejsca, o których świat zapomniał. Duchy dawnych władców uznały cię za godnego następcę ich dziedzictwa. Odznaka nosi w sobie majestat starożytnych królestw i moc zapomnianych tronów.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 21,
    "name": "Strażnik Świętych Gajów",
    "icon": "icons/badge/badge-21.png",
    "desc": "Pradawne drzewa przyjęły cię do swojego kręgu, dzieląc się mądrością wieków. Poznałeś język natury i sekrety ukryte w szumie liści. Ta odznaka emanuje życiodajną energią starożytnych lasów i mocą pierwotnej natury.",
    "value": 6,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 22,
    "name": "Emisariusz Czterech Żywiołów",
    "icon": "icons/badge/badge-22.png",
    "desc": "Żywioły ziemi, wody, ognia i powietrza uznały cię za swojego przedstawiciela. Potrafisz odnajdywać miejsca, gdzie ich moc jest najsilniejsza i harmonijnie się przeplata. Odznaka pulsuje energią wszystkich żywiołów.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 23,
    "name": "Pielgrzym Świętych Szczytów",
    "icon": "icons/badge/badge-23.png",
    "desc": "Dotarłeś do miejsc, gdzie ziemia spotyka się z niebem. Górskie bóstwa przyjęły twoje modlitwy i pobłogosławiły twoje wędrówki. Ta odznaka nosi w sobie cząstkę każdego świętego szczytu, który odwiedziłeś.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 24,
    "name": "Opiekun Pradawnych Portali",
    "icon": "icons/badge/badge-24.png",
    "desc": "Odkryłeś starożytne bramy łączące odległe miejsca i wymiary. Zostałeś wybrany przez ich strażników jako godny następca ich wiedzy. Odznaka zdaje się zawierać w sobie fragmenty wszystkich miejsc, do których prowadzą portale.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 25,
    "name": "Władca Spiralnych Ścieżek",
    "icon": "icons/badge/badge-25.png",
    "desc": "Poznałeś sekrety labiryntów i spiralnych szlaków prowadzących do centrum wszechświata. Twoje kroki układają się w mistyczne wzory, otwierające ukryte przejścia. Odznaka wiruje delikatnie, wskazując drogę do tajemnych miejsc.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 26,
    "name": "Mistrz Świętych Wędrówek",
    "icon": "icons/badge/badge-26.png",
    "desc": "Twoje podróże nabrały wymiaru duchowej pielgrzymki. Każdy twój krok jest modlitwą, a każda ścieżka prowadzi do głębszego zrozumienia świata. Odznaka emanuje spokojem i mądrością zdobytą podczas niezliczonych wędrówek.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 27,
    "name": "Tkacz Międzywymiarowych Szlaków",
    "icon": "icons/badge/badge-27.png",
    "desc": "Nauczyłeś się splatać ścieżki między różnymi wymiarami rzeczywistości, tworząc nowe szlaki tam, gdzie wcześniej ich nie było. Odznaka zdaje się zmieniać swój wygląd w zależności od tego, z którego wymiaru się na nią patrzy.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 28,
    "name": "Strażnik Świętych Kręgów",
    "icon": "icons/badge/badge-28.png",
    "desc": "Odkryłeś i ochraniasz miejsca mocy ukryte w kamiennych kręgach i pradawnych sanktuariach. Potrafisz odczytywać energie płynące z ziemi i kierować je dla dobra wszystkich podróżnych. Odznaka pulsuje w rytm ziemskich energii.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 29,
    "name": "Powiernik Gwiezdnych Map",
    "icon": "icons/badge/badge-29.png",
    "desc": "Zostałeś wybrany przez strażników kosmicznej wiedzy jako godny przechowywać mapy gwiezdnych szlaków. Potrafisz odczytywać znaki zostawione przez starożytnych astronomów i podróżować zgodnie z układem gwiazd. Odznaka świeci własnym, gwiezdnym światłem.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 30,
    "name": "Władca Zaklętych Mostów",
    "icon": "icons/badge/badge-30.png",
    "desc": "Odnalazłeś i przywróciłeś do życia mistyczne przejścia łączące odległe krainy. Duchy mostów uznały cię za swojego opiekuna, powierzając ci sekrety bezpiecznego przekraczania granic między światami. Odznaka wibruje energią wszystkich przekroczonych progów.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 31,
    "name": "Emisariusz Świetlistych Szlaków",
    "icon": "icons/badge/badge-31.png",
    "desc": "Zostałeś wybrany przez świetliste istoty jako ich przedstawiciel na ziemskich ścieżkach. Twoje kroki zostawiają delikatną, świetlistą poświatę, która pomaga innym wędrowcom odnaleźć drogę w ciemności. Odznaka emanuje ciepłym, przyjaznym blaskiem, który wzmacnia się w obecności innych podróżników.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 32,
    "name": "Strażnik Księżycowych Jezior",
    "icon": "icons/badge/badge-32.png",
    "desc": "Poznałeś tajemnice ukryte w głębinach górskich jezior, gdzie światło księżyca tworzy portale do innych wymiarów. Wodne duchy nauczyły cię rozumieć język fal i odczytywać przesłania zapisane w tańcu kropel wody. Ta odznaka zawiera w sobie głębię wszystkich poznanych akwenów.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 33,
    "name": "Władca Czasowych Spirali",
    "icon": "icons/badge/badge-33.png",
    "desc": "Odkryłeś miejsca, gdzie czas tworzy spiralne wzory, pozwalające podróżnikom doświadczać różnych epok jednocześnie. Potrafisz odnajdywać szczeliny czasowe i bezpiecznie przez nie przeprowadzać innych. Odznaka zdaje się istnieć w wielu momentach czasowych naraz.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 34,
    "name": "Mistrz Zaklętych Ogrodów",
    "icon": "icons/badge/badge-34.png",
    "desc": "Odnalazłeś i przywróciłeś do życia magiczne ogrody, gdzie rośliny z różnych wymiarów rosną obok siebie w doskonałej harmonii. Duchy natury powierzyły ci klucze do bram ukrytych w żywopłotach i sekretnych altanach. Odznaka roztacza woń tysięcy mistycznych kwiatów.",
    "value": 6,
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 35,
    "name": "Kronikarz Wymiarów",
    "icon": "icons/badge/badge-35.png",
    "desc": "Twoje zapiski zawierają mapy i opisy miejsc istniejących na granicy rzeczywistości. Potrafisz dokumentować zjawiska wykraczające poza ludzkie pojmowanie i przekazywać tę wiedzę innym podróżnikom. Odznaka zawiera w sobie fragmenty wszystkich poznanych wymiarów.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 36,
    "name": "Opiekun Świętych Jaskiń",
    "icon": "icons/badge/badge-36.png",
    "desc": "Zostałeś wybrany przez podziemne duchy jako strażnik pradawnych sanktuariów ukrytych głęboko pod ziemią. Poznałeś język skalnych formacji i potrafisz odnajdywać przejścia do podziemnych światów. Odznaka pulsuje głębokim, ziemskim resonansem.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 37,
    "name": "Powiernik Astralnych Bram",
    "icon": "icons/badge/badge-37.png",
    "desc": "Gwiezdni mędrcy przekazali ci wiedzę o bramach łączących ziemskie ścieżki z astralnymi szlakami. Potrafisz odnajdywać miejsca, gdzie granica między niebem a ziemią staje się płynna. Odznaka mieni się kosmicznym pyłem i odbija światło odległych gwiazd.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 38,
    "name": "Tkacz Mglistych Opowieści",
    "icon": "icons/badge/badge-38.png",
    "desc": "Nauczyłeś się wydobywać historie ukryte w górskich mgłach i porannej rosie. Twoje opowieści o podróżach przeplatają się z pradawną magią miejsc, które odwiedziłeś. Odznaka otacza się delikatną mgiełką, w której można dostrzec fragmenty zapisanych historii.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 39,
    "name": "Władca Szeptających Wiatrów",
    "icon": "icons/badge/badge-39.png",
    "desc": "Powietrzne duchy uznały cię za godnego swojej pradawnej wiedzy. Potrafisz odczytywać wiadomości niesione przez wiatr i odnajdywać ścieżki wskazane przez powietrzne prądy. Odznaka zdaje się lekko wibrować, wydając delikatny, melodyjny dźwięk.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 40,
    "name": "Strażnik Świetlistych Szczytów",
    "icon": "icons/badge/badge-40.png",
    "desc": "Odkryłeś miejsca na szczytach gór, gdzie światło tworzy magiczne wzory wskazujące drogę do innych wymiarów. Góry powierzyły ci swoje najgłębsze tajemnice i pozwoliły strzec swoich świętych miejsc. Odznaka lśni intensywniej na dużych wysokościach.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 41,
    "name": "Emisariusz Pierwotnych Sił",
    "icon": "icons/badge/badge-41.png",
    "desc": "Zostałeś wybrany przez pradawne siły natury jako ich przedstawiciel wśród wędrowców. Potrafisz odnajdywać miejsca, gdzie pierwotna energia jest najsilniejsza i wykorzystywać ją do ochrony podróżnych. Odznaka pulsuje pierwotną mocą ziemi.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 42,
    "name": "Mistrz Zaklętych Ścieżek",
    "icon": "icons/badge/badge-42.png",
    "desc": "Odkryłeś szlaki, które zmieniają swój bieg w zależności od intencji wędrowca. Potrafisz odnajdywać i tworzyć magiczne przejścia między pozornie odległymi miejscami. Odznaka zdaje się zmieniać swój wzór, pokazując różne możliwe ścieżki.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 43,
    "name": "Powiernik Świętych Źródeł Mocy",
    "icon": "icons/badge/badge-43.png",
    "desc": "Odnalazłeś pradawne źródła energii ukryte w najodleglejszych zakątkach świata. Strażnicy mocy nauczyli cię, jak bezpiecznie korzystać z ich energii i chronić je przed nadużyciem. Odznaka emanuje czystą, życiodajną energią.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 44,
    "name": "Władca Kryształowych Jaskiń",
    "icon": "icons/badge/badge-44.png",
    "desc": "Kryształowe groty uznały cię za swojego opiekuna, dzieląc się z tobą wiedzą zaklętą w geometrycznych wzorach minerałów. Potrafisz odczytywać wibracje kryształów i odnajdywać ukryte przejścia. Odznaka mieni się wszystkimi kolorami tęczy.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 45,
    "name": "Kronikarz Mistycznych Artefaktów",
    "icon": "icons/badge/badge-45.png",
    "desc": "Twoja wiedza o magicznych przedmiotach i miejscach ich spoczynku jest nieoceniona. Potrafisz odnajdywać i katalogować artefakty o wielkiej mocy, chroniąc je przed niewłaściwym wykorzystaniem. Odznaka zawiera w sobie echa wszystkich odkrytych skarbów.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 46,
    "name": "Strażnik Świętych Kręgów Czasu",
    "icon": "icons/badge/badge-46.png",
    "desc": "Odkryłeś miejsca, gdzie czas tworzy koliste wzory, pozwalające na podróże między epokami. Duchy czasu powierzyły ci klucze do swoich bram i nauczyły, jak bezpiecznie przez nie przechodzić. Odznaka zdaje się istnieć poza normalnym upływem czasu.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 47,
    "name": "Tkacz Międzywymiarowych Snów",
    "icon": "icons/badge/badge-47.png",
    "desc": "Potrafisz odnajdywać i interpretować sny podróżników, które prowadzą do magicznych miejsc. Twoja świadomość potrafi swobodnie wędrować między jawą a snem, odkrywając nowe ścieżki. Odznaka emanuje spokojną, oniryczną energią.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 48,
    "name": "Opiekun Świetlistych Portali",
    "icon": "icons/badge/badge-48.png",
    "desc": "Zostałeś wybrany jako strażnik bram stworzonych z czystego światła, łączących różne wymiary rzeczywistości. Potrafisz kontrolować przepływ energii między światami i chronić podróżnych podczas przejścia. Odznaka świeci własnym, wewnętrznym blaskiem.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 49,
    "name": "Władca Zaklętych Labiryntów",
    "icon": "icons/badge/badge-49.png",
    "desc": "Poznałeś sekrety magicznych labiryntów, których ścieżki prowadzą do innych wymiarów i epok. Potrafisz odnajdywać centrum każdego labiryntu i bezpiecznie przeprowadzać przez nie innych. Odznaka zmienia swój wzór, tworząc miniaturowe labirynty.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 50,
    "name": "Mistrz Astralnych Wędrówek",
    "icon": "icons/badge/badge-50.png",
    "desc": "Osiągnąłeś najwyższy poziom wtajemniczenia w sztuce podróżowania między wymiarami. Gwiazdy uznają cię za swojego brata, a kosmos otwiera przed tobą wszystkie swoje ścieżki. Odznaka zawiera w sobie esencję wszystkich poznanych wymiarów i światów.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 51,
    "name": "Strażnik Pradawnej Puszczy",
    "icon": "icons/badge/badge-51.png",
    "desc": "Najstarsze drzewa wybrały cię na swojego powiernika, dzieląc się mądrością tysiącleci. Potrafisz słyszeć szepty prastarych dębów i odczytywać historie zapisane w słojach drzew. Twoja obecność sprawia, że nawet najmłodsze sadzonki emanują magiczną mocą. Odznaka pulsuje życiodajną energią lasu.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 52,
    "name": "Powiernik Świętych Ziół",
    "icon": "icons/badge/badge-52.png",
    "desc": "Poznałeś tajemnice mistycznych roślin rosnących na granicy wymiarów. Duchy natury nauczyły cię rozpoznawać zioła o magicznych właściwościach i wykorzystywać ich moc do otwierania bram między światami. Odznaka emanuje aromatem tysięcy świętych ziół.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 53,
    "name": "Władca Górskich Strumieni",
    "icon": "icons/badge/badge-53.png",
    "desc": "Górskie potoki uznały cię za swojego opiekuna, powierzając ci sekrety ukryte w ich krystalicznie czystych wodach. Potrafisz odnajdywać źródła życiodajnej mocy i prowadzić innych do miejsc, gdzie woda łączy się z magią. Odznaka szemrze delikatnie jak górski strumień.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 54,
    "name": "Emisariusz Kwiatowych Dolin",
    "icon": "icons/badge/badge-54.png",
    "desc": "Zostałeś wybrany przez duchy kwiatów jako ich przedstawiciel. W twoich rękach nawet najprostsze polne kwiaty otwierają bramy do magicznych wymiarów. Potrafisz odczytywać wiadomości zapisane w układzie płatków. Odznaka zmienia kolory jak górska łąka o świcie.",
    "value": 6,
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 55,
    "name": "Mistrz Leśnych Ścieżek",
    "icon": "icons/badge/badge-55.png",
    "desc": "Odkryłeś sekretne szlaki wiodące przez najstarsze lasy świata. Drzewa rozstępują się przed tobą, odsłaniając przejścia do zapomnianych wymiarów. Potrafisz odnaleźć drogę nawet w najgęstszej puszczy. Odznaka emanuje spokojem prastarych borów.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 56,
    "name": "Strażnik Dzikich Ostępów",
    "icon": "icons/badge/badge-56.png",
    "desc": "Najbardziej niedostępne zakątki dzikiej przyrody uznały cię za swojego obrońcę. Potrafisz odnajdywać miejsca, gdzie natura pozostaje nietknięta przez cywilizację, skrywając magiczne portale. Odznaka pulsuje pierwotną energią dzikich ostępów.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 57,
    "name": "Opiekun Świętych Gajów",
    "icon": "icons/badge/badge-57.png",
    "desc": "Pradawne święte gaje powierzyły ci swoje sekrety. Potrafisz odnajdywać miejsca, gdzie drzewa tworzą naturalne kręgi mocy, otwierające przejścia między wymiarami. Odznaka emanuje spokojem i mądrością świętych drzew.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 58,
    "name": "Tkacz Leśnych Szeptów",
    "icon": "icons/badge/badge-58.png",
    "desc": "Potrafisz rozumieć i przekazywać wiadomości niesione przez leśny wiatr. Drzewa dzielą się z tobą swoimi snami, a duchy lasu prowadzą cię do miejsc pełnych magii. Odznaka szeleści delikatnie jak liście na wietrze.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 59,
    "name": "Władca Górskich Mgieł",
    "icon": "icons/badge/badge-59.png",
    "desc": "Poznałeś sekrety ukryte w górskich mgłach i porannej rosie. Potrafisz odnajdywać ścieżki wiodące przez mgielne zasłony do innych wymiarów. Twoja obecność sprawia, że mgły układają się w tajemnicze wzory. Odznaka otacza się delikatną mgiełką.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 60,
    "name": "Kronikarz Naturalnych Cykli",
    "icon": "icons/badge/badge-60.png",
    "desc": "Odkryłeś, jak cykle natury wpływają na otwieranie się bram między wymiarami. Potrafisz przewidzieć czas, gdy granice między światami stają się cieńsze. Odznaka zmienia się subtelnie wraz z fazami księżyca i porami roku.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 61,
    "name": "Powiernik Żywiołów",
    "icon": "icons/badge/badge-61.png",
    "desc": "Pierwotne siły natury uznały cię za godnego swojej mocy. Potrafisz odnajdywać miejsca, gdzie żywioły łączą się w harmonijnej równowadze, tworząc przejścia między wymiarami. Odznaka emanuje energią wszystkich żywiołów.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 62,
    "name": "Strażnik Leśnych Jezior",
    "icon": "icons/badge/badge-62.png",
    "desc": "Odkryłeś tajemnice ukryte w głębi leśnych jezior. Wodne duchy nauczyły cię odnajdywać podwodne przejścia do innych światów. Twoja obecność uspokaja nawet najbardziej wzburzone wody. Odznaka odbija światło jak tafla leśnego jeziora.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 63,
    "name": "Emisariusz Dzikich Zwierząt",
    "icon": "icons/badge/badge-63.png",
    "desc": "Zostałeś wybrany przez duchy zwierząt jako ich przedstawiciel. Potrafisz podążać tropami prowadzącymi do magicznych miejsc i rozumieć mowę dzikich stworzeń. Odznaka nosi w sobie ślady wszystkich leśnych stworzeń.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 64,
    "name": "Mistrz Naturalnych Portali",
    "icon": "icons/badge/badge-64.png",
    "desc": "Poznałeś miejsca, gdzie natura sama tworzy przejścia między wymiarami. Potrafisz odnajdywać i aktywować bramy ukryte w starych drzewach, wodospadach i górskich szczytach. Odznaka pulsuje rytmem naturalnych cykli.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 65,
    "name": "Opiekun Górskich Kryształów",
    "icon": "icons/badge/badge-65.png",
    "desc": "Kryształy rosnące w górskich jaskiniach powierzyły ci swoje sekrety. Potrafisz wykorzystywać ich energię do otwierania przejść między światami i odnajdywania ukrytych ścieżek. Odznaka mieni się jak górski kryształ.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 66,
    "name": "Władca Dzikich Ogrodów",
    "icon": "icons/badge/badge-66.png",
    "desc": "Odkryłeś miejsca, gdzie dzika natura tworzy naturalne ogrody pełne magicznej mocy. Potrafisz pielęgnować rośliny o niezwykłych właściwościach i wykorzystywać ich moc. Odznaka emanuje życiodajną energią dzikich roślin.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 67,
    "name": "Tkacz Naturalnych Wzorów",
    "icon": "icons/badge/badge-67.png",
    "desc": "Potrafisz dostrzegać i interpretować wzory tworzone przez naturę. Umiesz odnajdywać miejsca, gdzie naturalne formy układają się w portale do innych wymiarów. Odznaka zmienia swój wzór jak liście na wietrze.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 68,
    "name": "Strażnik Prastarych Nasion",
    "icon": "icons/badge/badge-68.png",
    "desc": "Zostałeś wybrany jako opiekun magicznych nasion zawierających mądrość pradawnych lasów. Potrafisz budzić drzemiącą w nich moc i tworzyć nowe miejsca pełne magii. Odznaka pulsuje życiem tysięcy przyszłych drzew.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 69,
    "name": "Kronikarz Leśnych Tajemnic",
    "icon": "icons/badge/badge-69.png",
    "desc": "Twoje zapiski zawierają sekrety przekazane przez najstarsze drzewa i dzikie stworzenia. Potrafisz odnajdywać i dokumentować miejsca, gdzie natura odsłania swoje magiczne oblicze. Odznaka szeleści jak kartki pradawnej księgi.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 70,
    "name": "Powiernik Górskiej Ciszy",
    "icon": "icons/badge/badge-70.png",
    "desc": "Wysokie szczyty nauczyły cię słuchać ciszy skrywającej pradawne tajemnice. Potrafisz odnajdywać miejsca, gdzie góry otwierają swoje serca przed podróżnymi. Odznaka emanuje spokojem wysokogórskiej ciszy.",
    "value": 7,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 71,
    "name": "Emisariusz Dzikich Kwiatów",
    "icon": "icons/badge/badge-71.png",
    "desc": "Najrzadsze kwiaty świata wybrały cię na swojego przedstawiciela. Potrafisz odnajdywać miejsca, gdzie kwitną magiczne rośliny otwierające bramy między wymiarami. Odznaka pachnie tysiącem dzikich kwiatów.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 72,
    "name": "Mistrz Naturalnych Cykli",
    "icon": "icons/badge/badge-72.png",
    "desc": "Poznałeś rytm natury i jej wpływ na magiczne przejścia między światami. Potrafisz wyczuć najlepszy moment na przekroczenie granic wymiarów. Odznaka pulsuje w rytm naturalnych cykli życia.",
    "value": 10,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 73,
    "name": "Opiekun Dzikich Szlaków",
    "icon": "icons/badge/badge-73.png",
    "desc": "Zostałeś wybrany jako strażnik ścieżek wiodących przez najdziksze zakątki świata. Potrafisz odnajdywać przejścia ukryte w gęstwinie i prowadzić innych bezpiecznie przez dzikie ostępy. Odznaka emanuje siłą nietkniętej natury.",
    "value": 8,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 74,
    "name": "Władca Leśnych Świątyń",
    "icon": "icons/badge/badge-74.png",
    "desc": "Odkryłeś miejsca, gdzie drzewa tworzą naturalne świątynie pełne magicznej mocy. Potrafisz aktywować ich ukrytą energię i otwierać przejścia do innych wymiarów. Odznaka nosi w sobie świętość prastarych drzew.",
    "value": 9,
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  }
]

BADGES_DATA_STATIC.forEach(badge => {
  badge.nameColor = generateRandomBrightColor();
});

const ITEMS_DATA_STATIC = [{
    "id": 4,
    "name": "Napierśnik Leśnego Strażnika",
    "icon": "icons/items/item-4.png",
    "desc": "Pancerz wykuty z mistycznego metalu przypominającego korę pradawnego dębu. Wzory na jego powierzchni poruszają się delikatnie, dostosowując się do energii okolicznej natury. Chroni nie tylko przed fizycznymi obrażeniami, ale również przed negatywną magią.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 2,
    "name": "Runa Świetlistych Ścieżek",
    "icon": "icons/items/item-2.png",
    "desc": "Starożytny kamień runiczny emanujący delikatnym, błękitnym światłem. Wyryty na nim symbol zmienia się w zależności od bliskości magicznych przejść. W rękach doświadczonego podróżnika może wskazywać najkrótsze ścieżki do miejsc mocy.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 3,
    "name": "Kryształowa Kula Wymiarów",
    "icon": "icons/items/item-3.png",
    "desc": "We wnętrzu tej niewielkiej kuli wirują mgły różnych wymiarów. Gdy skupić na nich wzrok, można dostrzec obrazy odległych krain i ukrytych przejść. W świetle księżyca pokazuje mapę najbliższych portali międzywymiarowych.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 1,
    "name": "Miecz Zaklętych Ostępów",
    "icon": "icons/items/item-1.png",
    "desc": "Ostrze wykute z meteorytu, które pulsuje delikatnym światłem w obecności magicznych stworzeń. Klinga pokryta jest runami ochronnymi, a rękojeść zdobią kryształy wspomagające orientację w dzikich ostępach.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 5,
    "name": "Kompas Astralnego Wędrowca",
    "icon": "icons/items/item-5.png",
    "desc": "To niezwykłe narzędzie nawigacyjne nie wskazuje północy, lecz najbliższe punkty styku różnych wymiarów. Jego tarcza mieni się konstelacjami, a wskazówka wykonana jest z magicznego kryształu reagującego na energie międzywymiarowe.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 6,
    "name": "Hełm Duchów Gór",
    "icon": "icons/items/item-6.png",
    "desc": "Starożytny hełm zdobiony wzorami górskich szczytów. Pozwala słyszeć szepty wiatru niosące ostrzeżenia o niebezpieczeństwach i wskazówki do ukrytych przejść. Kryształy zdobiące skronie wzmacniają więź z górskimi duchami.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 7,
    "name": "Runa Pradawnego Lasu",
    "icon": "icons/items/item-7.png",
    "desc": "Wyryta w kawałku skamieniałego drewna runa emanuje zieloną energią. Aktywuje się w obecności magicznych stworzeń leśnych i pomaga odnaleźć najstarsze drzewa skrywające portale do innych wymiarów.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null,
    "statistics": [{
      "name": "Ochrona",
      "color": "rgb(61, 43, 31)",
      "icon": "./icons/category/ground.png",
      "value": 216,
      "maxValue": 500
    }, {
      "name": "Szybkość",
      "color": "rgb(135, 206, 235)",
      "icon": "./icons/category/air.png",
      "value": 185,
      "maxValue": 500
    }, {
      "name": "Siła",
      "color": "rgb(255, 69, 0)",
      "icon": "./icons/category/fire.png",
      "value": 175,
      "maxValue": 500
    }]
  },
  {
    "id": 8,
    "name": "Naramienniki Strażnika Wymiarów",
    "icon": "icons/items/item-8.png",
    "desc": "Para naramienników wykonanych z nieznanego metalu, który zmienia kolor w zależności od bliskości portali międzywymiarowych. Chronią przed energiami powstającymi podczas przejść między światami.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 9,
    "name": "Kula Mglistych Wizji",
    "icon": "icons/items/item-9.png",
    "desc": "W tej kuli z górskiego kryształu nieustannie wirują srebrzyste mgły. Pozwala zajrzeć do innych wymiarów i odnaleźć bezpieczne przejścia między światami. W świetle księżyca pokazuje ukryte ścieżki.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 10,
    "name": "Sztylet Świetlistych Cieni",
    "icon": "icons/items/item-10.png",
    "desc": "Ostrze wykute ze światła gwiazd, które może przecinać zasłony między wymiarami. W ciemności emituje delikatną poświatę, wskazując drogę do magicznych portali.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 11,
    "name": "Rękawice Mistycznego Podróżnika",
    "icon": "icons/items/item-11.png",
    "desc": "Te skórzane rękawice zdobione runami ochronnymi pozwalają bezpiecznie dotykać magicznych artefaktów i wyczuwać energie portali międzywymiarowych. Materiał zdaje się żyć własnym życiem.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null,
    "statistics": [{
      "name": "Ochrona",
      "color": "rgb(61, 43, 31)",
      "icon": "./icons/category/ground.png",
      "value": 216,
      "maxValue": 500
    }, {
      "name": "Szybkość",
      "color": "rgb(135, 206, 235)",
      "icon": "./icons/category/air.png",
      "value": 185,
      "maxValue": 500
    }, {
      "name": "Siła",
      "color": "rgb(255, 69, 0)",
      "icon": "./icons/category/fire.png",
      "value": 175,
      "maxValue": 500
    }]
  },
  {
    "id": 12,
    "name": "Amulet Zaklętych Ścieżek",
    "icon": "icons/items/item-12.png",
    "desc": "Wykonany z rzadkiego kryształu amulet pulsuje ciepłem, gdy jego właściciel zbliża się do ukrytych przejść. Zawiera w sobie mapy wszystkich odkrytych dotąd portali.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 13,
    "name": "Pierścień Leśnego Szeptu",
    "icon": "icons/items/item-13.png",
    "desc": "Srebrny pierścień z wplecionym w niego fragmentem prastarego drzewa. Pozwala komunikować się z duchami lasu i odnajdywać ścieżki ukryte przed zwykłymi wędrowcami.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 14,
    "name": "Topór Strażnika Bram",
    "icon": "icons/items/item-14.png",
    "desc": "Potężny topór ceremonialny, którego ostrze zostało wykute z meteorytu. Może otwierać i zamykać portale międzywymiarowe, a także chronić je przed intruzami.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 15,
    "name": "Runa Astralnych Mostów",
    "icon": "icons/items/item-15.png",
    "desc": "Tajemnicza runa wyryta w gwiazdowym krysztale. Aktywowana podczas pełni księżyca pokazuje położenie wszystkich aktywnych portali w okolicy.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 16,
    "name": "Buty Cichego Kroku",
    "icon": "icons/items/item-16.png",
    "desc": "Wykonane z magicznie utwardzonej skóry buty pozwalają poruszać się bezszelestnie i wyczuwać magiczne wibracje płynące z ziemi. Idealne do eksploracji świętych miejsc.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 17,
    "name": "Kula Pierwotnych Żywiołów",
    "icon": "icons/items/item-17.png",
    "desc": "W tej kryształowej kuli nieustannie wirują esencje czterech żywiołów. Pozwala kontrolować elementarne energie i wykorzystywać je do otwierania przejść międzywymiarowych.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 18,
    "name": "Różdżka Świetlistych Dróg",
    "icon": "icons/items/item-18.png",
    "desc": "Narzędzie wykonane z gałęzi świętego drzewa. Emituje światło wskazujące najbezpieczniejszą drogę przez dzikie ostępy i pomaga lokalizować magiczne portale.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 19,
    "name": "Pierścień Górskiego Ducha",
    "icon": "icons/items/item-19.png",
    "desc": "Masywny pierścień wykuty z górskiego kryształu. Pozwala komunikować się z duchami gór i odnajdywać ukryte przejścia w skalnych ścianach.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 20,
    "name": "Włócznia Strażników Portali",
    "icon": "icons/items/item-20.png",
    "desc": "Starożytna włócznia o grocie wykonanym z magicznego metalu. Może być używana jako klucz do określonych portali międzywymiarowych i broń przeciw wrogim istotom.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 21,
    "name": "Runa Mglistych Przejść",
    "icon": "icons/items/item-21.png",
    "desc": "Runa, która w kontakcie z mgłą zaczyna świecić, wskazując ukryte przejścia. Pomaga bezpiecznie nawigować przez obszary spowite magiczną mgłą.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 22,
    "name": "Kula Czasowych Wirów",
    "icon": "icons/items/item-22.png",
    "desc": "Ta tajemnicza kula zawiera w sobie miniaturowe wiry czasowe. Pozwala przewidzieć, kiedy i gdzie pojawią się kolejne portale międzywymiarowe.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 23,
    "name": "Pas Wymiarowego Wędrowca",
    "icon": "icons/items/item-23.png",
    "desc": "Wykonany z magicznie wzmocnionej skóry pas z licznymi sakwami. Chroni przed negatywnymi efektami podróży międzywymiarowych i pomaga przechowywać magiczne artefakty.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 24,
    "name": "Amulet Świętych Drzew",
    "icon": "icons/items/item-24.png",
    "desc": "Amulet zawierający esencję najstarszych drzew świata. Pozwala odnajdywać pradawne drzewa-portale i komunikować się z leśnymi strażnikami.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 25,
    "name": "Miecz Wymiarowych Szczelin",
    "icon": "icons/items/item-25.png",
    "desc": "Legendarne ostrze zdolne do przecinania barier między wymiarami. W rękach doświadczonego wojownika może tworzyć tymczasowe portale między światami.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 26,
    "name": "Tarcza Międzyświatów",
    "icon": "icons/items/item-26.png",
    "desc": "Mistyczna tarcza pokryta symbolami wszystkich znanych wymiarów. Chroni przed niebezpiecznymi energiami powstającymi podczas przejść między światami.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 27,
    "name": "Kompas Zaklętych Szlaków",
    "icon": "icons/items/item-27.png",
    "desc": "Precyzyjne narzędzie nawigacyjne wskazujące nie tylko kierunki świata, ale także położenie najbliższych magicznych portali i miejsc mocy.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 28,
    "name": "Karwasze Strażnika Bram",
    "icon": "icons/items/item-28.png",
    "desc": "Para karwaszy wykonanych z magicznego metalu. Chronią przedramiona podczas przekraczania niestabilnych portali i pomagają kontrolować ich energię.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 29,
    "name": "Runa Świętych Przejść",
    "icon": "icons/items/item-29.png",
    "desc": "Potężna runa wyryta w kawałku meteorytu. Może być używana do pieczętowania i otwierania portali międzywymiarowych w świętych miejscach.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 30,
    "name": "Kostur Wymiarowego Wędrowca",
    "icon": "icons/items/item-30.png",
    "desc": "Magiczny kostur wykonany z drewna świętego drzewa i zdobiony kryształami. Służy jako pomoc w wędrówce i narzędzie do badania stabilności portali.",
    "value": 9,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 467,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 475,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 31,
    "name": "Zbroja Astralnego Wędrowca",
    "icon": "icons/items/item-31.png",
    "desc": "Pełna zbroja płytowa wykuta z metalu pochodzącego z gwiazd. Powierzchnia pancerza odbija światło gwiazd i księżyca, a wzory na niej zmieniają się w zależności od położenia konstelacji.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 32,
    "name": "Runa Czasowych Portali",
    "icon": "icons/items/item-32.png",
    "desc": "Starożytna runa wyryta w krysztale czasu. Pozwala wyczuć momenty, gdy granice między wymiarami stają się najcieńsze, ułatwiając tworzenie stabilnych przejść.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 33,
    "name": "Kula Zaklętych Wymiarów",
    "icon": "icons/items/item-33.png",
    "desc": "Sferyczny artefakt wykonany z nieznanego materiału. W jego wnętrzu można dostrzec miniaturowe obrazy różnych wymiarów, a dotknięcie odpowiedniego może przenieść użytkownika w wybrane miejsce.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 34,
    "name": "Młot Międzywymiarowego Kowala",
    "icon": "icons/items/item-34.png",
    "desc": "Potężne narzędzie używane do kucia i naprawy magicznych przedmiotów. W rękach mistrza może również służyć do 'naprawiania' niestabilnych portali między wymiarami.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 35,
    "name": "Pierścień Strażnika Czasu",
    "icon": "icons/items/item-35.png",
    "desc": "Misternie wykonany pierścień z wbudowanym fragmentem kryształu czasu. Ostrzega przed anomaliami czasowymi i chroni właściciela przed ich negatywnym wpływem.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 36,
    "name": "Rękawice Wymiarowego Tkacza",
    "icon": "icons/items/item-36.png",
    "desc": "Para magicznych rękawic umożliwiających manipulowanie energiami międzywymiarowymi. Pozwalają na precyzyjne 'zszywanie' i 'rozplatanie' przejść między światami.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 37,
    "name": "Amulet Gwiezdnych Szlaków",
    "icon": "icons/items/item-37.png",
    "desc": "Medalion zawierający mapę gwiezdnych ścieżek łączących różne wymiary. Świeci jaśniej, gdy jego właściciel zbliża się do potencjalnego przejścia międzywymiarowego.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 38,
    "name": "Kula Pierwotnego Chaosu",
    "icon": "icons/items/item-38.png",
    "desc": "Starożytny artefakt zawierający esencję pierwotnego chaosu. Może być używany do tworzenia nowych przejść między wymiarami, ale wymaga ogromnej ostrożności w użyciu.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 39,
    "name": "Sztylet Wymiarowego Złodzieja",
    "icon": "icons/items/item-39.png",
    "desc": "Precyzyjnie wykonany sztylet zdolny do 'wycinania' tymczasowych przejść między wymiarami. W niewłaściwych rękach może być niezwykle niebezpieczny.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 40,
    "name": "Runa Świętych Pieczęci",
    "icon": "icons/items/item-40.png",
    "desc": "Potężna runa używana do pieczętowania niebezpiecznych portali. Może również służyć jako klucz do otwierania zapieczętowanych przejść.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 41,
    "name": "Nagolenniki Międzywymiarowego Skoku",
    "icon": "icons/items/item-41.png",
    "desc": "Para magicznie wzmocnionych nagolenników pozwalających na wykonywanie krótkich skoków między wymiarami. Szczególnie przydatne w sytuacjach awaryjnych.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 42,
    "name": "Kryształowe Oko Poszukiwacza",
    "icon": "icons/items/item-42.png",
    "desc": "Narzędzie w kształcie oka wykonane z rzadkiego kryształu. Pozwala dostrzegać ukryte przejścia i anomalie wymiarowe niewidoczne gołym okiem.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 43,
    "name": "Miecz Wymiarowego Strażnika",
    "icon": "icons/items/item-43.png",
    "desc": "Potężne ostrze nasycone energią międzywymiarową. Służy zarówno do obrony przed wrogimi istotami, jak i do stabilizacji niebezpiecznych portali.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 44,
    "name": "Kolczuga Podróżnika Wymiarów",
    "icon": "icons/items/item-44.png",
    "desc": "Lekka, ale niezwykle wytrzymała kolczuga chroniąca przed negatywnymi efektami podróży międzywymiarowych. Każde ogniwo zawiera mikroskopijna runę ochronną.",
    "value": 3,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z",
    "statistics": [{
      "name": "Ochrona",
      "color": "rgb(61, 43, 31)",
      "icon": "./icons/category/ground.png",
      "value": 106,
      "maxValue": 500
    }, {
      "name": "Szybkość",
      "color": "rgb(135, 206, 235)",
      "icon": "./icons/category/air.png",
      "value": 55,
      "maxValue": 500
    }, {
      "name": "Siła",
      "color": "rgb(255, 69, 0)",
      "icon": "./icons/category/fire.png",
      "value": 65,
      "maxValue": 500
    }]
  },
  {
    "id": 45,
    "name": "Runa Stabilności",
    "icon": "icons/items/item-45.png",
    "desc": "Podstawowa runa używana przez początkujących podróżników wymiarowych. Pomaga utrzymać stabilność podczas przekraczania prostych portali.",
    "value": 2,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z",
    "statistics": [{
      "name": "Ochrona",
      "color": "rgb(61, 43, 31)",
      "icon": "./icons/category/ground.png",
      "value": 106,
      "maxValue": 500
    }, {
      "name": "Szybkość",
      "color": "rgb(135, 206, 235)",
      "icon": "./icons/category/air.png",
      "value": 55,
      "maxValue": 500
    }, {
      "name": "Siła",
      "color": "rgb(255, 69, 0)",
      "icon": "./icons/category/fire.png",
      "value": 65,
      "maxValue": 500
    }]
  },
  {
    "id": 46,
    "name": "Pierścień Wielości Światów",
    "icon": "icons/items/item-46.png",
    "desc": "Pierścień zdobiony symbolami różnych wymiarów. Pozwala użytkownikowi wyczuwać obecność innych światów i znajdować punkty styku między nimi.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 47,
    "name": "Topór Rozłupywacza Wymiarów",
    "icon": "icons/items/item-47.png",
    "desc": "Masywny topór ceremonialny używany do otwierania nowych przejść między wymiarami. Wymaga ogromnej siły fizycznej i magicznej do właściwego użycia.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 48,
    "name": "Kula Spokojnych Przejść",
    "icon": "icons/items/item-48.png",
    "desc": "Kryształowa kula emanująca uspokajającą energią. Stabilizuje pobliskie portale i ułatwia bezpieczne przejście między wymiarami.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 49,
    "name": "Kompas Zaginionych Ścieżek",
    "icon": "icons/items/item-49.png",
    "desc": "Zaawansowane narzędzie nawigacyjne wskazujące położenie zapomnianych i ukrytych przejść między wymiarami. Szczególnie skuteczne w dzikich ostępach.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 50,
    "name": "Rękawice Bezpiecznego Przejścia",
    "icon": "icons/items/item-50.png",
    "desc": "Para magicznych rękawic chroniących przed szkodliwymi efektami niestabilnych portali. Pozwalają również na bezpieczne manipulowanie artefaktami międzywymiarowymi.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 51,
    "name": "Amulet Wielu Ścieżek",
    "icon": "icons/items/item-51.png",
    "desc": "Złożony amulet pokazujący możliwe ścieżki przez różne wymiary. Każdy z jego kryształów reprezentuje inny możliwy szlak podróży.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 52,
    "name": "Runa Ostatniej Drogi",
    "icon": "icons/items/item-52.png",
    "desc": "Potężna runa awaryjnego powrotu. Aktywowana w sytuacji kryzysowej, natychmiast przenosi użytkownika do ostatniego bezpiecznego miejsca.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 53,
    "name": "Hełm Jasnowidzącego",
    "icon": "icons/items/item-53.png",
    "desc": "Bogato zdobiony hełm zwiększający zdolność postrzegania anomalii wymiarowych. Wyposażony w specjalne soczewki z magicznych kryształów.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 54,
    "name": "Kula Międzywymiarowej Pamięci",
    "icon": "icons/items/item-54.png",
    "desc": "Tajemnicza kula przechowująca wspomnienia z podróży przez różne wymiary. Może służyć jako przewodnik dla innych podróżników.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 55,
    "name": "Włócznia Strażnika Bram",
    "icon": "icons/items/item-55.png",
    "desc": "Ceremonialna włócznia używana przez elitarnych strażników międzywymiarowych portali. Może zarówno otwierać, jak i zamykać przejścia między światami.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 56,
    "name": "Tarcza Wymiarowego Obrońcy",
    "icon": "icons/items/item-56.png",
    "desc": "Masywna tarcza wykonana ze stopu magicznych metali. Jej powierzchnia odbija ataki energetyczne, a wbudowane kryształy tworzą pole ochronne podczas przekraczania niestabilnych portali.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 57,
    "name": "Runa Czystych Przejść",
    "icon": "icons/items/item-57.png",
    "desc": "Wyrafinowana runa oczyszczająca skażone lub uszkodzone portale międzywymiarowe. Emituje błękitne światło podczas procesu oczyszczania anomalii wymiarowych.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 58,
    "name": "Kula Wiecznego Wędrowca",
    "icon": "icons/items/item-58.png",
    "desc": "Starożytna kula zawierająca esencję niezliczonych podróży przez wymiary. Pokazuje najlepsze momenty do przekroczenia granic między światami.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 59,
    "name": "Naramienniki Strażnika Portali",
    "icon": "icons/items/item-59.png",
    "desc": "Para bogato zdobionych naramienników, które wzmacniają zdolność kontrolowania energii międzywymiarowych. Chronią ramiona przed szkodliwym wpływem niestabilnych przejść.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 60,
    "name": "Pierścień Wymiarowej Harmonii",
    "icon": "icons/items/item-60.png",
    "desc": "Delikatny pierścień wykonany z nieznanego metalu, który pomaga zachować równowagę podczas podróży między wymiarami. Dostosowuje się do energii nosiciela.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 61,
    "name": "Sztylet Cichego Przejścia",
    "icon": "icons/items/item-61.png",
    "desc": "Precyzyjnie wykonany sztylet pozwalający na dyskretne tworzenie małych portali. Idealny dla zwiadowców i badaczy nowych wymiarów.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 62,
    "name": "Amulet Bezpiecznego Powrotu",
    "icon": "icons/items/item-62.png",
    "desc": "Potężny amulet awaryjny, który w przypadku zagrożenia automatycznie przenosi właściciela do wcześniej ustalonego bezpiecznego miejsca.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 63,
    "name": "Rękawice Wymiarowego Tkacza",
    "icon": "icons/items/item-63.png",
    "desc": "Mistrzowsko wykonane rękawice pozwalające na precyzyjne manipulowanie strukturą portali międzywymiarowych. Chronią dłonie przed szkodliwymi energiami.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 64,
    "name": "Młot Burzyciela Barier",
    "icon": "icons/items/item-64.png",
    "desc": "Potężne narzędzie bojowe używane do rozbijania magicznych barier między wymiarami. W rękach doświadczonego wojownika może tworzyć nowe przejścia.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 65,
    "name": "Runa Stabilnych Ścieżek",
    "icon": "icons/items/item-65.png",
    "desc": "Zaawansowana runa używana do stabilizacji niebezpiecznych przejść międzywymiarowych. Tworzy bezpieczne korytarze w chaosie wymiarów.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 66,
    "name": "Buty Międzywymiarowego Skoku",
    "icon": "icons/items/item-66.png",
    "desc": "Magicznie wzmocnione buty umożliwiające wykonywanie krótkich skoków między bliskimi wymiarami. Wyposażone w stabilizatory energii.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 67,
    "name": "Kula Wszechwidzącego Oka",
    "icon": "icons/items/item-67.png",
    "desc": "Mistyczna kula pozwalająca obserwować jednocześnie wiele wymiarów. Szczególnie przydatna w planowaniu bezpiecznych tras podróży.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 68,
    "name": "Miecz Wymiarowego Łowcy",
    "icon": "icons/items/item-68.png",
    "desc": "Śmiercionośne ostrze nasycone energią międzywymiarową. Szczególnie skuteczne przeciwko istotom próbującym zakłócić stabilność portali.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 69,
    "name": "Kompas Zagubionego Wędrowca",
    "icon": "icons/items/item-69.png",
    "desc": "Precyzyjne narzędzie nawigacyjne pomagające odnaleźć drogę w nieznanych wymiarach. Zawsze wskazuje najbliższe stabilne przejście.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 70,
    "name": "Napierśnik Wymiarowego Strażnika",
    "icon": "icons/items/item-70.png",
    "desc": "Potężny pancerz chroniący przed szkodliwymi efektami podróży międzywymiarowych. Zdobiony runami ochronnymi i wyposażony w kryształy stabilizujące.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 71,
    "name": "Runa Ostatecznego Powrotu",
    "icon": "icons/items/item-71.png",
    "desc": "Niezwykle rzadka runa pozwalająca na natychmiastowy powrót do punktu wyjścia z dowolnego wymiaru. Aktywuje się tylko w sytuacjach krytycznych.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 72,
    "name": "Kostur Wymiarowego Mędrca",
    "icon": "icons/items/item-72.png",
    "desc": "Starożytny kostur służący do badania i katalogowania nowych wymiarów. Wyposażony w kryształy rejestrujące dane o odwiedzanych światach.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 73,
    "name": "Amulet Wielu Światów",
    "icon": "icons/items/item-73.png",
    "desc": "Złożony amulet zawierający fragmenty różnych wymiarów. Pozwala na szybkie rozpoznawanie typu wymiaru i potencjalnych zagrożeń.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 74,
    "name": "Karwasze Obrońcy Portali",
    "icon": "icons/items/item-74.png",
    "desc": "Para magicznych karwaszy zapewniających dodatkową ochronę podczas manipulowania energiami portali. Wyposażone w małe kryształy stabilizujące.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 75,
    "name": "Topór Strażnika Bram",
    "icon": "icons/items/item-75.png",
    "desc": "Potężna broń ceremonialna używana do otwierania i zamykania największych portali międzywymiarowych. Wymaga ogromnej siły i umiejętności.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 76,
    "name": "Rękawice Pewnego Chwytu",
    "icon": "icons/items/item-76.png",
    "desc": "Wzmocnione rękawice pozwalające na bezpieczne dotykanie przedmiotów z innych wymiarów. Chronią przed szkodliwymi efektami obcych energii.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 77,
    "name": "Kula Czasoprzestrzennych Wizji",
    "icon": "icons/items/item-77.png",
    "desc": "Zaawansowany artefakt pokazujący możliwe ścieżki podróży przez różne wymiary i ich potencjalne konsekwencje.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 78,
    "name": "Pas Wymiarowego Podróżnika",
    "icon": "icons/items/item-78.png",
    "desc": "Wielofunkcyjny pas z licznymi sakwami i uchwytami na narzędzia. Magicznie wzmocniony, chroni przedmioty przed efektami przejść międzywymiarowych.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 79,
    "name": "Hełm Jasnowidzenia Wymiarów",
    "icon": "icons/items/item-79.png",
    "desc": "Zaawansowany hełm wyposażony w system magicznych soczewek i kryształów, pozwalający na dokładną analizę struktury portali.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 80,
    "name": "Runa Wymiarowych Pieczęci",
    "icon": "icons/items/item-80.png",
    "desc": "Potężna runa używana do trwałego zamykania niebezpiecznych portali. W rękach mistrza może również służyć do tworzenia nowych, stabilnych przejść.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 81,
    "name": "Włócznia Wymiarowego Zwiadowcy",
    "icon": "icons/items/item-81.png",
    "desc": "Lekka, ale wytrzymała włócznia pozwalająca na badanie stabilności portali z bezpiecznej odległości. Kryształ na grocie reaguje na niebezpieczne anomalie wymiarowe.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 82,
    "name": "Runa Bezpiecznej Drogi",
    "icon": "icons/items/item-82.png",
    "desc": "Defensywna runa tworząca ochronny tunel podczas przejścia między wymiarami. Szczególnie przydatna dla niedoświadczonych podróżników.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 83,
    "name": "Kula Wymiarowych Szeptów",
    "icon": "icons/items/item-83.png",
    "desc": "Tajemnicza kula przekazująca ostrzeżenia i wskazówki od istot z innych wymiarów. Służy jako przewodnik w nieznanych światach.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 84,
    "name": "Nagolenniki Stabilnego Kroku",
    "icon": "icons/items/item-84.png",
    "desc": "Para magicznych nagolenników zapewniających stabilność podczas przechodzenia przez niestabilne portale. Automatycznie dostosowują się do grawitacji różnych wymiarów.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 85,
    "name": "Amulet Wymiarowego Kompasu",
    "icon": "icons/items/item-85.png",
    "desc": "Złożony amulet łączący funkcje kompasu i detektora portali. Zawsze wskazuje najbezpieczniejszą drogę do celu przez różne wymiary.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 86,
    "name": "Miecz Rozcinacza Wymiarów",
    "icon": "icons/items/item-86.png",
    "desc": "Legendarne ostrze zdolne do tworzenia kontrolowanych szczelin między wymiarami. W rękach mistrza może służyć do tworzenia stałych przejść.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 87,
    "name": "Pierścień Strażnika Czasu",
    "icon": "icons/items/item-87.png",
    "desc": "Mistyczny pierścień chroniący przed anomaliami czasowymi występującymi podczas podróży międzywymiarowych. Pozwala zachować właściwy przepływ czasu.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 88,
    "name": "Tarcza Wymiarowej Ochrony",
    "icon": "icons/items/item-88.png",
    "desc": "Lekka, ale niezwykle skuteczna tarcza odbijająca szkodliwe energie międzywymiarowe. Wbudowane kryształy tworzą dodatkową barierę ochronną.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 89,
    "name": "Runa Ostatniego Ratunku",
    "icon": "icons/items/item-89.png",
    "desc": "Potężna runa awaryjna aktywująca się w momencie śmiertelnego zagrożenia. Natychmiast przenosi użytkownika do najbezpieczniejszego pobliskiego wymiaru.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 90,
    "name": "Kolczuga Wymiarowego Podróżnika",
    "icon": "icons/items/item-90.png",
    "desc": "Elastyczna kolczuga wykonana ze specjalnego stopu magicznych metali. Każde ogniwo zawiera mikroskopijną runę ochronną przeciw energiom międzywymiarowym.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 91,
    "name": "Kula Wielu Rzeczywistości",
    "icon": "icons/items/item-91.png",
    "desc": "Zaawansowany artefakt pozwalający na jednoczesne obserwowanie wielu różnych wymiarów. Niezbędne narzędzie dla badaczy międzywymiarowych anomalii.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 92,
    "name": "Sztylet Cichego Zwiadowcy",
    "icon": "icons/items/item-92.png",
    "desc": "Precyzyjnie wykonany sztylet umożliwiający dyskretne tworzenie małych portali zwiadowczych. Idealny do rekonesansu w nieznanych wymiarach.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 93,
    "name": "Rękawice Pewnej Manipulacji",
    "icon": "icons/items/item-93.png",
    "desc": "Mistrzowsko wykonane rękawice zapewniające maksymalną precyzję podczas manipulowania strukturą portali i artefaktów międzywymiarowych.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 94,
    "name": "Młot Wymiarowego Kowala",
    "icon": "icons/items/item-94.png",
    "desc": "Potężne narzędzie używane do naprawy uszkodzonych portali i tworzenia nowych przejść. Wymaga wielkiej siły i umiejętności.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 95,
    "name": "Buty Cichego Przemieszczania",
    "icon": "icons/items/item-95.png",
    "desc": "Magicznie wzmocnione buty pozwalające na bezszelestne poruszanie się między wymiarami. Idealne dla zwiadowców i szpiegów.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 96,
    "name": "Kryształowy Kompas Wymiarów",
    "icon": "icons/items/item-96.png",
    "desc": "Precyzyjne narzędzie nawigacyjne wykonane z rzadkich kryształów. Wskazuje najbezpieczniejsze trasy przez różne wymiary.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 97,
    "name": "Hełm Wymiarowego Badacza",
    "icon": "icons/items/item-97.png",
    "desc": "Zaawansowany hełm wyposażony w system magicznych soczewek i sensorów. Pozwala na dokładną analizę struktury wymiarów i portali.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 98,
    "name": "Runa Wymiarowej Pieczęci",
    "icon": "icons/items/item-98.png",
    "desc": "Potężna runa służąca do trwałego zamykania niebezpiecznych portali. W rękach mistrza może też tworzyć nowe, stabilne przejścia.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 99,
    "name": "Kostur Międzywymiarowego Mędrca",
    "icon": "icons/items/item-99.png",
    "desc": "Starożytny kostur używany do badania i katalogowania nowych wymiarów. Zawiera kryształy przechowujące informacje o odkrytych światach.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 100,
    "name": "Amulet Wszechświatów",
    "icon": "icons/items/item-100.png",
    "desc": "Legendarny amulet zawierający esencje wszystkich znanych wymiarów. Pozwala na intuicyjne odnajdywanie najlepszych ścieżek podróży.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 101,
    "name": "Karwasze Wymiarowego Strażnika",
    "icon": "icons/items/item-101.png",
    "desc": "Para mistrzowsko wykonanych karwaszy zapewniających ochronę podczas manipulowania energiami portali. Wyposażone w stabilizatory wymiarowe.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 102,
    "name": "Topór Wymiarowego Wojownika",
    "icon": "icons/items/item-102.png",
    "desc": "Potężna broń bojowa nasycona energią międzywymiarową. Może zarówno niszczyć niestabilne portale, jak i tworzyć nowe przejścia.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 103,
    "name": "Pas Wymiarowego Ekwipunku",
    "icon": "icons/items/item-103.png",
    "desc": "Magiczny pas z wieloma kieszeniami chronionymi przed efektami podróży międzywymiarowych. Niezbędny element wyposażenia każdego podróżnika.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 104,
    "name": "Runa Stabilnego Przejścia",
    "icon": "icons/items/item-104.png",
    "desc": "Zaawansowana runa używana do tworzenia i utrzymywania stabilnych przejść między wymiarami. Idealna dla regularnie uczęszczanych tras.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 105,
    "name": "Kula Wymiarowego Oka",
    "icon": "icons/items/item-105.png",
    "desc": "Mistyczna kula umożliwiająca obserwację i analizę różnych wymiarów z bezpiecznej odległości. Niezastąpione narzędzie dla badaczy.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 106,
    "name": "Napierśnik Międzywymiarowego Wędrowca",
    "icon": "icons/items/item-106.png",
    "desc": "Lekki, ale niezwykle wytrzymały napierśnik wykonany z magicznego stopu. Chroni przed szkodliwymi energiami podczas przekraczania niestabilnych portali.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 107,
    "name": "Runa Wymiarowego Skoku",
    "icon": "icons/items/item-107.png",
    "desc": "Zaawansowana runa umożliwiająca szybkie przemieszczanie się między bliskimi wymiarami. Idealna dla doświadczonych podróżników w sytuacjach awaryjnych.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 108,
    "name": "Włócznia Strażnika Portali",
    "icon": "icons/items/item-108.png",
    "desc": "Elegancka włócznia ceremonialna używana przez elitarnych strażników. Jej grot może wykrywać słabe punkty w strukturze wymiarów i stabilizować je.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 109,
    "name": "Pierścień Wymiarowego Schronienia",
    "icon": "icons/items/item-109.png",
    "desc": "Magiczny pierścień tworzący małą przestrzeń ochronną wokół użytkownika podczas niebezpiecznych przejść międzywymiarowych.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 110,
    "name": "Kula Przestrzennych Anomalii",
    "icon": "icons/items/item-110.png",
    "desc": "Specjalistyczne narzędzie do wykrywania i analizowania anomalii w strukturze wymiarów. Niezbędna dla badaczy niestabilnych portali.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 111,
    "name": "Miecz Wymiarowego Łowcy",
    "icon": "icons/items/item-111.png",
    "desc": "Precyzyjnie wykonane ostrze nasycone energią anty-wymiarową. Szczególnie skuteczne przeciwko istotom próbującym zakłócić stabilność portali.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 112,
    "name": "Amulet Bezpiecznych Przejść",
    "icon": "icons/items/item-112.png",
    "desc": "Złożony amulet ochronny tworzący bezpieczną ścieżkę podczas przechodzenia przez niestabilne portale. Ostrzega przed potencjalnymi zagrożeniami.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 113,
    "name": "Rękawice Wymiarowego Tkacza",
    "icon": "icons/items/item-113.png",
    "desc": "Para mistrzowskich rękawic umożliwiających precyzyjną manipulację energiami międzywymiarowymi. Pozwalają na 'zszywanie' rozerwanych portali.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 114,
    "name": "Tarcza Międzywymiarowego Strażnika",
    "icon": "icons/items/item-114.png",
    "desc": "Potężna tarcza defensywna chroniąca przed chaotycznymi energiami niestabilnych portali. Wyposażona w system run stabilizujących.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 115,
    "name": "Runa Wymiarowego Powrotu",
    "icon": "icons/items/item-115.png",
    "desc": "Niezawodna runa awaryjna, która w przypadku zagrożenia automatycznie przenosi użytkownika do wcześniej oznaczonego bezpiecznego miejsca.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 116,
    "name": "Kompas Zaginionych Portali",
    "icon": "icons/items/item-116.png",
    "desc": "Zaawansowane narzędzie nawigacyjne wskazujące położenie ukrytych i zapomnianych portali międzywymiarowych. Reaguje na najmniejsze ślady magii.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 117,
    "name": "Młot Wymiarowego Konstruktora",
    "icon": "icons/items/item-117.png",
    "desc": "Potężne narzędzie używane do tworzenia i naprawy stałych portali międzywymiarowych. Wymaga wielkiej wiedzy i umiejętności.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 118,
    "name": "Sztylet Cichego Przejścia",
    "icon": "icons/items/item-118.png",
    "desc": "Delikatny sztylet pozwalający na dyskretne tworzenie małych, tymczasowych portali. Idealny do szybkiej ewakuacji lub zwiadu.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 119,
    "name": "Karwasze Stabilnego Przejścia",
    "icon": "icons/items/item-119.png",
    "desc": "Para magicznych karwaszy pomagających utrzymać stabilność podczas przechodzenia przez portale. Zawierają małe kryształy stabilizujące.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 120,
    "name": "Kula Wymiarowych Wizji",
    "icon": "icons/items/item-120.png",
    "desc": "Mistyczna kula pokazująca obrazy z różnych wymiarów. Pozwala na bezpieczne obserwowanie innych światów przed podjęciem podróży.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 121,
    "name": "Hełm Międzywymiarowego Badacza",
    "icon": "icons/items/item-121.png",
    "desc": "Zaawansowany hełm wyposażony w system magicznych soczewek i czujników. Umożliwia szczegółową analizę struktury portali.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 122,
    "name": "Buty Cichego Wędrowca",
    "icon": "icons/items/item-122.png",
    "desc": "Magicznie wzmocnione buty pozwalające na bezszelestne przemieszczanie się między wymiarami. Tłumią wszelkie dźwięki i ślady energii.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 123,
    "name": "Topór Wymiarowego Strażnika",
    "icon": "icons/items/item-123.png",
    "desc": "Ceremonialna broń używana do zamykania niebezpiecznych portali i obrony przed intruzami z innych wymiarów. Emanuje potężną energią ochronną.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 124,
    "name": "Runa Wymiarowej Pieczęci",
    "icon": "icons/items/item-124.png",
    "desc": "Potężna runa używana do trwałego zamykania niestabilnych lub niebezpiecznych portali. Tylko doświadczeni mistrzowie mogą złamać jej pieczęć.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 125,
    "name": "Pas Wymiarowego Ekwipunku",
    "icon": "icons/items/item-125.png",
    "desc": "Wielofunkcyjny pas z magicznymi sakwami chroniącymi przedmioty przed szkodliwymi efektami podróży międzywymiarowych.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 126,
    "name": "Kostur Wymiarowego Wędrowca",
    "icon": "icons/items/item-126.png",
    "desc": "Elegancki kostur podróżny wyposażony w kryształy nawigacyjne i stabilizatory energii. Pomaga w bezpiecznym przekraczaniu portali.",
    "value": 8,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 375,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 427,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 399,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 478,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 127,
    "name": "Nagolenniki Pewnego Kroku",
    "icon": "icons/items/item-127.png",
    "desc": "Para magicznych nagolenników zapewniających stabilność podczas przechodzenia przez niestabilne portale. Automatycznie dostosowują się do różnych wymiarów.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 128,
    "name": "Kryształowe Oko Wymiaru",
    "icon": "icons/items/item-128.png",
    "desc": "Zaawansowane narzędzie badawcze w kształcie oka, wykonane z rzadkiego kryształu. Pozwala dostrzegać szczeliny i anomalie między wymiarami.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 129,
    "name": "Rękawice Wymiarowego Badacza",
    "icon": "icons/items/item-129.png",
    "desc": "Specjalistyczne rękawice ochronne pozwalające na bezpieczne badanie artefaktów z innych wymiarów. Wyposażone w czujniki magicznej energii.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 130,
    "name": "Amulet Wymiarowego Skoku",
    "icon": "icons/items/item-130.png",
    "desc": "Potężny amulet umożliwiający szybkie przemieszczanie się między znanymi wymiarami. Wymaga doświadczenia i precyzyjnego dostrojenia energii.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 131,
    "name": "Włócznia Wymiarowego Tropiciela",
    "icon": "icons/items/item-131.png",
    "desc": "Wyważona włócznia z grotem z magicznego kryształu, który rozświetla się w obecności ukrytych portali. Pozwala na bezpieczne sondowanie niestabilnych przejść.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 132,
    "name": "Runa Czystego Przejścia",
    "icon": "icons/items/item-132.png",
    "desc": "Specjalistyczna runa oczyszczająca skażone portale z niebezpiecznych energii. Tworzy bezpieczny korytarz przejścia przez niestabilne wymiary.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 133,
    "name": "Kolczuga Wymiarowego Podróżnika",
    "icon": "icons/items/item-133.png",
    "desc": "Mistrzowsko wykonana kolczuga, której każde ogniwo zawiera mikroskopijną runę ochronną. Zapewnia doskonałą ochronę przed anomaliami wymiarowymi.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 134,
    "name": "Kula Przestrzennych Szeptów",
    "icon": "icons/items/item-134.png",
    "desc": "Tajemnicza kula przekazująca ostrzeżenia i wskazówki od istot zamieszkujących inne wymiary. Bezcenne narzędzie dla odkrywców nowych światów.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 135,
    "name": "Miecz Strażnika Bram",
    "icon": "icons/items/item-135.png",
    "desc": "Ceremonialny miecz używany przez elitarnych strażników portali. Ostrze może zarówno otwierać jak i zamykać przejścia między wymiarami.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 136,
    "name": "Pierścień Wymiarowej Orientacji",
    "icon": "icons/items/item-136.png",
    "desc": "Magiczny pierścień pomagający w zachowaniu orientacji podczas podróży między wymiarami. Zawsze wskazuje drogę do najbliższego stabilnego portalu.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 137,
    "name": "Hełm Wszechwidzącego Oka",
    "icon": "icons/items/item-137.png",
    "desc": "Zaawansowany hełm z systemem magicznych soczewek pozwalających dostrzegać nakładające się wymiary i anomalie w strukturze rzeczywistości.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 138,
    "name": "Młot Wymiarowego Architekta",
    "icon": "icons/items/item-138.png",
    "desc": "Precyzyjne narzędzie używane do kształtowania i naprawy struktur międzywymiarowych. W rękach mistrza może tworzyć nowe, stabilne przejścia.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 139,
    "name": "Rękawice Pewnego Chwytu",
    "icon": "icons/items/item-139.png",
    "desc": "Wzmocnione rękawice umożliwiające bezpieczną manipulację przedmiotami nasyconymi energią międzywymiarową. Chronią przed szkodliwymi efektami.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 140,
    "name": "Sztylet Wymiarowego Skrytobójcy",
    "icon": "icons/items/item-140.png",
    "desc": "Śmiercionośny sztylet zdolny do tworzenia małych, niewidocznych portali. Używany przez elitarnych agentów do błyskawicznych przemieszczeń.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 141,
    "name": "Runa Ostatecznego Zamknięcia",
    "icon": "icons/items/item-141.png",
    "desc": "Niezwykle potężna runa używana do trwałego zamykania niebezpiecznych portali. Raz użyta, tworzy barierę nie do przebicia.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 142,
    "name": "Buty Międzywymiarowego Tancerza",
    "icon": "icons/items/item-142.png",
    "desc": "Lekkie buty pozwalające na płynne przemieszczanie się między wymiarami. Idealne dla zwiadowców i eksploratorów nowych światów.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 143,
    "name": "Tarcza Wymiarowego Obrońcy",
    "icon": "icons/items/item-143.png",
    "desc": "Potężna tarcza defensywna chroniąca przed chaotycznymi energiami niestabilnych portali. Może również służyć jako prowizoryczna kotwica wymiarowa.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 144,
    "name": "Kompas Zaginionych Światów",
    "icon": "icons/items/item-144.png",
    "desc": "Niezwykle rzadki kompas wskazujący drogę do zapomnianych i ukrytych wymiarów. Bezcenny dla poszukiwaczy nowych szlaków.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 145,
    "name": "Karwasze Wymiarowego Łowcy",
    "icon": "icons/items/item-145.png",
    "desc": "Para wzmocnionych karwaszy z wbudowanymi kryształami tropiącymi. Pomagają w śledzeniu istot przemieszczających się między wymiarami.",
    "value": 5,
    "isUnlocked": true,
    "isHighlighted": false,
    "unlockedDate": "2025-01-18T19:24:00Z",
    "statistics": [{
      "name": "Ochrona",
      "color": "rgb(61, 43, 31)",
      "icon": "./icons/category/ground.png",
      "value": 106,
      "maxValue": 500
    }, {
      "name": "Szybkość",
      "color": "rgb(135, 206, 235)",
      "icon": "./icons/category/air.png",
      "value": 125,
      "maxValue": 500
    }, {
      "name": "Siła",
      "color": "rgb(255, 69, 0)",
      "icon": "./icons/category/fire.png",
      "value": 75,
      "maxValue": 500
    }]
  },
  {
    "id": 146,
    "name": "Kula Wiecznego Wędrowca",
    "icon": "icons/items/item-146.png",
    "desc": "Mistyczna kula zawierająca wspomnienia i doświadczenia niezliczonych podróżników wymiarowych. Służy jako przewodnik i nauczyciel.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 147,
    "name": "Topór Rozłupywacza Światów",
    "icon": "icons/items/item-147.png",
    "desc": "Potężna broń ceremonialna używana do otwierania nowych przejść w miejscach, gdzie granice między wymiarami są najgrubsze.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 148,
    "name": "Amulet Stabilnych Ścieżek",
    "icon": "icons/items/item-148.png",
    "desc": "Złożony amulet tworzący stabilne ścieżki podczas przechodzenia przez chaotyczne obszary międzywymiarowe. Niezbędny dla bezpiecznej podróży.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 149,
    "name": "Pas Wymiarowego Zwiadowcy",
    "icon": "icons/items/item-149.png",
    "desc": "Praktyczny pas z magicznymi sakwami i uchwytami na narzędzia. Specjalnie zaprojektowany do przechowywania delikatnych artefaktów wymiarowych.",
    "value": 7,
    "statistics": [{
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 245,
        "maxValue": 500
      },
      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 227,
        "maxValue": 500
      },
      {
        "name": "Szybkość",
        "color": "rgb(135, 206, 235)",
        "icon": "./icons/category/air.png",
        "value": 199,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 278,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 150,
    "name": "Kostur Wymiarowego Mędrca",
    "icon": "icons/items/item-150.png",
    "desc": "Starożytny kostur używany do badania i katalogowania nowych wymiarów. Zawiera kryształy przechowujące wiedzę o odkrytych światach.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 151,
    "name": "Runa Wymiarowego Mostu",
    "icon": "icons/items/item-151.png",
    "desc": "Zaawansowana runa tworząca stabilne mosty energetyczne między wymiarami. Pozwala na bezpieczne przemieszczanie większych grup podróżników.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 152,
    "name": "Naramienniki Strażnika Portali",
    "icon": "icons/items/item-152.png",
    "desc": "Para bogato zdobionych naramienników wzmacniających kontrolę nad energiami międzywymiarowymi. Symbol rangi wśród strażników portali.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 153,
    "name": "Kryształowe Oko Proroka",
    "icon": "icons/items/item-153.png",
    "desc": "Mistyczne narzędzie pozwalające przewidzieć pojawienie się nowych portali i ostrzegające przed niebezpiecznymi anomaliami wymiarowymi.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 154,
    "name": "Rękawice Wymiarowego Chirurga",
    "icon": "icons/items/item-154.png",
    "desc": "Precyzyjne rękawice używane do 'naprawiania' uszkodzonych portali i leczenia ran spowodowanych przez energie międzywymiarowe.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 155,
    "name": "Włócznia Świetlistych Przejść",
    "icon": "icons/items/item-155.png",
    "desc": "Elegancka włócznia emitująca światło wskazujące bezpieczne ścieżki przez niestabilne obszary międzywymiarowe.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 156,
    "name": "Napierśnik Wymiarowego Nomady",
    "icon": "icons/items/item-156.png",
    "desc": "Adaptacyjny napierśnik dostosowujący się do warunków różnych wymiarów. Chroni przed ekstremalnymi energiami i zmianami środowiska podczas podróży.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 157,
    "name": "Runa Czasoprzestrzennej Kotwicy",
    "icon": "icons/items/item-157.png",
    "desc": "Specjalistyczna runa pozwalająca na utworzenie stałego punktu odniesienia w chaosie wymiarów. Niezbędna dla długodystansowych podróżników.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 158,
    "name": "Kula Międzywymiarowych Ech",
    "icon": "icons/items/item-158.png",
    "desc": "Fascynujący artefakt rejestrujący i odtwarzający echa wydarzeń z innych wymiarów. Bezcenne narzędzie do nauki o nieznanych światach.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 159,
    "name": "Miecz Wymiarowego Egzekutora",
    "icon": "icons/items/item-159.png",
    "desc": "Potężne ostrze nasycone energią anty-wymiarową. Używane do eliminacji istot zagrażających stabilności międzywymiarowych granic.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 160,
    "name": "Pierścień Quantum Skoku",
    "icon": "icons/items/item-160.png",
    "desc": "Zaawansowany pierścień umożliwiający natychmiastowe przemieszczanie się między bliskimi wymiarami. Wymaga ogromnego doświadczenia w użyciu.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 161,
    "name": "Amulet Wymiarowej Pamięci",
    "icon": "icons/items/item-161.png",
    "desc": "Mistyczny amulet przechowujący wspomnienia i mapy odwiedzonych wymiarów. Pozwala na szybki powrót do wcześniej poznanych miejsc.",
    "value": 1,
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z",
    "statistics": [{
      "name": "Ochrona",
      "color": "rgb(61, 43, 31)",
      "icon": "./icons/category/ground.png",
      "value": 106,
      "maxValue": 500
    }, {
      "name": "Szybkość",
      "color": "rgb(135, 206, 235)",
      "icon": "./icons/category/air.png",
      "value": 55,
      "maxValue": 500
    }, {
      "name": "Siła",
      "color": "rgb(255, 69, 0)",
      "icon": "./icons/category/fire.png",
      "value": 65,
      "maxValue": 500
    }]
  },
  {
    "id": 162,
    "name": "Rękawice Przestrzennego Tkacza",
    "icon": "icons/items/item-162.png",
    "desc": "Mistrzowskie rękawice pozwalające na manipulację samą strukturą przestrzeni. Używane do naprawy rozdarć między wymiarami.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 163,
    "name": "Sztylet Wymiarowego Cienia",
    "icon": "icons/items/item-163.png",
    "desc": "Skrytobójczy sztylet pozwalający na przemykanie się przez szczeliny między wymiarami. Pozostawia minimalne ślady energetyczne.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 164,
    "name": "Buty Międzywymiarowego Wędrowca",
    "icon": "icons/items/item-164.png",
    "desc": "Wytrzymałe buty ze specjalnymi podeszwami adaptującymi się do różnych typów powierzchni w odmiennych wymiarach. Tłumią drgania przejść.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 165,
    "name": "Hełm Quantum Obserwatora",
    "icon": "icons/items/item-165.png",
    "desc": "Zaawansowany hełm pozwalający na obserwację wielu wymiarów jednocześnie. Wyposażony w filtry chroniące umysł przed przeciążeniem.",
    "value": 9,
    "statistics": [{
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 476,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 444,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 367,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 389,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  },
  {
    "id": 166,
    "name": "Tarcza Wymiarowego Bastionu",
    "icon": "icons/items/item-166.png",
    "desc": "Potężna tarcza defensywna tworząca pole ochronne przed chaotycznymi energiami międzywymiarowymi. Symbol elitarnych strażników portali.",
    "value": 8,
    "statistics": [{
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Ochrona",
        "color": "rgb(61, 43, 31)",
        "icon": "./icons/category/ground.png",
        "value": 267,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 398,
        "maxValue": 500
      },
      {
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 345,
        "maxValue": 500
      }
    ],
    "isUnlocked": true,
    "isHighlighted": true,
    "unlockedDate": "2025-01-18T19:24:00Z"
  },
  {
    "id": 167,
    "name": "Runa Ostatecznego Przejścia",
    "icon": "icons/items/item-167.png",
    "desc": "Legendarna runa pozwalająca na utworzenie permanentnego, stabilnego przejścia między dowolnymi wymiarami. Wymaga ogromnej mocy do aktywacji.",
    "value": 10,
    "statistics": [{
        "name": "Moc Magiczna",
        "color": "rgb(138, 43, 226)",
        "icon": "./icons/category/magic.png",
        "value": 425,
        "maxValue": 500
      },

      {
        "name": "Siła",
        "color": "rgb(255, 69, 0)",
        "icon": "./icons/category/fire.png",
        "value": 465,
        "maxValue": 500
      },
      {
        "name": "Witalność",
        "color": "rgb(255, 42, 42)",
        "icon": "./icons/category/life.png",
        "value": 475,
        "maxValue": 500
      },
      {
        "name": "Esencja Duchowa",
        "color": "rgb(75, 0, 130)",
        "icon": "./icons/category/cosmos.png",
        "value": 445,
        "maxValue": 500
      },
      {
        "name": "Wsparcie Natury",
        "color": "rgb(50, 205, 50)",
        "icon": "./icons/category/plants.png",
        "value": 500,
        "maxValue": 500
      }
    ],
    "isUnlocked": false,
    "isHighlighted": false,
    "unlockedDate": null
  }
]

const CATEGORIES_DATA_STATIC = [{
    "id": 1,
    "name": "Woda",
    "desc": "Osiągnięcia związane z eksploracją wodnych krain, od tajemniczych głębin oceanów po mistyczne górskie jeziora. Kategoria dla tych, którzy nie boją się zgłębiać sekretów ukrytych pod powierzchnią wód i odkrywać pradawne podwodne świątynie.",
    "color": "#14a5ff",
    "icon": "icons/category/water.png",
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 2,
    "name": "Ziemia",
    "desc": "Osiągnięcia dla odkrywców górskich szczytów, podziemnych jaskiń i zapomnianych ruin. Kategoria dedykowana tym, którzy znajdują ścieżki tam, gdzie inni widzą tylko nieprzebyte szlaki i odkrywają sekrety zaklęte w kamieniu.",
    "color": "rgb(61, 43, 31)",
    "icon": "icons/category/ground.png",
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 3,
    "name": "Wiatr",
    "desc": "Osiągnięcia związane z eksploracją wysokich szczytów, podniebnych szlaków i miejsc, gdzie wiatr niesie echa starożytnych tajemnic. Dla tych, którzy potrafią odczytać szept wiatru i podążać za jego wskazówkami.",
    "icon": "icons/category/air.png",
    "color": "rgb(135, 206, 235)",
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 4,
    "name": "Ogień",
    "desc": "Osiągnięcia dla śmiałków badających aktywne wulkany, gorące źródła i miejsca gdzie żywioł ognia manifestuje swoją moc. Kategoria dla tych, którzy nie boją się podążać ścieżkami wyznaczonymi przez pradawną energię płomieni.",
    "color": "rgb(255, 69, 0)",
    "icon": "icons/category/fire.png",
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 5,
    "name": "Magia",
    "desc": "Osiągnięcia związane z odkrywaniem miejsc przepełnionych mistyczną energią, starożytnych sanktuariów i zapomnianych świątyń. Dla poszukiwaczy tajemnej wiedzy i strażników magicznych sekretów.",
    "color": "rgb(138, 43, 226)",
    "icon": "icons/category/magic.png",
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 6,
    "name": "Życie",
    "desc": "Osiągnięcia dla odkrywców dzikiej natury, strażników pradawnych lasów i badaczy nietkniętych przez cywilizację zakątków świata. Kategoria dla tych, którzy potrafią dostrzec magię w każdej żywej istocie.",
    "color": "rgb(255, 42, 42)",
    "icon": "icons/category/life.png",
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  }
]

const ACHIEVEMENTS_DATA_STATIC = [{
    "id": 1,
    "name": "Początek Przygody",
    "desc": "Rozpocznij swoją podróż po Polsce",
    "parentId": null,
    "status": "achieved",
    "icon": "icons/achievement/achievement-1.png",
    "categoryId": 1,
    "isUnlocked": true,
    "isHighlighted": true,
    "requirements": [],
    "rewards": {
      "points": 0,
      "exp": 20,
      "items": []
    },  
    "difficulty": 1,
    "isRewardItemsSecret": false,   
    "unlockDate": "2025-01-24T19:24:00Z",
    "createdAt": "2024-11-12T19:24:00Z",
    "updatedAt": "2024-12-19T19:24:00Z"
  },
  {
    "id": 2,
    "name": "Zdobywca gór",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 1,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 30,
        "current": 30,
        "desc": "Przejdź szlak górski o długości co najmniej 30 km.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 20,
      "exp": 200,
      "items": [1, 6],
      "badgeId": 1
    },
    "status": "achieved",
    "desc": "Podejmij wyzwanie i przejdź wymagający szlak górski!",
    "difficulty": 3,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": true,
    "icon": "icons/achievement/achievement-2.png",
    "unlockDate": "2025-01-24T19:24:00Z",
    "createdAt": "2024-11-12T19:24:00Z",
    "updatedAt": "2024-12-19T19:24:00Z"
  },
  {
    "id": 3,
    "name": "Zamek w Malborku",
    "type": "historia",
    "categoryId": 1,
    "parentId": 2,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "zamek_malbork",
        "current": false,
        "desc": "Odwiedź Zamek w Malborku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 15,
      "exp": 150,
      "items": [8],
      "badgeId": null
    },
    "status": "not-achieved",
    "desc": "Zamek w Malborku czeka na Twoją wizytę!",
    "difficulty": 2,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-3.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 4,
    "name": "Miłośnik jezior",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 3,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 0,
        "desc": "Odwiedź pięć różnych jezior.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 25,
      "exp": 250,
      "items": [24],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Odwiedź pięć pięknych jezior w Polsce.",
    "difficulty": 4,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-4.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 5,
    "name": "Miłośnik Bałtyku",
    "type": "relaks",
    "categoryId": 1,
    "parentId": 2,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "morze_baltyckie",
        "current": false,
        "desc": "Odwiedź wybrzeże Morza Bałtyckiego.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 30,
      "exp": 300,
      "items": [54, 53],
      "badgeId": null
    },
    "status": "not-achieved",
    "desc": "Odwiedź piękne wybrzeże Bałtyku i poczuj nadmorski klimat!",
    "difficulty": 3,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-5.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 6,
    "name": "Zdobywca Pienin",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 2,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 3,
        "desc": "Odwiedź co najmniej trzy miejsca w Pieninach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 50,
      "exp": 500,
      "items": [9],
      "badgeId": 2
    },
    "status": "achieved",
    "desc": "Zwiedź Pieniny, odwiedzając przynajmniej trzy wyjątkowe miejsca.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": true,
    "icon": "icons/achievement/achievement-6.png",
    "unlockDate": "2025-01-24T19:24:00Z",
    "createdAt": "2024-11-12T19:24:00Z",
    "updatedAt": "2024-12-19T19:24:00Z"
  },
  {
    "id": 7,
    "name": "Tajemnicze Jaskinie",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 3,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "jaskinia_smocza",
        "current": false,
        "desc": "Odkryj Smoczą Jaskinię.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 40,
      "exp": 400,
      "items": [11],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Zejdź do Smoczej Jaskini i odkryj jej sekrety!",
    "difficulty": 4,
    "isSecret": true,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-7.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 8,
    "name": "Podróżnik Mazur",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 4,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 10,
        "current": 0,
        "desc": "Odwiedź dziesięć jezior na Mazurach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 75,
      "exp": 750,
      "items": [7],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Zasmakuj piękna mazurskich jezior, odwiedzając ich dziesięć.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-8.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 9,
    "name": "Ogień i Przygoda",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 5,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Zapal ognisko na wybrzeżu Bałtyku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 20,
      "exp": 250,
      "items": [7],
      "badgeId": 3 
    },
    "status": "not-available",
    "desc": "Rozpal ognisko nad Bałtykiem i poczuj bliskość natury.",
    "difficulty": 2,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-9.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 10,
    "name": "Zdobywca Wiatraków",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 6,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne wiatraki w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 35,
      "exp": 350,
      "items": [7],
      "badgeId": null
    },
    "status": "not-achieved",
    "desc": "Podziwiaj urokliwe wiatraki, odwiedzając trzy różne miejsca.",
    "difficulty": 3,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-10.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 11,
    "name": "Miłośnik Zamków",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 4,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "zamek_malbork",
        "current": false,
        "desc": "Odwiedź Zamek w Malborku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 100,
      "exp": 1000,
      "items": [1],
      "badgeId": 4  
    },
    "status": "not-available",
    "desc": "Odwiedź Zamek w Malborku, aby odkryć jego historię i tajemnice.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-11.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 12,
    "name": "Szlak Górskich Schronisk",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 1,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 5,
        "current": 0,
        "desc": "Odwiedź pięć schronisk górskich.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 80,
      "exp": 700,
      "items": [2],
      "badgeId": 5 // odznaka o id: 5
    },
    "status": "not-achieved",
    "desc": "Przemierzaj góry i odpoczywaj w schroniskach, odwiedzając ich pięć.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-12.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 13,
    "name": "Zdobywca Wodospadów",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 3,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa wodospady w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 70,
      "exp": 650,
      "items": [3],
      "badgeId": 6
    },
    "status": "not-available",
    "desc": "Zanurz się w pięknie natury, odwiedzając dwa majestatyczne wodospady.",
    "difficulty": 4,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-13.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 14,
    "name": "Parki Narodowe Polski",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 1,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 0,
        "desc": "Odwiedź pięć różnych parków narodowych w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 90,
      "exp": 900,
      "items": [4],
      "badgeId": 7
    },
    "status": "not-achieved",
    "desc": "Poznaj piękno polskich parków narodowych, odwiedzając pięć z nich.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-14.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 15,
    "name": "Przygoda z Rzeką",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 5,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Spłyń kajakiem jedną z polskich rzek.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 60,
      "exp": 600,
      "items": [5],
      "badgeId": 8
    },
    "status": "not-available",
    "desc": "Weź udział w spływie kajakowym i ciesz się pięknem polskich rzek.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-15.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 16,
    "name": "Górskie Wyzwanie",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 6,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 20,
        "current": 20,
        "desc": "Przejdź 20 kilometrów górskiego szlaku w ciągu jednego dnia.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 1200,
      "items": [6],
      "badgeId": 9
    },
    "status": "achieved",
    "desc": "Podejmij wyzwanie i pokonaj 20 kilometrów w górach w ciągu jednego dnia.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": true,
    "icon": "icons/achievement/achievement-16.png",
    "unlockDate": "2025-01-24T19:24:00Z",
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 17,
    "name": "Tajemnicza Jaskinia",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 9,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "jaskinia_niedzica",
        "current": false,
        "desc": "Odwiedź tajemniczą jaskinię w Niedzicy.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 90,
      "exp": 1000,
      "items": [7],
      "badgeId": 10
    },
    "status": "not-available",
    "desc": "Poznaj tajemnice jednej z najpiękniejszych jaskiń w Polsce.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-17.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },






  {
    "id": 18,
    "name": "Spacer Pośród Drzew",
    "type": "relaks",
    "categoryId": 1,
    "parentId": 8,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne parki narodowe i poznaj ich faunę i florę.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 70,
      "exp": 800,
      "items": [8],
      "badgeId": 11
    },
    "status": "not-available",
    "desc": "Znajdź spokój i ciszę pośród parków narodowych.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-18.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 19,
    "name": "Na Tropie Historii",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 9,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "zamek_krzyzacki",
        "current": false,
        "desc": "Odwiedź Zamek Krzyżacki w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 110,
      "exp": 1100,
      "items": [9],
      "badgeId": 12
    },
    "status": "not-available",
    "desc": "Poznaj tajemnice historii, odwiedzając słynny Zamek Krzyżacki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-19.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 20,
    "name": "Relaks nad Jeziorem",
    "type": "relaks",
    "categoryId": 1,
    "parentId": 10,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 1,
        "current": 0,
        "desc": "Spędź czas nad polskim jeziorem i odpocznij na łonie natury.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 50,
      "exp": 500,
      "items": [10],
      "badgeId": 13
    },
    "status": "not-available",
    "desc": "Zrelaksuj się nad jednym z malowniczych polskich jezior.",
    "difficulty": 3,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-20.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 21,
    "name": "Podróżnik Po Wybrzeżu",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 11,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 0,
        "desc": "Odwiedź pięć różnych miejsc na polskim wybrzeżu.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 100,
      "exp": 1000,
      "items": [11],
      "badgeId": 14
    },
    "status": "not-available",
    "desc": "Poznaj piękno polskiego wybrzeża, odwiedzając różne jego zakątki.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-21.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 22,
    "name": "Tajemnicze Ruiny",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 12,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "ruiny_zamku",
        "current": false,
        "desc": "Odwiedź tajemnicze ruiny zamku w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 80,
      "exp": 900,
      "items": [12],
      "badgeId": 15
    },
    "status": "not-available",
    "desc": "Odkryj sekrety dawnych ruin zamków na terenie Polski.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-22.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 23,
    "name": "Szlak Rzeki",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 13,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 15,
        "current": 0,
        "desc": "Przepłyń 15 kilometrów rzeką kajakiem lub tratwą.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 110,
      "exp": 1200,
      "items": [13],
      "badgeId": 16
    },
    "status": "not-available",
    "desc": "Poznaj piękno polskich rzek, płynąc kajakiem lub tratwą przez ich szlaki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-23.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 24,
    "name": "Szczyty Polski",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 14,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 10,
        "current": 0,
        "desc": "Wejdź na 10 szczytów górskich w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1500,
      "items": [14],
      "badgeId": 17
    },
    "status": "not-available",
    "desc": "Zdobądź 10 różnych szczytów górskich w Polsce i poczuj się jak prawdziwy alpinista.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-24.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 25,
    "name": "Zabytki Miast",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 15,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "rynek_starego_miasta",
        "current": false,
        "desc": "Odwiedź historyczny rynek starego miasta w jednym z polskich miast.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 70,
      "exp": 750,
      "items": [15],
      "badgeId": 18
    },
    "status": "not-available",
    "desc": "Poznaj piękno polskich miast, odwiedzając ich historyczne rynki.",
    "difficulty": 4,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-25.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 26,
    "name": "Zdobywca Jaskiń",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 16,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "jaskinia_mroczna",
        "current": false,
        "desc": "Odwiedź jedną z największych jaskiń w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 1300,
      "items": [16],
      "badgeId": 19
    },
    "status": "not-achieved",
    "desc": "Zanurz się w tajemniczy świat podziemi, odwiedzając polskie jaskinie.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-26.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 27,
    "name": "Spacer Po Dolinie",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 7,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy malownicze doliny w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 90,
      "exp": 1100,
      "items": [17],
      "badgeId": 20
    },
    "status": "not-available",
    "desc": "Poznaj piękno dolin, spacerując ich malowniczymi szlakami.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-27.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 28,
    "name": "Wulkaniczne Podróże",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 18,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "teren_wulkaniczny",
        "current": false,
        "desc": "Odwiedź jedyne w Polsce obszary z pozostałościami po wulkanach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 1400,
      "items": [18],
      "badgeId": 21
    },
    "status": "not-available",
    "desc": "Poznaj wulkaniczne dziedzictwo Polski, odwiedzając unikalne miejsca.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-28.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 29,
    "name": "Mistrz Pustyni",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 19,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 20,
        "current": 0,
        "desc": "Przejdź 20 km przez pustynne tereny w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1600,
      "items": [19],
      "badgeId": 22
    },
    "status": "not-available",
    "desc": "Zmierz się z wyzwaniem polskiej pustyni i pokonaj jej szlaki.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-29.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 30,
    "name": "Urok Wodospadów",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 25,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź cztery różne wodospady w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 100,
      "exp": 1200,
      "items": [20],
      "badgeId": 23
    },
    "status": "not-available",
    "desc": "Zanurz się w pięknie wodospadów, odwiedzając różne zakątki Polski.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-30.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 31,
    "name": "Zdobywca Szczytów",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 21,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 5,
        "current": 0,
        "desc": "Zdobądź pięć różnych szczytów górskich w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1800,
      "items": [21],
      "badgeId": 24
    },
    "status": "not-available",
    "desc": "Zmień swoje marzenia o górach w rzeczywistość, zdobywając ich najwyższe szczyty.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-31.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 32,
    "name": "Strażnik Latarnianych",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 27,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "latarnia_wybrzeze",
        "current": false,
        "desc": "Odwiedź trzy różne latarnie morskie wzdłuż wybrzeża.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1400,
      "items": [22],
      "badgeId": 25
    },
    "status": "not-available",
    "desc": "Poznaj morską historię Polski, odwiedzając latarnie na wybrzeżu.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-32.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 33,
    "name": "Władca Lasów",
    "type": "natura",
    "categoryId": 1,
    "parentId": 23,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 0,
        "desc": "Przejdź pięć leśnych szlaków w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 110,
      "exp": 1200,
      "items": [23],
      "badgeId": 26
    },
    "status": "not-available",
    "desc": "Zanurz się w piękno polskich lasów, przemierzając ich tajemnicze szlaki.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-33.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 34,
    "name": "Mistrz Przypływów",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 24,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 10,
        "current": 0,
        "desc": "Przejdź 10 km wzdłuż brzegu morza.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 1300,
      "items": [24],
      "badgeId": 27
    },
    "status": "not-available",
    "desc": "Poczuj energię fal, przemierzając polskie wybrzeże.",
    "difficulty": 4,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-34.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 35,
    "name": "Sztuka Kamienia",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 25,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "skaly_malarskie",
        "current": false,
        "desc": "Odwiedź unikalne formacje skalne w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 1500,
      "items": [25],
      "badgeId": 28
    },
    "status": "not-available",
    "desc": "Poznaj tajemniczy świat formacji skalnych, odwiedzając niezwykłe miejsca.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-35.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 36,
    "name": "Poszukiwacz Wodospadów",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 25,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne wodospady w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1600,
      "items": [26],
      "badgeId": 29
    },
    "status": "not-available",
    "desc": "Poczuj potęgę natury, odwiedzając majestatyczne wodospady w Polsce.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-36.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 37,
    "name": "Mistrz Skalnych Formacji",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 27,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "organy_gory",
        "current": false,
        "desc": "Zobacz słynne formacje skalne 'Organy' w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1800,
      "items": [27],
      "badgeId": 30
    },
    "status": "not-available",
    "desc": "Odkryj unikalne formacje skalne, które zachwycają swoją strukturą.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-37.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 38,
    "name": "Strażnik Wyżyn",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 28,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 20,
        "current": 0,
        "desc": "Przejdź 20 km na wyżynnych szlakach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 2000,
      "items": [28],
      "badgeId": 31
    },
    "status": "not-available",
    "desc": "Zanurz się w malowniczych krajobrazach wyżynnych, przemierzając ich rozległe szlaki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-38.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 39,
    "name": "Zdobywca Ognisk",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 29,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 0,
        "desc": "Zapal ognisko w pięciu różnych miejscach biwakowych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 1600,
      "items": [29],
      "badgeId": 32
    },
    "status": "not-available",
    "desc": "Spędź niezapomniane chwile przy ognisku w wyjątkowych miejscach.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-39.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 40,
    "name": "Zdobywca Zamków",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 30,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "zamek_malbork",
        "current": false,
        "desc": "Odwiedź Zamek w Malborku, jeden z największych zamków gotyckich w Europie.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1800,
      "items": [30],
      "badgeId": 33
    },
    "status": "not-available",
    "desc": "Poznaj historię i architekturę odwiedzając Zamek w Malborku.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-40.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 41,
    "name": "Mistrz Wspinaczki",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 31,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 5,
        "current": 0,
        "desc": "Ukończ pięć tras wspinaczkowych w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 2500,
      "items": [31],
      "badgeId": 34
    },
    "status": "not-available",
    "desc": "Pokonaj swoje granice i zdobądź szczyty dzięki wspinaczce.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-41.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 42,
    "name": "Obserwator Latarni",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 32,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne latarnie morskie.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 2000,
      "items": [32],
      "badgeId": 35
    },
    "status": "not-available",
    "desc": "Poznaj historię latarni morskich i ich znaczenie nawigacyjne.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-42.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 43,
    "name": "Zdobywca Pustyń",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 33,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź Pustynię Błędowską i poznaj jej unikalny krajobraz.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1800,
      "items": [33],
      "badgeId": 36
    },
    "status": "not-available",
    "desc": "Odkryj piękno polskiej pustyni, spacerując po jej wydmach.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-43.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 44,
    "name": "Latarnie Światła",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 44,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwie latarnie morskie i poznaj ich historię.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 2500,
      "items": [44],
      "badgeId": 47
    },
    "status": "not-available",
    "desc": "Poznaj magię latarni i ich znaczenie na wybrzeżu.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-44.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 45,
    "name": "Władca Dolin",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 58,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 10,
        "current": 0,
        "desc": "Przejdź 10 km na dolinnych szlakach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 2200,
      "items": [35],
      "badgeId": 38
    },
    "status": "not-available",
    "desc": "Poznaj niezwykłe piękno polskich dolin i ich tajemnicze ścieżki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-45.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 46,
    "name": "Poszukiwacz Wodospadów",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 25,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne wodospady w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1600,
      "items": [26],
      "badgeId": 29
    },
    "status": "not-available",
    "desc": "Poczuj potęgę natury, odwiedzając majestatyczne wodospady w Polsce.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-46.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 47,
    "name": "Mistrz Skalnych Formacji",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 27,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "organy_gory",
        "current": false,
        "desc": "Zobacz słynne formacje skalne 'Organy' w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1800,
      "items": [27],
      "badgeId": 30
    },
    "status": "not-available",
    "desc": "Odkryj unikalne formacje skalne, które zachwycają swoją strukturą.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-47.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 48,
    "name": "Strażnik Wyżyn",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 28,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 20,
        "current": 0,
        "desc": "Przejdź 20 km na wyżynnych szlakach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 2000,
      "items": [28],
      "badgeId": 31
    },
    "status": "not-available",
    "desc": "Zanurz się w malowniczych krajobrazach wyżynnych, przemierzając ich rozległe szlaki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-48.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 49,
    "name": "Król Krajobrazów",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 32,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź cztery znaczące punkty widokowe w naturze.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 2300,
      "items": [50],
      "badgeId": 34
    },
    "status": "not-available",
    "desc": "Podziwiaj panoramę natury z najlepszych punktów widokowych.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-49.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 50,
    "name": "Błyskotliwy Odkrywca",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 32,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 2,
        "current": 0,
        "desc": "Udział w dwóch warsztatach historii regionalnej.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 2100,
      "items": [51, 22],
      "badgeId": 35
    },
    "status": "not-available",
    "desc": "Zdobądź wiedzę i doświadczenie, ucząc się historii regionu.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-50.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 51,
    "name": "Koneser Kultury",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 34,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "muzeum_narodowe",
        "current": false,
        "desc": "Odwiedź Muzeum Narodowe.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 1900,
      "items": [52],
      "badgeId": 36
    },
    "status": "not-available",
    "desc": "Zanurz się w świat sztuki i kultury, odkrywając najważniejsze instytucje.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-51.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 52,
    "name": "Wędrowiec Po Ścieżkach",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 27,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź cztery różne szlaki turystyczne.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 2000,
      "items": [53],
      "badgeId": 37
    },
    "status": "not-available",
    "desc": "Poznaj różne szlaki i doświadcz wędrówki po niezwykłych trasach.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-52.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 53,
    "name": "Podróżnik Miast",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 18,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "stary_rynek",
        "current": false,
        "desc": "Odwiedź historyczny rynek w jednym z miast.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1700,
      "items": [54],
      "badgeId": 38
    },
    "status": "not-available",
    "desc": "Poznaj architekturę i historię polskich miast poprzez ich zabytki.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-53.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 54,
    "name": "Szlak Wodny",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 15,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 10,
        "current": 0,
        "desc": "Przepłyń 10 km kajakiem.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 1400,
      "items": [55],
      "badgeId": 39
    },
    "status": "not-available",
    "desc": "Poznaj wodne szlaki Polski, przemierzając rzeki i jeziora.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-54.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 55,
    "name": "Królewski Podróżnik",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 1,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 7,
        "current": 0,
        "desc": "Odwiedź siedem różnych miejsc królewskich.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 240,
      "exp": 2800,
      "items": [56],
      "badgeId": 40
    },
    "status": "not-achieved",
    "desc": "Poznaj dziedzictwo królewskie odwiedzając zabytkowe pałace i zamki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-55.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 56,
    "name": "Wędrowiec Podniebnych Przełęczy",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 30,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwie przełęcze z zapierającymi dech w piersiach widokami.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 1500,
      "items": [55],
      "badgeId": 41
    },
    "status": "not-available",
    "desc": "Przemierzaj przełęcze i podziwiaj ich niezwykłą scenerię.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-56.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 57,
    "name": "Władca Górskich Wichrów",
    "type": "przygoda",
    "categoryId": 1,
    "parentId": 56,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Doświadcz intensywnego podmuchu wiatru na wybranym szlaku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 1700,
      "items": [56, 57],
      "badgeId": 42
    },
    "status": "not-available",
    "desc": "Poznaj potęgę górskich wichrów podczas ekstremalnych warunków.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-57.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 58,
    "name": "Strażnik Leśnych Tajemnic",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 33,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa ukryte leśne zakątki.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 1400,
      "items": [57],
      "badgeId": 43
    },
    "status": "not-available",
    "desc": "Odkryj ukryte tajemnice głębokich lasów.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-58.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 59,
    "name": "Przewodnik Po Górskich Szlakach",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 34,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 3,
        "current": 0,
        "desc": "Ukończ trzy szlaki o łącznej długości 15 km.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1500,
      "items": [58, 59],
      "badgeId": 44
    },
    "status": "not-available",
    "desc": "Pokaż swoje umiejętności i zdobądź cenne doświadczenie na górskich trasach.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-59.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 60,
    "name": "Odkrywca Zapomnianych Ruin",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 35,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "ruiny_zamku",
        "current": false,
        "desc": "Odwiedź zapomniane ruiny w odległych rejonach Polski.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 1600,
      "items": [60],
      "badgeId": 45
    },
    "status": "not-available",
    "desc": "Odkryj tajemnice zapomnianych budowli i ruiny historyczne.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-60.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },


  {
    "id": 61,
    "name": "Zdobywca Połoniny",
    "type": "przygoda",
    "categoryId": 2,
    "parentId": null,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 5,
        "desc": "Odwiedź co najmniej 5 szczytów w Bieszczadach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 50,
      "exp": 200,
      "items": [101, 50],
      "badgeId": 5
    },
    "status": "achieved",
    "desc": "Zwiedź pięć różnych szczytów w Bieszczadach.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": true,
    "icon": "icons/achievement/achievement-61.png",
    "unlockDate": "2024-08-08T12:13:00Z",
    "createdAt": "2024-04-03T13:04:00Z",
    "updatedAt": "2024-06-13T17:14:00Z"
  },
  {
    "id": 62,
    "name": "Miłośnik Historii",
    "type": "odkrywanie",
    "categoryId": 2,
    "parentId": 61,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 1,
        "desc": "Odwiedź Zamek Krzyżacki w Malborku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 70,
      "exp": 250,
      "items": [25],
      "badgeId": 6,
    },
    "status": "achieved",
    "desc": "Odwiedź największy średniowieczny zamek w Polsce.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-62.png",
    "unlockDate": "2024-08-08T12:13:00Z",
    "createdAt": "2024-04-03T13:04:00Z",
    "updatedAt": "2024-06-13T17:14:00Z"
  },
  {
    "id": 63,
    "name": "Wędrowiec Po Dolinach",
    "type": "przygoda",
    "categoryId": 2,
    "parentId": 61,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Przejdź szlaki w co najmniej 3 różnych dolinach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 40,
      "exp": 180,
      "items": [38],
      "badgeId": 7,
    },
    "status": "not-achieved",
    "desc": "Zwiedź doliny w różnych rejonach Polski.",
    "difficulty": 4,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-63.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 64,
    "name": "Tropiciel Wodospadów",
    "type": "odkrywanie",
    "categoryId": 2,
    "parentId": 63,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź 4 różne wodospady.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 80,
      "exp": 300,
      "items": [45],
      "badgeId": 8,
    },
    "status": "not-available",
    "desc": "Odwiedź cztery wodospady w różnych częściach Polski.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-64.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 65,
    "name": "Spacerowicz Plażowy",
    "type": "przygoda",
    "categoryId": 2,
    "parentId": 64,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwie popularne plaże nad Bałtykiem.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 30,
      "exp": 120,
      "items": [50],
      "badgeId": 9,
    },
    "status": "not-available",
    "desc": "Zwiedź dwie plaże nad polskim morzem.",
    "difficulty": 3,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-65.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },

  // kategoria 3

  {
    "id": 66,
    "name": "Władca Wichrów",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": null,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 3,
        "desc": "Odwiedź trzy różne szczyty powyżej 2000 m n.p.m.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 100,
      "exp": 300,
      "items": [45, 67, 89],
      "badgeId": 15
    },
    "status": "achieved",
    "desc": "Poznaj potęgę wiatru na najwyższych szczytach Polski.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-66.png",
    "unlockDate": "2024-08-08T12:13:00Z",
    "createdAt": "2024-04-03T13:04:00Z",
    "updatedAt": "2024-06-13T17:14:00Z"
  },
  {
    "id": 67,
    "name": "Tancerz z Wichurą",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 66,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 1,
        "desc": "Spędź noc w schronisku górskim podczas wichury.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 75,
      "exp": 250,
      "items": [23, 56],
      "badgeId": 18
    },
    "status": "achieved",
    "desc": "Doświadcz siły górskiego wiatru w bezpiecznym schronieniu.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-67.png",
    "unlockDate": "2024-09-15T20:45:00Z",
    "createdAt": "2024-04-03T13:04:00Z",
    "updatedAt": "2024-06-13T17:14:00Z"
  },
  {
    "id": 68,
    "name": "Szybownik Przestworzy",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 67,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź szkołę szybowcową na górze Żar.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 400,
      "items": [34, 78, 91, 102],
      "badgeId": null
    },
    "status": "not-achieved",
    "desc": "Odkryj tajemnice szybownictwa w jednym z najsłynniejszych miejsc w Polsce.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-68.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 69,
    "name": "Łowca Halnego",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 67,
    "requirements": [{
      "conditions": [
        {
          "type": "activity",
          "target": 1,
          "current": 1,
          "desc": "Doświadcz wiatru halnego w Tatrach.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Poczuj potęgę porywistego wiatru na szczytach Alp.",
          "isMandatory": true
        }, 
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "OR"
    }],
    "rewards": {
      "points": 90,
      "exp": 300,
      "items": [12, 59, 90],
      "badgeId": 22
    },
    "status": "achieved-no-rewarded",
    "desc": "Poczuj moc najbardziej znanego górskiego wiatru w Polsce.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-69.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 70,
    "name": "Strażnik Wietrznych Przełęczy",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 69,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne przełęcze górskie znane z silnych wiatrów.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 500,
      "items": [45, 67, 89, 92, 103],
      "badgeId": 25
    },
    "status": "not-available",
    "desc": "Odkryj miejsca, gdzie wiatr kształtuje górski krajobraz.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-70.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 71,
    "name": "Obserwator Wiatromierzy",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 69,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwie stacje meteorologiczne na szczytach górskich.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 85,
      "exp": 280,
      "items": [23, 45, 67],
      "badgeId": 31
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie bada się górskie wiatry.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-71.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 72,
    "name": "Władca Powietrznych Szlaków",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 71,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przejdź całą Orlą Perć w odpowiednich warunkach pogodowych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 600,
      "items": [12, 34, 56, 78, 90],
      "badgeId": 42
    },
    "status": "not-available",
    "desc": "Zmierz się z najbardziej wymagającym szlakiem w polskich górach.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-72.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 73,
    "name": "Przyjaciel Wiatru",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 71,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź farmę wiatrową w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 70,
      "exp": 250,
      "items": [15, 89],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Zobacz, jak człowiek wykorzystuje siłę wiatru w górach.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-73.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 74,
    "name": "Mistrz Górskich Podmuchów",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 72,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 3,
        "current": 0,
        "desc": "Spędź trzy noce w namiocie powyżej 2000 m n.p.m.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [45, 67, 123],
      "badgeId": 55
    },
    "status": "not-available",
    "desc": "Doświadcz nocnych wiatrów wysokogórskich.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-74.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 75,
    "name": "Badacz Powietrznych Korytarzy",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 69,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź cztery różne przełęcze znane z unikalnych zjawisk wietrznych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 350,
      "items": [34, 78, 156],
      "badgeId": 61
    },
    "status": "not-available",
    "desc": "Odkryj miejsca, gdzie wiatr tworzy niezwykłe zjawiska.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-75.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 76,
    "name": "Poszukiwacz Wietrznych Legend",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 67,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź Diablak w czasie silnego wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 90,
      "exp": 300,
      "items": [22, 45],
      "badgeId": 74
    },
    "status": "not-achieved",
    "desc": "Poznaj miejsce owiane legendami o górskich wichurach.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-76.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 77,
    "name": "Strażnik Wietrznych Szczytów",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 76,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 5,
        "current": 0,
        "desc": "Odwiedź pięć szczytów powyżej 2000 m n.p.m. w czasie silnego wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 550,
      "items": [56, 89, 145, 167],
      "badgeId": 70
    },
    "status": "not-available",
    "desc": "Stań się prawdziwym władcą wietrznych szczytów.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-77.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 78,
    "name": "Tropiciel Wietrznych Jaskiń",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 70,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odkryj jaskinię, w której występuje zjawisko świszczącego wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 100,
      "exp": 320,
      "items": [34, 67, 89],
      "badgeId": 45
    },
    "status": "not-available",
    "desc": "Poznaj tajemnicze miejsca, gdzie wiatr tworzy niezwykłą muzykę.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-78.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 79,
    "name": "Władca Zimowych Wichrów",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 78,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przetrwaj zimową wichurę w schronisku powyżej 1500 m n.p.m.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [12, 45, 78, 123, 156],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Doświadcz potęgi zimowych wiatrów w górach.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-79.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 80,
    "name": "Obserwator Powietrznych Tańców",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 67,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Zaobserwuj zjawisko wiru powietrznego w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 90,
      "exp": 280,
      "items": [23, 89],
      "badgeId": 52
    },
    "status": "not-achieved",
    "desc": "Zobacz, jak wiatr tworzy niezwykłe zjawiska atmosferyczne.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-80.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 81,
    "name": "Mistrz Powietrznych Szczelin",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 79,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odkryj trzy górskie szczeliny znane z silnych podmuchów wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 420,
      "items": [45, 78, 145],
      "badgeId": 63
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie wiatr przeciska się przez skalne szczeliny.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-81.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 82,
    "name": "Strażnik Wietrznych Przełęczy",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 80,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Spędź noc na przełęczy górskiej podczas silnego wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 350,
      "items": [34, 67, 98, 167],
      "badgeId": 71
    },
    "status": "not-available",
    "desc": "Stań się strażnikiem miejsc, gdzie wiatr króluje niepodzielnie.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-82.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 83,
    "name": "Łowca Wietrznych Opowieści",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 82,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź schronisko na Hali Gąsienicowej podczas silnego wiatru halnego.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 110,
      "exp": 340,
      "items": [23, 56, 89],
      "badgeId": 47
    },
    "status": "not-available",
    "desc": "Poznaj historie o legendarnym wietrze halnym od górskich przewodników.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-83.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 84,
    "name": "Władca Powietrznych Grani",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 83,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przejdź Grań Tatr Wysokich w odpowiednich warunkach pogodowych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 600,
      "items": [34, 67, 98, 123, 156],
      "badgeId": 69
    },
    "status": "not-available",
    "desc": "Zmierz się z najbardziej wymagającą granią w polskich Tatrach.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-84.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 85,
    "name": "Badacz Górskich Zawiei",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 83,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa miejsca znane z występowania śnieżnych zawiei.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 380,
      "items": [45, 78],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie wiatr tworzy zimowe spektakle.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-85.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 86,
    "name": "Strażnik Powietrznych Bram",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 75,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy przełęcze górskie podczas jesiennych wiatrów.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [12, 56, 89, 145],
      "badgeId": 73
    },
    "status": "not-available",
    "desc": "Odkryj potęgę jesiennych wiatrów w górskich przełęczach.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-86.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 87,
    "name": "Mistrz Powietrznych Wirów",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 67,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Zaobserwuj zjawisko wiru powietrznego na Śnieżce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 420,
      "items": [34, 78, 123],
      "badgeId": 51
    },
    "status": "not-achieved",
    "desc": "Odkryj niezwykłe zjawiska powietrzne na najwyższym szczycie Karkonoszy.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-87.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 88,
    "name": "Obserwator Nocnych Wichrów",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 83,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Spędź noc w namiocie na przełęczy podczas silnego wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [45, 89, 156, 167],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Doświadcz nocnej symfonii górskich wiatrów.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-88.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 89,
    "name": "Władca Wietrznych Turni",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 87,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy charakterystyczne turnie w Tatrach Wysokich.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 500,
      "items": [23, 67, 98],
      "badgeId": 58
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie wiatr kształtował skalne iglice przez tysiące lat.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-89.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 90,
    "name": "Tropiciel Powietrznych Szlaków",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 88,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przejdź szlak graniowy podczas silnego wiatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 550,
      "items": [12, 45, 78, 123],
      "badgeId": 65
    },
    "status": "not-available",
    "desc": "Zmierz się z wiatrem na najbardziej eksponowanych szlakach.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-90.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 91,
    "name": "Strażnik Zimowych Podmuchów",
    "type": "odkrywanie",
    "categoryId": 3,
    "parentId": 89,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa schroniska górskie podczas zimowej zawiei.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 400,
      "items": [34, 89],
      "badgeId": 44
    },
    "status": "not-available",
    "desc": "Doświadcz potęgi zimowych wiatrów w bezpiecznym schronieniu.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-91.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 92,
    "name": "Mistrz Powietrznych Legend",
    "type": "przygoda",
    "categoryId": 3,
    "parentId": 90,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź Świnicę podczas silnego wiatru halnego.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 580,
      "items": [56, 98, 145, 167],
      "badgeId": 72
    },
    "status": "not-available",
    "desc": "Poznaj miejsce, gdzie według legend mieszka duch górskiego wiatru.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-92.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 93,
    "name": "Odkrywca Gorących Źródeł",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": null,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 3,
        "desc": "Odwiedź trzy różne naturalne gorące źródła.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 100,
      "exp": 300,
      "items": [34, 67, 89],
      "badgeId": 23
    },
    "status": "achieved",
    "desc": "Poznaj miejsca, gdzie ziemia dzieli się swoim wewnętrznym ciepłem.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-93.png",
    "unlockDate": "2024-08-08T12:13:00Z",
    "createdAt": "2024-04-03T13:04:00Z",
    "updatedAt": "2024-06-13T17:14:00Z"
  },
  {
    "id": 94,
    "name": "Strażnik Wiecznego Ognia",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 93,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 1,
        "desc": "Odwiedź płonące źródło w Karpatach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [23, 56, 123, 145],
      "badgeId": 35
    },
    "status": "achieved",
    "desc": "Odkryj miejsce, gdzie natura podtrzymuje wieczny płomień.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": true,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-94.png",
    "unlockDate": "2024-09-15T20:45:00Z",
    "createdAt": "2024-04-03T13:04:00Z",
    "updatedAt": "2024-06-13T17:14:00Z"
  },
  {
    "id": 95,
    "name": "Badacz Wulkanicznych Śladów",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 94,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź cztery różne miejsca pochodzenia wulkanicznego.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 350,
      "items": [45, 78],
      "badgeId": null
    },
    "status": "not-achieved",
    "desc": "Poznaj miejsca, gdzie dawne wulkany pozostawiły swój ślad.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-95.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 96,
    "name": "Władca Ognistych Skał",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 95,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Zdobądź szczyt wygasłego wulkanu o wschodzie słońca.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 500,
      "items": [12, 67, 98, 156],
      "badgeId": 41
    },
    "status": "not-available",
    "desc": "Stań na szczycie, który pamięta czasy, gdy ziemia buchała ogniem.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-96.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 97,
    "name": "Mistrz Gorących Wód",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 95,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź geotermalne spa w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 90,
      "exp": 280,
      "items": [34, 89],
      "badgeId": 54
    },
    "status": "not-available",
    "desc": "Doświadcz leczniczej mocy gorących źródeł.",
    "difficulty": 4,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-97.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 98,
    "name": "Tropiciel Magmy",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 96,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne formacje bazaltowe.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 420,
      "items": [23, 78, 145, 167],
      "badgeId": 62
    },
    "status": "not-available",
    "desc": "Odkryj miejsca, gdzie zastygła magma tworzy niezwykłe formacje skalne.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-98.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 99,
    "name": "Strażnik Ognistych Wzgórz",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 97,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Spędź noc pod gwiazdami na wygasłym wulkanie.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [45, 98, 156],
      "badgeId": 49
    },
    "status": "not-available",
    "desc": "Poczuj energię drzemiącą w wulkanicznych wzgórzach.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-99.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 100,
    "name": "Strażnik Świtu",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 93,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Obserwuj wschód słońca ze szczytu górskiego.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 350,
      "items": [34, 67, 89],
      "badgeId": 38
    },
    "status": "not-achieved",
    "desc": "Bądź świadkiem, jak pierwsze promienie słońca rozpalają nowy dzień.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-100.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 101,
    "name": "Łowca Ognistych Wspomnień",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 100,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź historyczne miejsce związane z wawelskim smokiem.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [23, 78, 145, 167],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Odkryj miejsca, gdzie legendy o ogniu są wciąż żywe.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-101.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 102,
    "name": "Mistrz Zachodzącego Słońca",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 100,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Obserwuj zachód słońca z trzech różnych szczytów.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 400,
      "items": [45, 98],
      "badgeId": 43
    },
    "status": "not-available",
    "desc": "Bądź świadkiem, jak dzień kończy się ognistą symfonią barw.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-102.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 103,
    "name": "Strażnik Płomienia Historii",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 101,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź starożytne miejsce kultu ognia.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [12, 56, 123],
      "badgeId": 57
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie przez wieki płonął święty ogień.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-103.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 104,
    "name": "Poszukiwacz Ognistych Znaków",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 102,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa miejsca związane z dawnymi ogniskami sygnałowymi.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 380,
      "items": [34, 89, 156],
      "badgeId": 64
    },
    "status": "not-available",
    "desc": "Odkryj dawny system komunikacji oparty na ogniu.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-104.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 105,
    "name": "Władca Czerwonego Świtu",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 103,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Obserwuj wschód słońca podczas jesiennej mgły.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 520,
      "items": [23, 67, 145, 167],
      "badgeId": 48
    },
    "status": "not-available",
    "desc": "Doświadcz mistycznego momentu, gdy świat spowija czerwona poświata.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-105.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 106,
    "name": "Opiekun Świętego Płomienia",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 104,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź sanktuarium ze stale płonącym ogniem.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 550,
      "items": [45, 78, 98],
      "badgeId": 59
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie wieczny ogień symbolizuje nieprzerwaną tradycję.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-106.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 107,
    "name": "Świadek Ognistego Nieba",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 106,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Obserwuj zorze polarną w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 600,
      "items": [34, 67, 123, 156],
      "badgeId": 53
    },
    "status": "not-available",
    "desc": "Doświadcz niezwykłego spektaklu płonącego nieba.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-107.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 108,
    "name": "Strażnik Letniego Przesilenia",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 122,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w obchodach Nocy Świętojańskiej.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [23, 89, 145],
      "badgeId": 66
    },
    "status": "not-available",
    "desc": "Poznaj pradawne tradycje związane z najdłuższym dniem roku.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-108.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 109,
    "name": "Łowca Ognistych Wschodów",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 107,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Obserwuj wschód słońca z trzech różnych punktów widokowych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 420,
      "items": [45, 78],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Odkryj najpiękniejsze miejsca do powitania nowego dnia.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-109.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 110,
    "name": "Mistrz Płonących Szczytów",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 108,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Doświadcz zjawiska alpejskiej poświaty na szczycie góry.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 550,
      "items": [12, 56, 98, 167],
      "badgeId": 44
    },
    "status": "not-available",
    "desc": "Bądź świadkiem, jak ostatnie promienie słońca malują szczyty na złoto.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-110.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 111,
    "name": "Powiernik Ognistych Legend",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 99,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź miejsce związane z legendą o smoku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 380,
      "items": [34, 123],
      "badgeId": 51
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie legendy o ognistych bestiach są wciąż żywe.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-111.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 112,
    "name": "Władca Czerwonego Księżyca",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 139,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Obserwuj zaćmienie Księżyca z górskiego szczytu.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 580,
      "items": [45, 89, 145, 156],
      "badgeId": 68
    },
    "status": "not-available",
    "desc": "Doświadcz niezwykłego momentu, gdy Księżyc przybiera barwę ognia.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-112.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 113,
    "name": "Strażnik Świętego Ognia",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 111,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa miejsca historycznego kultu ognia.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [23, 67, 98],
      "badgeId": 55
    },
    "status": "not-available",
    "desc": "Odkryj miejsca, gdzie ogień był czczony jako święty element.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-113.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 114,
    "name": "Tropiciel Ognistych Kamieni",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 95,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odnajdź trzy miejsca z czerwonymi skałami.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 420,
      "items": [34, 78, 156],
      "badgeId": 47
    },
    "status": "not-available",
    "desc": "Odkryj miejsca, gdzie skały płoną czerwienią wschodzącego słońca.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-114.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 115,
    "name": "Mistrz Złotej Godziny",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 114,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Wykonaj fotografie podczas złotej godziny w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 500,
      "items": [23, 67, 145],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Uchwyć magiczny moment, gdy świat spowija złote światło.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-115.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 116,
    "name": "Strażnik Ognistych Minerałów",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 114,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź miejsce występowania ognistych agatów.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [45, 98, 167],
      "badgeId": 61
    },
    "status": "not-available",
    "desc": "Odkryj minerały, które zamknęły w sobie barwy ognia.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-116.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 117,
    "name": "Władca Ognistego Tańca",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 115,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w tradycyjnym tańcu przy ognisku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 550,
      "items": [12, 56, 89, 123],
      "badgeId": 58
    },
    "status": "not-available",
    "desc": "Poznaj pradawne rytuały związane z ogniem i tańcem.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-117.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 118,
    "name": "Łowca Ognistych Ptaków",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 116,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Zaobserwuj czerwone ptaki w ich naturalnym środowisku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 380,
      "items": [34, 78],
      "badgeId": 74
    },
    "status": "not-available",
    "desc": "Odkryj ptaki, których upierzenie przypomina płomienie.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-118.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 119,
    "name": "Powiernik Ognistych Kwiatów",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 117,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odnajdź trzy różne gatunki czerwonych kwiatów górskich.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [23, 145, 156],
      "badgeId": 52
    },
    "status": "not-available",
    "desc": "Poznaj rośliny, które swoimi barwami przypominają płomienie.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-119.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 120,
    "name": "Strażnik Świetlistych Nocy",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 100,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Spędź noc obserwując gwiazdy przy ognisku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 570,
      "items": [45, 67, 98, 167],
      "badgeId": 64
    },
    "status": "not-available",
    "desc": "Doświadcz magii nocy rozświetlonej blaskiem ognia i gwiazd.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-120.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 121,
    "name": "Mistrz Świetlistych Szlaków",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 120,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przejdź szlak turystyczny o wschodzie słońca.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [34, 78, 156],
      "badgeId": 46
    },
    "status": "not-available",
    "desc": "Poznaj magię górskich szlaków w pierwszych promieniach słońca.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-121.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 122,
    "name": "Strażnik Jesiennych Płomieni",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 121,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy różne lasy podczas jesiennych przemian.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 420,
      "items": [23, 89, 145],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Bądź świadkiem, jak natura maluje świat ognistymi barwami jesieni.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-122.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 123,
    "name": "Władca Ognistych Odbić",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 121,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Obserwuj zachód słońca odbijający się w górskim jeziorze.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 510,
      "items": [45, 98, 167],
      "badgeId": 63
    },
    "status": "not-available",
    "desc": "Zobacz, jak woda zamienia się w płynny ogień o zachodzie słońca.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-123.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 124,
    "name": "Łowca Świetlnych Korytarzy",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 94,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 2,
        "desc": "Odnajdź miejsca, gdzie promienie słońca tworzą naturalne świetlne korytarze.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [124, 126, 149],
      "badgeId": 59
    },
    "status": "achieved-no-rewarded",
    "desc": "Odkryj magiczne miejsca, gdzie światło tworzy naturalne przedstawienia.",
    "difficulty": 8,
    "isRewardItemsSecret": true,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-124.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 125,
    "name": "Powiernik Ognistych Źródeł",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 124,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Spędź wschód słońca przy gorącym źródle.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 540,
      "items": [34, 78, 145, 156],
      "badgeId": 71
    },
    "status": "not-available",
    "desc": "Doświadcz harmonii ognia i wody w naturalnym gorącym źródle.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-125.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 126,
    "name": "Strażnik Świetlistych Kryształów",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 124,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odnajdź jaskinię z kryształami odbijającymi światło.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [23, 89, 167],
      "badgeId": 57
    },
    "status": "not-available",
    "desc": "Odkryj miejsce, gdzie kryształy tworzą magiczną grę świateł.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-126.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 127,
    "name": "Mistrz Ognistych Wspomnień",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 125,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy miejsca historycznych ognisk sygnałowych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 570,
      "items": [45, 98, 123, 156],
      "badgeId": 67
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie ogień służył jako pradawny system komunikacji.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-127.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 128,
    "name": "Tropiciel Świetlistych Szlaków",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 127,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przejdź szlak turystyczny podczas zachodu słońca.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [34, 89, 145],
      "badgeId": 50
    },
    "status": "not-available",
    "desc": "Doświadcz magii górskich szlaków w ostatnich promieniach dnia.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-128.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 129,
    "name": "Władca Ognistych Tęcz",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 125,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Zaobserwuj tęczę przy wodospadzie podczas zachodu słońca.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 510,
      "items": [23, 67, 156, 167],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Zobacz, jak światło słońca tworzy magiczne spektakle w kroplach wody.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-129.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 130,
    "name": "Strażnik Świętego Żaru",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 101,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwie kaplice ze stale płonącym ogniem.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [45, 98, 123],
      "badgeId": 56
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie wieczny ogień symbolizuje nieprzerwaną wiarę.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-130.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 131,
    "name": "Mistrz Ognistych Wschodów",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 129,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Obserwuj wschód słońca z najwyższego szczytu w okolicy.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 540,
      "items": [12, 78, 145],
      "badgeId": 70
    },
    "status": "not-available",
    "desc": "Bądź pierwszym świadkiem nowego dnia na szczycie góry.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-131.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 132,
    "name": "Łowca Świetlnych Zjawisk",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 130,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Zaobserwuj zjawisko halo słonecznego w górach.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [34, 89, 167],
      "badgeId": 42
    },
    "status": "not-available",
    "desc": "Odkryj niezwykłe zjawiska świetlne w górskiej atmosferze.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-132.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 133,
    "name": "Powiernik Ognistych Ceremonii",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 131,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w tradycyjnej ceremonii z użyciem ognia.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 570,
      "items": [23, 67, 98, 156],
      "badgeId": 73
    },
    "status": "not-available",
    "desc": "Poznaj pradawne tradycje związane z ceremonialnym użyciem ognia.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-133.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 134,
    "name": "Strażnik Ognistych Kryształów",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 126,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odnajdź miejsca występowania ognistych opalów.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [45, 123, 145],
      "badgeId": 60
    },
    "status": "not-available",
    "desc": "Odkryj kryształy, które zamknęły w sobie blask płomieni.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-134.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 135,
    "name": "Mistrz Świetlnych Jaskiń",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 134,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odkryj jaskinię ze zjawiskiem naturalnego świetlnego teatru.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 510,
      "items": [34, 78, 156],
      "badgeId": 45
    },
    "status": "not-available",
    "desc": "Zobacz, jak promienie słońca tworzą magiczne przedstawienia w jaskini.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-135.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 136,
    "name": "Władca Ognistych Wspomnień",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 135,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w nocnym festiwalu światła.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [23, 89, 145, 167],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Doświadcz magii światła podczas tradycyjnego festiwalu.",
    "difficulty": 5,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-136.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 137,
    "name": "Strażnik Czerwonego Świtu",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 103,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Obserwuj wschód słońca z trzech różnych punktów widokowych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 540,
      "items": [45, 98, 123],
      "badgeId": 69
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie świt maluje świat na czerwono.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-137.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 138,
    "name": "Łowca Ognistych Motyli",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 129,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Sfotografuj czerwone motyle w ich naturalnym środowisku.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 450,
      "items": [12, 67, 156],
      "badgeId": 54
    },
    "status": "not-available",
    "desc": "Odkryj piękno motyli o barwach płomieni.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-138.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 139,
    "name": "Powiernik Świetlnych Źródeł",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 137,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź miejsce, gdzie woda odbija światło tworząc niezwykłe wzory.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 510,
      "items": [34, 89, 145],
      "badgeId": 61
    },
    "status": "not-available",
    "desc": "Zobacz, jak natura tworzy świetlne przedstawienia na powierzchni wody.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-139.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 140,
    "name": "Mistrz Ognistych Ziół",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 138,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odnajdź dwa rodzaje czerwonych ziół leczniczych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 480,
      "items": [23, 98, 167],
      "badgeId": 66
    },
    "status": "not-available",
    "desc": "Odkryj rośliny o leczniczej mocy i ognistej barwie.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-140.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 141,
    "name": "Strażnik Świetlistych Legend",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 139,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa miejsca związane z legendami o świętym ogniu.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 540,
      "items": [45, 78, 123, 156],
      "badgeId": 72
    },
    "status": "not-available",
    "desc": "Poznaj miejsca, gdzie legendy o świętym ogniu są wciąż żywe.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-141.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 142,
    "name": "Mistrz Regionalnych Szlaków",
    "type": "turystyka piesza",
    "categoryId": 1,
    "parentId": 137,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 10,
        "current": 0,
        "desc": "Przejdź 10 km szlaku regionalnego.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 1800,
      "items": [61, 62],
      "badgeId": 46
    },
    "status": "not-available",
    "desc": "Przekrocz granice lokalnych tras i udowodnij, że znasz region na wylot.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-142.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 143,
    "name": "Legenda Regionu",
    "type": "odkrywanie",
    "categoryId": 1,
    "parentId": 137,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "stary_zamek",
        "current": false,
        "desc": "Odwiedź stary zamek znany z lokalnych legend.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 2000,
      "items": [63],
      "badgeId": 47
    },
    "status": "not-available",
    "desc": "Poznaj lokalne legendy i tajemnice, które czynią region wyjątkowym.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-143.png",
    "unlockDate": null,
    "createdAt": "2025-01-17T19:24:00Z",
    "updatedAt": "2025-01-17T19:24:00Z"
  },
  {
    "id": 144,
    "name": "Płomienie Poranka",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 134,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Obserwuj, jak dzień rodzi się w blasku płomieni poranka.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 120,
      "exp": 400,
      "items": [100],
      "badgeId": 5
    },
    "status": "not-available",
    "desc": "Obserwuj, jak pierwsze promienie słońca rozpalają niebo.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-144.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 145,
    "name": "Ogniste Echo",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 102,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Zapal symboliczne ognisko podczas zachodu słońca.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 130,
      "exp": 500,
      "items": [101],
      "badgeId": 6
    },
    "status": "not-available",
    "desc": "Poczuj echo ognia, który rezonuje z Twoją duszą.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-145.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 146,
    "name": "Strumień Płomieni",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 94,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 4,
        "current": 0,
        "desc": "Odwiedź cztery miejsca symbolizujące odrodzenie przez ogień.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 550,
      "items": [102, 103],
      "badgeId": null
    },
    "status": "not-achieved",
    "desc": "Doświadcz odrodzenia i energii, jaką niesie ze sobą ogień.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-146.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 147,
    "name": "Ognista Wizja",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 145,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "ognisko_legend",
        "current": false,
        "desc": "Odwiedź miejsce, gdzie legenda mówi, że ognisko płonie wiecznie.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 600,
      "items": [104],
      "badgeId": 7
    },
    "status": "not-available",
    "desc": "Odkryj tajemniczą wizję płomieni przenikających wieki.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-147.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 148,
    "name": "Płomień Tradycji",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 146,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w lokalnym święcie ognia.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 650,
      "items": [105, 106],
      "badgeId": 8
    },
    "status": "not-available",
    "desc": "Przeżyj tradycję i rytuały ognia, które odmieniają społeczność.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-148.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 149,
    "name": "Iskra Inspiracji",
    "type": "odkrywanie",
    "categoryId": 4,
    "parentId": 147,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa miejsca, gdzie ogień inspirował artystów.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 700,
      "items": [107],
      "badgeId": 9
    },
    "status": "not-available",
    "desc": "Zainspiruj się miejscami, gdzie ogień stał się muzą.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-149.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 150,
    "name": "Władca Płomieni",
    "type": "przygoda",
    "categoryId": 4,
    "parentId": 148,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 2,
        "current": 0,
        "desc": "Zrealizuj dwa rytuały ognia, by udowodnić swoją moc.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 750,
      "items": [108, 109],
      "badgeId": 10
    },
    "status": "not-available",
    "desc": "Udowodnij, że jesteś władcą płomieni poprzez antyczne rytuały.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-150.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T19:24:00Z",
    "updatedAt": "2025-01-18T19:24:00Z"
  },
  {
    "id": 151,
    "name": "Mistrz Zaklęć",
    "type": "magia",
    "categoryId": 5,
    "parentId": null,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Wykonaj zaklęcie na magicznym kręgu.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 500,
      "items": [112],
      "badgeId": 15
    },
    "status": "not-achieved",
    "desc": "Opanuj tajemnice zaklęć, rzucając je na starożytnym kręgu magii.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-151.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 152,
    "name": "Zaklinacz Elementów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 151,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Złącz siły czterech żywiołów przy użyciu magii.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 600,
      "items": [113, 114],
      "badgeId": 16
    },
    "status": "not-available",
    "desc": "Naucz się harmonizować cztery żywioły poprzez magię.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-152.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 153,
    "name": "Prorok Przyszłości",
    "type": "magia",
    "categoryId": 5,
    "parentId": 152,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "krystaliczna_sala",
        "current": false,
        "desc": "Odwiedź kryształową salę przepowiedni.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 650,
      "items": [115],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Zanurz się w tajemnicę przepowiedni ukrytych w kryształowej sali.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-153.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 154,
    "name": "Mistrz Iluzji",
    "type": "magia",
    "categoryId": 5,
    "parentId": 153,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 2,
        "current": 0,
        "desc": "Stwórz dwie spektakularne iluzje za pomocą zaklęć.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 700,
      "items": [116, 117],
      "badgeId": 17
    },
    "status": "not-available",
    "desc": "Opanuj sztukę tworzenia iluzji, by oszałamiać obserwatorów.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-154.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 155,
    "name": "Opiekun Zaklętych Artefaktów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 151,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 1,
        "current": 0,
        "desc": "Odwiedź starożytną bibliotekę magii.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 750,
      "items": [118],
      "badgeId": 18
    },
    "status": "not-available",
    "desc": "Zabezpiecz i poznaj tajemne artefakty, jakie skrywa starożytna biblioteka magii.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-155.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 156,
    "name": "Tajemniczy Inkantator",
    "type": "magia",
    "categoryId": 5,
    "parentId": 155,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Przeprowadź rytuał inkantacji w tajemniczym kręgu.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 800,
      "items": [119, 120],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Odkryj sekret rytuału inkantacji, który otwiera nowe drzwi magii.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-156.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 157,
    "name": "Arcymag Natury",
    "type": "magia",
    "categoryId": 5,
    "parentId": 156,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "stary_arboretum",
        "current": false,
        "desc": "Odwiedź starożytne arboretum pełne magicznych drzew.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 850,
      "items": [121],
      "badgeId": 19
    },
    "status": "not-available",
    "desc": "Poczuj siłę natury i magii, odwiedzając miejsce, gdzie rosną magiczne drzewa.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-157.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 158,
    "name": "Legenda Magii",
    "type": "magia",
    "categoryId": 5,
    "parentId": 157,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 3,
        "current": 0,
        "desc": "Ukończ trzy magiczne wyzwania, aby zapisać się na kartach legendy.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 900,
      "items": [122, 123, 124, 125],
      "badgeId": 20
    },
    "status": "not-available",
    "desc": "Zanurz się w tajemnicę, która uczyni Twoją magię legendarną.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-158.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:00:00Z",
    "updatedAt": "2025-01-18T20:00:00Z"
  },
  {
    "id": 159,
    "name": "Wędrowiec Czarodziejskich Ścieżek",
    "type": "magia",
    "categoryId": 5,
    "parentId": 156,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy magiczne ścieżki w Polsce.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 140,
      "exp": 500,
      "items": [130, 131],
      "badgeId": 21
    },
    "status": "not-available",
    "desc": "Przemierzaj krainę magii, odkrywając tajemnicze ścieżki, które łączą Polskę z legendami.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-159.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 160,
    "name": "Tajemnicza Mapa Magii",
    "type": "magia",
    "categoryId": 5,
    "parentId": 159,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "starozytny_manuskrypt",
        "current": false,
        "desc": "Odwiedź muzeum z eksponatem starożytnej mapy magii.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 600,
      "items": [132],
      "badgeId": 22
    },
    "status": "not-available",
    "desc": "Odkryj zakodowane tajemnice ukryte w starożytnej mapie, która łączy różne wymiary magii.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-160.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 161,
    "name": "Zaklinacz Starożytnych Ruin",
    "type": "magia",
    "categoryId": 5,
    "parentId": 160,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa starożytne ruiny, gdzie magia czasu nadal żyje.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 650,
      "items": [133, 134],
      "badgeId": 23
    },
    "status": "not-available",
    "desc": "Zanurz się w historię i magię ruin, które opowiadają o przeszłych cywilizacjach.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-161.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 162,
    "name": "Portale Przenikające Światy",
    "type": "magia",
    "categoryId": 5,
    "parentId": 151,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "magiczny_portal",
        "current": false,
        "desc": "Odwiedź miejsce, gdzie otwiera się portal między światami.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 700,
      "items": [135],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Przemierz granice międzywymiarowe, odkrywając portale łączące nasz świat z tajemniczymi krainami magii.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-162.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 163,
    "name": "Czarodziejskie Miasta",
    "type": "magia",
    "categoryId": 5,
    "parentId": 162,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy miasta, w których można poczuć magiczny klimat i historyczne tajemnice.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 750,
      "items": [136, 137],
      "badgeId": 25
    },
    "status": "not-available",
    "desc": "Odkryj czarodziejski klimat miast, które łączą nowoczesność z pradawną magią.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-163.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 164,
    "name": "Władca Niewidzialnych Szlaków",
    "type": "magia",
    "categoryId": 5,
    "parentId": 163,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Uczestnicz w nocnej wyprawie po szlakach obdarzonych magiczną aurą.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 800,
      "items": [138, 139],
      "badgeId": 26
    },
    "status": "not-available",
    "desc": "Przekrocz granice zwykłej rzeczywistości, odkrywając niewidzialne szlaki napędzane magią.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-164.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 165,
    "name": "Mistrz Międzynarodowej Magii",
    "type": "magia",
    "categoryId": 5,
    "parentId": 164,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "tajemnicze_muzeum",
        "current": false,
        "desc": "Odwiedź tajemnicze muzeum magii za granicą, by zanurzyć się w świat globalnej magii.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 900,
      "items": [140, 141],
      "badgeId": 27
    },
    "status": "not-available",
    "desc": "Przemierz świat, odkrywając magiczne skarby kultury.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-165.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 166,
    "name": "Legendarna Przygoda Czarodziejów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 165,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 3,
        "current": 0,
        "desc": "Weź udział w trzech międzynarodowych wyzwaniach magicznych, aby potwierdzić swoje mistrzostwo.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 950,
      "items": [142, 143, 144, 145],
      "badgeId": 28
    },
    "status": "not-available",
    "desc": "Zdobądź tytuł legendarnego czarodzieja, dokonując niezwykłych wyczynów na skalę światową.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-166.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 167,
    "name": "Czarodziejskie Przebudzenie",
    "type": "magia",
    "categoryId": 5,
    "parentId": 166,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 2,
        "current": 0,
        "desc": "Wykonaj dwa rytuały przebudzenia magii podczas nocnych podróży.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1000,
      "items": [146, 147, 148],
      "badgeId": 29
    },
    "status": "not-available",
    "desc": "Przeżyj moment, gdy magia budzi się na nowo, otwierając drzwi do nieskończonych możliwości.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-167.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:05:00Z",
    "updatedAt": "2025-01-18T20:05:00Z"
  },
  {
    "id": 168,
    "name": "Maraton Magii Podróżnika",
    "type": "sport",
    "categoryId": 5,
    "parentId": 159,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 42,
          "current": 0,
          "desc": "Ukończ maraton na trasie historycznej – przebiegnij 42 km.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź miejsca startu i mety wyznaczone przez organizatora.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 250,
      "exp": 1800,
      "items": [130, 131],
      "badgeId": 26
    },
    "status": "not-available",
    "desc": "Ukończ maraton, gdzie każdy kilometr skrywa magię dawnych legend.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-168.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 169,
    "name": "Wspinaczka Magii Kamieni",
    "type": "przygoda",
    "categoryId": 5,
    "parentId": 168,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy historyczne szczyty, gdzie kamienie opowiadają legendy.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 100,
          "current": 0,
          "desc": "Zdobywaj 100 metrów wysokości pokonując strome, mistyczne ściany skalne.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 2000,
      "items": [132, 133, 134],
      "badgeId": 27
    },
    "status": "not-available",
    "desc": "Wspinaj się po ścieżkach, gdzie kamienie kryją magiczne opowieści.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-169.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 170,
    "name": "Rowerowy Rytuał Podróży",
    "type": "sport",
    "categoryId": 5,
    "parentId": 159,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 50,
          "current": 0,
          "desc": "Przejedź rowerem 50 km po malowniczej trasie.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa historyczne punkty widokowe na trasie.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1700,
      "items": [135, 136],
      "badgeId": 28
    },
    "status": "not-available",
    "desc": "Wyrusz na rowerową wyprawę, łącząc tradycję z nowoczesną pasją odkrywania.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-170.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 171,
    "name": "Kajakarz Czarodziejskiego Prądu",
    "type": "przygoda",
    "categoryId": 5,
    "parentId": 170,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 20,
          "current": 0,
          "desc": "Płynąć kajakiem 20 km po rzece o tajemniczej aurze.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa jeziora znane z magicznej wody.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1800,
      "items": [137, 138, 139],
      "badgeId": 29
    },
    "status": "not-available",
    "desc": "Przemierz rzeki kajakiem, gdzie natura łączy się z mistycznymi siłami.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-171.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 172,
    "name": "Bieg Mitycznych Ścieżek",
    "type": "sport",
    "categoryId": 5,
    "parentId": 161,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 10,
          "current": 0,
          "desc": "Przebiegnij 10 km na ścieżce, która kryje w sobie starożytne tajemnice.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "starozytny_szlak",
          "current": false,
          "desc": "Uczestnicz w zwiedzaniu starożytnego szlaku kulturowego.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1600,
      "items": [140],
      "badgeId": 30
    },
    "status": "not-available",
    "desc": "Połącz wyzwania sportowe z duchem starożytnej kultury i magii tradycji.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-172.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 173,
    "name": "Skoczek Magii Nart",
    "type": "sport",
    "categoryId": 5,
    "parentId": 161,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 5,
          "current": 0,
          "desc": "Wykonaj 5 skoków narciarskich na torze z mistycznym oporem.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź znany ośrodek sportów zimowych, gdzie tradycja łączy się z magią.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1900,
      "items": [141, 142, 143],
      "badgeId": 31
    },
    "status": "not-available",
    "desc": "Zaprezentuj swoje umiejętności w ekstremalnych skokach narciarskich, gdzie sport i magia tworzą jedno.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-173.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 174,
    "name": "Odkrywca Pradawnych Szlaków",
    "type": "odkrywanie",
    "categoryId": 5,
    "parentId": 155,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 4,
          "current": 0,
          "desc": "Odwiedź cztery starożytne szlaki handlowe w Europie.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Ukończ przewodnik po jednym z szlaków.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "muzeum_artefaktow",
          "current": false,
          "desc": "Odwiedź muzeum prezentujące artefakty związane z tymi szlakami.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 240,
      "exp": 2000,
      "items": [144, 145],
      "badgeId": 32
    },
    "status": "not-available",
    "desc": "Odkryj pradawne ścieżki, łączące kulturę ze współczesną magią podróżowania.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-174.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 175,
    "name": "Wyczynowy Podróżnik Mocy",
    "type": "przygoda",
    "categoryId": 5,
    "parentId": 174,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 30,
          "current": 0,
          "desc": "Kajakuj 30 km na rzece pełnej magicznej energii.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 10,
          "current": 0,
          "desc": "Przebiegnij 10 km po szlaku, który ubogaca duszę.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 20,
          "current": 0,
          "desc": "Przejedź 20 km rowerem śladami historycznych tras.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź międzynarodowy festiwal sportowy z elementami magii.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "OR"
    }],
    "rewards": {
      "points": 250,
      "exp": 2200,
      "items": [146, 147, 148, 149],
      "badgeId": 33
    },
    "status": "not-available",
    "desc": "Dokonaj wyczynu, łączącego ekstremalne sporty z mistycznymi tradycjami.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-175.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:10:00Z",
    "updatedAt": "2025-01-18T20:10:00Z"
  },
  {
    "id": 176,
    "name": "Czarodziejskie Echo Podróży",
    "type": "magia",
    "categoryId": 5,
    "parentId": 155,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy najstarsze miejsca podróżnicze o magicznej historii w Polsce.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Stwórz krótki vlog dokumentujący Twoją magiczną podróż.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 900,
      "items": [150, 151],
      "badgeId": 32
    },
    "status": "not-available",
    "desc": "Przeżyj podróż, której echo rozbrzmiewa magią i legendami dawnych czasów.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-176.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 177,
    "name": "Magiczne Kręgi Świata",
    "type": "magia",
    "categoryId": 5,
    "parentId": 168,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa historyczne kręgi kulturowe z elementami magii.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Weź udział w warsztacie tworzenia magicznych symboli.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 950,
      "items": [152, 153],
      "badgeId": 33
    },
    "status": "not-available",
    "desc": "Odkryj starożytne kręgi, które łączą legendy z rzeczywistością, podbijając świat magii podróży.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-177.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 178,
    "name": "Zaklinacz Starożytnych Legend",
    "type": "magia",
    "categoryId": 5,
    "parentId": 181,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "starozytny_festiwal",
          "current": false,
          "desc": "Odwiedź miejsce słynące z festiwalu opowieści, gdzie dawna magia wciąż żyje.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Weź udział w ceremonii opowiadania legend.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1000,
      "items": [154],
      "badgeId": null
    },
    "status": "not-available",
    "desc": "Zanurz się w starożytne legendy i pozwól, aby ich moc przeniknęła Twoją duszę.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-178.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 179,
    "name": "Prorok Magicznych Przemyśleń",
    "type": "magia",
    "categoryId": 5,
    "parentId": 181,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 2,
          "current": 0,
          "desc": "Spędź weekend medytując w magicznych krajobrazach i zrób notatki z odkrytymi inspiracjami.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź starożytny klasztor znany z duchowych tradycji.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1050,
      "items": [155, 156],
      "badgeId": 34
    },
    "status": "not-available",
    "desc": "Przeniknij głębię duchowej refleksji, która pozwoli Ci przewidzieć przyszłość.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-179.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 180,
    "name": "Czarodziejskie Wrota",
    "type": "magia",
    "categoryId": 5,
    "parentId": 151,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "tajemnicze_wrota",
          "current": false,
          "desc": "Odwiedź starożytny zamek i przejdź przez tajemnicze wrota, które według legend otwierają się tylko raz na sto lat.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wykonaj rytuał przejścia przy użyciu tradycyjnych zaklęć.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1100,
      "items": [157, 158, 159],
      "badgeId": 35
    },
    "status": "not-available",
    "desc": "Otwórz wrota między wymiarami, łącząc tradycję z nowoczesną magią.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-180.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 181,
    "name": "Przebudzenie Magii",
    "type": "magia",
    "categoryId": 5,
    "parentId": 180,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wykonaj rytuał przebudzenia przy starożytnym kręgu.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź tajemniczy krąg magicznej energii.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "tajemniczy_portal",
          "current": false,
          "desc": "Odwiedź miejsce, gdzie według legend otwiera się portal do innego świata.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 240,
      "exp": 1150,
      "items": [160, 161],
      "badgeId": 36
    },
    "status": "not-available",
    "desc": "Przeżyj moment, gdy magia budzi się na nowo, otwierając drzwi do nieskończonych możliwości.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-181.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 182,
    "name": "Mistrz Niewidzialnych Zaklęć",
    "type": "magia",
    "categoryId": 5,
    "parentId": 181,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Utwórz niewidzialną iluzję na potrzeby ochrony tajemnic magicznych.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa laboratoria magii, aby zgłębić techniki iluzji.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 250,
      "exp": 1200,
      "items": [162, 163, 164],
      "badgeId": 37
    },
    "status": "not-available",
    "desc": "Opanuj tajemnice niewidzialnych zaklęć, przekraczając granice zwykłej percepcji.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-182.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 183,
    "name": "Wędrowiec Magicznych Światów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 182,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy kraje, w których tradycja magii jest żywa i obecna.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w międzynarodowym festiwalu magii.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "tajemnicza_katedra",
          "current": false,
          "desc": "Odwiedź tajemniczą katedrę, która łączy symbolikę historyczną z magią.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 260,
      "exp": 1250,
      "items": [165, 166, 167, 168],
      "badgeId": 38
    },
    "status": "not-available",
    "desc": "Przemierzaj świat, gdzie granice między kulturą, historią a magią zacierają się, tworząc niezapomniane doświadczenie.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-183.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 184,
    "name": "Akademia Magicznych Podróży",
    "type": "magia",
    "categoryId": 5,
    "parentId": 183,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 2,
          "current": 0,
          "desc": "Ukończ dwa kursy lub warsztaty o tematyce magicznych podróży w renomowanej instytucji.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź akademię lub centrum nauki magii.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 270,
      "exp": 1300,
      "items": [169, 170],
      "badgeId": 39
    },
    "status": "not-available",
    "desc": "Poszerz swoje horyzonty, zdobywając wiedzę o magii podróżowania i zyskując szacunek światowych ekspertów.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-184.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 185,
    "name": "Ekspedycja Magicznych Horyzontów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 184,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 3,
          "current": 0,
          "desc": "Ukończ trzy wyzwania związane z eksploracją nowych magicznych terenów.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa europejskie miasta znane z historycznych tradycji magii.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "tajemnicze_muzeum",
          "current": false,
          "desc": "Odwiedź muzeum prezentujące artefakty magicznych ekspedycji.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 280,
      "exp": 1350,
      "items": [171, 172, 173],
      "badgeId": 40
    },
    "status": "not-available",
    "desc": "Wyrusz na ekspedycję, która łączy odkrywczy duch podróży z mocą magii, otwierając nowe horyzonty.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-185.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:15:00Z",
    "updatedAt": "2025-01-18T20:15:00Z"
  },
  {
    "id": 186,
    "name": "Echo Przestrzeni",
    "type": "magia",
    "categoryId": 5,
    "parentId": 170,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 2,
        "current": 0,
        "desc": "Odwiedź dwa miejsca, gdzie przestrzeń zdaje się zakrzywiać pod wpływem magii.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 800,
      "items": [174],
      "badgeId": 41
    },
    "status": "not-available",
    "desc": "Poczuj echo magicznych zjawisk, które zmieniają percepcję rzeczywistości.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-186.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 187,
    "name": "Przemiana Mgły",
    "type": "magia",
    "categoryId": 5,
    "parentId": 186,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Stwórz wizualną opowieść mgły podczas zachodu słońca.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź mglisty las, gdzie natura emanuje tajemnicą.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 850,
      "items": [175, 176],
      "badgeId": 42
    },
    "status": "not-available",
    "desc": "Przemień mgłę w inspirację, łącząc widoki z magią natury.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-187.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 188,
    "name": "Kryształowy Rytuał",
    "type": "magia",
    "categoryId": 5,
    "parentId": 187,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Przeprowadź rytuał z użyciem kryształów w tajemniczej scenerii.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "krysztalowa_sala",
          "current": false,
          "desc": "Odwiedź kryształową salę przepowiedni.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 900,
      "items": [177, 178, 179],
      "badgeId": 43
    },
    "status": "not-available",
    "desc": "Wykorzystaj moc kryształów, aby urzeczywistnić rytuał, który zmieni oblicze magii.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-188.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 189,
    "name": "Tajemniczy Portal",
    "type": "magia",
    "categoryId": 5,
    "parentId": 179,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "tajemnicze_wrota",
          "current": false,
          "desc": "Odwiedź miejsce, gdzie legendy mówią o otwierających się portalach.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wykonaj rytuał otwarcia portalu zgodnie z tradycją.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 950,
      "items": [180, 181],
      "badgeId": 44
    },
    "status": "not-available",
    "desc": "Przełam bariery rzeczywistości, otwierając tajemniczy portal między światami.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-189.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 190,
    "name": "Inkarnacja Magii",
    "type": "magia",
    "categoryId": 5,
    "parentId": 189,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 2,
          "current": 0,
          "desc": "Ukończ dwa zaawansowane rytuały, podtrzymując pradawną magię.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź legendarną lokalizację inkantacji, która inspiruje pokolenia.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1000,
      "items": [182, 183, 184],
      "badgeId": 45
    },
    "status": "not-available",
    "desc": "Uobecnij pradawną moc, łącząc rytuały, które budzą magię w nową formę.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-190.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 191,
    "name": "Mistrz Przestrzennej Transcendencji",
    "type": "magia",
    "categoryId": 5,
    "parentId": 178,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Osiągnij stan medytacyjny podczas podróży po magicznych szlakach.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "szlak_transcendencji",
          "current": false,
          "desc": "Odwiedź miejsce, znane jako brama do innego wymiaru.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1050,
      "items": [185, 186],
      "badgeId": 46
    },
    "status": "not-available",
    "desc": "Przekrocz granice zwykłej percepcji, osiągając stan transcendencji przez podróż w przestrzeni.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-191.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 192,
    "name": "Wędrowiec Czasu i Magii",
    "type": "magia",
    "categoryId": 5,
    "parentId": 191,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Weź udział w ceremonii łączącej przeszłość z przyszłością.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa historyczne miejsca, gdzie magia była obecna.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1100,
      "items": [187, 188, 189],
      "badgeId": 47
    },
    "status": "not-available",
    "desc": "Przenieś się między epokami, łącząc tradycję i futurystyczną magię w niezapomnianej podróży.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-192.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 193,
    "name": "Legenda Magicznych Podróży",
    "type": "magia",
    "categoryId": 5,
    "parentId": 192,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Dokonaj spektakularnej wyprawy, która zapisze się w annałach podróży.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy kontynenty, gdzie kultura i magia splatają się w jedną opowieść.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "tajemniczy_zamek",
          "current": false,
          "desc": "Odwiedź legendarny zamek, gdzie magia trwa nieprzerwanie od wieków.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1150,
      "items": [190, 191, 192, 193],
      "badgeId": 48
    },
    "status": "not-available",
    "desc": "Stań się legendą, pokonując granice między kulturami, czasem i magią w podróżach.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-193.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 194,
    "name": "Magiczny Kompas Światów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 154,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwie starożytne lokalizacje pełne magii.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wykonaj zadanie orientacyjne odkrywające tajemnice kompasu.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 850,
      "items": [150],
      "badgeId": 26
    },
    "status": "not-available",
    "desc": "Odkryj drogowskaz, który wskaże Ci tajemnicze ścieżki między światami.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-194.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 195,
    "name": "Zaklęty Mosty Kultury",
    "type": "magia",
    "categoryId": 5,
    "parentId": 194,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy historyczne mosty, łączące tradycję z magią.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w ceremonii mostowej.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 900,
      "items": [151, 152],
      "badgeId": 27
    },
    "status": "not-available",
    "desc": "Przekrocz granice czasu, odkrywając mosty łączące przeszłość z przyszłością.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-195.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 196,
    "name": "Rytuał Ognia i Wody",
    "type": "magia",
    "categoryId": 5,
    "parentId": 195,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wykonaj rytuał łączący ogień i wodę w mistycznej ceremonii.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "mistyczna_fontanna",
          "current": false,
          "desc": "Odwiedź mistyczną fontannę w sercu starego miasta.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 950,
      "items": [153, 154, 155],
      "badgeId": 28
    },
    "status": "not-available",
    "desc": "Połącz przeciwstawne żywioły, odkrywając równowagę magii.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-196.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 197,
    "name": "Przełomowy Rytuał Przemiany",
    "type": "magia",
    "categoryId": 5,
    "parentId": 196,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Ukończ rytuał przemiany w starożytnej świątyni.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź świątynię tajemniczej transformacji.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 1000,
      "items": [156, 157],
      "badgeId": 29
    },
    "status": "not-available",
    "desc": "Doświadcz transformacji, która zmienia Twoją aurę podróżnika.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-197.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 198,
    "name": "Zaklinacz Przeciwstawnych Żywiołów",
    "type": "magia",
    "categoryId": 5,
    "parentId": 196,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Połącz w sobie siłę ognia i lodu podczas specjalnego zadania.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa miejsca, gdzie te żywioły się spotykają.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1050,
      "items": [158, 159, 160],
      "badgeId": 30
    },
    "status": "not-available",
    "desc": "Odkryj harmonię między przeciwstawnymi żywiołami, wykorzystując magię, aby je zjednoczyć.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-198.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 199,
    "name": "Kronikarz Magicznych Pamięci",
    "type": "magia",
    "categoryId": 5,
    "parentId": 165,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "kraina_wspomnien",
        "current": false,
        "desc": "Odwiedź miejsce, gdzie zapisane są historie magicznych podróży.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1100,
      "items": [161],
      "badgeId": 31
    },
    "status": "not-available",
    "desc": "Zanotuj swoje magiczne przygody, tworząc kronikę niesamowitych podróży.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-199.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 200,
    "name": "Prorok Międzynarodowych Tajemnic",
    "type": "magia",
    "categoryId": 5,
    "parentId": 199,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w międzynarodowym spotkaniu magów.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa międzynarodowe centra kultury magii.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "globus_magii",
          "current": false,
          "desc": "Zbadaj globus symbolizujący międzynarodową harmonię magii.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 3,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1150,
      "items": [162, 163, 164, 165],
      "badgeId": 32
    },
    "status": "not-available",
    "desc": "Przenieś się poza granice kraju, odkrywając tajemnice magii na skalę międzynarodową.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-200.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },
  {
    "id": 201,
    "name": "Arcymistrz Globalnych Przygód",
    "type": "magia",
    "categoryId": 5,
    "parentId": 200,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wykonaj globalny wyczyn magiczny, który zapisze się w historii.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź legendarną lokalizację, której historia sięga starożytności.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1200,
      "items": [166, 167, 168],
      "badgeId": 33
    },
    "status": "not-available",
    "desc": "Stań się arcymistrzem, którego przygody inspirują cały świat.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-201.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:20:00Z",
    "updatedAt": "2025-01-18T20:20:00Z"
  },


  // kategoria 6
  {
    "id": 202,
    "name": "Opiekun Rodzinnych Ścieżek",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": null,
    "requirements": [{
      "conditions": [
        {
          "type": "location_visit",
          "target": 2,
          "current": 2,
          "desc": "Odwiedź dwa parki krajobrazowe.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 1,
          "desc": "Odwiedź miejsce rekreacyjne.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 800,
      "items": [50, 72],
      "badgeId": 36
    },
    "status": "achieved-no-rewarded",
    "desc": "Zadbaj o rodzinne relacje, wspólnie odkrywając urok natury.",
    "difficulty": 5,
    "isRewardItemsSecret": true,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-202.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 203,
    "name": "Świadek Życia Wsi",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 202,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy tradycyjne wsie i poznaj lokalne zwyczaje.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 850,
      "items": [51, 52],
      "badgeId": 11
    },
    "status": "not-available",
    "desc": "Doświadcz autentycznego życia wiejskiego, gdzie tradycja splata się z magią codzienności.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-203.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 204,
    "name": "Mistrz Lokalnych Smaków",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 203,
    "requirements": [{
      "conditions": [
        {
          "type": "specific_location",
          "target": "lokalna_gastronomia",
          "current": false,
          "desc": "Odwiedź targowiska i restauracje serwujące tradycyjne potrawy.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w warsztatach kulinarnych organizowanych w regionie.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 900,
      "items": [53],
      "badgeId": 12
    },
    "status": "not-available",
    "desc": "Odkryj bogactwo lokalnej kuchni, czerpiąc inspiracje z tradycji i magii smaku.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-204.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 205,
    "name": "Zdobywca Zielonych Tras",
    "type": "sport",
    "categoryId": 6,
    "parentId": 202,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 5,
          "current": 0,
          "desc": "Przejedź 5 km rowerem po trasach przyrodniczych.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa rezerwaty przyrody z unikalną florą.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 950,
      "items": [54, 55],
      "badgeId": 13
    },
    "status": "not-available",
    "desc": "Przemierzaj zielone tory przyrody, odkrywając przepiękne krajobrazy.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-205.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 206,
    "name": "Opiekun Życia",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 205,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w kampanii promującej zdrowy tryb życia.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 1000,
      "items": [56],
      "badgeId": 14
    },
    "status": "not-available",
    "desc": "Angażuj się w inicjatywy społeczności promujące zdrowie i dobrostan.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-206.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 207,
    "name": "Wędrowiec Życiowych Opowieści",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 231,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "stary_zamek",
          "current": false,
          "desc": "Odwiedź historyczny zamek, gdzie lokalne legendy ożywają.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Przeprowadź wywiad z mieszkańcami o lokalnych tradycjach.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1050,
      "items": [57],
      "badgeId": 15
    },
    "status": "not-available",
    "desc": "Uchwyć historie, które kształtują duszę regionu i inspirują pokolenia.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-207.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 208,
    "name": "Ekspedycja Życia",
    "type": "przygoda",
    "categoryId": 6,
    "parentId": 207,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 10,
          "current": 0,
          "desc": "Przejdź 10 km pieszo w towarzystwie rodziny lub przyjaciół.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź miejsce, gdzie odbywają się tradycyjne festyny rodzinne.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1100,
      "items": [58, 59],
      "badgeId": 16
    },
    "status": "not-available",
    "desc": "Doświadcz pełni życia, łącząc aktywność fizyczną ze wspólnotą i tradycją.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-208.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 209,
    "name": "Życiowy Mentor",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 208,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Przeprowadź warsztaty lub prelekcję o zdrowym stylu życia.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "centrum_kultur",
          "current": false,
          "desc": "Odwiedź centrum kultury promujące zdrowe życie.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1150,
      "items": [60],
      "badgeId": 17
    },
    "status": "not-available",
    "desc": "Inspiruj innych, dzieląc się wiedzą i doświadczeniem w podróżach po życiu.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-209.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:30:00Z",
    "updatedAt": "2025-01-18T20:30:00Z"
  },
  {
    "id": 210,
    "name": "Rodzinne Wędrówki",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 228,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy przyjazne rodzinie parki lub ośrodki rekreacyjne.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 900,
      "items": [60],
      "badgeId": 18
    },
    "status": "not-available",
    "desc": "Spędź niezapomniane chwile wraz z rodziną, odkrywając miejsca pełne spokoju.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-210.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 211,
    "name": "Kulturalny Odkrywca",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 219,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "muzeum_regionalne",
          "current": false,
          "desc": "Odwiedź muzeum regionalne prezentujące lokalną kulturę.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w lokalnym festiwalu kultury.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 950,
      "items": [61, 62],
      "badgeId": 19
    },
    "status": "not-available",
    "desc": "Poznaj bogactwo lokalnej kultury podczas fascynujących wydarzeń.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-211.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 212,
    "name": "Smak Tradycji",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 210,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "lokalna_gastronomia",
          "current": false,
          "desc": "Odwiedź restaurację serwującą tradycyjne potrawy regionalne.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Weź udział w warsztatach kulinarnych.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 1000,
      "items": [63],
      "badgeId": 20
    },
    "status": "not-available",
    "desc": "Delektuj się tradycyjnymi smakami, odkrywając kulinarną bogactwo regionu.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-212.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 213,
    "name": "Opiekun Wiejskich Tajemnic",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 211,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwie tradycyjne wsie, gdzie zachowały się pierwotne zwyczaje.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w festynie wiejskim i dowiedz się o lokalnych tradycjach.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 1050,
      "items": [64],
      "badgeId": 21
    },
    "status": "not-available",
    "desc": "Zanurz się w autentycznej atmosferze wsi, poznając jej sekrety i tradycje.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-213.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 214,
    "name": "Rytuał Rodzinny",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 206,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 1,
        "current": 0,
        "desc": "Weź udział w tradycyjnym rytuale rodzinnym podczas festynu.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 1100,
      "items": [65],
      "badgeId": 22
    },
    "status": "not-available",
    "desc": "Przeżyj niezapomniany moment, gdy cała rodzina razem uczestniczy w rytuale jedności.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-214.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 215,
    "name": "Echo Wsi",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 207,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy wsie, dokumentując lokalne tradycje i legendy.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1150,
      "items": [66],
      "badgeId": 23
    },
    "status": "not-available",
    "desc": "Zbierz echa opowieści, które krążą po wiejskich drogach i śladami dawnych czasów.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-215.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 216,
    "name": "Życiowy Przewodnik",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 207,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "centrum_informacji",
          "current": false,
          "desc": "Odwiedź lokalne centrum informacji turystycznej.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Skonsultuj się z ekspertem ds. turystyki lokalnej.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1200,
      "items": [67, 68],
      "badgeId": 24
    },
    "status": "not-available",
    "desc": "Zdobądź wiedzę o regionie od ekspertów i stań się przewodnikiem dla innych.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-216.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 217,
    "name": "Mistrz Lokalnego Stylu",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 206,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "sklep_z_rzemioslem",
          "current": false,
          "desc": "Odwiedź sklep z lokalnym rzemiosłem, aby poznać autentyczny styl regionu.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Weź udział w warsztatach stylizacyjnych prowadzonych przez lokalnych mistrzów.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1250,
      "items": [69],
      "badgeId": 25
    },
    "status": "not-available",
    "desc": "Poczuj ducha regionu, stając się mistrzem lokalnego stylu i tradycji.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-217.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:35:00Z",
    "updatedAt": "2025-01-18T20:35:00Z"
  },
  {
    "id": 218,
    "name": "Rodzinna Eskapada",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 204,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy atrakcje przyjazne rodzinie.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Zrób wspólne zdjęcie z rodziną podczas eskapady.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 900,
      "items": [70],
      "badgeId": 26
    },
    "status": "not-available",
    "desc": "Doświadcz niezapomnianej rodziny eskapady, która łączy tradycję z nowoczesnością.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-218.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 219,
    "name": "Skarby Rodzinnego Dziedzictwa",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 239,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "stary_zamek",
          "current": false,
          "desc": "Odwiedź zamek, gdzie historia rodziny jest pielęgnowana.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Przeprowadź rozmowę z lokalnym przewodnikiem o tradycjach regionu.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 170,
      "exp": 950,
      "items": [71, 72],
      "badgeId": 27
    },
    "status": "not-available",
    "desc": "Poznaj dziedzictwo rodowe poprzez wizytę w historycznych miejscach.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-219.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 220,
    "name": "Wędrowiec Zielonych Zakątków",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 204,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 4,
          "current": 0,
          "desc": "Odwiedź cztery malownicze trasy spacerowe wśród zieleni.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Zrób zdjęcie, które odda urok natury.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 1000,
      "items": [73],
      "badgeId": 28
    },
    "status": "not-available",
    "desc": "Dokonaj odkryć na trasach wyznaczonych przez naturę i podziel się tym pięknem z innymi.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-220.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 221,
    "name": "Rodzinny Festiwal Smaków",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 210,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "festiwal_kulinarny",
          "current": false,
          "desc": "Odwiedź festiwal kulinarny promujący lokalne tradycje.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Spróbuj co najmniej pięciu tradycyjnych potraw.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 1050,
      "items": [74],
      "badgeId": 29
    },
    "status": "not-available",
    "desc": "Doświadcz rodzinnej atmosfery podczas festiwalu, poznając lokalne smaki i tradycje.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-221.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 222,
    "name": "Odkrywca Kultury Wiejskiej",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 207,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy wioski o bogatej historii i tradycjach.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Przeprowadź wywiad z miejscowymi mieszkańcami.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1100,
      "items": [75, 76],
      "badgeId": 30
    },
    "status": "not-available",
    "desc": "Poznaj mieszkańców wsi i odkryj ich kulturę, tradycje oraz sekrety regionu.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-222.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 223,
    "name": "Przewodnik Rodzinnych Ścieżek",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 211,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 5,
          "current": 0,
          "desc": "Przejdź 5 km szlakiem przyrodniczym razem z rodziną.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Zrób wspólne zdjęcie w urokliwym miejscu.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1150,
      "items": [77],
      "badgeId": 31
    },
    "status": "not-available",
    "desc": "Zostań przewodnikiem rodzinnych przygód, odkrywając piękno natury.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-223.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 224,
    "name": "Społeczny Ambasador Podróży",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 211,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 2,
        "current": 0,
        "desc": "Zorganizuj spotkanie lub prezentację o regionalnych atrakcjach turystycznych.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1200,
      "items": [78],
      "badgeId": 32
    },
    "status": "not-available",
    "desc": "Zostań ambasadorem lokalnej turystyki, promując atrakcje regionu wśród społeczności.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-224.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 225,
    "name": "Mistrz Życiowych Doświadczeń",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 207,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 2,
          "current": 0,
          "desc": "Dokonaj dwóch wyzwań, które zmienią Twoje życie – odwiedź nietypowe miejsce i staw czoła personalnemu wyzwaniu.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź miejsce, w którym tradycja splata się z nowoczesnym stylem życia.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1250,
      "items": [79, 80],
      "badgeId": 33
    },
    "status": "not-available",
    "desc": "Doświadcz pełni życia, zyskując niezapomniane doświadczenia, które kształtują Twoją tożsamość.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-225.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:40:00Z",
    "updatedAt": "2025-01-18T20:40:00Z"
  },
  {
    "id": 227,
    "name": "Kalejdoskop Wrażeń",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 226,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "stare_muzeum",
          "current": false,
          "desc": "Odwiedź stare muzeum regionalne z unikalnymi ekspozycjami.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Stwórz multimedialną relację dokumentującą Twoje odkrycia.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1350,
      "items": [83, 84, 85],
      "badgeId": 35
    },
    "status": "not-available",
    "desc": "Zbierz różnorodne wrażenia z podróży, odkrywając piękno tradycji regionu.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-227.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 228,
    "name": "Szlak Smaku i Tradycji",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 238,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "lokalna_kuchnia",
          "current": false,
          "desc": "Odwiedź miejsce, gdzie tradycyjna kuchnia jest celebrowana.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w warsztatach kulinarnych z lokalnymi szefami kuchni.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1200,
      "items": [86, 87],
      "badgeId": 36
    },
    "status": "not-available",
    "desc": "Odkryj tajemnice tradycyjnych smaków regionu podczas kulinarnych wędrówek.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-228.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 229,
    "name": "Bieg Rodzinnej Energii",
    "type": "sport",
    "categoryId": 6,
    "parentId": 205,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 5,
          "current": 0,
          "desc": "Przebiegnij 5 km rodzimym szlakiem wspólnie z rodziną.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa zielone miejsca rekreacyjne.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1100,
      "items": [88, 89],
      "badgeId": 37
    },
    "status": "not-available",
    "desc": "Wykonaj bieg rodowy, łącząc aktywność fizyczną z bliskością natury.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-229.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 230,
    "name": "Eksplorator Regionalny",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 207,
    "requirements": [{
      "conditions": [{
        "type": "location_visit",
        "target": 3,
        "current": 0,
        "desc": "Odwiedź trzy autentyczne wsie o bogatej tradycji.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1150,
      "items": [90],
      "badgeId": 38
    },
    "status": "not-available",
    "desc": "Poznaj uroki regionu, odkrywając autentyczne wsie i ich historie.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-230.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 232,
    "name": "Podróżnik Historii Rodzinnej",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 225,
    "requirements": [{
      "conditions": [{
        "type": "activity",
        "target": 2,
        "current": 0,
        "desc": "Uczestnicz w rodzinnej wyprawie, przebiegając łączną trasę 5 km.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 230,
      "exp": 1250,
      "items": [93],
      "badgeId": 40
    },
    "status": "not-available",
    "desc": "Zanurz się w rodzinnych opowieściach, odkrywając ślad przeszłości regionu.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-232.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 234,
    "name": "Krakowskie Zaklęcia",
    "type": "magia",
    "categoryId": 6,
    "parentId": 213,
    "requirements": [{
      "conditions": [{
        "type": "specific_location",
        "target": "wawel_krakow",
        "current": false,
        "desc": "Odwiedź Wawel w Krakowie i zbadaj starożytne inskrypcje, które przekazują magiczne tajemnice.",
        "isMandatory": true
      }],
      "requiredConditionsNumber": 1,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 1200,
      "items": [130],
      "badgeId": 10
    },
    "status": "not-available",
    "desc": "Wejdź w mistyczną atmosferę Krakowa, gdzie historia spotyka magię.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-234.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 235,
    "name": "Warszawska Aura",
    "type": "magia",
    "categoryId": 6,
    "parentId": 211,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "lazienki_warszawa",
          "current": false,
          "desc": "Odwiedź Łazienki Królewskie w Warszawie, by poczuć magiczną aurę stolicy.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 3,
          "current": 0,
          "desc": "Przejdź wyznaczony 3 km szlak w Łazienkach, notując zmieniające się pejzaże.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 1250,
      "items": [131, 132],
      "badgeId": 11
    },
    "status": "not-available",
    "desc": "Odkryj magiczną stronę Warszawy, gdzie historia splata się z nowoczesnością.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-235.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 236,
    "name": "Rodzinne Wędrówki Życia",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 202,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 3,
          "current": 0,
          "desc": "Odwiedź trzy miejsca przyjazne rodzinie – np. Park Linowy w Warszawie, Zoo w Krakowie i Rezerwat Przyrody Kampinoski.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w festynie rodzinnym organizowanym w jednym z tych miejsc.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 150,
      "exp": 900,
      "items": [70, 71],
      "badgeId": 10
    },
    "status": "not-available",
    "desc": "Odkryj urok rodzinnych podróży, łącząc bliskość natury z tradycjami.",
    "difficulty": 6,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-236.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 237,
    "name": "Kulturalny Odkrywca Domu",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 236,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "stary_dom_kultury",
          "current": false,
          "desc": "Odwiedź Stary Dom Kultury w Lublinie, gdzie tradycja spotyka sztukę.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Wzięcie udziału w warsztatach folklorystycznych organizowanych w tym miejscu.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 160,
      "exp": 950,
      "items": [72, 73],
      "badgeId": 11
    },
    "status": "not-available",
    "desc": "Przenieś się w czasie, odkrywając tradycje kulturowe regionu poprzez lokalne domy kultury.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-237.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 239,
    "name": "Dom Kultury w Krasie",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 236,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "dom_kultury_kros",
          "current": false,
          "desc": "Odwiedź nowoczesny Dom Kultury w Krosnie, słynący z regionalnych wystaw i koncertów.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Weź udział w artystycznym spotkaniu lub performance.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 180,
      "exp": 1100,
      "items": [77, 78],
      "badgeId": 13
    },
    "status": "not-available",
    "desc": "Poznaj magiczne aspekty lokalnej sztuki poprzez autentyczne doświadczenia w Domu Kultury.",
    "difficulty": 7,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-239.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 240,
    "name": "Natura i Tradycja",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 202,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 4,
          "current": 0,
          "desc": "Odwiedź cztery rezerwaty przyrody: Białowieski, Kampinos, Ojcowski oraz Tucholskie.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Uczestnicz w tradycyjnym festynie przyrodniczym organizowanym w jednym z rezerwatów.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 190,
      "exp": 1150,
      "items": [79, 80],
      "badgeId": 14
    },
    "status": "not-available",
    "desc": "Doświadcz harmonii natury i tradycji, odkrywając dziedzictwo przyrodnicze regionu.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-240.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 241,
    "name": "Wędrowiec Górskich Szlaków",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 240,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 10,
          "current": 0,
          "desc": "Przebiegnij 10 km górskim szlakiem w Tatrach z łącznym przewyższeniem co najmniej 500 m.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 2,
          "current": 0,
          "desc": "Odwiedź dwa punkty widokowe, np. na Halach Tatrzańskich.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 200,
      "exp": 1200,
      "items": [81, 82, 83],
      "badgeId": 15
    },
    "status": "not-available",
    "desc": "Udowodnij, że znasz Tatry na wylot, pokonując wymagające trasy i zdobywając niezapomniane widoki.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-241.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 242,
    "name": "Kultura i Tradycja Odkrywca",
    "type": "odkrywanie",
    "categoryId": 6,
    "parentId": 239,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "muzeum_etnografii",
          "current": false,
          "desc": "Odwiedź Muzeum Etnografii w Sanoku.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Udział w warsztatach z rzemiosła ludowego.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 210,
      "exp": 1250,
      "items": [84, 85],
      "badgeId": 16
    },
    "status": "not-available",
    "desc": "Poznaj autentyczne dziedzictwo kultury poprzez praktyczne doświadczenia w regionie.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-242.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 243,
    "name": "Legendarne Podróże Rodzinne",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 241,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Stwórz dokumentację wideo z rodzinnej wyprawy.",
          "isMandatory": true
        },
        {
          "type": "specific_location",
          "target": "kopalnia_sol_wieliczka",
          "current": false,
          "desc": "Odwiedź Kopalnię Soli Wieliczka – symbol niemal magicznego dziedzictwa.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 220,
      "exp": 1300,
      "items": [86, 87, 88],
      "badgeId": 17
    },
    "status": "not-available",
    "desc": "Uwiecznij wspólne przygody swojej rodziny, łącząc tradycję z nowoczesnym duchem podróżowania.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-243.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:50:00Z",
    "updatedAt": "2025-01-18T20:50:00Z"
  },
  {
    "id": 226,
    "name": "Podróżny Mentor",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 203,
    "requirements": [{
      "conditions": [{
          "type": "specific_location",
          "target": "centrum_kultur",
          "current": false,
          "desc": "Odwiedź Centrum Kultury w Krakowie, znane z lokalnych programów edukacyjnych.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Poprowadź warsztaty mentoringowe dla młodych podróżników.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 240,
      "exp": 1300,
      "items": [81, 82],
      "badgeId": 34
    },
    "status": "not-available",
    "desc": "Przekaż swoje doświadczenie, inspirując nowe pokolenia odkrywców i podróżników.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-226.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 228,
    "name": "Rodzinny Raj",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 202,
    "requirements": [{
      "conditions": [{
          "type": "location_visit",
          "target": 4,
          "current": 0,
          "desc": "Odwiedź cztery popularne miejsca rekreacyjne, takie jak Park Łazienkowski w Warszawie, Kopalnia Soli Wieliczka, Ogród Botaniczny Uniwersytetu Jagiellońskiego i Rezerwat przyrody Kampinoski.",
          "isMandatory": true
        },
        {
          "type": "activity",
          "target": 1,
          "current": 0,
          "desc": "Zrób rodzinny vlog lub relację zdjęciową z każdej wizyty.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 260,
      "exp": 1400,
      "items": [85, 86],
      "badgeId": 36
    },
    "status": "not-available",
    "desc": "Zbierz niezapomniane wspomnienia z rodzinnych wycieczek pełnych radości i magii.",
    "difficulty": 8,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-228.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 231,
    "name": "Przygoda w Górach Życia",
    "type": "sport",
    "categoryId": 6,
    "parentId": 229,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 8,
          "current": 0,
          "desc": "Przebiegnij 8 km górskim szlakiem w Beskidach z przewyższeniem 300 m.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź popularny punkt widokowy w Beskidach, np. Bieszczadzką Górę.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 290,
      "exp": 1550,
      "items": [90, 91],
      "badgeId": 39
    },
    "status": "not-available",
    "desc": "Udowodnij swoją wytrzymałość, łącząc sport z odkrywaniem uroków górskiego krajobrazu.",
    "difficulty": 10,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-231.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  },
  {
    "id": 233,
    "name": "Przewodnik Magii Rodzinnej",
    "type": "styl życia",
    "categoryId": 6,
    "parentId": 225,
    "requirements": [{
      "conditions": [{
          "type": "activity",
          "target": 2,
          "current": 0,
          "desc": "Zorganizuj rodzinny spacer o długości 5 km po malowniczych terenach Dolnego Śląska.",
          "isMandatory": true
        },
        {
          "type": "location_visit",
          "target": 1,
          "current": 0,
          "desc": "Odwiedź Muzeum Rodziny w Wałbrzychu.",
          "isMandatory": true
        }
      ],
      "requiredConditionsNumber": 2,
      "overallLogic": "AND"
    }],
    "rewards": {
      "points": 310,
      "exp": 1650,
      "items": [94],
      "badgeId": 41
    },
    "status": "not-available",
    "desc": "Stań się przewodnikiem, który łączy rodzinne wartości z magicznymi podróżami.",
    "difficulty": 9,
    "isRewardItemsSecret": false,
    "isUnlocked": false,
    "isHighlighted": false,
    "icon": "icons/achievement/achievement-233.png",
    "unlockDate": null,
    "createdAt": "2025-01-18T20:45:00Z",
    "updatedAt": "2025-01-18T20:45:00Z"
  }
] 

// --------------------------- POMOCNICZE FUNKCJE DO GENEROWANIA DANYCH (DO USUNIĘCIA) ---------------------------

// Konwersja HSL na RGB
function convertHSLToRGB(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r1, g1, b1;

  if (h >= 0 && h < 60) {
    r1 = c;
    g1 = x;
    b1 = 0;
  } else if (h < 120) {
    r1 = x;
    g1 = c;
    b1 = 0;
  } else if (h < 180) {
    r1 = 0;
    g1 = c;
    b1 = x;
  } else if (h < 240) {
    r1 = 0;
    g1 = x;
    b1 = c;
  } else if (h < 300) {
    r1 = x;
    g1 = 0;
    b1 = c;
  } else {
    r1 = c;
    g1 = 0;
    b1 = x;
  }

  const r = Math.round((r1 + m) * 255);
  const g = Math.round((g1 + m) * 255);
  const b = Math.round((b1 + m) * 255);

  return {
    r,
    g,
    b
  };
}

// Funkcja generująca losowy, jaskrawy kolor
function generateRandomBrightColor() {
  // Losowy hue z pełnego zakresu 0-360
  const h = Math.floor(Math.random() * 360);
  // Nasycenie na wysokim poziomie, aby kolor był "kolorowy"
  const s = Math.floor(Math.random() * 20) + 80; // w przedziale 80-100%
  // Jasność – nie zbyt ciemno, ale też nie za jasne (unikamy bieli)
  const l = Math.floor(Math.random() * 20) + 50; // w przedziale 50-70%

  const {
    r,
    g,
    b
  } = convertHSLToRGB(h, s, l);
  return `rgb(${r}, ${g}, ${b})`;
} 