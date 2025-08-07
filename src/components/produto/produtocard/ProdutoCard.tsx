import React from 'react';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
  onCardClick?: (produto: Produto) => void;
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto, onCardClick }) => {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(produto);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {/* Placeholder para imagem do produto */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Imagem do Produto</span>
      </div>
      
      <div className="p-4">
        {/* Título do produto */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {produto.Titulo}
        </h3>
        
        {/* Descrição do produto */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {produto.descricao}
        </p>
        
        {/* Informações adicionais */}
        <div className="flex flex-col gap-2">
          {/* Categoria */}
          {produto.categoria && (
            <div className="flex items-center">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {produto.categoria.Titulo}
              </span>
            </div>
          )}
          
          {/* Usuário */}
          {produto.usuario && (
            <div className="text-xs text-gray-500">
              Por: {produto.usuario.nome}
            </div>
          )}
        </div>
      </div>
      
      {/* Botão de ação */}
      <div className="px-4 pb-4">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default CardProduto;