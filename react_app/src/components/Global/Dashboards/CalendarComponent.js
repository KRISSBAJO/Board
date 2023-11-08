import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="container flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg mx-auto w-full md:max-w-2xl lg:max-w-3xl">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-xl font-bold tracking-wide border-b-2 pb-2 bg-gradient-to-r from-gray-400 to-blue-100 text-black p-2 rounded-lg shadow-md">Calendar</h2>
      </div>
      <Calendar
        className="shadow-inner border text-sm border-gray-200 rounded-md bg-white w-full"
        calendarType="US"
        tileClassName="text-black hover:bg-blue-300 hover:text-white p-2 rounded transition duration-200 border border-gray-200"
        tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <div className="bg-red-200 rounded-full h-2 w-2 inline-block mr-1"></div> : null}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary text-sm">Today</button>
      </div>
    </div>
  );
};

export default CalendarComponent;
