import SectionShell from "@/components/sections/SectionShell";
export default function Location(){
  return (<SectionShell id="location"><div className="max-w-5xl mx-auto w-full">
    <h2 className="text-3xl md:text-5xl font-bold text-center">Where to find us</h2>
    <div className="mt-6 card overflow-hidden"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/BlankMap-World.svg" alt="Map" className="w-full h-80 object-contain bg-white"/></div>
  </div></SectionShell>);
}
