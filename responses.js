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
