import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Button } from "../ui/button"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function DeckManager() {
  return (
    <aside className=" w-[15%] h-full bg-white p-4 z-10">
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Button asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
