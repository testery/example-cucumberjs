import assert from "assert";

import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../../src";

interface MyWorld {
  whatIHeard: string;
}

When("the greeter says hello first", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then("I should have heard hello first", function (this: MyWorld) {
    assert.equal(this.whatIHeard, "hello");
});
