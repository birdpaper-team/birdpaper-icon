import type { App } from 'vue';
import _IconMeteorLine from './icon-meteor-line.vue';

const IconMeteorLine = Object.assign(_IconMeteorLine, {
  install: (app: App) => {
    app.component(_IconMeteorLine.name, _IconMeteorLine);
  }
});

export default IconMeteorLine;