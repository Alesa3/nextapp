import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-around h-24 bg-cyan-600 text-teal-100"> 
        <h1 className="text-4xl">Allt om Next.js</h1>
        <nav>
            <ul className="list-none flex gap-2">
                <li>
                <Link href="/struktur">Filstruktur</Link>
                </li>
                <li>Routing</li>
                <li>Styling</li>
            </ul>
        </nav>
    </header>
    
  )
}