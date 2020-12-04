const Card = () => {
  return (
    <div className="h-screen flex flex-col justify-center align-center z-10">
      <div className="m-4 px-8 py-8 border-4 border-black bg-white">
        <h1 className="font-bold text-2xl xl:text-5xl lg:text-4xl md:text-3xl">
          PONTAKORN PRASERTSUK
        </h1>
        <p className="font-bold text-gray-600">
          TU81 | TOI14 Gold Medalist | IOI2020 Bronze Medalist
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a target="_blank" href="https://github.com/PeppaPigHS">
            <p className="font-bold hover:underline">Github</p>
          </a>
          <a target="_blank" href="https://facebook.com/pep.pontakorn">
            <p className="font-bold hover:underline">Facebook</p>
          </a>
          <a target="_blank" href="https://instagram.com/pep_papigg">
            <p className="font-bold hover:underline">Instagram</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
