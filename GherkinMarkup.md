Brews Brothers - Features and Scenarios

Feature: Log In
As a home-brewer and user of Brews Brothers, I would like to log in via social media so that I can access Brews Brothers without creating a unique login.

Scenario: Visit to splash page
	Given that I have navigated to (Brews Brothers URL - TBD)
	And I am not already logged in
	Then I will view the splash page
	And I will be presented with highly visible options to Login with Google and Login with Facebook
Scenario: Login via Google
	Given that I have navigated to (Brews Brothers URL - TBD)
	And I have an account with Google
	When I select the “Login with Google” option
	Then I will be logged into Brews Brothers
	And if I have a profile picture associated with my Google profile
	Then the profile picture will appear on my Brew Brothers Dashboard view
	And if I have no profile picture associated with my Google profile
	Then a default image will appear on my Brew Brothers Dashboard view
Scenario: Login via Facebook
	Given that I have navigated to (Brews Brothers URL - TBD)
	And I have an account with Facebook
	When I select the “Login with Facebook” option
	Then I will be logged into Brews Brothers
	And if I have a profile picture associated with my Facebook profile
	Then the profile picture will appear on my Brew Brothers Dashboard view
	And if I have no profile picture associated with my Facebook profile
	Then a default image will appear on my Brew Brothers Dashboard view
Scenario: Failed login
	Given that I have navigated to (Brews Brothers URL - TBD)
	And I have clicked on either the Login with Google or Login with Facebook option
	When the login fails for any reason
	Then I want to be presented an alert indicating that the login has failed
	And I should be automatically re-routed to the Brews Brothers splash view

Feature: Create new batch

Scenario: Create New Batch with default values
	Given that I am a logged in Brews Brothers user
	And I have navigated to my Dashboard View
	And I have selected the “New Batch” option
            And I have been presented with the New Batch form
	When I have filled in the batch name text field
	And I have selected an option from the default styles menu
	Then a new batch will be created with the name defined in the text field
	And default values will populate the model that controls the RaspberryPi
	And I will be routed to the Batch View for this new batch
	And the new batch will be viewable in the “My Batches” list on the Dashboard with the value of “Pending”
Scenario: Clone existing batch
	Given that I have navigated to my dashboard
	And I have selected one of my existing batches
	When I select the “Clone Batch” option
	Then a New Batch will be created
	And I will be routed to the Batch View for this new batch
	And the name of the batch will default to the name of the parent batch + 1
	And I will be routed to the Batch View for this new batch
	And the new batch will be viewable in the “My Batches” list on the Dashboard with the value of “Pending”

Feature: Start Batch

Scenario: Start a batch
	Given that I have created or cloned a new batch
	And I have physically placed a new batch in the Chiller
	When I navigate to the relevant Batch view
	And I select the “Start Batch” option
	Then the batch values will be sent to the RaspberryPi
	And the RaspberryPi will monitor the temperature sensors (both)
	And regulate the thermostat to bring the temperature in line with the defined batch values

Feature: View All Batches (list)

Scenario: Summary view on Dashboard
	Given that I am a logged-in user of Brews Brothers
	And I have previously saved at least one batch
	When I navigate to my Dashboard view
	Then I will be presented with a list of my five most recent batches
	And any Current Batch will be listed first
	And any Pending Batches will be listed next in order of creation, most recent first
	And any Historical Batches will be listed next in order of creation, most recent first  
Scenario: View all batches
	Given that I am a logged-in user of Brews Brothers
	And I have saved at least one batch
	When I select the “View All Batches” option
	Then I will be presented with a list of all my batches
	And any Current Batch will be listed first
	And any Pending Batches will be listed next in order of creation, most recent first
	And any Historical Batches will be listed next in order of creation, most recent first  

Feature: View Batch (single)

Scenario: View batch
	Given that I am a logged-in user of Brews Brothers
	And I have navigated to the All Batches view
	And I have a current, historical or pending batches in the list
	When I select the “View Batch” option  
	Then I will be presented with the Batch View for the batch selected
Scenario: Batch View
	Given that I am a logged-in user of Brews Brothers
	When I have clicked “View Batch”
	Then I will be presented with the Batch View showing Batch Name
	And Batch Values
	And a Sensor Data over Time graph (ref story #     )
	And any notes associated with the batch
	And a button to “Add Note”

Feature: Update Batch (single)

Scenario: Update batch with comment
	Given that I have an existing batch
	And I have navigated to the Batch View
	When I select the Add Note option
	Then I will be presented with a Comment Form
	And when I select Submit
	Then the comment will appear in the Batch View
Scenario: Update current batch values
	Given that I have an existing batch
	And I have navigated to the Batch View
	When I select the Modify Values option
	Then I will be presented with a form populated with the Batch values
	And I will be able to change values that have not passed
	And I will not be able to change values that have passed
	And when I click “Save” the new values will populate the batch values
Scenario: Update pending batch values
	Given that I have either cloned an existing batch
	Or I have created a new batch with default values
	When I navigate to the Batch View
	And I select the “Modify Values” option
	Then I will be presented with a form populated with the Batch values
	And I will be able to change any values
	And when I click “Save” the new values will populate the batch values

Feature: Read remote temperature sensors

Scenario: Read temperature sensor
	Given that I am a user of Brews brothers
	And I have an active batch in process
	When the timing interval is met (e.g. every 10 minutes for example)
	Then the Cloud Node server will make a call and
	And Get the data from the Pi

Feature: Graph sensor data

Scenario: View graph of temperature data for Current Batch
	Given that I have a Batch that has been Started
	And my cloud Node server is logging the temperature/time data to my database
	When I navigate to My Dashboard
	And I click on the Current Batch
	Then I will be presented with a view of the batch including setup configurations
	And a graph of each sensor’s temperature reading over time.
Scenario: View graph of temperature data for Historical Batches
	Given that I have a Batch that has been Completed
	And my cloud Node server is logging the temp/time data to my database
	When I navigate to My Dashboard
	And I click on the Current Batch
	Then I will be presented with a view of the batch including setup configurations
	And a graph of each sensor’s temperature reading over time.

Feature: Control thermostat

Scenario: Lower Temperature
	Given that a batch is in process
	When the temperature of the Batch is higher of the established Batch values 	
	Then the Raspberry Pi will instruct the thermostat to lower the temperature
	And the compressor will remain on until the temperature of the Batch, the internal chiller temperature and the established Batch value remain the same.
