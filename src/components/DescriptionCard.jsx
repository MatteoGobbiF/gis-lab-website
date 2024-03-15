export default function DescriptionCard ({text,img}) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 justify-evenly py-10 relative border-2 border-red-600">
            <div className="md:w-1/2 lg:w-1/2 border-2 border-yellow-500"><p className=" text-justify ">{text}</p></div>
            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 rounded-xl overflow-hidden "><img src={img} alt="" /></div>
        </div>
    )
}