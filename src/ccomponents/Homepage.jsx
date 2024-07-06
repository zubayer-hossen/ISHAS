import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const breakingNewsProps = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
    config: { duration: 10000 },
    loop: true,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.homepage}>
      {/* Breaking News Section */}
      <div className={styles.breakingNews}>
        <animated.div style={breakingNewsProps} className={styles.newsText}>
          Breaking News: Upcoming blood donation camp on 15th July!
        </animated.div>
      </div>

      {/* Banner Image Slider */}
      <div className={styles.bannerSlider}>
        <Slider {...sliderSettings}>
          <div>
            <img src="https://i.ibb.co/9yG5YGn/banner1.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="https://i.ibb.co/YTv9xyD/banner2.jpg" alt="Banner 2" />
          </div>
          <div>
            <img src="https://i.ibb.co/WyDfXyn/banner3.jpg" alt="Banner 3" />
          </div>
        </Slider>
      </div>

      {/* National Section */}
      <div className={styles.nationalSection}>
        {/* National Anthem Section */}
        <div className={styles.nationalAnthem}>
          <h2>National Anthem</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9AL7YVKNmlc?si=bRvuA8EPSBYH9M-M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* Notice Board Section */}
        <div className={styles.noticeBoard}>
          <h2>Notice Board</h2>
          <ul className="notice">
            <li className={styles.listItem}>Blood Donation Camp - 15th July</li>
            <li className={styles.listItem}>Sports Meet - 20th July</li>
            <li className={styles.listItem}>Cultural Program - 25th July</li>
          </ul>
        </div>
      </div>

      {/* About Us Section
      <div className={styles.aboutUs}>
        <h2>About Us</h2>
        <p>
          Our organization is dedicated to human welfare, helping the needy,
          collecting blood donors, organizing religious events, conducting
          sports, cultural programs, and other developmental activities.
        </p>
      </div> */}

      {/* Upcoming Events Section */}
      <div className={styles.upcomingEvents}>
        <h2>Upcoming Events</h2>
        <ul>
          <li className={styles.listItem}>Blood Donation Camp - 15th July</li>
          <li className={styles.listItem}>Sports Meet - 20th July</li>
          <li className={styles.listItem}>Cultural Program - 25th July</li>
        </ul>
      </div>

      {/* Contact Us Section
      <div className={styles.contactUs}>
        <h2>Contact Us</h2>
        <p>Email: info@organization.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Village Road, City, Country</p>
      </div> */}
    </div>
  );
};

export default Homepage;
