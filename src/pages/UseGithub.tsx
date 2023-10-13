import axios from "axios";
import { useEffect, useState } from "react"


export const UseGithub = (username: string) => {

    const [user, setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, seterror] = useState({});


    useEffect(() => {

        axios.get('https://api.github.com/users/' + username)
            .then(res => {
                setuser(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                seterror(err);
                setIsLoading(false);
            })


    }, [username])


    return { user, isLoading, error }


}