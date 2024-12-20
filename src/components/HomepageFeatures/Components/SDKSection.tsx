import BackendCode from "./BackendCodeBlock";
import FrontendCode from "./FrontendCodeBlock";
import { useState } from "react";

const SDKSection = () => {
  const [selectedTab, setSelectedTab] = useState("backendSDK");

  return (
    <div className="sectionB section-mobile mx-auto flex max-w-screen-3xl flex-col items-center justify-between gap-5 bg-white px-8 py-8 lg:flex lg:flex-row lg:py-20">
      <div className="flex-grow py-0">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Integration is quick and easy with the Backend and Frontend SDKs
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100"></p>
      </div>
      <div className="my-10 h-full w-full lg:w-[800px] 4xl:w-[60%]">
        <div className="text-baseline hidden flex-row justify-center pb-1 text-center lg:flex">
          <div
            className={`${selectedTab === "backendSDK" ? "selected" : ""} mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("backendSDK")}
          >
            Backend SDK
          </div>
          <div
            className={`${selectedTab === "frontendSDK" ? "selected" : ""} mx-auto cursor-pointer`}
            onClick={() => setSelectedTab("frontendSDK")}
          >
            Frontend SDK
          </div>
        </div>
        {selectedTab === "frontendSDK" ? (
          <FrontendCode></FrontendCode>
        ) : (
          <BackendCode></BackendCode>
        )}
      </div>
    </div>
  );
};

export default SDKSection;
