import type { App } from 'vue';
import _IconAlignTextLeftOne from './icon-align-text-left-one.vue';

const IconAlignTextLeftOne = Object.assign(_IconAlignTextLeftOne, {
  install: (app: App) => {
    app.component(_IconAlignTextLeftOne.name, _IconAlignTextLeftOne);
  }
});

export default IconAlignTextLeftOne;