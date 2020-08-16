import React from "react";
import { mount, shallow } from "enzyme";
import { act, render, fireEvent, cleanup } from "@testing-library/react";
//components and hooks
import useFormHook from "../../../Services/Hooks/customFormHook";
import App from "../../../App";
import Home from "../../../Pages/Home";
import useAsyncHook from "../../../Services/Hooks/customAsyncHook";
import SeachBar from "../SearchBar";
import PokemonProvider from "../../../Services/Store/PokemonContext";

//afterEach(cleanup);

describe("SearchBar suite test", () => {
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

  it("Context Mock", () => {
    const { container, getByText } = render(
      <App>
        <PokemonProvider>
          <Home>
            <SeachBar />
          </Home>
        </PokemonProvider>
      </App>
    );

    fireEvent.click(getByText("🔍 Buscar Pokemon"));

    expect(results.inputs).not.toBeUndefined();
  });
});
