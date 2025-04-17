import Image from 'next/image';
import Navbar from '../components/Navbar';

const infantil =() => {
    return (
      <>
      <Navbar />
      <div className="text-center text-lg font-medium">
        <h1>Pasteles infantiles</h1>
        <p>Haz que cada cumpleaños sea inolvidable con nuestros pasteles infantiles llenos de color, sabor y creatividad. Diseñados especialmente para los más pequeños, con personajes, colores vibrantes y sabores irresistibles.

✨ Endulza su día con un pastel único y especial. ✨

📍 Ordena el tuyo y celebra con alegría.</p>
        </div>

      <div className="flex justify-center items-center h-screen">
      <Image
        src="/images/pastel7.jpg"
        alt="Pastel"
        width={600}
        height={600}
       />
       </div>
       
        </>
    )
  };
  
  export default infantil;