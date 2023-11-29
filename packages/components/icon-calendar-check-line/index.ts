import type { App } from 'vue';
import _IconCalendarCheckLine from './icon-calendar-check-line.vue';

const IconCalendarCheckLine = Object.assign(_IconCalendarCheckLine, {
  install: (app: App) => {
    app.component(_IconCalendarCheckLine.name, _IconCalendarCheckLine);
  }
});

export default IconCalendarCheckLine;