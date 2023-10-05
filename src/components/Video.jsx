import Video from "../assets/images/Background-images/Tirano_area_overview.mp4";

export default function VideoLoop({children}) {

    return (
        <div className="h-screen overflow-hidden relative">
            {children}
            <video className="min-h-full min-w-full right-0 bottom-0 object-cover"
            src={Video}
            muted="muted"
            autoPlay={true}
            loop
        />
        </div>
        
    );
}