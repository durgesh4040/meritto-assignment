// Pricing Plans Component
export default function PricingPlan() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-3xl font-bold text-gray-800 mb-4">$19/month</p>
          <ul className="text-gray-600 mb-6">
            <li>1 User</li>
            <li>5 GB Storage</li>
            <li>Basic Support</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg border-2 border-blue-500">
          <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
          <p className="text-3xl font-bold text-gray-800 mb-4">$49/month</p>
          <ul className="text-gray-600 mb-6">
            <li>10 Users</li>
            <li>50 GB Storage</li>
            <li>Priority Support</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
          <p className="text-3xl font-bold text-gray-800 mb-4">$99/month</p>
          <ul className="text-gray-600 mb-6">
            <li>Unlimited Users</li>
            <li>Unlimited Storage</li>
            <li>24/7 Support</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
}
