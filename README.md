# Santodex

A modern web app to explore and learn about Catholic saints. Think of it as a “Pokédex for Saints” — clean, minimal, fast.

Built with **Next.js**, **Tailwind CSS**, and fully optimized for mobile and desktop.

---

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Icons
- Framer Motion
- React Flow (optional - for data relationships)
- Vercel (deploy)

---

## Features

- Search and browse saints
- Clean UI, mobile-first
- Structured data from JSON
- Dynamic hero background inspired by Vercel
- Navigation between detailed cards
- Fast and lightweight

---

## Folder Structure

```
/app
  ├── components   // UI components (Hero, Navbar, Card, etc.)
  ├── data         // Saints JSON/TS data
  ├── public       // Static assets
  ├── styles       // Global styles
  ├── pages        // App routes
```

---

## Getting Started

Clone and run locally:

```bash
git clone https://github.com/yourusername/santodex.git
cd santodex
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deploy instantly with [Vercel](https://vercel.com) or your preferred platform.

---

## API/Data

Saints data is static in `/data/saints.ts`. Easily scalable.

Example:

```js
{
  name: "St. Thérèse of Lisieux",
  title: "Carmelite",
  born: "1873",
  died: "1897",
  description: "Known as 'The Little Flower', a Carmelite nun who lived a life of humility..."
}
```

---

## License

MIT

---

## Credits

Built with faith and code.