const Sidebar = ({ setLanguage, setStartDate, setEndDate }) => {

    const handleStartDateChange = (event) => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate)
    };

    const handleEndDateChange = (event) => {
        const newEndDate = event.target.value;
        setEndDate(newEndDate)
    };

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage)
    }

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <label htmlFor="start">From: </label>
                    <input
                        type="date"
                        id="start"
                        onChange={handleStartDateChange}
                    />
                </li>
                <li>
                    <label htmlFor="end">To: </label>
                    <input
                        type="date"
                        id="end"
                        onChange={handleEndDateChange}
                    />
                </li>
                <li>
                    <label htmlFor="language">Language:</label>
                    <select
                        id="language"
                        name="language"
                        onChange={handleLanguageChange}
                    >
                        <option value="">Select a language</option>
                        <option value="ar">Arabic</option>
                        <option value="de">German</option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="he">Hebrew</option>
                        <option value="it">Italian</option>
                        <option value="nl">Dutch</option>
                        <option value="no">Norwegian</option>
                        <option value="pt">Portuguese</option>
                        <option value="ru">Russian</option>
                        <option value="sv">Swedish</option>
                        <option value="ud">Undefined</option>
                        <option value="zh">Chinese</option>
                    </select>
                </li>
                {/*<li>
                    <button onClick={handleApplyFilters}>Apply Filters</button>
                </li>*/}
            </ul>
        </nav>
    );
};

export default Sidebar;
