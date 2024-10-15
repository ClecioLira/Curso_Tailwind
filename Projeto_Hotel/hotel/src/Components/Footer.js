import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-300">
      <div className="container lg:max-w-3xl mx-auto px-4 py-10 flex items-center justify-between">
        <div className="text-gray-400">LOGO</div>
        <p>&copy; 2024</p>

        <div className="flex items-center space-x-3">
          <a href="">
            <img width="30px" src={`${facebook}`}></img>
          </a>
          <a href="">
            <img width="30px" src={`${instagram}`}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
