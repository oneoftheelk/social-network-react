import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "978dea68-3e9b-4548-8e9a-4417d27d7337"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
        ).then(response => response.data);
    },
    addToFriends(id) {
        return (
            instance.post(`follow/${id}`)
        ).then(response => response.data);
    },
    removeFromFriends(id) {
        return (
            instance.delete(`follow/${id}`)
        ).then(response => response.data);
    },
    getProfile(id) {
        console.warn('Outdated method! Please use profileAPI object.');
        return profileAPI.getProfile(id);
    }
}

export const profileAPI = {
    getProfile(id) {
        return (
            instance.get(`profile/${id}`)
        ).then(response => response.data);
    },
    getStatus(id) {
        return (
            instance.get(`profile/status/${id}`)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status})
        ).then(response => response.data);
    }
}

export const authAPI = {
    authorizeMe() {
        return (
            instance.get(`auth/me`)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, { email, password, rememberMe })
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }
}