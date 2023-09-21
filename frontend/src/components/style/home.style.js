import styled from 'styled-components'

export const Sectionstyle = styled.section`

section {
    font-family: sans-serif;
    height: 900px;
}

    img {
        width: 100%;
        max-width: 99%;
        height: 662px;
        object-fit: cover;
    }

    .main img {
        position: absolute;
    }

    .onmain {
        height: 200px;
        width: 100%;
        max-height: 250px;
        max-width: 600px;
        background-color: #D8EADB;
        position: relative;
        top: 520px;
        left: 30%;
        border-radius: 1em;
        padding: 2em;
        text-align: center;
    }

    h3 {
        font-size: 35px;
        color: #222A41;
        font-weight: 100;
    }

    a {
        padding: 1em 2em;
        background-color: #114D46;
        color: #FFFFFF;
        border-radius: 0.3em;
        margin: 4em 1em 0 0;
        border: none;
        text-decoration: none;
    }

    article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10em;
        padding: 0 15%;
        font-family: sans-serif;
        margin-bottom: 5em;

        img {
            width: 100%;
            height: 90%;
            object-fit: cover;
            border-radius: 1em;
        }

        h2 {
            font-size: 65px;
            font-weight: 100;
        }
            
        span {
            background: linear-gradient(
                to top,
                #62BB65 0%,
                #62BB65 50%,
                white 50%,
                white 100%
            );
        }
        

        p {
            font-size: 20px;
        }
    }

    .artone {
        .pic {
            width: 400px;
            max-width: 400px;
        }

        img {
            height: 400px;
            width: 400px;
            object-fit: cover;
        }
    }

    .arttwo {

        .pic {
            width: 400px;
            max-width: 400px;
        }

        img {
            height: 400px;
            width: 400px;
            object-fit: cover;
        }
    }

`