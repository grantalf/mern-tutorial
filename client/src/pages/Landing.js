import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
