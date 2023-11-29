import type { App } from 'vue';
import _IconFileDamageLine from './icon-file-damage-line.vue';

const IconFileDamageLine = Object.assign(_IconFileDamageLine, {
  install: (app: App) => {
    app.component(_IconFileDamageLine.name, _IconFileDamageLine);
  }
});

export default IconFileDamageLine;