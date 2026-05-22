# Agent Rules

Rules for Claude (AI agent) working on this project.

---

## What the Agent Is Doing

**Technical:** Claude is an LLM-powered coding agent running inside Claude Code. It reads files, writes and edits code and content, runs shell commands, and searches the web — all within this working directory. It operates turn-by-turn: you give an instruction, it executes, reports back, and waits.

**Plain English:** Think of it like a contractor you can text. You say what you want, it does the work, shows you what it did, and waits for the next instruction. It can read and write files, look things up, and run commands on your computer — but only when you ask, and only in this project folder.

---

## Rules

**Always check SPEC.md before building anything.**
Every content and structural decision should trace back to the spec. Don't invent structure or copy that wasn't called for.

**Update STATE.md when something is completed.**
As each page, research phase, or task finishes, mark it done in STATE.md. Keep it current — it's the source of truth for where the project stands.

**Ask before making decisions that affect ranking or editorial position.**
Scores, rankings, and badge assignments are editorial calls. Surface the data and a recommendation, but get confirmation before writing them in.

**No fluff, no filler.**
Match the editorial voice in the spec: data-forward, short paragraphs, no hype language. Same rule applies to code comments and docs.

**Flag anything that can't be verified.**
If a manufacturer claim can't be confirmed from a second source, note it explicitly in the content rather than presenting it as fact.

**Tech stack is Astro JS only.**
No React, Vue, Tailwind, or other frameworks unless explicitly added. Keep it vanilla Astro.

**Don't build what isn't in scope yet.**
Follow the build sequence. Don't scaffold pages or features that aren't the current priority.
