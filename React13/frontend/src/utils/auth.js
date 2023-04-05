export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();
    if(tokenDuration < 0) return 'EXPIRED';
    return token;
}

export const tokenLoader = () =>{
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();
    if(!token){
        return redirect('/auth');
    }
} 

export const getTokenDuration = () => {
    const storedExpDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}