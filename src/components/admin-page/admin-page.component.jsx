import { signOutUser } from '../../utils/firebase.utils'
import './admin-page.styles.scss'

const Admin=()=>{
    
    const handleOnClick=()=>{
        signOutUser()
    }


    return(
        <div>
            <h2>Admin page</h2>
            <button onClick={handleOnClick}>Sign Out</button>
        </div>
    )
}
export default Admin