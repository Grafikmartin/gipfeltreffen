// Element, in dem der Countdown angezeigt wird
const countdownElement = document.getElementById("countdown");

// Ziel-Datum und -Uhrzeit: 11.02.2025 um 18:00 Uhr
const targetDate = new Date("February 11, 2025 18:00:00").getTime();

function updateCountdown() {
  // Aktuelle Zeit
  const now = new Date().getTime();

  // Zeitdifferenz zwischen Zielzeitpunkt und jetzt
  const distance = targetDate - now;

  // Berechnung in Tage, Stunden, Minuten, Sekunden
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Überprüfen, ob das Datum bereits überschritten ist
  if (distance < 0) {
    countdownElement.innerHTML = "Der Countdown ist abgelaufen!";
  } else {
    /* 
       Jeweils einen Span pro Zeiteinheit, 
       damit man den Abstand und Stil besser kontrollieren kann. 
    */
    countdownElement.innerHTML = `
      <span class="time-part">
        <span class="number">${days}</span>T
      </span>
      <span class="time-part">
        <span class="number">${hours}</span>Std
      </span>
      <span class="time-part">
        <span class="number">${minutes}</span>Min
      </span>
      <span class="time-part">
        <span class="number">${seconds}</span>Sek
      </span>
    `;
  }
}

// Countdown sofort einmal berechnen und dann jede Sekunde aktualisieren
updateCountdown();
setInterval(updateCountdown, 1000);
