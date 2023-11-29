import type { App } from 'vue';
import _IconFocus3Fill from './icon-focus-3-fill.vue';

const IconFocus3Fill = Object.assign(_IconFocus3Fill, {
  install: (app: App) => {
    app.component(_IconFocus3Fill.name, _IconFocus3Fill);
  }
});

export default IconFocus3Fill;