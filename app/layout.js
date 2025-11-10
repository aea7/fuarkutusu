import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata = {
  title: 'Fuar Kutusu',
  description: 'Your trade show companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
