import type { App } from 'vue';
import _IconPauseOne from './icon-pause-one.vue';

const IconPauseOne = Object.assign(_IconPauseOne, {
  install: (app: App) => {
    app.component(_IconPauseOne.name, _IconPauseOne);
  }
});

export default IconPauseOne;