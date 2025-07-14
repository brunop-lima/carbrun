function Home() {
  return (
    <>
      {/* Seção de introdução */}
      <div className="bg-sky-500 flex justify-center min-h-screen px-4 py-4 text-white">
        <div className="container max-w-3xl flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-5xl font-bold">CarBrun Gráfica!</h2>
          <p className="text-xl">Colocamos sua ideia no papel!</p>
        </div>
      </div>

      {/* Seção do formulário */}
      <div className="bg-sky-100 flex justify-center py-10 px-4">
        <form
          action="https://formsubmit.co/7065d88cfa92a310a1da3b7a5effb0c9"
          method="POST"
          className="flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-lg"
        >
          {/* Redirecionamento e captcha */}
          <input type="hidden" name="_next" value="http://127.0.0.1:5500/sucess.html" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Nome */}
          <label htmlFor="nome" className="font-semibold">Nome</label>
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Digite o seu nome"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          {/* Email */}
          <label htmlFor="email" className="font-semibold">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          {/* Assunto */}
          <label htmlFor="assunto" className="font-semibold">Assunto</label>
          <input
            id="assunto"
            type="text"
            name="assunto"
            placeholder="Digite o assunto da mensagem"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          {/* Mensagem */}
          <label htmlFor="mensagem" className="font-semibold">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            placeholder="Digite a sua mensagem"
            className="p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
          ></textarea>

          {/* Botão */}
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
