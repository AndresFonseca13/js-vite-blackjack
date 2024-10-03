import _ from 'underscore';

// const miNombre = 'Andres';


/**
 * 
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];

 * @returns {Array<String>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.lenght === 0 ) 
        throw new Error('tiposdeCarta es Obligatorio como un arreglo de String');

    if ( !tiposEspeciales || tiposEspeciales.lenght === 0 ) 
        throw new Error('tiposdeCarta es Obligatorio como un arreglo de String');

    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;