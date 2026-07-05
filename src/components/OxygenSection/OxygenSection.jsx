import "./OxygenSection.css";
import { FaArrowRight } from "react-icons/fa";

function O2Plants() {
  return (
    <section className="o2-section">
      <h2 className="section-title">
        Our Best O2
      </h2>

      <div className="o2-card">

        <div className="o2-image">

          <img
            src="./Best.png"
            alt="O2 Plant"
          />

        </div>

        <div className="o2-content">

          <h2>
            We Have Small And Best O₂ Plants Collection's
          </h2>

          <p>
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p>
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          <div className="o2-actions">

            <button className="o2-btn">
              Explore
            </button>

            <button className="o2-arrow">

              <FaArrowRight />

            </button>

          </div>

          <div className="o2-dots">

            <span className="active"></span>
            <span></span>
            <span></span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default O2Plants;