

export function Card({imagenUrl,clasName = "",name,oficio}) {
     
  return (
  
    <>

    

    <div  className={`font-bold p-4 ${clasName}`}   >
      <div className="flex   ">

        

        <img className="w-40 md:w-70 lg:80" src={imagenUrl} alt="Foto" />
        <p
         style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>{oficio}</p>
      </div>
      <h2  >{name}</h2>
      
    </div>
    
      
    </>
  );
}

export default Card