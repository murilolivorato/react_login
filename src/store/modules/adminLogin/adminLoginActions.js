export const fetchSSOLogin = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                process.env.REACT_APP_API_URL + 'api/sso-login'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const ssoLoginData = await fetchData();

            return ssoLoginData;
        } catch (error) {
            console.log(error)
        }
    };
};