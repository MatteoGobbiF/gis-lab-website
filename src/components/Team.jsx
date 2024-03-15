import ellen from "../assets/images/Team/ellen.jpg";
import matteo from "../assets/images/Team/matteo.jpg";
import lorenzo from "../assets/images/Team/lorenzo.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const profile = [
    {
        name: "Lorenzo Carlassara",
        description: "Mathematical Engineer. Made in Gavardo (BS), raised in Verona (VR), optimized in Milano (MI).",
        img: lorenzo
    },
    {
        name: "Matteo Gobbi Frattini",
        description: "Computer Science Engineer. Made in Lecco (LC), raised in Sondrio (SO), optimized in Milano (MI).",
        img: matteo
    },
    {
        name: "Ellen Poli",
        description: "Environmental Engineer. Made in Cles (TN), raised in Pinzolo (TN), optimized in Milano (MI).",
        img: ellen
    },
];

const Card = ({ img, name, description }) => {
    return (
        <div className="card">
            <div className="w-full h-full">
                <img src={img} className="object-cover min-w-full min-h-full" alt="" />
            </div>
            <div className="space-y-10">
                <h3 className="font-bold">{name}</h3>
                <p className="text-black px-8 text-justify hidden md:block">{description}</p>
            </div>
            <div className="flex justify-evenly rounded-full bg-slate-200 bg-opacity-40 text-slate-600 p-2 mx-10 lg:mx-20 text-xl md:text-2xl">
                <BsGithub />
                <BsLinkedin />
                <GrMail />
            </div>
        </div>
    )
}
export default function Team() {
    return (
        <section className="h-full lg:h-screen py-10 px-10 text-center flex flex-col justify-center items-center relative">
            <h1 className="lg:absolute lg:inset-10 mb-24">Team</h1>
            <div className="grid md:grid-cols-3 gap-10 justify-center w-full md:px-5">
                {profile.map((profile, index) => (
                    <Card key={index} img={profile.img} name={profile.name} description={profile.description} />
                ))}
            </div>

        </section>
    )
}