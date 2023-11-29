import type { App } from 'vue';
import _IconMentalHealthLine from './icon-mental-health-line.vue';

const IconMentalHealthLine = Object.assign(_IconMentalHealthLine, {
  install: (app: App) => {
    app.component(_IconMentalHealthLine.name, _IconMentalHealthLine);
  }
});

export default IconMentalHealthLine;