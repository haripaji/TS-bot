// ==========================================
// VEDA AI - MEGA STUDY DATABASE (100KB Approx)
// ==========================================

window.vedaStudy = {
    // --- SCIENCE (PHYSICS & CHEMISTRY) ---
    "atom": "Matter ki sabse chhoti unit. Ismein Protons (+), Neutrons (0) aur Electrons (-) hote hain.",
    "electron": "Negative charge wala subatomic particle jo nucleus ke charon taraf ghoomta hai.",
    "proton": "Positive charge wala particle jo atom ke nucleus mein hota hai.",
    "neutron": "Neutral particle (no charge) jo nucleus mein hota hai.",
    "newton's first law": "Inertia ka law: Koi bhi cheez tab tak rest ya motion mein rahegi jab tak external force na lage.",
    "newton's second law": "Force = Mass × Acceleration (F=ma).",
    "newton's third law": "Every action has an equal and opposite reaction.",
    "periodic table": "Elements ka arrangement unke atomic number ke hisaab se. Dmitri Mendeleev ne ise banaya tha.",
    "hydrogen": "Periodic table ka pehla element (H). Ye universe mein sabse zyada milne wali gas hai.",
    "oxygen": "Prithvi par jeevan ke liye zaroori gas (O2). Atmosphere mein 21% hoti hai.",
    "gold": "Ek chamkili peeli dhatu (Au). Iska atomic number 79 hai.",
    "ph scale": "Acid aur Base check karne ka scale (0-14). 7 neutral hota hai, 7 se kam Acid, 7 se zyada Base.",

    // --- BIOLOGY (LIFE SCIENCE) ---
    "cell": "Life ki basic structural unit. Robert Hooke ne 1665 mein ise dhoondha tha.",
    "dna": "Deoxyribonucleic Acid. Ye genetic information carry karta hai.",
    "photosynthesis": "Paudhon dwara suraj ki roshni mein khana banane ki prakriya. Chlorophyll ismein madad karta hai.",
    "mitochondria": "Cell ka 'Powerhouse'. Ye energy (ATP) generate karta hai.",
    "human heart": "Ek muscular organ jo pure sharir mein khoon (blood) pump karta hai. Ismein 4 chambers hote hain.",
    "brain": "Sharir ka control center. Iske teen main parts hain: Cerebrum, Cerebellum, aur Brainstem.",

    // --- GEOGRAPHY & SPACE ---
    "solar system": "Suraj aur uske charon taraf ghoomne wale 8 planets aur unke moons.",
    "sun": "Hamare solar system ka center. Ye ek G-type main-sequence star hai.",
    "jupiter": "Solar system ka sabse bada planet. Ye ek gas giant hai.",
    "saturn": "Wahi planet jiske charon taraf khoobsurat rings hain.",
    "mars": "Red Planet. Is par Iron Oxide ki wajah se ye laal dikhta hai.",
    "earth": "Blue Planet. Ekmatra planet jahan life hai. Iska 71% hissa pani hai.",
    "milky way": "Hamari galaxy ka naam. Ismein arabon tare (stars) hain.",
    "black hole": "Space mein wo jagah jahan gravity itni zyada hoti hai ki light bhi bahar nahi nikal sakti.",
    "atmosphere": "Layers: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere.",

    // --- HISTORY (INDIA & WORLD) ---
    "ashoka": "Mauryan Empire ka mahan raja jisne Kalinga war ke baad Buddhism apnaya tha.",
    "akbar": "Mughal Empire ka teesra raja jisne 'Din-i-Ilahi' religion shuru kiya tha.",
    "1857 revolt": "Bharat ki pehli azadi ki ladai. Mangal Pandey ne iska aagaaz kiya tha.",
    "mahatma gandhi": "Ahimsa ke pujari. Unhone Non-Cooperation, Civil Disobedience aur Quit India movements shuru kiye.",
    "subhash chandra bose": "Azad Hind Fauj ke founder. Unka nara tha 'Tum mujhe khoon do, main tumhe azadi dunga'.",
    "indus valley civilization": "Duniya ki sabse purani urban civilizations mein se ek (Harappa aur Mohenjo-daro).",
    "world war 1": "1914 se 1918 tak chali mahan ladai.",
    "world war 2": "1939 se 1945 tak chali ladai. Hitler aur Axis powers ki har hui thi.",

    // --- CIVICS & ECONOMICS ---
    "constitution of india": "Duniya ka sabse bada likhit samvidhan. Dr. B.R. Ambedkar iske nirmaata the.",
    "democracy": "Jantantr: 'Of the people, by the people, for the people'.",
    "gdp": "Gross Domestic Product. Ek saal mein desh mein bani goods aur services ki total value.",
    "rbi": "Reserve Bank of India. Bharat ka central bank jo currency issue karta hai.",

    // --- GENERAL KNOWLEDGE (GK) ---
    "largest desert": "Sahara (Hot) aur Antarctica (Cold).",
    "longest river": "Nile (Duniya ki) aur Ganga (Bharat ki).",
    "highest mountain": "Mount Everest (8,848.86 meters).",
    "smallest country": "Vatican City.",
    "national anthem": "Jana Gana Mana (Rabindranath Tagore ne likha).",
    "national song": "Vande Mataram (Bankim Chandra Chatterjee ne likha)."
};

