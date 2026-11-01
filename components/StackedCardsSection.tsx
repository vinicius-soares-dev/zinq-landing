"use client"; 

import { motion } from "framer-motion";
import { MessageCircle, UserX, Activity } from "lucide-react";

const painCards = [
  {
    id: 1, title: "O Buraco Negro do WhatsApp",
    description: "Você perde horas negociando horários e não faz ideia de como sua equipe atende os clientes no celular pessoal. A comunicação está fora do seu controle.",
    icon: MessageCircle, color: "from-rose-400 to-red-500", shadow: "shadow-rose-500/10", topOffset: "top-[10vh]",
  },
  {
    id: 2, title: "O Custo Oculto do 'No-Show'",
    description: "Clientes que marcam e não aparecem não são um acidente, são um furo direto no seu caixa. Quanto você perdeu esse mês com horários ociosos?",
    icon: UserX, color: "from-orange-400 to-amber-500", shadow: "shadow-orange-500/10", topOffset: "top-[14vh]",
  },
  {
    id: 3, title: "A Equipe às Cegas",
    description: "Sem métricas e processos, sua operação vira um gargalo. Tarefas são esquecidas, prazos estouram e você não sabe quem realmente produz e quem apenas 'bate ponto'.",
    icon: Activity, color: "from-violet-400 to-purple-500", shadow: "shadow-violet-500/10", topOffset: "top-[18vh]",
  }
];

export const StackedCardsSection = () => {
  return (
    <section className="relative bg-slate-50 pt-32 pb-48">
      
      {/* 🎯 Efeitos de Luz Mantidos, mas com aceleração de hardware (transform-gpu) e redução leve de blur só no mobile */}
      <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-blob transform-gpu will-change-transform"></div>
        <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 transform-gpu will-change-transform"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-400/20 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-blob animation-delay-4000 transform-gpu will-change-transform"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // 🎯 Gatilho antecipado: Começa a aparecer quando estiver a 100px de distância de entrar na tela
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Escalar sem um sistema é <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-rose-500">
              perder dinheiro todos os dias.
            </span>
          </h2>
        </motion.div>

        <div className="relative w-full">
          {painCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // 🎯 Gatilho antecipado para os cartões também
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 70 }}
              
              // 🎯 Mantido o backdrop-blur-xl e adicionado transform-gpu
              className={`sticky ${card.topOffset} group flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 mb-8 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl ${card.shadow} hover:shadow-3xl hover:bg-white/90 transition-all duration-500 transform-gpu`}
            >
              
              <div className="absolute right-8 md:left-8 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-slate-900/[0.02] select-none pointer-events-none group-hover:text-slate-900/[0.04] transition-colors duration-500 z-0">
                0{card.id}
              </div>

              <div className={`relative p-1 rounded-[2rem] bg-gradient-to-br ${card.color} shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500 z-10`}>
                <div className="p-6 bg-white rounded-[1.8rem] relative z-10">
                  <card.icon size={48} className="text-slate-800" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};