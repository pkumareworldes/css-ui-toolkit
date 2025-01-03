import type { StorybookConfig } from "@storybook/react-vite";

// const config: StorybookConfig = {
//   stories: ["../src/**/__docs__/*.stories.tsx", "../src/**/__docs__/*.mdx"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//     "@storybook/preset-create-react-app"
//   ],
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
//export default config;

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // core: {
  //   builder: "@storybook/builder-webpack5",
  // },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      allowSyntheticDefaultImports: false, // speeds up storybook build time
      esModuleInterop: false, // speeds up storybook build time
      shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
      shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};

//

