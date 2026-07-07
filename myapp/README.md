# Interior By Pranjali 🏡✨

> Premium Interior Design Services in Pune, Maharashtra.

A modern, high-performance portfolio and business website for **Interior By Pranjali**, built to showcase premium interior design projects, services, and facilitate client consultations.

![Interior By Pranjali](https://www.interiorbypranjali.com/cen.webp)

## 🌐 Live Website
**[https://www.interiorbypranjali.com](https://www.interiorbypranjali.com)**

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Modular CSS for component-level scoping)
- **Deployment**: [Vercel](https://vercel.com/)
- **Icons/Fonts**: Google Fonts (Inter), custom SVGs

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/interior-by-pranjali.git
cd interior-by-pranjali
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the local environment. The page will automatically hot-reload as you make edits to the code.

---

## 📁 Project Structure

The project follows a component-driven architecture using the Next.js App Router:

```text
├── app/
│   ├── components/         # Reusable UI components
│   │   ├── Collection/     # Portfolio grid & PDF previews
│   │   ├── Contact/        # Contact CTA and information
│   │   ├── Design/         # Design philosophy & process
│   │   ├── Footer/         # Global footer navigation
│   │   ├── Header/         # Sticky top navigation
│   │   ├── Hero/           # Main landing hero section
│   │   ├── Profile/        # Designer profile & bio
│   │   ├── Stats/          # Animated statistics section
│   │   └── widget/         # Floating sticky contact widget (WhatsApp/Phone/Email)
│   │
│   ├── globals.css         # Global styles, variables, and typography
│   ├── layout.tsx          # Root HTML layout and global SEO metadata
│   ├── page.tsx            # Main homepage composition
│   ├── robots.ts           # Search engine crawler instructions
│   └── sitemap.ts          # Automated sitemap for SEO indexing
│
├── public/                 # Static assets (images, PDFs, SVGs)
└── next.config.ts          # Next.js configuration
```

---

## 📈 SEO & Performance
- **Optimized Core Web Vitals**: LCP images are prioritized and preloaded.
- **Dynamic Meta Tags**: Full OpenGraph and Twitter Card support for rich social media sharing.
- **Mobile First**: Fully responsive layouts optimized for all viewport sizes.
- **Static Export**: Lightning-fast page loads leveraging Vercel's edge caching.

---

## 📞 Contact Integration
The website features seamless integration for client outreach:
- **WhatsApp**: Pre-filled consultation messages ("Hi Pranjali, I would like a consultation")
- **Direct Call/SMS**: `tel:` and `sms:` URI handlers for instant mobile dialing
- **Email**: Pre-filled Gmail web client drafting

---

## 📝 License
This project is proprietary and meant for the sole use of **Interior By Pranjali**. All rights reserved.
