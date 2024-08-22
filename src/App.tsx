import { User } from './components/Person'
import { UserProvider } from './UserContextProvider'

function App() {
    return (
        <>
            <UserProvider>
                <User name={'pedro'} age={22} isMarried={false} />
            </UserProvider>
        </>
    )
}

export default App
