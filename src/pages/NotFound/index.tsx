import {  Center, Text, Button } from './styles';
import teamrocket from '../../images/teamrocket.png';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <Center>
                <Text>
                    404
                    <img src={teamrocket} alt="teamrocket" />

                    <Button onClick={() => navigate('/')}>
                        Retornar
                    </Button>
                </Text>
            </Center>
        </>
    )
}