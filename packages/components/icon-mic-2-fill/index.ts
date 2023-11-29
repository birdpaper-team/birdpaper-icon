import type { App } from 'vue';
import _IconMic2Fill from './icon-mic-2-fill.vue';

const IconMic2Fill = Object.assign(_IconMic2Fill, {
  install: (app: App) => {
    app.component(_IconMic2Fill.name, _IconMic2Fill);
  }
});

export default IconMic2Fill;