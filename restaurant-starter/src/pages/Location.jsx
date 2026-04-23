function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        {/* ============================================================
            LEFT COLUMN: Restaurant info
            TODO: Replace ALL placeholder text with YOUR restaurant's
            address, phone number, and hours of operation.
            ============================================================ */}
        <div className="location-info">
          <h2>Address</h2>
          <p>123 Himalayan Plaza</p>
          <p>Durham, NC 27705</p>
          <p className="phone">(919) 555-7890</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">11:00 AM – 9:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">12:00 PM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">12:00 PM – 8:00 PM</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            Sagarmatha is conveniently located in downtown Durham, just minutes from Duke University and the American Tobacco Campus. Free street parking and nearby parking garages are available, and the restaurant is easily accessible by public transit and rideshare services.
          </p>
        </div>

        {/* ============================================================
            RIGHT COLUMN: Map
            WEEK 4: Replace the placeholder below with a Google Maps embed.
            Instructions:
            1. Go to Google Maps and search for any address
            2. Click "Share" > "Embed a map"
            3. Copy the src URL from the iframe code
            4. Uncomment the iframe below and paste your URL
            ============================================================ */}
        <div className="map-container">
          {/* UNCOMMENT THIS in Week 4 and replace the URL:*/
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6456.057804654634!2d-78.9055037!3d35.9951604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace47274e7cb57%3A0xee13502311e3fa8c!2sDowntown%2C%20Durham%2C%20NC!5e0!3m2!1sen!2sus!4v1776791198082!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          }
        </div>
      </div>
    </div>
  );
}

export default Location;
