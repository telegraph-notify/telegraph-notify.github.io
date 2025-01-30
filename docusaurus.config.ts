import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Telegraph",
  tagline: "Telegraph",
  favicon: "/img/favicon32.png",

  // Set the production url of your site here
  url: "https://telegraph-notify.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "telegraph-notify", // Usually your GitHub org/user name.
  projectName: "telegraph-notify.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo_mustard.png",
    navbar: {
      // title: "Telegraph",
      logo: {
        alt: "Telegraph Logo",
        src: "img/logo_mustard.png",
      },
      items: [
        { to: "/case-study", label: "Case Study", position: "right" },
        {
          to: "/team",
          label: "Team",
          position: "right",
        },
        {
          href: "https://github.com/telegraph-notify",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Case Study",
              to: "case-study",
            },
            {
              label: "Team",
              to: "team",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/telegraph-notify",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Telegraph`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
      },
    },
  ],
  scripts: [
    { src: "https://unpkg.com/flowbite/dist/flowbite.min.js", async: true },
  ],
};

export default config;
