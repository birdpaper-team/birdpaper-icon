import type { App } from 'vue';
import _IconEqualLine from './icon-equal-line.vue';

const IconEqualLine = Object.assign(_IconEqualLine, {
  install: (app: App) => {
    app.component(_IconEqualLine.name, _IconEqualLine);
  }
});

export default IconEqualLine;