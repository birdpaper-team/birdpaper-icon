import type { App } from 'vue';
import _IconHolySword from './icon-holy-sword.vue';

const IconHolySword = Object.assign(_IconHolySword, {
  install: (app: App) => {
    app.component(_IconHolySword.name, _IconHolySword);
  }
});

export default IconHolySword;