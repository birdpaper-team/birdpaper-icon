import type { App } from 'vue';
import _IconBackgroundColor from './icon-background-color.vue';

const IconBackgroundColor = Object.assign(_IconBackgroundColor, {
  install: (app: App) => {
    app.component(_IconBackgroundColor.name, _IconBackgroundColor);
  }
});

export default IconBackgroundColor;