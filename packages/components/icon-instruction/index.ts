import type { App } from 'vue';
import _IconInstruction from './icon-instruction.vue';

const IconInstruction = Object.assign(_IconInstruction, {
  install: (app: App) => {
    app.component(_IconInstruction.name, _IconInstruction);
  }
});

export default IconInstruction;