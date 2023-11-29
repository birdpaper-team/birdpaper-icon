import type { App } from 'vue';
import _IconBarcodeLine from './icon-barcode-line.vue';

const IconBarcodeLine = Object.assign(_IconBarcodeLine, {
  install: (app: App) => {
    app.component(_IconBarcodeLine.name, _IconBarcodeLine);
  }
});

export default IconBarcodeLine;