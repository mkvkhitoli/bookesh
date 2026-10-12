# bookesh.in

Free study help for MP Board and competitive exams. Built with [Astro](https://astro.build) and hosted free on Cloudflare Pages.

---

## Step 1: Preview the site on your Mac

You need Node.js 22 or newer. Check with `node -v`. If you don't have it, install it from https://nodejs.org (choose the LTS version).

```bash
cd ~/development/bookesh
npm install          # first time only
npm run dev          # then open http://localhost:4321
```

Edit any file and the browser refreshes on its own. Press `Ctrl + C` to stop.

---

## Step 2: Push to GitHub

1. Go to https://github.com/new and create a repo named **bookesh** (Private is fine). Don't add a README.
2. In Terminal:

```bash
cd ~/development/bookesh
git init
git add .
git commit -m "New Bookesh website"
git branch -M main
git remote add origin https://github.com/<your-username>/bookesh.git
git push -u origin main
```

---

## Step 3: Deploy on Cloudflare Pages (free)

1. Open https://dash.cloudflare.com and go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick the **bookesh** repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**. After about a minute your site is live at `bookesh.pages.dev`.

From now on, every `git push` updates the live site automatically.

---

## Step 4: Connect bookesh.in

The domain stays registered at WordPress.com. You only point it to Cloudflare.

1. In Cloudflare, click **Add a domain**, enter `bookesh.in`, and choose the **Free** plan. Cloudflare shows you 2 nameservers (like `xxx.ns.cloudflare.com`).
2. In WordPress.com, go to **Upgrades → Domains → bookesh.in → Name servers**. Turn off "Use WordPress.com name servers" and paste the 2 Cloudflare nameservers.
   - If you use email on this domain (for example an email forwarding service), first copy those MX records into Cloudflare DNS.
3. Wait until Cloudflare says the domain is **Active**. This usually takes a few minutes but can take up to 24 hours.
4. In your Pages project, go to **Custom domains → Set up a domain** and add `bookesh.in`. Then do the same for `www.bookesh.in`.
5. Cancel only the WordPress **hosting plan**. Keep paying the **domain renewal**.

---

## Step 5: Keep your Google ranking

- Open `public/_redirects` and add one line for each important old WordPress URL:
  `/old-post-url/   /mp-board/class-10/science/   301`
- In Google Search Console, submit `https://bookesh.in/sitemap.xml`.

---

## How to add content

| What | Where |
|---|---|
| Site name, teacher name, Telegram/WhatsApp links | `src/site.config.ts` |
| Classes, subjects, chapter lists | `src/data/mpboard.ts` |
| Chapter notes | `src/content/notes/<class>/<subject>/ch-<N>.md` (copy `class-10/science/ch-1.md` as a template) |
| Competitive exams | `src/data/exams.ts` |
| **New mock test** | Add a `.json` file in `src/data/tests/` (copy `mp-gk-practice-1.json`). It appears on the site automatically. |

Mock test question format:

```json
{ "section": "MP GK", "q": "Question text", "options": ["A", "B", "C", "D"], "answer": 1,
  "solution": "English explanation\nहिंदी सारांश" }
```

`answer` is the position of the correct option: 0 = A, 1 = B, 2 = C, 3 = D.
