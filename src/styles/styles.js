import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
:root{
--Softred: hsl(10, 79%, 65%);
--Cyan: hsl(186, 34%, 60%);

--Darkbrown: hsl(25, 47%, 15%);
--Mediumbrown: hsl(28, 10%, 53%);
--Cream: hsl(27, 66%, 92%);
--Verypaleorange: hsl(33, 100%, 98%);

--font: 'DM Sans', sans-serif;
--size-s: 1.6rem;
--size-m: 2.4rem;
--size-l: 3rem;
}

@media (min-width: 500px) {
    :root{
        --size-s: 1.8rem;
        --size-m: 3rem;
        --size-l: 4.8rem;

    }
}
html {
    font-size: 62.5%;
    box-sizing: border-box;
}

*,*::after,*::before{
    box-sizing: inherit;
}

body {
    font-size: 1.8rem;
    font-family: var(--font);
    background: var(--Cream);
    padding: 0rem 1.6rem;
    min-height: 100vh;
       display: flex;
       align-items: center;
       justify-content: center;
  
}
h1,h2,h3,p{
    margin: 0;
    padding: 0;
}
h2{
    font-size: var(--size-m);
    font-weight: 700;
    color: var(--Darkbrown);

}  
#root{
    flex-basis: 54rem;
}
`;
