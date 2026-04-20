import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>Sagarmatha</h1>
        <p className="tagline">Authentic Flavors from the Heart of the Himalayas.</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

      {/* ============================================================
          WELCOME SECTION
          TODO: Write 1-2 paragraphs about YOUR restaurant.
          What makes it special? What's your story?
          ============================================================ */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            Sagarmatha brings the rich and authentic flavors of Nepal straight to your table, offering a unique Himalayan dining experience. Our menu features traditional Nepali dishes such as freshly made momo, flavorful curries, and classic dal bhat, all prepared using time-honored recipes and fresh ingredients. What makes Sagarmatha special is not just the food, but the cultural experience—we combine warm hospitality with a cozy, traditional atmosphere inspired by the beauty of the Himalayas. Whether you're trying Nepali cuisine for the first time or looking for a taste of home, Sagarmatha offers a memorable and satisfying experience that keeps guests coming back.
          </p>
          <p style={{ marginTop: "1rem" }}>
            At Sagarmatha, we are inspired by the traditions and heritage of Nepal, where food is more than just a meal—it’s a way of bringing people together. Our recipes are rooted in authentic home-style cooking, using fresh ingredients and carefully balanced spices to create bold yet comforting flavors. We take pride in maintaining the authenticity of every dish while creating a welcoming space where guests can relax and enjoy a true cultural experience. From the aroma of freshly prepared meals to the warm and friendly service, every visit to Sagarmatha is designed to feel like a journey to the heart of the Himalayas.
          </p>
        </div>
        <div className="welcome-image">
          {/* TODO: Replace with an <img> tag once you add images in Week 4 */}
          📸 Add your restaurant photo here
        </div>
      </section>

      {/* ============================================================
          FEATURE CARDS
          TODO: Change the icons, titles, and descriptions below
          to highlight 3 things that make YOUR restaurant special.
          ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🥟</div>
            <h3>Authentic Nepali Cuisine</h3>
            <p>Enjoy traditional dishes like momo, dal bhat, and flavorful curries made using authentic recipes and fresh ingredients straight from Nepali culinary traditions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏔️</div>
            <h3>Himalayan Experience</h3>
            <p>Our restaurant offers a cozy atmosphere inspired by the beauty of the Himalayas, giving you a cultural dining experience unlike any other.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🙏</div>
            <h3>Warm Hospitality</h3>
            <p>At Sagarmatha, we treat every guest like family, combining great food with genuine Nepali hospitality that keeps people coming back.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
