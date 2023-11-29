import type { App } from 'vue';
import _IconAmazonLine from './icon-amazon-line.vue';

const IconAmazonLine = Object.assign(_IconAmazonLine, {
  install: (app: App) => {
    app.component(_IconAmazonLine.name, _IconAmazonLine);
  }
});

export default IconAmazonLine;