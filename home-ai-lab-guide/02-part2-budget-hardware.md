# Part 2 — Budget Hardware Recommendations

## Under $500 Total

---

### Option 1 — Use What You Already Have ($0)

**Best for:** Anyone with a computer made after 2018

If you have 8GB+ RAM and a modern CPU, you can start today.

- **Name:** Your existing computer
- **Price:** $0
- **Why it works:** Ollama runs models entirely on CPU. Small models (1B–7B parameters) run fine
- **Limitation:** Slow responses — 30–60 seconds per reply on CPU vs. 1–3 seconds on GPU
- **"Parameters"** = the model's knowledge capacity. Think of it like the number of facts it was trained on

---

### Option 2 — Used ThinkPad/Dell Laptop (~$150–$250)

**Best for:** Beginners who want a dedicated machine without spending much

- **Name:** Lenovo ThinkPad T480 or Dell Latitude 5490 (used/refurbished)
- **Price:** $150–$250
- **Where to buy:** eBay, Facebook Marketplace, Back Market (backmarket.com)
- **Specs to look for:** Intel Core i5 8th gen+, 16GB RAM, 256GB SSD
- **Why it works:** 16GB RAM lets you run 7B models comfortably on CPU
- **Limitation:** No dedicated GPU — learning is fine, heavy use is slow

---

### Option 3 — Add a Used NVIDIA RTX 2060 to an Existing Desktop (~$100–$180)

**Best for:** Anyone who already has a desktop PC (500W+ power supply required)

- **Name:** NVIDIA GeForce RTX 2060 (6GB VRAM)
- **Price:** $100–$180 used
- **Where to buy:** eBay, r/hardwareswap (reddit.com/r/hardwareswap), Facebook Marketplace
- **Why it works:** 6GB VRAM runs 7B models at full GPU speed — responses in 1–3 seconds. CUDA support means all major AI tools work out of the box
- **Limitation:** Requires a desktop with an open PCIe slot and adequate power supply

---

### Option 4 — Mac Mini M2 (8GB) (~$399–$499)

**Best for:** Beginners who want the cleanest, most reliable setup with no tinkering

- **Name:** Apple Mac Mini M2 (8GB unified memory)
- **Price:** ~$499 new; ~$380–$420 refurbished
- **Where to buy:** Apple Certified Refurbished (apple.com/shop/refurbished), Amazon
- **Why it works:** Unified memory means GPU and CPU share all 8GB. Runs 7B models fast. Ollama has native Apple Silicon support. No driver setup
- **Limitation:** 8GB is tight for 13B+ models; RAM is not upgradeable

---

### Option 5 — Raspberry Pi 5 (8GB) (~$80–$120)

**Best for:** An always-on, low-power home AI server

- **Name:** Raspberry Pi 5 — 8GB RAM model
- **Price:** $80 for board; ~$120 with case, power supply, SD card
- **Where to buy:** adafruit.com, raspberrypi.com, PiShop.us
- **Why it works:** Runs small models (1B–3B parameters) like Phi-3 Mini. Uses ~10W of power — leave it on all day
- **Limitation:** Too slow for models above 3B parameters

---

## 🌟 Best Value Upgrade: $500–$1,500

### NVIDIA RTX 4060 Ti 16GB (~$400–$500 for GPU alone)

- **Name:** NVIDIA GeForce RTX 4060 Ti 16GB
- **Price:** $400–$500
- **Where to buy:** Best Buy, Newegg, Amazon, B&H Photo
- **Why it's the upgrade:** 16GB VRAM runs 13B models fully on GPU. Also handles image generation (Stable Diffusion). Handles most open-source models released today

**Full budget build (~$800–$1,200):**

| Part | Model | Price |
|------|-------|-------|
| GPU | RTX 4060 Ti 16GB | ~$450 |
| CPU | AMD Ryzen 5 5600 (used) | ~$80 |
| RAM | 32GB DDR4 | ~$60 |
| Motherboard | B550 ATX | ~$100 |
| Storage | 1TB NVMe SSD | ~$70 |
| Case + PSU | Mid-tower + 650W | ~$80 |
| **Total** | | **~$840** |

---

**Next:** Open `03-part3-learning-path.md`
