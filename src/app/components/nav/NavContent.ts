import { IoChatbubbleOutline, IoChatbubbleSharp, IoHomeOutline, IoHomeSharp, IoNotificationsOutline, IoNotificationsSharp, IoSearchOutline, IoSearchSharp } from 'react-icons/io5'

export const NavContent = [
  {
    icon: IoHomeOutline,
    filledIcon: IoHomeSharp,
    label: "Home",
    slug: "/home"
  },
  {
    icon: IoChatbubbleOutline,
    filledIcon: IoChatbubbleSharp,
    label: "Messages",
    slug: "/messages"
  },
  {
    icon: IoNotificationsOutline,
    filledIcon: IoNotificationsSharp,
    label: "Notifications",
    slug: "/notifications"
  },
  {
    icon: IoSearchOutline,
    filledIcon: IoSearchSharp,
    label: "Search",
    slug: "/search"
  },
]
