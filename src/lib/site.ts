// Single place to change once the domain + deployed app/API URLs are final.
// TODO(Almas): swap SITE_URL for the real registered domain, APP_URL for
// wherever pulse-purse-fe ends up deployed, and API_URL for pulse-purse-be.
export const SITE_URL = 'https://pulsepurse.com';
export const APP_URL = 'https://app.pulsepurse.com';
export const API_URL = 'https://api.pulsepurse.com/api';

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
