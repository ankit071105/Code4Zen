/* CodeZen frontend runtime config.
   API: your backend (must end with /api/v1), e.g. 'https://codezen-backend.onrender.com/api/v1'
        Leave empty when the app is served by the backend at /app, or for local dev.
   APK_URL: direct link to your .apk (GitHub Release asset, Google Drive direct link, etc.)
   PLAY_STORE_URL: fill ONLY after the app is live on Google Play (shows the Google Play badge).
   With neither set, the site shows "Android app · Coming soon" — no Play Store branding. */
window.CZ_CONFIG = {
  API: '',
  APK_URL: '',
  PLAY_STORE_URL: '',
};