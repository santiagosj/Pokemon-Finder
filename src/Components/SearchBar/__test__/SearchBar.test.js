import React from "react";
import { mount, shallow } from "enzyme";
//components and hooks
import useFormHook from "../../../Services/Hooks/customFormHook";
//import useAsyncHook from "../../../Services/Hooks/customAsyncHook";
//import SeachBar from "../SearchBar";

describe("Custom hooks suite test", () => {
  // const wrapper = shallow(<SeachBar />);

  let results;

  const handleHookTester = (hook) => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };

  it("Form hook test", () => {
    handleHookTester(useFormHook);
    expect(results.inputs).toStrictEqual({});
  });
});
