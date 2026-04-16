function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About Sagarmatha</h1>
        <p className="subtitle">Bringing Nepal to Your Table.</p>
      </div>

      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          Sagarmatha was founded by a Nepali family who wanted to share the authentic flavors and traditions of their homeland with the local community. Inspired by the rich culture of the Himalayan region and the comfort of home-cooked meals, they dreamed of creating a place where people could experience true Nepali cuisine. What started as a small idea rooted in family recipes and passion quickly turned into a vision of bringing a piece of Nepal to a new audience.
        </p>
        <p>
          As Sagarmatha began to grow, it gained recognition for its flavorful dishes, warm hospitality, and unique cultural atmosphere. Despite challenges such as introducing a lesser-known cuisine and adapting to a new environment, the restaurant stayed true to its roots. Word of mouth and loyal customers helped it expand, and today Sagarmatha is known for its authentic taste, welcoming vibe, and a dining experience that stands out from typical restaurants.
        </p>
        <p>
          The mission of Sagarmatha is to create more than just a place to eat—it is to offer a cultural experience that brings people together. The restaurant aims to make every guest feel welcomed, valued, and connected through food. By combining traditional flavors, quality ingredients, and genuine hospitality, Sagarmatha creates a memorable experience that keeps guests coming back for both the food and the feeling of home.
        </p>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Bikash Gurun</h3>
            <p className="role">Head Chef</p>
            <p>Chef Bikash brings over 15 years of experience in traditional Nepali cooking, specializing in authentic Himalayan flavors and family-style recipes.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>Sita Karki</h3>
            <p className="role">Restaurant Manager</p>
            <p>Sita ensures every guest feels welcome, combining excellent service with a deep understanding of Nepali hospitality and culture.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Dr.Sudip Amgain</h3>
            <p className="role">Head of Cleaning & Hygiene</p>
            <p>Sudip leads cleanliness and hygiene operations, making sure Sagarmatha maintains the highest standards. A true expert in keeping everything spotless and organized.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
