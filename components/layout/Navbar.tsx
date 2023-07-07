
const Navbar = () => {
  return (
    <header className="py-5 px-16 flex justify-center border-b-[1px] border-gray-500">
        <ul className="flex items-center justify-center gap-5">
            {
             ["Inicio", "Oficinas", "Monitoreo"].map( (item, index) => (
                <li key={index} className="font-semibold text-white hover:text-sky-500 cursor-pointer text-md md:text-xl">
                    {item}
                </li>
             ))
            }
        </ul>
    </header>
  )
}

export default Navbar