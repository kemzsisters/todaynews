export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-white text-5xl font-bold mb-4">Serving you <br/>since 1989.</h1>
        <p className="text-white text-xl mb-8">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
        <button className="btn btn-primary w-40">Shop Merch</button>
      </div>
    </div>
  )
}