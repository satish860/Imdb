import Header from './components/Header'
import Navigate from './components/Navigate'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-700 text-gray-200'>
        <Header/>
        <Navigate/>

        {children}
        </body>
    </html>
  )
}
