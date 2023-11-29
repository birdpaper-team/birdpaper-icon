import type { App } from 'vue';
import _Icon24HoursLine from './icon-24-hours-line.vue';

const Icon24HoursLine = Object.assign(_Icon24HoursLine, {
  install: (app: App) => {
    app.component(_Icon24HoursLine.name, _Icon24HoursLine);
  }
});

export default Icon24HoursLine;