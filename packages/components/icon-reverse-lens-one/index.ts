import type { App } from 'vue';
import _IconReverseLensOne from './icon-reverse-lens-one.vue';

const IconReverseLensOne = Object.assign(_IconReverseLensOne, {
  install: (app: App) => {
    app.component(_IconReverseLensOne.name, _IconReverseLensOne);
  }
});

export default IconReverseLensOne;