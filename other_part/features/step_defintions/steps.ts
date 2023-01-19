import assert from "assert";

import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../../src";

When("the greeter again says hello", function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then("I should have again heard hello", function () {
    assert.equal(this.whatIHeard, "hello");
});
