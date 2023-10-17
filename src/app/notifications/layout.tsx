import Navigation from "../components/nav/Navigation"

const NotificationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Navigation>
      {children}
    </Navigation>
  )
}

export default NotificationsLayout