# Part 5 — 3-Month Project Roadmap

**Daily time commitment:** 30–60 minutes
**Total outcome:** 3 working projects + hands-on skills in Python, Ollama, LangChain

---

## Month 1 — Foundation: Get Comfortable with Local AI

---

### Week 1 — Your First Working AI (30 min/day)

**Goal:** Ollama installed, two models running, first conversations had

| Day | Task | Time |
|-----|------|------|
| Mon | Complete Session 1–2 from Part 4 (Install Ollama, open terminal) | 20 min |
| Tue | Complete Session 3 (Download phi3, have first conversation) | 20 min |
| Wed | Complete Session 4 (Download mistral, compare responses) | 20 min |
| Thu | Ask both models the same 5 questions. Write down which is better at each | 30 min |
| Fri | Download llama3 (`ollama pull llama3`). Chat with all 3 models | 30 min |
| Sat | Try asking about a topic you know well. Evaluate accuracy | 30 min |
| Sun | Rest or review notes | — |

**Milestone:** `ollama list` shows phi3, mistral, and llama3. You've had 10+ conversations.

---

### Week 2 — Python Basics (30–45 min/day)

**Goal:** Write and run basic Python scripts from the terminal

| Day | Task | Time |
|-----|------|------|
| Mon | Install Python (https://python.org). Run `python3 --version` in terminal | 20 min |
| Tue | Start "Python for Everybody" on Coursera — Week 1 (variables, print) | 45 min |
| Wed | Write a script: ask for your name, print "Hello, [name]!" | 30 min |
| Thu | Python for Everybody — Week 2 (if/else, loops) | 45 min |
| Fri | Write a script: loop from 1 to 10, print each number | 30 min |
| Sat | Write a script: read a text file, print each line | 30 min |
| Sun | Review what you learned. Fix anything that didn't work | 30 min |

**Milestone:** You can write, save, and run a Python script without looking up every step.

---

### Week 3 — Connect Python to Ollama (30–45 min/day)

**Goal:** Your Python code talks to your local AI

| Day | Task | Time |
|-----|------|------|
| Mon | Install Ollama Python library: `pip install ollama`. Run `chat.py` from Part 4 | 20 min |
| Tue | Modify `chat.py` to ask a different question. Run it again | 20 min |
| Wed | Add a `for` loop to ask 3 questions in a row | 30 min |
| Thu | Make the script ask you for input: `question = input("Ask: ")` | 30 min |
| Fri | Save the AI's response to a text file | 30 min |
| Sat | Combine: ask a question, save the answer, print "Saved!" | 30 min |
| Sun | Review your scripts. Clean up comments | 20 min |

**Milestone:** A Python script where you type a question and the AI's answer is saved to a file.

---

### Week 4 — Build a Working Terminal Chatbot (45 min/day)

**Goal:** A chatbot that keeps the conversation going

| Day | Task | Time |
|-----|------|------|
| Mon | Add a `while True` loop so the script keeps asking for input | 30 min |
| Tue | Add an exit condition: if user types "quit", break the loop | 20 min |
| Wed | Store conversation history in a list (so the AI remembers context) | 30 min |
| Thu | Add a system prompt to give your AI a personality and name | 30 min |
| Fri | Test it: have a 10-message conversation with your AI | 20 min |
| Sat | Save the full conversation history to a file when the user quits | 30 min |
| Sun | Demo your chatbot. Show someone. Explain what it does | — |

**Template for chatbot with memory:**
```python
import ollama

# System prompt — gives the AI its personality
system_prompt = "You are Aria, a friendly and concise assistant. Always be helpful."

# Stores the full conversation
messages = [{'role': 'system', 'content': system_prompt}]

print("Aria is ready. Type 'quit' to exit.\n")

while True:
    user_input = input("You: ")
    
    if user_input.lower() == 'quit':
        print("Aria: Goodbye!")
        break
    
    # Add your message to history
    messages.append({'role': 'user', 'content': user_input})
    
    # Get AI response
    response = ollama.chat(model='phi3', messages=messages)
    reply = response['message']['content']
    
    # Add AI response to history
    messages.append({'role': 'assistant', 'content': reply})
    
    print(f"Aria: {reply}\n")
```

**Milestone:** A named AI assistant that holds a multi-turn conversation and saves history.

---

## Month 2 — Build: Your Personal AI Assistant

---

### Week 5 — Add Persistent Memory (Cross-Session)

**Goal:** Your assistant remembers previous conversations

| Day | Task |
|-----|------|
| Mon | Save `messages` to a JSON file when the user quits |
| Tue | Load previous messages from the JSON file when the script starts |
| Wed | Test: start a conversation, quit, restart, confirm the AI remembers |
| Thu | Add a "clear memory" command: `if user_input == 'forget':` delete the file |
| Fri | Add a timestamp to each message in the JSON file |
| Sat | Print a summary of the last session at startup: "Last chat: [date]" |
| Sun | Review and clean up code |

**Milestone:** Your assistant picks up where it left off every time you start it.

---

### Week 6 — Add Voice Input with Whisper

**Goal:** Speak to your AI instead of typing

| Day | Task |
|-----|------|
| Mon | Install Whisper: `pip install openai-whisper` (may take 10 min) |
| Tue | Install audio library: `pip install sounddevice scipy` |
| Wed | Test Whisper with a sample audio file from the Whisper docs |
| Thu | Write a script to record 5 seconds of audio from your microphone |
| Fri | Transcribe your recording with Whisper: `whisper recording.wav --model tiny` |
| Sat | Connect: record → transcribe → send to Ollama → print response |
| Sun | Test it end to end. Fix any issues |

**Note:** Whisper runs fully locally. No internet connection needed after initial model download.

**Milestone:** Speak a question. Your terminal prints the AI's text answer.

---

### Week 7 — Add Voice Output (Text-to-Speech)

**Goal:** Your AI speaks back to you

| Day | Task |
|-----|------|
| Mon | Install pyttsx3 (offline TTS): `pip install pyttsx3` |
| Tue | Write a script that converts a string to speech: `engine.say("Hello"); engine.runAndWait()` |
| Wed | Connect it to Ollama responses: AI responds → text is spoken aloud |
| Thu | Adjust voice speed and voice type using pyttsx3 settings |
| Fri | Test the full loop: speak question → transcribe → AI answers → spoken aloud |
| Sat | Add a wake phrase option: if transcription starts with "Hey Aria" — respond |
| Sun | Polish and document |

**Milestone:** A fully voice-based local AI assistant. You speak, it speaks back.

---

### Week 8 — Polish and Package

**Goal:** Make your assistant reliable and presentable

| Day | Task |
|-----|------|
| Mon | Add error handling: what if Ollama isn't running? Print a helpful message |
| Tue | Add a startup menu: "1 - Chat  2 - View history  3 - Clear memory  4 - Exit" |
| Wed | Create a README.md explaining what the assistant does and how to run it |
| Thu | Move configuration to the top of the file (model name, system prompt) |
| Fri | Final test: fresh install on a clean terminal, follow your own README |
| Sat | Optional: push to a private GitHub repository |
| Sun | Celebrate — you built a working local AI assistant |

**Milestone:** A working personal AI assistant you could hand to a friend with instructions.

---

## Month 3 — Automate: Build AI Agents

An AI **agent** is an AI that doesn't just answer questions — it takes actions: reading files, running code, calling tools, completing multi-step tasks without you guiding each step.

---

### Week 9 — LangChain Basics

**Goal:** Understand LangChain and run your first agent

| Day | Task |
|-----|------|
| Mon | Install LangChain: `pip install langchain langchain-community` |
| Tue | Watch "LangChain Crash Course" by Patrick Loeber (YouTube, ~1.5 hours) |
| Wed | Follow LangChain "Build a Simple LLM App" tutorial using Ollama |
| Thu | Build a chain: prompt → AI → output. Change the prompt and re-run |
| Fri | Add a second step: AI output feeds into another AI call |
| Sat | Build a summarizer: paste a long text → AI summarizes it → print result |
| Sun | Review and document what you built |

**Milestone:** A LangChain chain that processes input through two AI steps.

---

### Week 10 — Build a Document Q&A Agent (RAG)

**Goal:** Your AI answers questions about your own files

RAG = Retrieval Augmented Generation. You give the AI your documents, and it finds relevant sections before answering.

| Day | Task |
|-----|------|
| Mon | Install vector tools: `pip install langchain-community chromadb` |
| Tue | Create a test document: a text file with 3–4 paragraphs about a topic you know |
| Wed | Load the document with LangChain's TextLoader |
| Thu | Split the document into chunks using RecursiveCharacterTextSplitter |
| Fri | Store chunks in a ChromaDB vector store (a searchable AI memory) |
| Sat | Ask a question: `"What does the document say about X?"` — AI finds and answers |
| Sun | Test with a longer document (e.g., a saved Wikipedia article) |

**Milestone:** Ask "What are the key points in my notes.txt?" and get a real, specific answer.

---

### Week 11 — Build a Task Automation Agent

**Goal:** An agent that completes multi-step tasks on its own

| Day | Task |
|-----|------|
| Mon | Learn about LangChain tools and agents — read the "Agents" section of LangChain docs |
| Tue | Create a "file reader" tool: function that reads a file and returns its contents |
| Wed | Create a "file writer" tool: function that writes text to a file |
| Thu | Give these tools to a LangChain agent |
| Fri | Test: tell the agent "Read todo.txt and write a summary to summary.txt" |
| Sat | Watch it execute step by step. Add a calculator tool |
| Sun | Give it a 3-step task and observe how it plans and executes |

**Milestone:** Your agent reads a file, processes it, and writes output — without you guiding each step.

---

### Week 12 — Review, Showcase, and Plan Next Quarter

**Goal:** Consolidate everything, document your work, plan what's next

| Day | Task |
|-----|------|
| Mon | Review all 3 projects: chatbot, voice assistant, agent |
| Tue | Write a one-page summary of what each project does |
| Wed | Identify the biggest thing that didn't work — diagnose and fix it |
| Thu | List 5 features you want to add in the next 3 months |
| Fri | Research one new idea: web UI, calendar integration, email summarizer |
| Sat | Optional: record a 2-minute video of each project working |
| Sun | Plan Month 4 |

**Milestone:** 3 working AI projects documented and demonstrated.

---

## 📅 Full Roadmap Summary

| Week | Focus | End-of-Week Milestone |
|------|-------|-----------------------|
| 1 | Install Ollama, run models | Chat with phi3, mistral, llama3 |
| 2 | Python basics | Write and run Python scripts |
| 3 | Python + Ollama | Script that asks question, saves answer |
| 4 | Terminal chatbot | Named AI with memory |
| 5 | Persistent memory | AI remembers across sessions |
| 6 | Voice input | Speak to your AI |
| 7 | Voice output | AI speaks back |
| 8 | Polish assistant | Shareable project with README |
| 9 | LangChain basics | Two-step AI chain |
| 10 | Document Q&A (RAG) | AI answers from your own files |
| 11 | Task automation agent | Agent completes 3-step tasks |
| 12 | Review and plan | Portfolio of 3 projects |

---

## 🔑 Glossary

| Term | Simple Definition |
|------|------------------|
| **LLM** | Large Language Model — the AI that reads and generates text |
| **VRAM** | Memory on the GPU chip — more = bigger models |
| **Parameters** | The model's "knowledge capacity" — 7B means 7 billion |
| **Ollama** | Free tool to download and run AI models locally |
| **Inference** | Running a model to get a response (not training it) |
| **RAG** | Giving an AI access to your own documents to answer questions |
| **Agent** | An AI that takes actions, not just answers questions |
| **CUDA** | NVIDIA's software that lets AI tools use the GPU |
| **Token** | A chunk of text (~3/4 of a word) — AI processes tokens, not full words |
| **Prompt** | The message or instruction you send to an AI |
| **System prompt** | Hidden instructions given to the AI before the conversation starts |
| **LangChain** | Python library for building AI agents and pipelines |
| **ChromaDB** | A local database that stores text so AI can search it semantically |
| **Whisper** | OpenAI's speech-to-text model — runs fully offline |
| **pyttsx3** | Python library for converting text to speech — works offline |
