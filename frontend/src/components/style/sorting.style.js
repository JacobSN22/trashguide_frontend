import styled from 'styled-components'

export const Sortingstyle = styled.section`

section {
    max-width: 100%;
    padding: 2em 5em;
    margin: auto auto;
    font-family: sans-serif;
    background: linear-gradient(
                to top,
                #62BB6500 0%,
                #62BB6533 100%
            );
}

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1em;
        margin: 0 auto;

        .container {
            border-radius: 0.3em;
            max-width: 200px;
            max-height: 300px;
            background: white;
            padding: 2em;
            box-shadow: 2px 1px 17px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 2px 1px 17px 0px rgba(0,0,0,0.75);
            text-align: center;

            img {
            width: 100%;
            object-fit: cover;
        }

        h3 {
            background-color: green;
        }
        }
        


    }

`