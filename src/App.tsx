import './App.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

function App() {
  return (
    <>
      <h1>Tarefas Diarias</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView='dayGridMonth'
        navLinks={true}
        selectable={true}
        editable={true}
        events={[
          { title: 'Ler', date: '2024-02-01' },
          { title: 'Estudar', date: '2024-02-02' },
        ]}
      />
    </>
  );
}

export default App;
