// Shop-specific types defined locally to avoid circular dependencies and conflicts with main configurator types.

export type ShopWoodType = 'walnut' | 'oak' | 'maple' | 'sumi';

export interface ProductVariant {
    id: string;
    woodType: ShopWoodType;
    name: string;
    price: number;
    image: string;
}

export interface ShopProduct {
    id: string;
    slug: string;
    name: string;
    description: string;
    basePrice: number;
    collection: 'Tectonic' | 'Geometric' | 'Sumi';
    images: string[];
    variants: ProductVariant[];
    features: string[];
    dimensions: string;
}

export const WOOD_VARIANTS: Record<ShopWoodType, { name: string; color: string; image: string }> = {
    walnut: { name: 'Orzech Amerykański', color: '#5C4033', image: 'https://images.unsplash.com/photo-1620608520261-0738bd8337cb?auto=format&fit=crop&q=80&w=300' }, // Darker, rich walnut
    oak: { name: 'Dąb Naturalny', color: '#C4A484', image: 'https://images.unsplash.com/photo-1549488344-c3059f414d72?auto=format&fit=crop&q=80&w=300' }, // Lighter oak
    maple: { name: 'Klon Kanadyjski', color: '#E3C099', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=300' },
    sumi: { name: 'Sumi (Czarny)', color: '#2A2A2A', image: 'https://images.unsplash.com/photo-1621261352924-1185497926s1?auto=format&fit=crop&q=80&w=300' },
};

export const COLLECTIONS = [
    {
        title: 'Tectonic',
        id: 'Tectonic',
        description: 'Forma inspirowana naturą i rzeźbą CNC. Produkty, które mogły powstać tylko dzięki precyzyjnemu frezowaniu.',
        coverImage: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=1200' // Abstract Topographic Wood
    },
    {
        title: 'Geometric',
        id: 'Geometric',
        description: 'System, modułowość i organizacja. Precyzyjne siatki i idealne dopasowanie w stylu premium.',
        coverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200' // Clean Grid/Organizer
    },
    {
        title: 'Sumi',
        id: 'Sumi',
        description: 'Czerń, ogień, kontrast, cisza. Emocje zaklęte w czernionym drewnie.',
        coverImage: 'https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=1200' // Dark texture / Abstract Black
    },
];

export const SHOP_PRODUCTS: ShopProduct[] = [
    // --- TECTONIC (Organic, Flow, 3D) ---
    {
        id: 'topo-shelf',
        slug: 'tectonic-topo-shelf',
        name: 'Topo Shelf',
        description: 'Półka ścienna z topograficznym frezem. Poziomice rzeźbione jak mapa gór. Tył prosty, front to trójwymiarowa rzeźba. Niewidoczny montaż.',
        basePrice: 1400,
        collection: 'Tectonic',
        dimensions: '100 x 20 x 4 cm',
        features: ['Frez topograficzny CNC', 'Lite drewno', 'Ukryty montaż'],
        images: ['https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1200'], // Wavy wood texture
        variants: [
            { id: 'v-topo-oak', woodType: 'oak', name: 'Dąb', price: 1400, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1200' },
            { id: 'v-topo-walnut', woodType: 'walnut', name: 'Orzech', price: 1600, image: 'https://images.unsplash.com/photo-1620608520261-0738bd8337cb?auto=format&fit=crop&q=80&w=1200' }
        ]
    },
    {
        id: 'contour-panel',
        slug: 'tectonic-contour-panel',
        name: 'Contour Panel',
        description: 'Panel dekoracyjny i akustyczny. Powtarzalny, organiczny wzór z płynnymi przejściami głębokości. Sztuka ścienna tworzona seriami.',
        basePrice: 1800,
        collection: 'Tectonic',
        dimensions: '60 x 120 x 3 cm',
        features: ['Frezowanie 3D', 'Rozpraszanie dźwięku', 'Organiczny wzór'],
        images: ['https://images.unsplash.com/photo-1513264669-8fd9c2184d08?auto=format&fit=crop&q=80&w=1200'], // Abstract waves
        variants: [
            { id: 'v-cp-oak', woodType: 'oak', name: 'Dąb', price: 1800, image: 'https://images.unsplash.com/photo-1513264669-8fd9c2184d08?auto=format&fit=crop&q=80&w=1200' }
        ]
    },
    {
        id: 'rift-tray',
        slug: 'tectonic-rift-tray',
        name: 'Rift Tray',
        description: 'Taca z "pęknięciem". Środek to głęboka szczelina przypominająca uskok tektoniczny. Wygląda drogo, prosta w produkcji, idealna na biurko.',
        basePrice: 320,
        collection: 'Tectonic',
        dimensions: '30 x 15 x 3 cm',
        features: ['Efekt uskoku', 'Precyzyjne CNC', 'Wykończenie premium'],
        images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=1200'], // Wood detail/crack
        variants: [
            { id: 'v-rt-walnut', woodType: 'walnut', name: 'Orzech', price: 320, image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=1200' }
        ]
    },

    // --- GEOMETRIC (Grid, Order, Systems) ---
    {
        id: 'grid-wall',
        slug: 'geo-grid-wall',
        name: 'Grid Wall System',
        description: 'System ściennych paneli z frezowaną siatką. Modułowość w stylu premium. Dokładaj półki, haczyki i kieszenie według własnego uznania.',
        basePrice: 850,
        collection: 'Geometric',
        dimensions: 'Moduł 60 x 60 cm',
        features: ['Modułowa siatka', 'Frezowanie precyzyjne', 'System akcesoriów'],
        images: ['https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=1200'], // Wooden pegboard/Grid
        variants: [
            { id: 'v-gw-ply', woodType: 'oak', name: 'Sklejka Liściasta', price: 850, image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=1200' }
        ]
    },
    {
        id: 'modu-block',
        slug: 'geo-modu-block',
        name: 'Modu Block',
        description: 'Klocki-organizery o identycznym formacie zewnętrznym, ale różnym wnętrzu (okrągłe, kwadratowe, diagonalne). Buduj własny system na biurku.',
        basePrice: 120,
        collection: 'Geometric',
        dimensions: '10 x 10 x 4 cm',
        features: ['Modułowość', 'CNC 2.5D', 'Idealne dopasowanie'],
        images: ['https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1200'], // Geometric wooden modules
        variants: [
            { id: 'v-mb-oak', woodType: 'oak', name: 'Dąb', price: 120, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1200' },
            { id: 'v-mb-maple', woodType: 'maple', name: 'Klon', price: 120, image: 'https://images.unsplash.com/photo-1598300056393-54d614bd7454?auto=format&fit=crop&q=80&w=1200' }
        ]
    },
    {
        id: 'linear-drawer',
        slug: 'geo-linear-drawer',
        name: 'Linear Drawer Insert',
        description: 'Wkłady do szuflad z prostymi frezami i cienkimi przegrodami. Idealne pod standardy IKEA, ale w jakości premium. Minimalne odpady przy produkcji.',
        basePrice: 250,
        collection: 'Geometric',
        dimensions: 'Dopasowane do szuflady',
        features: ['Cienkie ścianki', 'Organizacja szuflad', 'Satynowe wykończenie'],
        images: ['https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200'], // Drawer organizer partition
        variants: [
            { id: 'v-ld-ash', woodType: 'oak', name: 'Jesion', price: 250, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200' }
        ]
    },

    // --- SUMI (Black, Fire, Contrast) ---
    {
        id: 'sumi-block-obj',
        slug: 'sumi-block-object',
        name: 'Sumi Block',
        description: 'Czerniony blok drewna. Prosta bryła z głębokimi, minimalistycznymi frezami. Opalanie i olejowanie tworzy aurę rzemiosła. Statement object.',
        basePrice: 480,
        collection: 'Sumi',
        dimensions: '15 x 15 x 25 cm',
        features: ['Ebonizacja', 'Wykończenie ręczne', 'Unikat'],
        images: ['https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=1200'], // Charred wood texture
        variants: [
            { id: 'v-sb-sumi', woodType: 'sumi', name: 'Sumi', price: 480, image: 'https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=1200' }
        ]
    },
    {
        id: 'void-tray',
        slug: 'sumi-void-tray',
        name: 'Void Tray',
        description: 'Taca z czarną, głęboką kieszenią. Geometria i pustka. Ostre, czyste krawędzie i kontrast światła z cieniem. Wygląda jak eksponat z galerii.',
        basePrice: 380,
        collection: 'Sumi',
        dimensions: '30 x 30 x 4 cm',
        features: ['Głębokie frezowanie', 'Monochrom', 'Idealne krawędzie'],
        images: ['https://images.unsplash.com/photo-1616353071855-2c045c4458ae?auto=format&fit=crop&q=80&w=1200'], // Dark minimal object
        variants: [
            { id: 'v-vt-sumi', woodType: 'sumi', name: 'Sumi', price: 380, image: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?auto=format&fit=crop&q=80&w=1200' }
        ]
    },
    {
        id: 'shadow-panel',
        slug: 'sumi-shadow-panel',
        name: 'Shadow Panel',
        description: 'Panel ścienny z rytmicznymi nacięciami. Proste frezy, gra światła i czernione drewno. CNC 2.5D w służbie nastroju.',
        basePrice: 950,
        collection: 'Sumi',
        dimensions: '50 x 100 x 2.5 cm',
        features: ['Rytmiczny wzór', 'Głęboka czerń', 'Dekoracja ścienna'],
        images: ['https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=1200'], // Dark linear texture
        variants: [
            { id: 'v-sp-sumi', woodType: 'sumi', name: 'Sumi', price: 950, image: 'https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=1200' }
        ]
    }
];
