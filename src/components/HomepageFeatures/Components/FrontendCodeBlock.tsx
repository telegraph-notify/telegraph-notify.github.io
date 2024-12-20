import CodeBlock from "@theme/CodeBlock";

const frontendSDK = `// Import and mount the notification component
import { TelegraphInbox } from "@telegraph-notify/frontend-sdk";

<App>
  <TelegraphInbox
    user_id={<USER_ID>} // Unique identifier of the logged in user
    userHash={<USER_HMAC>} // Hashed user_id
    websocketUrl={<WEBSOCKET_GATEWAY_URL>} // WebSocket Gateway URL
  />
</App>











`;

function FrontendCode() {
  return (
    <CodeBlock
      language="jsx"
      className="shadow-l overflow-auto overflow-x-auto rounded border-2 align-top text-sm shadow-[0_0_10px_grey] dark:shadow-none md:text-base xl:w-[700px]"
    >
      {frontendSDK}
    </CodeBlock>
  );
}

export default FrontendCode;
