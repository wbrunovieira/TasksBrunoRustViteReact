import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl: HTMLElement = document.getElementById('calendar')!;

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
    // options here
  });

  calendar.render();
});
