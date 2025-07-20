'use client';

export default function Region () {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              A Região Jardim Botânico
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-6 font-heading">
              Um dos Bairros Mais Cobiçados de Curitiba
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              O Jardim Botânico é reconhecido como um dos bairros mais sofisticados e desejados de Curitiba.
              Localizado na região sul da cidade, oferece uma qualidade de vida excepcional com excelente
              infraestrutura e proximidade com as principais atrações da capital paranaense.
            </p>
          </div>

          {/* Grid de Características */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🌳</div>
              <h4 className="text-lg font-bold text-green-800 mb-2">Área Verde</h4>
              <p className="text-sm text-green-700">
                Um dos bairros com maior índice de área verde por habitante, proporcionando ar puro e tranquilidade.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">Educação de Qualidade</h4>
              <p className="text-sm text-blue-700">
                Próximo às melhores escolas e universidades de Curitiba, incluindo a UFPR e PUCPR.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-lg font-bold text-red-800 mb-2">Saúde</h4>
              <p className="text-sm text-red-700">
                Excelente rede hospitalar com o Hospital Universitário, Hospital Pequeno Príncipe e clínicas especializadas.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🛍️</div>
              <h4 className="text-lg font-bold text-purple-800 mb-2">Comércio e Lazer</h4>
              <p className="text-sm text-purple-700">
                Shopping Plaza, restaurantes gourmet, cafés e opções de entretenimento para toda a família.
              </p>
            </div>
          </div>

          {/* Mapa e Localização */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mapa */}
            <div className="bg-gray-100 p-4 rounded-2xl">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1234567890123!2d-49.23456789012345!3d-25.45678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1234567890%3A0xabcdef1234567890!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localização do Residencial Botanique"
                ></iframe>
              </div>
            </div>

            {/* Informações de Localização */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                  Localização Estratégica
                </h3>
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-4">Endereço Exato</h4>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Av. Prefeito Maurício Fruet, 1270</p>
                    <p className="text-green-100">Jardim Botânico • Curitiba - PR</p>
                    <p className="text-green-100">CEP: 82900-010</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🌳</div>
                  <p className="font-bold text-gray-900">700m</p>
                  <p className="text-sm text-gray-600">Jardim Botânico</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <p className="font-bold text-gray-900">1,2km</p>
                  <p className="text-sm text-gray-600">Hospital</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🛒</div>
                  <p className="font-bold text-gray-900">2,5km</p>
                  <p className="text-sm text-gray-600">Shopping</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🚌</div>
                  <p className="font-bold text-gray-900">1,8km</p>
                  <p className="text-sm text-gray-600">Terminal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
