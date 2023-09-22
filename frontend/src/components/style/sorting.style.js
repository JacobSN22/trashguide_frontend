import styled from 'styled-components'

export const Sortingstyle = styled.section`

.activetwo {
    color: #6DA830;
}

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

    .search {
        text-align: center;
        margin: 0 0 10em 0;

        h1 {
            color: #0E4F2D;
            font-size: 1.1em;
        }

        span {
            color: #119B1E;
        }

        input {
            border-radius: 2em;
            padding: 0.9em 10em 0.9em 0.4em;
            box-shadow: 0 7px 10px -2px gray;

        }

        input::placeholder {
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1em;

        div {
            margin: auto;
        }

        .container {
            border-radius: 0.3em;
            max-width: 200px;
            max-height: 300px;
            background: white;
            padding: 2em;
            margin-bottom: 1em;
            box-shadow: 2px 1px 7px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 2px 1px 7px 0px rgba(0,0,0,0.75);
            text-align: center;

            img {
            width: 100%;
            object-fit: cover;
        }

        }

        .container:hover {
            width: 210px;
            max-width: 210px;
            height: 270px;
        }
        
        a {
            color: gray;
            text-decoration: none;
        }


    }

`