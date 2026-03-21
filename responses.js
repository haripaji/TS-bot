/* VEDA AI - KNOWLEDGE DATABASE
   Yahan aap naye sawal aur unke jawab jod sakte hain.
*/

const vedaDatabase = {
    // --- GREETINGS ---
    "hi": "Namaste! Main Veda AI hoon. Aaj main aapki kaise madad kar sakta hoon?",
    "hello": "Hello! Swagat hai Veda AI mein. Main aapka digital sahayak hoon.",
    "kaise ho": "Main bilkul thik hoon, shukriya! Aap kaise hain? Umeed hai aapka din accha ja raha hoga.",
    
    // --- IDENTITY & CREATOR ---
    "who are you": "Main Veda AI hoon, ek intelligent chatbot jo aapke sawalon ke jawab dhoondhne mein madad karta hai.",
    "tumhe kisne banaya": "Mujhe 'Thoughts Sounds' ne design aur develop kiya hai.",
    "tera baap kaun hai": "Mera nirmaan 'Thoughts Sounds' dwara kiya gaya hai, wahi mere developer hain.",
    "veda ka matlab": "Veda ka arth hai 'Gyan' ya 'Knowledge'. Mera maqsad wahi gyan aap tak pahuchana hai.",
    
    // --- CAPABILITIES ---
    "tum kya kar sakte ho": "Main internet (Wikipedia) se jankari nikal sakta hoon, aapke sawalon ke jawab de sakta hoon aur hum baatchit bhi kar sakte hain!",
    "help": "Aap mujhse kisi bhi vishay par sawal pooch sakte hain. Jaise: 'Google kya hai?' ya 'AI ka bhavishya'.",
    
    // --- PERSONAL INFO (Fixed Responses) ---
    "mera id kya hai": "Aapka unique ID header mein dikh raha hoga. Har baar jab aap page refresh karte hain, ek naya ID generate hota hai.",
    "my id": "Aapka ID upar screen par top-left mein 'VEDA AI' ke niche likha hai.",
    "about me": "Main aapke bare mein sirf utna hi janta hoon jitna aapne is conversation mein bataya hai. Main privacy ka dhyan rakhta hoon."
};

// Jab kuch na mile toh ye message dikhega (Isse pehle report admin ko chali jayegi)
const defaultResponse = "Maaf kijiye, mujhe iska sahi jawab nahi mila. Maine ye sawal apne developer ko bhej diya hai taaki main ise seekh sakun. Kya aap kuch aur poochna chahenge?";
const vedaDatabase = {
    // 1. Bot ki Pehchan (Identity)
    "kaun ho": "Main Veda AI hoon, aapka personal smart assistant. Mujhe Thoughts Sounds ne banaya hai.",
    "tera naam": "Mera naam Veda AI hai. Kya main aapki koi madad kar sakta hoon?",
    "who are you": "I am Veda AI, a smart virtual assistant developed to help you with information and chat.",
    "kisne banaya": "Mujhe 'Thoughts Sounds' ne develop kiya hai. Main unka ek AI project hoon.",

    // 2. Hal-Chaal (Greetings & Wellbeing)
    "kaise ho": "Main bilkul badhiya hoon! Aap kaise hain? Umeed hai sab theek hoga.",
    "how are you": "I am doing great! Thanks for asking. How about you?",
    "kya hal hai": "Sab sahi chal raha hai. Aap bataiye, aaj kya naya ho raha hai?",
    "namaste": "Namaste! Veda AI mein aapka swagat hai. Kaise aana hua?",
    "hello": "Hello! Main aapki kya madad kar sakta hoon?",

    // 3. Bot ki Skills (Capabilities)
    "kya kar sakte ho": "Main aapke sawalon ke jawab de sakta hoon, Wikipedia se jankari nikal sakta hoon, aur aapse dher saari baatein kar sakta hoon!",
    "help": "Zaroor! Aap mujhse kisi bhi topic par sawal pooch sakte hain ya bas chat kar sakte hain.",
    "features": "Mere paas Multi-Database search, Dark Mode, Voice support aur Smart Chatting jaise features hain.",

    // 4. Education & Projects (Aapke context ke hisab se)
    "12th class": "12th grade ek bahut mahatvapurna saal hai! Kya aapko Economics, Political Science ya History mein koi help chahiye?",
    "economics": "Economics mera pasandida subject hai! Kya aapko Microeconomics ya Macroeconomics ke kisi topic mein dikkat hai?",
    "ai master": "AI master banna ek exciting journey hai. Kya aapne 7-day bootcamp ke topics revise kiye?",
    "coding": "Coding seekhna badhiya hai! Main HTML, CSS, aur JavaScript mein aapki thodi bahut madad kar sakta hoon.",

    // 5. Fun & Personality
    "joke": "Ek baar ek computer ne dusre computer se kaha: 'Mujhe lagta hai mujhe virus ho gaya hai.' Dusre ne pucha: 'Kyun?' Pehla bola: 'Kyunki mera mouse har jagah khud hi ja raha hai!' 😂",
    "bore ho raha": "Bore mat hoiye! Chaliye kisi interesting topic par baat karte hain ya main aapke liye kuch search karoon?",
    "khana khaya": "Main ek AI hoon, isliye main khana nahi khata, lekin mujhe nayi jankari 'khana' bahut pasand hai!",

    // 6. Generic/Small Talk (Important for avoiding Google links)
    "acha": "Haan ji! Aur bataiye, aur kya chal raha hai?",
    "hmm": "Hmm... main sun raha hoon. Kuch aur kehna chahte hain?",
    "ok": "Theek hai! Agla sawal kya hai?",
    "nice": "Shukriya! Mujhe khushi hui ki aapko pasand aaya.",
    "bye": "Alvida! Apna khayal rakhiyega. Phir milenge!"
};
