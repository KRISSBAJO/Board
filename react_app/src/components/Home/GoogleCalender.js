// Import the Google APIs client library.
import { google } from 'googleapis';

// Load client secrets from a file, or set up your OAuth 2.0 credentials here.
const { client_secret, client_id, redirect_uris } = require('./credentials.json').installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Set the OAuth 2.0 access token (you would obtain this access token as part of the OAuth 2.0 flow).
oAuth2Client.setCredentials({ access_token: 'ya29.a0AfB_byD6ImHAZuwYwRhfFb8fiZwLMTyF70cKlyriadGDmaq-dqxDhC_85LwBGaorhES4rdPuLKBuurKvsWWg5BFHkHZUc00pRi-IQbDAO83aTuS44GF90pCCTDJ6UylVlPGmfqcyxbBr44p0mKqHGvjlc-1PBH3R8LzuaCgYKAVASARESFQGOcNnCaWt8uAOJsskJyrjoFSFz0w0171' });

// Create a Google Calendar API client.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

// Get a list of all events in the user's primary calendar.
async function getEvents() {
  try {
    const res = await calendar.events.list({
      calendarId: 'primary',
    });
    return res.data.items;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

// Create a new event in the user's primary calendar.
async function createEvent(event) {
  try {
    await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
  } catch (error) {
    console.error('Error creating event:', error);
  }
}

// Export the Google Calendar API client and the getEvents and createEvent functions.
export { calendar as calendarClient, getEvents, createEvent };
