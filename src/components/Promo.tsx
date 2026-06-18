import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const fragrances = [
  {
    name: "Noir Absolu",
    type: "Древесно-восточный · Унисекс",
    price: "от 8 900 ₽",
    notes: "Бергамот · Уд · Амбра · Ваниль",
    img: "https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/c17347c0-3fd9-41a4-81d5-2fb4c0b0442b.jpg",
  },
  {
    name: "Rose Éternelle",
    type: "Цветочный · Для неё",
    price: "от 7 400 ₽",
    notes: "Дамасская роза · Пион · Мускус · Сандал",
    img: "https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/af918d3a-5aaa-4c15-8a3d-423e8e0601d8.jpg",
  },
  {
    name: "Cuir Royal",
    type: "Кожаный · Для него",
    price: "от 9 600 ₽",
    notes: "Кожа · Шафран · Кедр · Табак",
    img: "https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/bc105b21-1738-4974-8715-ce387f4a3d9b.jpg",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8vh", "8vh"]);

  return (
    <section id="notes" ref={container} className="relative bg-graphite py-28 px-6 overflow-hidden">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">
            Избранные ароматы
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
            Анатомия аромата
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fragrances.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group glass rounded-3xl overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <p className="text-gold/80 uppercase tracking-[0.2em] text-[10px] mb-2">{f.type}</p>
                <h3 className="font-serif text-3xl text-white mb-4">{f.name}</h3>
                <p className="text-white/50 text-sm font-light mb-6">{f.notes}</p>
                <div className="flex items-center justify-between border-t border-gold/15 pt-5">
                  <span className="text-gold font-serif text-xl">{f.price}</span>
                  <a
                    href="#catalog"
                    className="text-white/80 hover:text-gold text-xs uppercase tracking-[0.2em] transition-colors"
                  >
                    Заказать →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
