# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
No: 1
Acceptance criteria: none
Time/effort estimates: 0.5hr
Implementation details: create new table that makes relationship between facilities and agents. For example, the table name is agents_for_facilities, and it has 4 fields including id(internal id, auto-increment, not null), agent_id, facility_id, custom_id.

No: 2
Acceptance criteria: none
Time/effort estimates: 0.5hr
Implementation details: create new function to save custom_id of agents for facilities whenever new shift is added. For example, when a new shift is added, if the corresponding agent doesn't exist in agents_for_facilities table for a given facility, add it to the table, and its custom_id is total number of agents for a given facility + 1.

No: 3
Acceptance criteria: none
Time/effort estimates: 0.5hr
Implementation details: modify generateReport function. For a given shift, get the corresponding facility_id and agent_id included in it, and get the custom_id using them in agents_for_facilities table, and finally, include that custom_id in the report.