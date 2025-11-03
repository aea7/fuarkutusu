export const metadata = {
  title: 'SetTravel UK',
  description: 'Your travel companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
