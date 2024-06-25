import { useState } from "react"


function ShowHide() {

    const [show, setShow] = useState(true);
    const handleClick = (event) => {
        setShow(!show);
    }

    return (
        <div>
            {show && <h2>Hide me!</h2>}
            <button onClick={handleClick}>
                {show ? "Hide text" : "Show text"}</button>
        </div>
    )
}

export default ShowHide