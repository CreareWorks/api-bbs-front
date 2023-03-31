import { TextField } from '@mui/material'

import type { UseFormRegister, FieldValues } from 'react-hook-form'
import { LoginInput } from '@/features/auth/types/login'
import { RegisterInput } from '@/features/register/types/registerType'


// Register Login 両方のInputタグのコンポーネント
type Props = {
    register: UseFormRegister<LoginInput | RegisterInput>,
    type: 'email' | 'password' | 'name' | 'password_confirmation'
}
const Input = ({ register, type }: Props) => {
    return (
        <>
            <TextField sx={{ marginTop: '3%' }}
                {...register(type)}
                label={type}
                fullWidth
                required
                type={type}
            />
        </>
    )
}

export default Input
