export default function DescriptionCard ({text,img}) {
    return (
        <div className="flex px-20 py-10 items-center justify-evenly border-2 border-red-400">
            <div className="w-1/4"><p className=" text-justify ">{text}</p></div>
            <div className="rounded-2xl overflow-hidden w-1/4"><img src={img} alt="" /></div>
        </div>
    )
}