// Single place to change if any of these ever move.
export const SITE_URL = 'https://pulsepurse.app';
export const APP_URL = 'https://app.pulsepurse.app';
// TODO(Almas): confirm this matches pulse-purse-be's actual deployed host —
// inferred from the app.pulsepurse.app / ppfe naming convention on the VPS.
export const API_URL = 'https://api.pulsepurse.app/api';

// pulse-purse-fe reads ?view=signup on load to jump straight to the signup form.
export const SIGNUP_URL = `${APP_URL}/?view=signup`;
export const LOGIN_URL = APP_URL;

// Public, unauthenticated endpoint — see pulse-purse-be's PublicController.
export const CONTACT_API_URL = `${API_URL}/public/contact`;
// TODO(Almas): placeholder handles/links — swap for the real accounts once they exist.
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/pulsepurse',
  whatsapp: 'https://wa.me/255000000000',
  tiktok: 'https://tiktok.com/@pulsepurse',
};
