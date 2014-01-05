describe("Collections.Rooms", function() {
  it("has a url of /rooms", function() {
    expect(new ChatApp.Collections.Rooms().url).toEqual("/rooms");
  });

  it("holds instances of ChatApp.Models.Room", function() {
    expect(new ChatApp.Collections.Rooms().model).toEqual(ChatApp.Models.Room);
  });
});
