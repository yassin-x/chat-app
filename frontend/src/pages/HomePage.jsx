import ChatContainer from "../components/ChatContainer"
import NoChatSelected from "../components/NoChatSelected"
import Sidebar from "../components/Sidebar"
import { useChatStore } from "../store/useChatStore"

export default function HomePage() {
  const { selectedUser } = useChatStore()
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center px-4 pt-20">
          <div className="w-full max-w-6xl rounded-lg shadow-lg bg-base-100 h-[calc(100vh-8rem)]">
            <div className="flex h-full overflow-hidden rounded-lg">
              <Sidebar />
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
      </div>
    </div>
  )
}
