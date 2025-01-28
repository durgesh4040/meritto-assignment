
export default function HeroSection() {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: 'url("./meritto.avif")' }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

    
      <div className="flex items-center justify-center h-full text-center px-4 md:px-8 text-white">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Meritto
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Empowering your journey with cutting-edge solutions.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-base md:text-xl hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}


