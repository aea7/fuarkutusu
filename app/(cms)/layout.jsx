import './globals-cms.css'

export default function CMSLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body id="outstatic">{children}</body>
    </html>
  )
}
