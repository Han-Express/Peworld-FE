import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

export default function Layout({children, auth, meta, userId, socket}) {

    return(<>
    <Meta meta={meta}/>
    {auth ?  null : <Navbar userId={userId} socket={socket} /> }
        {children}
     {auth ? null : <Footer />}   
    </>
    )
}