import type { App } from 'vue';
import _IconGhostSmileLine from './icon-ghost-smile-line.vue';

const IconGhostSmileLine = Object.assign(_IconGhostSmileLine, {
  install: (app: App) => {
    app.component(_IconGhostSmileLine.name, _IconGhostSmileLine);
  }
});

export default IconGhostSmileLine;