import type { App } from 'vue';
import _IconMaskTwo from './icon-mask-two.vue';

const IconMaskTwo = Object.assign(_IconMaskTwo, {
  install: (app: App) => {
    app.component(_IconMaskTwo.name, _IconMaskTwo);
  }
});

export default IconMaskTwo;