import { OptimizeOptions } from "svgo";

const options: OptimizeOptions = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    "removeStyleElement",
    "removeScriptElement",
    "removeDimensions",
    {
      name: "removeAttrs",
      params: {
        attrs: ["class", "style"],
      },
    },
    {
      name: "addAttributesToSVGElement",
      // @ts-ignore
      params: {
        attributes: [
          { ":class": "iconClass" },
          { ":style": "innerStyle" },
          { ":fill": "fill" },
          { "@click": "onClick" },
        ],
      },
    },
  ],
};

export default options;
