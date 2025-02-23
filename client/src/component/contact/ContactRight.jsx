import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/formValid";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactRight() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-[60%] h-full relative items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-10 flex flex-col justify-center gap-10 shadow-lg"
      >
        <div className=" flex gap-8 ">
          <div className="w-1/2">
            <div className="space-y-1">
              <lebal htmlFor="name" className="text-lightText font-semibold">
                NAME
              </lebal>
              <input
                {...register("name")}
                id="name"
                className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
                type="text"
              />
              {errors.name && (
                <span className="text-red-400">{errors.name?.message}</span>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div className="space-y-1">
              <label
                htmlFor="phone"
                className="text-lightText font-semibold uppercase"
              >
                Phone number
              </label>
              <PhoneInput
                {...register("phone", { required: "Phone is required" })}
                id="phone"
                country="bd"
                value={watch("phone")} // Ensure value is controlled
                onChange={(phone) => setValue("phone", phone)} // Update form state
                inputClass="!bg-transparent !text-white !border-none !outline-none"
                containerClass="!bg-transparent !border-none"
                buttonClass="!bg-transparent"
                dropdownClass="!bg-black !text-white"
              />

              {errors.phone && (
                <span className="text-red-400">{errors.phone?.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <lebal
            htmlFor="email"
            className="text-lightText font-semibold uppercase"
          >
            email
          </lebal>
          <input
            {...register("email")}
            id="email"
            className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
            type="email"
          />
          {errors.email && (
            <span className="text-red-400">{errors.email?.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <lebal
            htmlFor="subject"
            className="text-lightText font-semibold uppercase"
          >
            subject
          </lebal>
          <input
            {...register("subject")}
            id="subject"
            className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
            type="text"
          />
          {errors.subject && (
            <span className="text-red-400">{errors.subject?.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <lebal
            htmlFor="message"
            className="text-lightText font-semibold uppercase"
          >
            Your Message
          </lebal>
          <textarea
            {...register("message")}
            className="w-full  text-white h-24 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
            name="message"
            id="message"
          ></textarea>
          {errors.message && (
            <span className="text-red-400">{errors.message?.message}</span>
          )}
        </div>

        <div className=" py-2 px-6 border hover:border-green-400 border-transparent  text-center rounded hover:bg-[#1c1e26]  font-semibold text-green-400 shadow-shadowOne hover:text-green-600 w-full  hover:translate-y-[-10px] duration-300 ">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactRight;
