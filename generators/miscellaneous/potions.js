export default function potions() {
  const names1 = ['Potion', 'Elixir', 'Flask', 'Draught', 'Philter', 'Tonic', 'Brew', 'Vial', 'Phial', 'Potion', 'Elixir', 'Flask', 'Draught', 'Philter'];
  const names2 = ['Accuracy', 'Agility', 'Agitation', 'Agony', 'Altered Minds', 'Amnesia', 'Ancestry', 'Ancient Secrets', 'Ancient Wisdom', 'Anger', 'Arachnid Venom', 'Arcane Protection', 'Auras', 'Awakening', 'Bad Fortune', 'Balance', 'Beginnings', 'Berserking', 'Blank Minds', 'Blessed Water', 'Blinding Light', 'Blood', 'Bloodlust', 'Blossoms', 'Bribery', 'Broken Locks', 'Broken Minds', 'Brute Force', 'Brutes', 'Camouflage', 'Caution', 'Chaos', 'Clairvoyance', 'Clean Deaths', 'Cloud Walking', 'Comfort', 'Concentration', 'Conflicts', 'Control', 'Corruption', 'Cure Disease', 'Curing', 'Dark Waters', 'Dawn', 'Death', 'Defense', 'Delays', 'Deliriousness', 'Delusion', 'Demons', 'Depression', 'Depressions', 'Desires', 'Destruction', 'Disabling', 'Discretion', 'Disease', 'Disruption', 'Distractions', 'Domination', 'Doubt', 'Dream Inducement', 'Dream Vision', 'Dreamless Sleeps', 'Dreams', 'Dusk', 'Earth', 'Ecstasy', 'Efficiency', 'Empowerment', 'Endings', 'Endless Time', 'Energy', 'Enhanced Luck', 'Enhanced Reflexes', 'Enhanced Senses', 'Enhanced Sight', 'Enhanced Sleep', 'Escapes', 'Eternal Rage', 'Eternal Sleep', 'Excitement', 'Explosions', 'Failure', 'Farsight', 'Feather Weight', 'Fevers', 'Fire', 'Fire Protection', 'Fire Resistance', 'Firepower', 'Fireworks', 'Fixation', 'Flight', 'Focus', 'Foresight', 'Forgetfulness', 'Fortitude', 'Free Will', 'Freedom', 'Frozen Blood', 'Fury', 'Ghostly Essence', 'Ghosts', 'Giant Growth', 'Giants', 'Gills', 'Godly Powers', 'Good Fortune', 'Greed', 'Growth', 'Guilt', 'Hallucination', 'Happiness', 'Harmony', 'Haste', 'Hatred', 'Healing', 'Health', 'Hidden Talents', 'Holy Protection', 'Honesty', 'Hunger', 'Hysteria', 'Idle Minds', 'Ignorance', 'Illusions', 'Immobilizing', 'Immolation', 'Immortality', 'Imperfection', 'Impotence', 'Incapacitate', 'Influence', 'Insanity', 'Insight', 'Insomnia', 'Instincts', 'Intellect', 'Intuition', 'Invisibility', 'Invulnerability', 'Iron Skin', 'Jealousy', 'Joy', 'Justice', 'Knowledge', 'Lies', 'Light Feet', 'Lightning', 'Lightning Speed', 'Lion\'s Roar', 'Lion\'s Strength', 'Lockpicking', 'Love', 'Lucid Dreams', 'Luck', 'Lunacy', 'Lust', 'Madness', 'Mageblood', 'Might', 'Mind Control', 'Mindbending', 'Mirrors', 'Misery', 'Moonlight', 'Mortality', 'Nature', 'Neglect', 'Night Vision', 'Nightmares', 'Nightvision', 'Nimble Feet', 'Oblivion', 'Open Minds', 'Pain', 'Pain Relief', 'Paralyzed Minds', 'Paralyzing', 'Patience', 'Peace of Mind', 'Perception', 'Perfection', 'Petrification', 'Phantoms', 'Pheromones', 'Pleasure', 'Poisons', 'Potency', 'Precision', 'Predictions', 'Premonition', 'Protection', 'Pure Deaths', 'Purification', 'Putrefication', 'Rage', 'Reality', 'Redemption', 'Reflexes', 'Rejuvenation', 'Remembrance', 'Repair', 'Resist Fire', 'Restriction', 'Revelations', 'Reversed Growth', 'Reversed Time', 'Rose Petals', 'Scrutiny', 'Secrets', 'Seduction', 'Serenity', 'Serpent Venom', 'Shielding', 'Shrinking', 'Silence', 'Sleep Inducement', 'Slowing', 'Smoke', 'Solutions', 'Soothe Mind', 'Sorrow', 'Souls', 'Speed', 'Spellpower', 'Steelskin', 'Storms', 'Strength', 'Strong Impulses', 'Stunning', 'Stupidity', 'Sunlight', 'Swiftness', 'Thirst', 'Thunder', 'Time', 'Titanic Strength', 'Tranquillity', 'Transcendence', 'Truth', 'Twilight', 'Unconsciousness', 'Vampire Blood', 'Vampiric Blood', 'Victory', 'Vigor', 'Virtues', 'Vision Inducement', 'Visions', 'Vitality', 'War', 'Warmth', 'Water Breathing', 'Water Walking', 'Weakness', 'Wealth', 'Wind', 'Wisdom', 'the Alchemist', 'the Ancestors', 'the Arcane', 'the Archer', 'the Archmage', 'the Bear', 'the Beginning', 'the Berserker', 'the Blind', 'the Crown', 'the Deaf', 'the Eclipse', 'the Elements', 'the End', 'the Enhanced Mind', 'the Enigma', 'the Forest', 'the Giant', 'the Guru', 'the Healer', 'the High Mage', 'the King', 'the Knight', 'the Lion', 'the Master', 'the Mind', 'the Moon', 'the Mountain', 'the Mute', 'the Oracle', 'the Paragon', 'the Phoenix', 'the Sages', 'the Seer', 'the Senses', 'the Shadows', 'the Sloth', 'the Spirit', 'the Storm', 'the Subconscious', 'the Sun', 'the Titans', 'the Undead', 'the Unknown', 'the Void', 'the Volcano', 'the Wolf'];



  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} of ${names2[rnd2]}`;
    return names;
  }
}
