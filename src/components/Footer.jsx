import { BsGithub} from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="bg-primary flex items-center justify-between p-5 text-white">
            <div>
                <p>&copy;TiranoFrane</p>
            </div>
            <div className="text-3xl">
                <BsGithub/>
            </div>
        </footer>
    )
}