/**Data structures for the unicorns */

export const elements = [
  {id: 1, name: "wood"},
  {id: 2, name: "water"},
  {id: 3, name: "metal"},
  {id: 4, name: "earth"},
  {id: 5, name: "fire"},
]

export const powers = [
  {id: 1, name: "Nutrition preparation"},
  {id: 2, name: "Herbal healing"},
  {id: 3, name: "Herbs foraging"},
  {id: 4, name: "Spirit guarding"},
  {id: 5, name: "Weather forecasting"},
  {id: 6, name: "Story telling"},
]

export const initialElement = {
  elementId: 0,
  elementName: "",
  isElement: false,
}
export const initialPower = [{
  powerId: 0,
  powerName: "",
  isPower: false,
}]

export const unicornStructure = {
  "_id": 0,
  "name": "no name",
  "element": [
    {
      elementId: elements[0].id,
      elementName: elements[0].name,
      isElement: false,
    },
    {
      elementId: elements[1].id,
      elementName: elements[1].name,
      isElement: false,
    },
    {
      elementId: elements[2].id,
      elementName: elements[2].name,
      isElement: false,
    },
    {
      elementId: elements[3].id,
      elementName: elements[3].name,
      isElement: false,
    },
    {
      elementId: elements[4].id,
      elementName: elements[4].name,
      isElement: false,
    },
  ],
  "power": [
    {
      powerId: powers[0].id,
      powerName: powers[0].name,
      isPower: false,
    },
    {
      powerId: powers[1].id,
      powerName: powers[1].name,
      isPower: false,
    },{
      powerId: powers[2].id,
      powerName: powers[2].name,
      isPower: false,
    },
    {
      powerId: powers[3].id,
      powerName: powers[3].name,
      isPower: false,
    },
    {
      powerId: powers[4].id,
      powerName: powers[4].name,
      isPower: false,
    },
    {
      powerId: powers[5].id,
      powerName: powers[5].name,
      isPower: false,
    },

  ],
}


