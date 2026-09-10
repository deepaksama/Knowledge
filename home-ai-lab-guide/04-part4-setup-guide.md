# Part 4 — Step-by-Step Setup Guide

## Before You Start

**Requirements:**
- Computer with 8GB+ RAM and 20GB+ free disk space
- Internet connection (for the initial download only — everything runs offline after)
- macOS 12+ or Windows 10/11

---

## Session 1 — Install Ollama (~15 min total)

---

**Step 1 (~2 min)**
What you are doing: Opening the Ollama website
Command or action: Open your browser and go to `https://ollama.com`
How you know it worked: You see a website with a "Download" button
If it fails: Type the address manually — `ollama.com` — and press Enter

---

**Step 2 (~3 min)**
What you are doing: Downloading the Ollama installer
Command or action: Click the "Download" button. A file will appear in your Downloads folder
How you know it worked: File named `Ollama-darwin.zip` (Mac) or `OllamaSetup.exe` (Windows) is in your Downloads folder
If it fails: Refresh the page and try again. If your browser blocks it, click "Keep"

> ⏳ **While downloading (~200MB, 1–3 min):** Get a glass of water or stretch. Come back when the download finishes.

---

**Step 3 (~2 min) — Mac only**
What you are doing: Unzipping the downloaded file
Command or action: Go to Downloads folder → double-click `Ollama-darwin.zip`
How you know it worked: A file called "Ollama" with a llama icon appears in Downloads
If it fails: Right-click the file → "Open With" → "Archive Utility"

---

**Step 3 (~2 min) — Windows only**
What you are doing: Running the Windows installer
Command or action: Go to Downloads folder → double-click `OllamaSetup.exe` → click "Yes" → click "Install"
How you know it worked: A progress bar appears and completes; installer closes on its own
If it fails: Right-click the file → "Run as Administrator"

---

**Step 4 (~2 min) — Mac only**
What you are doing: Moving Ollama to your Applications folder
Command or action: Open a new Finder window → drag the "Ollama" file from Downloads into Applications
How you know it worked: Ollama appears in your Applications folder
If it fails: You can double-click it from Downloads — it still works

---

**Step 5 (~1 min)**
What you are doing: Launching Ollama
Command or action:
- **Mac:** Double-click Ollama in Applications. If warned about internet download, click "Open"
- **Windows:** Ollama starts automatically after install — look for a llama icon in the taskbar (bottom-right)
How you know it worked: A small llama icon appears in your Mac menu bar (top-right) or Windows taskbar (bottom-right)
If it fails: Search for "Ollama" in Spotlight (Mac: Cmd+Space) or Start Menu (Windows) and open it

### ✅ Session 1 Checkpoint
You should see a llama icon in your menu bar or taskbar. Ollama is running silently in the background.

---

## Session 2 — Open the Terminal (~5 min total)

The terminal is a text-based way to control your computer. Think of it as texting your computer instead of clicking. You will use it to download and run AI models.

---

**Step 6 (~2 min) — Mac**
What you are doing: Opening the Terminal application
Command or action: Press `Cmd + Space` → type `Terminal` → press `Enter`
How you know it worked: A dark window opens with text ending in `$` or `%` and a blinking cursor
If it fails: Open Finder → Applications → Utilities → Terminal

---

**Step 6 (~2 min) — Windows**
What you are doing: Opening the Command Prompt
Command or action: Press the `Windows key` → type `cmd` → press `Enter`
How you know it worked: A black window opens with text ending in `>` and a blinking cursor
If it fails: Search "Command Prompt" in Start menu → right-click → "Run as administrator"

---

**Step 7 (~1 min)**
What you are doing: Confirming Ollama installed correctly
Command or action: Type this exactly and press Enter:
```
ollama --version
```
How you know it worked: You see something like `ollama version 0.3.x` printed on screen
If it fails: Restart your computer and try again. If still failing, repeat Session 1

### ✅ Session 2 Checkpoint
You should see the Ollama version number in your terminal.

---

## Session 3 — Download and Run Your First AI Model (~20 min total)

---

**Step 8 (~1 min)**
What you are doing: Starting the download of Phi-3 Mini (a small, capable model from Microsoft)
Command or action:
```
ollama pull phi3
```
How you know it worked: You see progress bars and text like "pulling manifest"
If it fails: Make sure the Ollama llama icon is visible. Then try the command again

> ⏳ **While downloading (~2.3GB, 3–10 min):**
> - Open a text editor (Notepad on Windows, TextEdit on Mac)
> - Write down 3 questions you want to ask the AI
> - The download is done when you see "success" and your cursor prompt returns

---

**Step 9 (~1 min)**
What you are doing: Starting a chat session with Phi-3
Command or action:
```
ollama run phi3
```
How you know it worked: You see `>>> Send a message (/? for help)` with a blinking cursor
If it fails: If phi3 didn't fully download, run `ollama pull phi3` again first

---

