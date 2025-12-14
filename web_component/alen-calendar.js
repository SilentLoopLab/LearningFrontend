import { alen_calendar } from "./calendar.js";

class AlenCalendar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "";
    this.appendChild(alen_calendar());
  }
}

customElements.define("alen-calendar", AlenCalendar);