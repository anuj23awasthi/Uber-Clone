// import React, { useContext} from 'react'
// import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import PropTypes from 'prop-types'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
     if(!token){
        navigate('/login')
     }
     return (
        <>
            {children}
        </>
     )
    }

UserProtectWrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserProtectWrapper;