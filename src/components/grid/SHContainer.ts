import styled from '@emotion/styled';

interface SHContainerProps {
  isFull?: boolean;
}

const SHContainer = styled.div<SHContainerProps>(({
  isFull,
}) => (() => ({
  maxWidth: isFull ? '100%' : '1200px',
  width: '100%',
  flexGrow: 1,
  flexShrink: 0,
  paddingRight: 0,
  paddingLeft: 0,
  margin: 'auto',
})));

export {
  SHContainer,
  SHContainerProps,
};
export default SHContainer;
