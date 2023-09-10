import React, { useState } from 'react';

const Sidebar = ({ setLanguage, setStartDate }) => {

    const handleStartDateChange = (event) => {
        const newStartDate = event.target.value;
    };

    const handleLanguageChange = (event) => {
        const newLanguageFilter = event.target.value;
    };

    const handleApplyFilters = () => {

    };

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <label htmlFor="start">Start date:</label>
                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value={startDate}
                        min="2000-01-01"
                        max="2018-12-31"
                        onChange={handleStartDateChange}
                    />
                </li>
                <label htmlFor="language">Language:</label>
                <select
                    id="language"
                    name="language"
                    value={setLanguage}
                    onChange={hangleLanguageChange}
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
                <li>
                    <button onClick={handleApplyFilters}>Apply Filters</button>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
