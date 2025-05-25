import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import UploadPanel from "@/components/UploadPanel";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-black text-white">
        <div className="p-4 border-b border-zinc-800">
          <h2 className="text-2xl font-semibold">DarkGPT Interface</h2>
        </div>
        <ChatWindow />
        <UploadPanel />
      </div>
    </main>
  );
}

