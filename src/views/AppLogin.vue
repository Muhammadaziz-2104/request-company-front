<template>
    <h1>Tizimga kirish</h1>
    <form action="" @submit.prevent="submit">
        <div :class="['form-control',{'invalid' : eMassage}]">
            <label for="email" >Email</label>
            <input
                    type="email"
                    name="email"
                    v-model="email"
                    id="email"
                    @blur="emailBlur"
            >
            <small v-if="eMassage" class="invalid">{{ eMassage }}</small>
        </div>
        <div :class="['form-control',{'invalid' : pMassage}]">
            <label for="password" >Password</label>
            <input
                    type="password"
                    name="password"
                    v-model="password"
                    id="password"
                    @blur="passwordBlur"
            >
            <small v-if="pMassage" class="invalid">{{pMassage}}</small>
        </div>
        <div class="btns">
            <input type="submit" value="Kirish" class="btn" @click="spinner = true" :disabled="isSubmitting || urinishSoni">
            <button class="google" @click.prevent="test"></button>
            <button class="btn primary" @click.prevent="test2">facebook</button>
        </div>

        <div v-if="urinishSoni">
            <h3>Urunishlar soni ko'payib ketti. Iltimos kuting....</h3>
        </div>
    </form>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {error} from "@/utils/error";
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
// import router from "@/router";


export default {
    setup() {

        const route = useRoute()
        const store = useStore()
        const router = useRouter()

        if(route.query.message) {
            store.dispatch('setMessage',{
                status:'danger',
                title:'Xatolik!',
                text:error(route.query.message)
            },{root:true})
        }
        const firebaseConfig = {
            apiKey: "AIzaSyCl-UKYYXIwtj3KvNxxQs_JX2_6OLNRY-4",
            authDomain: "amalyot-vue.firebaseapp.com",
            databaseURL: "https://amalyot-vue-default-rtdb.firebaseio.com",
            projectId: "amalyot-vue",
            storageBucket: "amalyot-vue.appspot.com",
            messagingSenderId: "926331512567",
            appId: "1:926331512567:web:d427d59466bfc9b92995f2"
        };

// Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const provider1 = new GoogleAuthProvider()
        const provider = new FacebookAuthProvider()


        const test = async () =>{
            const auth = getAuth();
            signInWithPopup(auth, provider1).then(function (result) {
                const token = result.user.accessToken;
                store.commit('auth/setToken', token)
                router.push('/')
            })
        }
        const test2 = async () =>{
            const auth = getAuth();
            signInWithPopup(auth, provider)
                .then((result)=> {
                const token = result.user.accessToken;
                store.commit('auth/setToken', token)
                router.push('/')
            }).catch((e)=>{
                console.log(e + 'ishlamayabti')
            })
        }

        return {
            ...useLoginForm(),
            test,
            test2,
            app,


        }
    }
}
</script>
<style scoped>
.btns {
    display: flex;
}
.btn {
    height: 32px;
    margin-top: 11px;
}
.google{
    width: 50px;
    height: 50px;
    background-image: url("../../public/photo_2023-06-08_10-18-37.jpg");
    background-size: 50px 50px;
    border: none;
    cursor: pointer;
}
img {
    width: 40px;
    margin-top: 15px;
    border: 1px solid red;
    display: inline-block;
}

</style>