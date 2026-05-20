# Mission Control Production Setup

Diese Anleitung ist fuer einen stabilen Self-Hosted Betrieb gedacht (Linux/Windows mit Node.js 18+).

## 1) Abhaengigkeiten installieren

```bash
cd mission-control
yarn install
yarn --cwd server install
```

## 2) Initialisieren (ohne Demo-Daten)

```bash
./scripts/init-mission-control.sh --production
```

## 3) Umgebungsvariablen setzen

`cp .env.example .env` und mindestens folgende Werte setzen:

- `NODE_ENV=production`
- `PORT=3000`
- `MISSION_CONTROL_DIR` (Pfad zur `.mission-control` Datenstruktur)
- `MC_AUTH_USER` + `MC_AUTH_PASS` (empfohlen fuer geschuetzten Dashboard-Zugang)
- optional: `CORS_ORIGIN` (kommagetrennte Allowlist fuer Browser-Urspruenge)

Wichtig: Keine Secrets in `ecosystem.config.cjs` hardcoden.

## 4) Starten

Direkt:

```bash
yarn --cwd server start
```

Mit PM2:

```bash
pm2 start ecosystem.config.cjs
pm2 save
```

## 5) Smoke-Checks

```bash
curl http://localhost:3000/api/healthz
curl http://localhost:3000/api/readyz
```

`healthz` prueft Liveness, `readyz` prueft Daten-/Dashboard-Pfade.

## 6) Betriebshinweise

- Fuer Updates vorab Backup ausfuehren: `./scripts/safe-deploy.sh --backup`
- Bei CORS im Production-Modus ohne `CORS_ORIGIN` sind standardmaessig nur lokale Origins erlaubt.
- Logs laufen strukturiert ueber `pino`; Log-Level per `LOG_LEVEL` setzen.
