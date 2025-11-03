import './globals-cms.css'

export const metadata = {
  title: 'SetTravel UK - CMS',
  description: 'Content Management System',
}

export default function CMSLayout({ children }) {
  return (
    <div id="outstatic" className="min-h-screen">
      {children}
    </div>
  )
}
