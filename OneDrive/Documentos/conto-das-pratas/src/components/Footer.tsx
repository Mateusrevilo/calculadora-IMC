import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">CP</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Conto das Pratas</h2>
                <p className="text-gray-400 text-sm">Semijoias Premium</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Especializada em semijoias de alta qualidade com prata e banho 1000. 
              Oferecemos elegância, durabilidade e sofisticação para todas as ocasiões.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/categoria/feminino" className="text-gray-300 hover:text-white transition-colors">Feminino</Link></li>
              <li><Link to="/categoria/masculino" className="text-gray-300 hover:text-white transition-colors">Masculino</Link></li>
              <li><Link to="/novidades" className="text-gray-300 hover:text-white transition-colors">Novidades</Link></li>
              <li><Link to="/promocoes" className="text-gray-300 hover:text-white transition-colors">Promoções</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/conta" className="hover:text-white transition-colors">Minha Conta</Link></li>
              <li><Link to="/pedidos" className="hover:text-white transition-colors">Meus Pedidos</Link></li>
              <li><Link to="/trocas" className="hover:text-white transition-colors">Trocas e Devoluções</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>São Paulo, SP - Brasil</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contato@contodaspratas.com.br</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2025 Conto das Pratas. Todos os direitos reservados.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>para você</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;