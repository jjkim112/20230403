import Date from "./date";
import calendarData from "../calendarData.json";

function Calendar() {
  return (
    <div className="bg-white md:w-[700px] sm:w-[600px] xl:w-[1024px] rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023, 04</div>
      <ul className="grid grid-cols-7 gap-4 ">
        {calendarData.map((v, i) => {
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
}

export default Calendar;
