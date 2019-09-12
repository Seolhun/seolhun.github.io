import styled from '@emotion/styled';

interface SectionTitleProps {
  theme?: any;
  isUpperCase?: boolean;
}

const SectionTitle = styled.div<SectionTitleProps>(({ theme, isUpperCase }) => {
  return {
    fontSize: theme.fonts.SIZE.big,
    color: theme.colors.white,
    textTransform: isUpperCase ? 'uppercase' : 'none',
    textAlign: 'center',
    position: 'relative',
    padding: '2rem 0 0',
    marginBottom: '2rem',

    '&:after': {
      content: '""',
      height: '1px',
      width: '50px',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      marginLeft: '-25px',
      background: theme.colors.white,
    },
  };
});

export default SectionTitle;
