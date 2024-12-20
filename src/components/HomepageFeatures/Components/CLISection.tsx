const CLISection = () => {
  return (
    <div className="bg-gray-100 dark:bg-componentDarkMode">
      <div className="section-mobile sectionA mx-auto flex max-w-screen-3xl flex-col-reverse place-items-center justify-between gap-5 bg-gray-100 px-8 py-8 lg:flex-row lg:py-20">
        <div className="shadow-l my-10 max-w-full bg-transparent 4xl:w-[60%]">
          <img
            className="mx-auto my-0 rounded-lg shadow-[0_0_10px_grey] dark:shadow-none"
            src="/vid/telegraph_deploy.gif"
            alt="CLI demo"
          />
        </div>
        <div className="flex-grow text-left">
          <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
            Deploy to Amazon Web Services using Telegraph's CLI
          </h1>
          <div className="icon_container">
            <img src="/img/aws_icon.svg" width="10%"></img>
            <img src="/img/cdk_icon.png" width="10%"></img>
            <img src="/img/typescript_icon.svg" width="10%"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLISection;
