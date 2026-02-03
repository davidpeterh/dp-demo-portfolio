export interface Film {
  id: number;
  slug: string;
  title: string;
  year: string;
  category: string;
  image: string;
  heroImage: string;
  logline: string;
  synopsis: string;
  trailerUrl: string;
  runtime: string;
  credits: {
    role: string;
    name: string;
  }[];
  stills: string[];
  awards?: string[];
}

export const films: Film[] = [
  {
    id: 0,
    slug: "antytila",
    title: "Antytila: The Score of War",
    year: "2024",
    category: "Documentary",
    image: "/images/antytila.jpg",
    heroImage: "/images/antytila.jpg",
    logline: "A Ukrainian rock band trades stadium tours for the front lines, using music as a weapon of resistance.",
    synopsis: "Synopsis placeholder - When Russia invaded Ukraine, Antytila was one of the country's biggest rock bands, filling stadiums across Europe. Within days of the invasion, the band members enlisted in the Territorial Defense Forces, trading guitars for rifles. This documentary follows their extraordinary journey as they continue to write and perform music from the front lines, using their platform to rally international support and keep the world's attention on Ukraine's fight for survival.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "90 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Producer", name: "David Peter Hansen" },
      { role: "Cinematographer", name: "TBD" },
      { role: "Editor", name: "TBD" },
      { role: "Featuring", name: "Antytila" },
    ],
    stills: ["/images/antytila.jpg", "/images/antytila-still-2.jpg", "/images/antytila-still-3.jpg", "/images/antytila-still-4.jpg", "/images/antytila-still-5.jpg"],
    awards: [],
  },
  {
    id: 1,
    slug: "the-silent-hour",
    title: "The Silent Hour",
    year: "2024",
    category: "Feature Film",
    image: "/images/film-1.jpg",
    heroImage: "/images/film-1.jpg",
    logline: "In the stillness between words, a grieving widow discovers that silence speaks louder than any confession.",
    synopsis: "After her husband's sudden death, Anna retreats to their coastal summer house in northern Denmark. As winter sets in, she begins to unravel the quiet mysteries he left behind—discovering that the life they shared was built on unspoken truths. A meditation on grief, memory, and the weight of things left unsaid.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "118 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Writer", name: "David Peter Hansen" },
      { role: "Producer", name: "Astrid Bergman" },
      { role: "Cinematographer", name: "Erik Holmström" },
      { role: "Editor", name: "Sofia Andersen" },
      { role: "Composer", name: "Johan Nilsson" },
      { role: "Lead", name: "Trine Dyrholm" },
      { role: "Supporting", name: "Mads Brügger" },
    ],
    stills: ["/images/film-1.jpg", "/images/film-1-still-2.jpg", "/images/film-1-still-3.jpg"],
    awards: ["Sundance Film Festival — Grand Jury Prize", "CPH:DOX — Best Nordic Film"],
  },
  {
    id: 2,
    slug: "conversations-at-dusk",
    title: "Conversations at Dusk",
    year: "2023",
    category: "Short Film",
    image: "/images/film-2.jpg",
    heroImage: "/images/film-2.jpg",
    logline: "Two strangers meet in a restaurant and share the stories they've never told anyone else.",
    synopsis: "Over the course of a single evening in Copenhagen, two strangers find themselves seated at adjacent tables in a nearly empty restaurant. What begins as polite small talk evolves into something deeper—a raw exchange of regrets, dreams, and the roads not taken. By the time the night ends, both will leave forever changed.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "24 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Writer", name: "Clara Vestergaard" },
      { role: "Producer", name: "David Peter Hansen" },
      { role: "Cinematographer", name: "Nina Køster" },
      { role: "Editor", name: "David Peter Hansen" },
      { role: "Lead", name: "Sidse Babett Knudsen" },
      { role: "Lead", name: "Pilou Asbæk" },
    ],
    stills: ["/images/film-2.jpg", "/images/film-2-still-2.jpg", "/images/film-2-still-3.jpg"],
    awards: ["Cannes Film Festival — Short Film Palme d'Or Nomination"],
  },
  {
    id: 3,
    slug: "northern-lights",
    title: "Northern Lights",
    year: "2023",
    category: "Documentary",
    image: "/images/film-3.jpg",
    heroImage: "/images/film-3.jpg",
    logline: "A visionary architect's final project becomes a meditation on legacy, light, and the spaces we leave behind.",
    synopsis: "Northern Lights follows legendary Danish architect Jørn Møller as he designs his final building—a cultural center in the Arctic Circle. At 82, facing his own mortality, Møller reflects on a lifetime of creating spaces that shape human experience. The film weaves together his present journey with archival footage spanning six decades of Nordic design.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "96 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Producer", name: "David Peter Hansen" },
      { role: "Producer", name: "Astrid Bergman" },
      { role: "Cinematographer", name: "Erik Holmström" },
      { role: "Editor", name: "Anders Refn" },
      { role: "Composer", name: "Ólafur Arnalds" },
      { role: "Featuring", name: "Jørn Møller" },
    ],
    stills: ["/images/film-3.jpg", "/images/film-3-still-2.jpg", "/images/film-3-still-3.jpg"],
    awards: ["IDFA — Best Nordic Documentary", "Tribeca Film Festival — Official Selection"],
  },
  {
    id: 4,
    slug: "memories-of-tomorrow",
    title: "Memories of Tomorrow",
    year: "2022",
    category: "Feature Film",
    image: "/images/film-4.jpg",
    heroImage: "/images/film-4.jpg",
    logline: "A man with early-onset dementia races to record his memories before they disappear forever.",
    synopsis: "When 58-year-old Henrik is diagnosed with early-onset Alzheimer's, he embarks on a desperate project: recording video messages for his granddaughter, preserving the family stories and wisdom he fears will soon be lost. As his condition progresses, the line between past and present blurs, and Henrik must confront the question of what truly defines who we are.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "134 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Writer", name: "David Peter Hansen" },
      { role: "Writer", name: "Emma Larsson" },
      { role: "Producer", name: "Nordic Film Institute" },
      { role: "Cinematographer", name: "Hoyte van Hoytema" },
      { role: "Editor", name: "Sofia Andersen" },
      { role: "Composer", name: "Max Richter" },
      { role: "Lead", name: "Stellan Skarsgård" },
      { role: "Supporting", name: "Alba August" },
    ],
    stills: ["/images/film-4.jpg", "/images/film-4-still-2.jpg", "/images/film-4-still-3.jpg"],
    awards: ["Berlin Film Festival — Silver Bear", "European Film Awards — Best Actor"],
  },
  {
    id: 5,
    slug: "the-long-road",
    title: "The Long Road",
    year: "2021",
    category: "Commercial",
    image: "/images/film-5.jpg",
    heroImage: "/images/film-5.jpg",
    logline: "Every journey begins with the courage to leave something behind.",
    synopsis: "Commissioned by Volvo for their electric vehicle launch, The Long Road follows a father and daughter on a cross-country journey through Norway's most dramatic landscapes. Shot over two weeks with minimal crew, the film captures authentic moments of connection, wonder, and the quiet magic of the open road.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "3 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Producer", name: "Forsman & Bodenfors" },
      { role: "Cinematographer", name: "Erik Holmström" },
      { role: "Editor", name: "David Peter Hansen" },
      { role: "Composer", name: "Sigur Rós" },
      { role: "Client", name: "Volvo Cars" },
    ],
    stills: ["/images/film-5.jpg", "/images/film-5-still-2.jpg", "/images/film-5-still-3.jpg"],
    awards: ["Cannes Lions — Gold", "D&AD — Yellow Pencil"],
  },
  {
    id: 6,
    slug: "city-of-glass",
    title: "City of Glass",
    year: "2020",
    category: "Short Film",
    image: "/images/film-6.jpg",
    heroImage: "/images/film-6.jpg",
    logline: "In a city that never sleeps, a night owl searches for a connection that feels real.",
    synopsis: "Inspired by Paul Auster's novel, City of Glass reimagines the story for contemporary Copenhagen. Over one sleepless night, a woman wanders through the city's neon-lit streets, bars, and empty public spaces, encountering strangers who each reveal a fragment of a larger mystery. Part tone poem, part existential thriller.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    runtime: "32 min",
    credits: [
      { role: "Director", name: "David Peter Hansen" },
      { role: "Writer", name: "David Peter Hansen" },
      { role: "Producer", name: "Danish Film Institute" },
      { role: "Cinematographer", name: "Nina Køster" },
      { role: "Editor", name: "Sofia Andersen" },
      { role: "Composer", name: "Trentemøller" },
      { role: "Lead", name: "Danica Curcic" },
    ],
    stills: ["/images/film-6.jpg", "/images/film-6-still-2.jpg", "/images/film-6-still-3.jpg"],
    awards: ["Rotterdam Film Festival — Tiger Award Nomination"],
  },
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}

export function getAllFilmSlugs(): string[] {
  return films.map((film) => film.slug);
}
