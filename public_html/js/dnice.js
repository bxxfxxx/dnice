$( document ).ready( function( ) {
    initDnice( );
} );
function reset( ) {
    $( 'input' ).each( function( ) {
	$( this ).val( '0' );
    } );
}

function rollDices( ) {
    var specialRolls = {
	fumble: false,
	critic: false
    };
    $( '#results' ).html( '' );
    $( 'input' ).each( function( ) {
	var nofDices = parseFloat( $( this ).val( ) );
	if ( nofDices > 0 ) {
	    var diceId = parseFloat( $( this ).attr( 'dice' ) );
	    var dice = _.findWhere( dices, { max: diceId } );
	    dice.rolls = new Array( );
	    for ( var i = 0; i < nofDices; i++ ) {
		var roll = Math.floor( Math.random( ) * diceId ) + 1;
		dice.rolls.push( roll );
	    }
	    displayResults( dice, specialRolls );
	}
    } );
    if ( specialRolls.fumbled ) {
	playFumble();
    }
    if ( specialRolls.critic ) {
	playCritic();
    }
}

function displayResults( dice, specialRolls ) {
    var str = '';
    str += 'd' + dice.max + ' rolls : ';
    for ( var i = 0; i < dice.rolls.length; i++ ) {
	
	if ( parseFloat( dice.max ) === 20 && parseFloat( dice.rolls[i] ) === 20 ) {
	    specialRolls.critic = true;
	    str += '<font class="critic">'+dice.rolls[i]+'</font>';
	}
	else if ( parseFloat( dice.max ) === 20 && parseFloat( dice.rolls[i] ) === 1 ) {
	    specialRolls.fumbled = true;
	    str += '<font class="fumbled">'+dice.rolls[i]+'</font>';
	}else{
	    str += dice.rolls[i];
	}
	var showPlus = ( i === 0 && dice.rolls.length > 1 ) || i !== dice.rolls.length - 1;
	if ( showPlus ) {
	    str += ' <i class="glyphicon glyphicon-plus-sign"></i> ';
	}
    }
    str += '<br/>';
    ;
    $( '#results' ).append( str );
}

function playFumble( ) {
    $( '#sounds' ).html( '<audio autoplay id="fumble" src="snd/fumble-short.ogg">< /audio>' );
}

function playCritic( ) {
    $( '#sounds' ).html( '<audio autoplay id="fumble" src="snd/critic.ogg">< /audio>' );
}