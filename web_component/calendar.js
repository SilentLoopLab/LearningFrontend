import { app } from "./app.js";
export function alen_calendar() {
  const months = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const calendar = document.createElement("div");
  calendar.classList.add("calendar");

  const title = document.createElement("h3");
  title.classList.add("month");

  const days = document.createElement("div");
  days.classList.add("days");

  months.forEach((d) => {
    const el = document.createElement("div");
    el.textContent = d;
    days.appendChild(el);
  });

  const dates = document.createElement("div");
  dates.classList.add("dates");

  calendar.append(title, days, dates);

  app(title, dates);

  return calendar;
}
