import { signOutUser } from '../../utils/firebase.utils'
import './admin-page.styles.scss'
import Table from '../table/table.component'
import { getCarsList } from '../../utils/firebase.utils'
import AddItem from '../add-form/add-form.component'

const Admin=()=>{
    
    const handleOnClick=()=>{
        signOutUser()
    }

    const cars=getCarsList()


    return(
        <div className='admin-page-container'>
            <h2>Admin page</h2>
            <Table cars={cars}/>
            <div className='buttons-container'>
                <AddItem/>
                <button onClick={handleOnClick}>Sign Out</button>
            </div>
        </div>
    )
}
export default Admin