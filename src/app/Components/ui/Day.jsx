function Day({ dayOfWeek, currentDayNumber, activeDay, onclick }) {
  return (
    <div>
      <div onClick={onclick} className="day-container">
        <p className={activeDay === dayOfWeek ? "day-active" : "day"}>
          {dayOfWeek}
        </p>
        <div
          className={
            activeDay === dayOfWeek
              ? "number-container-active"
              : "number-container"
          }
        >
          <p className={activeDay === dayOfWeek ? "number-active" : "number"}>
            {currentDayNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Day;
