import styled from 'styled-components';

export const BarStyle = styled.div`
  display: flex;
  height: 15rem;

  div {
    align-self: flex-end;
    background-color: ${(props) =>
      props.per === 100 ? 'hsla(186, 34%, 60%, 1)' : 'hsla(10, 79%, 65%, 1)'};
    border-radius: 0.5rem;
    cursor: pointer;
    height: ${(props) => props.per}%;
    position: relative;
    transition: all ease 0.3s;
    width: 100%;

    display: flex;
    justify-content: center;

    &:hover {
      background-color: ${(props) =>
        props.per === 100
          ? 'hsla(186, 34%, 60%, 0.7)'
          : 'hsla(10, 79%, 65%, 0.7)'};
      &::after {
        background-color: hsl(25, 47%, 15%);
        border-radius: 0.5rem;
        color: white;
        content: '$${(props) => props.amount}';
        font-size: 1.2rem;
        margin-top: -4.2rem;
        opacity: unset;
        padding: 0.8rem 1rem;
        position: absolute;
        text-align: center;

        @media (min-width: 500px) {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export const TextBarStyle = styled.div`
  color: hsl(28, 10%, 53%);
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 1.6rem;
  }
`;
