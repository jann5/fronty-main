import type { ProductModel } from '@/lib/types';

// ============================================
// 5 MODELI FRONTÓW NAWROT STUDIO
// ============================================

export const MODELS: ProductModel[] = [
    {
        id: 'wisla',
        name: 'Model Wisła',
        code: 'WSL',
        description: 'Płaska tafla podkreślająca naturalny rysunek słojów dębu. Minimalistyczna forma, która pozwala materiałowi mówić samemu za siebie.',
        features: [
            'Dąb naturalny olejowany',
            'Grubość 22mm',
            'Możliwość dopasowania uchwytów',
            'Wykończenie: olej naturalny lub lakier mat'
        ],
        image: '/images/models/wisla_1.png',
        images: [
            '/images/models/wisla_1.png',
            '/images/models/wisla_2.png',
            '/images/models/wisla_3.png',
            '/images/models/wisla_4.png',
            '/images/models/wisla_5.png'
        ],
        basePrice: 450
    },
    {
        id: 'bieszczady',
        name: 'Model Bieszczady',
        code: 'BIE',
        description: 'Front z delikatną ramką obejmującą centralną taflę. Klasyczna elegancja w nowoczesnym wydaniu.',
        features: [
            'Konstrukcja ramka + tafla',
            'Grubość 22mm',
            'Frez wewnętrzny 6mm',
            'Szerokie możliwości personalizacji'
        ],
        image: '/images/models/bieszczady_1.png',
        images: [
            '/images/models/bieszczady_1.png',
            '/images/models/bieszczady_2.png',
            '/images/models/bieszczady_3.png'
        ],
        basePrice: 520
    },
    {
        id: 'tatry',
        name: 'Model Tatry',
        code: 'TAT',
        description: 'Front z pionowymi liniami frezowanymi, tworzącymi subtelny relief. Gra światła i cienia podkreśla strukturę drewna.',
        features: [
            'Frezowanie pionowe 3 linie',
            'Grubość 22mm',
            'Efekt głębi wizualnej',
            'Wykończenie premium'
        ],
        image: '/images/models/tatry_1.png',
        images: [
            '/images/models/tatry_1.png',
            '/images/models/tatry_2.png'
        ],
        basePrice: 580
    },
    {
        id: 'karpaty',
        name: 'Model Karpaty',
        code: 'KAR',
        description: 'Front z poziomą szczelliną-uchwytką biegnącą wzdłuż górnej krawędzi. Funkcjonalność wpisana w design.',
        features: [
            'Zintegrowana uchwytka',
            'Grubość 22mm',
            'Bezuchwytowe rozwiązanie',
            'Linia minimalizmu'
        ],
        image: '/images/models/karpaty_1.png',
        images: ['/images/models/karpaty_1.png'],
        basePrice: 510
    },
    {
        id: 'sudety',
        name: 'Model Sudety',
        code: 'SUD',
        description: 'Front z głębokim frezowaniem pionowym o szerokości 12mm. Wyrazista, rzeźbiarska forma dla odważnych wnętrz.',
        features: [
            'Głębokie frezowanie 12mm',
            'Grubość 24mm',
            'Intensywna gra światła',
            'Statement piece'
        ],
        image: '/images/models/sudety_1.png',
        images: ['/images/models/sudety_1.png'],
        basePrice: 620
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getModelById(id: string): ProductModel | undefined {
    return MODELS.find(model => model.id === id);
}

export function getModelByCode(code: string): ProductModel | undefined {
    return MODELS.find(model => model.code === code);
}
