import Image from 'next/image';
import Navbar from '../components/Navbar'

const blog =() => {
    return (
      <>
      <Navbar />
      <div className="text-center text-lg font-medium">
        <h1>Pastel de bodas</h1>
        <p>Cada boda merece un pastel tan especial como la ocasión. Nuestros pasteles de boda combinan sabor, arte y sofisticación para que tu celebración sea inolvidable.

Diseñamos cada creación con ingredientes de alta calidad, decoraciones exclusivas y ese toque de amor que transforma cada bocado en un recuerdo inolvidable.

Personaliza tu pastel con los sabores y diseños que mejor reflejen tu historia. Porque el primer dulce momento juntos debe ser perfecto.

</p>
</div>
<div className="flex justify-center items-center h-screen">
      <Image
        src="/images/pastel2.jpg"
        alt="Pastel"
        width={600}
        height={600}
        />
    </div>
        </>
    )
  };
  
  export default blog;