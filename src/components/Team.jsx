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
            <div className=" w-full h-full">
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
        <section className="h-full lg:h-screen py-10 px-10 lg:px-20 text-center">
            <h1 className="mt-10">Team</h1>
            <div className="grid md:grid-cols-3 gap-5 lg:gap-10 my-10">
                {profile.map((member, index) => (
                    <Card key={index} img={member.img} name={member.name} description={member.description} />
                ))}
            </div>

        </section>
    )
}