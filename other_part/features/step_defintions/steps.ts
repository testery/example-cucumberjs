import assert from "assert";

import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../../src";

interface MyWorld {
  whatIHeard: string;
}

When("the greeter again says hello", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then("I should have again heard hello", function (this: MyWorld) {
    assert.equal(this.whatIHeard, "hello");
});
