(() => {
  'use strict';
  if (document.getElementById('email-rsvp')) return;

  const data = window.WEDDING_DATA || {};
  const rsvp = data.rsvp || {};
  const hostName = rsvp.name || "Dr. Bashir ahmad Sanaie";
  const rawPhone = rsvp.phone || rsvp.whatsapp || "9419063190";
  const cleanPhone = String(rawPhone).replace(/\D/g, '');
  const displayPhone = String(rawPhone).startsWith('+') ? rawPhone : (cleanPhone.length === 10 ? `+91 ${cleanPhone}` : rawPhone);
  const waNumber = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
  const coupleText = `${data.couple?.groom || 'Saaid Bashir'} & ${data.couple?.bride || 'Ayesha Choudhary'}`;
  const waMessage = encodeURIComponent(`Hello Dr. Bashir Ahmad Sanaie, RSVP for the Walima Celebration of ${coupleText}.`);

  const section = document.createElement('section');
  section.id = 'email-rsvp';
  section.setAttribute('aria-labelledby', 'reply-title');
  section.innerHTML = `
    <div class="reply-card-wrapper">
      <img src="images/cdn/noroot_6.png" class="rsvp-flourish rsvp-flourish-top" alt="" aria-hidden="true" />
      <div class="reply-card">
        <span class="reply-kicker">${rsvp.title || 'RSVP'}</span>
        <h2 id="reply-title" class="rsvp-host-name">${hostName}</h2>
        <div class="rsvp-contact-row">
          <a href="tel:+${waNumber}" class="rsvp-phone-display" aria-label="Call ${hostName}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="rsvp-phone-icon" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>${displayPhone}</span>
          </a>
        </div>
        <div class="rsvp-button-group">
          <a href="https://wa.me/${waNumber}?text=${waMessage}" target="_blank" rel="noopener noreferrer" class="rsvp-action-btn rsvp-whatsapp-btn" aria-label="WhatsApp Dr. Bashir ahmad Sanaie">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.64 8.53 7.64 9.69C7.64 10.84 8.48 11.96 8.6 12.11C8.72 12.27 10.25 14.62 12.61 15.63C13.17 15.87 13.61 16.02 13.95 16.13C14.51 16.31 15.03 16.28 15.43 16.22C15.88 16.15 16.82 15.65 17.02 15.09C17.22 14.53 17.22 14.05 17.16 13.95C17.1 13.85 16.95 13.79 16.72 13.68C16.5 13.57 15.39 13.02 15.18 12.95C14.97 12.87 14.82 12.84 14.67 13.07C14.52 13.29 14.1 13.79 13.97 13.94C13.85 14.09 13.72 14.11 13.5 14C13.28 13.89 12.56 13.65 11.71 12.89C11.05 12.3 10.6 11.58 10.47 11.36C10.35 11.13 10.46 11.01 10.57 10.9C10.67 10.8 10.8 10.63 10.91 10.5C11.03 10.38 11.07 10.29 11.14 10.14C11.22 10 11.18 9.87 11.12 9.76C11.07 9.65 10.61 8.53 10.43 8.08C10.24 7.64 10.05 7.7 9.9 7.7L9.46 7.69C9.28 7.69 9.11 7.44 9.11 7.44Z"/></svg>
            <span>WhatsApp</span>
          </a>
          <a href="tel:+${waNumber}" class="rsvp-action-btn rsvp-call-btn" aria-label="Call Dr. Bashir ahmad Sanaie">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>Call</span>
          </a>
        </div>
      </div>
      <img src="images/cdn/noroot_11.png" class="rsvp-flourish rsvp-flourish-bottom" alt="" aria-hidden="true" />
    </div>
  `;

  (document.getElementById('allrecords') || document.body).appendChild(section);
})();
