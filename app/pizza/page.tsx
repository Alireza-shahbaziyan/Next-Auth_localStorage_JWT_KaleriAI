import dynamic from "next/dynamic";

const PizzaCanvas = dynamic(() => import("./PizzaCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[75vh] grid place-items-center text-white/80">
      Loading 3D…
    </div>
  ),
});

export default function PizzaPage() {
  return <PizzaCanvas />;
}
