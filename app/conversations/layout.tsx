import { ReactNode } from "react";
import getConversations from "../actions/getConversation";
import getUser from "../actions/getUser";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUser();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
