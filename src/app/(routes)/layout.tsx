import "./globals.css"
import { inter } from "../fonts"
import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"

export const metadata = {
  title: "Monica Zarate - Web Designer and Developer",
  description: "Monica Zarate is a Vancouver BC-based Web Designer and Developer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
