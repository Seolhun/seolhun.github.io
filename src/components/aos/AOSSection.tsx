import styled from '@emotion/styled';

import 'aos/dist/aos.css';

export interface AOSSectionProps {
  id: string;
}

const AOSSection = styled.section<AOSSectionProps>({
  height: '100vh',
  width: '100%',
});

export default AOSSection;
