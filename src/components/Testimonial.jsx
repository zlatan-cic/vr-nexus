import { testimonials } from "../constants";

export default function Testimonial() {
  return (
    <section id="testimonials" className="my-20">
      <h1 className="text-center text-3xl sm:text-5xl lg:text-5xl tracking-wide">
        Hear What Our <div className="border-b-4 border-orange-600 inline-block">Clients</div> Say About{" "}
        <span className="bg-gradient-to-tr from-orange-600 to-red-700  text-transparent bg-clip-text ">
          VR Nexus
        </span>
      </h1>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
         {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-between flex-col max-sm:flex-col-reverse p-5 bg-[#0c0a0936] shadow-[#eeac7713] shadow-sm rounded-xl">
               <p className="text-base text-justify leading-7">{testimonial.text}</p>
               <div className="flex gap-5 my-5">
                  <img src={testimonial.image} width={50} height={50} alt="Users"  className="rounded-full"/>
                  <div>
                     <p className="text-xl">{testimonial.user}</p>
                     <p className="text-sm text-neutral-600">{testimonial.company}</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
    </section>
  );
}
