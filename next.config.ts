import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        EMAIL: 'xxx@xxx.com',
        PHONE: 'xxx-xxx-xxxx',
        BRAND: 'German Shepherd Dog Club of Greater New Haven',
        URL: 'gsdcgnh.vercel.app',
        SMTP_PASSWORD: 'L@ndino11',
        SMTP_FROM: 'ricky@landino.dev',
        SMTP_HOST: 'smtp.office365.com',
        SMTP_PORT: "587",
        SMTP_USER: 'Ricky',
        TO_EMAIL: process.env.NODE_ENV === 'production' ? 'ricky@landino.dev' : 'ricky@landino.dev',
    }
  /* config options here */
};

export default nextConfig;
