import Carrousel from "@/components/carrousel";
import Location from "@/components/location";

export default function Inicio() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <Carrousel/>
      </section>
      <section id="contacto" className="flex flex-col items-center justify-center">
        <Location/>
      </section>
    </>

  );
}
