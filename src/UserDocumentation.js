import React from 'react';

const UserDocumentation = () => {
    return (
        <div id="user_documentation_text">
            <h1>How To Use This Form</h1>

            <h3>Description</h3>
            <ul>
                <li>Allows tenants to create a maintenance request online.</li>
                <li>This will improve accessibility for tenants as it simplifies the maintenance request submittal process.</li>
                <li>This system sends an email to the maintenance team manager with the details entered in the form.</li>
            </ul>
            <h3>How to view this page on your computer directly (Not from the HRDC website link)</h3>
            <ul>
                <li>Go to this <a target="_blank" rel="noreferrer" href="https://fphillips22.github.io/test-pages/" title="HRDC Maintenence Request Form">web address</a>.</li>
                <li>Clicking the above link should result in a new tab opening in your browser. The new tab should contain the webpage displaying the form.</li>
                <li>That's all! If you fill out the form on the page and click submit, it will submit a maintenance request.</li>
            </ul>
            <h3>How to use the software</h3>
            <ul>
                <li>In each field, enter the appropriate information.</li>
                <li>In the field titled <q>Name</q>, enter your first and last name</li>
                <li>In the field titled <q>Email</q>, enter your email address. Be sure to include the entire email: 'youremail@example.com'</li>
                <li>In the field titled <q>Message</q>, enter a description of the issue you want the maintenance team to address. This should include any details you think the team should know.</li>
                <li>In the field titled <q>Select Your HRDC Property</q>, select your property from the dropdown menu. If you do not see the menu, click the words <q>Select a Property</q>.</li>
                <li>In the field titled <q>Maintenance Category</q>, use the dropdown menu to select the category you maintenance issue belongs to. If you do not see the menu, click the words <q>Select a Category</q>.</li>
                <li>In the field titled <q>Urgency</q>, use the dropdown manu to select the urgency of your request. An urgency rating of 5 (Very High) should only be used if the issue is preventing you from dwelling in you unit. If your issue is preventing you from dwelling in your unit, please contact the HRDC main office immediately at (406) 587-4486.</li>
                <li>In the field titled <q>Permission To Key Into This Unit</q>, use the dropdown menu to select either <q>Yes</q> or <q>No</q>. Selecting yes indicates that you give your consent to the HRDC maintenance team to enter your unit to resolve the issue even if you are no home at the time.</li>
            </ul>
        </div>
    )

};

export default UserDocumentation;