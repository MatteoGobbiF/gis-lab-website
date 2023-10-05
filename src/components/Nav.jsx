export default function Nav (){
    return (
        <nav className="absolute top-2 md:top-0 z-10 w-full bg-[#404040] text-sm text-white flex justify-between items-center px-10 md:py-2 md:px-20  ">
            <div className="">
                <h3>TIRANOFRANE</h3>
            </div>
            <div className="md:block hidden">
            <ul className="flex gap-10 uppercase ">
                <li>workflow</li>
                <li>team</li>
                <li>contact</li>
            </ul>
            </div>
            
        </nav>
    )
}