import { Metadata } from "next";
import { Poppins } from "next/font/google";
import './globals.css';


export const metadata: Metadata = {  
  title: 'Blog Test | Projeto Teste',    
  description: 'Um blog sobre desenvolvimento de software com Next.js e boas práticas.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Blog'],
};

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
