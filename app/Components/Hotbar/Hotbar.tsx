import { faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Banner: React.FC = () => {
    return (
      <div className="bg-[#2B2D42] text-white py-2 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <FontAwesomeIcon icon={faTruck} />
        <p className="text-sm sm:text-base">This website uses cookies to ensure you get the best experience on our website</p>
      </div>
    );
  };
  
  export default Banner;