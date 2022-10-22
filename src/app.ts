// Importáld be a HumanHero és TransformerHero osztályokat.
import {HumanHero} from './hero' ;
import {TransformerHero} from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [
   new HumanHero (1, 'Hero1', 'male', 100, 200),
   new HumanHero(2, 'Hero2', 'male', 300, 400),
   new HumanHero(3, 'Hero3', 'male', 500, 600)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
    new TransformerHero (1, 'Transformer1', 1, 2, 'robot'),
    new TransformerHero(2, 'Transformer2', 4, 5, 'robot'),
    new TransformerHero(3, 'Transformer3', 7, 8, 'robot')
];
