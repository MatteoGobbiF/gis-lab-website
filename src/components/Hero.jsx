import VideoLoop from "./Video";



export default function Hero({ children }) {

    return (
        <main className="h-screen relative">
            {children}
            <VideoLoop>
                <div className="absolute px-10 md:px-20  space-y-8 h-full flex flex-col justify-center text-left">
                    <h1 className="text-yellow-300">Exploring geohazards</h1>
                    <div className="md:w-[400px] text-justify">
                        <p>The following analysis is aimed to study the landslide susceptibility of the Tirano area within Lombardy Region in the northern part of Italy.</p>
                    </div>
                    <button className="border-2 border-black md:w-[200px] p-3 rounded-2xl bg-black text-yellow-300">Read Article</button>
                </div>
            </VideoLoop>




        </main>
    )
}