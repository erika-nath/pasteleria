import Image from "next/image";
import Navbar from "./components/Navbar";

const Home =() => {
  return (
    <div>
       <Navbar />
       <div className="text-center text-lg font-medium">

<h1>Pasteleria de mamá</h1>
       <p>Explora nuestra variedad de tartas, pasteles de boda y cumpleaños, diseñados para cada ocasión especial. ¡Descubre todos nuestros sabores y encuentra tu favorito!

✨ Navega por nuestras secciones y endulza tu día. ✨</p>
</div>
       <div className="flex justify-center items-center h-screen ">

        <Image
        src="/images/portada.png"
        alt="Portada"
        width={600}
        height={600}
        >
        </Image>
       </div>
     </div>
  )
};

export default Home;
