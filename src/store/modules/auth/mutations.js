export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        console.log(state);
        // state.tokenExpiration = payload.tokenExpiration;
    }
}