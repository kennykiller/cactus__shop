export default {
    isAuthenticated(state) {
        return state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    },
    isToken(state) {
        return state.token;
    }
}