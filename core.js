const vedaCore = {
    "hi": "Namaste! Main Veda AI hoon.",
    "hello": "Hello! Swagat hai Veda AI mein.",
    "kaise ho": "Main bilkul thik hoon, shukriya! Aap kaise hain?",
    "kaun ho": "Main Veda AI hoon, jise 'Thoughts Sounds' ne develop kiya hai.",
    "creator": "Mera nirmaan 'Thoughts Sounds' ne kiya hai.",
    "bye": "Alvida! Apna dhyan rakhein.",
    "thanks": "Aapka swagat hai!",
    "shukriya": "Koi baat nahi, main hamesha madad ke liye hoon."
};


// core.js - Hybrid Logic Engine
const VedaCore = {
    // 1. Math Logic (Python Sympy replacement)
    calculate: function(input) {
        try {
            // '^' ko JS ke power '**' mein badalna
            let expr = input.replace(/\^/g, '**').replace(/[^-()\d/*+.]/g, '');
            if (!expr) return null;
            return `Calculation Result: ${eval(expr)} 🔢`;
        } catch (e) { return null; }
    },

    // 2. Wikipedia + Image Fetch (Bina API Key)
    searchWiki: async function(query) {
        try {
            const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
            const data = await res.json();
            if (data.extract) {
                return {
                    text: `Wikipedia says: ${data.extract}\nSource: ${data.content_urls.desktop.page}`,
                    image: data.thumbnail ? data.thumbnail.source : null
                };
            }
            return { text: "I couldn't find that on Wikipedia.", image: null };
        } catch (e) { return { text: "Search Error!", image: null }; }
    },

    // 3. Main Brain Router
    brain: async function(userInput) {
        let input = userInput.toLowerCase().trim();

        // Check A: Time/Greetings (Python datetime logic)
        if (input === "time") return { text: `Current time: ${new Date().toLocaleTimeString()}`, image: null };
        if (input === "hello") return { text: "Hi! I'm your AI. I can do math and search Wiki.", image: null };

        // Check B: Math (Numbers check)
        if (/[0-9+\-*/^()]/.test(input)) {
            let res = this.calculate(input);
            if (res) return { text: res, image: null };
        }

        // Check C: Wiki Search (Trigger words)
        if (input.includes("who is") || input.includes("what is") || input.includes("search")) {
            let topic = input.replace(/who is|what is|search/g, "").trim();
            return await this.searchWiki(topic);
        }

        // Check D: Local .js Files (Fuzzy Search from previous step)
        // Yahan aap local fuzzy search logic use kar sakte hain
        return { text: "Try asking 'What is Python?' or '10 * 10'.", image: null };
    }
};

