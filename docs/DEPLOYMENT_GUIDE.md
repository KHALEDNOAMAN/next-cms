# Next CMS - Deployment Guide

## Prerequisites
- Node.js 18+
- PostgreSQL or MongoDB
- Vercel/Railway account (optional)

## Local Development
```bash
git clone https://github.com/CandleLearner-M/next-cms.git
cd next-cms
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables
| Variable | Description |
|----------|-------------|
| DATABASE_URL | Database connection string |
| NEXTAUTH_SECRET | Auth encryption key |
| NEXTAUTH_URL | App URL |

## Deploy to Vercel
```bash
vercel deploy --prod
```

## Content Modeling
- Define content types in schema
- Create fields: text, rich text, media, relations
- Set up API endpoints automatically