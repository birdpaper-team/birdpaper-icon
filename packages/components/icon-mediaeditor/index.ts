import type { App } from 'vue';
import _IconMediaeditor from './icon-mediaeditor.vue';

const IconMediaeditor = Object.assign(_IconMediaeditor, {
  install: (app: App) => {
    app.component(_IconMediaeditor.name, _IconMediaeditor);
  }
});

export default IconMediaeditor;