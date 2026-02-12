import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { productions } from '@/data/productions'

export const metadata: Metadata = {
  title: 'Productions | XKSPROD',
  description:
    'Toutes les productions XKSPROD: direction artistique, production exécutive et contenus sur mesure.',
}

export default function ProductionsPage() {
  return (
    <main className="bg-cinema text-white pt-24 md:pt-28 pb-24 md:pb-32">
      <section className="container mb-12 md:mb-16">
        <div className="stack-lg">
          <span className="eyebrow">Productions</span>
          <h1 className="title-display text-4xl md:text-6xl">Toutes nos productions</h1>
          <p className="lead max-w-[46rem]">
            Parcours de nos réalisations dans l’ordre, de la production 01 à la production 22.
          </p>
          <div>
            <Link
              href="/#productions"
              className="btn-ghost inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em]"
            >
              Retour accueil
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productions.map((item) => (
            <article key={item.id} className="production-card group">
              <div className="production-media">
                <img src={item.image} alt={item.title} className="production-image" />
                <div className="production-badge">{String(item.id).padStart(2, '0')}</div>
              </div>
              <div className="production-content">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">{item.meta}</p>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-white/70">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
