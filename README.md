# 04-weather-app

Wetter-App mit Live-Daten von OpenWeatherMap.

**Live:** [umitwebdev.github.io/04-weather-app](https://umitwebdev.github.io/04-weather-app)

## Features
- Echtzeit-Wetterdaten via OpenWeatherMap API
- Temperatur + gefühlte Temperatur (gerundet)
- Wetter-Icon (tag/nacht-sensitiv)
- Luftfeuchtigkeit + Windgeschwindigkeit
- 5-Day Forecast mit Wochentag, Icon und Temperatur
- Fehlerbehandlung: leeres Feld + Stadt nicht gefunden
- Responsive Design (Mobile + Desktop)

## Tech-Stack
- HTML5
- CSS3
- Vanilla JavaScript (Fetch API, async/await, JSON)

## Setup
1. API-Key von openweathermap.org holen (kostenlos)
2. In script.js: `const API_KEY = "dein-key"`
3. index.html im Browser öffnen oder via Live Server starten