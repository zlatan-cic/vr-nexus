import Logo from "../assets/logo-large.png";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[#0c0a09c4]">
      <div className="max-w-7xl mx-auto py-10 grid lg:grid-cols-4 md:grid-cols-2 lg:grid-rows-1 md:grid-rows-2 sm:grid-cols-1 px-2">
        <div className="flex flex-col text-5xl gap-1 items-center">
          <img src={Logo} alt="Logo" width={150} height={150} />
          <h2>VR Nexus</h2>
        </div>
        <div className="justify-self-center  max-sm:w-80 max-md:w-80">
          <h1 className="text-2xl my-5 border-b inline-block">Resources</h1>
          {resourcesLinks.map((item, index) => (
            <ul key={index}>
              <li className="text-lg mb-1 hover:text-orange-600 transition duration-150">
                <a href={item.href}>{item.text}</a>
              </li>
            </ul>
          ))}
        </div>
        <div className="justify-self-center  max-sm:w-80 max-md:w-80">
          <h1 className="text-2xl my-5 border-b inline-block">Platform</h1>
          {platformLinks.map((item, index) => (
            <ul key={index}>
              <li className="text-lg mb-1 hover:text-orange-600 transition duration-150">
                <a href={item.href}>{item.text}</a>
              </li>
            </ul>
          ))}
        </div>
        <div className="justify-self-center  max-sm:w-80 max-md:w-80">
          <h1 className="text-2xl my-5 border-b inline-block">Community</h1>
          {communityLinks.map((item, index) => (
            <ul key={index}>
              <li className="text-lg mb-1 hover:text-orange-600 transition duration-150">
                <a href={item.href}>{item.text}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
