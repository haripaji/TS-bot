// --- Veda Advance Mode Logic ---

// 1. Theme Change Jab Advance Mode On Ho (Grok Jaisa Dark/Neon Look)
function toggleAdvanceTheme() {
    let isAdvance = document.getElementById("advanceModeToggle").checked;
    if (isAdvance) {
        document.body.style.backgroundColor = "#0d1117"; // Dark Theme
        document.body.style.color = "#00ffcc"; // Neon Text
        alert("🚀 Veda Pro Activated! Live Web Search Enabled.");
    } else {
        document.body.style.backgroundColor = ""; // Wapas Normal Theme
        document.body.style.color = "";
    }
}

// 2. Advance Fetch API Function (Asli Intelligence)
async function getVedaResponse(userText) {
    let isAdvance = document.getElementById("advanceModeToggle").checked;
    let selectedCategory = document.getElementById("categorySelect") ? document.getElementById("categorySelect").value : "auto";
    let lowText = userText.toLowerCase().trim();

    // Grok-style Thinking Prefixes
    const thinkingPrefixes = [
        "🧠 *Deep thinking...* <br><br>",
        "⚡ *Analyzing vast web databases...* <br><br>",
        "🔍 *Scanning global networks...* <br><br>"
    ];
    let randomPrefix = thinkingPrefixes[Math.floor(Math.random() * thinkingPrefixes.length)];

    // Agar Advance Mode ON hai ya user ne specifically Wikipedia select kiya hai
    if (isAdvance || selectedCategory === "wikipedia") {
        
        // Pehle apni memory (study.js) mein check karega taaki fast rahe
        if (window.vedaStudy && window.vedaStudy[lowText]) {
            return (isAdvance ? randomPrefix : "") + "📘 **Veda Memory:** " + window.vedaStudy[lowText];
        } 
        
        // Agar memory mein nahi mila, toh Asli API Call karega (Live Internet Search)
        else {
            try {
                // Wikipedia API Call
                let response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(userText)}`);
                let data = await response.json();

                if (data.type === "standard" && data.extract) {
                    return (isAdvance ? randomPrefix : "") + "🌐 **Veda Web Search:** " + data.extract;
                } else {
                    return "Maaf kijiye, mere advance sensors ko internet par iska sateek jawab nahi mila. Kya aap kuch aur pochna chahenge?";
                }
            } catch (error) {
                return "⚠️ Network Error! Advance mode ko kaam karne ke liye internet connection ki zaroorat hai.";
            }
        }
    } 
    
    // Agar Normal Mode hai aur Wikipedia select nahi kiya hai
    else {
        if (window.vedaStudy && window.vedaStudy[lowText]) {
            return window.vedaStudy[lowText];
        } else {
            return "Mujhe iska jawab nahi pata. Veda Pro (Advance Mode) ON karke dekhein ya mujhe sikhayein!";
        }
    }
}

