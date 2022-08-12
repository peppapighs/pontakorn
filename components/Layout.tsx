import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-100">
      <div className="flex min-h-screen flex-col">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
