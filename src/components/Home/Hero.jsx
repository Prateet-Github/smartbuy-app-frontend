const Hero = () => {
  return (
    <div className="flex items-center justify-between h-screen px-20 pt-20 bg-black text-white">
      {/* Left side - Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="./apple2.jpg"
          alt="device"
          className="rounded-2xl size-180 object-cover shadow-lg"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-1/2 flex flex-col justify-center pl-10">
        <h1 className="text-5xl font-extrabold mb-6">
          Thinking to buy a new device?
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          We'll help you choose the best device suited for your needs — whether
          it's a phone, laptop, or earbuds.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;