// Console check for debugging
console.log("Mega Study.js Loaded - Total Entries: " + Object.keys(window.vedaStudy).length);
// Is data ko apne window.vedaStudy ke andar merge karein
Object.assign(window.vedaStudy, {
    // --- 1. THE PERIODIC TABLE (Symmetry & Data) ---
    "hydrogen": "At. No: 1 | Sym: H | Nature: Non-metal | Universe ka sabse abundant element.",
    "helium": "At. No: 2 | Sym: He | Nature: Noble Gas | Balloons aur cooling mein use hota hai.",
    "lithium": "At. No: 3 | Sym: Li | Nature: Alkali Metal | Rechargeable batteries mein use hota hai.",
    "beryllium": "At. No: 4 | Sym: Be | Nature: Alkaline Earth Metal | Aerospace mein use hota hai.",
    "boron": "At. No: 5 | Sym: B | Nature: Metalloid | Glass aur detergents mein use hota hai.",
    "carbon": "At. No: 6 | Sym: C | Nature: Non-metal | Jeevan ka aadhar, Diamond aur Graphite iske roop hain.",
    "nitrogen": "At. No: 7 | Sym: N | Nature: Non-metal | Atmosphere mein 78% maujood hai.",
    "fluorine": "At. No: 9 | Sym: F | Nature: Halogen | Sabse zyada electronegative element.",
    "neon": "At. No: 10 | Sym: Ne | Nature: Noble Gas | Advertising signs mein use hota hai.",
    "sodium": "At. No: 11 | Sym: Na | Nature: Alkali Metal | Pani ke saath tezi se react karta hai.",
    "magnesium": "At. No: 12 | Sym: Mg | Nature: Alkaline Earth | Chlorophyll ka main part hai.",
    "aluminum": "At. No: 13 | Sym: Al | Nature: Post-transition Metal | Halka aur mazboot metal.",
    "silicon": "At. No: 14 | Sym: Si | Nature: Metalloid | Computer chips aur semiconductors mein use hota hai.",
    "phosphorus": "At. No: 15 | Sym: P | Nature: Non-metal | Haddiyon aur matchsticks mein hota hai.",
    "sulfur": "At. No: 16 | Sym: S | Nature: Non-metal | Gunpowder aur fertilizers mein use hota hai.",
    "chlorine": "At. No: 17 | Sym: Cl | Nature: Halogen | Pani ko saaf (disinfect) karne mein use hota hai.",
    "argon": "At. No: 18 | Sym: Ar | Nature: Noble Gas | Light bulbs mein bhari jati hai.",
    "potassium": "At. No: 19 | Sym: K | Nature: Alkali Metal | Fertilizers aur nervous system ke liye zaroori.",
    "calcium": "At. No: 20 | Sym: Ca | Nature: Alkaline Earth | Daant aur haddiyon ki mazbooti ke liye.",
    "iron": "At. No: 26 | Sym: Fe | Nature: Transition Metal | Hemoglobin mein oxygen carry karta hai.",
    "copper": "At. No: 29 | Sym: Cu | Nature: Transition Metal | Bijli ki wires banane mein best hai.",
    "silver": "At. No: 47 | Sym: Ag | Nature: Transition Metal | Best conductor of electricity.",
    "tungsten": "At. No: 74 | Sym: W | Nature: Transition Metal | Bulb filament mein use hota hai (High melting point).",
    "mercury": "At. No: 80 | Sym: Hg | Nature: Metal | Ekmatra metal jo room temperature par Liquid hota hai.",
    "uranium": "At. No: 92 | Sym: U | Nature: Actinide | Nuclear energy aur bombs mein use hota hai.",

    // --- 2. HISTORY TIMELINE (1900 - 2026) ---
    "1903": "Wright Brothers ne pehli airplane flight successfully udayi.",
    "1911": "India ki capital Calcutta se Delhi shift ki gayi.",
    "1914": "World War 1 ki shuruat hui (Archduke Franz Ferdinand ki hatya ke baad).",
    "1919": "Jallianwala Bagh Massacre (Amritsar) jahan General Dyer ne nirdoshon par goli chalayi.",
    "1921": "Harappa aur Mohenjo-daro ki khodayi (Indus Valley Civilization discovery).",
    "1930": "Dandi March (Salt Satyagraha) Mahatma Gandhi dwara shuru kiya gaya.",
    "1939": "World War 2 shuru hua jab Germany ne Poland par hamla kiya.",
    "1945": "Hiroshima aur Nagasaki par Atomic bomb giraya gaya; UN ki sthapna hui.",
    "1947": "15 August - Bharat ko British raaj se azadi mili.",
    "1950": "26 January - Bharat ka Samvidhan (Constitution) lagu hua aur Bharat Republic bana.",
    "1969": "Neil Armstrong chand par kadam rakhne wale pehle insaan bane (Apollo 11).",
    "1971": "Indo-Pak war aur Bangladesh ka nirmaan hua.",
    "1983": "Bharat ne Kapil Dev ki kaptani mein pehla Cricket World Cup jeeta.",
    "1991": "Economic Liberalization in India (LPG reforms) aur USSR ka vighatan (dissolution).",
    "1998": "Pokhran-II nuclear tests (Operation Shakti) kiye gaye.",
    "2008": "Chandrayaan-1 - Bharat ka pehla mission chand ki taraf.",
    "2014": "Mangalyaan (MOM) - Bharat pehli koshish mein Mars par pahunchne wala pehla desh bana.",
    "2020": "Global COVID-19 pandemic ne poori duniya ko lockdown mein daal diya.",
    "2023": "Chandrayaan-3 ki safal landing chand ke South Pole par (History created by ISRO).",
    "2024": "Ayodhya mein Ram Mandir ka Pran Pratishtha samaroh sampann hua.",
    "2026": "Gaganyaan Mission - Bharat ka pehla manned space mission (Proposed timeline).",

    // --- 3. ECONOMICS & TERMS ---
    "inflation": "Jab cheezon ki keemat badhti hai aur paise ki value kam ho jati hai (Mehangayi).",
    "deflation": "Jab prices girte hain, ye aksar arthvyavastha ke liye bura hota hai.",
    "gst": "Goods and Services Tax - 'One Nation, One Tax' jo 2017 mein Bharat mein shuru hua.",
    "stock market": "Wo jagah jahan companies ke shares khareede aur beche jaate hain.",
    "cryptocurrency": "Digital currency jo blockchain technology par based hai (e.g., Bitcoin)."
});

