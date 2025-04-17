import Image from 'next/image';
import Navbar from '../components/Navbar';

const cumple =() => {
    return (
      <>
      <Navbar />
      <div className="text-center text-lg font-medium">
        <h1>Pastel de cumpleaños</h1>
        <p>Celebra con un pastel único y delicioso. Ofrecemos una gran variedad de sabores y tamaños, desde clásicos irresistibles hasta opciones personalizadas para que cada cumpleaños sea especial.

✨ Elige el tuyo y haz de tu día algo inolvidable. ✨

📍 Ordena ahora por telefono y sorprende con el mejor sabor.</p>
</div>
      <div className="flex justify-center items-center h-screen">
      <Image
        src="/images/pastel3.jpg"
        alt="Pastel"
        width={600}
        height={600}
     
         />
       </div>
       
        </>
    )
  };
  
  export default cumple;


