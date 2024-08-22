import { useState } from 'react'

interface Props {
    name: string
    age: number
    isMarried: boolean
}

export const Person = (props: Props) => {
    const [personBio, setPersonBio] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }
    // const [isShowInfo, setShowInfo] = useState<boolean>(false)

    // const toggleInfo = () => {
    //     setShowInfo(prev => !prev)
    // }
    return (
        <div>
            {/* {isShowInfo && ( */}
            <>
                <p>Name: {props.name}</p>
                <p>age: {props.age}</p>
                <p>married: {props.isMarried}</p>
            </>
            {/* )} */}
            {/* <button onClick={toggleInfo}>Toggle Info</button> */}
            <p>
                {' '}
                {props.name} Bio: {!personBio ? 'No Bio Available' : personBio}
            </p>
            <input onChange={handleChange} />
        </div>
    )
}
