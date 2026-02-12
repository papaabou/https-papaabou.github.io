export type ProductionItem = {
  id: number
  title: string
  meta: string
  desc: string
  image: string
}

const imageById: Record<number, string> = {
  1: '/home/works/prod1.jpg',
  2: '/home/works/prod2.jpg',
  3: '/home/works/prod3.jpg',
  4: '/home/works/prod4.jpg',
  5: '/home/works/prod5.jpg',
  6: '/home/works/prod6.png',
  7: '/home/works/prod7.jpg',
  8: '/home/works/prod8.jpg',
  9: '/home/works/prod9.jpg',
  10: '/home/works/prod10.jpg',
  11: '/home/works/prod11.jpg',
  12: '/home/works/prod12.jpg',
  13: '/home/works/prod13.jpg',
  14: '/home/works/prod14.jpg',
  15: '/home/works/prod15.jpg',
  16: '/home/works/prod16.png',
  17: '/home/works/prod17.png',
  18: '/home/works/prod18.png',
  19: '/home/works/prod19.png',
  20: '/home/works/prod20.png',
  21: '/home/works/prod21.png',
  22: '/home/works/prod22.png',
}

export const productions: ProductionItem[] = Array.from({ length: 22 }, (_, idx) => {
  const id = idx + 1

  return {
    id,
    title: `Production ${String(id).padStart(2, '0')}`,
    meta: `Réalisation ${String(id).padStart(2, '0')}`,
    desc: 'Direction artistique, production exécutive et livraison de contenus sur mesure adaptés au public cible.',
    image: imageById[id],
  }
})
