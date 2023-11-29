import type { App } from 'vue';
import _IconAlignLeftOne from './icon-align-left-one.vue';

const IconAlignLeftOne = Object.assign(_IconAlignLeftOne, {
  install: (app: App) => {
    app.component(_IconAlignLeftOne.name, _IconAlignLeftOne);
  }
});

export default IconAlignLeftOne;