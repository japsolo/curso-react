function Saludo() {
    const user = "Jane Doe";

    const add = (n1, n2) => n1 + n2;

    return (
        <>
            <h2 className="title">Hello {user}</h2>
            <h2>{5 > 4 ? "Hola" : "Chau"}</h2>

            {30 > 20 ? <h4>Hola que tal</h4> : <h5>Saludos no más</h5>}

            {add(23, 45)}

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus odit voluptatum asperiores delectus, hic non dolore eos omnis voluptas porro nemo pariatur ad corporis cupiditate totam sapiente velit nesciunt!</p>
        </>
    )
}

export default Saludo;