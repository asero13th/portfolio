import { FaGit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons';

function Card({project}) {
  return (
    <div className="ml-10 mx-auto w-60 bg-white rounded-lg shadow-md overflow-hidden mx-5 my-5">
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400 text-xs sm:text-sm">{project.name}</h3>
            <p className="text-gray-700 text-base text-xs sm:text-sm">{project.description}</p>
        </div>
        <div className="px-4 py-3 ">
            <a href={`${project.url}`} className="text-indigo-500 mr-2"><FontAwesomeIcon icon={faGithub} className="w-5 h-5" /></a>
        </div>
    </div>
  );
}
export default Card;