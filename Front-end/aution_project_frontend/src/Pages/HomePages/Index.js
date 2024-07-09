import HomeBanner from "../../Assets/Banner_home.png"
import "./Css/Index.css"
function HomePage() {
    return (
        <div className="w-full h-[1000px] max-h-screen" style={{
            backgroundImage: `url(${HomeBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maxHeight: '100vh'
        }}>
            <span className="content absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-[76px] max-w-[378px] font-bold">
                Bid high, own your destiny.
            </span>
        </div>
    );
}

export default HomePage;