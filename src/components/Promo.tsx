import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const prices = [
  { vol: "10 мл", price: "1 780 ₽" },
  { vol: "15 мл", price: "2 250 ₽" },
  { vol: "20 мл", price: "3 240 ₽" },
  { vol: "30 мл", price: "4 180 ₽" },
];

const fragrances = [
  {
    name: "Nejma",
    brand: "NEJMA 7",
    type: "Цитрусово-цветочный · Унисекс",
    top: "Бергамот · Мандарин · Розовый грейпфрут",
    heart: "Кокос · Нероли · Какао",
    base: "Белый мускус · Пачули",
    img: "https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/c17347c0-3fd9-41a4-81d5-2fb4c0b0442b.jpg",
  },
  {
    name: "Aventus",
    brand: "CREED",
    type: "Фруктово-древесный · Для него",
    top: "Ананас · Черная смородина · Бергамот · Яблоко",
    heart: "Береза · Пачули · Марокканский жасмин · Роза",
    base: "Мускус · Дубовый мох · Серая амбра · Ваниль",
    img: "https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/bc105b21-1738-4974-8715-ce387f4a3d9b.jpg",
  },
  {
    name: "Invictus",
    brand: "PACO RABANNE",
    type: "Морской · Для него",
    top: "Морские ноты · Грейпфрут · Мандарин",
    heart: "Лавр · Жасмин",
    base: "Серая амбра · Гаяк · Дубовый мох · Пачули",
    img: "https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/af918d3a-5aaa-4c15-8a3d-423e8e0601d8.jpg",
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
              className="group glass rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-72 overflow-hidden shrink-0">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-gold/80 glass px-3 py-1 rounded-full">
                  {f.brand}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-gold/70 uppercase tracking-[0.2em] text-[10px] mb-1">{f.type}</p>
                <h3 className="font-serif text-3xl text-white mb-5">{f.name}</h3>

                <div className="space-y-2 mb-6">
                  <div className="flex gap-2 text-xs">
                    <span className="text-gold/60 uppercase tracking-widest w-12 shrink-0 pt-0.5">Верх</span>
                    <span className="text-white/55 font-light leading-relaxed">{f.top}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-gold/60 uppercase tracking-widest w-12 shrink-0 pt-0.5">Серд.</span>
                    <span className="text-white/55 font-light leading-relaxed">{f.heart}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-gold/60 uppercase tracking-widest w-12 shrink-0 pt-0.5">База</span>
                    <span className="text-white/55 font-light leading-relaxed">{f.base}</span>
                  </div>
                </div>

                <div className="border-t border-gold/15 pt-5 mt-auto">
                  <div className="grid grid-cols-4 gap-1 mb-5">
                    {prices.map((p) => (
                      <div key={p.vol} className="text-center glass rounded-xl py-2 px-1">
                        <p className="text-gold/60 text-[9px] uppercase tracking-wider mb-1">{p.vol}</p>
                        <p className="text-white text-xs font-medium">{p.price}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="block text-center glass text-gold text-xs uppercase tracking-[0.2em] py-3 rounded-full hover:bg-gold/10 transition-all duration-300"
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