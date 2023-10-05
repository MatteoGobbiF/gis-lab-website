

const NavItem = ({ text }) => {
    return (
        <li className="uppercase cursor-pointer hover:text-yellow-300 hover:underline underline-offset-8">{text}</li>
    )
}


export default function Nav() {
    return (
        <nav className="absolute top-2 md:top-0 z-10 w-full text-sm text-white flex justify-between items-center px-10 md:py-5 md:px-20  ">
            <a>
                <h3>TIRANOFRANE</h3>
            </a>
            <div className="md:block hidden">
                <ul className="flex gap-10 uppercase">
                    <NavItem text={"workflow"}/>
                    <NavItem text={"team"}/>
                    <NavItem text={"webgis"}/>

                </ul>
            </div>

        </nav>
    )
}