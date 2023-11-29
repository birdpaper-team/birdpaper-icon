import type { App } from 'vue';
import _IconSpanner from './icon-spanner.vue';

const IconSpanner = Object.assign(_IconSpanner, {
  install: (app: App) => {
    app.component(_IconSpanner.name, _IconSpanner);
  }
});

export default IconSpanner;