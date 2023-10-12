import Navigation from "../components/nav/Navigation"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Navigation>
      {children}
    </Navigation>
  )
}

export default HomeLayout