import { useContext, useState } from 'react'
import { UserContext } from '../UserContextProvider'

interface Props {
    name: string
    age: number
    isMarried: boolean
    country: Countries
}

export enum Countries {
    Brazil = 'Brazil',
    France = 'France',
    India = 'India',
    UnitedState = 'United States'
}

export const User = (props: Props) => {
    // const [personBio, setPersonBio] = useState<string | null>(null)

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPersonBio(event.target.value)
    // }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    // }
    // const [isShowInfo, setShowInfo] = useState<boolean>(false)

    // const toggleInfo = () => {
    //     setShowInfo(prev => !prev)
    // }

    // const { updateUser, addUser, deleteUser, users } = useContext(UserContext)

    return (
        <div>
            {/* {isShowInfo && ( */}
            <>
                <p>Name: {props.name}</p>
                <p>age: {props.age}</p>
                <p>married: {props.isMarried}</p>
                <p>Country of Origin: {props.country}</p>
            </>
            {/* )} */}
            {/* <button onClick={toggleInfo}>Toggle Info</button> */}
            {/* <p>
                {' '}
                {props.name} Bio: {!personBio ? 'No Bio Available' : personBio}
            </p>
            <input onChange={handleChange} /> */}
        </div>
    )
}
