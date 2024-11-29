import { FaAccessibleIcon, FaAmazon } from "react-icons/fa";
function MainContent() {
    let name = "vu quoc thai";

    return (
        <>
            <div className="box">
                <div >
                    Hello {name}
                </div>
                <div  >
                    Hello {name}
                </div>
            </div>
            <FaAccessibleIcon style={{ fontSize: "50px" }} />
            <FaAmazon className="icon" />

        </>
    )
}
export default MainContent