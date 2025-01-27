// Hero Component
export default function HeroSection() {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: 'url("./meritto.avif")' }}
    >
      {/* <img src="./images.jpg " alt="images" /> */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Meritto
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Empowering your journey with cutting-edge solutions.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
