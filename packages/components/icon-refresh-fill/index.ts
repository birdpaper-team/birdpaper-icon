import type { App } from 'vue';
import _IconRefreshFill from './icon-refresh-fill.vue';

const IconRefreshFill = Object.assign(_IconRefreshFill, {
  install: (app: App) => {
    app.component(_IconRefreshFill.name, _IconRefreshFill);
  }
});

export default IconRefreshFill;