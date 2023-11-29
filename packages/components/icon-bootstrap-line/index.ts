import type { App } from 'vue';
import _IconBootstrapLine from './icon-bootstrap-line.vue';

const IconBootstrapLine = Object.assign(_IconBootstrapLine, {
  install: (app: App) => {
    app.component(_IconBootstrapLine.name, _IconBootstrapLine);
  }
});

export default IconBootstrapLine;