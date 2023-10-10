// import { useOutletContext , useParams} from "react-router-dom";
import { useOutletContext} from "react-router-dom";


const Emails = () => {

    const { openDrawer} = useOutletContext();

    return (
        <div style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }>
            hell0000oo</div>
    )
}

export default Emails;