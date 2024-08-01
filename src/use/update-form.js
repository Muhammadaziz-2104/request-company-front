import {useField,useForm} from "vee-validate";
import * as yup from 'yup'

export function useupdateForm(fn){

        const {handleSubmit, isSubmitting} = useForm({initialValues:{
            status:'active'
            }})
        const {value:fio,errorMessage:fioMassage,handeBlur:fioBlur} = useField('fio',
            yup
                .string()
                .trim()
                .required('Fio kiritish majburiy')
        )
        const {value:phone,errorMessage:phoneMassage,handeBlur:phoneBlur} = useField('phone',
            yup
                .string()
                .trim()
                .required('Telefonraqam kiritish majburiy')
        )
        const {value:summa,errorMessage:summaMassage,handeBlur:summaBlur} = useField('summa',
            yup
                .number()
                .required('Summa kiritish majburiy')
        )
        const {value:status} = useField('status')

        const submit = handleSubmit (fn)

        return{
            fio,
            fioMassage,
            fioBlur,
            phone,
            phoneMassage,
            phoneBlur,
            summa,
            summaMassage,
            summaBlur,
            status,
            submit,
            isSubmitting,
        }
}