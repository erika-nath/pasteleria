import Image from "next/image";
import Navbar from "../components/Navbar";
export const metadata = {
  title: 'Vista tartas',
  description: 'Una descripción de tartas para SEO',
};
const uno =() => {
    return (
      <>
<Navbar />
<div className="text-center text-lg font-medium">
        <h1>Tartas</h1>
        <p>🎂 Tartas, hechas con amor. Disfruta el equilibrio perfecto de sabor y frescura en cada mordida. Desde clásicos irresistibles hasta opciones frutales y personalizadas, nuestras tartas son ideales para cualquier ocasión.

✨ Ordena la tuya y endulza tu día ✨

Si quieres ajustar algún detalle, dime qué necesitas. ¡Vamos a hacerlo irresistible! 😃🍰

</p>
</div>
        <div className="flex justify-center items-center h-screen">
        <Image
        src="/images/pastel1.jpg"
        alt="Pastel"
        width={600}
        height={600}
        />
       </div>
    
      </>
    )
  };
  
  export default uno;