console.log("Study.js Expansion Pack 2 Loaded! Size increasing...");
// Is pure block ko copy karein aur study.js ke niche paste kar dein
Object.assign(window.vedaStudy, {
    // --- A ---
    "abandon": "Chhod dena / Tyag dena", "ability": "Yogyata / Shamta", "able": "Yogya / Samarth", "about": "Baare mein / Lagbhag", "above": "Upar / Se ooncha", "abroad": "Videsh", "absence": "Anupastithi", "absolute": "Poorn / Asli", "absorb": "Sokh lena", "abuse": "Gaali dena / Durupyog", "academic": "Shaikshik", "accept": "Sweekar karna", "access": "Pahunch", "accident": "Durghatna", "accompany": "Saath dena", "accomplish": "Poora karna", "according": "Anusaar", "account": "Khata / Vivran", "accurate": "Sateek / Shuddh", "accuse": "Aarop lagana", "achieve": "Prapt karna", "acid": "Tezaab / Khatta", "acknowledge": "Sweekar karna", "acquire": "Hasil karna", "across": "Paar / Doosri taraf", "act": "Karya / Adhiniyam", "action": "Karyawahi", "active": "Sakriya", "activist": "Karyakarta", "activity": "Gati-vidhi", "actor": "Abhineta", "actress": "Abhinetri", "actual": "Vastavik", "actually": "Asal mein", "ad": "Vigyapan", "adapt": "Anukool banna", "add": "Jodna", "addition": "Yog / Atirikt", "additional": "Faltu / Zyada", "address": "Pata / Sambodhan", "adequate": "Paryapt", "adjust": "Samyojan karna", "administration": "Prashasan", "admire": "Prashansa karna", "admission": "Pravesh", "admit": "Bharti karna / Maanna", "adolescent": "Kishore", "adopt": "God lena / Apnana", "adult": "Vayask", "advance": "Agrim / Pragati", "advantage": "Fayda", "adventure": "Sahasik karya", "advice": "Salah", "advise": "Salah dena", "advisor": "Salahkar", "advocate": "Vakeel / Paksh dhar", "affair": "Mamla", "affect": "Prabhavit karna", "afford": "Samarth hona", "afraid": "Dara hua", "after": "Baad mein", "afternoon": "Dopahar", "again": "Phir se", "against": "Khilaaf", "age": "Umra / Yug", "agency": "Sanstha", "agenda": "Karyasuchi", "agent": "Pratinidhi", "aggressive": "Aakramak", "ago": "Pehle", "agree": "Sehmat hona", "agreement": "Samjhauta", "agriculture": "Krishi", "ahead": "Aage", "aid": "Sahayata", "aim": "Lakshya", "air": "Hawa", "aircraft": "Vimaan", "airline": "Vimaan seva", "airport": "Hawai adda", "alarm": "Satarkta", "album": "Sangrah", "alcohol": "Sharaab", "alive": "Zinda", "all": "Sab / Sabhi", "alliance": "Gathbandhan", "allow": "Anumati dena", "ally": "Saathi", "almost": "Lagbhag", "alone": "Akela", "along": "Saath mein", "already": "Pehle se", "also": "Bhi", "alter": "Badalna", "alternative": "Vikalp", "although": "Halanki", "always": "Hamesha", "amazing": "Adbhut", "ambition": "Maahatvakanksha", "among": "Beech mein", "amount": "Rashi / Matra", "analysis": "Vishleshan", "ancient": "Pracheen", "and": "Aur", "anger": "Gussa", "angle": "Kon", "angry": "Naraz", "animal": "Janwar", "anniversary": "Saalgirah", "announce": "Ghosna karna", "annual": "Varshik", "another": "Doosra", "answer": "Jawab", "anxiety": "Chinta", "any": "Koi bhi", "anybody": "Koi bhi vyakti", "anymore": "Ab aur nahi", "anyone": "Koi bhi", "anything": "Kuch bhi", "anyway": "Waise bhi", "anywhere": "Kahin bhi", "apart": "Alag", "apartment": "Kamra / Ghar", "apparent": "Spasht", "appeal": "Nivedan", "appear": "Prakat hona", "appearance": "Rup / Dikhavat", "apple": "Seb", "application": "Avedan", "apply": "Lagu karna", "appoint": "Niyukt karna", "appointment": "Niyukti", "appreciate": "Srahna karna", "approach": "Dristikon / Pahunch", "appropriate": "Uchit", "approval": "Manzoori", "approve": "Sweekar karna", "approximate": "Anumanit", "area": "Kshetra", "argue": "Behas karna", "argument": "Tark", "arise": "Uthna / Paida hona", "arm": "Baju / Hathiyar", "armed": "Sashastra", "army": "Sena", "around": "Charon taraf", "arrange": "Vyavastha karna", "arrangement": "Prabandh", "arrest": "Giraftar", "arrival": "Aagman", "arrive": "Pahunchana", "art": "Kala", "article": "Lekh / Vastu", "artist": "Kalakar", "as": "Jaise / Kyunki", "ash": "Raakh", "aside": "Ek taraf", "ask": "Poochna", "asleep": "Soya hua", "aspect": "Pahlu", "assault": "Hamla", "assert": "Dawa karna", "assess": "Aaklan karna", "assessment": "Mulyankan", "asset": "Sampatti", "assign": "Saunpna", "assignment": "Karya", "assist": "Sahayata karna", "assistance": "Madad", "assistant": "Sahayak", "associate": "Saathi / Jodna", "association": "Sangh", "assume": "Maanna", "assumption": "Dharana", "assure": "Ashwasan dena", "at": "Par", "athlete": "Khiladi", "atmosphere": "Vayu-mandal", "attach": "Jodna", "attack": "Hamla", "attempt": "Koshish", "attend": "Shaamil hona", "attention": "Dhyan", "attitude": "Raviya", "attorney": "Pratinidhi", "attract": "Akarshit karna", "attractive": "Akarshak", "attribute": "Gunn", "audience": "Darshak", "author": "Lekhak", "authority": "Adhikar", "auto": "Swachalit", "available": "Upalabdh", "average": "Ousat", "avoid": "Bachna", "award": "Puraskar", "aware": "Jagruk", "awareness": "Jagrukta", "away": "Door", "awesome": "Bahut badiya", "awful": "Bhayankar", "baby": "Baccha", "back": "Wapas / Peeche", "background": "Prishth-bhumi", "bad": "Bura", "badly": "Buri tarah", "bag": "Thaila", "bake": "Pakana", "balance": "Santulan", "ball": "Gend", "ban": "Pratibandh", "band": "Dala / Patti", "bank": "Kinara / Bank", "bar": "Sariya / Rok", "barely": "Mushkil se", "barrel": "Pipa", "barrier": "Rukawat", "base": "Aadhar", "baseball": "Ek khel", "basic": "Buniyadi", "basically": "Khas karke", "basis": "Aadhar", "basket": "Tokri", "basketball": "Ek khel", "bath": "Snan", "bathroom": "Snanghar", "battery": "Cell", "battle": "Yuddh", "beach": "Samudra tat", "bean": "Phali", "bear": "Bhalu / Sehna", "beat": "Peetna / Harana", "beautiful": "Sundar", "beauty": "Sundarta", "because": "Kyunki", "become": "Banna", "bed": "Bistar", "bedroom": "Sone ka kamra", "beer": "Sharab", "before": "Pehle", "begin": "Shuru karna", "beginning": "Shuruat", "behalf": "Oar se", "behave": "Vyavhar karna", "behavior": "Acharan", "behind": "Peeche", "being": "Astitva", "belief": "Vishwas", "believe": "Maanna", "bell": "Ghanti", "belong": "Sambandh rakhna", "below": "Niche", "belt": "Patti", "bench": "Baithne ki jagah", "bend": "Modna", "beneath": "Niche", "benefit": "Fayda", "beside": "Bagal mein", "besides": "Alawa", "best": "Sabse accha", "bet": "Shart", "better": "Behtar", "between": "Beech mein", "beyond": "Pare / Door", "bible": "Dharmik granth", "big": "Bada", "bike": "Cycle / Motorcycle", "bill": "Vidheyak / Bill", "billion": "Arab", "bind": "Baandhna", "biography": "Jeevani", "biological": "Jaivik", "bird": "Panchi", "birth": "Janam", "birthday": "Janmadin", "bit": "Thoda", "bite": "Kaatna", "bitter": "Kadwa", "black": "Kala", "blade": "Dhaar", "blame": "Dosh", "blank": "Khali", "blanket": "Kambal", "blast": "Dhamaka", "bleed": "Khoon behna", "blend": "Mishran", "bless": "Aashirwad", "blind": "Andha", "block": "Rukawat / Khand", "blood": "Khoon", "blow": "Phook / Prahar", "blue": "Neela", "board": "Mandal", "boat": "Naav", "body": "Shareer", "bomb": "Gola-barood", "bond": "Bandhan", "bone": "Haddi", "book": "Kitab", "boom": "Uchaal", "boot": "Joota", "border": "Seema", "born": "Paida hua", "borrow": "Udhaar lena", "boss": "Malik", "both": "Dono", "bother": "Pareshan karna", "bottle": "Shishi", "bottom": "Tala", "boundary": "Seema", "bowl": "Katora", "box": "Dabba", "boy": "Ladka", "boyfriend": "Mitra", "brain": "Dimaag", "branch": "Shakha", "brand": "Chhap", "bread": "Roti", "break": "Todna / Chhutti", "breakfast": "Nashta", "breast": "Chaati", "breath": "Saans", "breathe": "Saans lena", "brick": "Eent", "bridge": "Pul", "brief": "Sankshep", "briefly": "Kam shabdon mein", "bright": "Chamkila", "brilliant": "Pratibhashali", "bring": "Laana", "broad": "Chaura", "broken": "Toota hua", "brother": "Bhai", "brown": "Bhura", "brush": "Kuchi", "bubble": "Bulbula", "budget": "Lekha-jokha", "build": "Banana", "building": "Imarat", "bullet": "Goli", "bunch": "Guchha", "burden": "Bojh", "burn": "Jalna", "bury": "Dafnana", "bus": "Vahan", "business": "Vyapar", "busy": "Vyast", "but": "Lekin", "butter": "Makkhan", "button": "Gundi", "buy": "Khareedna", "buyer": "Grahak", "by": "Dwara"
});

