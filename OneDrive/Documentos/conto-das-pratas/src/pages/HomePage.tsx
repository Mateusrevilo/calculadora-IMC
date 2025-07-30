import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Sparkles, Users, Crown } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = products.slice(0, 6);
  const femaleProducts = products.filter(p => p.category === 'feminino').slice(0, 3);
  const maleProducts = products.filter(p => p.category === 'masculino').slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra nossa seleção especial de semijoias premium com prata banho 1000
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/produtos"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors group"
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feminino */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <Crown className="h-8 w-8 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Coleção Feminina</h3>
                  <p className="text-gray-600">Elegância e sofisticação</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
                {femaleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <Link
                to="/categoria/feminino"
                className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors group"
              >
                Ver Coleção Completa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Masculino */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Coleção Masculina</h3>
                  <p className="text-gray-600">Modernidade e estilo</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
                {maleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <Link
                to="/categoria/masculino"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Ver Coleção Completa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-amber-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Receba em primeira mão nossos lançamentos e ofertas exclusivas
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;