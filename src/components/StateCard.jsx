export default function StateCard({state}) {
    return (
        <div className="state-card">
            {console.log(state)}
            <h2 className="state-card--name">{state.state}</h2>
            <p className="state-card--text"><strong>Democrat vote: </strong>{state.popular_vote_democrat}</p>
            <p className="state-card--text"><strong>Republican vote: </strong>{state.popular_vote_republican}</p>
            <p className="state-card--text"><strong>Total vote: </strong>{state.popular_vote_total}</p>
        </div>
    )
}