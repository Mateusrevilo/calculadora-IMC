import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50">
      {/* Main Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px] py-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-amber-600 font-medium">Semijoias Premium</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Conto das
                <span className="text-amber-600 block">Pratas</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Descubra nossa coleção exclusiva de semijoias em prata com banho 1000. 
              Elegância, qualidade e sofisticação em cada peça.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/categoria/feminino"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center group"
              >
                Ver Coleção Feminina
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/categoria/masculino"
                className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"
              >
                Coleção Masculina
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1454181/pexels-photo-1454181.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Semijoias Conto das Pratas"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-4 left-4 w-32 h-32 bg-amber-200 rounded-full opacity-50"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-amber-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Prata Banho 1000</h3>
                <p className="text-gray-600 text-sm">A melhor qualidade em banho de prata, garantindo durabilidade e brilho duradouro.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Frete Grátis</h3>
                <p className="text-gray-600 text-sm">Entrega gratuita para compras acima de R$ 200 em todo o território nacional.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Garantia de Qualidade</h3>
                <p className="text-gray-600 text-sm">Garantia de 6 meses contra defeitos de fabricação e qualidade premium.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;