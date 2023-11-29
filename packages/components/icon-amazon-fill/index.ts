import type { App } from 'vue';
import _IconAmazonFill from './icon-amazon-fill.vue';

const IconAmazonFill = Object.assign(_IconAmazonFill, {
  install: (app: App) => {
    app.component(_IconAmazonFill.name, _IconAmazonFill);
  }
});

export default IconAmazonFill;