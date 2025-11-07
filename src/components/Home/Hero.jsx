const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen  border-b border-gray-700 shadow-lg">
      <div className="flex items-center max-w-6xl mx-auto px-8 gap-8">
        {/* Left side - Image */}
        <div className="w-1/2 flex justify-center mt-14">
          <img
            src="./pro.webp"
            alt="device"
            className="rounded-2xl h-135  object-cover shadow-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Thinking to buy a new device?
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            We'll help you choose the best device suited for your needs —
            whether it's a phone, laptop, or earbuds.
          </p>
          <button className="mt-8 w-fit px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
