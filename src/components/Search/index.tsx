import { Container, Input } from "./styles";
import lupa from '../../images/lupa.svg';

interface InputSearchProps {
    value: string;
    onChange(value: string): void;
  }

export function Search({value, onChange}: InputSearchProps) {
    return (
        <>
            <Container>
                <Input
                    id="find-pokemon"
                    type="text"
                    value={value}
                    placeholder="Pesquisar pokemon"
                    onChange={e => onChange(e.target.value)}
                    maxLength={20}
                >
                </Input>

                <img src={lupa} alt="lupa" />
            </Container>
        </>
    )
}