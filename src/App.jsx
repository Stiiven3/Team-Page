import photo1 from './assets/images/photo1.png'
import photo2 from './assets/images/photo2.png'
import photo3 from './assets/images/photo3.png'
import photo4 from './assets/images/photo4.png'
import photo5 from './assets/images/photo5.png'
import photo6 from './assets/images/photo6.png'

import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="md:flex md:justify-between md:items-start">
        <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold">
          The creative crew
        </h1>

        <div className=" md:text-left mt-4 md:mt-0 max-w-sm">
          <span className="font-bold block text-2xl">Who we are</span>
          <p>
            We are team of creatively diverse, driven innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>

      <main
        className="
          grid grid-cols-2 gap-6 mt-10   md:max-w-5xl md:mx-auto
          md:grid-cols-3 md:gap-x-12 md:gap-y-8
        "
      >
        {/* Columna 1 */}
        <div className="space-y-4">
          <Card
            name="Bill Mahoney"
            oficio="PRODUCT OWNER"
            imagenUrl={photo1}
          />

          <Card
            name="Skylah Lu"
            oficio="UX DESIGNER"
            imagenUrl={photo4}
            clasName="hidden lg:block"
          />
          <Card
            name="Shae Le"
            oficio="TECHLEAD"
            imagenUrl={photo3}
            clasName="sm:hidden"
          />
          <Card
            name="Griff Richards"
            oficio="DEVELOPER"
            imagenUrl={photo5}
            clasName="sm:hidden"
          />
        </div>

        {/* Columna 2 */}
        <div className="space-y-4 mt-16 md:mt-8">
          <Card
            name="Saba Cabrera"
            oficio="ART DIRECTOR"
            imagenUrl={photo2}
          />
          <Card
            name="Griff Richards"
            oficio="DEVELOPER"
            imagenUrl={photo5}
            clasName="hidden lg:block"
          />
          <Card
            name="Skylah Lu"
            oficio="UX DESIGNER"
            imagenUrl={photo4}
            clasName="sm:hidden"
          />
          <Card
            name="Stan John"
            oficio="DEVELOPER"
            imagenUrl={photo6}
            clasName="sm:hidden"
          />
        </div>

        {/* Columna 3 (solo desktop) */}
        <div className=" hidden md:flex md:flex-col md:space-y-4">
          <Card
            name="Shae Le"
            oficio="TECHLEAD"
            imagenUrl={photo3}
          />
          <Card
            name="Stan John"
            oficio="DEVELOPER"
            imagenUrl={photo6}
          />
        </div>
      </main>
    </>
  );
}

export default App;
