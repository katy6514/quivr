import styled from 'styled-components';
// Remove withTheme if component doesn't use themes, ${props => props.theme}
// import withTheme from '@material-ui/core/styles/withTheme';

/* stylelint-disable no-duplicate-selectors */
// const StyledTitlebarCalendar = withTheme(styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `);
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export { Wrapper };
