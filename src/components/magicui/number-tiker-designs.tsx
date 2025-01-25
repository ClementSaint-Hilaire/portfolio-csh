import NumberTicker from "../ui/number-ticker"; 

export function NumberTickerDesigns() {
  return (
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-start to-blue-end text-[86px] font-extrabold">
    <span className="bg-clip-text text-transparent">
      <NumberTicker value={230}/>
    </span>
  </p>
  );
}