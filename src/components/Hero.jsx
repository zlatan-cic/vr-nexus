import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export default function Hero() {
  return (
    <section>
      <main className="max-w-7xl m-auto pt-10 px-6">
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className=" lg:text-7xl sm:text-6xl text-[1.5rem] text-center lg:leading-[1.2] ">
            <span className="bg-gradient-to-t from-red-500 to-orange-700 text-transparent inline-block bg-clip-text">
              VR Nexus{" "}
            </span>{" "}
            Empowering Developers with{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-orange-700 inline-block text-transparent bg-clip-text">
              Advanced Build Tools
            </span>
          </h1>
          <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl max-sm:text-justify">
            At{" "}
            <span className="bg-gradient-to-t from-red-500 to-orange-700 text-transparent inline-block bg-clip-text">
              VR Nexus
            </span>
            , we are committed to providing developers with state-of-the-art
            build tools designed to optimize workflow efficiency and foster
            innovation. Our advanced solutions empower you to focus on what
            truly matters—writing great code and bringing your creative ideas to
            life.
          </p>
          <div className="flex justify-center my-10 gap-5">
            <a className=" py-3 px-3 transition ease-in-out delay-150 bg-gradient-to-r from-orange-500 to-orange-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:from-orange-600 hover:to-orange-800 duration-300">
              Start for free
            </a>
            <a
              href="#"
              className="transition ease-in-out delay-150 border py-3 px-4 rounded-md hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Documentation
            </a>
          </div>
          <div className="flex mt-10 justify-center gap-10 mb-6 max-sm:flex-col max-sm:items-center">
          <video autoPlay loop muted  src={video1} className=" rounded-lg w-1/2 max-sm:hidden max-lg:w-[45%] shadow-md object-fill shadow-[#2e2d2d44]"></video>
          <video autoPlay loop muted  src={video2} className=" rounded-lg w-1/2 max-sm:w-full max-lg:w-[45%] shadow-md object-fill shadow-[#2e2d2d44]"></video>

          </div>
        </div>
      </main>
    </section>
  );
}
