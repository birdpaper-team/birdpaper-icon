import type { App } from 'vue';
import _IconFileFailedOne from './icon-file-failed-one.vue';

const IconFileFailedOne = Object.assign(_IconFileFailedOne, {
  install: (app: App) => {
    app.component(_IconFileFailedOne.name, _IconFileFailedOne);
  }
});

export default IconFileFailedOne;