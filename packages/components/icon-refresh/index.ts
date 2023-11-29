import type { App } from 'vue';
import _IconRefresh from './icon-refresh.vue';

const IconRefresh = Object.assign(_IconRefresh, {
  install: (app: App) => {
    app.component(_IconRefresh.name, _IconRefresh);
  }
});

export default IconRefresh;