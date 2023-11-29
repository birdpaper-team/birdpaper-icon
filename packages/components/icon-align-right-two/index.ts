import type { App } from 'vue';
import _IconAlignRightTwo from './icon-align-right-two.vue';

const IconAlignRightTwo = Object.assign(_IconAlignRightTwo, {
  install: (app: App) => {
    app.component(_IconAlignRightTwo.name, _IconAlignRightTwo);
  }
});

export default IconAlignRightTwo;