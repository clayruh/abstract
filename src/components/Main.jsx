import {useState} from 'react'
import electionData from '../structured_election_data.json'
import StateCard from './StateCard'
import Dropdown from './Dropdown'

export default function Main() {
    // map data into stateCards
    // search by year
    const [voterData, setVoterData] = useState(electionData)
    const [selectedYear, setSelectedYear] = useState('')

    // gives me access to the year keys of the dataset
    const yearData = Object.keys(voterData)

    function handleYearChange(year) {
        setSelectedYear(year)
    }
    
    const mappedStatesData = 
        selectedYear ? voterData[selectedYear].map((state) => (<StateCard key={state.id} state={state}/>)) : null

    return (
        <div>
            <Dropdown 
                yearData={yearData} 
                selectedYear={selectedYear}
                handleYearChange={handleYearChange}
            />
            <div className="main">
                <div className="state-card">
                    <h2 className="state-card--name">State</h2>
                    <p className="state-card--text"><strong>Democrat votes: </strong></p>
                    <p className="state-card--text"><strong>Republican votes: </strong></p>
                    <p className="state-card--text"><strong>Total votes: </strong></p>
                </div>
                {mappedStatesData}
            </div>
        </div>
    )
}