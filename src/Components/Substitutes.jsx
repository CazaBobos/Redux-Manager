import { connect } from "react-redux";

const Substitutes = ({substitutes,removeSubstitute}) => {
    return(
        <section>
            <h2>Substitutes</h2>
             <div className="substitutes">
                 {
                    substitutes.map(player => (
                        <article className="substitute" key={player.id}>
                            <div>
                                <img src={player.photo} alt={player.name} />
                                <button onClick={()=>removeSubstitute(player)}>X</button>
                                <p>{player.name}</p>
                            </div>
                        </article>
                    ))
                }
             </div>
        </section>
    );
}
const mapStateToProps = state => ({
    substitutes: state.substitutes
})
const mapDispatchToProps = dispatch => ({
    removeSubstitute(player){
        dispatch({
            type: "Remove_Substitute",
            player
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Substitutes);
