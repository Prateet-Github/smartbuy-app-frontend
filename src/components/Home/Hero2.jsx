const Hero2 = () => {
  return (
    <div className="flex items-center min-h-screen bg-black text-white">
      <div className="flex items-center max-w-6xl mx-auto px-8">
        {/* Left side - Text */}

        <div className="w-1/2 flex flex-col justify-center pl-10">
          <h1 className="text-5xl font-extrabold mb-6">
            Get personalized device recommendations
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Answer a few questions about your preferences and budget, and we'll
            suggest the perfect device for you.
          </p>
          <button className="mt-8 w-fit px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300">
            Start Exploring
          </button>
        </div>

        {/* Right side - Image */}

        <div className="w-1/2 flex justify-center">
          <img
            src="./25u.webp"
            alt="device"
            className="rounded-2xl h-240 w-fit object-cover bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
