@FirstGreet
Feature: First Greeting

	@hellofirst
	Scenario: Say hello First
		When the greeter says hello first
		Then I should have heard hello first

	Scenario: Say hello First Again
		When the greeter says hello first
		Then I should have heard hello first

	Scenario: Say hello First Again Again
		When the greeter says hello first
		Then I should have heard hello first
