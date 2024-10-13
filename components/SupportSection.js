export default function SupportSection() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Support Acme Outdoors.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">SHOP PRODUCTS</h3>
              <p>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
            </div>
            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">DONATE</h3>
              <p>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>
            </div>
            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">BUY GIFT CARDS</h3>
              <p>Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }