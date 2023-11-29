import type { App } from 'vue';
import _IconBox from './icon-box.vue';

const IconBox = Object.assign(_IconBox, {
  install: (app: App) => {
    app.component(_IconBox.name, _IconBox);
  }
});

export default IconBox;