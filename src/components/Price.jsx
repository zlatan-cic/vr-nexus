import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

export default function Price() {
  return (
    <section id="pricing" className="mt-20">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide  text-orange-600 ">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option) => (
          <div key={option.id} className="w-full min-[770px]:w-1/2 lg:w-1/3 p-2 mt-5">
            <div className=" p-8 bg-[#0c0a0936] shadow-[#eeac7713] shadow-md rounded-xl">
              <p className="text-4xl mb-9 text-center">
                {option.title}{" "}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-700 to-red-800 text-transparent bg-clip-text text-base font-semibold">
                    (Most Popular)
                  </span>
                )}
              </p>
              <div className="mb-14 text-center lg:text-2xl text-xl ">
                <p className="inline-block border border-orange-700 px-7 py-2 rounded-full">
                  <span>{option.price}</span>
                  <span>/Month</span>
                </p>
              </div>
              <ul>
                {option.features.map((feature, index) => (
                  <li
                    key={index}
                    className="mt-8 flex items-center gap-4 text-xl"
                  >
                    <CheckCircle2 className="text-green-700"/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex mt-16 justify-center items-center text-centers w-full h-12 p-5 tracking-tight text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-150"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
