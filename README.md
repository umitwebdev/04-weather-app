# 04-weather-app

Interaktive Wetter-App mit Live-Daten, 5-Tage-Forecast, Temperatur- & Regen-Charts und Städte-Fakten.

**Live:** [umitwebdev.github.io/04-weather-app](https://umitwebdev.github.io/04-weather-app)

## Features
- Echtzeit-Wetterdaten via OpenWeatherMap API (Temperatur, gefühlt, Beschreibung, Feuchtigkeit, Wind)
- Min/Max Temperatur für aktuellen Tag und Forecast
- 5-Day Forecast mit klickbaren Tages-Karten
- Temperaturverlauf-Chart (Chart.js Liniendiagramm) pro Tag
- Regenwahrscheinlichkeit-Chart (Balkendiagramm) pro Tag
- Max. Regenwahrscheinlichkeit pro Tag in Forecast-Karten
- Geolocation API – Wetter für aktuellen Standort
- Autocomplete – Städtevorschläge beim Tippen (OWM Geocoding API)
- Wikipedia-Fakten mit Vorlese-Funktion (Web Speech API)
- Eigene Nerd-Fakten für 61 Weltstädte
- Animierte schwebende Städte-Namen als Hintergrund-Dekoration
- Klickbare Städte-Labels laden direkt das Wetter
- Zufällige Stadt beim Laden der Seite
- Responsive Design (Viewport Meta, Mobile-Layout)
- Wetter-Icon als Favicon

## Tech-Stack
- HTML5
- CSS3 (Gradient, Glassmorphism, Media Queries, CSS Animations)
- Vanilla JavaScript (Fetch API, async/await, JSON, Geolocation, Web Speech API)
- Chart.js (Linien- und Balkendiagramme)
- OpenWeatherMap API (Weather, Forecast, Geocoding)
- Wikipedia REST API

## Dateien
- `index.html` – Struktur
- `style.css` – Styling + Animationen
- `script.js` – App-Logik
- `stadtFakten.js` – 61 Städte mit Nerd-Fakten

## Setup
1. API-Key von openweathermap.org holen (kostenlos)
2. In script.js: `const API_KEY = "dein-key"`
3. index.html im Browser öffnen oder via Live Server starten