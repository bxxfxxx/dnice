function initDnice() {
    _.each( dices, function( dice ) {
	addHeader( dice );
	addInput( dice );
	addDice( dice );
	addFooter( dice );
    } );
    enablePlusAndMinus();
    enableMousewhellOnInputs();
    enableReset();
    enableRoll();
    initAudioContext();
}

function addHeader( dice ) {
    var newRow = '<th><img dice="' + dice.max + '" src="img/plus.png" class="plus"/></th>';
    $( '#head' ).append( newRow );
}

function addInput( dice ) {
    var newRow = '<td><input type="text" class="disabled" value="0" dice="' + dice.max + '" disabled/></t>';
    $( '#input' ).append( newRow );
}
function addDice( dice ) {
    var newRow = '<td><img dice="' + dice.max + '" class="dice" src="./img/d' + dice.max + '.png"/></td>';
    $( '#dices-img' ).append( newRow );
}

function addFooter( dice ) {
    var newRow = '<td><img dice="' + dice.max + '" src="img/minus.png" class="minus"/></td>';
    $( '#foot' ).append( newRow );
}

function enablePlusAndMinus() {
    $( '.plus' ).on( 'click', function() {
	var dice = $( this ).attr( 'dice' );
	var val = parseFloat( $( 'input[dice="' + dice + '"' ).val() );
	$( 'input[dice="' + dice + '"' ).val( val + 1 );
    } );

    $( '.minus' ).on( 'click', function() {
	var dice = $( this ).attr( 'dice' );
	var val = parseFloat( $( 'input[dice="' + dice + '"' ).val() );
	$( 'input[dice="' + dice + '"' ).val( val > 0 ? val - 1 : 0 );
    } );
}

function enableMousewhellOnInputs() {
    $( '.dice' ).mousewheel( function( event, delta ) {
	var that = $( event.target );
	var dice = parseFloat( that.attr( 'dice' ) );
	var input = $( 'input[dice="' + dice + '"]' );
	var nextVal = parseFloat( input.val() ) + delta;
	nextVal = nextVal > 0 ? nextVal : 0;
	input.val( nextVal );
    } );
}

function enableRoll() {
    $( '#roll' ).on( 'click', rollDices );
    $( '#roll' ).tooltip({
	placement: ('top'),
	delay: { show: 300, hide: 300 },
	html: 'true',
	title: '<div>click to roll dices !</div>',
	trigger: 'hover'
    });
}

function enableReset() {
    $( '#reset' ).on( 'click', reset );
    $( '#reset' ).tooltip({
	placement: ('top'),
	delay: { show: 300, hide: 300 },
	html: 'true',
	title: '<div>click to reset dices.</div>',
	trigger: 'hover'
    });
}

function initAudioContext(){
    var audioCtx = new AudioContext();
}