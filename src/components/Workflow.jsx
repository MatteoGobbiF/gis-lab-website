

export default function Workflow({ children }) {

    return (
        <section className="h-[100vh] overflow-hidden border-2 border-black w-full   text-center ">
            <h2 className="text-center my-10">Workflow</h2>
            <div className="flex flex-col h-full">
                <div className="border-2 border-red-500 w-full p-20">
                    
                </div>
                <div className="border-2 border-yellow-300 w-full overflow-y-scroll h-full">
                    {children}
                </div>
            </div>

        </section>
    )
}


