import React, { useState, useRef } from 'react';
import Categoria from   '../../../models/Categoria';
import CardProduto from '../../produto/produtocard/ProdutoCard';
import Produto from '../../../models/Produto';

interface CarrosselCategoriasProps {
  categorias: Categoria[];
  onProdutoClick?: (produto: Produto) => void;
}

const CarrosselCategorias: React.FC<CarrosselCategoriasProps> = ({ 
  categorias, 
  onProdutoClick 
}) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const produtosDaCategoria = categorias[categoriaAtiva]?.produto || [];

  return (
    <div className="w-full">
      {/* Navegação das categorias */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Categorias</h2>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categorias.map((categoria, index) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaAtiva(index)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                categoriaAtiva === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {categoria.Titulo}
            </button>
          ))}
        </div>
      </div>

      {/* Informações da categoria ativa */}
      {categorias[categoriaAtiva] && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {categorias[categoriaAtiva].Titulo}
          </h3>
          <p className="text-gray-600 mb-4">
            {categorias[categoriaAtiva].descricao}
          </p>
        </div>
      )}

      {/* Carrossel de produtos */}
      <div className="relative">
        {/* Botões de navegação */}
        {produtosDaCategoria.length > 0 && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
              style={{ left: '-20px' }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
              style={{ right: '-20px' }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Container dos produtos */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {produtosDaCategoria.length > 0 ? (
            produtosDaCategoria.map((produto) => (
              <div key={produto.id} className="flex-shrink-0 w-80">
                <CardProduto 
                  produto={produto} 
                  onCardClick={onProdutoClick}
                />
              </div>
            ))
          ) : (
            <div className="flex-shrink-0 w-full">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-500 text-lg">
                  Nenhum produto encontrado nesta categoria
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Indicadores de posição */}
      {produtosDaCategoria.length > 0 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(produtosDaCategoria.length / 3) }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarrosselCategorias;