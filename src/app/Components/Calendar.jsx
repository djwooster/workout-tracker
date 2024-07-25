import { useState } from "react";
import Day from "./Day";

function Calendar() {
  let day = new Date().getDay(); // 6
  let currentDayNumber = new Date().getDate(); // 22

  switch (day) {
    case 0:
      day = "Su";
      break;
    case 1:
      day = "M";
      break;
    case 2:
      day = "T";
      break;
    case 3:
      day = "W";
      break;
    case 4:
      day = "Th";
      break;
    case 5:
      day = "F";
      break;
    case 6:
      day = "Sa";
      break;
  }
  const [activeDay, setActiveDay] = useState(day);

  const handleActiveDay = () => {
    setActiveDay(() => {
      return day;
    });
  };

  return (
    <div className="calendar-container">
      <Day
        onclick={handleActiveDay}
        activeDay={activeDay}
        dayOfWeek="Su"
        currentDayNumber={currentDayNumber - 6}
      />
      <Day
        onclick={handleActiveDay}
        activeDay={activeDay}
        dayOfWeek="M"
        currentDayNumber={currentDayNumber - 5}
      />
      <Day
        onclick={handleActiveDay}
        activeDay={activeDay}
        dayOfWeek="T"
        currentDayNumber={currentDayNumber - 4}
      />
      <Day
        onclick={handleActiveDay}
        activeDay={activeDay}
        dayOfWeek="W"
        currentDayNumber={currentDayNumber - 3}
      />
      <Day
        onclick={handleActiveDay}
        activeDay={activeDay}
        dayOfWeek="Th"
        currentDayNumber={currentDayNumber - 2}
      />
      <Day
        onclick={handleActiveDay}
        activeDay={activeDay}
        dayOfWeek="F"
        currentDayNumber={currentDayNumber - 1}
      />
      <Day
        activeDay={activeDay}
        dayOfWeek="Sa"
        currentDayNumber={currentDayNumber}
      />
    </div>
  );
}

export default Calendar;
