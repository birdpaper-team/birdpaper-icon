import type { App } from 'vue';
import _IconAlignTextMiddleOne from './icon-align-text-middle-one.vue';

const IconAlignTextMiddleOne = Object.assign(_IconAlignTextMiddleOne, {
  install: (app: App) => {
    app.component(_IconAlignTextMiddleOne.name, _IconAlignTextMiddleOne);
  }
});

export default IconAlignTextMiddleOne;