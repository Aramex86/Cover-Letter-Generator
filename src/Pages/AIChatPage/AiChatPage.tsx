import { AiChat } from "../../Features";
import { Layout } from "../../Shared/Molecules";

export default function AiChatPage() {
  return (
    <Layout styles={{ display: "flex", gap: 20, flexDirection: "row" }}>
      <AiChat />
    </Layout>
  );
}
