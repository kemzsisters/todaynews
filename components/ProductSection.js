export default function ProductSection() {
    const products = [
      { name: 'White Tent', price: 200.00, image: '/images/tent.jpg' },
      { name: 'Tin Coffee Tumbler', price: 35.00, image: '/images/tumbler.jpg' },
      { name: 'Blue Canvas Pack', price: 95.00, image: '/images/backpack.jpg', sale: true },
    ]
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Open 24/7/365.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded shadow overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <button className="btn btn-primary mt-4">Details</button>
                  {product.sale && <span className="bg-red-500 text-white px-2 py-1 rounded absolute top-2 right-2">Sale</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }