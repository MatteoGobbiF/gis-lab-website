import landslide from "../assets/images/Background-images/landslide.jpeg"


export default function Article() {
    return (
        <section className="">
            <div className="flex flex-col lg:flex-row gap-20 h-full lg:h-screen px-10 md:px-20 md:py-10 mt-10 items-center">
                <article className="lg:w-1/2 space-y-10">
                    <h2 className="text-center leading-normal">The Significance of Landslide Mapping</h2>
                    <div className="lg:hidden w-full h-full rounded-3xl overflow-hidden">
                        <img src={landslide} className=" object-cover object-right w-full h-full " alt="" />
                    </div>
                    <p className="text-justify">Landslides are natural disasters that can have severe consequences, causing loss of life, damage to infrastructure, and significant economic and environmental impacts. To effectively mitigate the risks associated with landslides, it is crucial to have a comprehensive understanding of the areas prone to these geohazards.<br /><br /> Landslide susceptibility mapping is a fundamental step in developing strategies to assess and manage landslide risks. It involves the analysis of various environmental factors and their influence on landslide occurrence. It involves the use of advanced technologies such as <strong>Geographic Information Systems (GIS)</strong> that allows a comprehensive evaluation of factors influencing landslide occurrence, such as slope steepness, soil type, rainfall patterns, vegetation cover, and geological characteristics. Furthermore, exposure assessment is a critical step in understanding landslide risks. It involves evaluating the presence of people, infrastructure, and other elements within hazard-prone zones. This assessment helps quantify the potential impact and vulnerability of these elements to landslides. Combining landslide susceptibility mapping with exposure assessment enable a comprehensive understanding of landslide risks, leading to effective risk mitigation strategies and disaster management efforts.</p>
                </article>
                <div className="hidden lg:block w-full md:w-1/2 h-full rounded-3xl overflow-hidden">
                    <img src={landslide} className=" object-cover object-right w-full h-full " alt="" />
                </div>
            </div>

        </section>
    )
}