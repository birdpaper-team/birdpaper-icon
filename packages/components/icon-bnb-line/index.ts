import type { App } from 'vue';
import _IconBnbLine from './icon-bnb-line.vue';

const IconBnbLine = Object.assign(_IconBnbLine, {
  install: (app: App) => {
    app.component(_IconBnbLine.name, _IconBnbLine);
  }
});

export default IconBnbLine;