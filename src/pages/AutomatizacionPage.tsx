import React from 'react';

const tarjetas = [
  {
    titulo: "Galería de Imágenes",
    descripcion: "Explora las imágenes subidas y catalogadas.",
    url: "https://airtable.com/appViOb3ImcihPSjZ/pagi7MiwCe7E8PIJH/edit?detail=eyJwYWdlSWQiOiJwYWdnNXl5b055bjJiVkhJbiIsInJvd0lkIjoicmVjcjVoOThLSnQ3eWdrSTciLCJzaG93Q29tbWVudHMiOmZhbHNlLCJxdWVyeU9yaWdpbkhpbnQiOnsidHlwZSI6InBhZ2VFbGVtZW50IiwiZWxlbWVudElkIjoicGVsTHM5aTZLNUNFYTgxRlIiLCJxdWVyeUNvbnRhaW5lcklkIjoicGVsQnFDazlnMWNpNDdQNDgifX0,",
    imagen: "http://31.97.12.128:8082/imagenes/Captura%20de%20pantalla%202025-05-02%20222054.png"
  },
  {
    titulo: "Videos",
    descripcion: "Revisa videos y presentaciones en Airtable.",
    url: "https://youtu.be/zoqzNFLnso8",
    imagen: "http://31.97.12.128:8082/imagenes/png-transparent-youtube-computer-icons-youtube-angle-rectangle-black.png"
  },
  {
    titulo: "Detalle de Recursos",
    descripcion: "Consulta detalles y recursos individuales.",
    url: "https://airtable.com/appViOb3ImcihPSjZ/tblOLgrEX1rhSB9y0/viwFfEIz1Kkk2jws7/recr5h98KJt7ygkI7?blocks=hide",
    imagen: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
  }
];

const AutomatizacionPage: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-green-100 via-blue-100 to-blue-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center group"
          >
            <img
              src="http://31.97.12.128:8082/imagenes/logo_sin_fondo.png"
              alt="Inicio"
              className="w-16 h-16 rounded-full border-4 border-blue-200 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <span className="sr-only">Ir al inicio</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tarjetas.map((card, idx) => (
            <div
              key={idx}
              className="
                relative bg-white rounded-2xl shadow-2xl p-7 flex flex-col items-center 
                border-2 border-transparent hover:border-blue-400 
                transition-all duration-300 group
                overflow-hidden
              "
              style={{
                boxShadow: "0 10px 32px 0 rgba(60,180,220,0.12), 0 2px 4px 0 rgba(0,0,0,0.06)",
              }}
            >
              {/* Glow efecto */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 70% 30%, #4ade80cc, #3b82f6cc 60%, transparent 100%)"
                }}
              ></div>
              <img
                src={card.imagen}
                alt={card.titulo}
                className="w-28 h-28 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold mb-1 text-center text-gradient bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent drop-shadow">
                {card.titulo}
              </h2>
              <p className="text-gray-600 text-center mb-4">{card.descripcion}</p>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-300"
              >
                Ver más
              </a>
            </div>
          ))}
        </div>

        {/* Imagen adicional abajo, centrada */}
        <div className="flex justify-center mt-16">
          <img 
            src="http://31.97.12.128:8082/imagenes/Screenshot%202025-08-02%20013431.png" 
            alt="Visualización de datos y análisis" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AutomatizacionPage;
