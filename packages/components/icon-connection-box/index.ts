import type { App } from 'vue';
import _IconConnectionBox from './icon-connection-box.vue';

const IconConnectionBox = Object.assign(_IconConnectionBox, {
  install: (app: App) => {
    app.component(_IconConnectionBox.name, _IconConnectionBox);
  }
});

export default IconConnectionBox;