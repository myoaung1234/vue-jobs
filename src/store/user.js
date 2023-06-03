import { defineStore } from 'pinia'
import { api } from '../services'
import Storage from '../utils/storage'
import { computed, ref } from 'vue'

export const userStorage = new Storage('user')

export const isAuthorized = () => !!userStorage.get()

export const useUserStore = defineStore('user', () => {
    const user = ref(userStorage.get())
    const isAuthorized = computed(() => user.value !== null)

    function updateUser (userData, token) {
        if(userData === undefined || userData == null) {
            userStorage.remove()
            api.setSecurityData(null)
            user.value = null
        } else {
            userData.token = token;
            userStorage.set(userData)
            api.setSecurityData(userData.token)
            user.value = userData
        }
    }

    return {
        user,
        isAuthorized,
        updateUser,
    }
})