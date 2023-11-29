import type { App } from 'vue';
import _IconCreative from './icon-creative.vue';

const IconCreative = Object.assign(_IconCreative, {
  install: (app: App) => {
    app.component(_IconCreative.name, _IconCreative);
  }
});

export default IconCreative;