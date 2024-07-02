import { CheckCircle2 } from "lucide-react";
import codeImage from "../assets/code.jpg";
import { checklistItems } from "../constants";

export default function WorkFlow() {
  return (
    <section id="workflow" className="my-6">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-tr from-orange-600 to-red-700  text-transparent bg-clip-text ">
          coding workflow
        </span>
      </h1>
      <div className="max-w-7xl mx-auto my-5 grid grid-cols-2 gap-4 max-[768px]:grid-cols-1 p-2">
        <div className="max-sm:hidden">
          <img src={codeImage} alt="Code" />
        </div>
        <div className="flex flex-col justify-center">
          {checklistItems.map((item) => (
            <div key={item.id} className="flex justify-center items-center mb-12 gap-5 max-sm:gap-1">
              <div className="text-green-700 mx-6 p-1 bg-neutral-800 w-[50px] h-[50px] flex justify-center items-center rounded-md max-sm:w-[35px] max-sm:h-[35px]">
                 <CheckCircle2 width={40} height={40} />
              </div>
              <div>
                <h2 className="bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text lg:text-2xl md:text-xl font-semibold ">{item.title}</h2>
                <p className="text-neutral-300 lg:text-lg md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
