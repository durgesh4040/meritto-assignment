export default function HeroSection() {
  return (
    <div className="bg-purple-600 h-screen relative flex items-center justify-center">
      
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <img
          src="./merittologo.png"
          alt="Meritto Logo"
          className="h-10 md:h-14 lg:h-16 w-auto"
        />
      </div>

      
      <div className="absolute inset-0 bg-black opacity-40"></div>

      
      <div className="relative z-10 text-center px-4 md:px-8 text-white">
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
  );
}




