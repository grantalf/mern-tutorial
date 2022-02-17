import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="promontory" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            promontory <span>test</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis
            optio omnis repellendus architecto tenetur explicabo exercitationem,
            consequuntur ex at provident, consectetur vitae sit aut quae
            laudantium, reprehenderit aliquam libero.
          </p>
          <button className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} alt="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
