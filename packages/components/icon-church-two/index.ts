import type { App } from 'vue';
import _IconChurchTwo from './icon-church-two.vue';

const IconChurchTwo = Object.assign(_IconChurchTwo, {
  install: (app: App) => {
    app.component(_IconChurchTwo.name, _IconChurchTwo);
  }
});

export default IconChurchTwo;