**Step 10 (~2 min)**
What you are doing: Sending your first message to the AI
Command or action: Type your question and press Enter. Example:
```
What is a large language model? Explain it in simple terms.
```
How you know it worked: The AI starts typing a response, word by word, in your terminal
If it fails: Make sure you pressed Enter. If nothing happens for 60 seconds, press `Ctrl+C` and try `ollama run phi3` again

---

**Step 11 (~1 min)**
What you are doing: Exiting the chat session
Command or action: Type `/bye` and press Enter — OR — press `Ctrl+D`
How you know it worked: The terminal returns to its normal prompt (`$`, `%`, or `>`)
If it fails: Close the terminal window and open a new one

### ✅ Session 3 Checkpoint
You should see a full AI response in your terminal. You are now running a local AI — no internet, no API key, no subscription.

---

## Session 4 — Explore More Models (~10 min + download time)

---

**Step 12 (~1 min)**
What you are doing: Listing all models currently on your machine
Command or action:
```
ollama list
```
How you know it worked: A table shows your downloaded models (should include phi3)
If it fails: Make sure Ollama is running (check for the llama icon)

---

**Step 13 (~1 min)**
What you are doing: Starting the download of Mistral 7B — a more capable model
Command or action:
```
ollama pull mistral
```
How you know it worked: Progress bars appear and finish with "success"
If it fails: Check your disk space — you need 5GB+ free. Run the command again if interrupted

> ⏳ **While downloading (~4.1GB, 5–15 min):** Read Part 3 of this guide and pick one video to watch first.

---

**Step 14 (~2 min)**
What you are doing: Running Mistral and comparing it to Phi-3
Command or action:
```
ollama run mistral
```
Then ask: `What are three interesting facts about black holes?`
How you know it worked: Mistral responds with three detailed facts
If it fails: If you get a memory error, your RAM may be too low. Stick with phi3 for now

### ✅ Session 4 Checkpoint
Run `ollama list` — you should see both phi3 and mistral. You are now managing multiple local AI models.

---

## Session 5 — Connect Python to Ollama (~20 min)

> **Prerequisite:** Python 3.8+ must be installed. Check by running: `python3 --version`
> If not installed: Go to https://python.org/downloads and install the latest version

---

**Step 15 (~2 min)**
What you are doing: Confirming Python is installed
Command or action:
```
python3 --version
```
How you know it worked: You see `Python 3.x.x` printed
If it fails: Download Python from https://python.org/downloads — install it, then try again

---

**Step 16 (~2 min)**
What you are doing: Installing the Ollama Python library
Command or action:
```
pip install ollama
```
How you know it worked: You see "Successfully installed ollama" near the end of the output
If it fails: Try `pip3 install ollama` instead

---

**Step 17 (~3 min)**
What you are doing: Creating a folder for your AI scripts
Command or action:
```
mkdir ~/ai-lab
cd ~/ai-lab
```
How you know it worked: No error appears. The terminal prompt may show `ai-lab` in it
If it fails: Try `mkdir ai-lab` then `cd ai-lab`

---

**Step 18 (~3 min)**
What you are doing: Creating your first Python AI script
Command or action: Open a text editor (Notepad, TextEdit, or VS Code) and create a new file called `chat.py` in your `ai-lab` folder. Paste this code:
```python
import ollama

# Send a question to your local AI
response = ollama.chat(
    model='phi3',
    messages=[
        {'role': 'user', 'content': 'What is the capital of France? Answer in one sentence.'}
    ]
)

# Print the AI's response
print(response['message']['content'])
```
How you know it worked: The file `chat.py` exists in your `ai-lab` folder
If it fails: Make sure you saved the file with the exact name `chat.py`

---

**Step 19 (~2 min)**
What you are doing: Running your Python AI script
Command or action:
```
python3 chat.py
```
How you know it worked: The AI's answer prints in the terminal — something like "The capital of France is Paris."
If it fails: Make sure you are in the `ai-lab` folder (`cd ~/ai-lab`) and Ollama is running

### ✅ Session 5 Checkpoint
Your Python script got a response from your local AI. You just built the foundation of every AI project you will create.

---

## Reference: Useful Ollama Commands

| Command | What it does |
|---------|-------------|
| `ollama list` | Show all downloaded models |
| `ollama pull <model>` | Download a model |
| `ollama run <model>` | Start chatting with a model |
| `ollama rm <model>` | Delete a model to free disk space |
| `ollama ps` | Show currently running models |

## Reference: Models to Try

| Model | Size | Best for |
|-------|------|---------|
| `phi3` | 2.3GB | Fast responses, good reasoning |
| `mistral` | 4.1GB | General purpose, well-rounded |
| `llama3` | 4.7GB | Great all-rounder from Meta |
| `codellama` | 3.8GB | Writing and explaining code |
| `tinyllama` | 637MB | Very fast, tiny RAM use |

---

**Next:** Open `05-part5-project-roadmap.md`
