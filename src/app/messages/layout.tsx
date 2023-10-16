import Navigation from "../components/nav/Navigation"

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Navigation>
      {children}
    </Navigation>
  )
}

export default MessagesLayout