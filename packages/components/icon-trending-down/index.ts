import type { App } from 'vue';
import _IconTrendingDown from './icon-trending-down.vue';

const IconTrendingDown = Object.assign(_IconTrendingDown, {
  install: (app: App) => {
    app.component(_IconTrendingDown.name, _IconTrendingDown);
  }
});

export default IconTrendingDown;