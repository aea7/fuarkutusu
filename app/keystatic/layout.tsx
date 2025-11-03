export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
