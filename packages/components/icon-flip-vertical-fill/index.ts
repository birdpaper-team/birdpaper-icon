import type { App } from 'vue';
import _IconFlipVerticalFill from './icon-flip-vertical-fill.vue';

const IconFlipVerticalFill = Object.assign(_IconFlipVerticalFill, {
  install: (app: App) => {
    app.component(_IconFlipVerticalFill.name, _IconFlipVerticalFill);
  }
});

export default IconFlipVerticalFill;