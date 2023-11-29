import type { App } from 'vue';
import _IconTextStyle from './icon-text-style.vue';

const IconTextStyle = Object.assign(_IconTextStyle, {
  install: (app: App) => {
    app.component(_IconTextStyle.name, _IconTextStyle);
  }
});

export default IconTextStyle;