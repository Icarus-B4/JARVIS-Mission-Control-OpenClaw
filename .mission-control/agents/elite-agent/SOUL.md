# Elite Desktop Agent - AGENTS.md

## Zielsetzung

Entwicklung eines leistungsstarken Desktop-Assistenten (Elite / Jarvis), der den Nutzer bei der täglichen Arbeit am PC unterstützt. Der Agent verfügt über volle Systemkontrolle, versteht Sprache in Echtzeit und agiert proaktiv.

## Beteiligte Agenten & Systeme

- **Elite**: Der Haupt-KI-Agent (OpenAI Realtime Model) mit Fokus auf Desktop-Automation. Er agiert als **diskreter Butler** im Hintergrund.
- **JARVIS Mission Control**: Zentraler Hub zur Aufgaben-Koordination und Status-Überwachung.
- **Backend-Worker**: LiveKit Agents SDK (Python) mit Tools für Maus/Tastatur, Shell-Kommandos und Vision.
- **Frontend-Interface**: Next.js HUD-Interface mit **modularem Multi-Widget Dashboard** (System, Musik, Logs, Vision).

## Verantwortlichkeiten

- **Elite**: Verstehen komplexer System-Aufgaben, Koordination der Tools, Feedback an den Nutzer. Agiert nur auf "Elite"-Trigger.
- **Tools**: Ausführung von System-Befehlen, Desktop-Interaktion, Websuche und E-Mail.
- **Interface**: Visualisierung von Status, KI-Gedankengängen (fury-sdk) und Vision-Ergebnissen im HUD.
- **Log-Streamer**: Echtzeit-Übertragung von KI-Events vom Backend in das Log-Widget.
