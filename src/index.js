import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';
import { Arqueiro } from './modules/arqueiro.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';
import { Guerreiro } from './modules/guerreiro.js';

const magaCacia = new Mago('Cacia', 'Fogo', 7, 2);
const guerreiroSamme = new Guerreiro('Samme', 3);
const arqueiroMagoVitor = new ArqueiroMago('Vitor', 7, 'Ar', 4, 5);
const arqueiroMagoThiago = new ArqueiroMago('Thiago', 6, 'Ar', 2, 9);
const arqueiraJenny = new Arqueiro('Jenny', 4);
const arqueiraCarol = new Arqueiro('Carol', 9);
const magaRute = new Mago('Rute', 'Agua', 10, 7);

const personagens = [magaCacia, guerreiroSamme, arqueiroMagoVitor, arqueiroMagoThiago, arqueiraJenny, arqueiraCarol, magaRute];

new PersonagemView(personagens).render();
console.log(Personagem.verificarVencedor(magoAntonio, magaJulia));
