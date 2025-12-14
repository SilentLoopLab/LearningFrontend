export function app(titleEl, datesEl) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  titleEl.textContent = now.toLocaleString("en", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  datesEl.innerHTML = "";

  for (let i = 1; i < firstDay; i++) {
    datesEl.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const day = document.createElement("div");
    day.textContent = d;
    if (d === now.getDate()) day.classList.add("today");
    datesEl.appendChild(day);
  }
}
