import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import {Navigate} from 'react-router'
import {useLocation} from 'react-router-dom'
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>;
    }

    if(user?.email){
        return children;
    } else{
        Swal.fire(
            '',
            'You have to log in first to view details !! ',
            'warning'
          )
    }


    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;