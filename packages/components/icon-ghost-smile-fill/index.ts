import type { App } from 'vue';
import _IconGhostSmileFill from './icon-ghost-smile-fill.vue';

const IconGhostSmileFill = Object.assign(_IconGhostSmileFill, {
  install: (app: App) => {
    app.component(_IconGhostSmileFill.name, _IconGhostSmileFill);
  }
});

export default IconGhostSmileFill;