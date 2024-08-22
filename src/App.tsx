import { User, Countries } from './components/Person'
import { UserProvider } from './UserContextProvider'

function App() {
    return (
        <>
            <UserProvider>
                <User
                    name={'pedro'}
                    age={22}
                    isMarried={false}
                    country={Countries.Brazil}
                />
            </UserProvider>
        </>
    )
}

export default App
