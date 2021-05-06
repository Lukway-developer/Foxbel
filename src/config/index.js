const config = {
  endpoint: 'https://accounts.spotify.com/authorize',
  redirect: 'http://localhost:3000/',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-top-read',
    'user-library-read',
    'streaming'
  ],
  clientId: process.env.CLI_ID || 'f4c7bb5cbfcb490a8a518ca2847482d6',
  clientSecret: process.env.CLI_SECRET || '171d59dd8e6543c29ff8f76646f039c3',
  clientPremiumToken: process.env.CLI_PREMIUM_TOKEN || 'BQCh88UsCvUvmfvEQUhziOGyHDoQ2NHD4TespjY69Y5SBWs4jJHPMKFysVIZOingUp27yr6pAPmOJGxisnfgm2MuXyXWbKfJiC-Eyz7o2X8AElkjCyPWCwSI_wDBS8RiPoiRt0AuqYRFwXFpNl8GXwGDH_RN16aSk-bk'
}

export default config
