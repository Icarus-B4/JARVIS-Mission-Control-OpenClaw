# Elite Desktop Agent - GEMINI.md

## Instruktionen für KI-Assistenten

Du arbeitest an dem "Elite Desktop Agent" (Jarvis-Edition). Beachte folgende Punkte:

- **Aesthetik**: Halte dich an das HUD-Design (Cyan, Mesh-Grid, Glassmorphism). Nutze für neue Widgets die `framer-motion` Spring-Animationen.
- **Redseligkeit**: Folge dem **Ultra-Strict Mode**. Antworte extrem präzise, diskret und nur auf direkte Ansprache. Ignoriere Hintergrundgeräusche.
- **System-Tools**: Achte darauf, dass neue Tools in `tools.py` via `emit_log` Events an das Dashboard streamen.
- **Latenz**: Nutze das OpenAI Realtime Model optimal und vermeide unnötige `say()` Aufrufe.
- **Mission Control**: Integriere Status-Updates für das Dashboard und die Mission Control API.

## Bekannte Muster

- **Desktop-Tools**: Werden via `pyautogui` und `subprocess` in `tools.py` umgesetzt. Jedes Tool sollte ein `emit_log(context, "tool_call", ...)` auslösen.
- **HUD-Komponenten**: Befinden sich in `frontend/components/dashboard`. Neue Widgets müssen im `WidgetManager` registriert werden.
- **Vision**: Frames werden als Base64 vom Frontend gesendet und vom Agenten via GPT-4o Vision analysiert.
