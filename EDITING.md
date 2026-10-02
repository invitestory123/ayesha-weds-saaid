# Customer Editing Guide — wax-seal-royale

This template is an Islamic luxury wedding invitation designed with an interactive wax-seal envelope overlay, opening animation video, swan background video, classical ambient music, countdown timer, schedule of events, venue details, and gift/attire etiquette.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](./editable/wedding-data.js)

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: Names (e.g. `"Zohan"`, `"Rose"`)
- `subtitle`: Spiritual tagline / wedding subtitle

### Wedding Date & Invitation Note
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Short date string for hero banner (e.g. `"27.09.26"`)
- `dateISO`: Event start ISO timestamp with timezone offset (`"2026-09-27T17:00:00-04:00"`). Directly drives live countdown timer and Google Calendar link.
- `invitationNote`: Main invitation message text (HTML tags like `<br />` supported)

### Schedule of Events
Edit `schedule` array in `editable/wedding-data.js`:
- Five timed event rows with `title` and `time`:
  - Default: `Guest Arrival` (5 PM), `Nikkah Ceremony` (6 PM), `Mocktail Hour` (7 PM), `Dinner` (8 PM), `Dance` (9 PM).

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: Islamic center / hall name (e.g. `"Islamic Center of Melville"`)
- `address`: Full street address
- `mapsUrl`: Google Maps direction URL

### Etiquette & Notes
Edit `details` in `editable/wedding-data.js`:
- `giftPreference`: Gift preference statement (e.g. `"Kindly, no boxed gifts please."`)
- `dressCode`: Dress code guideline (e.g. `"We kindly ask guests to avoid deep red and maroon attire for the celebration."`)

### Media & Assets
Replace files directly in `editable/assets/` or update `media` in `wedding-data.js`:
- `overlayImage`: Wax-seal envelope graphic (`editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png`)
- `sealVideo`: Wax-seal breaking/opening MP4 (`editable/assets/1782224012851.mp4`)
- `heroVideo`: Ambient background video (`editable/assets/Swans2.mov`)
- `audio`: Background soundtrack (`editable/assets/Einaudi_ Divenire (1) (1).mp3`)

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and replace media in `editable/assets/`.
2. Do not modify bundled Tilda core scripts in `js/` or styling in `css/`.
3. Keep ISO date strings with proper timezone offsets (e.g. `-04:00`).
4. Validate changes with `node --check editable/wedding-data.js`.

## Email RSVP

Set `rsvp.email` in `editable/wedding-data.js` to the host’s address; customize `heading`, `note`, and optional `deadline`. The ivory-and-gold RSVP card appears after guest details. Its form collects the guest name, attendance response and guest count before opening an email draft. Guests must send the email themselves. An empty or invalid address keeps the form in preview mode and explains that no reply has been sent. The standalone `editable/rsvp.css` and `editable/rsvp.js` provide this addition without changing bundled Tilda files.

### RSVP form and sample venues
All designs now collect **Your full name**, **Will you be joining us?** (Joyfully accepts / Regretfully declines), and **Number of guests attending — Including yourself**. Guest count is required only for acceptances; declines use zero. “Prepare RSVP email” opens the completed draft when `rsvp.email` is configured. With no email configured, the form remains available to preview and clearly states that no reply was sent. All designs use fictional sample venue names and addresses; replace these and the map link before sharing a real invitation.
