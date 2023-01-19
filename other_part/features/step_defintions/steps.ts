import assert from "assert";

import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../../src";

interface MyWorld {
  whatIHeard: string;
}

When("the greeter again says hello", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then(/I should have again heard "(.*)"/, function (this: MyWorld, expectedResponse: string) {
    assert.equal(this.whatIHeard, expectedResponse);
});
