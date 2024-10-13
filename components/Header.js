import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-red-500 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="text-center text-sm mb-2">
          "꿈을 품고 살면 그 꿈을 닮아간다." - 명언
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">ACME</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="ml-1">0</span>
        </div>
      </div>
    </header>
  )
}