export default function CMSLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body id="outstatic">{children}</body>
    </html>
  )
}
