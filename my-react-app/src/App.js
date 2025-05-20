import React, { useState ,useEffect} from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("starters");
  const [fade, setFade] = useState(true);
  const [displayCategory, setDisplayCategory] = useState("starters");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  const menuData = {
    starters: [
      { name: "Spring Rolls", price: "$5.45", img: "/spring_rolls.webp" },
      { name: "Soup", price: "$4.32", img: "/soup.webp" },
      { name: "Fries", price: "$3.21", img: "/fries.jpg" },
      { name: "Salad", price: "$6.99", img: "/salad.png" },
      { name: "Bruschetta", price: "$7.09", img: "/bb.jpg" },
      { name: "Nachos", price: "$6.87", img: "/nachos.jpg" },
    ],
    breakfast: [
      { name: "Spring Rolls", price: "$5.45", img: "/spring_rolls.webp" },
      { name: "Soup", price: "$4.32", img: "/soup.webp" },
      { name: "Fries", price: "$3.21", img: "/fries.jpg" },
      { name: "Salad", price: "$6.99", img: "/salad.png" },
      { name: "Bruschetta", price: "$7.09", img: "/bb.jpg" },
      { name: "Nachos", price: "$6.87", img: "/nachos.jpg" },
    ],
    lunch: [
      { name: "Spring Rolls", price: "$5.45", img: "/spring_rolls.webp" },
      { name: "Soup", price: "$4.32", img: "/soup.webp" },
      { name: "Fries", price: "$3.21", img: "/fries.jpg" },
      { name: "Salad", price: "$6.99", img: "/salad.png" },
      { name: "Bruschetta", price: "$7.09", img: "/bb.jpg" },
      { name: "Nachos", price: "$6.87", img: "/nachos.jpg" },
    ],
    dinner: [
      { name: "Spring Rolls", price: "$5.45", img: "/spring_rolls.webp" },
      { name: "Soup", price: "$4.32", img: "/soup.webp" },
      { name: "Fries", price: "$3.21", img: "/fries.jpg" },
      { name: "Salad", price: "$6.99", img: "/salad.png" },
      { name: "Bruschetta", price: "$7.09", img: "/bb.jpg" },
      { name: "Nachos", price: "$6.87", img: "/nachos.jpg" },
    ],
  };

  const testimonialsData = [
    {
      name: "Alice",
      review: "Yummy's food is fantastic! The quality and freshness are unmatched.",
      img: "/person1.jpg",
    },
    {
      name: "Bob",
      review: "The atmosphere and service made my experience unforgettable!",
      img: "/person2.jpg",
    },
    {
      name: "Charlie",
      review: "I love their healthy options — delicious and nutritious!",
      img: "/person3.jpg",
    },
    {
      name: "Diana",
      review: "Highly recommend for anyone looking for great food and vibes.",
      img: "/person4.jpg",
    },
  ];

  const eventsData = [
    {
      title: "Food at your table",
      description: "Join us for an exciting culinary experience.",
      img: "/event1.jpeg",
    },
    {
      title: "Night one",
      description: "A night of fun and great food awaits you.",
      img: "/event-bg.webp",
    },
    {
      title: "Special to hearts",
      description: "Celebrate with us at our special event.",
      img: "/event2.jpg",
    },
    {
      title: "Musicians",
      description: "Enjoy live music and great vibes.",
      img: "/event4.webp",
    },
    {
      title: "Shoppingsss",
      description: "Special discounts and offers available.",
      img: "/event5.webp",
    },
    {
      title: "Happy Diwali",
      description: "Join us for a festive celebration.",
      img: "/event6.jpg",
    },
  ];

  const chefsData = [
    {
      name: "Chef John",
      details: "Expert in Italian cuisine with 10 years of experience.",
      photo: "/person11.webp",
    },
    {
      name: "Chef Emma",
      details: "Pastry chef known for delightful desserts and creativity.",
      photo: "/person22.jpg",
    },
    {
      name: "Chef Liam",
      details: "Specializes in fusion dishes and modern culinary techniques.",
      photo: "/person33.webp",
    },
  ];

  const [manualSlideIndex, setManualSlideIndex] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    if (!isAutoSliding) return;
    const eventInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (eventsData.length));
    }, 3000); // Change event every 5 seconds (shorter)

    return () => clearInterval(eventInterval);
  }, [eventsData.length, isAutoSliding]);
  
  
  
  
  const changeCategory = (newCat) => {
    if (newCat === category) return;
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCategory(newCat);
      setDisplayCategory(newCat);
      setFade(true); // Start fade-in
    }, 300); // Duration matches CSS transition time
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, 2000); // Auto change every 4 seconds

  return () => clearInterval(interval); // Clean up on unmount
}, [testimonialsData.length]);


  return (
    <>
      <header>
        <h1>Yummy</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#events">Events</a>
          <a href="#chefs">Chefs</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="booktable" onClick={() => document.getElementById('book-table').scrollIntoView({behavior: 'smooth'})}>Book a Table</button>
      </header>

      <main>
        {/* HOME SECTION */}
        <section id="home">
          <div className="home-content">
            <div className="home-text">
              <h2>
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h2>
              <p>We are team of talented designers making websites with Bootstrap</p>
              <button className="booktable" onClick={() => document.getElementById('book-table').scrollIntoView({behavior: 'smooth'})}>Book a Table</button>
            </div>
            <img src="/rice.png" alt="Yummy" className="floating-image" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <h2>ABOUT US</h2>
          <h3>LEARN MORE ABOUT US</h3>
          <div className="about-content">
            <img src="/room.png" alt="About Us" className="about-image" />
            <div className="about-text">
              <p>
                <i>
                  <span style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </i>
                <br />
                <br />
                🔴Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                🔴Duis aute irure dolor in reprehenderit in voluptate velit.
                <br />
                🔴Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate trideta storacalaperda
                mastiro dolore eu fugiat nulla pariatur.
                <br />
                <br />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <a
                href="https://www.youtube.com/watch?v=y1TsOIB96e8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/thumbnail.jpg" alt="Play Video" className="video-thumbnail" />
              </a>
            </div>
          </div>

          <div className="text-box">
            <p style={{ color: "black" }}>
              Book a Table
              <br />
              <span style={{ color: "red" }}>+1 5589 55488 55</span>
            </p>
            <button className="booktable" onClick={() => document.getElementById('book-table').scrollIntoView({behavior: 'smooth'})}>Book a Table</button>
          </div>

          <div className="features-boxes">
            <div className="feature" id="feature1">
              <h1>Why Choose Yummy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="feature">
              <div className="circle"></div>
              <p>
                Corporis voluptates officia eiusmod
                <br />
                <br /> Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div className="feature">
              <div className="circle"></div>
              <p>
                Ullamco laboris ladore lore pan
                <br />
                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt
              </p>
            </div>
            <div className="feature">
              <div className="circle"></div>
              <p>
                Labore consequatur incidid dolore
                <br />
                <br />
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores
                omnis facere
              </p>
            </div>
          </div>

          <div className="image-section">
            <div className="overlay-text">
              <div className="text-box">232 Clients</div>
              <div className="text-box">521 Projects</div>
              <div className="text-box">1453 Hours Of Support</div>
              <div className="text-box">32 Workers</div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu">
          <h2>Our Menu</h2>
          <h3>Check our Yummy menu</h3>
          <div className="menu-buttons">
            {["starters", "breakfast", "lunch", "dinner"].map((cat) => (
              <button
                key={cat}
                onClick={() => changeCategory(cat)}
                className={category === cat ? "active" : ""}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className={`menu-grid ${fade ? "fade-in" : "fade-out"}`}>
            {menuData[displayCategory].map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </section>

<section id="testimonial" className="testimonial-section">
  <h2>Testimonials</h2>
  <h3>What Are They Saying About Us</h3>

  <div className="testimonial-card">
    <div className="testimonial-text">
      <p>"{testimonialsData[testimonialIndex].review}"</p>
      <strong>- {testimonialsData[testimonialIndex].name}</strong>
    </div>

    <div className="testimonial-img-wrapper">
      <div className="testimonial-img-container">
        <img
          src={testimonialsData[testimonialIndex].img}
          alt={testimonialsData[testimonialIndex].name}
          className="testimonial-img"
        />
      </div>
    </div>

  </div>

      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === testimonialIndex ? "active" : ""}`}
            onClick={() => setTestimonialIndex(index)}
          />
        ))}
      </div>
    </section>

    {/* EVENTS SECTION */}
    <section id="events" className="events-section">
      <div
        className="events-grid"
        style={{
          transform: `translateX(-${(100 / eventsData.length) * currentSlideIndex}%)`,
          transition: "transform 0.5s ease-in-out",
          width: `${eventsData.length * 100}%`,
          gridTemplateColumns: `repeat(${eventsData.length}, 1fr)`,
          animation: "none",
        }}
      >
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="event-card"
            style={{ backgroundImage: `url(${event.img})` }}
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <div className="events-nav-buttons">
        {eventsData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlideIndex(index);
              setIsAutoSliding(false);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>

    {/* CHEFS SECTION */}
    <section id="chefs" className="chefs-section">
      <h2>Our Chefs</h2>
      <div className="chefs-grid">
        {chefsData.map((chef, index) => (
          <div key={index} className="chef-card">
            <img src={chef.photo} alt={chef.name} className="chef-photo" />
            <div className="chef-info">
              <h3>{chef.name}</h3>
              <p>{chef.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* BOOK A TABLE SECTION */}
    <section id="book-table" className="book-table-section">
      <h2>Book a Table</h2>
      <div className="book-table-content">
        <div className="book-table-photo">
          <img src="/room.png" alt="Book a Table" />
        </div>
        <form className="book-table-form">
          <div className="form-grid">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="date" name="date" placeholder="Date" required />
            <input type="date" name="dob" placeholder="Date of Birth" required />
            <input type="number" name="persons" placeholder="Number of Persons" min="1" required />
          </div>
          <textarea name="comments" placeholder="Comments" rows="4"></textarea>
          <button type="submit" className="booktable">Book</button>
        </form>
      </div>
    </section>

    {/* CONTACT SECTION */}
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019073927927!2d-122.4194150846813!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f1a1b1b%3A0x4a0b0b0b0b0b0b0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          width="80vw"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info-grid">
        <div className="contact-info-item">
          <span role="img" aria-label="address" className="contact-icon">📍</span>
          
          <p><h2>Address</h2>A108 Adam Street<br />New York, NY 535022</p>
        </div>
        <div className="contact-info-item">
          <span role="img" aria-label="phone" className="contact-icon">📞</span>
          <p><h2>Phone</h2>+1 5589 55488 55</p>
        </div>
        <div className="contact-info-item">
          <span role="img" aria-label="email" className="contact-icon">✉️</span>
          <p><h2>Email</h2>info@yummy.com</p>
        </div>
        <div className="contact-info-item">
          <span role="img" aria-label="hours" className="contact-icon">⏰</span>
          <p><h2>Opening Hours</h2>Mon-Sat: 11:00 AM - 10:00 PM</p>
        </div>
      </div>
    </section>

      </main>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-column">
            <span role="img" aria-label="address" className="footer-icon">📍</span>
            <h4>Address</h4>
            <p>A108 Adam Street<br />New York, NY 535022</p>
          </div>
          <div className="footer-column">
            <span role="img" aria-label="contact" className="footer-icon">📞</span>
            <h4>Contact</h4>
            <p><strong>Phone:</strong> +1 5589 55488 55<br /><strong>Email:</strong> info@yummy.com</p>
          </div>
          <div className="footer-column">
            <span role="img" aria-label="hours" className="footer-icon">⏰</span>
            <h4>Opening Hours</h4>
            <p><strong>Mon-Sat:</strong> 11AM - 10PM<br /><strong>Sunday:</strong> Closed</p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="X" className="social-icon">X</a>
              <a href="#" aria-label="Facebook" className="social-icon">f</a>
              <a href="#" aria-label="Instagram" className="social-icon">I</a>
              <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
