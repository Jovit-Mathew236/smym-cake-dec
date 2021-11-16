import Admin from '../components/Admin/Admin'

function AdminPage() {

    
    let pass = prompt( 'Password:') ;
    
    if (pass === 'smym@pls') {
        return (
            <div>
                <Admin />
            </div>
        )
    } else {
        return (
            <div>
                <h1 style={{color:"red",marginTop:"5rem"}}>Wrong Password</h1>
            </div>
        )
    }


}

export default AdminPage