console.log("Study.js Mega Fill Complete! Dictionary Added.");

// Is block ko copy karke study.js ke niche paste 
Object.assign(window.vedaStudy, {
    // --- C to E ---
    "cabin": "Koti / Cabin", "cabinet": "Mantrimandal", "cable": "Taar", "calculate": "Ganna karna", "calculation": "Hisaab", "calendar": "Panchang", "call": "Bulana / Phone", "calm": "Shant", "camera": "Chitragrahak", "camp": "Shivir", "campaign": "Abhiyan", "campus": "Parisar", "can": "Sakti / Dibba", "cancel": "Radd karna", "cancer": "Kark-rog", "candidate": "Umeedwar", "candle": "Mombatti", "candy": "Mithai", "canvas": "Tripal", "cap": "Topi", "capability": "Kshamta", "capable": "Kabil", "capacity": "Samarthya", "capital": "Rajdhani / Poonji", "captain": "Adhinayak", "capture": "Pakadna", "car": "Gaadi", "carbon": "Koyla tatva", "card": "Patra", "care": "Dekhbhal", "career": "Ajivika", "careful": "Savdhan", "cargo": "Maal", "carpet": "Kaleen", "carrier": "Vahak", "carry": "Le jana", "case": "Mamla / Dibba", "cash": "Nokad", "cast": "Paatra / Dalna", "castle": "Kila", "casual": "Akasmic", "cat": "Billi", "catalog": "Suchi", "catch": "Pakadna", "category": "Shreni", "cause": "Kaaran", "caution": "Satarkta", "cave": "Gufa", "cease": "Rokna", "ceiling": "Chatt", "celebrate": "Utshav manana", "celebration": "Jashn", "cell": "Koshika", "cemetery": "Kabristan", "center": "Kendra", "central": "Kendriya", "century": "Shatabdi", "ceremony": "Samaroh", "certain": "Nischit", "certainly": "Yakinan", "certificate": "Praman-patra", "chain": "Zanjir", "chair": "Kursi", "chairman": "Adhyaksh", "challenge": "Chunauti", "chamber": "Kaksh", "champion": "Vijeta", "chance": "Moka", "change": "Badlav", "channel": "Prasaran marg", "chapter": "Adhyay", "character": "Charitra", "charge": "Shulk / Aarop", "charity": "Daan", "chart": "Raikha-chitara", "chase": "Picha karna", "cheap": "Sasta", "cheat": "Dhokha", "check": "Janch", "cheek": "Gaal", "cheese": "Paneer", "chef": "Rasoiya", "chemical": "Rasayanik", "chemistry": "Rasayan shastra", "chest": "Chaati / Sandook", "chicken": "Murga", "chief": "Mukhya", "child": "Baccha", "childhood": "Bachpan", "chill": "Thand", "chin": "Thodi", "chip": "Tukda", "chocolate": "Mithai", "choice": "Pasand", "choir": "Gayak-dal", "choose": "Chun-na", "chop": "Katna", "church": "Girjaghar", "cigarette": "Dhumrapan", "circle": "Ghera", "circuit": "Paripath", "circumstance": "Paristhiti", "citizen": "Nagrik", "city": "Shehar", "civil": "Sabhy / Nagrik", "claim": "Dawa", "clap": "Taali", "class": "Varg / Kaksha", "classic": "Utkrist", "classify": "Vargikrit", "clay": "Mitti", "clean": "Saaf", "clear": "Spasht", "clerk": "Lipik", "clever": "Chatur", "click": "Dabana", "client": "Grahak", "cliff": "Chattan", "climate": "Jalvayu", "climb": "Chadhna", "clinic": "Chikitsalay", "clip": "Chimti", "clock": "Ghadi", "close": "Band / Kareeb", "closely": "Bariki se", "closer": "Aur kareeb", "cloth": "Kapda", "clothes": "Poshak", "cloud": "Badal", "club": "Sangh", "clue": "Sanket", "cluster": "Guchha", "coach": "Prashikshak", "coal": "Koyla", "coast": "Tatat", "coat": "Choga", "code": "Sanket", "coffee": "Peya padarth", "coin": "Sikka", "cold": "Thanda", "collapse": "Gir jana", "collar": "Gireban", "collect": "Ikatha karna", "collection": "Sangrah", "college": "Mahavidyalaya", "color": "Rang", "column": "Stambh", "combination": "Samyojan", "combine": "Jodna", "come": "Aana", "comedy": "Hasya", "comfort": "Aaram", "comfortable": "Aaramdayak", "command": "Aadesh", "commander": "Senapati", "comment": "Tippani", "commerce": "Vanijya", "commercial": "Vyavsayik", "commission": "Aayog", "commit": "Vachan dena / Karna", "commitment": "Vachanyabaddhta", "committee": "Samiti", "common": "Samanya", "communicate": "Sampark karna", "communication": "Sanchar", "community": "Samuday", "company": "Sanstha", "compare": "Tulna karna", "comparison": "Milaan", "compete": "Pratiyogita karna", "competition": "Pratidvandvita", "competitive": "Pratiyogi", "complain": "Shikayat", "complaint": "Aapatti", "complete": "Poora", "completely": "Poori tarah", "complex": "Jatil", "complicated": "Uljha hua", "component": "Ansh", "compose": "Rachna karna", "composer": "Rachnakar", "composition": "Banawat", "compound": "Yaugik", "comprehensive": "Vistrit", "computer": "Sanganak", "concentrate": "Dhyan kendrit karna", "concentration": "Ekagrata", "concept": "Dharana", "concern": "Chinta", "concerned": "Chintit", "concert": "Sangeet karyakram", "conclude": "Nishkarsh

