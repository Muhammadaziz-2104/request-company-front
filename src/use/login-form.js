import {useField,useForm} from "vee-validate";
import * as yup from 'yup'
import{computed,watch} from "vue";
import {useStore} from 'vuex'
import {useRouter} from "vue-router";

export function useLoginForm(){

        const router = useRouter()
        const store = useStore()

        const {handleSubmit, isSubmitting, submitCount} = useForm()

        const {value:email,errorMessage:eMassage,handeBlur:emailBlur} = useField('email',
            yup
                .string()
                .trim()
                .required('Emailni kiritish majburiy')
                .email('Email @ belgisi bilan bo\'lishi kerak')
        )

        const {value:password,errorMessage:pMassage,handeBlur:passwordBlur} = useField('password',
            yup
                .string()
                .trim()
                .required('Parolni kiritish majburiy')
                .min(6, 'Kamida 6 belgi bo\'lishi shart')
        )

        const submit = handleSubmit ( async values =>{
            // console.log(values)
           try {
               await store.dispatch('auth/login', values)
               router.push('/')
           }
           catch (e) {
               console.log(e)
           }
        } )

        const urinishSoni = computed(()=> submitCount.value > 3)
        watch(urinishSoni, val=>{
            if(val) {
                setTimeout(()=>{
                    submitCount.value = 0
                },3000)
            }
        })
        return{
            email,
            eMassage,
            emailBlur,
            password,
            pMassage,
            passwordBlur,
            submit,
            isSubmitting,
            urinishSoni
        }
}