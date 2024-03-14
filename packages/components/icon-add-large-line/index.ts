import type { App } from 'vue';
import _IconAddLargeLine from './icon-add-large-line.vue';

const IconAddLargeLine = Object.assign(_IconAddLargeLine, {
  install: (app: App) => {
    app.component(_IconAddLargeLine.name, _IconAddLargeLine);
  }
});

export default IconAddLargeLine;