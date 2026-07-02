# 🌐 AegisFlow GRC Website - Vercel Deployment Guide

Follow these steps to host your GRC portal online as a live website (e.g., `https://mankind-grc-portal.vercel.app`) for free!

---

## 📋 Prerequisites
You will need free accounts on the following platforms:
1. **GitHub** (`https://github.com`) — to host your codebase.
2. **Neon** (`https://neon.tech`) or **Supabase** (`https://supabase.com`) — to host your free PostgreSQL cloud database.
3. **Vercel** (`https://vercel.com`) — to host your live Next.js website.

---

## 🚀 Deployment Process

### Step 1: Create a Free Cloud Database
1. Go to **Neon** (`https://neon.tech`) and sign up for a free account.
2. Click **Create Project**, name it (e.g., `mankind-grc-db`), and select your closest server region.
3. Under the **Dashboard**, copy your connection string (`Connection string`).
   * It will look like this: `postgresql://neondb_owner:password@ep-cool-pool-1234.us-east-2.aws.neon.tech/neondb?sslmode=require`
4. Store this URL temporarily.

---

### Step 2: Push your Code to GitHub
1. Open **PowerShell** or command prompt in your project root (`c:\Users\sharm\OneDrive\Desktop\infosec-maturity`).
2. Run these commands to initialize Git and push the code:
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "feat: Mankind Pharma GRC deployment setup"

   # Create a new repository on GitHub (named e.g. infosec-maturity)
   # Link and push your local branch:
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 3: Deploy to Vercel
1. Go to **Vercel** (`https://vercel.com`) and log in with your GitHub account.
2. Click **Add New** $\rightarrow$ **Project**.
3. Import your `infosec-maturity` repository.
4. Expand the **Environment Variables** section. Add the following parameters:
   * **Key**: `DATABASE_URL`
   * **Value**: *[Paste your Neon/Supabase connection string from Step 1]*
5. Add your AWS keys (optional, for live scans):
    * **Key**: `AWS_ACCESS_KEY_ID` / **Value**: *[Your AWS Access Key ID]*
    * **Key**: `AWS_SECRET_ACCESS_KEY` / **Value**: *[Your AWS Secret Access Key]*
    * **Key**: `AWS_REGION` / **Value**: `us-east-1`
6. Click **Deploy**.

---

## ⚙️ How it Works
*   **Zero-Maintenance migrations**: During the Vercel build phase, the portal automatically runs `npx prisma db push --accept-data-loss` and `npx prisma db seed`. 
*   This means your cloud database is automatically structured, and Mankind Pharma workspaces/checklists are pre-populated **without you having to run any database commands manually**!
*   Once finished (takes ~1 minute), Vercel will give you a live shareable URL!
