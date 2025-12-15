import { Poppins } from "next/font/google";
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
