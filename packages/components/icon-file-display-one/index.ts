import type { App } from 'vue';
import _IconFileDisplayOne from './icon-file-display-one.vue';

const IconFileDisplayOne = Object.assign(_IconFileDisplayOne, {
  install: (app: App) => {
    app.component(_IconFileDisplayOne.name, _IconFileDisplayOne);
  }
});

export default IconFileDisplayOne;