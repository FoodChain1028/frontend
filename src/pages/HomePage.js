import HomeNav from "../components/HomeNav";
import { Announcement, Posts } from "../components/Announcement";

const HomePage = () => {
    return (
        <>
            <HomeNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">

                        {/* Main content area */}
                    </div>
                    <div className="col-md-4">
                        {/* <Announcement /> */}
                        {/* <Posts /> */}
                    </div>
                </div>
            </div >
        </>
    );
}

export default HomePage