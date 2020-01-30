import styled from 'styled-components';
import { elevation, setFlex } from '../utilities';

const Wrapper = styled.div`
    position: relative;
    min-height: 97vh;
    margin: 0 auto;
    padding: 20px 40px;
    background-color: #E0E5EC;
    border-radius: 15px;
    ${elevation[4]};
    ${props => setFlex({ 
        xF: props.xF || "center",
        yF: props.yF || "center"
    })};
`;

export default Wrapper;