interface CostCardProps {
  component: string;
  cost: string;
}

export default function CostCard({ component, cost }: CostCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 text-center hover:bg-white/[0.07] transition-all duration-300 group">
      <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3 uppercase tracking-wide">
        {component}
      </h3>
      <p className="text-cta-red text-[32px] lg:text-[40px] font-bold group-hover:scale-105 transition-transform duration-300">
        {cost}
      </p>
    </div>
  );
}




