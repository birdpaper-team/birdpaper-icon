import type { App } from 'vue';
import _IconFlaskLine from './icon-flask-line.vue';

const IconFlaskLine = Object.assign(_IconFlaskLine, {
  install: (app: App) => {
    app.component(_IconFlaskLine.name, _IconFlaskLine);
  }
});

export default IconFlaskLine;