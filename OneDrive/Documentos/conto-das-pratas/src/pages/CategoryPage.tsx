import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: 'feminino' | 'masculino' }>();
  const [sortBy, setSortBy] = useState('featured');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => product.category === category);

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(product => product.type === filterType);
    }

    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [category, sortBy, filterType, priceRange]);

  const categoryTypes = useMemo(() => {
    const types = products
      .filter(product => product.category === category)
      .map(product => product.type);
    return [...new Set(types)];
  }, [category]);

  const categoryTitle = category === 'feminino' ? 'Coleção Feminina' : 'Coleção Masculina';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryTitle}</h1>
            <p className="text-gray-600">
              {category === 'feminino' 
                ? 'Elegância e sofisticação em cada peça'
                : 'Modernidade e estilo para o homem contemporâneo'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 space-y-6">
              <h3 className="font-semibold text-gray-900">Filtros</h3>

              {/* Type Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Categoria</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="all"
                      checked={filterType === 'all'}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Todos</span>
                  </label>
                  {categoryTypes.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={filterType === type}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Faixa de Preço</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-700">Mínimo: R$ {priceRange.min}</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                      className="w-full mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Máximo: R$ {priceRange.max}</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                      className="w-full mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center text-gray-600 hover:text-amber-600"
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filtros
                </button>
                <p className="text-gray-600">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500"
              >
                <option value="featured">Em Destaque</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="name">Nome A-Z</option>
                <option value="rating">Melhor Avaliado</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;