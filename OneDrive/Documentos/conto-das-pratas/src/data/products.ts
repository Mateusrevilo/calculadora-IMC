import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Brinco Argola Clássica',
    price: 89.90,
    originalPrice: 120.00,
    category: 'feminino',
    type: 'brinco',
    images: [
      'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Brinco argola clássica em prata com banho 1000, perfeito para uso diário ou ocasiões especiais.',
    features: ['Prata com banho 1000', 'Hipoalergênico', 'Garantia de qualidade', 'Resistente à água'],
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Colar Corrente Veneziana',
    price: 149.90,
    originalPrice: 199.90,
    category: 'feminino',
    type: 'colar',
    images: [
      'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Elegante colar com corrente veneziana em prata com banho 1000, ideal para compor looks sofisticados.',
    features: ['Prata com banho 1000', '45cm de comprimento', 'Fecho seguro', 'Acabamento premium'],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Pulseira Elos Grossos',
    price: 199.90,
    category: 'masculino',
    type: 'pulseira',
    images: [
      'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Pulseira masculina com elos grossos em prata com banho 1000, design moderno e resistente.',
    features: ['Prata com banho 1000', 'Design masculino', 'Elos reforçados', 'Fecho de segurança'],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Anel Solitário Elegante',
    price: 129.90,
    originalPrice: 169.90,
    category: 'feminino',
    type: 'anel',
    images: [
      'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Anel solitário com pedra cravejada em prata com banho 1000, perfeito para momentos especiais.',
    features: ['Prata com banho 1000', 'Pedra cravejada', 'Diversos tamanhos', 'Acabamento brilhante'],
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '5',
    name: 'Corrente Masculina Groumet',
    price: 249.90,
    category: 'masculino',
    type: 'corrente',
    images: [
      'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Corrente masculina modelo groumet em prata com banho 1000, robusta e elegante.',
    features: ['Prata com banho 1000', '60cm de comprimento', 'Elos soldados', 'Design robusto'],
    inStock: true,
    rating: 4.8,
    reviews: 92
  },
  {
    id: '6',
    name: 'Brinco Ear Cuff Moderno',
    price: 79.90,
    category: 'feminino',
    type: 'brinco',
    images: [
      'https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Ear cuff moderno em prata com banho 1000, tendência atual da moda feminina.',
    features: ['Prata com banho 1000', 'Design moderno', 'Fácil de usar', 'Confortável'],
    inStock: true,
    rating: 4.6,
    reviews: 74
  }
];