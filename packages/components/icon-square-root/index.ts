import type { App } from 'vue';
import _IconSquareRoot from './icon-square-root.vue';

const IconSquareRoot = Object.assign(_IconSquareRoot, {
  install: (app: App) => {
    app.component(_IconSquareRoot.name, _IconSquareRoot);
  }
});

export default IconSquareRoot;