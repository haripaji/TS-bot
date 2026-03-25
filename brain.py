import wikipedia
import sympy
import requests
from datetime import datetime

class AIChatBot:
    def __init__(self, name="Astro"):
        self.name = name
        self.user_agent = "MyAIChatbot/1.0 (contact: your@email.com)"
        wikipedia.set_lang("en")

    def calculate(self, expression):
        """Handles logic and mathematical calculations."""
        try:
            # sympify converts strings to math logic (e.g., "2^10" or "5 * 5")
            result = sympy.sympify(expression)
            return f"Calculation Result: {result}"
        except Exception:
            return None

    def search_wikipedia(self, query):
        """Fetches a summary and an image from Wikipedia."""
        try:
            # Get the page title
            search_results = wikipedia.search(query)
            if not search_results:
                return "I couldn't find anything on Wikipedia for 그.", None
            
            page = wikipedia.page(search_results[0], auto_suggest=False)
            summary = wikipedia.summary(search_results[0], sentences=2)
            
            # Get the first valid image URL from the page
            image_url = page.images[0] if page.images else "No image found."
            
            return f"Wikipedia says: {summary}\nSource: {page.url}", image_url
        except wikipedia.exceptions.DisambiguationError as e:
            return f"Too many results. Did you mean: {', '.join(e.options[:3])}?", None
        except Exception as e:
            return f"Search error: {str(e)}", None

    def brain(self, user_input):
        """The main logic router."""
        user_input = user_input.lower().strip()

        # 1. Logic/Math Check (if input contains numbers or math symbols)
        if any(char in user_input for char in "0123456789+-*/^()"):
            math_result = self.calculate(user_input)
            if math_result: return math_result, None

        # 2. Wikipedia Search Check
        if "who is" in user_input or "what is" in user_input or "search" in user_input:
            topic = user_input.replace("who is", "").replace("what is", "").replace("search", "").strip()
            return self.search_wikipedia(topic)

        # 3. Default Chat Logic
        responses = {
            "hello": "Hi there! I'm your AI assistant. I can do math and search Wikipedia.",
            "time": f"The current time is {datetime.now().strftime('%H:%M:%S')}",
            "bye": "Goodbye! Happy coding!"
        }
        return responses.get(user_input, "I'm not sure how to help with that yet. Try asking 'What is Python?' or '5 * 50'."), None

# --- Running the Bot ---
bot = AIChatBot()
print(f"[{bot.name}]: System Online. Ask me anything!")

while True:
    user_query = input("You: ")
    if user_query.lower() in ['exit', 'quit']: break
    
    response, img_url = bot.brain(user_query)
    print(f"[{bot.name}]: {response}")
    if img_url:
        print(f"📷 Related Image URL: {img_url}")
