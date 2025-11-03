import './globals-cms.css'

export const metadata = {
  title: 'SetTravel UK - CMS',
  description: 'Content Management System',
}

export default function CMSLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body id="outstatic" className="m-0 p-0" style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
