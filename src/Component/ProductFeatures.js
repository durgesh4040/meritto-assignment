// Product Features Component
export default function ProductFeatures() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <i className="fas fa-rocket text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Experience seamless speed and smooth interactions throughout.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <i className="fas fa-lock text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
          <p className="text-gray-600">
            Your data is always safe and never shared with third parties.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <i className="fas fa-users text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Collaborative Tools</h3>
          <p className="text-gray-600">
            Work together with your team easily with built-in collaboration
            features.
          </p>
        </div>
      </div>
    </section>
  );
}
