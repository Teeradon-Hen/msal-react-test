import Button from '@mui/material/Button';
import { useMsal } from '@azure/msal-react';
export const SignOutButton = () => {
    const { instance } = useMsal()
    const signOut = () => {
        instance.logoutRedirect()
    }
    return (
        <Button color="inherit" onClick={signOut}>Sign out</Button>
    )
};