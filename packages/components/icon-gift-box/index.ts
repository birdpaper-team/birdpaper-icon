import type { App } from 'vue';
import _IconGiftBox from './icon-gift-box.vue';

const IconGiftBox = Object.assign(_IconGiftBox, {
  install: (app: App) => {
    app.component(_IconGiftBox.name, _IconGiftBox);
  }
});

export default IconGiftBox;