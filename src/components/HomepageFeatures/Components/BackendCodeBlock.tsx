import CodeBlock from "@theme/CodeBlock";

const backendSDK = `import Telegraph from "@telegraph-notify/backend-sdk";

// Enter secret key and HTTP Gateway URL
const telegraph = new Telegraph(secretKey, httpGateway);

// Send a Notification
telegraph.send({
  user_id,
  channels: {
    in_app?: {
      message
    },
    email?: {
      subject,
      message,
    },
    slack?: {
      message,
    },
  },
});
`;

function BackendCode() {
  return (
    <CodeBlock
      language="ts"
      className="shadow-l overflow-auto overflow-x-auto rounded border-2 align-top text-sm shadow-[0_0_10px_grey] dark:shadow-none md:text-base xl:w-[700px]"
    >
      {backendSDK}
    </CodeBlock>
  );
}

export default BackendCode;
