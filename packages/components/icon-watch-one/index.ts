import type { App } from 'vue';
import _IconWatchOne from './icon-watch-one.vue';

const IconWatchOne = Object.assign(_IconWatchOne, {
  install: (app: App) => {
    app.component(_IconWatchOne.name, _IconWatchOne);
  }
});

export default IconWatchOne;