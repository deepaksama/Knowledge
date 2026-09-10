# Part 1 — Understanding the Hardware

## What Hardware Components Matter for Local AI

Running an AI model is like running a very demanding video game. Your computer needs specific "muscles" to handle it. Four components matter most.

---

## 🧠 CPU — "The Manager"

The CPU (Central Processing Unit) is the brain of your computer. It handles general tasks: opening apps, managing files, running your OS.

**For AI:** The CPU *can* run AI models, but it is slow at it. Like asking a manager to do all the assembly-line work by hand.

**What to look for:**
- Released after 2018 (Intel Core i5/i7/i9, AMD Ryzen 5/7/9)
- At least 4 cores
- 3.0 GHz clock speed or higher

---

## 🎮 GPU — "The Assembly Line"

The GPU (Graphics Processing Unit) was designed for video games. It turns out AI math — multiplying huge grids of numbers — is almost identical to graphics math. So GPUs are dramatically faster at AI than CPUs.

**Analogy:** If the CPU is one expert doing 4 tasks, the GPU is 4,000 workers each doing a tiny piece simultaneously.

**What to look for:**
- NVIDIA GPU (best AI software support via CUDA)
- VRAM (Video RAM — the GPU's own memory): 4GB minimum, 8GB comfortable, 12GB+ great
- NVIDIA RTX series: RTX 2060, 3060, 4060 are the budget sweet spot

**Why NVIDIA?** Almost all AI tools are built for NVIDIA's CUDA platform. AMD GPUs work but require more setup.

---

## 💾 RAM — "The Workbench"

RAM (Random Access Memory) is your computer's short-term memory. When an AI model doesn't fit in GPU VRAM, it spills into RAM.

**Analogy:** VRAM is your small desk. RAM is the bigger table behind you — reachable, but slower.

**What to look for:**
- 16GB minimum
- 32GB if running large models or multiple tools
- DDR4 or DDR5 (either works; newer is faster)

---

## 💿 Storage — "The Filing Cabinet"

AI models are large files — 2GB to 70GB+ each. You need fast, spacious storage.

**What to look for:**
- SSD (Solid State Drive), NOT HDD (Hard Disk Drive) — SSDs load models much faster
- 500GB+ free space
- NVMe SSD is the fastest type (looks like a gum stick inside your PC)

---

## CPU vs. GPU vs. Apple Silicon

| | CPU | NVIDIA GPU | Apple Silicon (M1/M2/M3) |
|---|---|---|---|
| **AI Speed** | Slow | Fast | Fast |
| **Cost** | Already have it | $100–$500 used | Built into Mac |
| **VRAM/Memory** | Shares system RAM | Dedicated VRAM | Shares all RAM |
| **Setup difficulty** | Easy | Medium | Easy |

**Apple Silicon is special:** M1/M2/M3 Macs share memory between CPU and GPU. A 16GB MacBook has 16GB of usable "AI memory" — no extra hardware needed.

**Bottom line:**
- Mac with M1/M2/M3? You're ready now
- Windows/Linux desktop? Add a used NVIDIA GPU for best results
- Neither? Start CPU-only, upgrade later

---

**Next:** Open `02-part2-budget-hardware.md`
