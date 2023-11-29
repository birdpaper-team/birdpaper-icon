import type { App } from 'vue';
import _IconBarricadeLine from './icon-barricade-line.vue';

const IconBarricadeLine = Object.assign(_IconBarricadeLine, {
  install: (app: App) => {
    app.component(_IconBarricadeLine.name, _IconBarricadeLine);
  }
});

export default IconBarricadeLine;