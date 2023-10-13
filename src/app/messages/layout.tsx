import Navigation from "../components/nav/Navigation"
import MessagePanel from "./_components/MessagePanel"

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Navigation>
      <MessagePanel />
      {children}
    </Navigation>
  )
}

export default MessagesLayout