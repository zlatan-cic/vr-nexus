import { features } from "../constants";

export default function Features() {
  return (
    <section id="feature" className="relative mt-10 min-h-[700px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-3 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Empower{" "}
          <span className="bg-gradient-to-tr from-orange-600 to-red-700 inline-block text-transparent bg-clip-text">
            Your VR
          </span>{" "}
          Projects
        </h2>
      </div>
      <div className="flex flex-wrap max-w-7xl m-auto mt-10 justify-center gap-5 ">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap max-w-[350px] p-7 bg-[#0c0a0936] rounded-2xl backdrop-blur-lg"
          >
            <div className="flex gap-7 items-center mb-3">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {item.icon}
              </div>
              <h1>{item.title}</h1>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
