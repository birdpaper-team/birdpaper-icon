import type { App } from 'vue';
import _IconHeavyMetal from './icon-heavy-metal.vue';

const IconHeavyMetal = Object.assign(_IconHeavyMetal, {
  install: (app: App) => {
    app.component(_IconHeavyMetal.name, _IconHeavyMetal);
  }
});

export default IconHeavyMetal;