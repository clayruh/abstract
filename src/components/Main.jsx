import {useState} from 'react'
import electionData from '../structured_election_data.json'
import StateCard from './StateCard'

export default function Main() {
    // map data into stateCards
    // search by year

    // would actually maybe want another component that displays all the years as buttons to select

    const [voterData, setVoterData] = useState(electionData)

    const yearData = Object.keys(voterData)
    // .filter(e.target(input))

    const mappedStatesData = yearData.map( (year) => {
        return voterData[year].map((state) => { 
            return (<StateCard key={state.id} state={state}/> )})
    } )

    return (
        <div className="main">
            {/* {console.log(voterData.year_2004.map)} */}
            {mappedStatesData}
            {console.log(Date.UTC())}
        </div>
    )
}