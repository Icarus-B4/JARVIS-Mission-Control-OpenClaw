module.exports = {
  apps: [
    {
      name: 'mission-control-server',
      script: 'server/index.js',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        PORT: Number.parseInt(process.env.PORT || '3000', 10),
        // Use runtime environment variables or .env files; do not hardcode secrets here.
        MISSION_CONTROL_DIR: process.env.MISSION_CONTROL_DIR,
        MC_AUTH_USER: process.env.MC_AUTH_USER,
        MC_AUTH_PASS: process.env.MC_AUTH_PASS,
        MC_AGENT_TOKEN: process.env.MC_AGENT_TOKEN,
        OPENCLAW_GATEWAY_TOKEN: process.env.OPENCLAW_GATEWAY_TOKEN,
        MISSIONDECK_API_KEY: process.env.MISSIONDECK_API_KEY,
        MISSIONDECK_SLUG: process.env.MISSIONDECK_SLUG,
      },
    }
  ]
};
