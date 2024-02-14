
import React, { useState } from 'react'
import useAxios from './useAxios'
import { CurrentUser } from '@/utils/network'
import { UserType } from '@/utils/types'

type Props = {}

const useUser = async (props: Props) => {
    const [loading, setLoading] = useState(false)
    const {axiosHandler} = useAxios()
    const res = await axiosHandler<UserType>(CurrentUser, "get", null, true)
    console.log(res);
    // triger the effect or use a state to store the user 
}

export default useUser