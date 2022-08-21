import styled, { ThemeProvider } from "styled-components";

const defaultMainColor = "#118ab2";

const Anchor = styled.a`
    display: inline-block;
    font-size: 18px;
    text-decoration: none;
    color: ${({ theme }) => theme.mainColor || defaultMainColor};
    padding: 10px 16px;
    border: solid 1px ${(props) => props.theme.mainColor || defaultMainColor};
    margin: 5px;
    transition: 320ms;
    &:hover {
        background-color: ${({ theme }) => theme.mainColor || defaultMainColor};
        color: #fff;
        opacity: 0.7;
    }
`;

const Paragraph = styled.p`
    border: solid 1px ${({ theme }) => theme.mainColor || defaultMainColor};
    padding: 10px;
    color: ${({ theme }) => theme.mainColor || defaultMainColor};
`;

const LightTheme = {
    mainColor: "#e63946"
}

const DarkTheme = {
    mainColor: "#003049"
}

export const StyledComponents = () => {
    return (
        <div>
            <h2>Styled Components</h2>
            <Anchor href="https://google.com/">Soy un enlace</Anchor>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse assumenda nisi voluptate cumque molestiae nemo dolor hic deserunt molestias totam placeat quos provident unde, maxime atque sint repudiandae eligendi.
            </Paragraph>

            <ThemeProvider theme={LightTheme}>
                <Anchor href="https://google.com/">Soy un enlace</Anchor>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse assumenda nisi voluptate cumque molestiae nemo dolor hic deserunt molestias totam placeat quos provident unde, maxime atque sint repudiandae eligendi.
                </Paragraph>
            </ThemeProvider>

            <ThemeProvider theme={DarkTheme}>
                <Anchor href="https://google.com/">Soy un enlace</Anchor>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse assumenda nisi voluptate cumque molestiae nemo dolor hic deserunt molestias totam placeat quos provident unde, maxime atque sint repudiandae eligendi.
                </Paragraph>
            </ThemeProvider>
            <hr />
        </div>
    )
}