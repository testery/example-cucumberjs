@SecondGreet
Feature: Greeting

	Scenario: Say hello
		When the greeter says hello first
		Then I should have heard "hello" first

	Scenario: Say hello Again
		When the greeter says hello first
		Then I should have heard "hello" first

	@hellothird
	Scenario: Say hello Again Again
		When the greeter says hello first
		Then I should have heard "hello" first
