import { connect } from "react-redux"

const Players = ({players, addTitular, addSubstitute}) => {
    return (
        <section>
            <h2>Players</h2>
            <div className="player-container">
                {
                    players.map(player => (
                    <article className="player" key={player.id}>
                        <img src={player.photo} alt={player.name} />
                        <h3>{player.name}</h3>
                        <div>
                            <button onClick={() => addTitular(player)}>
                                Starting
                            </button>
                            <button onClick={()=> addSubstitute(player)}>
                                Substitute
                            </button>
                        </div>
                    </article>
                    ))
                }
                
            </div>
        </section>
    )
}
const mapStatetoProps = state => ({
    players : state.players
})
const mapDispatchToProps = dispatch => ({
    addTitular(player){
        dispatch({
            type: "Add_Starting",
            player
        })
    },
    addSubstitute(player){
        dispatch({
            type: "Add_Substitute",
            player
        })
    }
})

export default connect(
    mapStatetoProps,mapDispatchToProps
)(Players)