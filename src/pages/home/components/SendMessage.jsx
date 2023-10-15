
export const SendMessage = () => {
    return (
        <div className="sendMessage">
            <h1>Pedidos Personalizados</h1>
            <div className="form">
                <p>¡Contáctanos para tener detalles de tu producto personalizado!</p>
                <form>
                    <input placeholder="Mensaje" type="text" />
                    <button>ENVIAR <i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}
