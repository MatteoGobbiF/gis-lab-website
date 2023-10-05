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
        <div className="bg-white md:min-w-[400px] md:max-w-[500px] md:min-h-[500px] md:max-h-[800px] rounded-2xl  grid grid-cols-1 items-center overflow-hidden">
            <div className=" w-full h-full  ">
                <img src={img} className="object-cover min-w-full min-h-full" alt="" />
            </div>
            <div className="space-y-4">
                <h3 className="font-bold">{name}</h3>
                <p className="text-black px-8 text-justify">{description}</p>
            </div>
            <div className="flex justify-evenly rounded-full bg-slate-200 bg-opacity-40 text-slate-600 p-2 mx-20">
                <BsGithub />
                <BsLinkedin />
                <GrMail />
            </div>
        </div>
    )
}


export default function Team() {
    return (
        <section className="h-screen py-10 px-20 text-center ">
            <h1 className="mt-10">Team</h1>
            <div className=" grid grid-cols-3 gap-10  my-20">
                {profile.map((member, index) => (
                    <Card key={index} img={member.img} name={member.name} description={member.description} />
                ))}
            </div>

        </section>
    )
}