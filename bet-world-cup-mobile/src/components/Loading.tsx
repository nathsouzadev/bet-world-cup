import { Center, Spinner } from 'native-base'

export const Loading = () => {
    return(
        <Center flex={1} bg='gray.500'>
            <Spinner color='yellow.500'/>
        </Center>
    )
}
