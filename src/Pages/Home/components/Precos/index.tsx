import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CardTipo } from "./componentes/CardTipo";

import imagemIttalo from "./assets/ittalo.JPG";
import imagemAyrton from "./assets/ayrton.JPG";
import imagemAdriana from "./assets/adriana.png";
import imagemTrioElegante from "./assets/trioElegante.png";

export const Precos = () => {
  const cards = [
    {
      id: 1,
      imagem: imagemIttalo,
      genero: "Masculino",
      tipo: "Negócios Casuais",
      descricao: "Foto de roupas de negócios casuais",
    },
    {
      id: 2,
      imagem: imagemAyrton,
      genero: "Masculino",
      tipo: "Negócios Casuais",
      descricao: "Foto de roupas de moda de rua",
    },
    {
      id: 3,
      imagem: imagemAdriana,
      genero: "Feminino",
      tipo: "Festas Sociais",
      descricao: "Foto de roupas para festas sociais",
    },
    {
      id: 4,
      imagem: imagemTrioElegante,
      genero: "Feminino",
      tipo: "Negócios Casuais",
      descricao: "Foto de roupas para negócios casuais femininas",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8" id="colecoes">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Coleções
          </h2>

          <a
            href="#"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Mostre mais
          </a>
        </div>

        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card) => {
            //Não tem erro, o callback está certo
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={card.id}
                initial={{ opacity: 0, y: 90 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <CardTipo
                  imagem={card.imagem}
                  genero={card.genero}
                  tipo={card.tipo}
                  descricao={card.descricao}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
