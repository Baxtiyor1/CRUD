import { useState } from "react"
// import { NavLink } from "react-router-dom"

//MUI
import { Button, TextField } from "@mui/material"
import { Send } from "@mui/icons-material"

//Hook
import usePostId from "../../Hook/usePostId"

//SASS
import './update.scss'

function Update() {
    let [postId] = usePostId()


    let [updateName, setUpdateName] = useState()
    let [updateSurname, setUpdateSurname] = useState()
    let [updateEmail, setUpdateEmail] = useState()
    let [updateAddress, setUpdateAddress] = useState()

    function update(e) {
        e.preventDefault()

        fetch('https://backendsss.herokuapp.com/users', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: updateName,
                surname: updateSurname,
                email: updateEmail,
                address: updateAddress,
                id: postId
            })
        })
    }
    return (
        <div className='update__wrapper'>

            <form className='update__form' onSubmit={update}>
                <h1 className='update__title'>Update User</h1>
                <TextField className='update__input' id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setUpdateName(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="Surname" variant="outlined" onChange={(e) => setUpdateSurname(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setUpdateEmail(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="Address" variant="outlined" onChange={(e) => setUpdateAddress(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="User Id" variant="outlined" disabled value={postId} />
                <Button className='update__btn' variant="contained" endIcon={<Send />} type='Submit'>
                    {/* <NavLink className='update__link' to='/'> */}
                    Send
                    {/* </NavLink> */}
                </Button>
            </form>
        </div>)
}

export default Update