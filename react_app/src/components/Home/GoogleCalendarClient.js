// GoogleCalendarClient.js
function loadClient() {
    gapi.client.setApiKey("AIzaSyDhm7DkmpbSvdhL5HHw01Pvn8hJiv6zMSM");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  
  // Make sure the client is loaded before calling this method.
  function listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {
      var events = response.result.items;
      console.log('Upcoming events:', events);
    });
  }
  
  export { loadClient, listUpcomingEvents };
  