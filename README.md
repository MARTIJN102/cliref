# cliref.dev ✨

> Fast, subdomain-powered docs for the CLI. Your no-BS terminal reference – fast, searchable, and developer-focused.

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![CC BY 4.0](https://img.shields.io/badge/Content-License--CC--BY--4.0-lightgrey.svg)](./CONTENT_LICENSE.md)

**cliref** is a lightweight documentation hub for essential CLI tools like `git`, `docker`, `ssh`, and more. It’s built for developers who want clean, distraction-free reference material.

Everything is open source, easily extendable, and powered by [Nextra](https://nextra.site) + [Next.js](https://nextjs.org).

🌐 Visit: [https://cliref.dev](https://cliref.dev)

---

## 🧠 Why?

We all Google the same commands every day. **cliref** aims to be your single, reliable source for clean, categorized terminal docs — without cookie banners, paywalls, or bloated UI.

---

## 🛆 Tech Stack

- [Next.js](https://nextjs.org)
- [Nextra](https://nextra.site) (`nextra-theme-docs`)
- [TypeScript](https://www.typescriptlang.org/)
- Markdown-powered content (`.mdx`)
- Fully static, deployable anywhere (Vercel, Netlify, Docker)

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/cliref.git
cd cliref

# 2. Install dependencies
pnpm install

# 3. Start dev server
pnpm dev
```

Then open `http://localhost:3000` in your browser.

---

## 📁 Structure

```
.
├── pages/              # Your MDX files (e.g. git.mdx, docker.mdx)
│   ├── index.mdx       # Home page (Landing page)
│   ├── _meta.json      # Sidebar navigation config
│   └── ssh.mdx
├── public/             # Static assets
├── theme.config.js     # Nextra theme customization
├── next.config.js      # Nextra setup
├── middleware.ts       # Handles subdomain-based routing (e.g. git.cliref.dev)
└── ...
```

---

## 🌍 Subdomain Routing

Using Next.js middleware, subdomains like `git.cliref.dev` are dynamically routed to `/git`.

### ⚙️ Local Dev

Add entries to your `/etc/hosts`:

```
127.0.0.1 git.localhost
127.0.0.1 docker.localhost
```

In production, configure wildcard DNS (e.g., `*.cliref.dev`) and point it to your host.

---

## ✅ TODO / Roadmap

- [x] Core CLI topics: `git`, `ssh`, `docker`, etc.
- [ ] Keyboard shortcut cheat sheet
- [ ] Command search
- [ ] Light/Dark theme toggle
- [ ] Community contributions
- [ ] Deploy to cliref.dev

---

## 🛠️ Contributing

Pull requests welcome! Open an issue if you want to add a topic, fix a command, or extend the docs.

---

## 🗒 License

- **Code**: [MIT License](./LICENSE)
- **Docs & Content**: [CC BY 4.0](./CONTENT_LICENSE.md)

Free to use, fork, and remix — attribution required for content.

---

> Built by [Martijn](https://github.com/YOUR_USERNAME) for developers who just want the damn command.
