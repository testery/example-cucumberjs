@SecondGreet
Feature: Greeting

	Scenario: Say hello
		When the greeter again says hello
		Then I should have again heard hello

	Scenario: Say hello Again
		When the greeter again says hello
		Then I should have again heard hello

	@hellothird
	Scenario: Say hello Again Again
		When the greeter again says hello
		Then I should have again heard hello
