import type { App } from 'vue';
import _IconWritingFluently from './icon-writing-fluently.vue';

const IconWritingFluently = Object.assign(_IconWritingFluently, {
  install: (app: App) => {
    app.component(_IconWritingFluently.name, _IconWritingFluently);
  }
});

export default IconWritingFluently;