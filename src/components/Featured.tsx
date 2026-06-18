import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Gem",
    title: "Оригинальная парфюмерия",
    text: "Только подлинные ароматы напрямую от брендов и официальных дистрибьюторов.",
  },
  {
    icon: "Truck",
    title: "Доставка по всей стране",
    text: "Бережная упаковка и быстрая доставка курьером в любой город за 1–3 дня.",
  },
  {
    icon: "Sparkles",
    title: "Подбор аромата",
    text: "Персональная консультация парфюмера, который найдёт ваш идеальный шлейф.",
  },
  {
    icon: "Gift",
    title: "Премиальная упаковка",
    text: "Каждый заказ — в элегантной подарочной коробке с фирменным оформлением.",
  },
];

export default function Featured() {
  return (
    <section id="catalog" className="relative bg-graphite py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">
            Почему AURÉLE
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
            Роскошь в каждой детали
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-6">
                <Icon name={item.icon} size={26} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
