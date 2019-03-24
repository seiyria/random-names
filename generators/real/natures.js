export default function natures() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm2 = ['Abelia', 'Acacia', 'Agate', 'Almond', 'Aloe', 'Alyssa', 'Amala', 'Amaranth', 'Amaryllis', 'Amber', 'Ambrosia', 'Amethyst', 'Anemone', 'Angel', 'Angelica', 'Angelice', 'Anise', 'Apple', 'April', 'Aqua', 'Arbor', 'Ari', 'Aria', 'Arum', 'Ash', 'Aspen', 'Aster', 'Aura', 'Aurelia', 'Aurora', 'Autumn', 'Ava', 'Avis', 'Aya', 'Azalea', 'Azolia', 'Azure', 'Basil', 'Bay', 'Bayou', 'Bee', 'Begonia', 'Belladonna', 'Beryl', 'Bird', 'Birdie', 'Blair', 'Blaze', 'Blossom', 'Bramble', 'Breeze', 'Breezy', 'Briar', 'Brier', 'Briny', 'Brook', 'Brooke', 'Brooks', 'Bryony', 'Bunny', 'Buttercup', 'Cadence', 'Calla', 'Camelia', 'Camellia', 'Camomile', 'Canary', 'Carina', 'Cascade', 'Cassa', 'Cassia', 'Catalina', 'Cayenne', 'Cedar', 'Celosia', 'Chandra', 'Cheyenne', 'Chrysanthe', 'Cinnamon', 'Clay', 'Clematis', 'Clementine', 'Cloud', 'Clove', 'Clover', 'Coral', 'Coriander', 'Cove', 'Crescent', 'Cricket', 'Crystal', 'Cypress', 'Daffodil', 'Dahlia', 'Daisy', 'Dakota', 'Dale', 'Danica', 'Danika', 'Daphne', 'Dawn', 'Deer', 'Delilah', 'Delta', 'Destiny', 'Dew', 'Dewy', 'Diamond', 'Doe', 'Dove', 'Dusk', 'Dusty', 'Ebony', 'Eden', 'Electra', 'Elektra', 'Elm', 'Ember', 'Emerald', 'Erica', 'Eve', 'Eytelia', 'Faith', 'Fauna', 'Fawn', 'Feather', 'Fen', 'Fennel', 'Fern', 'Fleur', 'Flora', 'Freesia', 'Fuchsia', 'Gaia', 'Galaxy', 'Gale', 'Galena', 'Garden', 'Garland', 'Garnet', 'Geranium', 'Gideon', 'Ginger', 'Glen', 'Glenn', 'Harmony', 'Haven', 'Hayley', 'Hazel', 'Heather', 'Hibiscus', 'Holly', 'Honey', 'Hyacinth', 'Ice', 'Indigo', 'Iris', 'Isle', 'Ivory', 'Ivy', 'Jacinth', 'Jade', 'Jasmine', 'Jay', 'Jewel', 'Jordan', 'Juniper', 'Kailani', 'Kale', 'Kalina', 'Karma', 'Kyla', 'Lake', 'Lale', 'Laleh', 'Lapis', 'Lark', 'Laurel', 'Lavender', 'Lazuli', 'Leaf', 'Leif', 'Leilani', 'Lelani', 'Lila', 'Lilac', 'Lillian', 'Lilly', 'Lily', 'Linden', 'Linnea', 'Lotus', 'Love', 'Lucerne', 'Luna', 'Magnolia', 'Mango', 'Maple', 'Mare', 'Marigold', 'Marin', 'Marina', 'Marine', 'Meadow', 'Melissa', 'Mesa', 'Mica', 'Mist', 'Misty', 'Moon', 'Myrtle', 'Nigella', 'Nova', 'Oak', 'Ocean', 'Oleander', 'Olive', 'Olivia', 'Opal', 'Orchard', 'Orchid', 'Oriel', 'Oriole', 'Pandora', 'Pansy', 'Peach', 'Peaches', 'Pearl', 'Peony', 'Pepper', 'Peridot', 'Petal', 'Petunia', 'Phoenix', 'Pine', 'Poppy', 'Posy', 'Primrose', 'Puma', 'Rain', 'Raine', 'Raven', 'Reed', 'Reef', 'Rhine', 'River', 'Roan', 'Robin', 'Rosa', 'Rose', 'Rosemary', 'Rosetta', 'Rowan', 'Rubia', 'Ruby', 'Rue', 'Ruellia', 'Sable', 'Saffron', 'Sage', 'Sahara', 'Sakura', 'Sapphire', 'Sassafras', 'Savanna', 'Savannah', 'Season', 'Senna', 'Sequoia', 'Shadow', 'Shale', 'Sharon', 'Shell', 'Shelly', 'Shore', 'Sienna', 'Sierra', 'Silver', 'Sky', 'Skye', 'Skyler', 'Snow', 'Sol', 'Solstice', 'Sorrel', 'Sparrow', 'Spring', 'Spruce', 'Star', 'Starling', 'Stella', 'Sterling', 'Storm', 'Stormy', 'Summer', 'Sunny', 'Sunshine', 'Swan', 'Sweetpea', 'Sycamore', 'Tansy', 'Teal', 'Tempest', 'Terra', 'Thyme', 'Tierra', 'Tigerlily', 'Topaz', 'Tulip', 'Vale', 'Valley', 'Vanilla', 'Vanille', 'Venus', 'Veronica', 'Violet', 'Vixen', 'Willow', 'Windy', 'Winter', 'Wren', 'Wynter', 'Yarrow', 'Zahra', 'Zinnia'];
  const nm1 = ['Acke', 'Ackerly', 'Ackley', 'Acorn', 'Aedan', 'Aegis', 'Aiden', 'Alabaster', 'Alan', 'Alder', 'Alfalfa', 'Almond', 'Amon', 'Angel', 'Aqua', 'Archer', 'Ari', 'Arum', 'Ash', 'Asher', 'Aspen', 'Aster', 'Austin', 'Avis', 'Axel', 'Azure', 'Badger', 'Balsam', 'Bark', 'Barrow', 'Basil', 'Bay', 'Bayou', 'Bear', 'Berry', 'Birch', 'Bird', 'Blair', 'Blaze', 'Blue', 'Bluejay', 'Bramble', 'Bran', 'Branch', 'Breeze', 'Briar', 'Brier', 'Brighton', 'Bronze', 'Brook', 'Brooke', 'Brooks', 'Buck', 'Cade', 'Calder', 'Canyon', 'Carnelian', 'Cayenne', 'Cedar', 'Chase', 'Chervil', 'Chester', 'Clay', 'Cliff', 'Cloud', 'Clove', 'Clyde', 'Coal', 'Coast', 'Cobalt', 'Colt', 'Copper', 'Coriander', 'Cornelian', 'Cotton', 'Cove', 'Crane', 'Crescent', 'Cricket', 'Crow', 'Cypress', 'Dakota', 'Dale', 'Danica', 'Danika', 'Dante', 'Dean', 'Deer', 'Delta', 'Dew', 'Dewy', 'Dingo', 'Drake', 'Dune', 'Dusk', 'Dusty', 'Eban', 'Edan', 'Elm', 'Ember', 'Everest', 'Falcon', 'Fen', 'Fennel', 'Fern', 'Field', 'Finch', 'Fjord', 'Flame', 'Flint', 'Ford', 'Forest', 'Forrest', 'Fox', 'Frost', 'Gale', 'Gibbon', 'Gideon', 'Ginger', 'Glen', 'Glenn', 'Glyn', 'Gold', 'Gorge', 'Granite', 'Grove', 'Harbor', 'Harvest', 'Haven', 'Hawk', 'Hawke', 'Hawthorn', 'Heath', 'Heron', 'Horizon', 'Huckleberry', 'Hudson', 'Hunter', 'Huntley', 'Hyatt', 'Hyde', 'Ice', 'Indigo', 'Jade', 'Jaguar', 'Jasper', 'Jay', 'Jericho', 'Jet', 'Jett', 'Jordan', 'Judas', 'Juniper', 'Kale', 'Kodiak', 'Kylan', 'Kyle', 'Lagoon', 'Lake', 'Land', 'Lando', 'Larch', 'Lark', 'Laurel', 'Lazuli', 'Leaf', 'Leif', 'Leo', 'Leon', 'Linden', 'Lion', 'Lynx', 'Mace', 'Macon', 'Mai', 'Mango', 'Mansi', 'Marin', 'Marino', 'Marsh', 'Mason', 'Mercury', 'Mica', 'Moor', 'Moth', 'Newt', 'North', 'Nova', 'Oak', 'Obsidian', 'Ocean', 'Oleander', 'Oliver', 'Onyx', 'Orchard', 'Orion', 'Pembroke', 'Pepper', 'Phoenix', 'Pike', 'Pine', 'Quarry', 'Quartz', 'Quest', 'Quill', 'Rain', 'Raine', 'Ram', 'Raven', 'Reed', 'Reef', 'Rhine', 'Ridge', 'Rio', 'River', 'Roan', 'Robin', 'Rock', 'Rowan', 'Rue', 'Ryland', 'Sable', 'Sage', 'Seal', 'Shadow', 'Shale', 'Shell', 'Silver', 'Sky', 'Skylark', 'Skyler', 'Slate', 'Snow', 'Sol', 'Sorrel', 'Spruce', 'Star', 'Starling', 'Steel', 'Steele', 'Sterling', 'Stone', 'Storm', 'Stormy', 'Sunny', 'Talon', 'Thicket', 'Thorn', 'Thyme', 'Tide', 'Tiger', 'Vale', 'Valerian', 'Winter', 'Wolf', 'Wolfe', 'Wood', 'Woods', 'Woody', 'Wren', 'Yarrow', 'Zinc'];
  const nm3 = ['Almond', 'Angel', 'Aqua', 'Ari', 'Arum', 'Ash', 'Aspen', 'Aster', 'Avis', 'Azure', 'Basil', 'Bay', 'Bayou', 'Bird', 'Blair', 'Blaze', 'Bramble', 'Breeze', 'Briar', 'Brier', 'Brook', 'Brooke', 'Brooks', 'Cayenne', 'Cedar', 'Clay', 'Cloud', 'Clove', 'Coriander', 'Cove', 'Crescent', 'Cricket', 'Cypress', 'Dakota', 'Dale', 'Danica', 'Danika', 'Deer', 'Delta', 'Dew', 'Dewy', 'Dusk', 'Dusty', 'Elm', 'Ember', 'Fen', 'Fennel', 'Fern', 'Gale', 'Gideon', 'Ginger', 'Glen', 'Glenn', 'Haven', 'Ice', 'Indigo', 'Jade', 'Jay', 'Jordan', 'Juniper', 'Kale', 'Lake', 'Lark', 'Laurel', 'Lazuli', 'Leaf', 'Leif', 'Linden', 'Mango', 'Marin', 'Mica', 'Nova', 'Oak', 'Ocean', 'Oleander', 'Orchard', 'Pepper', 'Phoenix', 'Pine', 'Rain', 'Raine', 'Raven', 'Reed', 'Reef', 'Rhine', 'River', 'Roan', 'Robin', 'Rowan', 'Sable', 'Sage', 'Shadow', 'Shale', 'Shell', 'Silver', 'Sky', 'Skyler', 'Snow', 'Sol', 'Sorrel', 'Spruce', 'Star', 'Starling', 'Sterling', 'Storm', 'Stormy', 'Sunny', 'Thyme', 'Vale', 'Winter', 'Wren', 'Yarrow'];


  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = nm3[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
