import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
export const WelcomeName = () => {
    const { instance} = useMsal()
    const [ name, setName] = useState()

    useEffect(()=>{
        const currAccount = instance.getActiveAccount()
        if(currAccount)
        setName(currAccount.username)
    },[instance])
    return <Typography variant="h6">Welcome, {name}</Typography>;
};