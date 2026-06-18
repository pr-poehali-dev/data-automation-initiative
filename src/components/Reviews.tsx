import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна К.",
    text: "Заказывала Rose Éternelle — аромат раскрывается весь день и собирает комплименты. Упаковка достойна подарка люксового бренда.",
    fragrance: "Rose Éternelle",
  },
  {
    name: "Дмитрий В.",
    text: "Cuir Royal — мой новый фаворит. Глубокий, благородный, очень стойкий. Консультант помог подобрать идеально под мой характер.",
    fragrance: "Cuir Royal",
  },
  {
    name: "Мария Л.",
    text: "Заказ пришёл за день, всё бережно упаковано. Noir Absolu превзошёл ожидания — теперь буду заказывать только здесь.",
    fragrance: "Noir Absolu",
  },
];

const delivery = [
  { icon: "Truck", title: "Доставка 1–3 дня", text: "Курьером по всей России, бесплатно от 10 000 ₽" },
  { icon: "CreditCard", title: "Удобная оплата", text: "Картой онлайн, при получении или в рассрочку" },
  { icon: "ShieldCheck", title: "Гарантия подлинности", text: "100% оригинал или вернём деньги" },
  { icon: "RotateCcw", title: "Возврат 14 дней", text: "Не подошёл аромат — обменяем без вопросов" },
];

export default function Reviews() {
  return (
    <section className="relative bg-graphite py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          id="reviews"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 scroll-mt-24"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Отзывы</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
            Истории наших клиентов
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5 text-gold">
                {[...Array(5)].map((_, s) => (
                  <Icon key={s} name="Star" size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6 flex-1">{r.text}</p>
              <div className="border-t border-gold/15 pt-4">
                <p className="text-white font-medium">{r.name}</p>
                <p className="text-gold/70 text-xs uppercase tracking-[0.15em] mt-1">{r.fragrance}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="delivery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 scroll-mt-24"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Сервис</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
            Доставка и оплата
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {delivery.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full glass flex items-center justify-center mb-5">
                <Icon name={d.icon} size={26} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-2">{d.title}</h3>
              <p className="text-white/55 text-sm font-light">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
