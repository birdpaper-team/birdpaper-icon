import type { App } from 'vue';
import _IconCalendarThirtyTwo from './icon-calendar-thirty-two.vue';

const IconCalendarThirtyTwo = Object.assign(_IconCalendarThirtyTwo, {
  install: (app: App) => {
    app.component(_IconCalendarThirtyTwo.name, _IconCalendarThirtyTwo);
  }
});

export default IconCalendarThirtyTwo;