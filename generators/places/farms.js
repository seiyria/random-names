export default function farms() {
  const names1 = ['Almond', 'Angry Beaver', 'Apple Blossom', 'Applewood', 'Bear Creek', 'Beechnut', 'Berry Crest', 'Berry Ridge', 'Big Bear', 'Big Oak', 'Bird\'s Nest', 'Birds of Paradise', 'Bitterroot', 'Bittersweet', 'Black Dog', 'Black Hallow', 'Black Hawk', 'Black Oak', 'Black Raven', 'Blackmeadow', 'Blackwater', 'Blazing Pitchfork', 'Blue Moon', 'Blue River', 'Blueberry', 'Blueberry Basket', 'Bluebird', 'Bluestone', 'Borealis', 'Boulder Valley', 'Breezy Hills', 'Broken Arrow', 'Broken Cart', 'Buffalo Hill', 'Bull\'s Eye', 'Bumble Bee', 'Burning Sands', 'Cabinwood', 'Canyon Crest', 'Canyon Crossing', 'Chariot', 'Cherry Blossom', 'Chestnut Grove', 'Chicken Egg', 'Cowboy', 'Cranberry', 'Crescent Canyon', 'Crescent Moon', 'Critter Craze', 'Crooked Creek', 'Crossroad', 'Crown Meadow', 'Dandelion', 'Day Break', 'Deer Cove', 'Desert Cliffs', 'Desert Fox', 'Diamond Creek', 'Dogwood', 'Dragon Hill', 'Dragontooth', 'Dreamworks', 'Eagle Eye', 'Eagle Hill', 'Eagle\'s Nest', 'Eaglecrest', 'Eastwood', 'Echo Valley', 'Elysian', 'End of the World', 'Evening Star', 'Evergreen', 'Fairview', 'Firebranch', 'Flower Valley', 'Flying Pig', 'Foxtail', 'Freedom', 'Fresh Fountain', 'Furball', 'Gem Stone', 'Gilded Woods', 'Gold Creek', 'Gold Mine', 'Golden Hill', 'Good Day', 'Good Times', 'Goose Creek', 'Goose Feather', 'Grand Mountain', 'Grand River', 'Grand View', 'Grasshopper', 'Grassy Knoll', 'Green Haven', 'Green Meadows', 'Green River', 'Grizzly Bear', 'Happy', 'Happy Horse', 'Happy Trails', 'Hard Rock', 'Haywire', 'Hazelnut', 'Hazelwood', 'Healthy Horse', 'Heartsong', 'Hee Haw', 'Hidden Creek', 'Hidden Hill', 'High Hill', 'High Valey', 'Highland', 'Hollow Hill', 'Hollow Point', 'Hollybrook', 'Honey', 'Honey Bee', 'Honey Comb', 'Horseshoe', 'Iron Hill', 'Itty Bitty', 'Jolly Green', 'Jolly Oak', 'Laughing Oak', 'Little', 'Little Acorn', 'Little Critters', 'Little Feet', 'Little Foot', 'Little Lamb', 'Little Paws', 'Little Wolf', 'Lock, Stock & Barrel', 'Lone Oak', 'Lone Pine', 'Lone Wolf', 'Lucky', 'Lucky Paws', 'Lucky Star', 'Mad River', 'Maple Leaf', 'Maple Springs', 'Maple Valley', 'Maplewood', 'Meadowbrooke', 'Meadowcove', 'Meadowgrove', 'Meadowland', 'Melody', 'Mistwood', 'Misty Grove', 'Misty River', 'Moonlight', 'Moonshadow', 'Moonshine', 'Mooseridge', 'Morning Glory', 'Morning Star', 'Mossy Boulder', 'Mossy Cobble', 'Mossy Oak', 'Mossy Pine', 'Mossy Rock', 'Mountain Ridge', 'Mountain Shadow', 'Mountain View', 'Mountainridge', 'Mustang', 'Mystic Hills', 'New Dawn', 'New Hope', 'New Morning', 'New Spring', 'Nightfall', 'Nightingale', 'Nightowl', 'Northwind', 'Oak Ridge', 'Oak Springs', 'Oak Valley', 'Oak Wood', 'Oakey Dokey', 'Oasis', 'Old Stone', 'Old Town', 'Owlfeather', 'Paradise', 'Peach Tree', 'Pegasus', 'Phoenix', 'Piece of Heaven', 'Pine', 'Pine Hollow', 'Pine Springs', 'Pine Valley', 'Pinecone Grove', 'Pinewood', 'Pitchfork', 'Pleasant Knoll', 'Pleasant View', 'Poison Ivy', 'Prairie', 'Prairie Hills', 'Precious Stone', 'Pumpkin Patch', 'Quarter Mile', 'Rainbow', 'Rainbow Hill', 'Rainbow Ridge', 'Rattlesnake', 'Ravenwood', 'Rebirth', 'Red Dog', 'Red Mountain', 'Red Pine', 'Red River', 'Red Robin', 'Rise and Shine', 'River Hallow', 'Riverrock', 'Riverview', 'Roadrunner', 'Robinwood', 'Rock Bottom', 'Rolling Hills', 'Rolling Moss', 'Rolling Oak', 'Rolling Stone', 'Rooster', 'Rose Petal', 'Rosebush', 'Rosewood', 'Rusty Bucket', 'Serenity', 'Setting Sun', 'Shadow Ridge', 'Shady Oaks', 'Shooting Star', 'Silver Tree', 'Silverbell', 'Silversage', 'Sleeping Hills', 'Sleepy Hollow', 'Small Paws', 'Small Wonders', 'Small World', 'Southwind', 'Spring Blossom', 'Spring Fountain', 'Stallion', 'Starwood', 'Stone Valley', 'Straight Arrow', 'Strawberry Mountain', 'Strawberry Valley', 'Sunset', 'Sunshine', 'Swan Lake', 'Sweet Dreams', 'Talking Tree', 'Talking Trees', 'Tall Oaks', 'Thistleberry', 'Thunder Mountain', 'Thunder Valley', 'Tranquility', 'Tumbleweed', 'Turning Point', 'Twisted Pine', 'Two Pines', 'Virgin Valley', 'Walnut Grove', 'Waterfall', 'Weeping Willow', 'Westwood', 'Whispering Willow', 'Whisperwind', 'White Oak', 'White Stag', 'White Willow', 'Whitewater', 'Wild Horse', 'Wildflower', 'Willow Creek', 'Willowbranch', 'Windswept', 'Windy Oaks', 'Windy Willows', 'Yew Valley'];
  const names2 = ['Acres', 'Estate', 'Farm', 'Farms', 'Range', 'Farmstead', 'Fields', 'Gardens', 'Grange', 'Lands', 'Meadow', 'Nursery', 'Orchard', 'Pastures', 'Ranch', 'Vineyard'];


  {
    rnd0 = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd0]} ${names2[rnd1]}`;
    return names;
  }
}
