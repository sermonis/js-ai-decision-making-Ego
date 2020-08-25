var expect = require('expect.js');
var Ego = require("../build/Ego");

describe("Knowledge", function(){

  it("should initialize", function(){

    var knowledge = new Ego.Knowledge();

    expect(knowledge._booleanMap).to.eql({});
    expect(knowledge._numericalMap).to.eql({});
    expect(knowledge._vectorMap).to.eql({});
  });

  it("should add boolean information", function(){

    var knowledge = new Ego.Knowledge();

    expect(knowledge.addBooleanInformation("isStuffHappening", true)).to.eql(true);
    expect(knowledge.addBooleanInformation("isStuffHappening", true)).to.eql(false);
    expect(knowledge.addBooleanInformation("isStuffHappening", false)).to.eql(false);

    expect(knowledge.addBooleanInformation("canSee", true)).to.eql(true);
  });

  it("should add numerical information", function(){

    var knowledge = new Ego.Knowledge();

    expect(knowledge.addNumericalInformation("health", 95.7)).to.eql(true);
    expect(knowledge.addNumericalInformation("health", 100)).to.eql(false);
    expect(knowledge.addNumericalInformation("ammo", "xx")).to.eql(false);
    expect(knowledge.addNumericalInformation("ammo", 30)).to.eql(true);
    expect(knowledge.addNumericalInformation("ammo", 40)).to.eql(false);
  });

  it("should add vector information", function(){

    var knowledge = new Ego.Knowledge();

    expect(knowledge.addVectorInformation("distance")).to.eql(false);
    expect(knowledge.addVectorInformation("distance", 10)).to.eql(false);
    expect(knowledge.addVectorInformation("distance", 10, 20)).to.eql(false);
    expect(knowledge.addVectorInformation("distance", 10, 20, 30)).to.eql(true);
    expect(knowledge.addVectorInformation("distance", 40, 50, 60)).to.eql(false);
    expect(knowledge.addVectorInformation("speed", 20.1, 30, 70.3)).to.eql(true);
    expect(knowledge.addVectorInformation("acceleration", "x", 70, "y")).to.eql(false);
  });
});
