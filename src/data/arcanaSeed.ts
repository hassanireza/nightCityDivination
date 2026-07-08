import { ArcanaPath, type ArcanaCardSeed } from '@/models/ArcanaCard';

/**
 * Raw seed data for all twenty two Major Arcana cards.
 * Ported directly from the original game.js content so the tone
 * and copy of the Night City oracle voice is preserved exactly.
 */
export const ARCANA_SEED: readonly ArcanaCardSeed[] = [
  {
    id: 0, name: 'The Fool', roman: '0', path: ArcanaPath.Light,
    archetype: "THE WANDERER // BEGINNER'S MIND",
    glow: 'rgba(196,203,199,0.35)',
    oracle: "You stand at the precipice, choom. The city stretches before you like a circuit board: infinite paths, infinite endings. The Fool doesn't fear the fall because the fall is the journey. Every flatline you've cheated, every corpo you've dodged. That's the Fool's luck keeping you breathing. Step off the edge. The net will catch you, or it won't.",
    upright: 'New beginnings, spontaneity, freedom, leaping into the unknown with fearless trust.',
    reversed: 'Recklessness, poor judgment, naivety weaponized against you, chaos without purpose.',
    keywords: ['FREEDOM', 'CHAOS', 'TRUST', 'BEGINNING', 'RISK']
  },
  {
    id: 1, name: 'The Magician', roman: 'I', path: ArcanaPath.Power,
    archetype: 'THE TECHNOMANCER // WILL MADE REAL',
    glow: 'rgba(150,124,80,0.42)',
    oracle: "The Magician has all the tools: chrome arms, neural lace, a deck of tricks sharp enough to cut through corpo firewalls. But tools are nothing without will. You have what it takes to manifest anything. The question isn't capability, it's intention. What are you actually building here? Legacy or just noise?",
    upright: 'Willpower, skill, manifestation, resourcefulness, mastery of available tools.',
    reversed: 'Manipulation, cunning without ethics, untapped potential, deception turned inward.',
    keywords: ['MASTERY', 'WILL', 'SKILL', 'CREATION', 'POWER']
  },
  {
    id: 2, name: 'The High Priestess', roman: 'II', path: ArcanaPath.Shadow,
    archetype: 'THE ORACLE // HIDDEN DATA STREAM',
    glow: 'rgba(58,74,70,0.5)',
    oracle: 'She sits between two pillars: the visible net and the dark web beneath it. The High Priestess knows things she refuses to say out loud. The data flows through her like a current and she interprets it in silence. You already know the answer you are seeking. Stop flooding your neural interface with noise and let the quiet transmission reach you.',
    upright: 'Intuition, sacred knowledge, divine feminine, the subconscious, mystery held in stillness.',
    reversed: 'Secrets weaponized, hidden agendas, disconnection from inner knowing, information suppressed.',
    keywords: ['MYSTERY', 'INTUITION', 'SILENCE', 'WISDOM', 'HIDDEN']
  },
  {
    id: 3, name: 'The Empress', roman: 'III', path: ArcanaPath.Light,
    archetype: 'THE CREATOR // LIFE FORCE PROTOCOL',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "In a city of chrome and concrete, she makes things grow. The Empress doesn't conquer; she cultivates. Every fractured connection you've made, every relationship that survived the carnage of Night City: those are her gardens. She asks: what are you nurturing? What are you allowing to die from neglect? Nature always finds a way. So do you.",
    upright: 'Abundance, fertility, creativity, nature, nurturing, luxury, beauty flourishing.',
    reversed: 'Dependence on others, creative block, smothering, neglect, abundance withheld.',
    keywords: ['ABUNDANCE', 'CREATION', 'NATURE', 'GROWTH', 'BEAUTY']
  },
  {
    id: 4, name: 'The Emperor', roman: 'IV', path: ArcanaPath.Power,
    archetype: 'THE CORP KING // ORDER PROTOCOL',
    glow: 'rgba(150,124,80,0.42)',
    oracle: "He built the throne and sits on it like gravity itself: immovable, structural, his will encoded into the architecture of the city. The Emperor doesn't ask for loyalty. He creates systems so airtight that loyalty becomes survival. Is the structure around you protecting you or containing you? There's a difference, and it matters which side of the desk you are sitting on.",
    upright: 'Authority, structure, stability, leadership, fatherly protection, established power.',
    reversed: 'Domination, rigidity, excessive control, tyranny, abuse of authority.',
    keywords: ['AUTHORITY', 'STRUCTURE', 'CONTROL', 'POWER', 'ORDER']
  },
  {
    id: 5, name: 'The Hierophant', roman: 'V', path: ArcanaPath.Light,
    archetype: 'THE TRADITION KEEPER // LEGACY CODE',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "Some say tradition is a cage. Others say it's a cathedral. The Hierophant holds the old keys: rituals, codes, unspoken agreements that have survived generations of night cycles and corpo wars. There's something worth preserving in the old ways, even in a world of perpetual upgrade. Which values have you kept beneath all the chrome? They still matter.",
    upright: 'Tradition, conformity, morality, institutions, mentorship, established spiritual authority.',
    reversed: 'Rebellion against rules, subversion, personal belief over dogma, challenging norms.',
    keywords: ['TRADITION', 'INSTITUTION', 'GUIDANCE', 'CONFORMITY', 'RITUAL']
  },
  {
    id: 6, name: 'The Lovers', roman: 'VI', path: ArcanaPath.Light,
    archetype: 'THE ALIGNMENT // HEART SIGNAL',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "This isn't just about who you love; it's about what you choose. The Lovers card is a crossroads disguised as a romance. Every bond you form is a mirror showing you who you are when the tactical calculations stop. The city doesn't believe in unconditional. But somewhere in your netrunner's brain there's a code you won't compromise. Choose from that place.",
    upright: 'Love, harmony, relationships, values alignment, choices made from the heart.',
    reversed: 'Disharmony, imbalance, misalignment of values, one sided relationships, bad choices.',
    keywords: ['LOVE', 'ALIGNMENT', 'CHOICE', 'UNION', 'HARMONY']
  },
  {
    id: 7, name: 'The Chariot', roman: 'VII', path: ArcanaPath.Power,
    archetype: 'THE DRIVER // VICTORY VECTOR',
    glow: 'rgba(150,124,80,0.42)',
    oracle: "Two forces pulling in opposite directions and you are holding the reins with white knuckled chrome. The Chariot doesn't move by force alone; it moves by will, by sheer refusal to be pulled apart. You've been at war with yourself and with Night City simultaneously. Stop negotiating. Decide the direction and drive. The road opens for those who commit.",
    upright: 'Control, willpower, success, determination, victory through discipline and focus.',
    reversed: 'Lack of control, opposition, aggression without direction, scattered energy.',
    keywords: ['VICTORY', 'CONTROL', 'WILLPOWER', 'DRIVE', 'DISCIPLINE']
  },
  {
    id: 8, name: 'Strength', roman: 'VIII', path: ArcanaPath.Light,
    archetype: 'THE UNBREAKABLE // CORE INTEGRITY',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "Not the strength of a Gorilla Arm overhand or a Mantis Blade through corpo armor. Strength here is the quiet kind: the kind that looks a beast in the eye and doesn't blink, doesn't fight, just breathes. You've endured things that would have flatlined anyone else. That's not luck. That's something deeper in your construct. Don't mistake gentleness for weakness.",
    upright: 'Courage, patience, compassion, inner strength, taming impulses with grace.',
    reversed: 'Self doubt, raw emotion, inner turmoil, weakness disguised as strength.',
    keywords: ['COURAGE', 'PATIENCE', 'COMPASSION', 'ENDURANCE', 'GRACE']
  },
  {
    id: 9, name: 'The Hermit', roman: 'IX', path: ArcanaPath.Shadow,
    archetype: 'THE ISOLATED // SIGNAL IN THE DARK',
    glow: 'rgba(58,74,70,0.5)',
    oracle: "The Hermit climbs higher not to escape but to see. Up here, above the neon smog and corpo noise, there's something like clarity. You've been moving too fast through a city designed to keep you moving. The lantern the Hermit holds isn't illuminating the path ahead; it's illuminating what you've been carrying all along. Slow down. Look at what's in your hands.",
    upright: 'Soul searching, introspection, being alone by choice, inner guidance, withdrawal.',
    reversed: 'Isolation as prison, loneliness, paranoia, withdrawal that becomes disconnection.',
    keywords: ['SOLITUDE', 'INTROSPECTION', 'WISDOM', 'GUIDANCE', 'WITHDRAWAL']
  },
  {
    id: 10, name: 'Wheel of Fortune', roman: 'X', path: ArcanaPath.Light,
    archetype: 'THE CYCLE // FATE ALGORITHM',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "The wheel doesn't care about your reputation, your eddies, or your body count. It turns. That's all it does. But here's the secret the corps don't want you to know: you're not just a passenger on the wheel. You're also the axle. Change from within: your values, your decisions, your neural patterns, and the wheel starts turning differently. Luck isn't random. It's resonance.",
    upright: 'Good luck, karma, life cycles, destiny at a turning point, favorable timing.',
    reversed: 'Bad luck, resistance to change, breaking cycles, clinging to what must end.',
    keywords: ['FATE', 'CYCLES', 'LUCK', 'TURNING POINT', 'KARMA']
  },
  {
    id: 11, name: 'Justice', roman: 'XI', path: ArcanaPath.Shadow,
    archetype: 'THE BALANCE // TRUTH PROTOCOL',
    glow: 'rgba(58,74,70,0.5)',
    oracle: "In Night City, justice is a luxury item. But the card doesn't care about the city's laws; it holds a deeper ledger. Every cause you've set in motion is already generating its effect somewhere in the system. Justice here isn't punishment. It's consequence recognized. Are you seeing your situation clearly, without the distortion of what you wish were true? Truth cuts both ways.",
    upright: 'Justice, fairness, truth, cause and effect, law, objectivity, accountability.',
    reversed: 'Unfairness, dishonesty, corrupt systems, refusing accountability, imbalance.',
    keywords: ['JUSTICE', 'TRUTH', 'FAIRNESS', 'BALANCE', 'CAUSE']
  },
  {
    id: 12, name: 'The Hanged Man', roman: 'XII', path: ArcanaPath.Shadow,
    archetype: 'THE SUSPENDED // WAITING PROTOCOL',
    glow: 'rgba(58,74,70,0.5)',
    oracle: "He's not stuck. He chose this. The Hanged Man is suspended between worlds: between who he was and who he's becoming. He's looking at everything from upside down because that's the only way to see what's been invisible. Your situation isn't moving because it's not supposed to yet. This pause is processing. What are you seeing differently from this angle?",
    upright: 'Pause, surrender, letting go, new perspectives, sacrifice for enlightenment.',
    reversed: 'Delays, resistance to sacrifice, stalling, martyrdom without transformation.',
    keywords: ['SURRENDER', 'PAUSE', 'PERSPECTIVE', 'SACRIFICE', 'WAITING']
  },
  {
    id: 13, name: 'Death', roman: 'XIII', path: ArcanaPath.Shadow,
    archetype: 'THE ENDING // TRANSFORMATION ENGINE',
    glow: 'rgba(58,74,70,0.5)',
    oracle: "Not flatline. Never just flatline. Death in the arcana is the great transformer: it walks through the door and something that was no longer is, and something that couldn't exist before now can. What version of yourself is being dismantled right now? That identity you've been clinging to: the old name, the old story. It's already gone. You're just watching the corpse. Walk away from it.",
    upright: 'Endings that are necessary, transformation, transition, new beginnings born of death.',
    reversed: "Resistance to change, inability to move on, stagnation, clinging to what's dead.",
    keywords: ['TRANSFORMATION', 'ENDING', 'RELEASE', 'CHANGE', 'REBIRTH']
  },
  {
    id: 14, name: 'Temperance', roman: 'XIV', path: ArcanaPath.Light,
    archetype: 'THE ALCHEMIST // BALANCE SYNTHESIS',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "Pour between the cups: this world to that world, hot to cold, chrome to flesh. Temperance isn't moderation for its own sake. It's alchemy. The angel blends opposites until something new and impossible emerges. You've been treating your contradictions as problems. They are actually the raw materials. The synthesis of all your broken pieces is where your actual power lives.",
    upright: 'Balance, moderation, patience, purpose, synthesis, finding the middle path.',
    reversed: 'Imbalance, excess, lack of long term vision, extremes without integration.',
    keywords: ['BALANCE', 'ALCHEMY', 'PATIENCE', 'SYNTHESIS', 'MODERATION']
  },
  {
    id: 15, name: 'The Devil', roman: 'XV', path: ArcanaPath.Shadow,
    archetype: 'THE ENSLAVER // ADDICTION PROTOCOL',
    glow: 'rgba(58,74,70,0.5)',
    oracle: "Look at the chains. Now look closer: they are loose. They always were. The Devil doesn't lock the cage. You lock it. The addiction, the toxic pattern, the corpo contract you know is killing you. These are chains you can remove. The Devil's power is the belief that you can't. Night City was built to make you need things you don't actually need. What belief is your cage?",
    upright: 'Bondage, addiction, materialism, shadow self, sexuality, seduction of the harmful.',
    reversed: 'Releasing limiting beliefs, breaking free, reclaiming power, detachment from addiction.',
    keywords: ['BONDAGE', 'SHADOW', 'ADDICTION', 'MATERIALISM', 'POWER']
  },
  {
    id: 16, name: 'The Tower', roman: 'XVI', path: ArcanaPath.Shadow,
    archetype: 'THE COLLAPSE // SYSTEM CRASH',
    glow: 'rgba(58,74,70,0.5)',
    oracle: 'Everything you built on a false foundation is coming down. The explosion, the breach, the betrayal: this is what Tower energy feels like when it arrives. And it always arrives. The ground clearing is violent but necessary. When the smoke settles and the servers are fried, the foundation that remains is real. Build on that. Only on that. Nothing else will hold.',
    upright: 'Sudden upheaval, chaos, revelation, destruction of the old to make way for truth.',
    reversed: 'Averting disaster, fear of change, delaying an inevitable collapse.',
    keywords: ['UPHEAVAL', 'COLLAPSE', 'REVELATION', 'CHAOS', 'BREAKTHROUGH']
  },
  {
    id: 17, name: 'The Star', roman: 'XVII', path: ArcanaPath.Light,
    archetype: 'THE HOPE SIGNAL // RENEWAL TRANSMISSION',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "After the Tower falls, she appears, kneeling at the water's edge under an open sky, pouring hope back into the world without fear of running dry. The Star is the quiet that follows catastrophe. You've been in the dark long enough that you forgot stars were up there. They still are. This card is a frequency; tune into it. Healing isn't passive. It's choosing to believe in something gentle.",
    upright: 'Hope, renewal, serenity, inspiration, faith restored, blessings after hardship.',
    reversed: "Hopelessness, despair, faithlessness, disconnection from one's spiritual core.",
    keywords: ['HOPE', 'RENEWAL', 'FAITH', 'HEALING', 'INSPIRATION']
  },
  {
    id: 18, name: 'The Moon', roman: 'XVIII', path: ArcanaPath.Shadow,
    archetype: 'THE ILLUSION // DEEP SUBCONSCIOUS',
    glow: 'rgba(58,74,70,0.5)',
    oracle: "Nothing is what it looks like right now. The Moon distorts: it makes shadows into threats and threats into shadows and you can't tell the difference at 3am on a rain slicked Night City street. The unconscious is running the operation and you think you're making rational decisions. You're not. Slow down. What are you afraid of that you haven't named yet? Name it. The unnamed fear has all the power.",
    upright: 'Illusion, fear, the unconscious mind, confusion, things hidden beneath the surface.',
    reversed: 'Release of fear, repressed emotions surfacing, confusion clearing, truth emerging.',
    keywords: ['ILLUSION', 'FEAR', 'UNCONSCIOUS', 'CONFUSION', 'DREAMS']
  },
  {
    id: 19, name: 'The Sun', roman: 'XIX', path: ArcanaPath.Light,
    archetype: 'THE RADIANCE // JOY SIGNAL',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "Rare thing in Night City: genuine joy, uncut, not manufactured by a braindance. The Sun doesn't require anything from you. It just shines. And right now it's shining on you. This is a moment of clarity, of vitality, of everything clicking into alignment. Don't be suspicious of it. You've earned stretches of light between the firefights. Let yourself feel this without waiting for it to end.",
    upright: 'Positivity, fun, warmth, success, vitality, clarity, radiance without effort.',
    reversed: 'Inner child blocked, excessive positivity masking pain, temporary clouds.',
    keywords: ['JOY', 'SUCCESS', 'VITALITY', 'CLARITY', 'RADIANCE']
  },
  {
    id: 20, name: 'Judgement', roman: 'XX', path: ArcanaPath.Power,
    archetype: 'THE RECKONING // FINAL CALL',
    glow: 'rgba(150,124,80,0.42)',
    oracle: "The horn sounds and the dead rise, not to haunt you, but to be accounted for. Judgement isn't punishment. It's the moment you finally hear the full transmission of your life and say: yes, this is what I've done. Yes, this is what I am. The absolution you're looking for isn't external. The decision has already been made. You are just being asked to accept it: to hear your own calling and answer it.",
    upright: 'Reflection, reckoning, inner calling, self evaluation, awakening to purpose.',
    reversed: 'Self doubt, refusal of the call, harsh self judgment, fear of reckoning.',
    keywords: ['RECKONING', 'AWAKENING', 'CALLING', 'ABSOLUTION', 'REFLECTION']
  },
  {
    id: 21, name: 'The World', roman: 'XXI', path: ArcanaPath.Light,
    archetype: 'THE COMPLETION // INTEGRATION PROTOCOL',
    glow: 'rgba(196,203,199,0.35)',
    oracle: "You made it, through every corpo ambush, every flatline scare, every betrayal and every glitch in the construct. The World is completion, but not ending. It's the moment before the next beginning when you are whole: fully integrated, all the shards of yourself finally running the same OS. You've become something the city tried to prevent: a person who can't be owned. That's the rarest achievement in Night City.",
    upright: 'Completion, integration, accomplishment, wholeness, travel, fulfillment.',
    reversed: 'Seeking shortcuts to completion, loose ends, feeling incomplete despite achieving.',
    keywords: ['COMPLETION', 'INTEGRATION', 'ACHIEVEMENT', 'WHOLENESS', 'CYCLE']
  }
];
