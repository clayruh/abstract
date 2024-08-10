export default function Dropdown({yearData, selectedYear, handleYearChange}) {

    function onSelectChange(e) {
        handleYearChange(e.target.value)
    }

    return (
        <div>
            {/* {console.log(yearData)} */}
            <select value={selectedYear} onChange={onSelectChange}>
                <option value="">Select a year</option>
                {yearData.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    )
}