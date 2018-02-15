defmodule ElixirprojTest do
  use ExUnit.Case
  doctest Elixirproj

  test "greets the world" do
    assert Elixirproj.hello() == :world
  end
end
