import React from "react";
import PokemonCard from "../PokemonCard";
import { render, shallow, mount } from "enzyme";

describe("PokemonCard Test Suite", () => {
  //objeto hardcodeado.
  const pokeMock = {
    name: "pikachu",
    id: 25,
    sprites: {
      back_default: "http:/someurl.com",
      front_default: "http:/someurl.com",
    },
  };

  it("Imagenes del pokemon buscado", () => {
    const wrapper = render(<PokemonCard pokemon={pokeMock} />);

    expect(wrapper.find("#img-back").length).toEqual(1);

    expect(wrapper.find("#img-front").length).toEqual(1);
  });

  it("UI de PokemonCard", () => {
    const wrapper = shallow(<PokemonCard pokemon={pokeMock} />);

    const imgWrapper = (
      <div className={`cardWrapper`}>
        <div className={`cardItem box`}>
          <img
            id="img-back"
            className={`cardItem-image`}
            src={pokeMock.sprites.back_default}
          />
        </div>

        <div className={`cardItem box`}>
          <img
            id="img-front"
            className={`cardItem-image`}
            src={pokeMock.sprites.front_default}
          />
        </div>
      </div>
    );

    expect(wrapper.contains(imgWrapper)).toBeTruthy();
  });

  it("Si el pokemon en storage es null o undefined", () => {
    const wrapper = mount(<PokemonCard pokemon={pokeMock} />);

    if (pokeMock === null && pokeMock === undefined)
      expect(wrapper.find(".empty").exists()).toBe(true);
  });
});
