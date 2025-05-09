import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PayTrack | Employee Salary Management',
  description: 'Modern employee salary tracking application',
  icons: [
    {rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png'},
    {rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png'},
    {rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png'},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
