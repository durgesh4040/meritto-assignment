// Testimonials Component
export default function Testimonial() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-72">
          <p className="text-lg text-gray-600">
            Meritto has transformed the way we work. The performance is
            outstanding!
          </p>
          <div className="flex items-center mt-4">
            <img
              src="/path/to/avatar.jpg"
              alt="Alakh Pandey"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-semibold">Alakh Pandey</h4>
              <p className="text-gray-500">CEO, PW</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-72">
          <p className="text-lg text-gray-600">
            "A game changer for our team's productivity. Highly recommend!"
          </p>
          <div className="flex items-center mt-4">
            <img
              src="/path/to/avatar2.jpg"
              alt="Jane Smith"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-gray-500">Marketing Head, XYZ Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
