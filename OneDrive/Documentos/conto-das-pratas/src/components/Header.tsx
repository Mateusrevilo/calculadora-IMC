import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-amber-900 text-white py-2 px-4 text-center text-sm">
        <p>Frete grátis para compras acima de R$ 200 | Prata com banho 1000 - A melhor qualidade</p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">CP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-900">Conto das Pratas</h1>
              <p className="text-xs text-gray-600">Semijoias Premium</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/conta" className="hidden md:flex items-center text-gray-700 hover:text-amber-600 transition-colors">
              <User className="h-5 w-5 mr-1" />
              <span className="text-sm">Minha Conta</span>
            </Link>
            
            <Link to="/favoritos" className="text-gray-700 hover:text-amber-600 transition-colors">
              <Heart className="h-6 w-6" />
            </Link>

            <Link to="/carrinho" className="relative text-gray-700 hover:text-amber-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t border-gray-100">
          <Link to="/categoria/feminino" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Feminino
          </Link>
          <Link to="/categoria/masculino" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Masculino
          </Link>
          <Link to="/novidades" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Novidades
          </Link>
          <Link to="/promocoes" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Promoções
          </Link>
          <Link to="/sobre" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Sobre Nós
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
          <nav className="px-4 py-2 space-y-2">
            <Link to="/categoria/feminino" className="block py-2 text-gray-700 hover:text-amber-600">
              Feminino
            </Link>
            <Link to="/categoria/masculino" className="block py-2 text-gray-700 hover:text-amber-600">
              Masculino
            </Link>
            <Link to="/novidades" className="block py-2 text-gray-700 hover:text-amber-600">
              Novidades
            </Link>
            <Link to="/promocoes" className="block py-2 text-gray-700 hover:text-amber-600">
              Promoções
            </Link>
            <Link to="/conta" className="block py-2 text-gray-700 hover:text-amber-600">
              Minha Conta
            </Link>
            <Link to="/sobre" className="block py-2 text-gray-700 hover:text-amber-600">
              Sobre Nós
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;