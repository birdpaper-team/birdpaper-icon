import type { App } from 'vue';
import _IconPlayReverseMiniFill from './icon-play-reverse-mini-fill.vue';

const IconPlayReverseMiniFill = Object.assign(_IconPlayReverseMiniFill, {
  install: (app: App) => {
    app.component(_IconPlayReverseMiniFill.name, _IconPlayReverseMiniFill);
  }
});

export default IconPlayReverseMiniFill;