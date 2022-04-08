import { connect } from "react-redux";
import Field from './FieldSVG'

const Startings = ({startings, removeStarting}) => {
    return(
        <section>
            <h2>Starting Players</h2>
             <div className="field">
                 {
                    startings.map(player => (
                        <article className="starting" key={player.id}>
                            <div>
                                <img src={player.photo} alt={player.name} />
                                <button onClick={()=> removeStarting(player)}>X</button>
                                <p>{player.name}</p>
                            </div>
                        </article>
                    ))
                }
                <Field/>
             </div>
        </section>
    );
}
const mapStateToProps = state => ({
    startings: state.startings
})
const mapDispatchToProps = dispatch => ({
    removeStarting(player){
        dispatch({
            type: "Remove_Starting",
            player
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Startings);
