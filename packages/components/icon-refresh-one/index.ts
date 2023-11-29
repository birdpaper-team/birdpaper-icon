import type { App } from 'vue';
import _IconRefreshOne from './icon-refresh-one.vue';

const IconRefreshOne = Object.assign(_IconRefreshOne, {
  install: (app: App) => {
    app.component(_IconRefreshOne.name, _IconRefreshOne);
  }
});

export default IconRefreshOne;